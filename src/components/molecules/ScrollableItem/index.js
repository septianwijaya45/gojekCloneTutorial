import React from 'react';
import {View, Text, Image} from 'react-native';

const ScrollableItemFeature = props => {
  return (
    <View style={{marginRight: 16}}>
      <View
        style={{
          width: 150,
          height: 150,
          borderRadius: 10,
        }}>
        <Image
          source={props.img}
          style={{
            width: undefined,
            height: undefined,
            resizeMode: 'contain',
            flex: 1,
            resizeMode: 'cover',
            borderRadius: 4,
          }}
        />
      </View>
      <Text
        style={{
          fontSize: 16,
          fontWeight: 'bold',
          color: '#1C1C1C',
          marginTop: 12,
          width: '70%',
        }}>
        {props.title}
      </Text>
    </View>
  );
};

export default ScrollableItemFeature;
