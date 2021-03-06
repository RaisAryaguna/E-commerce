import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Belanja from '../Screen/Belanja';
import Splash from '../Screen/Splass';
import Profil from '../Screen/Profil';
import SignIn from '../Screen/Sign in';
import SignUp from '../Screen/Sign Up';
import Keranjang from '../Screen/Keranjang';
import Message from '../Screen/Message';
import Splas from '../Screen/SplasScreen';
import AddProduct from '../Screen/TambahProduk';
import Kategori from '../Screen/Kategori';
import Detail from '../Screen/DetailProduk';
import EditProduk from '../Screen/EditProduk';
import EditProfil from '../Screen/EditProfil';
import CheckOut from '../Screen/CheckOut';
import Convirmation from '../Screen/Convirmation';
import History from '../Screen/History';
import Kontak from '../Screen/Kontak';
import Pencarian from '../Screen/Pencarian';
import cariKontak from '../Screen/cariKontak';

const Tab = createMaterialBottomTabNavigator();
const Stack = createStackNavigator();

function Home() {
  return (
    <Tab.Navigator
      initialRouteName="Belanja"
      shifting={true}
      screenOptions={({route}) => ({
        tabBarIcon: ({focused, color}) => {
          let iconName;

          if (route.name === 'Belanja') {
            iconName = focused ? 'home' : 'home';
          } else if (route.name === 'Keranjang') {
            iconName = focused ? 'shopping-bag' : 'shopping-bag';
          } else if (route.name === 'History') {
            iconName = focused ? 'history' : 'history';
          } else if (route.name === 'Profil') {
            iconName = focused ? 'account-circle' : 'account-circle';
          }
          return <Icon name={iconName} size={25} color={color} />;
        },
      })}>
      <Tab.Screen
        tabBarIcon={{
          activeTintColor: '#fcf8f8',
          inactiveTintColor: 'gray',
          showLabel: false,
        }}
        name="Belanja"
        component={Belanja}
      />
      <Tab.Screen name="Keranjang" component={Keranjang} />
      <Tab.Screen name="History" component={History} />
      <Tab.Screen name="Profil" component={Profil} />
    </Tab.Navigator>
  );
}

class Navigation extends React.Component {
  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Splas"
          screenOptions={{
            headerShown: false,
          }}>
          <Stack.Screen name="Splas" component={Splas} />
          <Stack.Screen name="Splash" component={Splash} />
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Login" component={SignIn} />
          <Stack.Screen name="Register" component={SignUp} />
          <Stack.Screen name="Keranjang" component={Keranjang} />
          <Stack.Screen name="Message" component={Message} />
          <Stack.Screen name="AddProduct" component={AddProduct} />
          <Stack.Screen name="Kategori" component={Kategori} />
          <Stack.Screen name="Detail" component={Detail} />
          <Stack.Screen name="Edit" component={EditProduk} />
          <Stack.Screen name="EditProfil" component={EditProfil} />
          <Stack.Screen name="CheckOut" component={CheckOut} />
          <Stack.Screen name="Konfir" component={Convirmation} />
          <Stack.Screen name="History" component={History} />
          <Stack.Screen name="Kontak" component={Kontak} />
          <Stack.Screen name="Pencarian" component={Pencarian} />
          <Stack.Screen name="cariKontak" component={cariKontak} />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}
export default Navigation;
