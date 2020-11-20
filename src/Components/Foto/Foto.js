import React from 'react';
import {Image, Text, View} from 'react-native';
import estilo from './estilo'

const Foto = () => {
    return (
        <View>
            <Image
                source={require("../../../assets/images/produtividade.jpg")}
                style={estilo.imagem}
            />
            <Text>Descrição do post</Text>
            <Image 
                source={require("../../../assets/images/like-checked.png")} 
                style={estilo.like}
            />
        </View>
    )
} 

export default Foto;