import { View, Text, StyleSheet, FlatList } from 'react-native';

export default function ItensEncontrados() {
  const itens = [
    { id: '1', nome: 'Caderno', local: 'Sala 101' },
    { id: '2', nome: 'Celular', local: 'Biblioteca' },
    { id: '3', nome: 'Mochila', local: 'Cantina' },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Itens Encontrados</Text>

      <FlatList
        data={itens}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={styles.nome}>{item.nome}</Text>
            <Text style={styles.local}>Local: {item.local}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eb1b5b',
    padding: 20,
  },
  titulo: {
    fontSize: 24,
    color: '#fff',
    fontWeight: 'bold',
    marginBottom: 20,
  },
  card: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 15,
    marginBottom: 10,
  },
  nome: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  local: {
    fontSize: 16,
    color: '#555',
  },
});
