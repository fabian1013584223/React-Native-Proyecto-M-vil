import React, { useState } from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity, Modal, Pressable } from 'react-native';
import { Dimensions } from 'react-native';
import Constants from 'expo-constants';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const windowHeight = Dimensions.get('window').height;
const menuHeight = windowHeight * 10;
const Index = () => {
    const navigation = useNavigation();
    const [isMenuVisible, setIsMenuVisible] = useState(false);

  const toggleMenu = () => {
    setIsMenuVisible(!isMenuVisible);
  };

  return (
    <View style={{ flex: 1 }}>
      <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: Constants.StatusBarHeight, backgroundColor: '#0a58ca', height: 119 }}>
      <Image source={require('/assets/imagenproyecto.png')} 
      style={{ width: 70, height: 80 }} />
        <Text style={{ color: '#FFF', fontSize: 23, fontWeight: 'bold', marginLeft: 'auto' }}>Servicio tecnológico</Text>
        <TouchableOpacity onPress={toggleMenu} style={{ marginLeft: 'auto', marginRight: 10 }}>
          <Ionicons name="menu" size={29} color="white" />
        </TouchableOpacity>
      </View>

      <Modal
        animationType="slide"
        transparent={true}
        visible={isMenuVisible}
        onRequestClose={() => {
          setIsMenuVisible(!isMenuVisible);
        }}
      >
        <View style={{ flex: 1, justifyContent: 'up', alignItems: 'flex-start', backgroundColor: 'rgba(0,0,0,0.5)'}}>

          <View style={{ backgroundColor: '#0a58ca', padding: 25, borderRadius: 1,height: menuHeight}}>
            <Pressable onPress={toggleMenu}>
              <Ionicons name="arrow-back" size={20} color="black" style={{ color: '#FFF', marginBottom: 20 }} />    
            </Pressable>
            <TouchableOpacity onPress={() => navigation.navigate('Index')}>
          <Text style={{ color: '#FFF', marginBottom: 10 }}>Inicio</Text>
        </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Derechos')}>
              <Text style={{ color: '#FFF', marginBottom: 10 }}>Derechos</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() =>navigation.navigate('Nosotros')}>
              <Text style={{ color: '#FFF', marginBottom: 10 }}>Nosotros</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Productos')}>
              <Text style={{ color: '#FFF', marginBottom: 10 }}>Productos</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Administracion')}>
              <Text style={{ color: '#FFF', marginBottom: 10 }}>Administracion</Text>
            </TouchableOpacity>
            <View style={{ borderBottomWidth: 2, borderBottomColor: '#FFF', marginBottom:1}} />
            <TouchableOpacity onPress={() => navigation.navigate('Bodega')}>
              <Text style={{ color: '#FFF', marginBottom: 10 }}>Bodega</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('Caja')}>
              <Text style={{ color: '#FFF', marginBottom: 10 }}>Caja
              </Text>
            </TouchableOpacity>
            <View style={{ borderBottomWidth: 2, borderBottomColor: '#FFF', marginBottom:1}} />
            <TouchableOpacity onPress={() => navigation.navigate('Registrarse')}>
              <Text style={{ color: '#FFF', marginBottom: 10 }}>Registrarse</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate('InicioSesion')}>
              <Text style={{ color: '#FFF', marginBottom: 10 }}>Iniciar Sesion</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
      <ScrollView style={{ padding: 20 }}>
        <View style={{ marginBottom: 40 }}>
          <Text style={{ color: '#0a58ca', fontSize: 35, textAlign:'center', fontWeight:'500'}}>Productos</Text>
        </View>
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center', padding: 5  }} >
          <Image source={require('/assets/portatil.jpeg')} 
          style={{ width: 150, height: 150, marginBottom: 2}} />
            <Text style={{fontFamily: 'sans-serif',fontSize: 20,  fontWeight:'200', lineHeigth:24,textAlign:'center'}}>Computadores</Text>
            <Text style={{ fontFamily: 'sans-serif', fontSize: 18, fontWeight: 20, lineHeigth:24,textAlign:'center'}}>Descripción del producto.</Text>
        </View>
          <View style={{flex: 1, alignItems: 'center', justifyContent: 'center', padding: 5  }} >
          <Image source={require('/assets/Audifonos.jpg')} 
          style={{ width: 150, height: 150, marginBottom: 2}} />
            <Text style={{fontFamily: 'sans-serif',fontSize: 20,  fontWeight:'200', lineHeigth:24,textAlign:'center'}}>Audífonos </Text>
            <Text style={{ fontFamily: 'sans-serif', fontSize: 18, fontWeight: 20, lineHeigth:24,textAlign:'center'}}>Descripción del producto.</Text>
        </View>
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center', padding: 5  }} >
          <Image source={require('/assets/tabletlenovo.jpg')} 
          style={{ width: 150, height: 150, marginBottom: 2}} />
            <Text style={{fontFamily: 'sans-serif',fontSize: 20,  fontWeight:'200', lineHeigth:24,textAlign:'center'}}>Tablet's</Text>
            <Text style={{ fontFamily: 'sans-serif', fontSize: 18, fontWeight: 20, lineHeigth:24,textAlign:'center'}}>Descripción del producto.</Text>
        </View>
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center', padding: 5  }} >
          <Image source={require('/assets/TecladoMause.png')} 
          style={{ width: 150, height: 150, marginBottom: 2}} />
            <Text style={{fontFamily: 'sans-serif',fontSize: 20,  fontWeight:'200', lineHeigth:24,textAlign:'center'}}>Teclados Gamers</Text>
            <Text style={{ fontFamily: 'sans-serif', fontSize: 18, fontWeight: 20, lineHeigth:24,textAlign:'center'}}>Descripción del producto.</Text>
        </View>

      </ScrollView>
      <View style={{ backgroundColor: '#EFEFEF', padding: 20 }}>
        <Text style={{ textAlign: 'center', color: '#555' }}>Copyright © 2023 Brand</Text>
        {/* Redes sociales */}
        {/* Enlaces */}
      </View>
    </View>
  );
};

const CategoryItem = ({ imageSource, title, description }) => {
  return (
    <View style={{ marginBottom: 20 }}>
      <View style={{ alignItems: 'center' }}>
        <Image source={imageSource} style={{ width: 100, height: 80 }} />
        <Text style={{ color: '#3498db', fontSize: 20, fontWeight: 'bold' }}>{title}</Text>
        <Text>{description}</Text>
      </View>
    </View>
  );
};

export default Index;
