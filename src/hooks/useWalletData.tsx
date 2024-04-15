import { useEffect, useState } from "react";
import { PhantomWalletAdapter } from "@solana/wallet-adapter-phantom";

const useWalletData = () => {
  const [network, setNetwork] = useState("mainnet-beta");
  const [walletID, setWalletID] = useState("");
  const [connStatus, setConnStatus] = useState(false);
  const [selectedNFT, setSelectedNFT] = useState({});

  useEffect(() => {
    solanaConnect()
  }, [])

  const solanaConnect = async () => {
    const { solana } = window as any;
    if (!solana) {
      alert("Please Install Solana");
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
    }
    catch (err) {
      console.log(err);
    }
  }

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
  }
}

export default useWalletData