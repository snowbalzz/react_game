import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import { Button, StyleSheet, Text, View } from "react-native";


export default function Cookies() {

  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const countTimer = setInterval(() => {
      setCounter(counter + auto);
    }, 1000);
    //Unmount
    return function cleanup() {
      clearInterval(countTimer);
    };
  });

  const [costAuto, setCostAuto] = useState(15);
  const [auto, setAuto] = useState(0);

  function buyAutoClick() {
    if (counter >= costAuto) {
      setAuto(auto + 0.1);
      setCounter(counter - costAuto);
      setCostAuto(costAuto+(costAuto*0.1));
    } else {
      console.log("not enough money man - 2");
    }
  }

  const [clicks, setClicks] = useState(1);
  const [cost, setCost] = useState(100);


  function buyCLicks() {
    if (counter >= cost) {
      setClicks(clicks + 1);
      setCounter(counter - cost);
      setCost(cost*clicks);
    } else {
      console.log("not enough money man");
    }
  }

  return (
    <View style={styles.container}>
      <Text>{Math.floor(counter)} SeaWeed</Text>
      <Button
        title="Press Me"
        onPress={() => {
          setCounter(counter + clicks);
        }}
      />

      {(counter >= cost)?
      <View style={styles.margin}>
        <Text>Press price: {cost} SeaWeed</Text>
        <Button
          title="Buy +1 press"
          onPress={() => {
            buyCLicks();
          }}
        />
        <Text>You are doing {clicks} presses per one press</Text>
      </View> 
      :  
      <View style={styles.margin}>
        <Text>You are doing {clicks} presses per one press</Text>
      </View> 
      }

      { (counter >= costAuto) ? 
      <View style={styles.margin}>
        <Text>Auto Press price: {Math.floor(costAuto)} SeaWeed</Text>
        <Button
          title="Autopress"
          onPress={() => {
            buyAutoClick();
          }}
        />
        <Text>Feeding {Math.round((auto + Number.EPSILON) * 100) / 100} SeaWeed per Second </Text>
      </View>
      :
      <View style={styles.margin}>
        <Text>Feeding {auto} SeaWeed per Second </Text>
      </View>
      }
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
  },
  margin: {
    margin: 10,
    borderWidth:2,
    borderRadius:15,
    borderColor:"teal",
    padding:10,
  },
});
