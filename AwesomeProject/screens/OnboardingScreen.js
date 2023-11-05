import React from 'react'
import { themeColors } from '../theme';
import { SafeAreaView, View, Text, TouchableOpacity } from 'react-native';


const OnboardingScreen = ({navigation}) => {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <View className="flex-1 justify-center items-center" style={{marginTop: 20}}>
        <Text
          style={{
            fontSize: 50,
            color: themeColors.bgColor(1),
          }}>
          Foodion
        </Text>
      </View>
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      </View>
      <TouchableOpacity
        style={{
          backgroundColor: themeColors.bgColor(1),
          padding: 20,
          width: '90%',
          borderRadius: 10,
          marginBottom: 50,
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}
        onPress={() => navigation.navigate('Login')}>
        <Text
          style={{
            color: 'white',
            fontSize: 18,
            textAlign: 'center',
            fontWeight: 'bold',
          }}>
          Haydi Başlayalım!
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default OnboardingScreen;
