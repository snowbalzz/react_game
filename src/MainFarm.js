import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import Modal from "react-native-modal";
import AwesomeButton from "react-native-really-awesome-button";
import Card from "./Card";
import { useAtom } from "jotai";
import { counterAtom, fishPerSecAtom, sets } from "./props";

export default function MainFarm() {
  //Main Counter
  const [counter, setCounter] = useAtom(counterAtom);
  const [clicks, setClicks] = useState(1);
  const [fishPerSec, setFishPerSec] = useAtom(fishPerSecAtom);

  useEffect(() => {
    const countTimer = setInterval(() => {
      setCounter((old) => old + fishPerSec / 20);
      checks();
    }, 50);
    //Unmount
    return function cleanup() {
      clearInterval(countTimer);
    };
  }, [fishPerSec]);

  //Feeders
  const [FeederPrice, setFeederPrice] = useState(15);
  const [FeederConst, setFeederConst] = useState(0.1);
  const [FeederCount, setFeederCount] = useState(0);

  //Automatic FisherMan
  const [FisherManPrice, setFisherManPrice] = useState(100);
  const [FisherManConst, setFisherManConst] = useState(1);
  const [FisherManCount, setFisherManCount] = useState(0);

  //Auto FishFarm
  const [FishFarmPrice, setFishFarmPrice] = useState(1000);
  const [FishFarmConst, setFishFarmConst] = useState(10);
  const [FishFarmCount, setFishFarmCount] = useState(0);

  //Auto Fish Incuabtor
  const [IncubatorPrice, setIncubatorPrice] = useState(12000);
  const [IncubatorConst, setIncubatorConst] = useState(56);
  const [IncubatorCount, setIncubatorCount] = useState(0);

  //Fish Facory
  const [FishFactoryPrice, setFishFactoryPrice] = useState(160000);
  const [FishFactoryConst, setFishFactoryConst] = useState(226);
  const [FishFactoryCount, setFishFactoryCount] = useState(0);

  const [isModalVisible, setModalVisible] = useState(false);

  const [state, setState] = useAtom(sets);
  const [current, setCurrent] = useState(state.default);
  
  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  let upgrades = [
    {
      image: state.feeder,
      count: FeederCount,
      passed: false,
      unlocked: false,
      required: 10,
    }, 
    {
      image: state.fisherman,
      count: FisherManCount,
      passed: false,
      unlocked: false,
      required: 300,
    }, 
    {
      image: state.fishfarm,
      count: FishFarmCount,
      passed: false,
      unlocked: false,
      required: 1000,
    }, 
    {
      image: state.incubator,
      count: IncubatorCount,
      passed: false,
      unlocked: false,
      required: 1200,
    }, 
    {
      image: state.factory,
      count: FishFactoryCount,
      passed: false,
      unlocked: false,
      required: 10000,
    }, 
  ];

  const checks = () => {
    upgrades.forEach(element => {
        imageChange(element);
        if(element.required < counter && !element.unlocked) {
          console.log('Unlocked!');
        }
    });
  };

  function imageChange(element) {
    if (!element.passed) {
      if (element.count > 0) {
        setCurrent(element.image);
        element.passed = true;
      }
    }
  }

  return (
    <View style={styles.container}>

      <View
        style={{
          position: "absolute",
          zIndex: 9999,
          top: 30,
          backgroundColor: "white",
          width: "60%",
          height: "10%",
          borderRadius: 4,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text style={styles.pink}>{Math.floor(counter)} 🐠</Text>
      </View>
      <View
        style={{
          position: "absolute",
          zIndex: 999,
          top: 35,
          backgroundColor: "#bcc1db",
          width: "60%",
          height: "10%",
          borderRadius: 4,
          justifyContent: "center",
          alignItems: "center",
        }}
      ></View>

      <View
        style={{
          position: "absolute",
          zIndex: 99,
          top: 39,
          backgroundColor: "gray",
          width: "59%",
          height: "10%",
          borderRadius: 4,
          justifyContent: "center",
          alignItems: "center",
          opacity: 0.3,
        }}
      ></View>
      <View
        style={{
          position: "absolute",
          zIndex: 99999,
          top: 95,
          width: "60%",
          height: "10%",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text style={styles.white}>
          {Math.round((fishPerSec + Number.EPSILON) * 100) / 100} f/s
        </Text>
      </View>
      
      <View
        style={{
          position: "absolute",
          zIndex: 9999,
          top: 98,
          width: "60%",
          height: "10%",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text
          style={{
            color: "#abaec0",
            fontWeight: "bold",
            fontSize: 25,
            fontFamily: "Futura",
          }}
        >
          {Math.round((fishPerSec + Number.EPSILON) * 100) / 100} f/s
        </Text>
      </View>
      <View
        style={{
          position: "absolute",
          zIndex: 999,
          top: 100,
          width: "60%",
          height: "10%",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text
          style={{
            color: "gray",
            fontWeight: "bold",
            fontSize: 25,
            fontFamily: "Futura",
            opacity:0.4,
          }}
        >
          {Math.round((fishPerSec + Number.EPSILON) * 100) / 100} f/s
        </Text>
      </View>

      <TouchableOpacity
        style={{ color: "green" }}
        disabled={false}
        onPress={() => {
          setCounter((old) => old + clicks);
        }}
      >
        <Image style={{ height: 250, width: 350 }} source={current} />
      </TouchableOpacity>
      <View style={styles.Upgrades}>
        <AwesomeButton
          backgroundColor="#ffffff"
          textColor="#abaec0"
          backgroundDarker="#bcc1db"
          backgroundActive="#ffffff"
          onPress={() => {
            toggleModal();
          }}
          borderWidth={2}
          borderColor="#ffffff"
          textSize={30}
          width={300}
          height={70}
          raiseLevel={5}
          fontFamily="Futura"
        >
          Upgrades
        </AwesomeButton>
      </View>

      <Modal
        isVisible={isModalVisible}
        swipeDirection={["down"]}
        style={styles.modalContainer}
      >
        <View style={styles.UpgradeLabel}>
          <Text
            style={{
              fontFamily: "Futura",
              color: "white",
              fontSize: 20,
              fontWeight: "bold",
            }}
          >
            Upgrade your Empire
          </Text>
        </View>

        <Card
          name={"Auto Feeders"}
          count={FeederCount}
          price={FeederPrice}
          setCount={setFeederCount}
          const={FeederConst}
          setPrice={setFeederPrice}
        />

        <Card
          name={"Fisher Man"}
          count={FisherManCount}
          price={FisherManPrice}
          setCount={setFisherManCount}
          const={FisherManConst}
          setPrice={setFisherManPrice}
        />

        <Card
          name={"Fish Farm"}
          count={FishFarmCount}
          price={FishFarmPrice}
          setCount={setFishFarmCount}
          const={FishFarmConst}
          setPrice={setFishFarmPrice}
        />

        <Card
          name={"Incubators"}
          count={IncubatorCount}
          price={IncubatorPrice}
          setCount={setIncubatorCount}
          const={IncubatorConst}
          setPrice={setIncubatorPrice}
        />

        <Card
          name={"Fish Factory"}
          count={FishFactoryCount}
          price={FishFactoryPrice}
          setCount={setFishFactoryCount}
          const={FishFactoryConst}
          setPrice={setFishFactoryPrice}
        />

        <View style={styles.QuitButton}>
          <TouchableOpacity style={{}} disabled={false} onPress={toggleModal}>
            <Text
              style={{
                fontFamily: "Futura",
                color: "white",
                fontSize: 25,
                fontWeight: "bold",
              }}
            >
              Close
            </Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  pink: {
    color: "#abaec0",
    fontSize: 25,
    fontWeight: "bold",
    fontFamily: "Futura",
  },
  white: {
    color: "white",
    fontWeight: "bold",
    fontSize: 25,
    fontFamily: "Futura",
  },
  container: {
    flex: 1,
    backgroundColor: "pink",
    alignItems: "center",
    justifyContent: "center",
  },
  modalContainer: {
    flex: 0.9,
    padding: 20,
    margin: 30,
    marginTop: 90,
    borderRadius: 15,
    backgroundColor: "white",
  },
  QuitButton: {
    position: "absolute",
    backgroundColor: "pink",
    height: "10%",
    width: "50%",
    borderRadius: 15,

    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    zIndex: 99,
    bottom: -35,
  },

  UpgradeLabel: {
    position: "absolute",
    backgroundColor: "pink",
    height: "10%",
    width: "100%",
    borderRadius: 15,

    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    zIndex: 99,
    top: -35,
  },
  Upgrades: {
    position: "absolute",
    alignSelf: "center",
    zIndex: 99,
    bottom: 20,
  },
  Clicks: {
    position: "absolute",
    zIndex: 999,
  },
});
