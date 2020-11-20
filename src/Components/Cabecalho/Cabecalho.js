import React from 'react';
import { Text, Image, View } from 'react-native';

import estilo from './estilo'

const Cabecalho = ({nomeUsuario, imgUsuario}) => {
    return (
        <View style={estilo.cabecalho}>
            <Image
                source={{uri:imgUsuario}}
                style={estilo.imagem}
            />
            <Text style={estilo.user}>{nomeUsuario}</Text>
        </View>
    )
}

export default Cabecalho;