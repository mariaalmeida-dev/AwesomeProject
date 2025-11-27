import React from 'react';
import { SafeAreaView } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import SplashScreen from '../features/splash/SplashScreen';
import LoginScreen from '../features/auth/LoginScreen';
import TabsNavigator from './TabsNavigator.tsx';

export type RootStackParamList = {
    Splash: undefined;
    Login: undefined;
    Tabs: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

const AppNavigator: React.FC = () => {
    return (
        <SafeAreaProvider>
            <SafeAreaView style={{ flex: 1 }} edges={['top', 'bottom']}>
                <NavigationContainer>
                    <Stack.Navigator initialRouteName='Splash' screenOptions={{ headerShown: false }}>
                        <Stack.Screen name='Splash' component={SplashScreen} />
                        <Stack.Screen name='Login' component={LoginScreen} />
                        <Stack.Screen name="Tabs" component={TabsNavigator} options={{ headerShown: false }}/>
                    </Stack.Navigator>
                </NavigationContainer>
            </SafeAreaView>
        </SafeAreaProvider>

    );
};

export default AppNavigator;
