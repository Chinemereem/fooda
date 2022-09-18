import {
  ImageBackground,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import React from 'react';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';

import {FlexStack} from '../../orderFood/View';
import {HomeBoxIcon} from '../../SvgJs/svg.js';

const Header = () => {
  return (
    <ImageBackground
      accessibilityRole="image"
      testID="new-app-screen-header"
      style={[styles.background]}>
      <FlexStack>
        <View>
          <View style={styles.headerStyle}>
            <Text style={[styles.text]}>
              What do you{'\n'}
              have a taste for?
            </Text>

            <Text>1240 Restaraunts available</Text>
          </View>
        </View>
        <View style={styles.viewStyle}>
          <HomeBoxIcon />

          <Text
            style={{
              textAlign: 'center',
              marginTop: -18,
              marginLeft: 15,
              color: '#fff',
            }}>
            2
          </Text>
        </View>
      </FlexStack>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    paddingBottom: 40,
    paddingTop: 96,
    paddingHorizontal: 32,
    backgroundColor: '#ffff',
  },
  headerStyle: {
    marginLeft: hp(2),
  },
  text: {
    fontSize: 30,
    fontWeight: '700',
    textAlign: 'center',
    color: 'red',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 1,
    shadowRadius: 4,
    elevation: 5,

    lineHeight: 29,
  },
  viewStyle: {
    width: 60,
    height: 40,
    borderRadius: 13,
    marginLeft: 38,
    padding: 10,
    backgroundColor: '#FECA57',
  },
});

export default Header;
