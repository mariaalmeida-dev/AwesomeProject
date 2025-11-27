import { View, Text } from 'react-native';

export default function ProfileStats() {
    return (
        <View style={{ flexDirection: 'row', justifyContent: 'space-around', paddingVertical: 12 }}>
            <View style={{ alignItems: 'center' }}>
                <Text style={{ fontWeight: 'bold', fontSize: 18 }}>22</Text>
                <Text>Posts</Text>
            </View>
            <View style={{ alignItems: 'center' }}>
                <Text style={{ fontWeight: 'bold', fontSize: 18 }}>1.2k</Text>
                <Text>Followers</Text>
            </View>
            <View style={{ alignItems: 'center' }}>
                <Text style={{ fontWeight: 'bold', fontSize: 18 }}>240</Text>
                <Text>Following</Text>
            </View>
        </View>
    );
}
