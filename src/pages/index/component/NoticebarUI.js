import Taro, { Component } from '@tarojs/taro'
import { View} from '@tarojs/components'
import { AtNoticebar } from 'taro-ui';
import './NoticebarUI.scss';

const NoticebarUI = (props) => {
    return (
        <View class="noticebar"
            
        >
            <AtNoticebar icon="volume-plus">易合平台即将上线，敬请期待！</AtNoticebar>
        </View>
    )
}

export default NoticebarUI;