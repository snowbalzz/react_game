import React, { useState, useEffect } from "react";
import { Button, StyleSheet, Text, View } from "react-native";

export default function VirtualPet() {

    //Pet alive?
    const [alive, setAlive] = useState(true);

    //Pet Status
    const [emotion, setEmotion] = useState("ok")

    //Pet variables
    const [mood, setMood] = useState(75);
    const [hungry, setHungry] = useState(25);
    const [energy, setEnergy] = useState(75);


    const [counter, setCounter] = useState(0);
    const [start, setStart] = useState(false);
 
    useEffect(() => {
    const countTimer = setInterval(() => {
    if(start){
        if (alive) {
            setCounter(counter+1);
            emotions();
            timeTick();
        } 
    } else {
        return;
    }
    }, 1000);
    //Unmount
    return function cleanup() {
      clearInterval(countTimer);
    };
    });

    function sleep(){
        if (!alive) return; // Ignore tick if cat died
        setMood(mood-5)
        setHungry(hungry+5);
        setEnergy(energy+15);
        updateCondition();
    }

    function play(){
        if (!alive) return; // Ignore tick if cat died
        setMood(mood+15)
        setHungry(hungry+5);
        setEnergy(energy-5);
        updateCondition();
    }

    function feed(){
        if (!alive) return; // Ignore tick if cat died
        setMood(mood-15)
        setHungry(hungry-5);
        setEnergy(energy-15);
        updateCondition();
    }

     function updateCondition() {
        // Take more hunger if you are in a bad mood or there is no energy
        if (mood <= 50) setHungry(hungry+1);
        if (energy <= 50) setHungry(hungry+1);

        
        // Set minimal posibal values
        if (mood <= 0) setMood(0)
        if (hungry <= -20)setHungry(hungry-20);
        if (energy <= 0) setEnergy(0);

        // Set largest possible values
        if (mood > 100) setMood(100);
        if (hungry > 100) setHungry(100);
        if (energy > 100) setEnergy(100);
        
        // If something is missing
        if (mood === 0) setAlive(false);
        if (energy === 0) setAlive(false);
        if (hungry === -20 || hungry === 100) setAlive(false);
    }

    function emotions(){

        // Dead cat
        if (!alive) {
            setEmotion('DEADORIONO')
            return;
        }

        // Sad cat
        if (mood <= 50 || energy <= 50 || hungry >= 50 || hungry < 0) {
            setEmotion('BAD')
            return;
        }

        // Happy cat
        if (mood > 75 && energy > 75 && hungry < 25) {
            setEmotion("HEPPY")
            return;
        }

        // Normal cat
        setEmotion("IM OKEI, IM NOT ALKOHOLIC")
    }

    /**
     * Updating the state of the cat
     */
     function timeTick(){
        if (!alive) return; // Ignore tick if cat died

        setMood(mood-0.5)
        setHungry(hungry+1);
        setEnergy(energy-0.5);

        updateCondition();
    }

  return (
    <View style={styles.container}>
      <Text style={{fontSize:100}}>🦈</Text>
        {(alive)? <Text>Status: Alive</Text> :  <Text>Status: Dead</Text> }
      <Text>Not dead for {counter} seconds!</Text>
      <Text>What am I? {emotion}</Text>
      <View style={styles.margin}>
        <Text onPress={play}>Mood: {Math.floor(mood)}</Text>
      </View>
      <View style={styles.margin}>
        <Text onPress={()=>{feed();}}>Hungry: {Math.floor(hungry)}</Text>
      </View>
      <View style={styles.margin}>
        <Text onPress={()=>{sleep();}}>Energy: {Math.floor(energy)}</Text>
      </View>
      <Button
        title="on/off"
        onPress={() => {
            (start) ? setStart(false) : setStart(true);
        }}
      />
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
