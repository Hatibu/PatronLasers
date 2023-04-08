import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import ProductCard from './components/screens/ProductCard';
import AddProduct from './components/screens/AddProduct';
import Login from './components/screens/Login';
import GuideCard from './components/screens/GuideCard';
import Register from './components/screens/Register';
import Home from './components/screens/Home';
import Product from './components/screens/Product';
import RegisterChoice from './components/screens/RegisterChoice';
import PatientRegister from './components/screens/PatientRegister';
import PatientHome from './components/screens/PatientHome';

const Stack = createNativeStackNavigator();

const appTheme = {
  colors: {
    primary: 'f4f4f9',
    background: '#1b2a41',
    card: '#0c1821',
    text: '#fff',
  },
};

function App() {
  return (
    <NavigationContainer theme={appTheme}>
      <Stack.Navigator initialRouteName="Home">
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
          name="Products"
          component={Product}
          options={{
            title: '',
            headerShown: false,
            headerTitleAlign: 'center',
            headerStyle: {
              backgroundColor: '#03045E',
            },
            headerTintColor: '#fff',
          }}
        />

        <Stack.Screen
          name="Product_info"
          component={ProductCard}
          options={{
            title: 'Product Info',
            headerShown: false,
            headerTitleAlign: 'center',
            headerStyle: {
              backgroundColor: '#03045E',
            },
            headerTintColor: '#fff',
          }}
        />
        <Stack.Screen
          name="add_product"
          component={AddProduct}
          options={{
            title: 'Add Product',
            headerShown: false,
            headerTitleAlign: 'center',
            headerStyle: {
              backgroundColor: '#03045E',
            },
            headerTintColor: '#fff',
          }}
        />
        <Stack.Screen
          name="Guide Info"
          component={GuideCard}
          options={{
            title: 'Product Info',
            headerShown: false,
            headerTitleAlign: 'center',
            headerStyle: {
              backgroundColor: '#03045E',
            },
            headerTintColor: '#fff',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
