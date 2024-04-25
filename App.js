import React, { useState, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, TextInput, View, Image, ImageBackground, ScrollView, Text } from 'react-native';
import { Button } from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
 

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home"
        component={HomeScreen} 
        options={{
          title: 'My home',
          headerStyle: {
            backgroundColor: '#3498DB',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
        />
        <Stack.Screen name="CreatePost" component={CreatePostScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

function HomeScreen({ navigation, route }) {


  useEffect(() => {
    if (route.params?.post) {
      // Post updated, do something with `route.params.post`
      // For example, send the post to the server
    }
  }, [route.params?.post]);

  return (
    <ScrollView contentContainerStyle={styles.scrollView}>
      <View style={styles.container}>
        <View style={styles.imagenContainer}>
          <Image style={styles.imagen} source={require('./assets/1_xDi2csEAWxu95IEkaNdFUQ.png')} />
          <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Button
              title="Create post"
              mode="contained"
              onPress={() => navigation.navigate('CreatePost')}
            >
              
              presioname
            </Button>
            <Text style={{ margin: 10 }}>Mensaje: {route.params?.post}</Text>
          </View>
        </View>
        <StatusBar style="auto" />
      </View>
    </ScrollView>
  );
}


function CreatePostScreen({ navigation, route }) {
  const [postText, setPostText] = React.useState('');

  const handlePost = () => {
    // Verifica si el texto del post no está vacío
    if (postText.trim() !== '') {
      // Envía el post solo si el texto no está vacío
      navigation.navigate({
        name: 'Home',
        params: { post: postText },
        merge: true,
      });
    } else {
      // Muestra un mensaje de error si el texto está vacío
      alert('Dale pelotudo escribi algo');
    }
  };

  return (
    <>
      <TextInput
        multiline
        placeholder="What's on your mind?"
        style={{ height: 200, padding: 10, backgroundColor: 'white' }}
        value={postText}
        onChangeText={setPostText}
      />
      <Button
        title="Done"
        mode="contained"
        onPress={handlePost}
      >
        Mandale post
      </Button>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  imagenContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  imagen: {
    width: 200,
    height: 150,
  },
  image: {
    flex: 1,
    justifyContent: 'center',
    width: '100%',
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    backgroundColor: '#ffffff80',
  },
  scrollView: {
    flexGrow: 1,
  },
});
