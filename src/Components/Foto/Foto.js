import React, { useState } from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import estilo from './estilo'

const Foto = ({ foto, descricao, curtidas }) => {
    const [curtiu,setCurtiu] = useState(false);
    const [likes,setLikes] = useState(curtidas)

    let qtd = likes;

    const curtirFoto = () => {

        if(curtiu) {
            qtd--;
        } else {
            qtd++;
        }
        setLikes(qtd);
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
                <Text>{likes} curtidas</Text>
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