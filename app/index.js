import { View, Text, StyleSheet, Image, Button, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';

export default function Home() {
  const router = useRouter();

  return (
    <View style={styles.container}>

      <Image
        source={require('../assets/logo.png')}
        style={styles.logo}
      />
      
      <TouchableOpacity
        style={styles.button}
        activeOpacity={0.7}
        onPress={() => router.push('/itens_encontrados')}
      >
        <Text style={styles.buttonText}>Itens Encontrados</Text>
      </TouchableOpacity>

      <View style={{height: 20}} />

      <TouchableOpacity
        style={styles.button}
        activeOpacity={0.7}
        onPress={() => router.push('/registrar')}
      >
        <Text style={styles.buttonText}>Cadastrar Item Perdido</Text>
      </TouchableOpacity>

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
  logo: {
    width: 250,
    height: 250,
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#FFFFFF',
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 25,
    alignItems: 'center',
  },
  buttonText: {
    color: '#000000',
    fontSize: 18,
    fontWeight: 'bold'
  },
});