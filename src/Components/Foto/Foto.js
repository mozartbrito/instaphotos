import React, { useState } from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import estilo from './estilo'

const Foto = ({ foto, descricao, curtidas }) => {
    const [curtiu,setCurtiu] = useState(false);
    
    const curtirFoto = () => {
        setCurtiu(!curtiu)
    }
    return (
        <View>
            <Image
                source={{ uri: foto }}
                style={estilo.imagem}
            />
            <Text style={estilo.descricao}>{descricao}</Text>
            <View style={estilo.curtidas}>
                <TouchableOpacity
                    onPress={curtirFoto}
                >
                    <Image
                        source={exibeLike(curtiu)}
                        style={estilo.like}
                    />
                </TouchableOpacity>
                <Text>{curtidas} curtidas</Text>
            </View>
        </View>
    )
}

const exibeLike = (like) => {
    if (like) {
        return require("../../../assets/images/like-checked.png")
    } else {
        return require("../../../assets/images/like.png")
    }
}

export default Foto;