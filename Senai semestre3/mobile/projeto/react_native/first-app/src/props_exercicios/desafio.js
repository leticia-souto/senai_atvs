import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

export default function Botao(props) {
  return (
    <TouchableOpacity style={styles.botao}>
      <Text style={styles.texto}>{props.titulo}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  botao: {
    backgroundColor: '#750b6e',
    padding: 15,
    margin: 10,
    borderRadius: 8,
  },
  texto: {
    color: '#fff',
    fontSize: 16,
    textAlign: 'center',
  },
});