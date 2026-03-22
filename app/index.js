import { View, Text, StyleSheet, Image, Button } from 'react-native';

export default function Home() {
  return (
    <View style={styles.container}>

      <Image
        source={require('../assets/logo.png')}
        style={styles.logo}
      />
      <Button title="Itens Encontrados" onPress={() => {}} />
      <View style={{height: 10}} />
      <Button title="Cadastrar Item" onPress={() => {}} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eb1b5b',
    justifyContent: 'center',
    alignItems: 'center',
  },
  texto: {
    color: '#fff',
    fontSize: 20,
  },
  logo: {
    width: 250,
    height: 250,
    marginBottom: 20,
  },
});