import "@rainbow-me/rainbowkit/styles.css";
import { getDefaultConfig } from "@rainbow-me/rainbowkit";
import {
  mainnet,
  lineaTestnet,
  zircuitTestnet,
  unichainSepolia,
  scrollSepolia,
} from "wagmi/chains";

if (!process.env.NEXT_PUBLIC_PROJECT_ID) {
  throw new Error("Project ID not defined");
}
export const config = getDefaultConfig({
  appName: "SmartDrop",
  projectId: process.env.NEXT_PUBLIC_PROJECT_ID,
  chains: [
    mainnet,
    lineaTestnet,
    zircuitTestnet,
    unichainSepolia,
    scrollSepolia,
  ],
  ssr: true,
});

export const projectId = process.env.NEXT_PUBLIC_PROJECT_ID;

if (!projectId) {
  throw new Error("Project ID is not defined");
}
