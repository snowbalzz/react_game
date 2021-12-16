import { useAtom } from "jotai";
import React, { useState, useEffect } from "react";
import {
  Button,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { counterAtom, fishPerSecAtom, press } from "../Store/props";


export default function Card(props){

  const [total, setTotal] = useAtom(counterAtom);
  const [fishPerSec, setFishPerSec] = useAtom(fishPerSecAtom);

  function BuyUpgrade() {
    if (total>= props.price) {
      props.setCount(props.count + 1);
      setFishPerSec(props.const + fishPerSec);
      setTotal(total - props.price);
      props.setPrice(15 * (1.15**(props.count)));   
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
                  BuyUpgrade();
                }}
              >
                <Text style={{ fontFamily:"Futura", color: 'pink', fontSize:30, fontWeight:'bold'}}>
                Buy
                </Text>
              </TouchableOpacity>
          </View>
        </View>

    );

}

const styles = StyleSheet.create({
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
});

