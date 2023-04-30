import React from "react";
import { Box, Button, Heading, Pressable, ScrollView, Text } from "native-base";
import { Entypo } from "@expo/vector-icons";
import WalletHistory from "../components/WalletHistory";
import ProgressSaving from "../components/ProgressSaving";
import Example from "../components/Testing";
import PrimaryButton from "../components/PrimaryButton";
import SavingSVG from "../components/svg/SavingSVG";
import { Ionicons } from "@expo/vector-icons";
import { Link } from "@react-navigation/native";

export default function Home({ navigation }) {
  const [showAmount, setShowAmount] = React.useState(false);

  return (
    <ScrollView>
      <Box safeArea={3} className='h-full space-y-8 bg-[#f6fafd]'>
        <Box className='mt-5 flex flex-row items-center justify-between'>
          <Heading>Start Saving</Heading>
          <PrimaryButton
            leftIcon={<Ionicons name='add-circle' size={24} color='#fff' />}
            onPress={() => navigation.navigate("FinancialGoal")}
          >
            New Saving
          </PrimaryButton>
        </Box>

        <Box className='space-y-2 rounded-xl border border-gray-400 p-3'>
          <Box className='flex-row justify-between font-medium '>
            <Text fontWeight='medium' className='text-gray-500'>
              Interest Rate
            </Text>
            <Text fontWeight='medium' className='text-gray-500'>
              Your Total Savings
            </Text>
          </Box>
          <Box className='flex-row items-center justify-between'>
            <Heading size={"md"}>Up to 15% p/a</Heading>
            <Box className='flex flex-row items-center gap-2'>
              <Heading size={"lg"}>
                {showAmount ? "₦ 5,000" : "******"}{" "}
              </Heading>

              <Pressable onPress={() => setShowAmount(!showAmount)}>
                <Entypo
                  name={showAmount ? "eye" : "eye-with-line"}
                  size={24}
                  color='#00adee'
                />
              </Pressable>
            </Box>
          </Box>

          <Text className='text-mainBlue'>Manage Interest Settings</Text>
        </Box>

        <Box className='space-y-5 rounded-2xl bg-[#031e45] p-3'>
          <Box>
            <Text className='font-ka text-primary-3 text-sm text-gray-400'>
              WALLET BALANCE
            </Text>

            <Box className='mt-2'>
              <Heading className='text-white blur-md'>₦100.00</Heading>
            </Box>
          </Box>

          <Box className='flex-row justify-between gap-2 px-2'>
            <PrimaryButton cname='flex-1'>Fund Wallet</PrimaryButton>
            <Button
              variant={"ghost"}
              fontWeight={"bold"}
              className='flex-1 font-bold text-white'
            >
              Withdraw Funds
            </Button>
          </Box>
        </Box>

        {/* <Example /> */}

        <Box>
          <WalletHistory />
        </Box>

        <Box>
          <ProgressSaving />
        </Box>
      </Box>
    </ScrollView>
  );
}
