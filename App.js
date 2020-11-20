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

import {Cabecalho} from './src/Components/Cabecalho/';
import {Foto} from './src/Components/Foto/';

const largura = Dimensions.get("screen").width;

export default function App() {
  const [usuarios, setUsuarios] = useState([]); //chamando a função useState

  useEffect(() => {
    const lerUsuarios = async () => {
      const usuariosHTTP = await(fetch("http://hmgapi.harnet.com.br/api/usuarios.php"));
      const usuariosJson = await usuariosHTTP.json();
      setUsuarios(usuariosJson);
    }
    lerUsuarios();
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
              imgUsuario={item.foto}
              />
            <Foto 
              descricao={item.descricao} 
              foto={item.foto} 
              curtidas={item.likes}
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
