import Taro, { Component } from '@tarojs/taro';
import { View,Swiper,Image,Navigator } from '@tarojs/components';
import { AtIcon } from 'taro-ui';
import './CaseCarouselUI.scss';

const CaseCarouselUI  = (props)=>{
    return(
        <Swiper
            className="case_carousel"
            indicatorDots
            indicatorColor="#e1e3f8"
            indicatorActiveColor="#007aff"
            autoplay
            interval = {8000}
        >
            <SwiperItem class="case_carousel_item">
                <Navigator className="case_item case_item_1" url="">
                    <Image class="case_item_picture" src="https://s.tmimgcdn.com/scr/480x640/55500/55570-original.jpg"/>
                    <View className="case_item_content">
                        <Image className="case_item_content_picture"  src="http://placehold.it/80x80/222"/>
                        <View className="case_item_content_info">
                            <Text className="case_item_content_title">Stock Photo</Text>
                            <Text className="case_item_content_des">WPML兼容性 wordPress......</Text>
                        </View>
                        
                    </View>
                    <View className="case_item_data">
                            <View className="case_item_data_score">
                                <AtIcon size="12" color="rgb(251,171,0)" value="star-2"/>
                                <AtIcon size="12" color="rgb(251,171,0)" value="star-2"/>
                                <AtIcon size="12" color="rgb(251,171,0)" value="star-2"/>
                                <AtIcon size="12" color="rgb(251,171,0)" value="star-2"/>
                                <AtIcon size="12" color="rgb(251,171,0)" value="star-2"/>
                            </View>
                            <Text className="case_item_data_num">总载量：99393</Text>
                    </View>
                </Navigator>

                <Navigator className="case_item case_item_1" url="">
                    <Image class="case_item_picture" src="https://s.tmimgcdn.com/scr/480x640/55500/55570-original.jpg"/>
                    <View className="case_item_content">
                        <Image className="case_item_content_picture"  src="http://placehold.it/80x80/222"/>
                        <View className="case_item_content_info">
                            <Text className="case_item_content_title">Stock Photo</Text>
                            <Text className="case_item_content_des">WPML兼容性 wordPress......</Text>
                        </View>
                        
                    </View>
                    <View className="case_item_data">
                            <View className="case_item_data_score">
                                <AtIcon size="12" color="rgb(251,171,0)" value="star-2"/>
                                <AtIcon size="12" color="rgb(251,171,0)" value="star-2"/>
                                <AtIcon size="12" color="rgb(251,171,0)" value="star-2"/>
                                <AtIcon size="12" color="rgb(251,171,0)" value="star-2"/>
                                <AtIcon size="12" color="rgb(251,171,0)" value="star-2"/>
                            </View>
                            <Text className="case_item_data_num">总载量：99393</Text>
                    </View>
                </Navigator>

                <Navigator className="case_item" url="">
                    <Image class="case_item_picture" src="https://s.tmimgcdn.com/scr/480x640/55500/55570-original.jpg"/>
                    <View className="case_item_content">
                        <Image className="case_item_content_picture"  src="http://placehold.it/80x80/222"/>
                        <View className="case_item_content_info">
                            <Text className="case_item_content_title">Stock Photo</Text>
                            <Text className="case_item_content_des">WPML兼容性 wordPress......</Text>
                        </View>
                        
                    </View>
                    <View className="case_item_data">
                            <View className="case_item_data_score">
                                <AtIcon size="12" color="rgb(251,171,0)" value="star-2"/>
                                <AtIcon size="12" color="rgb(251,171,0)" value="star-2"/>
                                <AtIcon size="12" color="rgb(251,171,0)" value="star-2"/>
                                <AtIcon size="12" color="rgb(251,171,0)" value="star-2"/>
                                <AtIcon size="12" color="rgb(251,171,0)" value="star-2"/>
                            </View>
                            <Text className="case_item_data_num">总载量：99393</Text>
                    </View>
                </Navigator>

                <Navigator className="case_item" url="">
                    <Image class="case_item_picture" src="https://s.tmimgcdn.com/scr/480x640/55500/55570-original.jpg"/>
                    <View className="case_item_content">
                        <Image className="case_item_content_picture"  src="http://placehold.it/80x80/222"/>
                        <View className="case_item_content_info">
                            <Text className="case_item_content_title">Stock Photo</Text>
                            <Text className="case_item_content_des">WPML兼容性 wordPress......</Text>
                        </View>
                        
                    </View>
                    <View className="case_item_data">
                            <View className="case_item_data_score">
                                <AtIcon size="12" color="rgb(251,171,0)" value="star-2"/>
                                <AtIcon size="12" color="rgb(251,171,0)" value="star-2"/>
                                <AtIcon size="12" color="rgb(251,171,0)" value="star-2"/>
                                <AtIcon size="12" color="rgb(251,171,0)" value="star-2"/>
                                <AtIcon size="12" color="rgb(251,171,0)" value="star-2"/>
                            </View>
                            <Text className="case_item_data_num">总载量：99393</Text>
                    </View>
                </Navigator>
            </SwiperItem>

            <SwiperItem class="case_carousel_item">
                <Navigator className="case_item case_item_1" url="">
                    <Image class="case_item_picture" src="https://s.tmimgcdn.com/scr/480x640/55500/55570-original.jpg"/>
                    <View className="case_item_content">
                        <Image className="case_item_content_picture"  src="http://placehold.it/80x80/222"/>
                        <View className="case_item_content_info">
                            <Text className="case_item_content_title">Stock Photo</Text>
                            <Text className="case_item_content_des">WPML兼容性 wordPress......</Text>
                        </View>
                        
                    </View>
                    <View className="case_item_data">
                            <View className="case_item_data_score">
                                <AtIcon size="12" color="rgb(251,171,0)" value="star-2"/>
                                <AtIcon size="12" color="rgb(251,171,0)" value="star-2"/>
                                <AtIcon size="12" color="rgb(251,171,0)" value="star-2"/>
                                <AtIcon size="12" color="rgb(251,171,0)" value="star-2"/>
                                <AtIcon size="12" color="rgb(251,171,0)" value="star-2"/>
                            </View>
                            <Text className="case_item_data_num">总载量：99393</Text>
                    </View>
                </Navigator>

                <Navigator className="case_item case_item_1" url="">
                    <Image class="case_item_picture" src="https://s.tmimgcdn.com/scr/480x640/55500/55570-original.jpg"/>
                    <View className="case_item_content">
                        <Image className="case_item_content_picture"  src="http://placehold.it/80x80/222"/>
                        <View className="case_item_content_info">
                            <Text className="case_item_content_title">Stock Photo</Text>
                            <Text className="case_item_content_des">WPML兼容性 wordPress......</Text>
                        </View>
                        
                    </View>
                    <View className="case_item_data">
                            <View className="case_item_data_score">
                                <AtIcon size="12" color="rgb(251,171,0)" value="star-2"/>
                                <AtIcon size="12" color="rgb(251,171,0)" value="star-2"/>
                                <AtIcon size="12" color="rgb(251,171,0)" value="star-2"/>
                                <AtIcon size="12" color="rgb(251,171,0)" value="star-2"/>
                                <AtIcon size="12" color="rgb(251,171,0)" value="star-2"/>
                            </View>
                            <Text className="case_item_data_num">总载量：99393</Text>
                    </View>
                </Navigator>

                <Navigator className="case_item" url="">
                    <Image class="case_item_picture" src="https://s.tmimgcdn.com/scr/480x640/55500/55570-original.jpg"/>
                    <View className="case_item_content">
                        <Image className="case_item_content_picture"  src="http://placehold.it/80x80/222"/>
                        <View className="case_item_content_info">
                            <Text className="case_item_content_title">Stock Photo</Text>
                            <Text className="case_item_content_des">WPML兼容性 wordPress......</Text>
                        </View>
                        
                    </View>
                    <View className="case_item_data">
                            <View className="case_item_data_score">
                                <AtIcon size="12" color="rgb(251,171,0)" value="star-2"/>
                                <AtIcon size="12" color="rgb(251,171,0)" value="star-2"/>
                                <AtIcon size="12" color="rgb(251,171,0)" value="star-2"/>
                                <AtIcon size="12" color="rgb(251,171,0)" value="star-2"/>
                                <AtIcon size="12" color="rgb(251,171,0)" value="star-2"/>
                            </View>
                            <Text className="case_item_data_num">总载量：99393</Text>
                    </View>
                </Navigator>

                <Navigator className="case_item" url="">
                    <Image class="case_item_picture" src="https://s.tmimgcdn.com/scr/480x640/55500/55570-original.jpg"/>
                    <View className="case_item_content">
                        <Image className="case_item_content_picture"  src="http://placehold.it/80x80/222"/>
                        <View className="case_item_content_info">
                            <Text className="case_item_content_title">Stock Photo</Text>
                            <Text className="case_item_content_des">WPML兼容性 wordPress......</Text>
                        </View>
                        
                    </View>
                    <View className="case_item_data">
                            <View className="case_item_data_score">
                                <AtIcon size="12" color="rgb(251,171,0)" value="star-2"/>
                                <AtIcon size="12" color="rgb(251,171,0)" value="star-2"/>
                                <AtIcon size="12" color="rgb(251,171,0)" value="star-2"/>
                                <AtIcon size="12" color="rgb(251,171,0)" value="star-2"/>
                                <AtIcon size="12" color="rgb(251,171,0)" value="star-2"/>
                            </View>
                            <Text className="case_item_data_num">总载量：99393</Text>
                    </View>
                </Navigator>
            </SwiperItem>
        </Swiper>
    )
}

export default CaseCarouselUI;