import React from 'react';
import { View } from 'react-native';
import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';

import { TabsParamList } from '../../navigation/TabsNavigator';
import styles from './ProfileScreen.styles.ts'
import ProfileHeader from './components/ProfileHeader';
import ProfileStats from './components/ProfileStats';
import ProfileBio from './components/ProfileBio';
import ProfileGrid from './components/ProfileGrid';

type Props = BottomTabScreenProps<TabsParamList, 'Profile'>;
export default function ProfileScreen({ navigation, route }: Props) {
    return (
        <View style={styles.container}>
            <ProfileHeader />
            <ProfileStats />
            <ProfileBio />
            <ProfileGrid />
        </View>
    );
}
