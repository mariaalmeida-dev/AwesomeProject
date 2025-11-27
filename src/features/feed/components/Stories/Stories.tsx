import React from 'react';
import { View, FlatList, Image, Text, TouchableOpacity } from 'react-native';

import styles from './Stories.styles';
import { fakeStories } from '../../data/fakeStories';

export default function Stories() {
    return (
        <View style={styles.container}>
            <FlatList
                data={fakeStories}
                horizontal
                showsHorizontalScrollIndicator={false}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <TouchableOpacity style={styles.storyItem}>
                        <Image source={{ uri: item.avatar }} style={styles.avatar} />
                        <Text style={styles.username}>{item.user}</Text>
                    </TouchableOpacity>
                )}
            />
        </View>
    );
}
