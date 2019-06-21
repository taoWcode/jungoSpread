import Taro, { Component } from '@tarojs/taro';
import { View,Swiper,Image } from '@tarojs/components'
import './CarouselUI.scss';
const CarouselUI = (props) =>{
    
    const { bannerList } = props;
   
    return (
        <Swiper
            className="carousel"
            indicatorDots
            indicatorColor="#e1e3f8"
            indicatorActiveColor="#007aff"
            autoplay
            interval = {8000}
        >
            {bannerList.map((item,idx) => {
                return (
                    <SwiperItem key={idx}>
                        <View className="carousel_item">
                            <Image src={item.uri} className="carousel_item_img"/>
                        </View>
                    </SwiperItem>
                );
            })}
           
           
        </Swiper>
    )
}
export default CarouselUI;