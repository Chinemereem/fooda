// You can import SearchIcon from @expo/vector-icons if you use Expo or
// react-native-vector-icons/SearchIcon otherwise.
import * as React from 'react';
import {Text, View} from 'react-native';
import {UserIcon, HomeIcon, OtherIcon} from './SvgJs/svg';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import HomeScreen from './orderFood/Food';
import {SemiBoldText} from './Text';
import {Colors} from './NewAppScreen';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const MainTabIcon = props => {
  const color = props.focused ? Colors.Primary : Colors.Manatee;

  return (
    <View
      style={{
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        alignSelf: 'center',
        justifyContent: 'center',
        marginTop: 10,
      }}>
      <View
        style={{
          width: wp(25),
          height: 30,
          backgroundColor: '#F1F2F6',

          padding: 10,
          borderRadius: 25,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        {props.tabIcon}
      </View>
      {!!props.title && (
        <SemiBoldText
          title={props.title}
          style={{color, fontSize: hp(8), marginTop: hp(2)}}
        />
      )}
    </View>
  );
};

const SettingsScreen = () => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text style={{color: 'black'}}>Work in Progres!</Text>
    </View>
  );
};

function OtherScreen() {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text style={{color: 'black'}}>Work in Progres!</Text>
    </View>
  );
}

function FourtScreen() {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Text style={{color: 'black'}}>Work in Progres!</Text>
    </View>
  );
}
const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer independent={true}>
      <Tab.Navigator
        screenOptions={({route}) => ({
          tabBarIcon: ({focused, color, size}) => {
            let iconName;

            if (route.name === 'Home') {
              return <MainTabIcon tabIcon={<HomeIcon />} />;
            } else if (route.name === 'Settings') {
              return <UserIcon />;
            }

            // You can return any component that you like here!
            return <OtherIcon />;
          },

          tabBarActiveTintColor: 'tomato',
          tabBarInactiveTintColor: 'gray',
        })}>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Settings" component={SettingsScreen} />

        <Tab.Screen name="OtherScreen" component={OtherScreen} />
        <Tab.Screen name="FourtScreen" component={FourtScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
