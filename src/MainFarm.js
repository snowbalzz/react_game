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
import Card from "./Card";

//TODO BUG, autoamtic fish not added while clicking the main fish

export default function MainFarm() {

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

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };
  

  return (
    <View style={styles.container}>
      <View style={{position:'absolute', zIndex: 999, top:30,backgroundColor:"white", width:"90%", height:"10%", borderRadius:15, justifyContent: 'center',
        alignItems:'center',}}>
      <Text style={styles.pink}>{Math.floor(counter)}  🐠</Text>
      </View>
      <View style={{position:'absolute', zIndex: 9999, top:80,backgroundColor:"pink", width:"60%", height:"10%", borderRadius:15, borderWidth:2,borderColor:"white", justifyContent: 'center',
        alignItems:'center',}}>
      <Text style={styles.white}>
        {Math.round((fishPerSec + Number.EPSILON) * 100) / 100} f/s
      </Text>
      </View>
      <TouchableOpacity
        style={{ color: "green" }}
        disabled={false}
        onPress={() => {
          setCounter(counter +clicks);
        }}
      >
    <Text style={{ fontSize: 300}}>🐠</Text>
      </TouchableOpacity>

      <View style={styles.Upgrades}>
      <AwesomeButton
        backgroundColor="#ffffff"
        textColor="#ccd0e7"
        backgroundDarker="#ccd0e7"
        backgroundActive="#ffffff"
       onPress={() => {
        toggleModal();
       }}
       borderWidth={2}
       borderColor="#ffffff"
       textSize={30}
       width={200}
       height={70}
       raiseLevel={8}
     >
       Upgrades
     </AwesomeButton>
      </View>

      <Modal isVisible={isModalVisible} swipeDirection={['down']} style={styles.modalContainer}>

        <View
            style={styles.UpgradeLabel}>
                <Text style={{color: 'white', fontSize:20, fontWeight:'bold'}}>
                Upgrade your Empire
                </Text>
        </View>

        <Card name={'Auto Feeders'} count={feedertCount} price={feederPrice} counter={counter} perSec={fishPerSec} setCount={setFeederCount} const={feederConst} setPerSec={setFishPerSec} setTotal={setCounter} setPrice={setFeederPrice} />
        
        <Card name={'Fisher Man'}count={FisherManCount} price={FisherManPrice} counter={counter} perSec={fishPerSec} setCount={setFisherManCount} const={FisherManConst} setPerSec={setFishPerSec} setTotal={setCounter} setPrice={setFisherManPrice} />
        
        <Card name={"Fish Farm"}count={FishFarmCount} price={FishFarmPrice} counter={counter} perSec={fishPerSec} setCount={setFishFarmCount} const={FishFarmConst} setPerSec={setFishPerSec} setTotal={setCounter} setPrice={setFishFarmPrice} />

        <Card name={"Incubators"}count={IncubatorCount} price={IncubatorPrice} counter={counter} perSec={fishPerSec} setCount={setIncubatorCount} const={IncubatorConst} setPerSec={setFishPerSec} setTotal={setCounter} setPrice={setIncubatorPrice} />

        <Card name={"Fish Factory"}count={FishFactoryCount} price={FishFactoryPrice} counter={counter} perSec={fishPerSec} setCount={setFishFactoryCount} const={FishFactoryConst} setPerSec={setFishPerSec} setTotal={setCounter} setPrice={setFishFactoryPrice} />

        <View
            style={styles.QuitButton}>
            <TouchableOpacity
                style={{

                }}
                disabled={false}
                onPress={toggleModal}
              >
                <Text style={{color: 'white', fontSize:25, fontWeight:'bold'}}>
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
