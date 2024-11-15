import ConnectWalletButton from "@/components/ConnectWalletButton/ConnectWalletButton";
import UnauthorizedNavbar from "@/components/UnauthorizedNavbar/UnauthorizedNavbar";
import { Box } from "@chakra-ui/react";

export default function Home() {
  return (
    <Box w="100vw" h="100vh" pt={5} bg="black" color="white">
      <UnauthorizedNavbar />
      <ConnectWalletButton />
    </Box>
  );
}
