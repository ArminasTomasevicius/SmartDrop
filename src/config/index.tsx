import "@rainbow-me/rainbowkit/styles.css";
import {
  mainnet,
  lineaTestnet,
  zircuitTestnet,
  unichainSepolia,
  scrollSepolia,
  sepolia,
} from "@wagmi/core/chains";
import { http, createConfig } from "@wagmi/core";

if (!process.env.NEXT_PUBLIC_PROJECT_ID) {
  throw new Error("Project ID not defined");
}

export const wagmiCoreConfig = createConfig({
  chains: [
    mainnet,
    lineaTestnet,
    zircuitTestnet,
    unichainSepolia,
    scrollSepolia,
  ],
  transports: {
    [mainnet.id]: http(),
    [lineaTestnet.id]: http(),
    [zircuitTestnet.id]: http(),
    [unichainSepolia.id]: http(),
    [scrollSepolia.id]: http(),
    [sepolia.id]: http("https://eth-sepolia.blockscout.com/api/eth-rpc"),
  },
});

export const projectId = process.env.NEXT_PUBLIC_PROJECT_ID;

if (!projectId) {
  throw new Error("Project ID is not defined");
}

export const CONTRACT_ADDRESS = `0xC6b69d83DB6d40B3b644436E3A36252801fc0f64`;
