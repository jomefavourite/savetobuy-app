import React from "react";
import { Box, Button, Heading, Pressable, ScrollView, Text } from "native-base";
import { Entypo } from "@expo/vector-icons";

export default function Home() {
  const [showAmount, setShowAmount] = React.useState(false);

  return (
    <ScrollView>
      <Box safeArea={3} className='bg-[#f6fafd] h-full mb-5 space-y-6'>
        <Box className='flex flex-row justify-between'>
          <Heading>Start Saving</Heading>
          <Button className='bg-mainBlue'>New Saving</Button>
        </Box>

        <Box className='border p-3 rounded-lg border-gray-400 space-y-2'>
          <Box className='flex-row justify-between font-medium '>
            <Text fontWeight='medium'>Interest Rate</Text>
            <Text fontWeight='medium'>Your Total Savings</Text>
          </Box>
          <Box className='flex-row justify-between'>
            <Heading size={"lg"}>Up to 15% p/a</Heading>
            <Box className='flex flex-row gap-2 items-center'>
              <Heading size={"lg"}>₦ 5,000</Heading>

              <Pressable onPress={() => setShowAmount(!showAmount)}>
                <Entypo
                  name={showAmount ? "eye" : "eye-with-line"}
                  size={24}
                  color='black'
                />
              </Pressable>
            </Box>
          </Box>

          <Text className='text-mainBlue'>Manage Interest Settings</Text>
        </Box>

        <Box className='bg-[#031e45] p-3 rounded-2xl space-y-5'>
          <Box>
            <Text className='font-Beautiste text-sm text-primary-3 text-gray-400'>
              WALLET BALANCE
            </Text>

            <Box className='mt-2'>
              <Heading className='text-white blur-md'>₦100.00</Heading>
            </Box>
          </Box>

          <Box className='flex-row justify-between gap-2'>
            <Button
              fontWeight={"bold"}
              className='text-base flex-1 py-3 bg-primary-4 text-white hover:bg-primary-5 hover:text-white text-[18px] font-Karla rounded-lg transition duration-300 font-bold'
            >
              Fund Wallet
            </Button>
            <Button
              variant={"ghost"}
              fontWeight={"lg"}
              className='flex-1 font-bold'
            >
              Withdraw Funds
            </Button>
          </Box>
        </Box>
      </Box>
    </ScrollView>
  );
}
