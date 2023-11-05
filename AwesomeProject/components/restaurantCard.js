import {View, Text, Image, TouchableWithoutFeedback} from 'react-native'
import React from 'react'
import * as Icon from "react-native-feather";
import { themeColors } from '../theme';
import { useNavigation } from '@react-navigation/native';

export default function RestaurantCard({item}){
    const navigation=useNavigation();
    
    {/*kullanıcı restonlara dokunduğunda ayrıntılarına yönlendiren bir navigasyon işlemi başlatır*/}
    return(
        
        <TouchableWithoutFeedback
            onPress={()=>navigation.navigate('Restaurant',{...item})} 
        >
            <View style={{
                shadowColor: themeColors.bgColor(0.2),
                shadowRadius: 8
            }}
                className="mr-6 bg-white rounded-3xl shadow-lg">
                <Image className="h-36 w-64 rounded-t-3xl" source={item.image}/>
                {/*restoran cardlarının metinlerinin içeriğinin oluşturulması*/}
                <View className="px-3 pb-4 space-y-2">
                    <Text className="text-lg font-bold pt-2">{item.name}</Text>
                    <View className="flex-row items-center space-x-1">
                        <Image source={require('../assets/images/star.png')} className="h-4 w-4" />  
                        <Text className="text-xs">
                            <Text className="text-black-700">{item.stars}</Text>    
                            <Text className="text-gray-700">
                                ({item.reviews} Yorum) <Text className="font-semibold">{item.category}</Text>
                         </Text>
                        </Text> 
                    </View> 
                    <View className="flex-row items-center space-x-1">
                        <Icon.MapPin color="gray" width="15" height="15" />
                        <Text className="text-gray-700 text-xs">Yakınlarda {item.address}</Text>
                    </View>
                </View>
            </View>
        </TouchableWithoutFeedback>
    )
}