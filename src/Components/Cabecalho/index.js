import React, { Fragment } from 'react';
import { Text, Image } from 'react-native';

const Cabecalho = ({nomeUsuario}) => {
    return (
        <Fragment>
        <Image
            source={require("../../../assets/images/produtividade.jpg")}
            style={{width: 40, height: 40}}
        />
        <Text>{nomeUsuario}</Text>
        </Fragment>
    )
}

export default Cabecalho;