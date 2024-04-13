"use client"

import { createContext, useContext, useMemo } from "react"
import useWalletData from "@/hooks/useWalletData"

const WalletContext = createContext(null)

const WalletProvider = ({ children }: { children: React.ReactNode }) => {
  const walletData = useWalletData()

  const value = useMemo(
    () => ({
      ...walletData,
    }),
    [walletData],
  )

  return <WalletContext.Provider value={value}>{children}</WalletContext.Provider>
}

export const useWallet = () => {
  const context = useContext(WalletContext)
  if (!context) {
    throw new Error("useWallet must be used within a WalletProvider")
  }
  return context
}

export default WalletProvider
