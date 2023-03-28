import { View, Text } from 'react-native'
import React from 'react'
import { useTailwind } from 'tailwind-rn/dist';

type Props = {
  order: Order
};

const DeliveryCard = ({order}: Props) => {
  const tw = useTailwind();
  
  return (
    <View>
      <Text>DeliveryCard</Text>
    </View>
  )
}

export default DeliveryCard;