import React from 'react'
import { View, Text ,FlatList} from 'react-native'
import {AntDesign,Ionicons,MaterialIcons} from '@expo/vector-icons'
import Constant from 'expo-constants'
import { useNavigation } from '@react-navigation/native';



export default function Header() {
    const myColor="#343a40"
    const navigation=useNavigation()
    return (
        <View style={{ justifyContent:'space-between',height: 45,elevation:4, backgroundColor:'white',marginTop:Constant.statusBarHeight,flexDirection:'row'}}>
            <View style={{ flexDirection: "row", margin: 5 }}>
                <AntDesign style={{ marginLeft: 20 }}
                    name="youtube" size={40} color='red' />
                <Text style={{ fontSize: 22, marginLeft: 5 ,fontWeight:'bold',color:myColor}}>YouTube</Text>
            </View>
            <View style={{flexDirection:'row',width:150,justifyContent:'space-around'}}>
                <Ionicons name="md-videocam" size={32} color={myColor} />
                <Ionicons name="search-sharp" size={32} color={myColor} 
                    onPress={()=>navigation.navigate("search")}
                />
                <MaterialIcons name="account-circle" size={32} color={myColor} />
            </View>
        </View>
    )
}
