import Taro, { Component } from '@tarojs/taro';
import { View,Image,Navigator } from '@tarojs/components';
import {AtIcon} from 'taro-ui';
import './NewsListUI.scss';

const NewsListUI = (props)=>{
    return(
        <View className="news_list">
            <Navigator className="news_item" url="">
                <View className="news_info">
                    <View class="news_info_content">
                        <Text className="news_info_title">信托制度和信托精神的社会价值</Text>
                        <Text className="news_info_des">《信托法》自2001年颁布至今已经18年，《信托法》在这18里所取得的成绩，是起草之初无法设想的。狭义的《信托法》指的是，2001年出台的《信托法》。</Text>
                    </View>
                    <View className="news_info_bottom">
                        <View className="news_info_read">
                            6520 · <AtIcon size="14" color="#929FAD" value="eye"/>
                        </View>
                        <Text className="news_info_date">2019-06-14 17:53</Text>
                    </View>
                </View>
                <Image className="news_picture" src="http://lm.91fo.cn/images/admin/upload/20190615/6f565062f59a94f85106a0d6b8b6430e.jpeg"/>
            </Navigator>
            <Navigator className="news_item" url="">
                <View className="news_info">
                    <View class="news_info_content">
                        <Text className="news_info_title">信托制度和信托精神的社会价值</Text>
                        <Text className="news_info_des">《信托法》自2001年颁布至今已经18年，《信托法》在这18里所取得的成绩，是起草之初无法设想的。狭义的《信托法》指的是，2001年出台的《信托法》。</Text>
                    </View>
                    <View className="news_info_bottom">
                        <View className="news_info_read">
                            6520 · <AtIcon size="14" color="#929FAD" value="eye"/>
                        </View>
                        <Text className="news_info_date">2019-06-14 17:53</Text>
                    </View>
                </View>
                <Image className="news_picture" src="http://lm.91fo.cn/images/admin/upload/20190615/6f565062f59a94f85106a0d6b8b6430e.jpeg"/>
            </Navigator>
        </View>
    )
}

export default NewsListUI;
