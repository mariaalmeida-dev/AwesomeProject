import React from 'react';
import { View } from 'react-native';
import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';

import { TabsParamList } from '../../navigation/TabsNavigator';
import FeedScreen from '../feed/FeedScreen.tsx';

type Props = BottomTabScreenProps<TabsParamList, 'Home'>;

export default function HomeScreen({ navigation, route }: Props) {
    return (
        <View style={{ flex: 1 }}>
            <FeedScreen />
        </View>
    );
}
