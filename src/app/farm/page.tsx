"use client";
import { useState } from "react";
import {
  Button,
  Text,
  Flex,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  Input,
  Box,
} from "@chakra-ui/react";

export default function Farm() {
  const mockFarms = [
    {
      name: "BEAM",
      img: "",
      earned: "-",
      stake: "-",
      dailyRate: "0.00102",
      totalStakedLiquidity: "$141M",
    },
    {
      name: "BEAM",
      img: "",
      earned: "-",
      stake: "-",
      dailyRate: "0.00102",
      totalStakedLiquidity: "$141M",
    },
  ];

  const [selectedFarm, setSelectedFarm] = useState<any>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleDepositClick = (farm: any) => {
    setSelectedFarm(farm);
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
    setSelectedFarm(null);
  };

  return (
    <Flex direction="column" align="center">
      <Text my={8}>Deposit to earn points</Text>

      {mockFarms.map((farm, index) => (
        <Flex
          key={index}
          w="95%"
          h={20}
          mx="auto"
          align="center"
          justify="space-between"
          borderTop="1px solid #454545"
          borderBottom="1px solid #454545"
        >
          <Text px={8}>{farm.name}</Text>
          <Flex direction="column">
            <Text fontSize="2xs">Earned</Text>
            <Text>{farm.earned}</Text>
          </Flex>
          <Flex direction="column">
            <Text fontSize="2xs">My Stake</Text>
            <Text>{farm.stake}</Text>
          </Flex>
          <Flex direction="column">
            <Text fontSize="2xs">Daily Rate</Text>
            <Text>{farm.dailyRate}</Text>
          </Flex>
          <Flex direction="column">
            <Text fontSize="2xs">Total Staked Liquidity</Text>
            <Text>{farm.totalStakedLiquidity}</Text>
          </Flex>
          <Button borderRadius="3xl" onClick={() => handleDepositClick(farm)}>
            Deposit
          </Button>
        </Flex>
      ))}

      <Modal isOpen={isModalOpen} onClose={handleModalClose}>
        <ModalOverlay backdropFilter="blur(3px)" />
        <ModalContent bgColor="#171717" color="#fff" borderRadius="3xl">
          <ModalHeader mx="auto">{selectedFarm?.name}</ModalHeader>
          <ModalCloseButton />
          <ModalBody p={8}>
            <Flex direction="column">
              <Flex direction="column" py={4}>
                <Text fontSize="2xs" color="#A2A2A2">
                  Total Staked Liquidity
                </Text>
                <Text>{selectedFarm?.totalStakedLiquidity}</Text>
              </Flex>

              <Flex direction="column" py={4}>
                <Text fontSize="2xs" color="#A2A2A2">
                  Daily Rate (ZP per dollar per day)
                </Text>
                <Text>{selectedFarm?.dailyRate}</Text>
              </Flex>

              <Flex direction="column" gap={4}>
                <Flex direction="column" gap={2}>
                  <Text fontSize="2xs" color="#A2A2A2">
                    Deposit
                  </Text>
                  <Box position="relative" w="100%">
                    <Input
                      type="number"
                      borderRadius="2xl"
                      placeholder="Amount"
                      h="50px"
                      borderColor="#454545"
                      paddingBottom="16px"
                      _hover={{
                        borderColor: "#4ae292", // Border color on hover
                      }}
                      _focus={{
                        boxShadow: "none",
                        borderColor: "#4ae292", // Border color on hover
                      }}
                      zIndex={1}
                    />
                    <Text
                      position="absolute"
                      bottom="4px"
                      left="16px"
                      fontSize="xs"
                      color="gray.500"
                    >
                      $3,280.20
                    </Text>
                    <Text
                      position="absolute"
                      bottom="20px"
                      right="10px"
                      fontSize="md"
                      color="white"
                    >
                      BEAM
                    </Text>
                    <Flex position="absolute" bottom="5px" right="10px" gap={2}>
                      <Text fontSize="xs" color="gray.500">
                        Balance: 0($0)
                      </Text>
                      <Text
                        fontSize="xs"
                        color="#4ae292"
                        cursor="pointer"
                        zIndex={2}
                      >
                        Max
                      </Text>
                    </Flex>
                  </Box>
                </Flex>

                <Input
                  placeholder="Boost your deposit to earn additional tokens"
                  sx={{
                    "::placeholder": {
                      fontSize: "xs",
                    },
                  }}
                  borderRadius="xl"
                  borderColor="#454545"
                />
                <Input
                  placeholder="Basic usage"
                  sx={{
                    "::placeholder": {
                      fontSize: "xs",
                    },
                  }}
                  borderRadius="xl"
                  borderColor="#454545"
                />
              </Flex>
            </Flex>
            {/* <Text>
              Are you sure you want to deposit to {selectedFarm?.name}?<br />
              <strong>Earned:</strong> {selectedFarm?.earned}
              <br />
              <strong>My Stake:</strong> {selectedFarm?.stake}
              <br />
              <strong>Daily Rate:</strong> {selectedFarm?.dailyRate}
              <br />
              <strong>Total Staked Liquidity:</strong>{" "}
              {selectedFarm?.totalStakedLiquidity}
            </Text> */}
          </ModalBody>
        </ModalContent>
      </Modal>
    </Flex>
  );
}
