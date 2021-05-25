import React from 'react'
import { View, Text ,FlatList,ScrollView} from 'react-native'
import Header from '../components/Header'
import Card from '../components/Card'
import {useSelector} from 'react-redux'


const LittleCard=({name})=>{
    return(
        <View style={{
            backgroundColor:"red",
            height:50,
            width:160,
            borderRadius:4,
            marginTop:10
        }}>
            <Text style={{
                textAlign:"center",
                color:"white",
                fontSize:22,
                marginTop:5
            }}>
              {name}
            </Text>
        </View>
    )
}
export default function Explore() {
    const cardData=useSelector(state=>{
        return state;
    })
    return (
        <View style={{flex:1}}>
            <Header/>
            <ScrollView>
            <View style={{flexDirection:"row",flexWrap:"wrap",justifyContent:"space-around"}}>
               <LittleCard name="Gaming"/>
               <LittleCard name="Trending"/>
               <LittleCard name="Music"/>
               <LittleCard name="Fashion"/>
               <LittleCard name="News"/>
               <LittleCard name="Movies"/>
            </View>
               { <View style={{ flex: 1,marginTop:15}}>
                    <FlatList data={cardData}
                        renderItem={({ item }) => {
                            return <Card
                                videoId={item.id.videoId}
                                title={item.snippet.title}
                                channel={item.snippet.channelTitle}
                            />
                        }}
                        keyExtractor={item => item.videoId}
                    />
                </View>}
            </ScrollView>
        </View>
    )
}
