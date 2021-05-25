import React,{useState} from 'react'
import { View, Text,TextInput,ScrollView,FlatList,ActivityIndicator} from 'react-native'
import {AntDesign,Ionicons,MaterialIcons} from '@expo/vector-icons'
import Constant from 'expo-constants'
import MiniCard from '../components/MiniCard'
import { useNavigation } from '@react-navigation/native';
import {useSelector,useDispatch} from 'react-redux'


//'https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&q=songs&type=video&key=AIzaSyDBg8h0UvRGbC9WjKfpl86r3pfvRPzi7u8'

export default function Search() {
    const navigation=useNavigation()
    const dispatch=useDispatch()
    const [value, setValue] = useState('')
    //const [miniCardData, setCardData] = useState('')
    const miniCardData=useSelector(state=>{
        return state
    })
    const [loading, setLoading] = useState(false)
    const fetchData=()=>{
        setLoading(true)
        fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=10&q=${value}&type=video&key=AIzaSyDBg8h0UvRGbC9WjKfpl86r3pfvRPzi7u8`)
        .then(res=>res.json())
        .then(data=>{
            setLoading(false)
            dispatch({type:"add",payload:data.items})
            //setCardData(data.items)
        })
    }
    return (
        <View style={{flex: 1}}>
            <View style={{ marginTop: Constant.statusBarHeight }}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-around', padding: 5, elevation: 5, backgroundColor: 'white' }}>
                    <Ionicons name="arrow-back-outline" size={24} color="black" 
                        onPress={()=>{navigation.goBack();}}
                    />
                    <TextInput
                        style={{ backgroundColor: "#e6e6e6", width: "70%" }}
                        value={value}
                        onChangeText={(text) => setValue(text)}
                    />
                    <Ionicons name="send" size={24} color="black" onPress={()=>fetchData()} />
                </View>
            </View>
            {loading? <ActivityIndicator style={{marginTop:10}} size="large" color="red"/>:null}
            <FlatList data={miniCardData}
                renderItem={({item})=>{
                    return <MiniCard 
                           videoId={item.id.videoId}
                           title={item.snippet.title}
                           channel={item.snippet.channelTitle}
                       />
                }}
                keyExtractor={item=>item.videoId}
            />
        </View>

    )
}
