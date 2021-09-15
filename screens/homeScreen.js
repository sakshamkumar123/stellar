import React,{Component} from "react";
import { Text,View,StyleSheet,SafeAreaView, Platform, StatusBar, TouchableOpacity,ImageBackground,Image} from "react-native";

export default class HomeScreen extends Component{
    render(){
        return(
            <View style={{
                flex:1
            }}>
            <SafeAreaView style={styles.SafeArea}/>
            <ImageBackground source={require("../assets/space.gif")} style={{flex:1,resizeMode:'cover'}}>
            <View style={styles.TitleBar}>
            <Text style={styles.TitleText}>Stellar App</Text>
            </View>
            <TouchableOpacity style= {styles.buttons} onPress={()=>{
                this.props.navigation.navigate("starMap")
            }}>
                <Image source={require("../assets/star_map.png")} style={styles.iconimage}/>
                <Text style={styles.buttontext}>Star map</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttons} onPress={()=>{
                this.props.navigation.navigate("spaceCrafts")
            }}>
               <Image source={require("../assets/space_crafts.png")} style={styles.iconimage}/>
                <Text style={styles.buttontext}>Space Craft</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.buttons} onPress={()=>{
                this.props.navigation.navigate("dailyPic")
            }}>
               <Image source={require("../assets/daily_pictures.png")} style={styles.iconimage}/>
                <Text style={styles.buttontext}>Daily Pictures</Text>
            </TouchableOpacity>
            </ImageBackground>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    TitleText:{
        fontSize:40,
        fontWeught:"bold",
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
      buttons:{
          flex:0.25,
          marginLeft:50,
          marginRight:50,
          marginTop:50,
          borderRadius:30,
          backgroundColor:'white',
          borderWidth:2
      },
      buttontext:{
          fontSize:35,
          fontWeight:'bold',
          color:'black',
          marginTop:15,
          paddingLeft:30
      },
      iconimage:{
          position:"absolute",
          height:100,
          width:100,
          resizeMode:"contain",
          right:20,
          top:-20
      }
      
})