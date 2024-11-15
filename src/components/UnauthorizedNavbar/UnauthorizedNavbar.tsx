import { Flex, Text } from "@chakra-ui/react";

export default function UnauthorizedNavbar({}: {}) {
  return (
    <Flex
      w="95%"
      h={20}
      mx="auto"
      align="center"
      justify="space-between"
      borderTop="1px solid #454545"
      borderBottom="1px solid #454545"
    >
      <Text px={8}>LOGO</Text>
      <Flex gap={8} p={8}>
        <Text>Users online: 213</Text>
        <Text>Total Users: 30,738</Text>
        <Text>Total Value Locked: $302M</Text>
      </Flex>
    </Flex>
  );
}
