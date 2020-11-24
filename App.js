import React, { Fragment, useEffect, useState } from 'react';
import { 
  Text, 
  View, 
  Image, 
  Dimensions,
  ScrollView,
  StyleSheet, 
  FlatList
} from 'react-native';
import lerUsuarios from './src/api/feed';

import {Cabecalho} from './src/Components/Cabecalho/';
import {Comentario} from './src/Components/Comentario';
import {Comentarios} from './src/Components/Comentarios';
import {Foto} from './src/Components/Foto/';

const largura = Dimensions.get("screen").width;

export default function App() {
  const [usuarios, setUsuarios] = useState([]); //chamando a função useState

  useEffect(() => {
    lerUsuarios(setUsuarios);
  }, [])

  return (
    <ScrollView>
      <FlatList 
        data={usuarios}
        keyExtractor={(item, index) => index.toString() }
        renderItem={({item})=>(
          <Fragment>
            <Cabecalho 
              nomeUsuario={item.nome} 
              imgUsuario={item.userFoto}
              />
            <Foto 
              descricao={item.descricao} 
              foto={item.foto} 
              curtidas={item.likes}
            />
            <Comentario />
            <Comentarios 
              comentarios={item.comentarios}  
            />
        </Fragment>
        )}
      
      />
    
    </ScrollView>

  );
}

const estilo = StyleSheet.create({
  imagem: {
    width: largura, 
    height: largura
  }
})
