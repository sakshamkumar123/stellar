import axios from "axios";
import React,{Component} from "react";
import { Text,View,StyleSheet,SafeAreaView, Platform, StatusBar, TouchableOpacity,ImageBackground,Image, Alert, Linking, ImageEditor} from "react-native";
import { FlatList } from "react-native-gesture-handler";

export default class SpaceCrafts extends Component{
    constructor(props){
        super(props)
        this.state={
            apod:{}
        }
    }
    componentDidMount(){
        this.getIssLocation()
    }
    keyExtractor = (item, index) => index.toString();

    getIssLocation=()=>{
        axios
            .get("https://ll.thespacedevs.com/2.0.0/config/spacecraft/")
            .then(response=>{
                this.setState({
                    apod:response.data.results
                })
            })
            .catch(error=>{
                Alert.alert(error.message)
            })
    }
    renderItem = ({item}) => {
        return(
        <View style={{
         
            marginLeft:50,
            marginRight:50,
            marginTop:50,
            borderRadius:30,
            backgroundColor:'white',
            borderWidth:2,
            alignItems:'center'
            
        }}>
        <SafeAreaView style={styles.SafeArea}/>
               
        <Text style={styles.TitleText }>{item.name}</Text>
    
    <View style={{alignItems:'center'}}>
        <Text style={styles.Text}>{item.agency.name}</Text>
      </View>
        <Image source={{uri:item.agency.image_url}} style={{
          height:200,
          width:200,
          alignSelf:'center',

        }}></Image>
                    
        <Text style={styles.text2}>{item.agency.description}</Text>
    
        </View>
        )
    }
    
    render(){
       
       
           
        return(
            <ImageBackground source={require("../assets/stars.gif")} style={{flex:1,resizeMode:'cover'}}>
            <View>
                
            <View  style={{
                    justifyContent:'center',
                    alignItems:'center'
                }}>
                <Text style={styles.TitleText}>Space Craft</Text>
            </View>
            
            <View style={{marginLeft:50,marginRight:50}}>
                <FlatList
                keyExtractor={this.keyExtractor}
                data={this.state.apod}
                renderItem={this.renderItem}
                />
            </View>
           
            </View>
            </ImageBackground>
        
        )
    
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
        aligntItems:'center',
        justifyContent:'center'
    },
    Text:{
        fontSize:40,
        fontWeight:"bold",
        color:"black",
        alignItems:'center',
        justifyContent:'center'
    },
    text2:{
      fontSize:15,
      marginLeft:50,
      marginRight:50,
      marginTop:50,
      marginBottom:20,
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
