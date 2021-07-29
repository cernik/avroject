// @flow
import * as React from 'react';
import type {Node} from 'react';
import {View, Text, ActivityIndicator, StyleSheet} from 'react-native';
import {
  NavigationContainer,
  getFocusedRouteNameFromRoute,
} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';

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

function getHeaderTitle(route: any): string {
  const routeName = getFocusedRouteNameFromRoute(route) || route.name;
  return routeName;
}

const Styles = StyleSheet.create({
  container: {flex: 1, alignItems: 'center', justifyContent: 'center'},
});

type Props = {
  navigation: {
    replace: string => void,
  },
};

function SplashScreen(props: Props): Node {
  React.useEffect(() => {
    setTimeout(() => {
      props.navigation.replace('Root');
    }, 2000);
  });

  return (
    <View style={Styles.container}>
      <ActivityIndicator size="large" color="tomato" />
    </View>
  );
}

function CartScreen(props: Props): Node {
  return (
    <View style={Styles.container}>
      <Text>Cart Screen</Text>
    </View>
  );
}
function FavoritesScreen(props: Props): Node {
  return (
    <View style={Styles.container}>
      <Text>Favorites Screen</Text>
    </View>
  );
}
function ProfileScreen(props: Props): Node {
  return (
    <View style={Styles.container}>
      <Text>Profile Screen</Text>
    </View>
  );
}
function HomeScreen(props: Props): Node {
  return (
    <View style={Styles.container}>
      <Text>Home Screen</Text>
    </View>
  );
}
function CategoriesScreen(props: Props): Node {
  return (
    <View style={Styles.container}>
      <Text>Categories Screen</Text>
    </View>
  );
}

const Tab = createBottomTabNavigator();

function Root(): Node {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color, size}) => {
          let iconName = getIconName(route.name, focused);
          return <Icon name={iconName} size={size} color={color} />;
        },
      })}
      tabBarOptions={{
        activeTintColor: 'tomato',
        inactiveTintColor: 'gray',
      }}>
      <Tab.Screen
        name="Cart"
        component={CartScreen}
        options={{title: 'Cart'}}
      />
      <Tab.Screen name="Favorites" component={FavoritesScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Categories" component={CategoriesScreen} />
    </Tab.Navigator>
  );
}

const Stack = createStackNavigator();

function App(): Node {
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
}

export default App;
