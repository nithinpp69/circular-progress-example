import React from 'react';
import 'react-native-reanimated';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from './src/screens/home';
import SimpleProgress from './src/screens/simpleProgress';
import WithPrefix from './src/screens/withPrefix';
import WithCallback from './src/screens/withCallback';
import AntiClockwise from './src/screens/anticlockwise';
import Custom from './src/screens/custom';
import CountDown from './src/screens/countdown';
import Gradient from './src/screens/gradient';
import WithChild from './src/screens/withChild';
import WithCustomChild from './src/screens/withCustomChild';
import WithSubtitle from './src/screens/withSubtitle';
import DashedCircle from './src/screens/dashedCircle';
import AnimatedStrokeColor from './src/screens/animatedStrokeColor';
import WithFunctions from './src/screens/withFunctions';

global.__reanimatedWorkletInit = () => {};

const Stack = createNativeStackNavigator();
const headerOptions = {
  headerShadowVisible: false,
  headerBackTitle: ' ',
  headerTintColor: '#ffffff',
  headerStyle: {
    backgroundColor: '#242627',
    borderBottomColor: 'transparent',
    borderBottomWidth: 0,
  },
  headerTitleStyle: {
    fontSize: 20,
    color: 'white',
    fontWeight: 'bold',
  },
  animation: 'slide_from_right',
};

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={headerOptions}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="SimpleProgress" component={SimpleProgress} />
        <Stack.Screen name="WithPrefix" component={WithPrefix} />
        <Stack.Screen name="WithCallback" component={WithCallback} />
        <Stack.Screen name="AntiClockwise" component={AntiClockwise} />
        <Stack.Screen name="Custom" component={Custom} />
        <Stack.Screen name="CountDown" component={CountDown} />
        <Stack.Screen name="Gradient" component={Gradient} />
        <Stack.Screen name="WithChild" component={WithChild} />
        <Stack.Screen name="WithCustomChild" component={WithCustomChild} />
        <Stack.Screen name="WithSubtitle" component={WithSubtitle} />
        <Stack.Screen name="DashedCircle" component={DashedCircle} />
        <Stack.Screen
          name="AnimatedStrokeColor"
          component={AnimatedStrokeColor}
        />
        <Stack.Screen name="WithFunctions" component={WithFunctions} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
