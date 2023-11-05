import {View, Text, TouchableOpacity, ScrollView, Image} from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';
import * as Icon from "react-native-feather";
import { themeColors } from '../theme';
import { useSelector, useDispatch } from 'react-redux';
import { selectRestaurant } from '../slices/restaurantSlice';
import { useState, useEffect } from 'react';
import { selectCartItems, selectTotal, removeFromCart, addToCart } from '../slices/cartSlice';

export default function CartScreen(){
    const navigation=useNavigation();
    const restaurant=useSelector(selectRestaurant);
    const cartItems=useSelector(selectCartItems);
    const cartTotal=useSelector(selectTotal);
    const [groupedItems, setGroupedItems]=useState({})
    const dispatch=useDispatch();
    const deliveryFee=15;
    const bagFee=0.25;
    let total=cartTotal+bagFee+deliveryFee;

    useEffect(()=>{
        const items = cartItems.reduce((group, item)=>{
            if(group[item.id]){
                group[item.id].push(item);
            }else{
                group[item.id]=[item];
            }
            return group;
        }, {})
        setGroupedItems(items);
    }, [cartItems])
    return (
        <View className="bg-white flex-1">
            <View className="relative py-4 shadow-sm">
                <TouchableOpacity
                    onPress={()=> navigation.goBack()}
                    style={{backgroundColor: themeColors.bgColor(1)}}
                    className="absolute z-10 rounded-full p-1 shadow top-5 left-2"
                    >
                        <Icon.ArrowLeft strokeWidth={3} stroke="white" />
                    </TouchableOpacity>
                <View>
                    <Text className="text-center font-bold text-xl">Sepetiniz</Text>
                    <Text className="text-center text-gray-500">{restaurant.name}</Text>
                </View>
            </View>
            {/*seçilen yemeklerin alışveriş sepetinde görüntülenmesi*/}
            <ScrollView
                showsVerticalScrollIndicator={false}
                contentContainerStyle={{
                    paddingBottom: 50
                }}
                className="bg-white pt-5"
            >
                {
                    Object.entries(groupedItems).map(([key, items])=>{
                        let dish= items[0];
                
                        return(
                            <View key={key}
                                className="flex-row items-center space-x-3 py-2 px-4 bg-white rounded-3xl mx-2 mb-3 shadow-md">
                                <Text className="font-bold" style={{color: themeColors.text}}>
                                    {items.length}x
                                </Text>
                                <Image className=" h-14 w-14 rounded-full"
                                    source={dish.image}                                
                                />
                                <Text className="flex-1 font-bold text-gray-700">{dish.name}</Text>
                                <Text className="font-semibold text-base">{dish.price}₺</Text>
                                <TouchableOpacity
                                    onPress={()=> dispatch(removeFromCart({id: dish.id}))}
                                    className="p-1 rounded-full"
                                    style={{backgroundColor:themeColors.bgColor(1)}} >
                                    <Icon.Minus strokeWidth={2} height={20} width={20} stroke={'white'} />
                                </TouchableOpacity>
                                <Text className="px-1">{items.length}</Text>
                            
                            </View>
                        )
                    })
                }
            </ScrollView>
            {/*sepet tutarı*/}
            <View style={{backgroundColor: themeColors.bgColor(0.2)}} className="p-6 px-8 rounded-t-3xl space-y-4">
                <View className="flex-row justify-between">
                    <Text className="text-gray-700">Sepet Tutarı</Text>
                    <Text className="text-gray-700">{cartTotal}₺</Text>
                </View>
                <View className="flex-row justify-between">
                    <Text className="text-gray-700">Poşet Ücreti</Text>
                    <Text className="text-gray-700">{bagFee}₺</Text>
                </View>
                <View className="flex-row justify-between">
                    <Text className="text-gray-700">Getirme Ücreti</Text>
                    <Text className="text-gray-700">{deliveryFee}₺</Text>
                </View>

                <View className="flex-row justify-between">
                    <Text className="text-gray-700">Toplam Tutar</Text>
                    <Text className="text-gray-700">{total}₺</Text>
                </View>
                <TouchableOpacity
                onPress={()=> navigation.navigate('OrderPreparing')}
                style={{backgroundColor: themeColors.bgColor(1)}}
                className="p-3 rounded-full"
                >
                    <Text className="text-white text-center font-bold text-lg">
                        Siparişi Tamamla
                    </Text>

                </TouchableOpacity>
            </View>
        </View>
    )
}