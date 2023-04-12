import { View, Text, Alert } from "react-native";
import React from "react";
import {
  Box,
  Icon,
  Input,
  Pressable,
  ScrollView,
  VStack,
  Select,
  CheckIcon,
  Checkbox,
  Button,
} from "native-base";
import AuthHeader from "../components/AuthHeader";
import { Controller, useForm } from "react-hook-form";
import { FontAwesome, MaterialIcons } from "@expo/vector-icons";

interface FormProps {
  firstName: string;
  lastName: string;
  phoneNumber: string;
  email: string;
  password: string;
  hearFrom: string;
}

const FormDefValue: FormProps = {
  firstName: "",
  lastName: "",
  phoneNumber: "",
  email: "",
  password: "",
  hearFrom: "",
};

export default function SignUp({ navigation }) {
  const [showPassword, setShowPassword] = React.useState(false);

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormProps>({
    defaultValues: {
      ...FormDefValue,
    },
  });

  const onSubmit = (values) => Alert.alert(JSON.stringify(values));

  return (
    <Box bgColor={"#fff"} safeArea>
      <ScrollView mx={3} bgColor={"#fff"}>
        <AuthHeader />

        <Text className='text-2xl text-bold'>Create An Account</Text>

        <VStack space={4}>
          <Box>
            <Text>
              First Name <Text className='text-red-500'>*</Text>
            </Text>
            <Controller
              name='firstName'
              rules={{ required: true }}
              control={control}
              render={({ field: { onChange, onBlur, value } }) => (
                <Input
                  value={value}
                  type='text'
                  onChangeText={onChange}
                  onBlur={onBlur}
                  placeholder='First Name'
                />
              )}
            />
            {errors.firstName && (
              <>
                <Text className='text-red-500'>Required</Text>
              </>
            )}
          </Box>

          <Box>
            <Text>
              Last Name <Text className='text-red-500'>*</Text>
            </Text>
            <Controller
              name='lastName'
              rules={{ required: true }}
              control={control}
              render={({ field: { onChange, onBlur, value } }) => (
                <Input
                  value={value}
                  type='text'
                  onChangeText={onChange}
                  onBlur={onBlur}
                  placeholder='Last Name'
                />
              )}
            />
            {errors.lastName && (
              <>
                <Text className='text-red-500'>Required</Text>
              </>
            )}
          </Box>

          <Box>
            <Text>
              Phone Number <Text className='text-red-500'>*</Text>
            </Text>
            <Controller
              name='phoneNumber'
              rules={{ required: true }}
              control={control}
              render={({ field: { onChange, onBlur, value } }) => (
                <Input
                  value={value}
                  type='text'
                  onChangeText={onChange}
                  onBlur={onBlur}
                  placeholder='Phone Number'
                />
              )}
            />
            {errors.phoneNumber && (
              <>
                <Text className='text-red-500'>Required</Text>
              </>
            )}
          </Box>

          <Box>
            <Text>
              Email <Text className='text-red-500'>*</Text>
            </Text>
            <Controller
              name='email'
              rules={{ required: true, pattern: /^\S+@\S+$/i }}
              control={control}
              render={({ field: { onChange, onBlur, value } }) => (
                <Input
                  value={value}
                  type='text'
                  onChangeText={onChange}
                  onBlur={onBlur}
                  placeholder='example@gmail.com'
                  InputLeftElement={
                    <Icon
                      as={
                        <MaterialIcons name='email' size={24} color='black' />
                      }
                      ml={2}
                    />
                  }
                />
              )}
            />
            {errors.email?.type === "required" && (
              <>
                <Text className='text-red-500'>Required</Text>
              </>
            )}
            {errors.email?.type === "pattern" && (
              <>
                <Text className='text-red-500'>Email not correct</Text>
              </>
            )}
          </Box>

          <Box>
            <Text>
              Password <Text className='text-red-500'>*</Text>
            </Text>
            <Controller
              name='password'
              rules={{ required: true }}
              control={control}
              render={({ field: { onChange, onBlur, value } }) => (
                <Input
                  value={value}
                  type={showPassword ? "text" : "password"}
                  placeholder='Password'
                  onChangeText={onChange}
                  onBlur={onBlur}
                  InputLeftElement={
                    <Icon
                      as={<FontAwesome name='lock' size={24} color='black' />}
                      ml={2}
                    />
                  }
                  InputRightElement={
                    <Pressable onPress={() => setShowPassword(!showPassword)}>
                      <Icon
                        as={
                          <MaterialIcons
                            name={
                              showPassword ? "visibility" : "visibility-off"
                            }
                          />
                        }
                        mr={2}
                        size={5}
                      />
                    </Pressable>
                  }
                />
              )}
            />
            {errors.password && (
              <>
                <Text className='text-red-500'>Password Required</Text>
              </>
            )}
          </Box>

          <Box>
            <Select
              minWidth='200'
              accessibilityLabel='Choose Service'
              placeholder='Choose Service'
              _selectedItem={{
                bg: "teal.600",
                endIcon: <CheckIcon size='5' />,
              }}
              mt={1}
            >
              {[
                { label: "Family/Friend", value: "family" },
                { label: "Google", value: "google" },
                { label: "Internet Ad", value: "internet" },
                { label: "Tiktok", value: "tiktok" },
                { label: "Instagram", value: "instagram" },
                { label: "Facebook", value: "facebook" },
                { label: "Twitter", value: "twitter" },
              ].map((item, ind) => (
                <Select.Item label={item.label} value={item.value} />
              ))}
            </Select>
          </Box>

          <Checkbox value='one' my={2}>
            By signing up, I agree to SavetoBuy’s Terms and Conditions of Use
          </Checkbox>
          <Button
            mt={6}
            onPress={handleSubmit(onSubmit)}
            className='bg-[rgb(0_173_238)]'
          >
            Create Account
          </Button>
        </VStack>

        <Text>
          Have an account?{" "}
          <Text onPress={() => navigation.navigate("SignIn")}>Log in</Text>
        </Text>
      </ScrollView>
    </Box>
  );
}
