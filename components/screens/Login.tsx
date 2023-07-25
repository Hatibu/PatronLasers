import React,{useState, useEffect} from 'react';
import {
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  ActivityIndicator,
} from 'react-native';
import {NavigationProp, ParamListBase} from '@react-navigation/native';
import NetInfo from '@react-native-community/netinfo';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Icon2 from 'react-native-vector-icons/FontAwesome';
import Icon3 from 'react-native-vector-icons/AntDesign';
import CustomAlert from './partials/CustomAlert';
import api from '../utils/api';

interface LoginProps {
  navigation: NavigationProp<ParamListBase>;
}
const Login = ({navigation}: LoginProps) => {
  const [isLoading, setLoading] = useState(false);
  const [email, onChangeEmail] = useState('');
  const [password, passwordChange] = useState('');
  const [hide, setHide] = useState(true);
  const [isConnected, setInternetConnected ] = useState(false);
  const [alertVisible, setAlertVisible] = useState(false);
  const [alertMessage, setAlertMessage] = useState('');

  const showAlert = (message: React.SetStateAction<string>) => {
    setAlertMessage(message);
    setAlertVisible(true);
  };

  const closeAlert = () => {
    setAlertVisible(false);
  };

  const handleLogin = async () => {
    try {
      if (email === '' || password === '') {
        showAlert('Email or password must be provided!')
      } else {
        setLoading(true);
        if (email === 'democlinic@gmail.com'){
          navigation.navigate('Product', {username: 'Demo Clinic', lastname: 'SN006'});
          setLoading(false);
         
        }else if(email === 'demopatient@gmail.com'){
          navigation.navigate('patient_home', {
            username: 'Demo Name',
            email: 'democlinic@gmail.com',
            lastname: 'Demo Clinic',
          })
          setLoading(false);
        }else{
          const response = await api.post('signin/', {
            email,
            password,
          });
  
          const json = response.data;
         
          
          const userID = json.data.id;
          const userName = json.data.firstname;
          const lname = json.data.lastname;
          const userEmail = json.data.email;
          const userRole = json.data.role;
        
          
  
          setLoading(false);
          if (json.data.role === 'clinic') {
            navigation.navigate('Product', { username: userName,
              email: userEmail,
              lastname: lname,
              id:userID,
              role: userRole});
          } else if (json.data.role === 'patient') {
            navigation.navigate('patient_home', {
              username: userName,
              email: userEmail,
              lastname: lname,
              id:userID,
              role: userRole
            });
          }
        }
        
      }
    } catch (error) {
      showAlert('Server Error or user not found!')
      setLoading(false);
    }
  };
//   // check for internet connectivity
  useEffect(()=>{
    // Subscribe
    const unsubscribe = NetInfo.addEventListener(state => {
    setInternetConnected((prevState) => state.isConnected ?? prevState);
});
// Unsubscribe
return ()=>{
  unsubscribe();
}

  },[])
  return (
    <View style={styles.container}>
      <View>
        <Pressable
          style={styles.backArrow}
          onPress={() => navigation.navigate('Home')}>
          <Icon3
            style={styles.Arrow}
            name="arrowleft"
            size={30}
            color="#000000"
          />
        </Pressable>
      </View>
      <View style={styles.internetContainer}>
      <View style={isConnected? styles.internetConnected: styles.internetNotConnected}>
        <Text style={{color: 'white', textAlign: 'center'}}>{isConnected? '' : 'No internet connection'}</Text>
      </View>
      </View>
      <ScrollView>
        <KeyboardAvoidingView
          behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
          keyboardVerticalOffset={Platform.OS === 'ios' ? 0 : -200} // adjust this value as needed
          style={styles.keyboard}>
          <View style={styles.formContainer}>
            <View style={styles.textContainer}>
              <Text style={styles.title}>Let’s sign you in </Text>
              <Text style={styles.title2}>Welcome back.</Text>
              <Text style={styles.title2}>You have been missed.</Text>
            </View>

            <View style={styles.form}>
              <View style={styles.inputStyle}>
                <Icon name="email" size={30} color="#000000" />
                <TextInput
                  style={styles.textInput}
                  onChangeText={onChangeEmail}
                  placeholder="Username Or Email"
                  placeholderTextColor={'gray'}
                />
              </View>
              <View style={styles.inputStyle}>
                <Icon name="lock" size={30} color="#000000" />

                <TextInput
                  style={styles.textInput}
                  onChangeText={passwordChange}
                  secureTextEntry={hide}
                  placeholder="Enter password"
                  placeholderTextColor={'gray'}
                />
                <Pressable onPress={() => setHide(!hide)}>
                  {hide ? (
                    <Icon2 name="eye-slash" size={30} color="#000000" />
                  ) : (
                    <Icon2 name="eye" size={30} color="#000000" />
                  )}
                </Pressable>
              </View>
            </View>
            <View style={styles.buttons}>
              <Pressable
                style={styles.pressBtn2}
                onPress={() => showAlert('Not Working yet')}>
                <Text style={styles.forgotPass}>Forgot Password?</Text>
              </Pressable>
              <Pressable style={styles.pressBtn} onPress={handleLogin}>
                {isLoading ? (
                  <ActivityIndicator
                    color="white"
                    style={styles.activityIndicator}
                  />
                ) : (
                  <Text style={styles.pressTxt}>Login</Text>
                )}
              </Pressable>
            </View>
          </View>
        </KeyboardAvoidingView>
      </ScrollView>
      {/* custom alert */}
      <CustomAlert visible={alertVisible} message={alertMessage} onClose={closeAlert} />
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignContent: 'center',
    backgroundColor: 'white',
  },
  form: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 30,
  },
  buttons: {
    alignItems: 'center',
    marginTop: 20,
  },
  title: {
    marginTop: 50,
    fontFamily: 'Roboto',
    fontWeight: '700',
    fontSize: 35,
    color: '#131035',
  },
  title2: {
    width: 300,
    fontFamily: 'Roboto',
    fontSize: 25,
    color: '#131035',
  },
  inputStyle: {
    margin: 10,
    paddingLeft: 24,
    paddingRight: 24,
    alignItems: 'center',
    flexDirection: 'row',
    borderRadius: 12,
    width: 350,
    height: 60,
    backgroundColor: '#D9D9D9',
  },
  textInput: {
    fontFamily: 'Roboto',
    padding: 10,
    fontSize: 18,
    color: '#000',
    width: 250,
  },
  pressBtn: {
    borderRadius: 12,
    width: 350,
    height: 60,
    padding: 10,
    backgroundColor: '#131035',
  },
  pressTxt: {
    fontFamily: 'Roboto',
    fontSize: 20,
    color: 'white',
    textAlign: 'center',
  },
  pressBtn2: {
    right: -110,
  },
  forgotPass: {
    top: -10,
    fontFamily: 'Roboto',
    fontSize: 15,
    color: '#737373',
  },
  textContainer: {
    paddingLeft: 25,
  },
  backArrow: {
    paddingTop: 35,
    paddingLeft: 25,
  },
  Arrow: {
    fontSize: 30,
  },
  keyboard: {paddingBottom: 30},
  formContainer: {
    flexDirection: 'column',
  },
  activityIndicator: {
    alignSelf: 'center',
    padding: 20,
  },
  internetContainer: {
    paddingHorizontal: 20,
    marginTop: 8,
  },
  internetConnected: {
    backgroundColor: 'transparent',
    paddingVertical: 8,

  },
  internetNotConnected: {
    backgroundColor: 'red',
   
  },
});
