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

export default class FillScreen extends React.Component {

    static navigationOptions = ({ navigation }) => ({
  
        title: 'Home',
        header:<CustomHeader title="Select Section" back={()=>navigation.goBack()}/>,
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
            <FlatGems onPress={()=>this.props.navigation.navigate('Basic')} gemColor="#01c2e1" tileName="Basic profile" singleLetterColor="#00aec9"/>
            <FlatGems gemColor="#788cbf" tileName="Work experience" singleLetterColor="#64729e"/>
            <FlatGems gemColor="#fe3c57" tileName="Personal Projects" singleLetterColor="#e4364f"/>
            <FlatGems gemColor="#cfa16d" tileName="Certifications" singleLetterColor="#bb9362"/>
            <FlatGems gemColor="#9678cf" tileName="Achievements" singleLetterColor="#8167b1"/>

        </View>

       
        </ScrollView>
        );
    }
}