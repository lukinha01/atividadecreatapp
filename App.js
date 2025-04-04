import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';
import { Input } from 'react-native-elements';
import { Avatar } from 'react-native-elements';
import { Button } from 'react-native-elements';

function login() {
  return (
    <View style={styles.container}>

      <Avatar
        size ='large'
        rounded
        icon={{name: 'user', type: 'font-awesome'}}
        onPress={() => console.log("Works!")}
        activeOpacity={0.7}
        containerStyle={{marginLeft: 20, marginTop: 115}}
      />
      <Input
        placeholder='Email'
      />
      <Input
        placeholder='senha'
      />
      <Button
        title="logar"
      />
      <Text> </Text>
      <Button
        title="cadastre-se"
      />
      <Text>esqueceu a senha</Text>
      <StatusBar style="auto" />
    </View>
  );
}

function cadastroUsuario() {
  return (
    <View style={styles.container}>
      <Text h1 style={styles.text}> CADASTRO</Text>
      <Input
        placeholder='Nome'
      />
      <Input
        placeholder='Email'
      />
      <Input
        placeholder='senha'
      />
      <Button
        title="cadastrar-se"
      />
      <StatusBar style="auto" />
    </View>
  );
}

export default function esqueceuSenha() {
  return (
    <View style={styles.container}>
      <Text h1 style={styles.text}> ESQUECEU A SENHA</Text>
      <Input
        placeholder='Email'
      />
      <Button
        title="enviar"
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#a0a0a0',
    alignItems: 'center',
  },
  text: {
    marginTop: 115,
  },
});
