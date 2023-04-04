import { Alert, Image, Pressable, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/FontAwesome'

const TabCustomer = () => {
  return (
    <View>
      <View style={styles.createSec}>
        <Pressable onPress={() => Alert.alert('Appointment made')} style={styles.createPress}><Text style={styles.textPress}>Appointment</Text>
        <Icon name={'plus-circle'} color={'#eee0cb'} size={70}/>
        </Pressable>
        <Pressable onPress={() => Alert.alert('Customer Added')} style={styles.createPress}><Text style={styles.textPress}>Customer</Text>
        <Icon name={'plus-circle'} color={'#eee0cb'} size={70}/>
        </Pressable>
      </View>
      <View style={styles.list}>
        <View style={styles.customerHeader}>
        <Icon name={'chevron-left'} size={30} color={'#eee0cb'}/>
        <Text style={styles.listTitle}>My Customers</Text>
        <Icon name={'chevron-right'} size={30} color={'#eee0cb'}/>
        </View>
        <ScrollView style={styles.listScroll}>
        <View style={[styles.RecCard]}>
          <View style={styles.RecCardInfo}>
            <Text style={styles.RecCardTitle}>Thruwaida Kunambi</Text>
            <Text style={styles.RecCardPara}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facilis voluptas blanditiis beatae expedita illum doloribus earum aspernatur, ullam exercitationem iste.</Text>
            </View>
          <View style={styles.customerImg}>
            <Image style={styles.prodImgSmallRec} source={require('../assets/customer1.jpg')}/>
          </View>
        </View>
        <View style={[styles.RecCard]}>
          <View style={styles.RecCardInfo}>
            <Text style={styles.RecCardTitle}>Joline Catfish</Text>
            <Text style={styles.RecCardPara}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facilis voluptas blanditiis beatae expedita illum doloribus earum aspernatur, ullam exercitationem iste.</Text>
            </View>
          <View style={styles.customerImg}>
            <Image style={styles.prodImgSmallRec} source={require('../assets/customer2.jpg')}/>
          </View>
        </View>
        <View style={[styles.RecCard]}>
          <View style={styles.RecCardInfo}>
            <Text style={styles.RecCardTitle}>Doris Maitaip</Text>
            <Text style={styles.RecCardPara}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facilis voluptas blanditiis beatae expedita illum doloribus earum aspernatur, ullam exercitationem iste.</Text>
            </View>
          <View style={styles.customerImg}>
            <Image style={styles.prodImgSmallRec} source={require('../assets/customer3.jpg')}/>
          </View>
        </View>
        <View style={[styles.RecCard]}>
          <View style={styles.RecCardInfo}>
            <Text style={styles.RecCardTitle}>Maisha Tabu</Text>
            <Text style={styles.RecCardPara}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facilis voluptas blanditiis beatae expedita illum doloribus earum aspernatur, ullam exercitationem iste.</Text>
            </View>
          <View style={styles.customerImg}>
            <Image style={styles.prodImgSmallRec} source={require('../assets/customer3.jpg')}/>
          </View>
        </View>
        <View style={[styles.RecCard]}>
          <View style={styles.RecCardInfo}>
            <Text style={styles.RecCardTitle}>Bila Barakoa</Text>
            <Text style={styles.RecCardPara}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facilis voluptas blanditiis beatae expedita illum doloribus earum aspernatur, ullam exercitationem iste.</Text>
            </View>
          <View style={styles.customerImg}>
            <Image style={styles.prodImgSmallRec} source={require('../assets/customer2.jpg')}/>
          </View>
        </View>
        <View style={[styles.RecCard]}>
          <View style={styles.RecCardInfo}>
            <Text style={styles.RecCardTitle}>Ndogo Tamu</Text>
            <Text style={styles.RecCardPara}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Facilis voluptas blanditiis beatae expedita illum doloribus earum aspernatur, ullam exercitationem iste.</Text>
            </View>
          <View style={styles.customerImg}>
            <Image style={styles.prodImgSmallRec} source={require('../assets/customer2.jpg')}/>
          </View>
        </View>
        </ScrollView>
      </View>                              
    </View>
  )
}

export default TabCustomer

const styles = StyleSheet.create({
  text:{
    top:10,
    paddingBottom:10,
    paddingLeft:15,
    fontFamily:'Roboto-Regular',
    fontSize:30,
    color:'#eee0cb'
  },
  textPress:{
    marginBottom:0,
    fontFamily:'Roboto-Thin',
    fontSize:20,
    color:'#eee0cb'
  },
  createSec:{
    flex:1,
    flexDirection:'row',
    justifyContent:'center',
    backgroundColor:'f6f6f6',
  },
  createPress:{
    top:20,
    paddingTop:40,
    elevation:100,
    marginHorizontal:10,
    borderRadius:40,
    alignItems:'center',
    height:150,
    width:180,
    backgroundColor:'#0c1821',
    //IOS SHADOWS
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 2,
  },
  list:{
    top:200,
  },
  listTitle:{
    fontFamily:'Inter',
    fontSize:40,
    textAlign:'center',
    marginBottom:10,
    color:'#eee0cb'
  },
  listScroll:{
    height:470,
    marginBottom:800,
    elevation:30,
    flexDirection:'column',
    //IOS SHADOWS
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 2,
  },
  RecCard:{
    flex:1,
    flexDirection:'row-reverse',
    alignItems:'center',
    width: 380,
    height: 120,
    marginRight: 10,
    elevation:50,
    borderRadius: 10,
    backgroundColor: '#0c1821',
    marginBottom:10,
    //IOS SHADOWS
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 2,
  },
  RecCardInfo:{
    top:10,
    left:10,
    height:100,
    width:230,
    textAlign:'left',
    color:'#eee0cb'
  },
  RecCardTitle:{
    fontFamily:'Inter',
    color:'#b4b9c1',
    fontSize:20,
    fontWeight:'bold',
    textAlign:'left',
  },
  RecCardPara:{
    fontFamily:'Roboto-Bold',
    fontSize:15,
    textAlign:'left',
    color:'#eee0cb',
  },
  customerImg:{
    left:40,
    alignItems:'center',
  },
  customerHeader:{
    flexDirection:'row',
    justifyContent:'space-evenly',
    alignItems:'center'
  },
  prodImgSmallRec:{    
    height:100,
    width:100,
    borderRadius:100,
    resizeMode:'contain'
  }
})