import Taro, { Component } from '@tarojs/taro'
import Index from './pages/index'

import './app.scss';
import 'taro-ui/dist/style/index.scss';

// 如果需要在 h5 环境中开启 React Devtools
// 取消以下注释：
// if (process.env.NODE_ENV !== 'production' && process.env.TARO_ENV === 'h5')  {
//   require('nerv-devtools')
// }

class App extends Component {

  config = {
    pages: [
      'pages/index/index',
      'pages/news/index',
      'pages/phoneCall/index'
    ],
    window: {
      backgroundTextStyle: 'light',
      navigationBarBackgroundColor: '#fff',
      navigationBarTitleText: 'WeChat',
      navigationBarTextStyle: 'black'
    },
    tabBar:{
      color:'#999',
      selectedColor:'#121C33',
      backgroundColor: '#fff',
      borderStyle:'black',
      list:[
        {
          pagePath:'pages/index/index',
          text:'首页',
          iconPath:'./assets/images/icons/index.png',
          selectedIconPath:'./assets/images/icons/index_on.png'
        },
        {
          pagePath:'pages/news/index',
          text:'网站',
          iconPath:'./assets/images/icons/icon_2.png',
          selectedIconPath:'./assets/images/icons/icon_2_on.png'
        },
        {
          pagePath:'pages/phoneCall/index',
          text:'电话',
          iconPath:'./assets/images/icons/icon_3.png',
          selectedIconPath:'./assets/images/icons/icon_3_on.png'
        },
        {
          pagePath:'pages/index/index',
          text:'推广',
          iconPath:'./assets/images/icons/icon_4.png',
          selectedIconPath:'./assets/images/icons/icon_4_on.png'
        },
        {
          pagePath:'pages/index/index',
          text:'我的',
          iconPath:'./assets/images/icons/icon_5.png',
          selectedIconPath:'./assets/images/icons/icon_5_on.png'
        }
      ]
    }
  }

  componentDidMount () {}

  componentDidShow () {}

  componentDidHide () {}

  componentDidCatchError () {}

  // 在 App 类中的 render() 函数没有实际作用
  // 请勿修改此函数
  render () {
    return (
      <Index />
    )
  }
}

Taro.render(<App />, document.getElementById('app'))
