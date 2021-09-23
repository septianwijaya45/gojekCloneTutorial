import React from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';

const GoBannerFeature = props => {
  return (
    <View style={{padding: 16, paddingTop: 0}}>
      <View style={{position: 'relative'}}>
        <Image
          source={props.imgBanner}
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
        <View
          style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            width: '100%',
            flexDirection: 'row',
            alignItems: 'center',
            paddingHorizontal: 16,
            paddingBottom: 16,
          }}>
          <View>
            <Text
              style={{
                fontSize: 18,
                fontWeight: 'bold',
                color: 'white',
                marginBottom: 8,
              }}>
              {props.title}
            </Text>
            <Text
              style={{
                fontSize: 12,
                fontWeight: '500',
                color: 'white',
              }}>
              {props.description}
            </Text>
          </View>
          <View
            style={{
              flex: 1,
              paddingLeft: 12,
            }}>
            {/* Button Custom */}
            <TouchableOpacity
              style={{
                backgroundColor: '#61A756',
                paddingVertical: 11,
                paddingHorizontal: 12,
                alignSelf: 'stretch',
                borderRadius: 4,
              }}>
              <Text
                style={{
                  fontSize: 12,
                  fontWeight: 'bold',
                  color: 'white',
                  textAlign: 'center',
                  alignItems: 'center',
                }}>
                GET VOUCHER
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      {/* Line Buttom */}
      <View
        style={{
          borderBottomColor: '#61A756',
          borderBottomWidth: 1,
          paddingHorizontal: 12,
          marginTop: 12,
        }}></View>
    </View>
  );
};

export default GoBannerFeature;
