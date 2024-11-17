import { HardhatUserConfig, vars } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import dotenv from "dotenv";

dotenv.config();

const config: HardhatUserConfig = {
  solidity: "0.8.27",
  networks: {
    sepolia: {
      url: "https://ethereum-sepolia-rpc.publicnode.com",
      accounts: [process.env.PRIVATE_KEY!],
    },
    scroll: {
      url: "https://scroll-sepolia-rpc.publicnode.com",
      accounts: [process.env.PRIVATE_KEY!],
    },
    base: {
      url: "https://base-sepolia-rpc.publicnode.com",
      chainId: 84532,
      accounts: [process.env.PRIVATE_KEY!],
    },
    linea: {
      url: "https://linea-sepolia-rpc.publicnode.com",
      accounts: [process.env.PRIVATE_KEY!],
    },
    unichain: {
      url: "https://sepolia.unichain.org",
      accounts: [process.env.PRIVATE_KEY!],
    },
    zircuit: {
      url: "https://zircuit1-testnet.p2pify.com",
      accounts: [process.env.PRIVATE_KEY!],
    },
  },
  etherscan: {
    apiKey: {
      sepolia: process.env.SEPOLIA_RPC_URL ?? "placeholder",
      scroll: process.env.SCROLLSCAN_API_KEY ?? "placeholder",
      base: process.env.BASESCAN_API_KEY ?? "placeholder",
      linea: process.env.LINEASCAN_API_KEY ?? "placeholder",
      unichain: "placeholder",
      zircuit: process.env.ZIRCUIT_API_KEY ?? "placeholder",
    },
    customChains: [
      {
        network: "scroll",
        chainId: 534351,
        urls: {
          apiURL: "https://api-sepolia.scrollscan.com/api",
          browserURL: "https://sepolia.scrollscan.com",
        },
      },
      {
        network: "linea",
        chainId: 59141,
        urls: {
          apiURL: "https://api-sepolia.lineascan.build/api",
          browserURL: "https://sepolia.lineascan.build",
        },
      },
      {
        network: "unichain",
        chainId: 1301,
        urls: {
          apiURL: "https://unichain-sepolia.blockscout.com/api",
          browserURL: "https://unichain-sepolia.blockscout.com",
        },
      },
      {
        network: "zircuit",
        chainId: 48899,
        urls: {
          apiURL:
            "https://explorer.testnet.zircuit.com/api/contractVerifyHardhat",
          browserURL: "https://explorer.testnet.zircuit.com",
        },
      },
    ],
  },
};

export default config;