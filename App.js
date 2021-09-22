import React from 'react';
import {
  Button,
  Image,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const App = () => {
  return (
    <View style={{flex: 1}}>
      <ScrollView style={{flex: 1}}>
        {/* Search Bar Content */}
        <View
          style={{marginHorizontal: 17, marginTop: 10, flexDirection: 'row'}}>
          <View style={{position: 'relative', flex: 1}}>
            <TextInput
              value="What do you want to eat?"
              style={{
                borderWidth: 1,
                borderColor: '#EBE8E8',
                borderRadius: 25,
                height: 40,
                fontSize: 13,
                paddingLeft: 45,
                paddingRight: 20,
                backgroundColor: 'white',
                marginRight: 18,
              }}
            />
            <Image
              source={require('./icon/search.png')}
              style={{position: 'absolute', top: 5, left: 12}}
            />
          </View>
          <View
            style={{width: 35, alignItems: 'center', justifyContent: 'center'}}>
            <Image source={require('./icon/promo.png')} />
          </View>
        </View>
        {/* Gopay */}
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
            <Image source={require('./icon/gopay.png')} />
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
            <View style={{flex: 1, alignItems: 'center'}}>
              <Image source={require('./icon/pay.png')} />
              <Text
                style={{
                  fontSize: 13,
                  fontWeight: 'bold',
                  color: 'white',
                  marginTop: 15,
                }}>
                Pay
              </Text>
            </View>
            <View style={{flex: 1, alignItems: 'center'}}>
              <Image source={require('./icon/nearby.png')} />
              <Text
                style={{
                  fontSize: 13,
                  fontWeight: 'bold',
                  color: 'white',
                  marginTop: 15,
                }}>
                Nearby
              </Text>
            </View>
            <View style={{flex: 1, alignItems: 'center'}}>
              <Image source={require('./icon/topup.png')} />
              <Text
                style={{
                  fontSize: 13,
                  fontWeight: 'bold',
                  color: 'white',
                  marginTop: 15,
                }}>
                TopUp
              </Text>
            </View>
            <View style={{flex: 1, alignItems: 'center'}}>
              <Image source={require('./icon/more.png')} />
              <Text
                style={{
                  fontSize: 13,
                  fontWeight: 'bold',
                  color: 'white',
                  marginTop: 15,
                }}>
                More
              </Text>
            </View>
          </View>
        </View>
        {/* Main Feature */}
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
            <View style={{width: '25%', alignItems: 'center'}}>
              <View
                style={{
                  width: 58,
                  height: 58,
                  borderWidth: 1,
                  borderColor: '#EFEFEF',
                  borderRadius: 18,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Image source={require('./icon/go-ride.png')} />
              </View>
              <Text
                style={{
                  fontSize: 11,
                  fontWeight: 'bold',
                  textAlign: 'center',
                  marginTop: 6,
                }}>
                GO-RIDE
              </Text>
            </View>
            {/* Go Car */}
            <View style={{width: '25%', alignItems: 'center'}}>
              <View
                style={{
                  width: 58,
                  height: 58,
                  borderWidth: 1,
                  borderColor: '#EFEFEF',
                  borderRadius: 18,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Image source={require('./icon/go-car.png')} />
              </View>
              <Text
                style={{
                  fontSize: 11,
                  fontWeight: 'bold',
                  textAlign: 'center',
                  marginTop: 6,
                }}>
                GO-CAR
              </Text>
            </View>
            {/* Go Blue Bird */}
            <View style={{width: '25%', alignItems: 'center'}}>
              <View
                style={{
                  width: 58,
                  height: 58,
                  borderWidth: 1,
                  borderColor: '#EFEFEF',
                  borderRadius: 18,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Image source={require('./icon/go-bluebird.png')} />
              </View>
              <Text
                style={{
                  fontSize: 11,
                  fontWeight: 'bold',
                  textAlign: 'center',
                  marginTop: 6,
                }}>
                GO-BLUEBIRD
              </Text>
            </View>
            {/* Go Send */}
            <View style={{width: '25%', alignItems: 'center'}}>
              <View
                style={{
                  width: 58,
                  height: 58,
                  borderWidth: 1,
                  borderColor: '#EFEFEF',
                  borderRadius: 18,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Image source={require('./icon/go-send.png')} />
              </View>
              <Text
                style={{
                  fontSize: 11,
                  fontWeight: 'bold',
                  textAlign: 'center',
                  marginTop: 6,
                }}>
                GO-SEND
              </Text>
            </View>
          </View>
          {/* Second Button Menu */}
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              width: '100%',
              marginBottom: 18,
            }}>
            {/* Go-Deal */}
            <View style={{width: '25%', alignItems: 'center'}}>
              <View
                style={{
                  width: 58,
                  height: 58,
                  borderWidth: 1,
                  borderColor: '#EFEFEF',
                  borderRadius: 18,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Image source={require('./icon/go-deals.png')} />
              </View>
              <Text
                style={{
                  fontSize: 11,
                  fontWeight: 'bold',
                  textAlign: 'center',
                  marginTop: 6,
                }}>
                GO-DEAL
              </Text>
            </View>
            {/* Go-Pulsa */}
            <View style={{width: '25%', alignItems: 'center'}}>
              <View
                style={{
                  width: 58,
                  height: 58,
                  borderWidth: 1,
                  borderColor: '#EFEFEF',
                  borderRadius: 18,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Image source={require('./icon/go-pulsa.png')} />
              </View>
              <Text
                style={{
                  fontSize: 11,
                  fontWeight: 'bold',
                  textAlign: 'center',
                  marginTop: 6,
                }}>
                GO-PULSA
              </Text>
            </View>
            {/* Go-Food */}
            <View style={{width: '25%', alignItems: 'center'}}>
              <View
                style={{
                  width: 58,
                  height: 58,
                  borderWidth: 1,
                  borderColor: '#EFEFEF',
                  borderRadius: 18,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Image source={require('./icon/go-food.png')} />
              </View>
              <Text
                style={{
                  fontSize: 11,
                  fontWeight: 'bold',
                  textAlign: 'center',
                  marginTop: 6,
                }}>
                GO-FOOD
              </Text>
            </View>
            {/* Mode */}
            <View style={{width: '25%', alignItems: 'center'}}>
              <View
                style={{
                  width: 58,
                  height: 58,
                  borderWidth: 1,
                  borderColor: '#EFEFEF',
                  borderRadius: 18,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Image source={require('./icon/go-more.png')} />
              </View>
              <Text
                style={{
                  fontSize: 11,
                  fontWeight: 'bold',
                  textAlign: 'center',
                  marginTop: 6,
                }}>
                MORE
              </Text>
            </View>
          </View>
        </View>
        {/* Line Section */}
        <View
          style={{
            height: 17,
            backgroundColor: '#F2F2F4',
            marginTop: 20,
          }}></View>
        {/* News Section */}
        <View style={{paddingTop: 16, paddingHorizontal: 16}}>
          <View style={{position: 'relative'}}>
            <Image
              source={require('./dummy/sepak-bola.jpg')}
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
                source={require('./logo/white.png')}
                style={{width: undefined, height: '100%', resizeMode: 'contain', flex: 1}}
              />
            </View>
          </View>
          <View style={{paddingTop: 16, paddingBottom: 20, borderBottomColor: '#E8E9ED', borderBottomWidth: 1, marginBottom: 20}}>
            <Text style={{fontSize: 16, fontWeight: 'bold', color: '#1C1C1C'}}>
              GO-NEWS
            </Text>
            <Text style={{fontSize: 14, fontWeight: '500', color: '#7A7A7A'}}>
              Kanjeng Dimas Selamatkan Pinalti
            </Text>
            {/* Button Custom */}
            <TouchableOpacity style={{backgroundColor: '#61A756', paddingVertical:11, paddingHorizontal: 12, alignSelf: 'flex-end', borderRadius: 4, marginBottom: 16}}>
              <Text style={{fontSize: 13, fontWeight: 'bold', color: 'white', textAlign: 'center'}}>READ</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
      <View style={{height: 54, flexDirection: 'row'}}>
        <View
          style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: 'white',
          }}>
          <Image
            source={require('./icon/home-active.png')}
            style={{width: 26, height: 26, color: '#43AB4A'}}
          />
          <Text style={{fontSize: 10, color: '#545454', marginTop: 4}}>
            Home
          </Text>
        </View>
        <View
          style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: 'white',
          }}>
          <Image
            source={require('./icon/order.png')}
            style={{width: 26, height: 26}}
          />
          <Text style={{fontSize: 10, color: '#545454', marginTop: 4}}>
            Orders
          </Text>
        </View>
        <View
          style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: 'white',
          }}>
          <Image
            source={require('./icon/help.png')}
            style={{width: 26, height: 26}}
          />
          <Text style={{fontSize: 10, color: '#545454', marginTop: 4}}>
            Help
          </Text>
        </View>
        <View
          style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: 'white',
          }}>
          <Image
            source={require('./icon/inbox.png')}
            style={{width: 26, height: 26}}
          />
          <Text style={{fontSize: 10, color: '#545454', marginTop: 4}}>
            Inbox
          </Text>
        </View>
        <View
          style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: 'white',
          }}>
          <Image
            source={require('./icon/account.png')}
            style={{width: 26, height: 26}}
          />
          <Text style={{fontSize: 10, color: '#545454', marginTop: 4}}>
            Account
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({});

export default App;
