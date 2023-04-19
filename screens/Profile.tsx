import React from "react";
import {
  Avatar,
  Box,
  Center,
  Divider,
  Flex,
  HStack,
  Heading,
  Image,
  Text,
  ScrollView,
  Container,
  Link,
} from "native-base";
import MasterCardSvg from "../components/svg/MasterCardSVG";
import { MaterialIcons } from "@expo/vector-icons";

export default function Profile() {
  return (
    <ScrollView>
      <Box safeArea={3} className='bg-[#f6fafd] h-full mb-5 '>
        <Box className='mt-5 space-y-6'>
          <Center className='gap-2'>
            <Avatar size='2xl'>JF</Avatar>
            <Text fontWeight={"bold"} fontSize={"xl"}>
              Jome Favourite
            </Text>
            <Link className='no-underline text-mainBlue'>Edit Profile</Link>
          </Center>

          <Box>
            <Heading size='md'>BVN Verification Status</Heading>
            <Box className='flex flex-row gap-2'>
              <Text>Verified </Text>
              <MaterialIcons name='verified' size={20} color='#00ee8a' />
            </Box>
          </Box>
        </Box>

        <Box className='space-y-6 mt-6'>
          <Box className='space-y-4'>
            <Flex flexDir={"row"} className='items-end gap-2'>
              <Heading size='md' fontWeight={500} className='text-[#a6b4c4]'>
                PERSONAL DETAILS
              </Heading>
              <Divider />
            </Flex>
            <Box>
              <Heading size='sm'>Phone Number</Heading>
              <Text>08076434322</Text>
            </Box>
            <Box>
              <Heading size='sm'>Email</Heading>
              <Text>jfjomefavourite@gmail.com</Text>
            </Box>
            <Box>
              <Heading size='sm'>Birthday</Heading>
              <Text>28 June </Text>
            </Box>
            <Box>
              <Heading size='sm'>Next of Kin Full Name</Heading>
              <Text>Jome Godey</Text>
            </Box>
            <Box>
              <Heading size='sm'>Next of Kin Phone</Heading>
              <Text>08076434322</Text>
            </Box>
            <Box>
              <Heading size='sm'>Next of Kin Relationship</Heading>
              <Text>Father</Text>
            </Box>
          </Box>

          <Box className='space-y-4'>
            <Flex flexDir={"row"} className='items-end gap-2'>
              <Heading size='md' fontWeight={500} className='text-[#a6b4c4]'>
                TRANSACTION DETAILS
              </Heading>
              <Divider />
            </Flex>

            <Box>
              <Heading size='sm' className='mb-3'>
                Card Details
              </Heading>

              <Box bgColor={"#fff"} className='#fff p-4'>
                <HStack
                  alignItems={"center"}
                  className='justify-between gap-4  rounded-sm'
                >
                  <Box>
                    <MasterCardSvg />
                  </Box>
                  <Box>
                    <Heading size='xs'>CARD NUMBER</Heading>
                    <Text>5399 XXXX XXXX 7020</Text>
                  </Box>
                  <Box>
                    <Heading size='xs'>EXPIRY</Heading>
                    <Text>07/2025</Text>
                  </Box>
                </HStack>
                <Heading size='sm'>FAVOURITE OGHENENYERHOVWO JOME</Heading>
              </Box>

              <Text
                fontWeight={"md"}
                className='text-mainBlue font-medium mt-2'
              >
                Change Card
              </Text>
            </Box>
          </Box>
        </Box>
      </Box>
    </ScrollView>
  );
}
