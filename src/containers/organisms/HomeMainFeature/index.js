import React from 'react';
import {View, Text} from 'react-native';
import MainFeature from '../../../components/molecules/MainFeature';

const HomeMainFeature = () => {
  return (
    <View>
      <View
        style={{
          flexDirection: 'row',
          flexWrap: 'wrap',
          marginTop: 18,
        }}>
        {/* First Button Menu */}
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            width: '100%',
            marginBottom: 18,
          }}>
          {/* Go Ride */}
          <MainFeature
            img={require('../../../assets/icon/go-ride.png')}
            title="GO-RIDE"
          />
          {/* Go Car */}
          <MainFeature
            img={require('../../../assets/icon/go-car.png')}
            title="GO-CAR"
          />
          {/* Go Blue Bird */}
          <MainFeature
            img={require('../../../assets/icon/go-bluebird.png')}
            title="GO-BLUEBIRD"
          />
          {/* Go Send */}
          <MainFeature
            img={require('../../../assets/icon/go-send.png')}
            title="GO-SEND"
          />
        </View>
        {/* Go-Deal */}
        <MainFeature
          img={require('../../../assets/icon/go-deals.png')}
          title="GO-DEAL"
        />
        {/* Go-Pulsa */}
        <MainFeature
          img={require('../../../assets/icon/go-pulsa.png')}
          title="GO-PULSA"
        />
        {/* Go-Food */}
        <MainFeature
          img={require('../../../assets/icon/go-food.png')}
          title="GO-FOOD"
        />
        {/* Mode */}
        <MainFeature
          img={require('../../../assets/icon/go-more.png')}
          title="GO-MORE"
        />
      </View>
      <View
        style={{
          height: 17,
          backgroundColor: '#F2F2F4',
          marginTop: 20,
        }}></View>
    </View>
  );
};

export default HomeMainFeature;
