import React from 'react'
import { Text, View,ScrollView,FlatList} from 'react-native'
import Card from '../components/Card'
import Header from '../components/Header'
import {useSelector} from 'react-redux'

export default function Home(){
    const cardData=useSelector(state=>{
        return state;
    })
        return (
            <View style={{flex:1}}>
                <Header />
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
                


            </View>
        )
}
