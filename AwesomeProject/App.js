import { Text, View } from 'react-native';
import Navigation from './navigation';
import { store } from './store'
import { Provider } from 'react-redux'
import AppStack from './appStack';
import { NavigationContainer } from '@react-navigation/native';
import 'react-native-gesture-handler';
import { AuthProvider } from './components/authContext';
import AppNav from './appNav';

export default function App() {
  return (
    
    <AuthProvider>
        <AppNav />
    </AuthProvider>
  );
}


