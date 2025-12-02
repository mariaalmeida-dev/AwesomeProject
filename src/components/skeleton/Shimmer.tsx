import React, { useRef, useEffect } from 'react';
import { Animated, StyleSheet } from 'react-native';
import { LinearGradient } from 'react-native-svg';

export default function Shimmer() {
    const translateX = useRef(new Animated.Value(-300)).current;

    useEffect(() => {
        Animated.loop(
            Animated.timing(translateX, {
                toValue: 300,
                duration: 1200,
                useNativeDriver: true,
            })
        ).start();
    }, []);

    return (
        <Animated.View
            style={[
                styles.shimmer,
                { transform: [{ translateX }] },
            ]}
        >
            <LinearGradient
                colors={['transparent', 'rgba(255,255,255,0.3)', 'transparent']}
                start={{ x: 0, y: 0 }}
                end={{ x: 1, y: 0 }}
                style={StyleSheet.absoluteFill}
            />
        </Animated.View>
    );
}

const styles = StyleSheet.create({
    shimmer: {
        flex: 1,
    },
});
