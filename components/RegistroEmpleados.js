import React, { useState } from 'react';
import { View, Text, Image, ScrollView, TouchableOpacity, Modal, Pressable,Picker, TextInput  } from 'react-native';
import { Dimensions } from 'react-native';
import Constants from 'expo-constants';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const windowHeight = Dimensions.get('window').height;
const menuHeight = windowHeight * 10;
const RegistroEmpleados = () => {
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
          <Text style={{ color: '#0a58ca', fontSize: 28, textAlign:'center', fontWeight:'500'}}>Registrarse</Text>
        </View>
        <View style={{ flexDirection: 'row' }}>
            <View style={{ flex: 1 }}></View>
            <View style={{ flex: 3 }}>
            <Text style={{ color: '#007BFF' ,fontSize:19}}>Tipo de documento</Text>
            <Picker style={{backgroundColor: '#CED4DA',borderRadius:4,padding:'4px',fontSize:16, height: 35, width: 340, borderWidth: 1,borderColor: '#6C757D',transform: [{ translateX: -8 }], }}
          selectedValue={'12'}
        >
          <Picker.Item label="Tarjeta de identidad" value="12" />
          <Picker.Item label="Cédula de ciudadania" value="13" />
          <Picker.Item label="Cédula de extrangeria" value="14" />
          <Picker.Item label="Pasaporte" value="10" />
        </Picker>
        <View></View>
      </View>
    </View>
    <View style={{ flexDirection: 'row' }}>
            <View style={{ flex: 1 }}></View>
            <View style={{ flex: 3 }}>
            <Text style={{ color: '#007BFF',marginBottom: 8,marginTop: 8,fontSize:18 }}>Documento</Text>
            <TextInput style={{transform: [{ translateX: 36 }, { scale: 1.32 }],textAlignVertical: 'top', 
        multiline: true,width: 260,backgroundColor: '#CED4DA',borderWidth: 0.1,borderColor: '#6C757D',fontSize: 12,padding:'4px',borderRadius:4,marginTop: 0,
          }}
          placeholder="Ingrese su numero de documento"
        />
            </View>
            </View>
            <View style={{ flexDirection: 'row' }}>
            <View style={{ flex: 1 }}></View>
            <View style={{ flex: 3 }}>
            <Text style={{ color: '#007BFF',marginBottom: 8,marginTop: 8,fontSize:18 }}>Nombre</Text>
            <TextInput style={{transform: [{ translateX: 36 }, { scale: 1.32 }],width: 260,backgroundColor: '#CED4DA',borderWidth: 0.1,borderColor: '#6C757D',fontSize: 12,padding:'4px',borderRadius:4,marginTop: 0,
          }}
          placeholder="Ingrese su nombre"
        />
            </View>
            </View>
            <View style={{ flexDirection: 'row' }}>
            <View style={{ flex: 1 }}></View>
            <View style={{ flex: 3 }}>
            <Text style={{ color: '#007BFF' ,marginBottom: 8,marginTop: 8,fontSize:18}}>Apellido</Text>
            <TextInput style={{transform: [{ translateX: 36 }, { scale: 1.32 }],width: 260,backgroundColor: '#CED4DA',padding:'4px',borderWidth: 0.1,borderColor: '#6C757D',fontSize: 12,borderRadius:4,marginTop: 0,
          }}
          placeholder="Ingrese su apellido "
        />
            </View>
            </View>
            <View style={{ flexDirection: 'row' }}>
            <View style={{ flex: 1 }}></View>
            <View style={{ flex: 3 }}>
            <Text style={{ color: '#007BFF' ,marginBottom: 8,marginTop: 8,fontSize:18}}>Email</Text>
            <TextInput style={{transform: [{ translateX: 36 }, { scale: 1.32 }],width: 260,padding:'4px',backgroundColor: '#CED4DA',borderWidth: 0.1,borderColor: '#6C757D',fontSize: 12,borderRadius:4,marginTop: 0,
          }}
          placeholder="Ingrese su email"
        />
            </View>
            </View>
            <View style={{ flexDirection: 'row' }}>
            <View style={{ flex: 1 }}></View>
            <View style={{ flex: 3 }}>
            <Text style={{ color: '#007BFF' ,marginBottom:8,marginTop: 8,fontSize:18}}>Telefono</Text>
            <TextInput style={{transform: [{ translateX: 36 }, { scale: 1.32 }],width: 260,backgroundColor: '#CED4DA',borderWidth: 0.1,borderColor: '#6C757D',fontSize: 12,padding:'4px',borderRadius:4,marginTop: 0,
          }}
          placeholder="Ingrese su numero de telefono"
        />
        <View style={{ flexDirection: 'row' }}>
            <View style={{ flex: 1 }}></View>
            <View style={{ flex: 3 }}>
            <Text style={{ color: '#007BFF' ,fontSize:19}}>Tipo de empleado</Text>
            <Picker style={{backgroundColor: '#CED4DA',borderRadius:4,padding:'4px',fontSize:16, height: 35, width: 340, borderWidth: 1,borderColor: '#6C757D',transform: [{ translateX: -8 }], }}
          selectedValue={''}
        >
          <Picker.Item label="Bodega" value="12" />
          <Picker.Item label="Caja" value="13" />
        </Picker>
        <View></View>
      </View>
    </View>
    <View style={{ flexDirection: 'row' }}>
            <View style={{ flex: 1 }}></View>
            <View style={{ flex: 3 }}>
            <Text style={{ color: '#007BFF',marginBottom: 8,marginTop: 8,fontSize:18 }}>Usuario</Text>
            <TextInput style={{transform: [{ translateX: 36 }, { scale: 1.32 }],textAlignVertical: 'top', 
        multiline: true,width: 260,backgroundColor: '#CED4DA',borderWidth: 0.1,borderColor: '#6C757D',fontSize: 12,padding:'4px',borderRadius:4,marginTop: 0,
          }}
          placeholder="Ingrese su usuario"
        />
            </View>
            </View>
            <View style={{ flexDirection: 'row' }}>
            <View style={{ flex: 1 }}></View>
            <View style={{ flex: 3 }}>
            <Text style={{ color: '#007BFF',marginBottom: 8,marginTop: 8,fontSize:18 }}>Contraseña</Text>
            <TextInput style={{transform: [{ translateX: 36 }, { scale: 1.32 }],width: 260,backgroundColor: '#CED4DA',borderWidth: 0.1,borderColor: '#6C757D',fontSize: 12,padding:'4px',borderRadius:4,marginTop: 0,
          }} secureTextEntry={true}
          placeholder="Ingrese contraseña valida"
        />
        </View>
        </View>

            </View>
            </View>
            <View style={{ flexDirection: 'row', justifyContent: 'center', marginBottom: 30, marginTop:30}}>
      <View style={{ flex: 1 }}></View>
      <View style={{ flex: 3, paddingBottom: 0, marginBottom: 73, justifyContent: 'center', alignItems: 'center', marginLeft: -27 }}>
        <TouchableOpacity style={{ marginRight: 288, paddingRight: 15, paddingLeft: 13, marginLeft: 33, backgroundColor: '#007BFF', paddingVertical: 10, paddingHorizontal: 15, borderRadius: 7 }} onPress={() => navigation.navigate('Index')}>
          <Text style={{ color: '#fff' }}>Atrás</Text>
        </TouchableOpacity>
        <TouchableOpacity style={{ justifyContent: 'center', alignItems: 'center', textAlign: 'center', height: 40, width: 200, paddingBottom: 6, marginBottom: 24, marginTop: -40, paddingLeft: 25, marginLeft: 259, backgroundColor: '#007BFF', paddingVertical: 10, paddingHorizontal: 15, borderRadius: 7, }} onPress={() => navigation.navigate('Productos')}>
          <Text style={{ color: '#fff' }}>Continuar</Text>
        </TouchableOpacity>
      </View>
      <View style={{ flex: 1 }}></View>
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

export default RegistroEmpleados;
