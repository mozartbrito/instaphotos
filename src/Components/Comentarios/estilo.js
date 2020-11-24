import {StyleSheet} from 'react-native';

const estilo = StyleSheet.create({
    comentarios: {
        flexDirection: "row",
        alignItems: "center",
        marginLeft: 5,
        marginBottom: 5,
    },
    username: {
        fontWeight: "bold"
    },
    enviaComentario: {
        flexDirection: "row",
        alignItems: "center",
        marginBottom: 2,
        marginLeft: 5,
        marginRight: 5
    },
    input: {
        flex: 1
    },
    imagem: {
        width: 30,
        height:30
    }
})

export default estilo