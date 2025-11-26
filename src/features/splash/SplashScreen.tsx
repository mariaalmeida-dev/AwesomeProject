import React, { useEffect, useRef } from "react";
import { View, Animated } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";

import { RootStackParamList } from "../../navigation/AppNavigator";
import styles from "./SplashScreen.styles";

type Props = NativeStackScreenProps<RootStackParamList, "Splash">;

export default function SplashScreen({ navigation }: Props) {
    const scaleValue = useRef(new Animated.Value(0)).current;

    useEffect(() => {
        Animated.spring(scaleValue, {
            toValue: 1,
            useNativeDriver: true,
        }).start();

        const timer = setTimeout(() => {
            navigation.replace("Login");
        }, 2000);

        return () => clearTimeout(timer);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    return (
        <View style={styles.container}>
            <Animated.Text style={[styles.logo, { transform: [{ scale: scaleValue }] }]}>
                AwesomeProject
            </Animated.Text>
        </View>
    );
}
