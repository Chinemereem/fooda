import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  SafeAreaView,
  StatusBar,
} from 'react-native';
import {FlexStack} from './View';
import {ClockIcon, CarIcon, ForwardIcon, DeleteIcon} from '../SvgJs/svg';
import {Colors} from '../NewAppScreen';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {RectangleImage, HalfRectangleImage} from '../assets/images';
import {DashFull} from './Dash';
const Bold = props => (
  <Text style={{fontWeight: 'bold'}}>{props.children}</Text>
);

const ModalView = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}>
        <View style={styles.viewStyle}>
          <View
            style={[
              styles.container1,
              {
                flexDirection: 'row',
              },
            ]}>
            <View style={{flex: 1, minWidth: '30%'}}>
              <Bold>624 Maple Ave</Bold>
              <FlexStack style={{marginTop: 20}}>
                <View
                  style={{
                    backgroundColor: Colors.LightYelow,
                    padding: 5,
                    width: '17%',
                    borderRadius: 5,
                  }}>
                  <ClockIcon />
                </View>

                <Text
                  style={{
                    fontWeight: '700',
                    marginLeft: 8,
                  }}>
                  30 mins
                </Text>
              </FlexStack>
            </View>

            <View style={{flex: 2, marginLeft: hp(5)}}>
              <Text>Edit Address</Text>
              <View style={{marginTop: 22}}>
                <Text>624 Maple Ave</Text>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.secViewStyle}>
          <View
            style={[
              styles.container1,
              {
                flexDirection: 'row',
              },
            ]}>
            <Image source={RectangleImage} />
            <View
              style={{
                flex: 1,
                minWidth: '35%',
                marginLeft: 15,
                marginTop: 5,
              }}>
              <Bold>Chicken, Cashew,{'\n'}and Avocado Salad</Bold>
              <Text style={{marginTop: 5}}>The Plant Cafe</Text>
            </View>
            <View style={{flex: 2, marginLeft: hp(2)}}>
              <Text>$15.00 x1</Text>
            </View>
          </View>
        </View>

        <View style={styles.ThirdViewStyle}>
          <View
            style={[
              styles.container1,
              {
                flexDirection: 'row',
              },
            ]}>
            <Image source={HalfRectangleImage} />
            <View
              style={{
                flex: 1,
                minWidth: '35%',

                marginLeft: 18,
                marginTop: 5,
              }}>
              <Bold>Vegan Mac & Cheese</Bold>
              <Text style={{marginTop: 5}}>The Plant Cafe</Text>
            </View>
            <View style={{flex: 2, marginLeft: hp(1), minWidth: '20%'}}>
              <Text>$14.00 x2</Text>
            </View>
            <View style={{flex: 3, marginLeft: hp(7)}}>
              <DeleteIcon />
            </View>
          </View>

          <View
            style={[
              styles.container1,
              {
                flexDirection: 'row',
                marginTop: hp(3),
                marginLeft: 10,
              },
            ]}>
            <View
              style={{
                backgroundColor: Colors.someYellew,
                width: wp(15),
                height: hp(5),
                padding: 10,
                alignItems: 'center',
              }}>
              <CarIcon />
            </View>
            <View style={{flex: 1, minWidth: '35%', marginLeft: 15}}>
              <Bold>Delivery Fee</Bold>
            </View>
            <View style={{flex: 2, marginLeft: hp(4)}}>
              <Text>$2.50</Text>
            </View>
          </View>
        </View>
        <View
          style={[
            styles.container1,
            {
              flexDirection: 'row',
              marginTop: hp(3),
              marginLeft: 2,
            },
          ]}>
          <View style={{flex: 1, minWidth: '35%', marginLeft: 15}}>
            <Text style={{fontSize: 17, fontWeight: '700'}}>Total: $17.50</Text>
          </View>
          <View
            style={{
              flex: 2,
              marginLeft: hp(4),
              backgroundColor: '#31B9CC',
              borderRadius: 6,
              padding: 13,
              alignItems: 'center',
            }}>
            <Text>
              Place Order <ForwardIcon />
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
    width: wp(90),
    height: '100%',
  },
  container1: {
    flex: 1,
  },
  viewStyle: {
    backgroundColor: Colors.DeepYellow,
    height: hp(15),
    width: wp(89),
    marginTop: hp(2),
    padding: hp(4),
    borderRadius: 5,
  },
  secViewStyle: {
    height: hp(15),
    width: wp(89),
    marginTop: hp(3),
  },
  ThirdViewStyle: {
    marginTop: hp(3),
    marginLeft: -10,
  },
});
export default ModalView;
