import Taro, { Component } from '@tarojs/taro';
import { View,Navigator,Text } from '@tarojs/components';

const ComBoxUI  = (props)=>{
    return(
        <View className="com_box">
            <View className="com_box_header">
                <Text className="com_box_header_title">{props.title}</Text>
                <Navigator className="com_box_header_link" url={props.url}>更多 ></Navigator>
            </View>
            <View className="com_box_body">
                {props.children}
            </View>
        </View>
    )
}

export default ComBoxUI; 