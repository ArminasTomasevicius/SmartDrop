"use client";

import { wagmiCoreConfig } from "@/config";
import { ChakraProvider } from "@chakra-ui/react";
import { RainbowKitProvider } from "@rainbow-me/rainbowkit";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import React, { type ReactNode } from "react";
import { WagmiProvider } from "wagmi";

function ContextProvider({ children }: { children: ReactNode }) {
  const queryClient = new QueryClient();

  return (
    <ChakraProvider>
      <WagmiProvider config={wagmiCoreConfig}>
        <QueryClientProvider client={queryClient}>
          <RainbowKitProvider>{children}</RainbowKitProvider>
        </QueryClientProvider>
      </WagmiProvider>
    </ChakraProvider>
  );
}

export default ContextProvider;
