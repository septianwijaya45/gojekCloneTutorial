import React from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';

import GoBannerFeature from './src/components/molecules/GoBanner';
import GoInfoFeature from './src/components/molecules/GoInfo';
import GoNewsFeature from './src/components/molecules/GoNews';
import SearchFeature from './src/components/molecules/Search';
import HomeGoPay from './src/containers/organisms/HomeGoPay';
import HomeMainFeature from './src/containers/organisms/HomeMainFeature';
import Navbar from './src/containers/organisms/NavBar';
import ScrollableProducts from './src/containers/organisms/ScrollableProducts';

const App = () => {
  return (
    <View style={{flex: 1}}>
      <ScrollView style={{flex: 1}}>
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
          imgNews={require('./src/assets/dummy/sepak-bola.jpg')}
          imgLogo={require('./src/assets/logo/white.png')}
        />
        {/* Information Section */}
        <GoInfoFeature
          title="Connect with Facebook"
          description="Login faster without verification code"
          imgConnect={require('./src/assets/dummy/facebook-connect.png')}
        />
        {/* Banner Section */}
        <GoBannerFeature
          title="Free GO-FOOD vouchers"
          description="Quick, before they run out!"
          imgBanner={require('./src/assets/dummy/food-banner.jpg')}
          imgLogo={require('./src/assets/logo/white.png')}
        />
        {/* Horizontal Scroll (Go food Nearby Section) */}
        <ScrollableProducts />
      </ScrollView>
      {/* Navbar Navigation */}
      <Navbar />
    </View>
  );
};

const styles = StyleSheet.create({});

export default App;
