import { Connection, clusterApiUrl } from "@solana/web3.js";
import getProvider from "./getProvider";
import getVersionedTransaction from "./getVersionedTransaction";

const signAndConfirmTransaction = async (network, transaction) => {
  const provider = getProvider(); // see "Detecting the Provider"
  const rpcUrl = clusterApiUrl(network);
  const connection = new Connection(rpcUrl, "confirmed");

  const versionedTransaction = getVersionedTransaction(transaction)
  
  const { signature } = await provider.signAndSendTransaction(versionedTransaction);
  return await connection.getSignatureStatus(signature);
}

export default signAndConfirmTransaction