import React from "react";
import { StyleSheet, TouchableOpacity, View, Image } from "react-native";

function Footer(): React.JSX.Element{

return(
    <View style={sytles.footer}>
<TouchableOpacity>
    <Image source={require('../assets/images/home.png')} 
    style={sytles.footerIcon} />
</TouchableOpacity>


<TouchableOpacity>
    <Image source={require('../assets/images/lupe.png')} 
    style={sytles.footerIcon} />
</TouchableOpacity>


<TouchableOpacity>
    <Image source={require('../assets/images/orders.png')} 
    style={sytles.footerIcon} />
</TouchableOpacity>

<TouchableOpacity>
    <Image source={require('../assets/images/profile.png')}
     style={sytles.footerIcon} />
</TouchableOpacity>


    </View>
);

}




const sytles=StyleSheet.create({

menuList:{
    flexGrow:1
},

footer:{
    borderTopWidth:0.2,
    backgroundColor:'white',
    flexDirection:'row',
    justifyContent:'space-around',
    alignItems:'flex-end',
    paddingVertical:10
},
footerIcon:{
    width:30,
    height:30
}
    });
    export default Footer;