import React, { useState } from 'react';
import { View, TextInput, FlatList, Image } from 'react-native';

import styles from './SearchScreen.styles';
import { SEARCH_DATA } from './searchData';

export default function SearchScreen() {
    const [query, setQuery] = useState('');

    const normalized = query.trim().toLowerCase();

    const filtered = normalized
        ? SEARCH_DATA.filter((item) =>
            item.username.toLowerCase().includes(normalized) ||
            item.caption.toLowerCase().includes(normalized) ||
            item.hashtags?.some((tag) => tag.toLowerCase().includes(normalized))
        )
        : SEARCH_DATA;

    return (
        <View style={styles.container}>
            <TextInput
                style={styles.searchBar}
                placeholder='Search'
                placeholderTextColor='#888'
                value={query}
                onChangeText={setQuery}
            />

            <FlatList
                data={filtered}
                numColumns={3}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <Image source={{ uri: item.url }} style={styles.gridImage} />
                )}
                showsVerticalScrollIndicator={false}
            />
        </View>
    );
}
