import React from "react";
import { StyleSheet } from "react-native";

const styles= StyleSheet.create({
  contextImc:{
    // flex:1,
    marginTop:5,
    paddingTop: 5,
    borderRadius:50,
    alignItems:'center',
    width:'100%',
  },
  resultImc:{
    fontSize:48,
    color:'#ff0043',
    fontWeight:'bold',
  },
  titleResultImc:{
    fontSize:18,
    color:'#ff0043',
    fontWeight:'bold',
  },
  boxShareButton:{
    width:'100%',
    alignItems:'center',
    marginBottom:10,
  },
  sharedButton:{
    backgroundColor:'#1877f2',
    borderRadius:50,
    paddingTop:5, 
    paddingBottom:5,

  },
  sharedText:{
    color:'#fff',
    fontWeight:'bold',
    paddingHorizontal: 30,

  },
})

export default styles