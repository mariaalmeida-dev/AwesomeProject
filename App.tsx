import { SafeAreaView, SafeAreaProvider, Edges } from 'react-native-safe-area-context';
import { StatusBar, useColorScheme } from 'react-native';

import AppNavigator from './src/navigation/AppNavigator.tsx';

function App() {
    const isDarkMode = useColorScheme() === 'dark';

    return (
        <SafeAreaProvider>
            <SafeAreaView style={{ flex: 1 }} edges={['top', 'bottom'] as Edges}>
                <StatusBar
                    translucent
                    backgroundColor="transparent"
                    barStyle={isDarkMode ? 'light-content' : 'dark-content'}
                />
                <AppNavigator />
            </SafeAreaView>
        </SafeAreaProvider>
    );
}

export default App;
