import React from 'react';
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
        <NavigationContainer>
            <Stack.Navigator initialRouteName='Splash' screenOptions={{ headerShown: false }}>
                <Stack.Screen name='Splash' component={SplashScreen} />
                <Stack.Screen name='Login' component={LoginScreen} />
                <Stack.Screen name='Tabs' component={TabsNavigator} options={{ headerShown: false }}/>
            </Stack.Navigator>
        </NavigationContainer>

    );
};

export default AppNavigator;
