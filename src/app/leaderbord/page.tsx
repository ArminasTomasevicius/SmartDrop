import { chakra, Flex, Input, Text } from "@chakra-ui/react";

export default function Leaderbord() {
  const leaderbord = [
    {
      name: "amacaseybae",
      points: "0.00102",
    },
    {
      name: "amacaseybae",
      points: "0.00102",
    },
    {
      name: "amacaseybae",
      points: "0.00102",
    },
    {
      name: "amacaseybae",
      points: "0.00102",
    },
    {
      name: "amacaseybae",
      points: "0.00102",
    },
    {
      name: "amacaseybae",
      points: "0.00102",
    },
    {
      name: "amacaseybae",
      points: "0.00102",
    },
    {
      name: "amacaseybae",
      points: "0.00102",
    },
    {
      name: "amacaseybae",
      points: "0.00102",
    },
    {
      name: "amcaseybae",
      points: "0.00102",
    },
  ];
  return (
    <Flex direction="column" align="center" mt={16}>
      <Text fontSize="4xl" fontWeight="bold">
        LEADERBORD
      </Text>
      <Text>You are rank 0 in total of 31,694 unique farmers.</Text>
      <Input
        placeholder="Search.."
        type="text"
        w="100%"
        maxW="300px"
        my={8}
        borderRadius="2xl"
        borderColor="#454545"
        _placeholder={{
          color: "#A2A2A2",
        }}
        _hover={{
          borderColor: "#4ae292",
        }}
        _focus={{
          boxShadow: "none",
          borderColor: "#4ae292",
        }}
      />

      <Flex direction="column">
        {leaderbord.map((user, index) => (
          <Flex
            borderTop="1px solid #454545"
            borderBottom="1px solid #454545"
            p={4}
          >
            <Text mr={4}>{index + 1}</Text>
            <Text mr={64}>{user.name}</Text>
            <Text>{user.points}</Text>
          </Flex>
        ))}
      </Flex>
    </Flex>
  );
}
