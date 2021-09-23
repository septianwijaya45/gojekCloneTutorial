import React from 'react';
import {View, Text, TouchableOpacity, Image} from 'react-native';

const GoNewsFeature = props => {
  return (
    <View style={{paddingTop: 16, paddingHorizontal: 16}}>
      <View style={{position: 'relative'}}>
        <Image
          source={props.imgNews}
          style={{height: 170, width: '100%', borderRadius: 6}}
        />
        <View
          style={{
            width: '100%',
            height: '100%',
            position: 'absolute',
            top: 0,
            left: 0,
            backgroundColor: 'black',
            opacity: 0.4,
            borderRadius: 6,
          }}></View>
        <View
          style={{
            height: 15,
            width: 60,
            position: 'absolute',
            top: 16,
            left: 16,
          }}>
          <Image
            source={props.imgLogo}
            style={{
              width: undefined,
              height: '100%',
              resizeMode: 'contain',
              flex: 1,
            }}
          />
        </View>
      </View>
      <View
        style={{
          paddingTop: 16,
          paddingBottom: 20,
          borderBottomColor: '#E8E9ED',
          borderBottomWidth: 1,
        }}>
        <Text style={{fontSize: 16, fontWeight: 'bold', color: '#1C1C1C'}}>
          {props.type}
        </Text>
        <Text style={{fontSize: 14, fontWeight: '500', color: '#7A7A7A'}}>
          {props.title}
        </Text>
        {/* Button Custom */}
        <TouchableOpacity
          style={{
            backgroundColor: '#61A756',
            paddingVertical: 11,
            paddingHorizontal: 12,
            alignSelf: 'flex-end',
            borderRadius: 4,
          }}>
          <Text
            style={{
              fontSize: 13,
              fontWeight: 'bold',
              color: 'white',
              textAlign: 'center',
            }}>
            READ
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default GoNewsFeature;
