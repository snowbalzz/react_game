import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import {
  Button,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import Modal from "react-native-modal";
import AwesomeButton from 'react-native-really-awesome-button';
import Card from "./Card"

//TODO BUG, autoamtic fish not added while clicking the main fish

export default function FishFarming() {

  

  const [pressed, setPressed] = useState(false);


  const [counter, setCounter] = useState(0);
  const [clicks, setClicks] = useState(1);
  const [fishPerSec, setFishPerSec] = useState(0);


  useEffect(() => {
    const countTimer = setInterval(() => {
      //BUG HERE
      setCounter(old => old + fishPerSec / 20)

    }, 50);
    //Unmount
    return function cleanup() {
      clearInterval(countTimer);
    };
  }, [fishPerSec]);

  //Automatic Feeders
  const [feederPrice, setFeederPrice] = useState(15);
  const [feederConst, setFeederConst] = useState(0.1);
  const [feedertCount, setFeederCount] = useState(0);

  function Feeder() {
    if (counter >= feederPrice) {
      setFeederCount(feedertCount + 1);
      setFishPerSec(feederConst + fishPerSec);
      setCounter(counter - feederPrice);
      setFeederPrice(feederPrice + feederPrice * 0.1);
    }
  }

  const [rotate, setRotate] =useState(false);

  function rotation(){
    (rotate)
    ? 
    setRotate(false) 
    : 
    setRotate(true);
  }

  //Automatic FisherMan
  const [FisherManPrice, setFisherManPrice] = useState(100);
  const [FisherManConst, setFisherManConst] = useState(1);
  const [FisherManCount, setFisherManCount] = useState(0);

  function FisherMan() {
    if (counter >= FisherManPrice) {
      setFisherManCount(FisherManCount + 1);
      setFishPerSec(FisherManConst + fishPerSec);
      setCounter(counter - FisherManPrice);
      setFisherManPrice(FisherManPrice + FisherManPrice * 0.12);
    }
  }

  //Auto FishFarm
  const [FishFarmPrice, setFishFarmPrice] = useState(1000);
  const [FishFarmConst, setFishFarmConst] = useState(10);
  const [FishFarmCount, setFishFarmCount] = useState(0);

  function FishFarm() {
    if (counter >= FishFarmPrice) {
      setFishFarmCount(FishFarmCount + 1);
      setFishPerSec(FishFarmConst + fishPerSec);
      setCounter(counter - FishFarmPrice);
      setFishFarmPrice(FishFarmPrice + FishFarmPrice * 0.12);
    }
  }

  //Auto Fish Incuabtor
  const [IncubatorPrice, setIncubatorPrice] = useState(12000);
  const [IncubatorConst, setIncubatorConst] = useState(56);
  const [IncubatorCount, setIncubatorCount] = useState(0);

  function Incubator() {
    if (counter >= IncubatorPrice) {
      setIncubatorCount(IncubatorCount + 1);
      setFishPerSec(IncubatorConst + fishPerSec);
      setCounter(counter - IncubatorPrice);
      setIncubatorPrice(IncubatorPrice + IncubatorPrice * 0.12);
    }
  }

  //Fish Facory
  const [FishFactoryPrice, setFishFactoryPrice] = useState(160000);
  const [FishFactoryConst, setFishFactoryConst] = useState(226);
  const [FishFactoryCount, setFishFactoryCount] = useState(0);

  function FishFactory() {
    if (counter >= FishFactoryPrice) {
      setFishFactoryCount(FishFactoryCount + 1);
      setFishPerSec(FishFactoryConst + fishPerSec);
      setCounter(counter - FishFactoryPrice);
      setFishFactoryPrice(FishFactoryPrice + FishFactoryPrice * 0.12);
    }
  }

  const [isModalVisible, setModalVisible] = useState(false);

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };


  return (
    <View style={styles.container}>
      <Text style={styles.white}>{Math.floor(counter)} Fish</Text>
      <Text style={styles.white}>
        {Math.round((fishPerSec + Number.EPSILON) * 100) / 100} Fish/Sec
      </Text>
      <TouchableOpacity
        style={{ color: "green" }}
        disabled={false}
        onPress={() => {
          setCounter(counter +clicks);
        }}
      >
        <Text style={{ fontSize: 150}}>????</Text>
      </TouchableOpacity>
      <AwesomeButton
        backgroundColor="#ffffff"
        textColor="#ccd0e7"
        backgroundDarker="#ccd0e7"
        backgroundActive="#ffffff"
       onPress={() => {
        toggleModal();
       }}
       borderWidth={2}
       borderColor="#ccd0e7"
       textSize={30}
       width={200}
       height={70}
       raiseLevel={8}
     >
       Upgrades
     </AwesomeButton>

      <Modal isVisible={isModalVisible} swipeDirection={['down']}>
        <View style={styles.modalContainer}>
          <View style={{ flex: 1 }}>

            <Card {...Props}/>

            {(counter >= feederPrice) 
              ? <TouchableOpacity
                style={{ color: "green" }}
                disabled={false}
                onPress={() => {
                  Feeder();
                }}

              >
                <Text style={{ fontSize: 20, color: "green" }}>Feeder</Text>
              </TouchableOpacity>
            
            : <Text style={{ fontSize: 20, color: "red" }}>Feeder</Text>

            }
            <Text style={styles.white}>
              Feeder Price: {Math.floor(feederPrice)}
            </Text>
            <Text style={styles.white}>{feedertCount} Feeders at work.</Text>

            <View style={{ margin: 10 }}></View>

            {(counter >= FisherManPrice) ? (
              <TouchableOpacity
                style={{ color: "green" }}
                disabled={false}
                onPress={() => {
                  FisherMan();
                }}
              >
                <Text style={{ fontSize: 20, color: "green" }}>FisherMan</Text>
              </TouchableOpacity>
            ) : (
              <Text style={{ fontSize: 20, color: "red" }}>FisherMan</Text>
            )}
            <Text style={styles.white}>
              Fisher man Price: {Math.floor(FisherManPrice)}
            </Text>
            <Text style={styles.white}>
              {FisherManCount} Fisherman at work.
            </Text>

            <View style={{ margin: 10 }}></View>

            {counter >= FishFarmPrice ? (
              <TouchableOpacity
                style={{ color: "green" }}
                disabled={false}
                onPress={() => {
                  FishFarm();
                }}
              >
                <Text style={{ fontSize: 20, color: "green" }}>FishFarm</Text>
              </TouchableOpacity>
            ) : (
              <Text style={{ fontSize: 20, color: "red" }}>FishFarm</Text>
            )}
            <Text style={styles.white}>
              Fish farm price: {Math.floor(FishFarmPrice)}
            </Text>
            <Text style={styles.white}>{FishFarmCount} FishFarms at work.</Text>

            <View style={{ margin: 10 }}></View>

            {counter >= IncubatorPrice ? (
              <TouchableOpacity
                style={{ color: "green" }}
                disabled={false}
                onPress={() => {
                  Incubator();
                }}
              >
                <Text style={{ fontSize: 20, color: "green" }}>Incubator</Text>
              </TouchableOpacity>
            ) : (
              <Text style={{ fontSize: 20, color: "red" }}>Incubator</Text>
            )}
            <Text style={styles.white}>
              Fish incubator price: {Math.floor(IncubatorPrice)}
            </Text>
            <Text style={styles.white}>
              {IncubatorCount} incubators at work.
            </Text>

            <View style={{ margin: 10 }}></View>

            {counter >= FishFactoryPrice ? (
              <TouchableOpacity
                style={{ color: "green" }}
                disabled={false}
                onPress={() => {
                  FishFactory();
                }}
              >
                <Text style={{ fontSize: 20, color: "green" }}>
                  Fish Factory
                </Text>
              </TouchableOpacity>
            ) : (
              <Text style={{ fontSize: 20, color: "red" }}>Fish Factory</Text>
            )}
            <Text style={styles.white}>
              Fish factory price: {Math.floor(FishFactoryPrice)}
            </Text>
            <Text style={styles.white}>
              {FishFactoryCount} factories at work.
            </Text>

            <Button title="Hide Upgrades" onPress={toggleModal} />
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  white: {
    color: "grey",
    fontSize: 20,
  },
  container: {
    flex: 1,
    backgroundColor: "pink",
    alignItems: "center",
    justifyContent: "center",
  },
  margin: {
    margin: 10,
    borderWidth: 2,
    borderRadius: 15,
    borderColor: "teal",
    padding: 10,
  },
  modalContainer: {
    flex: 1,
    margin: 5,
    padding: 20,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
    borderRadius: 15,
  },
});
