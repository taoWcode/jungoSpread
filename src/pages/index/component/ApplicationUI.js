import Taro, { Component } from '@tarojs/taro'
import { View, Text,Navigator,Image } from '@tarojs/components'

import './ApplicationUI.scss';

const ApplicationUI = (props) => {
    return (
        <View className="application">
            <Text className="application_title">企业应用</Text>
            <View className="application_list">
                <Navigator url="" className="application_item application_item_content application_item_no_bottom">
                    <Image className="application_item_picture" src="http://placehold.it/350x350/222"/>
                    <Text className="application_item_title">docker-c7</Text>
                    <Text className="application_item_des">基于linux最新的yum仓库安装</Text>
                </Navigator>
                <Navigator url="" className="application_item application_item_content application_item_no_bottom">
                    <Image className="application_item_picture" src="http://placehold.it/350x350/222"/>
                    <Text className="application_item_title">docker-c7</Text>
                    <Text className="application_item_des">基于linux最新的yum仓库安装</Text>
                </Navigator>
                <Navigator url="" className="application_item application_item_content application_item_no_bottom">
                    <Image className="application_item_picture" src="http://placehold.it/350x350/222"/>
                    <Text className="application_item_title">docker-c7</Text>
                    <Text className="application_item_des">基于linux最新的yum仓库安装</Text>
                </Navigator>
                <View className="application_item">
                    <Navigator url="" className="application_item_content application_item_no_bottom">
                        <Text className="application_item_title">docker-c7</Text>
                        <Text className="application_item_des">基于linux最新的yum仓库安装</Text>
                    </Navigator>
                    <Navigator url="" className="application_item_content">
                        <Text className="application_item_title">LNAMP运行环境</Text>
                        <Text className="application_item_des">CentOS 7纯净版版的官方软件包 </Text>
                    </Navigator>
                </View>
            </View>
        </View>
    )
}

export default ApplicationUI;