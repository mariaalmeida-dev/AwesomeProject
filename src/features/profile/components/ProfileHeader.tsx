import { View, Image, Text, TouchableOpacity } from 'react-native';

import Colors from '../../../styles/colors.ts'

export default function ProfileHeader() {
    return (
        <View style={{ padding: 16, flexDirection: 'row', alignItems: 'center' }}>
            <Image
                source={{ uri: 'https://i.pravatar.cc/150?img=9' }}
                style={{ width: 80, height: 80, borderRadius: 40 }}
            />

            <View style={{ marginLeft: 16 }}>
                <TouchableOpacity
                    style={{
                        borderWidth: 1,
                        borderColor: Colors.theme.gray,
                        borderRadius: 8,
                        paddingVertical: 6,
                        paddingHorizontal: 16,
                    }}
                >
                    <Text>Edit Profile</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}
