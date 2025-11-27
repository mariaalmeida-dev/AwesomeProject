import React from "react";
import { View, Text } from "react-native";
import { BottomTabScreenProps } from "@react-navigation/bottom-tabs";

import { TabsParamList } from "../../navigation/TabsNavigator";
import styles from './ProfileScreen.styles.ts'

type Props = BottomTabScreenProps<TabsParamList, "Profile">;
export default function ProfileScreen({ navigation, route }: Props) {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Profile</Text>
        </View>
    );
}
