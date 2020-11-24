import React from 'react';
import { Text, View } from 'react-native';
import estilo from './estilo'

const Comentarios = ({comentarios}) => {
    return (
        <View style={estilo.comentarios}>
            <Text>username  </Text>
            <Text>
                Comentario
            </Text>
        </View>
    )
}

export default Comentarios