import { Button } from "@chakra-ui/react";

export default function ConnectWalletButton({}: {}) {
  return (
    <Button
      bgColor="#4AE292"
      color="#000"
      borderRadius="4xl"
      position="fixed"
      bottom="20px"
      right="20px"
      p={4}
    >
      Connect Wallet
    </Button>
  );
}
