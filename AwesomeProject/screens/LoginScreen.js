import React, { useContext } from 'react';
import { SafeAreaView, View, Text, TouchableOpacity } from 'react-native';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { themeColors } from '../theme';
import CustomButton from '../components/customButton';
import InputField from '../components/inputField';
import { AuthContext } from '../components/authContext';

const LoginScreen = ({navigation}) => {
  const {login} =useContext(AuthContext);
  return (
    <SafeAreaView style={{flex: 1, justifyContent: 'center'}}>
      <View style={{paddingHorizontal: 25}}>
        <View style={{alignItems: 'center', margin:30}}>
          <Text style={{fontSize: 50, color:themeColors.bgColor(1)}}>
            Foodion
          </Text>  
        </View>

        <Text
          style={{fontSize: 24, fontWeight: '500', marginBottom: 30 }}>
          Giriş
        </Text>
      

        <InputField label={'Email'}
          icon={
            <MaterialIcons name="alternate-email" size={20} style={{marginRight: 5}}/>
          }
          keyboardType="email-address"
        />

        <InputField
          label={'Şifre'}
          icon={
            <Ionicons name="ios-lock-closed-outline" size={20} style={{marginRight: 5}}/>
          }
          inputType="password"
          fieldButtonLabel={"Şifremi Unuttum"}
          fieldButtonFunction={() => {}}
        />
        
        <CustomButton label={"Giriş"} onPress={() => {login()}} />

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            marginBottom: 30
          }}>
          <Text>Uygulamada Yeni misiniz?</Text>
          <TouchableOpacity onPress={() => navigation.navigate('Register')}>
            <Text style={{ fontWeight: '700', color:themeColors.bgColor(1)}}> Kayıt Ol</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default LoginScreen;
