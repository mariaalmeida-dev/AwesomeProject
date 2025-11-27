import React from "react";
import { View, Text } from "react-native";
import { BottomTabScreenProps } from "@react-navigation/bottom-tabs";

import { TabsParamList } from "../../navigation/TabsNavigator";
import styles from './SearchScreen.styles.ts';

type Props = BottomTabScreenProps<TabsParamList, "Search">;

export default function SearchScreen({ navigation, route }: Props) {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Search</Text>
        </View>
    );
}
