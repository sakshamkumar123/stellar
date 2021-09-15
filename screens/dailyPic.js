import axios from "axios";
import React,{Component} from "react";
import { Text,View,StyleSheet,SafeAreaView, Platform, StatusBar, TouchableOpacity,ImageBackground,Image, Alert, Linking} from "react-native";


export default class DailyPic extends Component{
    constructor(props){
        super(props)
        this.state={
            apod:{}
        }
    }
    componentDidMount(){
        this.getIssLocation()
    }
    getIssLocation=()=>{
        axios
            .get("https://api.nasa.gov/planetary/apod?api_key=B5ab0da3oidTLw3ETFBel2eVYb0fepU7Bwi3kGsc")
            .then(response=>{
                this.setState({
                    apod:response.data
                })
            })
            .catch(error=>{
                Alert.alert(error.message)
            })
    }
    
    render(){
        if(Object.keys(this.state.apod).length===0){
            return(
                <View style = {{flex:1,justifyContent:'center',alignitems:'center'}}>
                    <Text>Loading...</Text>
                </View>
            )
        }
        else{
           
        return(
            <View style={{
                flex:1
            }}>
            <SafeAreaView style={styles.SafeArea}/>
            <ImageBackground source={require("../assets/stars.gif")} style={{flex:1,resizeMode:'cover'}}>
            <View style={styles.TitleBar}>

            <Text style={styles.TitleText}>Daily Pictures</Text>
            </View>
        <View style={{alignItems:'center'}}>
            <Text style={styles.Text}>{this.state.apod.title}</Text>
          </View>
            <TouchableOpacity
            style = {styles.buttons}
            onPress={()=> Linking.openURL(this.state.apod.url).catch(err=>console.error("couldnt load page",err))}
            >
                <Text style = {styles.buttontext}>Watch The Video</Text>
            </TouchableOpacity>
            <Text style={styles.text2}>{this.state.apod.explanation}</Text>
          </ImageBackground>
            </View>
        
        )
    }
}
}




const styles = StyleSheet.create({
    buttons:{
        flex:0.15,
        marginLeft:330,
        marginRight:330,
        marginTop:20,
        width:300,
        height:10,
        borderRadius:30,
        backgroundColor:'red',
        borderWidth:2
    },
    TitleText:{
        fontSize:40,
        fontWeight:"bold",
        color:"blue",
    },
    Text:{
        fontSize:40,
        fontWeight:"bold",
        color:"black",
    },
    text2:{
      fontSize:15,
      marginLeft:50,
      marginRight:50,
      marginTop:50,
      backgroundColor:'purple',
    },
    buttontext:{
        fontSize:25,
        fontWeight:'bold',
        color:'black',
        paddingLeft:5
       
    },
     SafeArea:{
         marginTop:Platform.OS==="android"? StatusBar.currentHeight :0
     },
     TitleBar:{
         flex:0.25,
         alignItems:'center',
         justifyContent:'center',         
         color:'black',
         backgroundColor:'black'
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
      }
      
})