import {StyleSheet} from 'react-native';

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
export const FoodStyle = StyleSheet.create({
  cardContainer: {
    minHeight: hp(10),
    marginTop: hp(1),
    marginBottom: hp(0),
  },
  section: {marginTop: hp(12)},

  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 21,
    backgroundColor: 'rgba(10, 25, 30, 0.28)',
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    width: '100%',
    height: wp(189),

    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
  },
  button: {
    borderRadius: 20,
    padding: 17,
    elevation: 2,
  },
  Justbutton: {
    borderRadius: 20,
    padding: 12,
    elevation: 2,
    marginTop: hp(-6),
  },
  buttonOpen: {
    backgroundColor: '#31B9CC',
    width: wp(20),
    height: hp(10),
  },
  buttonClose: {
    backgroundColor: '#31B9CC',
    width: wp(30),
    alignSelf: 'center',
  },

  modalText: {
    fontWeight: 'bold',
    textAlign: 'center',
  },
  textStyle: {
    fontWeight: '700',
    fontSize: hp(3),
    lineHeight: hp(6),
    color: '#0A191E',
    position: 'absolute',
    left: hp(2),
    top: hp(-1),

    // height: 320
  },
});
