import React from "react";
import { StyleSheet, View,Text } from "react-native";



function Head(): React.JSX.Element{

return(
    <View style={sytles.header}> 
<Text style={sytles.headerText}>App Exemplo</Text>




    </View>
)

}

const sytles=StyleSheet.create({

container:{
    flex:1
},

header:{
    backgroundColor:'red',
    paddingVertical:10,
    alignItems:'center'
},

headerText:{
    fontSize:20,
    fontWeight:'bold',
    color:'white'
}

});
export default Head;