
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Index from './components/Index';
import Derechos from './components/Derechos'; 
import Nosotros from './components/Nosotros';
import Productos from './components/Productos';
import Administracion from './components/Administracion';
import Bodega from './components/Bodega';
import Caja from './components/Caja';
import InicioSesion from './components/InicioSesion';
import Registrarse from './components/Registrarse';
import IndexAdmin from './components/IndexAdmin';
import IndexBodega from './components/IndexBodega';
import IndexCaja from './components/IndexCaja';
import RegistroEmpleados from './components/RegistroEmpleados';
import ShowUsers from './components/ShowUsers';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Index" component={Index} 
        options={{ headerShown: false, title: "Index" }}/>
        <Stack.Screen name="Derechos" component={Derechos}
        options={{ headerShown: false, title: "Derechos" }} />
        <Stack.Screen name="Nosotros" component={Nosotros}
        options={{ headerShown: false, title: "Nosotros" }} />
        <Stack.Screen name="Productos" component={Productos}
        options={{ headerShown: false, title: "Productos" }} />
        <Stack.Screen name="Administracion" component={Administracion} 
        options={{ headerShown: false, title: "Administracion" }}/>
        <Stack.Screen name="Bodega" component={Bodega}
        options={{ headerShown: false, title: "Bodega" }} />
       <Stack.Screen name="Caja" component={Caja}
        options={{ headerShown: false, title: "Caja" }} />
        <Stack.Screen name="InicioSesion" component={InicioSesion}
        options={{ headerShown: false, title: "Inicio Sesion" }} />
        <Stack.Screen name="Registrarse" component={Registrarse}
        options={{ headerShown: false, title: "Registrarse" }} />
        <Stack.Screen name="IndexAdmin" component={IndexAdmin}
        options={{headerShown: false, title: "Index Administracion"}}/>
        <Stack.Screen name="IndexBodega" component={IndexBodega}
        options={{headerShown: false, title: "Index Bodega"}}/>
        <Stack.Screen name="IndexCaja" component={IndexCaja}
        options={{headerShown: false, title: "Index Caja"}}/>
        <Stack.Screen name="RegistroEmpleados" component={RegistroEmpleados}
        options={{headerShown: false, title: "Registro de empleados"}}/>
         <Stack.Screen name="Showusers" component={ShowUsers}
        options={{headerShown: false, title: "ShowUsers"}}/>
      </Stack.Navigator>
      

      
    </NavigationContainer>
  );
}

export default App;