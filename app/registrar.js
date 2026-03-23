import { View, Text, StyleSheet, TextInput, TouchableOpacity, Alert } from 'react-native';
import { useState } from 'react';

export default function Registrar() {
  const [nome, setNome] = useState('');
  const [local, setLocal] = useState('');

  const handleCadastrar = () => {
    if (!nome || !local) {
      Alert.alert('Erro', 'Preencha todos os campos!');
      return;
    }

    Alert.alert('Sucesso', 'Item registrado!');
    setNome('');
    setLocal('');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Registrar Item Perdido</Text>

      <TextInput
        style={styles.input}
        placeholder="Nome do item"
        value={nome}
        onChangeText={setNome}
      />

      <TextInput
        style={styles.input}
        placeholder="Último local visto"
        value={local}
        onChangeText={setLocal}
      />

      <TouchableOpacity style={styles.botao} onPress={handleCadastrar}>
        <Text style={styles.botaoTexto}>Cadastrar</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eb1b5b',
    padding: 20,
    justifyContent: 'center',
  },
  titulo: {
    fontSize: 24,
    color: '#fff',
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 10,
    marginBottom: 15,
  },
  botao: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 25,
    alignItems: 'center',
  },
  botaoTexto: {
    color: '#eb1b5b',
    fontSize: 18,
    fontWeight: 'bold',
  },
});