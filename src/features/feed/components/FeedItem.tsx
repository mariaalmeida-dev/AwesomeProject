import React from 'react';
import { Image, Dimensions, TouchableOpacity, StyleSheet } from 'react-native';

interface FeedItemProps {
    item: {
        id: string;
        url: string;
    };
    onPress?: (id: string) => void;
}

const SIZE = Dimensions.get('window').width / 3;

export default function FeedItem({ item, onPress }: FeedItemProps) {
    return (
        <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => onPress?.(item.id)}
        >
            <Image
                source={{ uri: item.url }}
                style={styles.image}
            />
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    image: {
        width: SIZE,
        height: SIZE,
    },
});
