import React, { Component, version } from 'react';
import {
  Platform,
  Image,
  StyleSheet,
  TextInput,
  Dimensions,
  TouchableOpacity,
  Text,
  View,
  TouchableHighlight
} from 'react-native';
import  styles from './../resources/styles';
import { StackNavigator } from 'react-navigation';
import {scale,verticalScale} from './../resources/scale';
import './../global';
import LinearGradient from 'react-native-linear-gradient';
const screenWidth= Dimensions.get('window').width; 
import Icon from 'react-native-vector-icons/FontAwesome';

class FlatGems extends Component {
    

    constructor(props) {
        super(props)
        }
    render() {
        return (
        // <TouchableOpacity style={styles.postContainer} onPress={this.props.postPressed}>
        // <View style={styles.userInformations}>
        // <Image source={{uri: ‘this.props.post.userPicture’}} /> 
        // <Text>this.props.post.userName</Text>
        // </View>
        // <Text style={styles.status}>this.props.post.thoughts</Text></TouchableOpacity>
        <View 
            onPress={this.props.onPress}
            style={{backgroundColor:this.props.gemColor,elevation:5,width:scale(330),height:scale(120),borderRadius:verticalScale(6),justifyContent:'space-between',marginBottom:verticalScale(10)}}>
           <View>
               <Text style={{color:'#fff',fontFamily:'open_sans_bold',fontSize:verticalScale(20),padding:scale(20)}}>{this.props.tileName}</Text>
           </View>
           <TouchableOpacity 
           onPress={this.props.onPress}
           style={{backgroundColor:this.props.singleLetterColor,width:scale(140),alignItems:'center',alignSelf:'flex-end',marginBottom:scale(10),marginRight:scale(10),borderRadius:scale(20)}}>
               <Text style={{color:'#fff',fontFamily:'open_sans_bold',fontSize:verticalScale(20),padding:verticalScale(5)}}>Start Editing</Text>
           </TouchableOpacity>
          
        </View>
        )
        }
}
export default FlatGems;