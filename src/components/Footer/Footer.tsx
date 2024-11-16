import { Flex, Text } from "@chakra-ui/react";

export default function Footer({}: {}) {
  return (
    <Flex
      w="95%"
      h={5}
      align="center"
      justify="space-between"
      borderTop="1px solid #454545"
      borderBottom="1px solid #454545"
      position="fixed"
      bottom={5}
      py={5}
      left="50%"
      transform="translateX(-50%)"
    >
      <Text px={8}>SMARTDROP</Text>
      <Text px={8}>2024</Text>
    </Flex>
  );
}
