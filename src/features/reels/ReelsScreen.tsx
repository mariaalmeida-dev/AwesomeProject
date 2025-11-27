import React from 'react';
import { View, Text } from 'react-native';
import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';

import { TabsParamList } from '../../navigation/TabsNavigator';
import styles from './ReelsScreen.styles.ts';

type Props = BottomTabScreenProps<TabsParamList, 'Reels'>;

export default function ReelsScreen({ navigation, route }: Props) {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Reels</Text>
        </View>
    );
}
