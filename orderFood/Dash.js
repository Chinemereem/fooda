import React from 'react';
import {TouchableOpacity, View, StyleSheet, Image} from 'react-native';
import {FlexStack} from './View';
import {Card} from './Card';
import {SemiBoldText} from '../Text';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import * as colors from 'react-native/Libraries/NewAppScreen';

export const DashFull = ({title, icon, onPress, disabled, imageSource}) => (
  <TouchableOpacity
    activeOpacity={0.8}
    disabled={disabled}
    style={styles.DashFullContainer}
    onPress={onPress}>
    <Card backgroundColor={colors.White2} style={styles.DashFullCard}>
      <FlexStack>
        <View style={styles.DashFullIconContainer}>
          <Image
            source={imageSource}
            resizeMode="contain"
            style={styles.iconStyle}
          />
          {icon}
        </View>

        <SemiBoldText
          title={title}
          color={colors.Black}
          style={styles.SemiTextStyle}
          textAlign="center"
        />
      </FlexStack>
    </Card>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  top: {
    backgroundColor: 'red',
  },
  DashFullContainer: {width: '25%'},
  DashFullCard: {
    paddingVertical: hp(0),
    paddingHorizontal: wp(3),
    marginVertical: hp(0),
    marginTop: hp(-12),
    marginRight: hp(5),
  },
  DashFullIconContainer: {
    width: wp(20),
    height: hp(10),
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'gray',
    borderRadius: hp(2),
  },
  iconStyle: {
    width: wp(10),
  },
  SemiTextStyle: {
    // marginLeft: wp(-16),
    width: hp(15),
    fontSize: hp(-4),
    marginTop: hp(15),
    marginLeft: hp(-13),
    textAlign: 'center',
  },
});
