import Taro, { Component } from '@tarojs/taro';
import { View,Image,Navigator } from '@tarojs/components';
import {AtIcon} from 'taro-ui';
import './index.scss';

const Footer = ()=>{
    return(
        <View className="footer">
            <View className="footer_nav">
                <Navigator className="footer_nav_item" url="">关于家办</Navigator>
                <Navigator className="footer_nav_item" url="">客户服务</Navigator>
                <Navigator className="footer_nav_item" url="">查找业务</Navigator>
                <Navigator className="footer_nav_item" url="">机构注册</Navigator>
            </View>

            <Text className="footer_copyright">Copyright © 2018-2019 易合平台 版权所有</Text>
            <Text className="footer_copyright">粤ICP备16085989号-8,由junnet.net提供技术服务 </Text>
        </View>
    )
}

export default Footer;