"use client";
import { Button } from "@chakra-ui/react";
import { useConnectModal } from "@rainbow-me/rainbowkit";

export default function ConnectWalletButton({}: {}) {
  const { openConnectModal } = useConnectModal();
  return (
    <Button
      bgColor="#4AE292"
      color="#000"
      borderRadius="4xl"
      position="fixed"
      bottom="20px"
      right="20px"
      p={4}
      onClick={openConnectModal}
    >
      Connect Wallet
    </Button>
  );
}
