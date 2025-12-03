import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        marginBottom: 25,
    },

    header: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 10,
        marginBottom: 10,
    },

    avatar: {
        width: 40,
        height: 40,
        borderRadius: 20,
        marginRight: 10,
    },

    username: {
        fontWeight: 'bold',
        fontSize: 14,
        color: 'black',
    },

    postImage: {
        width: '100%',
        height: 350,
    },

    centerHeart: {
        position: 'absolute',
        top: '40%',
        left: '40%',
    },

    actions: {
        flexDirection: 'row',
        gap: 15,
        padding: 10,
        alignItems: 'center',
    },

    likes: {
        fontWeight: 'bold',
        marginLeft: 10,
        color: 'black',
    },

    caption: {
        marginTop: 5,
        marginLeft: 10,
        color: 'black',
    },
});
