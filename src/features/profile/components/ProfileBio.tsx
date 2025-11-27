import { View, Text } from 'react-native';

import Colors from '../../../styles/colors.ts';

export default function ProfileBio() {
    return (
        <View style={{ paddingHorizontal: 16, marginBottom: 12 }}>
            <Text style={{ fontWeight: 'bold', fontSize: 16 }}>Maria Almeida</Text>
            <Text style={{ color: Colors.theme.gray }}>Frontend Developer • Dreamer</Text>
            <Text style={{ marginTop: 4 }}>Building beautiful apps 🌴💙</Text>
        </View>
    );
}
