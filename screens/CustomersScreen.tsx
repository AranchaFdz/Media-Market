import { Text, SafeAreaView } from 'react-native';
import React from 'react';
import { useTailwind } from "tailwind-rn/dist";

const CustomersScreen = () => {
  const tw = useTailwind
  ();
  return (
    <SafeAreaView>
      <Text style={tw("text-black-500")}>This is the Customers Screen</Text>
    </SafeAreaView>
  )
}

export default CustomersScreen  