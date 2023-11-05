import {View, Text, TouchableOpacity, ScrollView} from 'react-native'
import React from 'react'
import { themeColors } from '../theme'
import RestaurantCard from './restaurantCard'


export default function FeaturedRow({title, restaurants}){
    {/*yatay eksende restoranların görünüşülerinin hazırlanması*/}
    return(
        <View>
            <View className="flex-row justify-between items-center px-4">
               <View>
                    <Text className="font-bold text-lg">{title}</Text>
               </View>
                <TouchableOpacity>
                    <Text style={{color: themeColors.text}} className="font-semibold">Hepsini Gör</Text>
                </TouchableOpacity>
            </View>
            <ScrollView 
                horizontal 
                showsVerticalScrollIndicator={false} 
                contentContainerStyle={{
                    paddingHorizontal: 15
                }} 
                className="overflow-visible py-5"
                >
                
                {/*restoranların verilerinin iletilmesi*/}
                {
                    restaurants.map((restaurant, index)=>{
                        return (
                            <RestaurantCard 
                            item={restaurant} 
                            key={index} 
                            />
                        )
                    })
                }
            </ScrollView>
        </View>
    )
}