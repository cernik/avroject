// @flow
import * as React from 'react';
import type {Node} from 'react';
import {Image} from 'react-native';
import {
  NavigationContainer,
  getFocusedRouteNameFromRoute,
} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';

import Styles, {colors} from './styles';
import SplashScreen from './screens/SplashScreen';
import CategoriesScreen from './screens/CategoriesScreen';
import DefaultScreen from './screens/DefaultScreen';

function getIconName(routeName: string, focused: boolean): string {
  switch (routeName) {
    case 'Home':
      return 'home-outline';
    case 'Cart':
      return 'cart-outline';
    case 'Profile':
      return 'person-outline';
    case 'Favorites':
      return 'heart-outline';
    default:
      return 'trail-sign-outline';
  }
}

const DEFAULT_LOGO = require('./assets/logo.png');

function getHeaderTitle(route: any): string | Node {
  const routeName = getFocusedRouteNameFromRoute(route) || route.name;

  if (routeName === 'Categories') {
    return props => <Image style={Styles.logo} source={DEFAULT_LOGO} />;
  }
  return routeName;
}
const Tab = createBottomTabNavigator();

const Root = (): Node => {
  return (
    <Tab.Navigator
      initialRouteName="Categories"
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let iconName = getIconName(route.name, focused);
          return <Icon name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: colors.primary,
      }}>
      <Tab.Screen
        name="Cart"
        component={DefaultScreen}
        options={{title: 'Cart'}}
      />
      <Tab.Screen name="Favorites" component={DefaultScreen} />
      <Tab.Screen name="Profile" component={DefaultScreen} />
      <Tab.Screen name="Home" component={DefaultScreen} />
      <Tab.Screen name="Categories" component={CategoriesScreen} />
    </Tab.Navigator>
  );
};

const Stack = createStackNavigator();

const App = (): Node => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Splash"
          options={{
            headerShown: false,
          }}
          component={SplashScreen}
        />
        <Stack.Screen
          name="Root"
          component={Root}
          options={({route}) => ({
            headerTitle: getHeaderTitle(route),
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
