import React, { useState, useEffect } from "react";
import {
  Button,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
} from "react-native";

export default function Card(props){

  function BuyUpgrade() {
    if (props.counter >= props.price) {
      props.setCount(props.count + 1);
      props.setPerSec(props.const + props.perSec);
      props.setTotal(props.counter - props.perSec);
      props.setPrice(props.price + props.price * 0.1);
    }
  }

    return(
      <View style={styles.mainCardView}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <View>
              <Text style={{fontSize: 14, color: 'black', fontWeight: 'bold', textTransform: 'capitalize',}}>
                {props.name}
              </Text>
              <View>
                <Text
                  style={{
                    color: "gray",
                    fontSize: 12,
                  }}>
                  {props.count} {props.name} at work
                </Text>
                <Text
                  style={{
                    color: "gray",
                    fontSize: 12,
                  }}>
                  {props.name} price: {Math.floor(props.price)}
                </Text>
              </View>
            </View>
          </View>
          <View
            style={styles.BuyButton}>
            <TouchableOpacity
                style={{ color: "green" }}
                disabled={false}
                onPress={() => {
                  BuyUpgrade()
                }}
              >
                <Text style={{color: 'pink', fontSize:30, fontWeight:'bold'}}>
                Buy
                </Text>
              </TouchableOpacity>
          </View>
        </View>

    );

}

const styles = StyleSheet.create({
  pink: {
      color: "#ccd0e7",
      fontSize: 20,
      fontWeight:"bold"
  },
  white: {
      color: "black",
      fontWeight:'bold',
      fontSize: 15,
  },
  container: {
      flex: 1,
      backgroundColor: "pink",
      alignItems: "center",
      justifyContent: "center",
  },

  modalContainer: {
      flex:0.9,
      padding: 20,
      margin:30,
      marginTop:90,
      borderRadius: 15,
      backgroundColor:'white',
  },
  Card:{
      height:"100%",
      width:"100%",
      backgroundColor:'red',
      borderRadius:15,
  }, 
  BuyButton:{
      position:'absolute',
      height:"100%",
      width:"40%",
      justifyContent: 'center',
      alignItems:'center',
      alignSelf:'flex-end',
      zIndex:99,
  },
  mainCardView: {
      margin:5,
      padding:20,
      flex:0.2,
      justifyContent: 'center',
      alignItems:'flex-start',
      backgroundColor: 'white',
      borderRadius: 15,
      shadowColor: '#ccd0e7',
      shadowOffset: {width: 0, height: 0},
      shadowOpacity: 1,
      shadowRadius: 8,
      elevation: 3,
  },
  QuitButton:{
      position:'absolute',
      backgroundColor: 'pink',
      height:"10%",
      width:"50%",
      borderRadius: 15,
      
      justifyContent: 'center',
      alignItems:'center',
      alignSelf:'center',
      zIndex:99,
      bottom: -35,
  },
  UpgradeLabel:{
      position:'absolute',
      backgroundColor: 'pink',
      height:"10%",
      width:"100%",
      borderRadius: 15,
      
      justifyContent: 'center',
      alignItems:'center',
      alignSelf:'center',
      zIndex:99,
      top:-35,
  },
  Upgrades:{
      margin:20,
      position:'absolute',
      alignSelf:'center',
      zIndex:99,
      bottom:0,
  }
});

