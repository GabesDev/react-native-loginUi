import { View, Text, TouchableOpacity, Image, TextInput, ScrollView } from "react-native"
import React from "react"
import { SafeAreaView } from "react-native-safe-area-context"
import { ArrowLeftIcon } from "react-native-heroicons/solid"
import { useNavigation } from "@react-navigation/native"

export default function LoginScreen() {
  const navigation = useNavigation()
  return (
    <View className="flex-1 bg-default">
      <SafeAreaView className="flex p-4">
        <View className="flex-row justify-start">
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            className="p-2 bg-yellow-400 rounded-tr-2xl rounded-bl-2xl">
            <ArrowLeftIcon size={20} color={"black"} />
          </TouchableOpacity>
        </View>
        <View className="flex-row justify-center">
          <Image
            source={require("../assets/images/login.png")}
            className="w-48 h-48"
          />
        </View>
      </SafeAreaView>
      <ScrollView className="flex-1 px-8 pt-8 bg-white rounded-tr-[50px] rounded-tl-[50px]">
        <View className="space-y-2 form">
          <Text className="mb-3 ml-4 text-gray-700">Email Address</Text>
          <TextInput
            className="p-4 text-gray-700 bg-gray-100 rounded-2xl"
            value="john@gmail.com"
            placeholder="Enter Email"
          />
          <Text className="mb-3 ml-4 text-gray-700">Password</Text>
          <TextInput
            className="p-4 text-gray-700 bg-gray-100 rounded-2xl"
            secureTextEntry
            value="test12345"
            placeholder="Enter Password"
          />
          <TouchableOpacity className="flex items-end mb-5">
            <Text className="to-gray-700">Forgot Password?</Text>
          </TouchableOpacity>
          <TouchableOpacity className="py-3 bg-yellow-400 rounded-xl">
            <Text className="text-xl font-bold text-center text-gray-700">
              Login
            </Text>
          </TouchableOpacity>
        </View>
        <Text className="py-5 text-xl font-bold text-center text-gray-700">
          Or
        </Text>
        <View className="flex-row justify-center space-x-12">
          <TouchableOpacity className="p-2 bg-gray-100 rounded-2xl">
            <Image
              source={require("../assets/icons/google.png")}
              className="w-10 h-10"
            />
          </TouchableOpacity>
          <TouchableOpacity className="p-2 bg-gray-100 rounded-2xl">
            <Image
              source={require("../assets/icons/apple.png")}
              className="w-10 h-10"
            />
          </TouchableOpacity>
          <TouchableOpacity className="p-2 bg-gray-100 rounded-2xl">
            <Image
              source={require("../assets/icons/facebook.png")}
              className="w-10 h-10"
            />
          </TouchableOpacity>
        </View>
        <View className="flex-row justify-center mb-16 mt-7">
          <Text className="font-semibold text-gray-500">Don't have an account?</Text>
          <TouchableOpacity onPress={()=>navigation.navigate('SignUp')}>
            <Text className="font-semibold text-yellow-500"> Sign Up</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  )
}
