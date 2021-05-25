import React from 'react'
import { View, Text,Image,Dimensions,TouchableOpacity} from 'react-native'
import {useNavigation} from '@react-navigation/native'

export default function MiniCard(props) {
    const navigation=useNavigation();
    return (
        <TouchableOpacity
           onPress={()=>navigation.navigate("videoplayer",{videoId:props.videoId,title:props.title})}
        >
            <View style={{ flexDirection: 'row', margin: 10, marginBottom: 10 }}>
                <Image
                    source={{ uri: `https://i.ytimg.com/vi/${props.videoId}/hqdefault.jpg` }}
                    style={{
                        width: "45%",
                        height: 100
                    }}
                />
                <View style={{ marginLeft: 10, padding: 7 }}>
                    <Text style={{ fontSize: 15, width: Dimensions.get('screen').width / 2 }} ellipsizeMode="tail" numberOfLines={2}>{props.title}</Text>
                    <Text style={{ color: 'grey' }}>{props.channel}</Text>
                </View>
            </View>
        </TouchableOpacity>
    )
}
