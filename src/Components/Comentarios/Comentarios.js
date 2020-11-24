import React from 'react';
import { FlatList, Text, View } from 'react-native';
import estilo from './estilo'

const Comentarios = ({comentarios}) => {
    return (
        <FlatList
            data={comentarios}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({item}) => (
                <View style={estilo.comentarios}>
                    <Text style={estilo.username}>{item.userName}  </Text>
                    <Text>
                        {item.comentario}
                    </Text>
                </View>
            )}
        />
    )
}

export default Comentarios