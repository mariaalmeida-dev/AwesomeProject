import { StyleSheet } from 'react-native';

import colors from '../../../../styles/colors';

export default StyleSheet.create({
    container: { paddingVertical: 10 },
    storyItem: { marginHorizontal: 10, alignItems: 'center' },
    avatar: {
        width: 60,
        height: 60,
        borderRadius: 30,
        borderWidth: 3,
        borderColor: colors.primary,
    },
    username: {
        marginTop: 5,
        fontSize: 12,
        color: '#333',
    },
});
