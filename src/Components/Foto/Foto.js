import React from 'react';
import {Image, Text, View} from 'react-native';
import estilo from './estilo'

const Foto = ({foto, descricao, curtidas}) => {
    return (
        <View>
            <Image
                source={{uri: foto}}
                style={estilo.imagem}
            />
            <Text style={estilo.descricao}>{descricao}</Text>
            <View style={estilo.curtidas}>
                <Image 
                    source={exibeLike(0)}
                    style={estilo.like}
                />
                <Text>{curtidas} curtidas</Text>
            </View>
        </View>
    )
} 

const exibeLike = (like) => {
    if(like) {
        return require("../../../assets/images/like-checked.png")
    } else {
        return require("../../../assets/images/like.png")
    }
}

export default Foto;