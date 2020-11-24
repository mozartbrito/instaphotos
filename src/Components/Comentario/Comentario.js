import React from 'react';
import { Text, TextInput, View, Image } from 'react-native';
import estilo from './estilo'

const Comentario = () => {
    return (
        <View style={estilo.enviaComentario}>
            <TextInput
                placeholder="Digite um comentário..."
                style={estilo.input}
            />
            <Image
                source={require('../../../assets/images/send.png')}
                style={estilo.imagem}
            />
        </View>
    )
}

export default Comentario