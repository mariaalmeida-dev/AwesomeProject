import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';

import styles from './PostCard.styles';

type Props = {
    user: string;
    avatar: string;
    image: string;
    likes: number;
    caption: string;
};

export default function PostCard({ user, avatar, image, likes, caption }: Props) {
    return (
        <View style={styles.card}>

            {/* Header */}
            <View style={styles.header}>
                <Image source={{ uri: avatar }} style={styles.avatar} />
                <Text style={styles.username}>{user}</Text>
            </View>

            {/* Main Image */}
            <Image source={{ uri: image }} style={styles.postImage} />

            {/* Actions */}
            <View style={styles.actions}>
                <TouchableOpacity>
                    <Text style={styles.likeIcon}>❤️</Text>
                </TouchableOpacity>
            </View>

            {/* Likes */}
            <Text style={styles.likes}>{likes} likes</Text>

            {/* Caption */}
            <Text style={styles.caption}>
                <Text style={styles.username}>{user} </Text>
                {caption}
            </Text>
        </View>
    );
}
