import {
  Box,
  Input,
  ScrollView,
  Text,
  InputGroup,
  InputLeftAddon,
  Divider,
  Switch,
  Tooltip,
  Radio,
  Heading,
  Button,
} from "native-base";
import React from "react";
import { Controller, useForm } from "react-hook-form";
import { MaterialIcons } from "@expo/vector-icons";
import { Alert } from "react-native";
// import RNDateTimePicker from "@react-native-community/datetimepicker";

interface FormProps {
  planName: string;
  targetAmount: string;
}

const FormDefValue: FormProps = {
  planName: "",
  targetAmount: "",
};

function FinancialGoal() {
  const [value, setValue] = React.useState("one");
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormProps>({
    defaultValues: {
      ...FormDefValue,
    },
  });

  const onSubmit = (data) => {
    Alert.alert(data);
  };

  return (
    <ScrollView>
      <Box safeArea={3} className='h-screen space-y-7 bg-[#f6fafd]'>
        <Box className='mt-5 space-y-6'>
          <Box>
            <Text fontWeight={"semibold"} mb={"2"}>
              Plan Name <Text className='text-red-500'>*</Text>
            </Text>
            <Controller
              name='planName'
              rules={{ required: true }}
              control={control}
              render={({ field: { onChange, onBlur, value } }) => (
                <Input
                  value={value}
                  type='text'
                  onChangeText={onChange}
                  onBlur={onBlur}
                  placeholder='Give your savings a name to identify with'
                />
              )}
            />
            {errors.planName && (
              <>
                <Text className='text-red-500'>Required</Text>
              </>
            )}
          </Box>
          <Box>
            <Text fontWeight={"semibold"} mb={"2"}>
              Target Amount <Text className='text-red-500'>*</Text>
            </Text>
            <Controller
              name='targetAmount'
              rules={{ required: true, minLength: 4 }}
              control={control}
              render={({ field: { onChange, onBlur, value } }) => (
                <InputGroup
                  w={{
                    base: "92%",
                    md: "100%",
                  }}
                >
                  <InputLeftAddon children={"₦"} _text={{ color: "#00adee" }} />
                  <Input
                    value={value}
                    type='text'
                    onChangeText={onChange}
                    onBlur={onBlur}
                    placeholder='Give your savings a name to identify with'
                    w={"100%"}
                    keyboardType='numeric'
                  />
                </InputGroup>
              )}
            />
            {errors.targetAmount?.type === "required" && (
              <>
                <Text className='text-red-500'>Required</Text>
              </>
            )}
            {errors.targetAmount?.type === "minLength" && (
              <>
                <Text className='text-red-500'>Please input ₦1000 or more</Text>
              </>
            )}
          </Box>
        </Box>

        <Divider />

        <Box className='space-y-6'>
          <Box className='flex-row items-center'>
            <Switch size='md' />
            <Text className='mr-3'>Automatically Save for Me</Text>
            <Tooltip
              label="Meet your financial goals easily by setting up automatic savings. We will automatically save for you on this day you've selected"
              placement='top'
              openDelay={200}
            >
              <MaterialIcons name='info' size={20} color='black' />
            </Tooltip>
          </Box>

          <Box>
            <Text fontWeight={"semibold"} mb={"2"}>
              Automatic Savings Amount
            </Text>

            <Controller
              name='targetAmount'
              // rules={{ required: true, minLength: 4 }}
              control={control}
              render={({ field: { onChange, onBlur, value } }) => (
                <InputGroup
                  w={{
                    base: "92%",
                    md: "100%",
                  }}
                >
                  <InputLeftAddon children={"₦"} _text={{ color: "#00adee" }} />
                  <Input
                    value={value}
                    type='text'
                    onChangeText={onChange}
                    onBlur={onBlur}
                    placeholder='Amount you want withdrawn regularly'
                    w={"100%"}
                    keyboardType='numeric'
                  />
                </InputGroup>
              )}
            />
          </Box>
          <Box>
            <Text fontWeight={"semibold"} mb={"2"}>
              How often?
            </Text>

            <Box>
              <Radio.Group
                name='howOftenSavings'
                accessibilityLabel='How often for Automatic Savings'
                value={value}
                onChange={(nextValue) => {
                  setValue(nextValue);
                }}
              >
                <Radio value='daily' my={1}>
                  Daily
                </Radio>
                <Radio value='weekly' my={1}>
                  Weekly
                </Radio>
                <Radio value='monthly' my={1}>
                  Monthly
                </Radio>
              </Radio.Group>
            </Box>
          </Box>

          {/* <RNDateTimePicker value={new Date()} mode='date' /> */}

          <Button
            onPress={handleSubmit(onSubmit)}
            className='bg-[rgb(0_173_238)]'
          >
            Start Saving
          </Button>
        </Box>
      </Box>
    </ScrollView>
  );
}

export default FinancialGoal;
