import React from 'react';
import {View, Text, Image} from 'react-native';

const NavbarIcon = props => {
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
      }}>
      <Image
        source={props.img}
        style={{width: 26, height: 26, color: '#43AB4A'}}
      />
      <Text
        style={{
          fontSize: 10,
          color: props.active ? '#43AB4A' : '#545454',
          marginTop: 4,
        }}>
        {props.title}
      </Text>
    </View>
  );
};

export default NavbarIcon;
