import React from "react";
import{View,Text,StyleSheet,TouchableOpacity,TextInput} from 'react-native';




const Create=()=> {


    
        return(

            <View style={{flex:1}}>
                <View style={styles.view}>
                   

                    <Text style={styles.text}>Create Account</Text> 
                    <View style={styles.view1}>
                        <View style={{marginTop:27}}>
                        <TextInput  style={styles.textinput} placeholder='Name' ></TextInput>
                        <TextInput  style={styles.textinput} maxLength={10} placeholder='Mobile'keyboardType="numeric" ></TextInput>
                        <TextInput  style={styles.textinput} placeholder='Email Id' ></TextInput>
                         <TextInput style={styles.textinput}  placeholder='Skills'></TextInput> 
                        <TextInput style={styles.textinput}  placeholder='Password'></TextInput>
                        
                        </View>

                        </View>
                        <TouchableOpacity  style={styles.touch}><Text style={styles.touchtext}>Submit</Text></TouchableOpacity>
                        
                        <Text style={{color:'white',fontSize:20, textAlign:'center',textDecorationLine:'underline',fontWeight:'700', marginTop:10}}>Login here</Text>
                        
                     </View>


                
              
                
               







            </View>



        )
    }

const styles =StyleSheet.create({

    view:{
        flex:1,
        backgroundColor:'black'

    },
    image:{
        width:100,
        height:100
    },
    text:{
        color:'white',
        textAlign:'center',
        fontSize:30,
        fontWeight:'800',
        marginVertical:10

    },
    view1:{
        //flex:0.7,
        width:'auto',
        height:390,
        backgroundColor:'#F9FDFB',
        //borderTopLeftRadius:50,
       // borderTopRightRadius:50,
       borderRadius:50
    },
    textinput:{
        //borderWidth:1,
        width:300,
        height:50,
        alignSelf:'center',
        marginTop:15,
       // borderColor:'white',
       // borderRadius:30,
        paddingLeft:17,
        color:'black',
        fontSize:19,
        fontWeight:'700',
        backgroundColor:'#dfffe4'

    },
    touch:{
       width:200,
       height:50,
       borderRadius:50,
       backgroundColor:'tomato',
       marginTop:30,
       alignSelf:'center'
    },
    touchtext:{
        textAlign:'center',
        fontSize:33,
        fontWeight:'700'
    }
})
export default Create;

