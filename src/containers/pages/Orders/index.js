import {useNavigation} from '@react-navigation/core';
import React from 'react';
import {View, Text, Button} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import Navbar from '../../organisms/NavBar';

const Orders = () => {
  const navigation = useNavigation();
  return (
    <View style={{flex: 1}}>
      <ScrollView style={{flex: 1}}>
        <Text>Order Page</Text>
        <Button
          title="Detail Orders"
          onPress={() => navigation.navigate('OrderDetail')}
        />
      </ScrollView>
      <Navbar />
    </View>
  );
};

export default Orders;
