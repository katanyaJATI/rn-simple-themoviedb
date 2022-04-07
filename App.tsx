import 'react-native-gesture-handler';
import React from 'react';
import { StatusBar, Platform } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// screens
import SplashScreen from './app/containers/SplashScreen';
import TVShowList from './app/containers/TVShowList';
import MovieTVDetail from './app/containers/MovieTVDetail';

const Stack = createNativeStackNavigator();

export type RootStackParamList = {
  SplashScreen: undefined;
  MainNavigator: undefined;
  TVShowList: undefined;
  MovieTVDetail: { id: number };
};

function MainNavigator() {
  return (
    <Stack.Navigator initialRouteName="TVShowList">
      <Stack.Screen
        name="TVShowList"
        component={TVShowList}
        options={{ headerTitle: 'TV Show' }}
      />
      <Stack.Screen
        name="MovieTVDetail"
        component={MovieTVDetail}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="SplashScreen"
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen name="SplashScreen" component={SplashScreen} />
        <Stack.Screen name="MainNavigator" component={MainNavigator} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

function Root() {
  return (
    <SafeAreaProvider>
      {Platform.OS === 'ios' && <StatusBar barStyle="dark-content" />}
      <App />
    </SafeAreaProvider>
  );
}

export default Root;
