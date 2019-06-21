import Taro, { Component } from '@tarojs/taro';
import { View,Navigator,Text,Image } from '@tarojs/components';
import './NavBlockUI.scss';
const NavBlockUI = (props)=>{
    return(
        <View className="nav_block_list">
            <Navigator 
                className="nav_block_item nav_block_item_1"
                url=""
                >
                <Image className="nav_block_item_bg" src="https://app-static.huaweicloud.com/static/images/home-index/app_banner_small-mb1.jpg"/>
                <View className="nav_block_item_content">
                    <Text className="nav_block_item_content_title">案例中心</Text>
                    <Text className="nav_block_item_content_des">云上解决方案选购指南</Text>
                </View>
            </Navigator>
            <Navigator 
                className="nav_block_item nav_block_item_2"
                url=""
                >
                <Image className="nav_block_item_bg" src="https://app-static.huaweicloud.com/static/images/home-index/app_banner_small-mb2.jpg"/>
                <View className="nav_block_item_content">
                    <Text className="nav_block_item_content_title">AI专区</Text>
                    <Text className="nav_block_item_content_des">智能改变未来</Text>
                </View>
            </Navigator>
            <Navigator 
                className="nav_block_item nav_block_item_2"
                url=""
                >
                <Image className="nav_block_item_bg" src="https://app-static.huaweicloud.com/static/images/home-index/app_banner_small-mb3.jpg"/>
                <View className="nav_block_item_content">
                    <Text className="nav_block_item_content_title">中小企业上云</Text>
                    <Text className="nav_block_item_content_des">畅享超低折扣</Text>
                </View>
            </Navigator>
        </View>
    )
}

export default NavBlockUI;