//import axios from "axios";
import React,{Component} from "react";
import { Text,View,StyleSheet,SafeAreaView, Platform, StatusBar, TouchableOpacity,ImageBackground,Image, Alert, TextInput} from "react-native";
//import MapView,{ Marker } from "react-native-maps";
import WebView from "react-native-webview";

export default class StartMap extends Component{
    constructor(props){
        super(props)
        this.state={
            latitude:'',
            longitude:''
        }
    }
      
    
    
    render(){
        const {latitude,longitude} = this.state
        const path = 'https://virtualsky.lco.global/embed/index.html?longitude=77.102493&latitude=28.704060&constellations=true&constellationlabels=true&showstarlabels=true&gridlines_az=true&live=true'
      
       return(
           <View>
               <TextInput
               placeholder="latitude"
               style={styles.textinput}/>

<TextInput
               placeholder="longitude"
               style={styles.textinput}/>
       
        <WebView
        scalesPageToFit={true}
        source={{uri:path}}
        style={{marginTop:20,marginBottom:20}}
        />
        </View>
       )

           
        
        
    }
}





const styles = StyleSheet.create({
    TitleText:{
        fontSize:40,
        fontWeight:"bold",
        color:"blue",
    },
     SafeArea:{
         marginTop:Platform.OS==="android"? StatusBar.currentHeight :0
     },
     TitleBar:{
         flex:0.15,
         alignItems:'center',
         justifyContent:'center'
     },
     
      iconimage:{
          position:"absolute",
          height:200,
          width:200,
          resizeMode:"contain",
          right:20,
          top:-80
      },
      map:{
          width:"100%",
          height:"100%"
      },
      infoText:{
          fontSize:15,
          color:'black',
          fontWeight:'bold',
      },
      infoBox:{
          flex:0.2,
          backgroundColor:'white',
          marginTop:-10,
          borderTopLeftRadius:30,
          borderTopRightRadius:30,
          padding:30
      },
      textinput:{
        height:40,borderColor:'red',borderWidth:2,marginLeft:100,
        marginRight:100,marginTop:20,borderTopLeftRadius:30,
        borderTopRightRadius:30,padding:30,borderBottomLeftRadius:30,
        borderBottomRightRadius:30
      }
      
})