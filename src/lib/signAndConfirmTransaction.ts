import { Connection, clusterApiUrl } from "@solana/web3.js";
import getProvider from "./getProvider";
import getVersionedTransaction from "./getVersionedTransaction";

const signAndConfirmTransaction = async (network, transaction) => {
  const provider = getProvider(); // see "Detecting the Provider"
  const xKey = process.env.NEXT_PUBLIC_API_KEY.toString();
  const rpcUrl = network === "mainnet-beta" ? `https://rpc.shyft.to?api_key=${xKey}` : clusterApiUrl(network as any);
  // const rpcUrl = clusterApiUrl(network as any)
  const connection = new Connection(rpcUrl, "confirmed");

  const versionedTransaction = getVersionedTransaction(transaction)

  const { signature } = await provider.signAndSendTransaction(versionedTransaction);
  return await connection.getSignatureStatus(signature);
}

export default signAndConfirmTransaction