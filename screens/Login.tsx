import { View, Text, Alert } from "react-native";
import React from "react";
import AuthHeader from "../components/AuthHeader";
import {
  Box,
  Button,
  FormControl,
  Icon,
  Input,
  Pressable,
  VStack,
} from "native-base";
import { MaterialIcons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { useForm, Controller } from "react-hook-form";

export default function Login({ navigation }) {
  const [showPassword, setShowPassword] = React.useState(false);
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<{ email: string; password: string }>({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = (data) => {
    Alert.alert(JSON.stringify(data));
  };

  return (
    <Box px={3} bgColor={"#fff"} flex={1} safeArea>
      <View className='bg-white'>
        <AuthHeader />
        <Text className='text-4xl'>Welcome!</Text>

        <VStack space={4}>
          {/* <FormControl isRequired w='100%'>
            <FormControl.Label>Email</FormControl.Label> */}
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
        </VStack>

        <Button
          mt={6}
          onPress={handleSubmit(onSubmit)}
          className='bg-[rgb(0_173_238)]'
        >
          SIgn In
        </Button>

        <Box mt={3}>
          <Text>Forgot Password?</Text>
          <Text>
            Don't Have an Account?{" "}
            <Text className='' onPress={() => navigation.navigate("SignUp")}>
              Create One
            </Text>
          </Text>
        </Box>
      </View>
    </Box>
  );
}
