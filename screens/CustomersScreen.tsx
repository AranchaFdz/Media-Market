import { Text, ScrollView, ActivityIndicator } from 'react-native';
import React, { useLayoutEffect, useState } from 'react';
import { useTailwind } from "tailwind-rn/dist";
import { CompositeNavigationProp, useNavigation } from '@react-navigation/native';
import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import { TabStackParamList } from '../navigator/TabNavigator';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamsList } from '../navigator/RootNavigator';
import { Image, Input } from '@rneui/themed';

export type CustomersScreenNavigationProp = CompositeNavigationProp<
  BottomTabNavigationProp<TabStackParamList, "Customers">,
  NativeStackNavigationProp<RootStackParamsList>
>;

const CustomersScreen = () => {
  const tw = useTailwind();
  const navigation = useNavigation<CustomersScreenNavigationProp>();
  const [input, setInput] = useState<string>("");

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  }, []);

  return (
    <ScrollView style={{ backgroundColor: "#59C1CC"}}>
      <Image 
      source={{ uri: "https://links.papareact.com/3jc" }} 
      containerStyle={tw("w-full h-56")}
      PlaceholderContent={<ActivityIndicator />}
      />

      <Input 
        placeholder="Search by Customer" 
        value={input} 
        onChangeText={setInput} 
        containerStyle={tw("bg-white pt-5 pb-0 px-5")}
      />
    </ScrollView>
  );
};

export default CustomersScreen  