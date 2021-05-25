import React from 'react'
import { View, Text ,Dimensions} from 'react-native'
import Constant from 'expo-constants'
import {WebView} from 'react-native-webview'

const VideoPlayer=({route})=>{
    const {videoId,title}=route.params
    
    return (
        <View style={{flex:1,marginTop:Constant.statusBarHeight}}>
            <View style={{width:"100%",height:200}}>
            <WebView 
                javaScriptEnabled={true}
                domStorageEnabeled={true}
                source={{uri:`https://www.youtube.com/embed/${videoId}`}}
            />
            </View>
            <Text style={{margin:9,fontSize:20,width:Dimensions.get("screen").width-50}} ellipsizeMode="tail" numberOfLines={2}>
                {title}
            </Text>
        </View>
    )  
}

export default VideoPlayer