import React from 'react';
import { View, FlatList } from 'react-native';

import Stories from './components/Stories/Stories';
import PostCard from './components/PostCard/PostCard';
import styles from './FeedScreen.styles';
import { useFeed } from './hooks/useFeed.ts';
import FeedSkeleton from '../../components/skeleton/FeedSkeleton';

export default function FeedScreen() {
    const { loading, data } = useFeed();

    if (loading) {
        return <FeedSkeleton />;
    }
    return (
        <View style={styles.container}>

            <FlatList
                data={data}
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
