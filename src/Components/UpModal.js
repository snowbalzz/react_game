import React, { useState} from "react";
import { StyleSheet, Text, View, TouchableOpacity, Image, Button } from "react-native";
import Modal from "react-native-modal";
import Card from "./Card";
import { useAtom } from "jotai";

import {
  FeederAmount, 
  FisherManAmount, 
  FishFarmAmount, 
  IncubatorAmount, 
  FishFactoryAmount} 
from '../Store/props'



export default function UpgradeModal(props) {

  //Feeders
  const [FeederPrice, setFeederPrice] = useState(15);
  const [FeederConst, setFeederConst] = useState(0.1);

  const [FeederCount, setFeederCount] = useAtom(FeederAmount);

  //Automatic FisherMan
  const [FisherManPrice, setFisherManPrice] = useState(100);
  const [FisherManConst, setFisherManConst] = useState(1);

  const [FisherManCount, setFisherManCount] = useAtom(FisherManAmount);

  //Auto FishFarm
  const [FishFarmPrice, setFishFarmPrice] = useState(1000);
  const [FishFarmConst, setFishFarmConst] = useState(10);

  const [FishFarmCount, setFishFarmCount] = useAtom(FishFarmAmount);

  //Auto Fish Incuabtor
  const [IncubatorPrice, setIncubatorPrice] = useState(12000);
  const [IncubatorConst, setIncubatorConst] = useState(56);

  const [IncubatorCount, setIncubatorCount] = useAtom(IncubatorAmount);

  //Fish Facory
  const [FishFactoryPrice, setFishFactoryPrice] = useState(160000);
  const [FishFactoryConst, setFishFactoryConst] = useState(226);

  const [FishFactoryCount, setFishFactoryCount] = useAtom(FishFactoryAmount);

  return (
    <Modal
        isVisible={props.isModalVisible}
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
          <TouchableOpacity style={{}} disabled={false} onPress={props.toggleModal}>
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
  );
}

const styles = StyleSheet.create({
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