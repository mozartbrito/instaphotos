import {Dimensions, StyleSheet} from 'react-native';

const largura = Dimensions.get("screen").width;

const estilo = StyleSheet.create({
    imagem: {
        width: largura,
        height: largura
    },
    like: {
        width: 30,
        height: 30,
        margin: 10
    },
    curtidas: {
        flexDirection: "row",
        alignItems: "center"
    },
    descricao: {
        marginLeft: 10
    }
})


export default estilo;