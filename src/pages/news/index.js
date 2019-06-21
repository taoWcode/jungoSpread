import Taro, { Component } from '@tarojs/taro'
import {WebView,ScrollView } from '@tarojs/components';

import './index.scss';

export default class News extends Component{
    constructor(props){
        super(props);
        this.state = {

        }
    }

    render(){
        return (
            <ScrollView>
            <WebView src="http://www.junui.com/"></WebView>
            </ScrollView>
        )
    }
}