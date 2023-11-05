import {View, Text, ScrollView, TouchableOpacity, Image} from 'react-native'
import React, { useState } from 'react'
import { categories } from '../constants'


export default function Categories(){
 
   {/*seçilen kategoriyi takip*/}
    const [activeCategory, setActiveCategory]= useState(null);
    
        {/*kategorilerin yatay yönündeki düzenlemeleri*/}
    return(
    
        <View className="mt-4">
            <ScrollView
                horizontal 
                showsVerticalScrollIndicator={false} 
                className="overflow-visible"
                contentContainerStyle={{
                        paddingHorizontal: 15
                }}
            >
                {/*her kategori için döngü oluşturulmuştur her bir kategori için işlem yapılmıştır*/}
                {
                    categories.map((category, index)=>{
                        let isActive=category.id==activeCategory;
                        let btnClass=isActive ? 'bg-gray-6': 'bg-gray-200';
                        let textClass= isActive ? 'font-semibold text-gray-800': 'text-gray-500'; 
                        {/*kategorileri sıralama ve görüntüleme*/}
                        return(
                            <View key={index} className="flex justify-center items-center mr-6">
                                {/*seçili olan kategori*/}
                                <TouchableOpacity 
                                    onPress={()=> setActiveCategory(category.id)}
                                    className={"p-1 rounded-full shadow bg-gray-500"+btnClass}>
                                    <Image style={{width: 45, height: 45}} 
                                        source={category.image} />
                                 
                                </TouchableOpacity>
                                {/*kategori isimleri*/}
                                <Text className={"text-sm"+textClass}>{category.name}</Text>
                            </View>
                        )
                    })
                }
                </ScrollView>
        </View>
    
    )
} 