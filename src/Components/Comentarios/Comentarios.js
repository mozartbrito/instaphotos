import React, { Fragment, useState } from 'react';
import { FlatList, Text, View, TextInput, Image, TouchableOpacity } from 'react-native';
import estilo from './estilo'

const Comentarios = ({comentarios}) => {

    const [estadoComentarios, setComentarios] = useState(comentarios)

    const enviarComentario = () => {
        console.warn(textoComentario)
        const novoComentario = {
            userName: "@senac",
            comentario: textoComentario
        }

        setComentarios([...estadoComentarios, novoComentario])
        inputText.clear()
    }
    let inputText;
    let textoComentario = "";

    return (
        <Fragment>
            <View style={estilo.enviaComentario}>
                <TextInput
                    ref={ref => { inputText = ref }}
                    onChangeText={texto => textoComentario = texto}
                    placeholder="Digite um comentário..."
                    style={estilo.input}
                />
                <TouchableOpacity
                    onPress={enviarComentario}
                >
                    <Image
                        source={require('../../../assets/images/send.png')}
                        style={estilo.imagem}
                    />
                </TouchableOpacity>
            </View>
            <FlatList
                data={estadoComentarios}
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
        </Fragment>
    )
}

export default Comentarios