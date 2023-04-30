import { Box, HStack, Heading, Pressable, Text } from "native-base";
import React from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";

const transactions = [
  {
    id: 1,
    trans_name: "Plan Top-Up",
    trans_type: "debit",
    trans_ref: "Ref: svtb-f20budbkz5erqogh6i0lpl",
    amount: "5000",
    time: "15:20",
    date: "01/20/22",
  },
  {
    id: 2,
    trans_name: "Wallet Top-Up",
    trans_type: "credit",
    trans_ref: "Ref: svtb-f20budbkz5erqogh6i0lpl",
    amount: "5000",
    time: "15:20",
    date: "01/20/22",
  },
];

const WalletHistory = () => {
  const [isShown, setIsShown] = React.useState(true);

  return (
    <>
      <Box className='flex-row items-center justify-between'>
        <Heading size='md'>Wallet History</Heading>

        <Pressable className='flex-row' onPress={() => setIsShown(!isShown)}>
          <MaterialIcons
            name={isShown ? "keyboard-arrow-up" : "keyboard-arrow-down"}
            size={24}
            color='#00adee'
            className='bg-mainBlue'
          />
          <Text className='font-bold text-mainBlue'>
            {isShown ? "Hide" : "Show more"}
          </Text>
        </Pressable>
      </Box>

      {isShown && (
        <Box className='space-y-3'>
          {transactions.map((data, i) => (
            <HStack
              key={i}
              className='items-center justify-between border-b border-[#E0E6ED] py-4'
            >
              <Box className='flex-row gap-2'>
                <Box className='rounded-full bg-[#e9f7fd] p-2'>
                  <MaterialCommunityIcons
                    name='arrow-bottom-left-thin'
                    size={24}
                    color={data.trans_type === "debit" ? "red" : "green"}
                  />
                </Box>
                <Box>
                  <Heading size={"sm"}>{data.trans_name}</Heading>
                  <Text className='text-xs'>{data.trans_ref}</Text>
                </Box>
              </Box>
              <Box>
                <Heading
                  fontWeight={400}
                  className={`${
                    data.trans_type === "debit"
                      ? "text-red-500"
                      : "text-green-500"
                  }`}
                >
                  # {data.amount}
                </Heading>
                <Text className='text-xs'>
                  {data.time} - {data.date}
                </Text>
              </Box>
            </HStack>
          ))}
        </Box>
      )}
    </>
  );
};

export default WalletHistory;
