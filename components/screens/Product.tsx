import React from 'react';
import {StyleSheet, View} from 'react-native';

import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';
import {useRoute} from '@react-navigation/native';
import ProductHome from './ProductHome';
import TabsAds from './TabAds';
import TabCustomer from './TabCustomer';
import TabGuide from './TabGuide';
import TabSupport from './TabSupport';

const Tab = createBottomTabNavigator();

const screenOptions = ({route}: {route: any}) => ({
  tabBarIcon: ({color, size}: {color: string; size: number}) => {
    let iconName;

    switch (route.name) {
      case 'Home':
        iconName = 'home';
        break;
      case 'Advertisement':
        iconName = 'globe';
        break;
      // case 'Clinical Guides':
      //   iconName = 'medkit';
      //   break;
      case 'My Customer':
        iconName = 'users';
        break;
      case 'Tech Support':
        iconName = 'cogs';
        break;
      default:
        iconName = 'home';
    }

    return <Icon name={iconName} size={size} color={color} />;
  },
  tabBarActiveTintColor: '#222',
  tabBarInactiveTintColor: '#999',
  headerStyle: {height: 40, backgroundColor: '#fff'},
  headerTintColor: '#222',
  headerShadowVisible: true,
  headerTitleAlign: 'center',
  tabBarShowLabel: false,
});

const Product = () => {
  const route = useRoute();
  const data = route.params as {username: string; lastname: string};
  const {username, lastname} = data;

  return (
    <View style={styles.container}>
      <Tab.Navigator initialRouteName="Home" screenOptions={screenOptions}>
      <Tab.Screen
          name="Home"
          component={ProductHome}
          initialParams={{username: username}}
        />
        <Tab.Screen name="Advertisement" component={TabsAds} />
        {/* <Tab.Screen name="Clinical Guides" component={TabGuide} /> */}
        
        <Tab.Screen
          name="My Customer"
          component={TabCustomer}
          initialParams={{username: username}}
        />
        <Tab.Screen
          name="Tech Support"
          component={TabSupport}
          initialParams={{username: username, lastname: lastname}}
        />
      </Tab.Navigator>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
  },
});

export default Product;
