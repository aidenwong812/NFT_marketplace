import { useState } from "react";
import { Connection, PublicKey, clusterApiUrl } from "@solana/web3.js";
import { PhantomWalletAdapter } from "@solana/wallet-adapter-phantom";
import cluster from "cluster";

const useWalletData = () => {
  const [network, setNetwork] = useState("devnet");
  const [walletID, setWalletID] = useState("");
  const [connStatus, setConnStatus] = useState(false);

  const solanaConnect = async () => {
    const { solana } = window as any;
    if (!solana) {
      alert("Please Install Solana");
    }

    try {
      const phantom = new PhantomWalletAdapter();
      await phantom.connect();
      const rpcUrl = clusterApiUrl(network as any);
      const connection = new Connection(rpcUrl, "confirmed");
      const wallet = {
        address: phantom.publicKey!.toString(),
      };

      if (wallet.address) {
        setWalletID(wallet.address);
        const accountInfo = await connection.getAccountInfo(new PublicKey(wallet.address), "confirmed");
        console.log(accountInfo);
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
  }
}

export default useWalletData