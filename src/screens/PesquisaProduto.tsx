import React from "react";
import { View,Text, StyleSheet, TouchableOpacity,Image, StatusBar, FlatList } from "react-native";
import Head from "../components/Head";
import Footer from "../components/Footer";




interface Produto{
    id:number;
    nome:string;
    ingrediente:string;
    preco:string;
    imagem:string;
}



function PesquisaProduto(): React.JSX.Element{
const produtos:Produto[]=[{
id:1,
nome:'HotDog',
ingrediente:'Pão,batata,pure...',
preco:'10.99',
imagem:require('../assets/images/hamburger.png')
},
{
    id:2,
    nome:'HotDog Especial',
    ingrediente:'Pão , ingrediente-Especial...',
    preco:'10.99',
    imagem:require('../assets/images/hamburger.png')
    },

]
const renderItem=({item}:{item:Produto})=>{
    return (
        <TouchableOpacity style={sytles.menuItem}>
            <Image source={require('../assets/images/hamburger.png')}
            style={sytles.image}/>
            <View style={sytles.itemDetails}>
                <Text style={sytles.name}>{item.nome}</Text>
                <Text style={sytles.description}>{item.ingrediente}</Text>
                <Text style={sytles.price}>{item.preco}</Text>
            </View>
        </TouchableOpacity>
    );
}
return(
    <View  style={sytles.container}> 
<StatusBar  backgroundColor="red" barStyle={"light-content"}  />
<Head/>
<FlatList
data={produtos}
renderItem={renderItem}
keyExtractor={(item)=>item.id?item.id.toString():Math.random().toString()}
contentContainerStyle={sytles.menuList}/>
    <Footer/>
    </View>
);
}
const sytles=StyleSheet.create({
container:{
    flex:1
},
menuItem:{
    flexDirection:'row',
    alignItems:'center',
    padding:10,
    borderBottomWidth:1,
    borderBottomColor:  '#ccc',
    marginTop:10
},
image:{
    width:80,
    height:80,
    resizeMode: 'cover',
    borderRadius:1
},
itemDetails:{
    marginLeft:10,
    flex:1
},
name:{
    fontSize:16,
    fontWeight:'bold'
},
description:{
    fontSize:14,
    color:'#666'
},
price:{
    fontSize:16,
    fontWeight:'bold',
    marginTop:5
},
menuList:{
    flexGrow:1
}
});
export default PesquisaProduto;