import React, {useState} from 'react';
import {
  View,
  SafeAreaView,
  ScrollView,
  StatusBar,
  useColorScheme,
  Alert,
  Modal,
  Text,
  Pressable,
} from 'react-native';
import {PizzaSlice, BreakFast} from '../assets/images';
import {FoodStyle as styles} from './styles';
import {Header} from 'react-native/Libraries/NewAppScreen';
import {DashFull} from './Dash';
import {FlexStack} from './View';
import {Card} from './Card';
import {DesertIcon, LunchIcon, XIcon} from '../SvgJs/svg';
import DisplayAnImageWithStyle from '../imageDisplay/index';
import {SemiBoldText} from '../Text';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';
import FlexText from 'react-native/Libraries/NewAppScreen/components/FlexTextjs';

function HomeScreen({icon}) {
  const [modalVisible, setModalVisible] = useState(false);
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };
  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <Header />
        <Card style={styles.cardContainer}>
          <View style={styles.section}>
            <FlexStack justify="space-between" style={{flexWrap: 'wrap'}}>
              <DashFull title="Dinner" imageSource={PizzaSlice} />

              <Pressable
                style={[styles.button, styles.buttonOpen]}
                onPress={() => setModalVisible(true)}>
                <LunchIcon
                  style={{
                    marginTop: hp(1),
                  }}
                />
              </Pressable>
              <View
                style={{
                  fontSize: hp(2),
                  fontWeight: '500',
                  color: '#0A191E',
                  marginTop: hp(5),
                  marginLeft: hp(6),
                }}>
                <SemiBoldText
                  title="Lunch"
                  style={{
                    fontSize: hp(2),
                    fontWeight: '500',
                    color: '#0A191E',
                    marginTop: hp(2.4),
                  }}
                />
              </View>
              <DashFull title="Breakfast" imageSource={BreakFast} />
              <DashFull title="Desert" icon={<DesertIcon />} />
              {/* will take a second look at this */}

              <View style={{width: '31%'}} />
            </FlexStack>
          </View>
        </Card>
        <View style={styles.centeredView}>
          <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
              Alert.alert('Modal has been closed.');
              setModalVisible(!modalVisible);
            }}>
            <View style={styles.centeredView}>
              <View style={styles.modalView}>
                <View
                  style={{
                    backgroundColor: 'white',
                    height: hp(70),
                    marginTop: hp(22.4),
                    padding: 13,
                    borderBottomLeftRadius: hp(0),
                    borderBottomRightRadius: 0,
                    borderTopLeftRadius: hp(5),
                    borderTopRightRadius: hp(5),
                    // borderRadius: 30, 30, 0, 0,
                  }}>
                  <View>
                    <Text style={styles.textStyle}>Your Order</Text>
                  </View>
                  <FlexText />
                  <Pressable
                    style={[styles.Justbutton, styles.buttonClose]}
                    onPress={() => setModalVisible(!modalVisible)}>
                    <XIcon style={{alignSelf: 'center'}} />
                    <Text style={styles.modalText}>Hide Me</Text>
                  </Pressable>
                </View>
              </View>
            </View>
          </Modal>
        </View>
        {icon}
        <DisplayAnImageWithStyle />
      </ScrollView>
    </SafeAreaView>
  );
}

export default HomeScreen;
