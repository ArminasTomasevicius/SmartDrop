import { Flex, Link, Text } from "@chakra-ui/react";
import { useAccount } from "wagmi";

export default function Navbar({}: {}) {
  const { isConnected, address } = useAccount();

  const shortenAddress = (address: string) => {
    if (!address || address.length !== 42) {
      throw new Error("Invalid address length");
    }

    return `${address.slice(0, 6)}****${address.slice(-4)}`;
  };

  return isConnected ? (
    <Flex
      w="95%"
      h={20}
      mx="auto"
      align="center"
      justify="space-between"
      borderTop="1px solid #454545"
      borderBottom="1px solid #454545"
    >
      <Text px={8}>{shortenAddress(address!)}</Text>
      <Flex gap={8} p={8}>
        <Link href="/" color="white">
          Home
        </Link>
        <Link href="/farm" color="white">
          Farm
        </Link>
        <Link href="/leaderbord" color="white">
          Leaderbord
        </Link>
      </Flex>
      <Text px={8} fontWeight="bold">
        SMARTDROP
      </Text>
    </Flex>
  ) : (
    <Flex
      w="95%"
      h={20}
      mx="auto"
      align="center"
      justify="space-between"
      borderTop="1px solid #454545"
      borderBottom="1px solid #454545"
    >
      <Text px={8} fontWeight="bold">
        SMARTDROP
      </Text>
      <Flex gap={8} p={8}>
        <Text>Users online: 213</Text>
        <Text>Total Users: 30,738</Text>
        <Text>Total Value Locked: $302M</Text>
      </Flex>
    </Flex>
  );
}
