import Taro, { Component } from '@tarojs/taro'
import { View, Text,ScrollView } from '@tarojs/components'
import { AtButton } from 'taro-ui';


import Footer from '../../components/Footer/index';
import ComBoxUI from './component/ComBoxUI';
import CarouselUI from './component/CarouselUI';
import NavUI from './component/NavUI';
import NavBlockUI from './component/NavBlockUI';
import CaseCarouselUI from './component/CaseCarouselUI';
import NewsListUI from './component/NewsListUI';
import NoticebarUI from './component/NoticebarUI';
import ApplicationUI from './component/ApplicationUI';

import './index.scss'

export default class Index extends Component {

  config = {
    navigationBarTitleText: '首页'
  }
  constructor(props){
    super(props);
    this.state = {
      bannerList:[
        {uri:'http://lm.91fo.cn/images/admin/upload/20190320/75f3553c6005ef88fba801034e10f68f.png'},
        {uri:'http://lm.91fo.cn/images/admin/upload/20190320/75f3553c6005ef88fba801034e10f68f.png'},
        {uri:'http://lm.91fo.cn/images/admin/upload/20190320/75f3553c6005ef88fba801034e10f68f.png'},
        {uri:'http://lm.91fo.cn/images/admin/upload/20190320/75f3553c6005ef88fba801034e10f68f.png'},
      ],
      navList:[
        {
          icon:'http://lm.91fo.cn/images/admin/upload/20190302/04d7cc2bede52904e963f491842bc593.png',
          name:'圈子',
          url:''
        },
        {
          icon:'http://lm.91fo.cn/images/admin/upload/20190302/b5eefd617d8782171dc1261c5632043d.png',
          name:'头条',
          url:''
        },
        {
          icon:'http://lm.91fo.cn/images/admin/upload/20190302/917037d73a8096cde7325407de848776.png',
          name:'人脉',
          url:''
        },
        {
          icon:'http://lm.91fo.cn/images/admin/upload/20190302/36aeec9832e681c5f3e09e5f155b18a8.png',
          name:'黄页',
          url:''
        },
        {
          icon:'http://lm.91fo.cn/images/admin/upload/20190302/5b4dad498ee6cb15b0f13771d76eccd4.png',
          name:'活动',
          url:''
        },
        {
          icon:'http://lm.91fo.cn/images/admin/upload/20190302/d76e98e8ac02fa85938392c8329e52a8.png',
          name:'金融服务',
          url:''
        },
        {
          icon:'http://lm.91fo.cn/images/admin/upload/20190302/cc0579c516f083ac253cd34970ea2f32.png',
          name:'企业服务',
          url:''
        },
        {
          icon:'http://lm.91fo.cn/images/admin/upload/20190302/c1b30e343f71097e84bd01ed18c5e36c.png',
          name:'房地产',
          url:''
        },
        {
          icon:'http://lm.91fo.cn/images/admin/upload/20190302/d51dabdab30ec8f984439e865fc09a74.png',
          name:'生活服务',
          url:''
        },
        {
          icon:'http://lm.91fo.cn/images/admin/upload/20190302/d8b9ced902e33246f6770d3e7fba87d0.png',
          name:'公益慈善',
          url:''
        },
      ]
    }
  }

  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    const {bannerList,navList} = this.state;
    return (
      <ScrollView style={{backgroundColor:'#f8f8f8'}}>
        <CarouselUI bannerList = {bannerList}/>
        <NoticebarUI/>
        <NavUI navList = {navList}/>
        {/* <ComBoxUI title="主营业务" url="">
          <NavBlockUI/>
        </ComBoxUI> */}
        <View className="com_box">
            <View className="com_box_header">
                <Text className="com_box_header_title">主营业务</Text>
                <Navigator className="com_box_header_link" url={props.url}>更多 ></Navigator>
            </View>
            <View className="com_box_body">
                <NavBlockUI/>
            </View>
        </View>

        <ApplicationUI/>

        {/* <ComBoxUI title="合作案例" url="">
          <CaseCarouselUI/>
        </ComBoxUI> */}

        <View className="com_box">
            <View className="com_box_header">
                <Text className="com_box_header_title">合作案例</Text>
                <Navigator className="com_box_header_link" url={props.url}>更多 ></Navigator>
            </View>
            <View className="com_box_body">
                <CaseCarouselUI/>
            </View>
        </View>

        {/* <ComBoxUI title="知识百科" url="">
          <NewsListUI/>
        </ComBoxUI> */}

        <View className="com_box">
            <View className="com_box_header">
                <Text className="com_box_header_title">合作案例</Text>
                <Navigator className="com_box_header_link" url={props.url}>更多 ></Navigator>
            </View>
            <View className="com_box_body">
                <NewsListUI/>
            </View>
        </View>
        <Footer/>
      </ScrollView>
    )
  }
}



