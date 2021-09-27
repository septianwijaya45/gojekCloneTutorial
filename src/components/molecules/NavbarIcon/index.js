import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';

const NavbarIcon = props => {
  return (
    <TouchableOpacity
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
      }}
      onPress={props.tekan}>
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
    </TouchableOpacity>
  );
};

export default NavbarIcon;
