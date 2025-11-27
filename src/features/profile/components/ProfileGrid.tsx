import { Image, FlatList, Dimensions } from 'react-native';
import { JSX } from 'react';

const SIZE = Dimensions.get('window').width / 3;

type GridItem = {
    id: string;
    url: string;
};

const data: GridItem[] = Array.from({ length: 22 }).map((_, index) => ({
    id: (index + 1).toString(),
    url: `https://picsum.photos/seed/${index + 1}/300`,
}));


const renderGridItem: ({item}: { item: any }) => JSX.Element = ({ item }) => (
    <Image
        source={{ uri: item.url }}
        style={{ width: SIZE, height: SIZE }}
    />
);

export default function ProfileGrid() {
    return (
        <FlatList<GridItem>
            data={data}
            numColumns={3}
            keyExtractor={(item) => item.id}
            renderItem={renderGridItem}
        />

    );
}
