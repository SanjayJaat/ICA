import React from 'react';
import {View, Text, SafeAreaView,TextInput, StyleSheet,TouchableOpacity} from 'react-native';



export default class Forget extends React.Component{
 
    render(){


         return(

        <SafeAreaView>
        <View style={styles.view}>
            <TextInput style={styles.textinput} placeholder='Email Address'></TextInput>
            <TextInput  style={styles.textinput} placeholder='New Password'></TextInput>
        </View>

        <TouchableOpacity  style={styles.touch}><Text style={styles.text}>Submit</Text></TouchableOpacity>
        </SafeAreaView>
    )
 }
 }
 const styles= StyleSheet.create({
    textinput:{
        width:300,
        height:60,
        borderWidth:1,
        alignSelf:'center',
        marginTop:10,
        borderRadius:50,
        paddingLeft:16,
        fontSize:20,
        fontWeight:'900'

    },
    view:{
        marginTop:50
    },
    touch:{
        width:300,
        height:50,
        alignSelf:'center',
        borderRadius:30,
        backgroundColor:'blue',
        marginTop:100,
       // fontSize:20,
       // paddingLeft:

    },
    text:{
        fontSize:30,
        fontWeight:'900',
        textAlign:'center'
    }
 })