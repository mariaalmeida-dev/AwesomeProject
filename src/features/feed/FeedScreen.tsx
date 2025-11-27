import React from 'react';
import { View, FlatList } from 'react-native';

import Stories from './components/Stories/Stories';
import PostCard from './components/PostCard/PostCard';
import { fakePosts } from './data/fakePosts';
import styles from './FeedScreen.styles';

export default function FeedScreen() {
    return (
        <View style={styles.container}>

            <FlatList
                data={fakePosts}
                keyExtractor={(item) => item.id}
                ListHeaderComponent={<Stories />}
                renderItem={({ item }) => (
                    <PostCard
                        user={item.user}
                        avatar={item.avatar}
                        image={item.image}
                        likes={item.likes}
                        caption={item.caption}
                    />
                )}
            />

        </View>
    );
}
