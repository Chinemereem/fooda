import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
  Image,
} from 'react-native';
import {FlexStack} from './View';
import {ClockIcon, CarIcon, XIcon, SearchIcon} from '../SvgJs/svg';
import {Colors} from '../NewAppScreen';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {RectangleImage} from '../assets/images';
import {DashFull} from './Dash';
const Bold = props => (
  <Text style={{fontWeight: 'bold'}}>{props.children}</Text>
);

const ModalView = () => {
  return (
    <ImageBackground>
      <TouchableOpacity>
        <View style={styles.viewStyle}>
          <View
            style={[
              styles.container,
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

                <Bold
                  style={{
                    backgroundColor: 'red',
                    marginRight: 50,
                  }}>
                  30 mins
                </Bold>
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
              styles.container,
              {
                flexDirection: 'row',
              },
            ]}>
            <Image source={RectangleImage} />
            <View
              style={{flex: 1, minWidth: '35%', marginLeft: 15, marginTop: 5}}>
              <Bold>Chicken, Cashew,{'\n'}and Avocado Salad</Bold>
              <Text style={{marginTop: 5}}>The Plant Cafe</Text>
            </View>
            <View style={{flex: 2, marginLeft: hp(4)}}>
              <Text>$15.00 x1</Text>
            </View>
          </View>

          <View
            style={[
              styles.container,
              {
                flexDirection: 'row',
                marginTop: hp(10),
              },
            ]}>
            <CarIcon />
            <View style={{flex: 1, minWidth: '35%', marginLeft: 15}}>
              <Bold>Delivery Fee</Bold>
            </View>
            <View style={{flex: 2, marginLeft: hp(4)}}>
              <Text>$2.50</Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  viewStyle: {
    backgroundColor: Colors.DeepYellow,
    height: hp(15),
    width: wp(89),
    marginTop: hp(10),
    padding: hp(4),
    borderRadius: 5,
  },
  secViewStyle: {
    height: hp(15),
    width: wp(89),
    marginTop: hp(3),

    borderRadius: 5,
  },
});
export default ModalView;
