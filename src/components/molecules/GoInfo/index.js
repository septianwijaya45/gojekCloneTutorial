import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';

const GoInfoFeature = props => {
  return (
    <View style={{padding: 16, paddingBottom: 0}}>
      <View
        style={{
          height: 15,
          width: 60,
        }}>
        <Image
          source={require('../../../assets/logo/gojek.png')}
          style={{
            width: undefined,
            height: '100%',
            resizeMode: 'contain',
            flex: 1,
          }}
        />
      </View>
      <Text
        style={{
          fontSize: 17,
          fontWeight: 'bold',
          color: '#1C1C1C',
          marginTop: 15,
          marginBottom: 20,
        }}>
        Complete your profile
      </Text>
      <View style={{flexDirection: 'row', marginBottom: 16}}>
        <View>
          <Image source={props.imgConnect} />
        </View>
        <View style={{marginLeft: 16, flex: 1}}>
          <Text style={{fontSize: 15, fontWeight: 'bold', color: '#4A4A4A'}}>
            {props.title}
          </Text>
          <Text
            style={{
              fontSize: 15,
              fontWeight: 'normal',
              color: '4A4A4A',
              width: '70%',
            }}>
            {props.description}
          </Text>
        </View>
      </View>
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
          Connect
        </Text>
      </TouchableOpacity>

      <View
        style={{
          borderBottomColor: '#61A756',
          borderBottomWidth: 1,
          paddingHorizontal: 12,
          marginTop: 12,
          marginBottom: 20,
        }}></View>
    </View>
  );
};

export default GoInfoFeature;
