import React, { Fragment } from 'react';
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

const usuarios = [
  {nome: 'Maria Silva'},
  {nome: 'João Adalto'},
  {nome: 'Guilherme Ancelmo'},
  {nome: 'Marcelo João'},

]

export default function App() {
  return (
    <ScrollView>
      <FlatList 
        data={usuarios}
        keyExtractor={(item, index) => index.toString() }
        renderItem={({item})=>(
          <Fragment>
            <Cabecalho nomeUsuario={item.nome} />
            <Foto />
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
