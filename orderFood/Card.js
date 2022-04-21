/* eslint-disable import/no-cycle */
import React from 'react';
import {ImageBackground, StyleSheet, View} from 'react-native';
import * as colors from 'react-native/Libraries/NewAppScreen';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

export const Card = ({
  style,
  children,
  withImageBackround,
  imageSource,
  imageStyle,
  backgroundColor,
  testID,
}) => (
  <>
    {withImageBackround ? (
      <ImageBackground
        testID="image-bg"
        source={imageSource}
        imageStyle={[
          styles.imageStyle,
          {backgroundColor: backgroundColor || style?.backgroundColor},
          imageStyle,
        ]}
        style={[styles.style, {backgroundColor}, style]}>
        {children}
      </ImageBackground>
    ) : (
      <View
        testID={`card-view-${testID}`}
        style={[
          styles.style,
          {backgroundColor: backgroundColor || colors.White, height: null},
          style,
        ]}>
        {children}
      </View>
    )}
  </>
);

const styles = StyleSheet.create({
  imageStyle: {
    borderRadius: 24,
    height: '34',
  },
  style: {
    minHeight: hp(13),
    borderRadius: 24,
    paddingHorizontal: wp(5),
    paddingVertical: hp(-5),
    marginVertical: hp(10),

    shadowOffset: {
      width: 0,
      height: hp(10),
    },
    shadowRadius: 34,
    shadowColor: 'rgba(0, 0, 0, 0.04)',
    shadowOpacity: 3,
    elevation: 0.3,
  },
});
