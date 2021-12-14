
import React, { useState, useEffect } from "react";
import {
  Image
} from "react-native";

export default function Aquarium(props){

    const [state, setState] = useState();

    return <Image style={{height:250, width:350}} source={ImageReturn} />
}