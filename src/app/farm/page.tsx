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
  Slider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
  SliderMark,
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

  const [sliderValue, setSliderValue] = useState(50);

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
              <Flex direction="column" gap={8}>
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
                      zIndex={1}
                    />
                    <Text
                      position="absolute"
                      bottom="4px"
                      left="16px"
                      fontSize="xs"
                      color="#A2A2A2"
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
                      <Text fontSize="xs" color="#A2A2A2">
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

                <Flex
                  direction="column"
                  w="100%"
                  border="1px solid #454545"
                  borderRadius="2xl"
                  p={2}
                >
                  <Text fontSize="xs" color="#A2A2A2">
                    Boost allocation
                  </Text>

                  {/* Slider */}
                  <Box py={6}>
                    <Slider
                      aria-label="slider-ex-6"
                      onChange={(val) => setSliderValue(val)}
                      pt={8}
                    >
                      <SliderMark
                        value={sliderValue}
                        textAlign="center"
                        fontSize="xs"
                        bg="#fff"
                        color="#000"
                        mt="-10"
                        ml="-5"
                        w="10"
                      >
                        {sliderValue}%
                      </SliderMark>
                      <SliderTrack>
                        <SliderFilledTrack bg="#4ae292" />
                      </SliderTrack>
                      <SliderThumb />
                    </Slider>
                    <Flex justify="space-between">
                      <Text fontSize="xs" mt="-5">
                        1%
                      </Text>
                      <Text fontSize="xs" mt="-5">
                        100%
                      </Text>
                    </Flex>
                  </Box>

                  <Flex justify="space-between" fontSize="xs" py={1}>
                    <Text color="#A2A2A2">Principal Stake</Text>
                    <Text>1,620,000 S</Text>
                  </Flex>

                  <Flex justify="space-between" fontSize="xs" py={1}>
                    <Text color="#A2A2A2">Virtual Stake</Text>
                    <Text>1,900,000 vS (380,000 x 5)</Text>
                  </Flex>

                  <Flex justify="space-between" fontSize="xs" py={1}>
                    <Text color="#A2A2A2">Total Stake</Text>
                    <Text>3,520,000 S</Text>
                  </Flex>
                </Flex>

                <Flex
                  w="100%"
                  border="1px solid #454545"
                  borderRadius="2xl"
                  p={2}
                  justify="space-between"
                  fontSize="xs"
                >
                  <Text color="#A2A2A2">Expected Reward Earned Daily</Text>
                  <Text fontSize="sm">3.255</Text>
                </Flex>

                <Button borderRadius="2xl">Approve</Button>
              </Flex>
            </Flex>
          </ModalBody>
        </ModalContent>
      </Modal>
    </Flex>
  );
}
