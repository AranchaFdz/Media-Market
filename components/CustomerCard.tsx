import { View, Text, TouchableOpacity } from 'react-native';
import React from 'react';
import useCustomerOrders from '../hooks/useCustomerOrders';
import { useTailwind } from 'tailwind-rn/dist';
import { useNavigation } from '@react-navigation/native';
import { CustomersScreenNavigationProp } from '../screens/CustomersScreen';
import { Card } from '@rneui/base';

type Props = {
  userId: string;
  name: string;
  email: string;
};

const CustomerCard = ({ email, name, userId }: Props) => {
  const { loading, error, orders  } = useCustomerOrders(userId);
  const tw = useTailwind();
  const navigation = useNavigation<CustomersScreenNavigationProp>();

  return (
    <TouchableOpacity>
      <Card>
        <View></View>
      </Card>
    </TouchableOpacity>
  );
};

export default CustomerCard