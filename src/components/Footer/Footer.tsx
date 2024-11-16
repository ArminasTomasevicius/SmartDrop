import { Flex, Text } from "@chakra-ui/react";

export default function Footer({}: {}) {
  return (
    <Flex
      as="footer"
      w="95%"
      h={5}
      align="center"
      justify="space-between"
      borderTop="1px solid #454545"
      borderBottom="1px solid #454545"
      py={5}
      mx="auto"
      my={8}
    >
      <Text px={8}>SMARTDROP</Text>
      <Text px={8}>2024</Text>
    </Flex>
  );
}
