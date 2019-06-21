import Taro, { Component } from '@tarojs/taro';
import { View,Image,Navigator,Text } from '@tarojs/components';
import './NavUI.scss';
const NavUI = (props) => {
    const {navList} = props;
    return (
        <View className="nav_list">
            {navList.map((item,idx) => {
                return(
                    <Navigator url={item.url} className="nav_item" key={idx}>
                        <Image 
                            className="nav_item_icon"
                            src={item.icon}/>
                        <Text className="nav_item_text">{item.name}</Text>
                    </Navigator>
                )
            })}
            
        </View>
    )
}

export default NavUI;