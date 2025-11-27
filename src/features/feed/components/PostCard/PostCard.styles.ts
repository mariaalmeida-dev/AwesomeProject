import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    card: { marginBottom: 25 },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 10,
        marginBottom: 10,
    },
    avatar: { width: 40, height: 40, borderRadius: 20, marginRight: 10 },
    username: { fontWeight: 'bold', fontSize: 14 },
    postImage: { width: '100%', height: 350 },
    actions: { flexDirection: 'row', padding: 10 },
    likeIcon: { fontSize: 28, marginRight: 15 },
    likes: { fontWeight: 'bold', marginLeft: 10 },
    caption: { marginTop: 5, marginLeft: 10 },
});
