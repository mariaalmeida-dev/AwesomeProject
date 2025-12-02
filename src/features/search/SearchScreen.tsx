import React, { useState } from 'react';
import { View, TextInput, FlatList, Image } from 'react-native';

import styles from './SearchScreen.styles';
import { SEARCH_DATA } from './searchData';

export default function SearchScreen() {
    const [query, setQuery] = useState('');

    const filtered = SEARCH_DATA.filter((item) =>
        item.id.includes(query.toLowerCase())
    );

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
