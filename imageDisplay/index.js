import React from 'react';
import {
  View,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import {EmojiIcon} from '../SvgJs/svg';
import {DoughNut, TofuMeal} from '../assets/images';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {SemiBoldText} from '../Text';
import {Card} from 'react-native-elements';
import * as colors from '../NewAppScreen';
import {FlexStack} from '../orderFood/View';

const FoodCard = ({icon, foodImageBg, onPress, title, style}) => {
  return (
    <TouchableOpacity onPress={onPress} activeOpacity={0.7}>
      {icon}
      <Image
        resizeMode="contain"
        source={foodImageBg}
        style={{alignSelf: 'center'}}
      />
      <SemiBoldText
        title={title}
        color={colors.Black}
        style={styles.SemiTextStyle}
        textAlign="center"
      />
    </TouchableOpacity>
  );
};

const DisplayAnImageWithStyle = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.textStyle}>Lunch Restaraunts Near You</Text>
      <View
        style={[
          {
            flexDirection: 'row',
            justifyContent: 'center',
          },
        ]}>
        <View style={styles.viewStyle}>
          <ImageBackground
            source={TofuMeal}
            style={{width: '100%', height: hp(15)}}>
            <View style={styles.lightTextStyle}>
              <Text style={styles.LtextStyle}>10 miles</Text>
            </View>
          </ImageBackground>

          <Text style={styles.cardStyle}>Noah’s Bagels</Text>
          <Text
            style={{
              color: '#8F9698',
            }}>
            Lunch . American . $$
          </Text>
          <FlexStack>
            <EmojiIcon />
            <Text style={{color: '#31B9CC', marginLeft: 2}}>97%</Text>
          </FlexStack>
        </View>
      </View>

      <View
        style={[
          {
            flexDirection: 'row',
            justifyContent: 'center',
          },
        ]}>
        <View
          style={[
            styles.viewStyle,
            {
              marginTop: hp(3),
            },
          ]}>
          <ImageBackground
            source={DoughNut}
            style={{width: '100%', height: hp(15)}}>
            <View style={styles.lightTextStyle}>
              <Text style={styles.LtextStyle}>10 miles</Text>
            </View>
          </ImageBackground>
          <Text style={styles.cardStyle}>Pho Saigon</Text>

          <FlexStack>
            <EmojiIcon />
          </FlexStack>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: hp(5),
    backgroundColor: '#FFFF',
  },
  viewStyle: {
    backgroundColor: '#F1F2F6',
    shadowColor: '#000',
    shadowOffset: {
      width: 3,
      height: 4,
    },
    shadowOpacity: 1,
    shadowRadius: 4,
    elevation: 5,
    borderRadius: 10,
    width: '90%',
    padding: 15,

    height: '100%',
  },
  textStyle: {
    fontWeight: '500',
    lineHeight: hp(4),
    fontSize: hp(2.3),
    color: '#0A191E',
    marginTop: 20,
    marginLeft: hp(3),
  },
  lightTextStyle: {
    alignItems: 'baseline',
    backgroundColor: '#F1F2F6',
    width: wp(25),
    padding: 10,
    borderRadius: 5,
    marginTop: hp(9),
    marginLeft: hp(1),
  },
  LtextStyle: {
    color: '#0A191E',
  },
  cardStyle: {
    color: '#0A191E',
    marginTop: hp(1),
  },
  SemiTextStyle: {
    fontSize: hp(-2),
    position: 'relative',
    top: hp(-5.2),
    marginTop: hp(3),
    marginLeft: hp(-35),
    color: '#31B9CC',
  },
});

export default DisplayAnImageWithStyle;
