import React, { useRef } from 'react';
import { Animated, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

interface Props {
    liked: boolean;
    onToggleLike: () => void;
}

export default function LikeButton({ liked, onToggleLike }: Props) {
    const scaleAnim = useRef(new Animated.Value(1)).current;

    const animate = () => {
        Animated.sequence([
            Animated.timing(scaleAnim, {
                toValue: 1.3,
                duration: 120,
                useNativeDriver: true
            }),
            Animated.timing(scaleAnim, {
                toValue: 1,
                duration: 120,
                useNativeDriver: true
            })
        ]).start();
    };

    const handlePress = () => {
        animate();
        onToggleLike();
    };

    return (
        <TouchableOpacity onPress={handlePress} activeOpacity={0.7}>
            <Animated.View style={{ transform: [{ scale: scaleAnim }] }}>
                <Icon
                    name={liked ? 'heart' : 'heart-outline'}
                    size={32}
                    color={liked ? '#E1306C' : 'white'}
                />
            </Animated.View>
        </TouchableOpacity>
    );
}
