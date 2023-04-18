import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import theme from '@react-navigation/native';
import ProductCard from './components/screens/ProductCard';
import AddProduct from './components/screens/AddProduct';
import Login from './components/screens/Login';
import GuideCard from './components/screens/GuideCard';
import Register from './components/screens/Register';
import Home from './components/screens/Home';
import Product from './components/screens/Product';
import RegisterChoice from './components/screens/RegisterChoice';
import PatientRegister from './components/screens/PatientRegister';
import PatientHome from './components/screens/Patient';
import ProductHome from './components/screens/ProductHome';
import AddAppontment from './components/screens/AddAppontment';
import { Button, View, TouchableOpacity,Text } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import TabCustomer from './components/screens/TabCustomer';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

function HomeScreen() {
  // Your screen content here
}

function SettingsScreen() {
  // Your screen content here
}

function DrawerContent({ navigation }) {
  return (
    <View>
      <TouchableOpacity onPress={() => navigation.navigate('Home')}>
        <Text>Home</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Settings')}>
        <Text>Settings</Text>
      </TouchableOpacity>
    </View>
  );
}


const appTheme = {
  colors: {
    primary: '#111113',
    background: '#fff',
    card: '#fff',
    text: '#fff',
  },
};

function App() {
  return (
    <NavigationContainer theme={appTheme}>
      <Stack.Navigator initialRouteName="Home">

     
        <Stack.Screen name="Drawer" component={DrawerNavigator} />
        {/* Other screen components go here */}
    


        <Stack.Screen
          name="Home"
          component={Home}
          options={{
            title: '',
            headerShown: false,
            headerTitleAlign: 'center',
            headerStyle: {},
            headerTintColor: '#fff',
          }}
        />
        <Stack.Screen
          name="Login"
          component={Login}
          options={{
            title: '',
            headerShown: false,
            headerTitleAlign: 'center',
            headerStyle: {},
            headerTintColor: '#fff',
          }}
        />
        <Stack.Screen
          name="Register"
          component={Register}
          options={{
            title: '',
            headerShown: false,
            headerTitleAlign: 'center',
            headerStyle: {},
            headerTintColor: '#fff',
          }}
        />
        <Stack.Screen
          name="Register_choice"
          component={RegisterChoice}
          options={{
            title: '',
            headerShown: false,
            headerTitleAlign: 'center',
            headerStyle: {},
            headerTintColor: '#fff',
          }}
        />
        <Stack.Screen
          name="Patient"
          component={PatientRegister}
          options={{
            title: '',
            headerShown: false,
            headerTitleAlign: 'center',
            headerStyle: {},
            headerTintColor: '#fff',
          }}
        />
        <Stack.Screen
          name="patient_home"
          component={PatientHome}
          options={{
            title: '',
            headerShown: false,
            headerTitleAlign: 'center',
            headerStyle: {},
            headerTintColor: '#fff',
          }}
        />
        <Stack.Screen
          name="Patient Home"
          component={PatientHome}
          options={{
            title: '',
            headerShown: false,
            headerTitleAlign: 'center',
            headerStyle: {},
            headerTintColor: '#fff',
          }}
        />
        <Stack.Screen
          name="Product"
          component={Product}
          options={{
            title: '',
            headerShown: false,
            headerTitleAlign: 'center',
            headerStyle: {
              backgroundColor: '#343436',
            },
            headerTintColor: '#fff',
          }}
        />
        <Stack.Screen
          name="Products"
          component={ProductHome}
          options={{
            title: '',
            headerShown: true,
            headerTitleAlign: 'center',
            headerStyle: {
              backgroundColor: '#111113',
            },
            headerTintColor: '#fff',
          }}
        />

        <Stack.Screen
          name="Product Info"
          component={ProductCard}
          options={{
            title: '',
            headerShown: true,
            headerShadowVisible: false,
            headerTitleAlign: 'center',
            headerStyle: {
              backgroundColor: '#fff',
            },
            headerTintColor: '#222',
          }}
        />
        <Stack.Screen
          name="Guide Info"
          component={GuideCard}
          options={{
            title: '',
            headerShown: true,
            headerTitleAlign: 'center',
            headerStyle: {
              backgroundColor: '#fff',
            },
            headerTintColor: '#222',
          }}
        />
        <Stack.Screen
          name="Add Product"
          component={AddProduct}
          options={{
            title: '',
            headerShown: false,
            headerTitleAlign: 'center',
            headerStyle: {
              backgroundColor: '#111113',
            },
            headerTintColor: '#fff',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

function DrawerNavigator() {
  return (
    <Drawer.Navigator drawerContent={props => <DrawerContent {...props} />}>
      <Drawer.Screen name="Home" component={TabCustomer} />
      <Drawer.Screen name="Settings" component={TabCustomer} />
    </Drawer.Navigator>
  );
}

export default App;
