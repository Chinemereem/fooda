import React from 'react';
import {View, Image, StyleSheet, Text, TouchableOpacity} from 'react-native';
import {EmojiIcon} from '../SvgJs/svg';
import {DoughNut, TofuMeal} from '../assets/images';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {SemiBoldText} from '../Text';
import {Card} from 'react-native-elements';
import * as colors from '../NewAppScreen';

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
      <Card
        containerStyle={{
          backgroundColor: '#E5E5E5',
          borderRadius: 10,
          height: '38%',
        }}
        wrapperStyle={{}}>
        <View
          style={{
            position: 'relative',
          }}>
          <FoodCard foodImageBg={DoughNut} />
          <View style={styles.lightTextStyle}>
            <Text style={styles.LtextStyle}>10 miles</Text>
          </View>
          <Card.Title style={styles.cardStyle}>Noah’s Bagels</Card.Title>
          <Card.Title
            style={{
              marginLeft: hp(-26.3),
              marginTop: hp(1),
              color: '#8F9698',
            }}>
            Lunch . American . $$
          </Card.Title>
          <View
            style={{
              marginBottom: hp(4),
              marginTop: hp(-1),
              marginRight: hp(1),
            }}>
            <FoodCard icon={<EmojiIcon />} title="97%" />
          </View>
        </View>
      </Card>

      <Card
        containerStyle={{
          backgroundColor: '#E5E5E5',
          borderRadius: 10,
          marginBottom: hp(5),
        }}
        wrapperStyle={{}}>
        <Card.Divider />
        <View
          style={{
            position: 'relative',
          }}>
          <FoodCard foodImageBg={TofuMeal} />
          <View style={styles.lightTextStyle}>
            <Text style={styles.LtextStyle}>15 miles</Text>
          </View>
          <Card.Title style={styles.cardStyle}>Pho Saigon</Card.Title>
        </View>
      </Card>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingTop: hp(5),
    backgroundColor: '#FFFF',
  },

  textStyle: {
    fontFamily: 'Cera Pro',
    fontWeight: '500',
    position: 'absolute',
    left: '7.47%',
    lineHeight: hp(4),
    fontSize: hp(2.3),
    color: '#0A191E',
    marginTop: 20,
  },
  lightTextStyle: {
    position: 'absolute',
    left: 15,
    top: hp(10),
    backgroundColor: 'rgba(241, 242, 246, 0.35)',
    width: hp(9),
    height: hp(5),
    borderRadius: 10,
    textAlign: 'center',
  },
  LtextStyle: {
    textAlign: 'center',
    color: '#0A191E',
    position: 'absolute',
    top: hp(1),
    bottom: hp(1),
    left: hp(1),
  },
  cardStyle: {
    fontFamily: 'Cera Pro',
    color: '#0A191E',
    position: 'absolute',
    top: hp(21),
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
