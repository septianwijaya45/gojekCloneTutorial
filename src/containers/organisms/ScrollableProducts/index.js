import React from 'react';
import {View, Text, Image, ScrollView} from 'react-native';
import ScrollableItemFeature from '../../../components/molecules/ScrollableItem';

const ScrollableProducts = () => {
  return (
    <View>
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
            marginLeft: 16,
          }}
        />
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginBottom: 16,
          paddingHorizontal: 16,
        }}>
        <Text style={{fontSize: 17, fontWeight: 'bold', color: '#1C1C1C'}}>
          Nearby Restaurants
        </Text>
        <Text style={{fontSize: 17, fontWeight: 'bold', color: '#61A756'}}>
          See All
        </Text>
      </View>
      <ScrollView horizontal style={{paddingLeft: 16}}>
        <ScrollableItemFeature
          title="Sederhana Minang"
          img={require('../../../assets/dummy/go-food-kfc.jpg')}
        />
        <ScrollableItemFeature
          title="Terang Bulan"
          img={require('../../../assets/dummy/go-food-banka.jpg')}
        />
        <ScrollableItemFeature
          title="Mie Ayam"
          img={require('../../../assets/dummy/go-food-gm.jpg')}
        />
        <ScrollableItemFeature
          title="Martabak Merah"
          img={require('../../../assets/dummy/go-food-orins.jpg')}
        />
        <ScrollableItemFeature
          title="Ayam Geprek Pak Boss"
          img={require('../../../assets/dummy/go-food-pak-boss.jpg')}
        />
      </ScrollView>
      {/* Line Buttom */}
      <View
        style={{
          borderBottomColor: '#61A756',
          borderBottomWidth: 1,
          paddingHorizontal: 12,
          marginTop: 12,
          marginHorizontal: 16,
          marginBottom: 20,
        }}></View>
    </View>
  );
};

export default ScrollableProducts;
