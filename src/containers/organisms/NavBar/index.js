import {useNavigation} from '@react-navigation/core';
import React from 'react';
import {View, Text} from 'react-native';
import NavbarIcon from '../../../components/molecules/NavbarIcon';

const Navbar = () => {
  const navigation = useNavigation();
  return (
    <View style={{height: 54, flexDirection: 'row'}}>
      <NavbarIcon
        title="Home"
        img={require('../../../assets/icon/home-active.png')}
        tekan={() => {
          navigation.navigate('Home');
        }}
      />
      <NavbarIcon
        title="Orders"
        img={require('../../../assets/icon/order.png')}
        tekan={() => {
          navigation.navigate('Orders');
        }}
      />
      <NavbarIcon title="Help" img={require('../../../assets/icon/help.png')} />
      <NavbarIcon
        title="Inbox"
        img={require('../../../assets/icon/inbox.png')}
      />
      <NavbarIcon
        title="Account"
        img={require('../../../assets/icon/account.png')}
      />
    </View>
  );
};

export default Navbar;
