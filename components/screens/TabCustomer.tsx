import {
  Alert,
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/AntDesign';

const TabCustomer = () => {
  const customerList = [
    {
      id: 0,
      name: 'Thruwaida Kunambi',
      img: require('../assets/customer1.jpg'),
      desc: 'This is customer one',
    },
    {
      id: 1,
      name: 'Joline CatFish',
      img: require('../assets/customer2.jpg'),
      desc: 'This is customer two',
    },
    {
      id: 2,
      name: 'Doris Maitaip',
      img: require('../assets/customer3.jpg'),
      desc: 'This is customer three',
    },
    {
      id: 3,
      name: 'Maisha Tabu',
      img: require('../assets/customer2.jpg'),
      desc: 'This is customer four',
    },
    {
      id: 4,
      name: 'Bila Barakoa',
      img: require('../assets/customer1.jpg'),
      desc: 'This is customer four',
    },
  ];
  return (
    <View>
      <View style={styles.createSec}>
        <Pressable
          onPress={() => Alert.alert('Appointment made')}
          style={styles.createPress}>
          <View style={styles.cardContent}>
            <Text style={styles.textPress}>Appointment</Text>
            <Icon name="pluscircle" size={50} color="#fff" />
          </View>
        </Pressable>
        <Pressable
          onPress={() => Alert.alert('Customer Added')}
          style={styles.createPress}>
          <View style={styles.cardContent}>
            <Text style={styles.textPress}>Customer</Text>
            <Icon name="pluscircle" size={50} color="#fff" />
          </View>
        </Pressable>
      </View>
      <View style={styles.list}>
        <View style={styles.customerHeader}>
          <Icon name={'left'} size={30} color={'#eee0cb'} />
          <Text style={styles.listTitle}>My Customers</Text>
          <Icon name={'right'} size={30} color={'#eee0cb'} />
        </View>
        <ScrollView style={styles.listScroll}>
          {customerList.map(customer => (
            <View key={customer.id} style={[styles.RecCard]}>
              <View style={styles.RecCardInfo}>
                <Text style={styles.RecCardTitle}>{customer.name}</Text>
                <Text style={styles.RecCardPara}>{customer.desc}</Text>
              </View>
              <View style={styles.customerImg}>
                <Image style={styles.prodImgSmallRec} source={customer.img} />
              </View>
            </View>
          ))}
        </ScrollView>
      </View>
    </View>
  );
};

export default TabCustomer;

const styles = StyleSheet.create({
  text: {
    top: 10,
    paddingBottom: 10,
    paddingLeft: 15,
    fontFamily: 'Roboto-Regular',
    fontSize: 30,
    color: '#eee0cb',
  },
  textPress: {
    marginBottom: 0,
    fontFamily: 'Roboto-Thin',
    fontSize: 20,
    color: '#eee0cb',
  },
  createSec: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor: 'f6f6f6',
  },
  createPress: {
    top: 20,
    paddingTop: 40,
    elevation: 100,
    marginHorizontal: 10,
    borderRadius: 40,
    alignItems: 'center',
    height: 150,
    width: 180,
    backgroundColor: '#0c1821',
    //IOS SHADOWS
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.5,
    shadowRadius: 2,
  },
  list: {
    top: 200,
  },
  listTitle: {
    fontFamily: 'Inter',
    fontSize: 25,
    textAlign: 'center',
    marginBottom: 10,
    color: '#eee0cb',
  },
  listScroll: {
    height: 470,
    paddingBottom: 30,
    elevation: 30,
    flexDirection: 'column',
    paddingVertical: 30,
    paddingHorizontal: 15,
    //IOS SHADOWS
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.5,
    shadowRadius: 2,
  },
  RecCard: {
    flex: 1,
    flexDirection: 'row-reverse',
    alignItems: 'center',
    height: 120,
    elevation: 50,
    borderRadius: 12,
    backgroundColor: '#0c1821',
    marginBottom: 10,
    //IOS SHADOWS
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.5,
    shadowRadius: 2,
  },
  RecCardInfo: {
    top: 10,
    left: 10,
    height: 100,
    width: 230,
    textAlign: 'left',
    color: '#eee0cb',
  },
  RecCardTitle: {
    fontFamily: 'Inter',
    color: '#b4b9c1',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'left',
  },
  RecCardPara: {
    fontFamily: 'Roboto-Bold',
    fontSize: 15,
    textAlign: 'left',
    color: '#eee0cb',
  },
  customerImg: {
    left: 40,
    alignItems: 'center',
  },
  customerHeader: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
  },
  prodImgSmallRec: {
    height: 80,
    width: 80,
    borderRadius: 100,
    resizeMode: 'contain',
  },
  cardContent: {
    flexDirection: 'column',
    alignItems: 'center',
  },
});
