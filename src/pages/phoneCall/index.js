import Taro, { Component } from '@tarojs/taro'
import {View,Text,ScrollView} from '@tarojs/components';
import {AtButton,AtIcon} from 'taro-ui';
import './index.scss';

export default class PhoneCall extends Component{

    _phoneCall(){
        Taro.makePhoneCall({
            phoneNumber:'10086'
        })
    }

    render(){
        return (
            <ScrollView className="phone_container">
                <View className="phone_box">
                    <View className="phone_icon">
                        <AtIcon value="phone" size="128" color="rgb(97,144,232)"/>
                    </View>
                    <View className="phone_call">
                        <AtButton onClick={this._phoneCall} type="secondary">立即拨打10086</AtButton>
                    </View>
                </View>
            </ScrollView>
        )
    }
}