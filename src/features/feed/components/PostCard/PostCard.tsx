import React, { useState } from 'react';
import {
    View,
    Text,
    Image,
    TouchableWithoutFeedback,
    Animated,
} from 'react-native';
import Ionicons from '@react-native-vector-icons/ionicons';

import styles from './PostCard.styles';
import { useHeartBurst } from '../../animations/useHeartBurst.ts';
import { useDoubleTap } from '../../animations/useDoubleTap.ts';


interface PostCardProps {
    user: string;
    avatar: string;
    image: string;
    likes: number;
    caption: string;
}

export default function PostCard({
                                     user,
                                     avatar,
                                     image,
                                     likes,
                                     caption,
                                 }: PostCardProps) {

    const [liked, setLiked] = useState(false);
    const [localLikes, setLocalLikes] = useState(likes);

    // Large central heart animation
    const { scale, trigger } = useHeartBurst();

    // Double tap handler
    const doubleTapHandler = useDoubleTap(() => {
        if (!liked) {
            setLiked(true);
            setLocalLikes((n) => n + 1);
        }
        trigger();
    });

    // Bottom like button animation
    const likeScale = new Animated.Value(1);
    const animateLike = () => {
        Animated.sequence([
            Animated.timing(likeScale, {
                toValue: 1.4,
                duration: 120,
                useNativeDriver: true,
            }),
            Animated.timing(likeScale, {
                toValue: 1,
                duration: 120,
                useNativeDriver: true,
            }),
        ]).start();
    };

    const toggleLike = () => {
        animateLike();
        setLiked((v) => {
            const newValue = !v;
            setLocalLikes((n) => (newValue ? n + 1 : n - 1));
            return newValue;
        });
    };

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image source={{ uri: avatar }} style={styles.avatar} />
                <Text style={styles.username}>{user}</Text>
            </View>

            <TouchableWithoutFeedback onPress={doubleTapHandler}>
                <View>
                    <Image source={{ uri: image }} style={styles.postImage} />
                    <Animated.View
                        style={[
                            styles.centerHeart,
                            {
                                transform: [{ scale }],
                                opacity: scale.interpolate({
                                    inputRange: [0, 1],
                                    outputRange: [0, 1],
                                }),
                            },
                        ]}
                    >
                        <Ionicons name='heart' size={100} color='white' />
                    </Animated.View>
                </View>
            </TouchableWithoutFeedback>

            <View style={styles.actions}>
                <TouchableWithoutFeedback onPress={toggleLike}>
                    <Animated.View style={{ transform: [{ scale: likeScale }] }}>
                        <Ionicons
                            name={liked ? 'heart' : 'heart-outline'}
                            size={34}
                            color={liked ? 'red' : 'gray'}
                        />
                    </Animated.View>
                </TouchableWithoutFeedback>

                <Ionicons name='chatbubble-outline' size={32} color='white' />
                <Ionicons name='paper-plane-outline' size={32} color='white' />
            </View>

            <Text style={styles.likes}>{localLikes} likes</Text>
            <Text style={styles.caption}>
                <Text style={styles.username}>{user}</Text> {caption}
            </Text>
        </View>
    );
}
