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
      left="50%" // Center relative to the viewport
      transform="translateX(-50%)" // Adjust position to center
    >
      <Text px={8}>LOGO</Text>
      <Text px={8}>2024</Text>
    </Flex>
  );
}
