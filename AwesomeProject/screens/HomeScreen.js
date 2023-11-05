import {View, Text, TextInput, ScrollView, TouchableOpacity} from 'react-native';
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { StatusBar } from 'expo-status-bar'
import * as Icon from "react-native-feather";
import { themeColors } from '../theme';
import Categories from '../components/categories';
import { featured1, featured2, featured3, featured4, featured5,featured6, featured7, featured8, featured10 } from '../constants';
import FeaturedRow from '../components/featuredRow';
import { useNavigation } from '@react-navigation/native';
import AppStack from '../appStack';


export default function HomeScreen({navigation}){
    return(   
        <SafeAreaView className="bg-white">
            <StatusBar barStyle="dark-content"/>

            {/*arama kutucuğu*/}
            <View className="flex-row items-center space-x-2 px-4 m-2">
                <View>
            
                    <TouchableOpacity onPress={() => navigation.openDrawer()}>
                        <Icon.List style={{color:themeColors.bgColor(1)}} height="30" width="30" />
                    </TouchableOpacity>
                </View>
                <View className="flex-row flex-1 items-center p-3 rounded-full border border-gray-300">
                    <Icon.Search height="25" width="25" stroke="gray" />
                    <TextInput placeholder='Restoranlar' className="ml-2 flex-1" />
                    {/*konum kutucuğu*/}
                    <View className="flex-row items-center space-x-1 border-0 border-l-2 pl-2 border-l-gray-300">
                        <Icon.MapPin height="20" width="20" stroke="gray" />
                        <Text className="text-gray-600">İstanbul, Türkiye</Text>
                    </View>
                </View>
                {/*filtreleme iconu*/}
            </View>
            {/*sayfanın ana bölümü kaydırılabilir ekran*/}
            <ScrollView showsVerticalScrollIndicator={false}
                contentContainerStyle={{
                    paddingBottom: 20  
                }}
                >
                {/*Kategoriler*/}
                <Categories />

                {/*Restoranlar*/}
                <View className="mt-5">
                    
                    {
                        [featured1, featured2, featured3, featured4, featured5,featured6, featured7, featured8, featured10].map((item, index)=>{
                            return (
                                <FeaturedRow 
                                    key={index}
                                    title={item.title}
                                    restaurants={item.restaurants}
                                    
                                />
                            )
                        })
                    }
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}