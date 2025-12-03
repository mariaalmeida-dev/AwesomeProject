import { useRef } from 'react';
import { Animated } from 'react-native';

export function useHeartBurst() {
    const scale = useRef(new Animated.Value(0)).current;

    function trigger() {
        scale.setValue(0);

        Animated.spring(scale, {
            toValue: 1,
            friction: 4,
            useNativeDriver: true
        }).start(() =>
            Animated.timing(scale, {
                toValue: 0,
                duration: 300,
                useNativeDriver: true
            }).start()
        );
    }

    return { scale, trigger };
}
