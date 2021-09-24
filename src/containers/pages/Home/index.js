import React from 'react';
import {View, Text, ScrollView, Alert} from 'react-native';
import GoBannerFeature from '../../../components/molecules/GoBanner';
import GoInfoFeature from '../../../components/molecules/GoInfo';
import GoNewsFeature from '../../../components/molecules/GoNews';
import SearchFeature from '../../../components/molecules/Search';
import HomeGoPay from '../../../containers/organisms/HomeGoPay';
import HomeMainFeature from '../../../containers/organisms/HomeMainFeature';
import Navbar from '../../../containers/organisms/NavBar';
import ScrollableProducts from '../../../containers/organisms/ScrollableProducts';

const Home = ({navigation}) => {
  return (
    <View style={{flex: 1}}>
      <ScrollView style={{flex: 1, backgroundColor: '#ffffff'}}>
        {/* Search Bar Content */}
        <SearchFeature />
        {/* Gopay */}
        <HomeGoPay />
        {/* Main Feature */}
        <HomeMainFeature />
        {/* News Section */}
        <GoNewsFeature
          type="GO-NEWS"
          title="Egy Maulana Fikry, MOTM dengan rating 8.5"
          imgNews={require('../../../assets/dummy/sepak-bola.jpg')}
          imgLogo={require('../../../assets/logo/white.png')}
          tekan={() => navigation.navigate('NewsDetail')}
        />
        {/* Information Section */}
        <GoInfoFeature
          title="Connect with Facebook"
          description="Login faster without verification code"
          imgConnect={require('../../../assets/dummy/facebook-connect.png')}
        />
        {/* Banner Section */}
        <GoBannerFeature
          title="Free GO-FOOD vouchers"
          description="Quick, before they run out!"
          imgBanner={require('../../../assets/dummy/food-banner.jpg')}
          imgLogo={require('../../../assets/logo/white.png')}
        />
        {/* Horizontal Scroll (Go food Nearby Section) */}
        <ScrollableProducts />
      </ScrollView>
      {/* Navbar Navigation */}
      <Navbar />
    </View>
  );
};

export default Home;
