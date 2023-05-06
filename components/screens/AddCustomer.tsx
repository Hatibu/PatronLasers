import React from 'react';
import {
  Alert,
  StyleSheet,
  Text,
  View,
  TextInput,
  Pressable,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from 'react-native';

export function AddCustomer() {
  return (
    <View>
      <View style={styles.container}>
        <ScrollView>
          <KeyboardAvoidingView
            behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            keyboardVerticalOffset={Platform.OS === 'ios' ? 0 : -200} // adjust this value as needed
            style={styles.keyboard}>
            <View>
              <Text style={styles.title}>Add Customer</Text>
            </View>
            <View style={styles.form}>
              <TextInput
                style={styles.textInput}
                placeholderTextColor="#b4b9c1"
                placeholder="First Name"
              />
              <TextInput
                style={styles.textInput}
                placeholderTextColor="#b4b9c1"
                placeholder="Last Name"
              />
              <TextInput
                style={styles.textInput}
                placeholderTextColor="#b4b9c1"
                placeholder="Address"
              />
              <TextInput
                style={styles.textInput}
                placeholderTextColor="#b4b9c1"
                placeholder="Email"
              />
              <Pressable
                style={styles.pressBtn}
                onPress={() => Alert.alert('Submitted')}>
                <Text style={styles.pressTxt}>Submit</Text>
              </Pressable>
            </View>
          </KeyboardAvoidingView>
        </ScrollView>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  text: {
    color: '#000',
  },
  textInput: {
    fontFamily: 'Roboto',
    fontSize: 20,
    margin: 10,
    backgroundColor: '#e6e6e9',
    paddingLeft: 20,
    width: 300,
    height: 60,
    color: '#000',
    borderRadius: 12,
  },
  form: {
    flex: 1,
    height: 600,
    flexDirection: 'column',
    alignItems: 'center',
  },
  pressBtn: {
    alignItems: 'center',
    top: 20,
    fontFamily: 'Inter-Regular',
    borderRadius: 12,
    backgroundColor: '#131035',
    width: 300,
    height: 60,
  },
  pressTxt: {
    textAlign: 'center',
    fontFamily: 'Inter-Regular',
    padding: 10,
    fontSize: 20,
    color: 'white',
  },
  pressTxt1: {
    paddingVertical: 12,
    paddingHorizontal: 50,
    fontSize: 15,
    fontWeight: 'bold',
    color: '#eee0cb',
  },
  container: {},

  title: {
    textAlign: 'center',
    color: '#222',
    fontSize: 25,
    marginBottom: 10,
  },
  keyboard: {flex: 1, padding: 30},
  arrow: {
    color: 'white',
  },
  backArrow: {
    paddingTop: 35,
    paddingLeft: 25,
  },
  Arrow: {
    fontSize: 30,
    color: '#131035',
  },

  activityIndicator: {
    alignSelf: 'center',
    padding: 20,
  },
});
