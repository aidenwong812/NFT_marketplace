import { useEffect, useState } from "react";
import { PhantomWalletAdapter } from "@solana/wallet-adapter-phantom";
import axios from "axios";
import { toast } from "react-toastify";

const useWalletData = () => {
  const networkValue = process.env.NEXT_PUBLIC_NETWORK?.toString() || "devnet";
  const [network, setNetwork] = useState(networkValue);
  const [walletID, setWalletID] = useState("");
  const [connStatus, setConnStatus] = useState(false);
  const [selectedNFT, setSelectedNFT] = useState({});
  const [activeNFTs, setActiveNFTs] = useState([]);

  useEffect(() => {
    solanaConnect();
  }, []);

  useEffect(() => {
    const xKey = process.env.NEXT_PUBLIC_API_KEY.toString();
    const endPoint = process.env.NEXT_PUBLIC_API_ENDPOINT;
    const marketplaceAddress = process.env.NEXT_PUBLIC_MARKETPLACE_ADDRESS;
    const nftUrl = `${endPoint}marketplace/active_listings?network=${network}&marketplace_address=${marketplaceAddress}`;

    axios
      .get(nftUrl, {
        headers: {
          "Content-Type": "application/json",
          "x-api-key": xKey,
        },
      })
      .then((res) => {
        if (res.data.success === true) {
          setActiveNFTs(res.data.result);
        } else {
          setActiveNFTs([]);
          toast.info("No NFTs");
        }
      })
      // Catch errors if any
      .catch((err) => {
        setActiveNFTs([]);
        toast.warning(err.response.data.message);
      });
  }, [walletID])

  const solanaConnect = async () => {
    const { solana } = window as any;
    if (!solana) {
      alert("Please Install Solana Wallet");
    }

    try {
      const phantom = new PhantomWalletAdapter();
      await phantom.connect();
      const wallet = {
        address: phantom.publicKey!.toString(),
      };

      if (wallet.address) {
        setWalletID(wallet.address);
        setConnStatus(true);
      }
    } catch (err) {
      console.log(err);
    }
  };

  return {
    network,
    setNetwork,
    walletID,
    setWalletID,
    connStatus,
    setConnStatus,
    solanaConnect,
    selectedNFT,
    setSelectedNFT,
    activeNFTs,
    setActiveNFTs,
  };
};

export default useWalletData;
