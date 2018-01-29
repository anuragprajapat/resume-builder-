import React, { Component, version } from 'react';
import {
  Platform,
  Image,
  StyleSheet,
  TextInput,
  Dimensions,
  TouchableOpacity,
  Text,
  ScrollView,
  View
} from 'react-native';
import  styles from './../resources/styles';
import { StackNavigator } from 'react-navigation';
import {scale,verticalScale} from './../resources/scale';
import './../global';
import LinearGradient from 'react-native-linear-gradient';
const screenWidth= Dimensions.get('window').width; 
var activateOtp1=true,activateOtp2=false,activateOtp3=false,activateOtp4=false;
import Icon from 'react-native-vector-icons/FontAwesome';
import CustomHeader from './../customModules/header';
import FlatGems from './../customModules/flatGems';

import RNAccountKit from 'react-native-facebook-account-kit'

export default class BasicProfileScreen extends React.Component {

    static navigationOptions = ({ navigation }) => ({
  
        title: 'Home',
        header:<CustomHeader title="Basic Profile" back={()=>navigation.goBack()}/>,
        });
    

    constructor(props){
        super(props);
        this.state={

        }
    }

    logout(){
        var self=this;
        RNAccountKit.logout()
        .then(() => {
          console.log('Logged out');
          self.props.navigation.navigate("App");
        })
        .catch(()=>{
            console.log('cannot Log out');
        });
    }

    render() 
    {
        return (
        <ScrollView style={{flex:1,backgroundColor:global.WHITE_SOMKE,padding:scale(12)}}>


        {/* <TouchableOpacity onPress={()=>this.logout()}>
            <Text>Logout</Text>
        </TouchableOpacity> */}
        <View style={{justifyContent:'space-around',marginBottom:verticalScale(20)}}>
            <View style={{backgroundColor:'#fff',elevation:4,}}>
                <Text>Hi</Text>
            </View>

        </View>

       
        </ScrollView>
        );
    }
}