import {View, Text, Image} from 'react-native'
import React, { useEffect } from 'react'
import { themeColors } from '../theme';
import { useNavigation } from '@react-navigation/native';

export default function OrderPreparingScreen(){
    const navigation=useNavigation();
    useEffect(()=>{
        setTimeout(()=>{
            {/*sipariş alındıktan sonra siparişlerim ekranına yönlendirilmesi */}
            navigation.navigate('MyOrders');
        }, 3000);
    },[])
    return(
        <View className="flex-1 bg-white justify-center items-center">
            
                <Image source={require('../assets/images/cooking.png')} className="h-70 w-70" />
            
        </View>
    )
}
