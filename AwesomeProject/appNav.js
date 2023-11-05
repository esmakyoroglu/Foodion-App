import React, {useContext} from 'react'
import { View, ActivityIndicator } from 'react-native';
import Navigation from './navigation';
import AppStack from './appStack';
import { store } from './store'
import { Provider } from 'react-redux'
import { NavigationContainer } from '@react-navigation/native';
import { AuthContext } from './components/authContext';

const AppNav =()=>{
    const {isLoading, userToken }=useContext(AuthContext);

    if(isLoading){
    return(
        <View style={{flex:1, justifyContent:'center', alignItems:'center'}}>
            <ActivityIndicator size={'large'}/>
        </View>
        );
    }

    return(
        <Provider store={store}>
        <NavigationContainer>
            { userToken !== null ? <AppStack /> : <Navigation />  }
        </NavigationContainer>
        </Provider> 
    );
} 
export default AppNav;