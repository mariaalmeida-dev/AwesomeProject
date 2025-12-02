import React from 'react';
import { View, FlatList, Dimensions } from 'react-native';
import Skeleton from './Skeleton';

import styles from './FeedSkeleton.styles';

const WINDOW_WIDTH = Dimensions.get('window').width;
const STORY_SIZE = 64;
const POST_IMAGE_HEIGHT = Math.round(WINDOW_WIDTH * 0.75);
const AVATAR_SIZE = 40;

export default function FeedSkeleton() {
    const posts = Array.from({ length: 6 });

    return (
        <FlatList
            data={posts}
            keyExtractor={(_, i) => String(i)}
            ListHeaderComponent={
                <View style={styles.storiesContainer}>
                    {Array.from({ length: 4 }).map((_, i) => (
                        <Skeleton
                            key={i}
                            width={STORY_SIZE}
                            height={STORY_SIZE}
                            radius={STORY_SIZE / 2}
                            style={{ marginRight: 12 }}
                        />
                    ))}
                </View>
            }

            renderItem={() => (
                <View style={styles.postContainer}>
                    <View style={styles.postHeader}>
                        <Skeleton width={AVATAR_SIZE} height={AVATAR_SIZE} radius={AVATAR_SIZE / 2} />
                        <View style={{ marginLeft: 12, flex: 1 }}>
                            <Skeleton width={'50%'} height={12} radius={6} />
                        </View>
                    </View>

                    <View style={{ marginTop: 12 }}>
                        <Skeleton width={WINDOW_WIDTH} height={POST_IMAGE_HEIGHT} radius={0} />
                    </View>
                    <View style={styles.postFooter}>
                        <Skeleton width={'40%'} height={12} radius={6} style={{ marginBottom: 8 }} />
                        <Skeleton width={'70%'} height={10} radius={6} />
                    </View>
                </View>
            )}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={styles.listContent}
        />
    );
}
