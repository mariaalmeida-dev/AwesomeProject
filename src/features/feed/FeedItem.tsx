import React, { useState } from 'react';
import { View, Image, TouchableWithoutFeedback, Animated } from 'react-native';
import LikeButton from './LikeButton';

import { useDoubleTap } from './animations/useDoubleTap';
import { useHeartBurst } from './animations/useHeartBurst';

export default function FeedItem({ item }: any) {
    const [liked, setLiked] = useState(false);

    const { scale, trigger } = useHeartBurst();

    const handleDoubleTap = () => {
        if (!liked) setLiked(true);
        trigger();
    };

    const doubleTapHandler = useDoubleTap(handleDoubleTap);

    return (
        <View style={{ marginBottom: 20 }}>
            <TouchableWithoutFeedback onPress={doubleTapHandler}>
                <View>
                    <Image
                        source={{ uri: item.image }}
                        style={{ width: '100%', height: 350 }}
                    />

                    <Animated.View
                        style={{
                            position: 'absolute',
                            top: '40%',
                            left: '40%',
                            transform: [{ scale }],
                            opacity: scale.interpolate({
                                inputRange: [0, 1],
                                outputRange: [0, 1]
                            })
                        }}
                    >
                        <Icon name='heart' size={100} color='white' />
                    </Animated.View>
                </View>
            </TouchableWithoutFeedback>

            <View style={{ padding: 10 }}>
                <LikeButton
                    liked={liked}
                    onToggleLike={() => setLiked((v) => !v)}
                />
            </View>
        </View>
    );
}
