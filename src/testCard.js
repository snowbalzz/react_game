import React, { useState, useEffect } from "react";
import {
  Button,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
} from "react-native";

export default function TestCard(props){

  const [price, setPrice] = useState(props.upgrades.price);
  const [conste, setConste] = useState(props.upgrades.const);
  const [count, setCount] = useState(props.upgrades.count);

  function BuyUpgrade() {
    if (props.counter >= price) {
      setCount(count + 1);
      props.setPerSec(conste+ props.perSec);
      props.setTotal(props.counter - price);
      setPrice(price + price * 0.1);
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
                  {count} {props.name} at work
                </Text>
                <Text
                  style={{
                    color: "gray",
                    fontSize: 12,
                  }}>
                  {props.name} price: {Math.floor(price)}
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

