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
import {Header} from '../NewAppScreen';
import {DashFull} from './Dash';
import {FlexStack} from './View';
import SearchInput from '../Text/SearchInput';
import {Card} from './Card';
import {DesertIcon, LunchIcon, XIcon, SearchIcon} from '../SvgJs/svg';
import ModalView from './ModalView';
import DisplayAnImageWithStyle from '../imageDisplay/index';
import {SemiBoldText} from '../Text';
import {Colors} from '../NewAppScreen';
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';

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
        <SearchInput icon={<SearchIcon />} />
        <Card style={styles.cardContainer}>
          <View style={styles.section}>
            <FlexStack justify="space-between" style={{flexWrap: 'wrap'}}>
              <DashFull title="Dinner" imageSource={PizzaSlice} />
              <DashFull
                icon={<LunchIcon />}
                title="Lunch"
                onPress={() => setModalVisible(true)}
                style={[styles.button, styles.buttonOpen]}></DashFull>

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

                  <Pressable
                    style={[styles.Justbutton, styles.buttonClose]}
                    onPress={() => setModalVisible(!modalVisible)}>
                    <XIcon style={{alignSelf: 'center'}} />
                  </Pressable>
                  <ModalView />
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
