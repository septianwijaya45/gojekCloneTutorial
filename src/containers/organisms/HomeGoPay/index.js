import React from 'react';
import {View, Text, Image} from 'react-native';
import GopayFeature from '../../../components/molecules/Gopay';

const HomeGoPay = () => {
  return (
    <View
      style={{
        marginHorizontal: 17,
        marginVertical: 15,
      }}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          backgroundColor: '#2C5FB8',
          padding: 16,
          borderTopLeftRadius: 4,
          borderTopRightRadius: 4,
        }}>
        <Image source={require('../../../assets/icon/gopay.png')} />
        <Text style={{fontSize: 17, fontWeight: 'bold', color: '#ffffff'}}>
          Rp 60.000
        </Text>
      </View>
      <View
        style={{
          flexDirection: 'row',
          paddingTop: 20,
          paddingBottom: 14,
          backgroundColor: '#2F65BD',
          borderBottomRightRadius: 4,
          borderBottomLeftRadius: 4,
        }}>
        <GopayFeature
          img={require('../../../assets/icon/pay.png')}
          title="Pay"
        />
        <GopayFeature
          img={require('../../../assets/icon/nearby.png')}
          title="Nearby"
        />
        <GopayFeature
          img={require('../../../assets/icon/topup.png')}
          title="TopUp"
        />
        <GopayFeature
          img={require('../../../assets/icon/more.png')}
          title="More"
        />
      </View>
    </View>
  );
};

export default HomeGoPay;
