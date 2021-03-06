import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  viewUtama: {
    flex: 1,
    height: '100%',
  },
  boxTampildata: {
    // backgroundColor: 'red',
    width: '100%',
    height: '100%',
    // flexDirection: 'row',
    flexWrap: 'wrap',
  },
  boksProduk: {
    width: 350,
    height: 230,
    backgroundColor: 'white',
    marginLeft: 20,
    marginVertical: 5,
    elevation: 5,
    borderRadius: 10,
    flexDirection: 'row',
  },
  image: {
    width: 80,
    height: 80,
  },
  viewImage: {
    // justifyContent: 'center',
    alignItems: 'center',
  },
  viewTeks: {
    paddingLeft: 7,
    // justifyContent: 'space-around',
  },
  loginRegister: {
    width: '90%',
    height: 190,
    backgroundColor: 'white',
    borderRadius: 10,
    marginTop: 90,
    marginLeft: 18,
    elevation: 10,
  },
  BoxImage: {
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
    width: 100,
    height: 100,
    borderRadius: 50,
    alignSelf: 'center',
    top: 50,
    borderWidth: 7,
    borderColor: '#3462f9',
    marginTop: -95,
    borderWidth: 7,
    margin: 5,
  },
  posisenLogin: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 80,
  },
  boxLoginRegister: {
    width: '40%',
    height: 50,
    margin: 5,
    borderRadius: 20,
  },
  header: {
    width: '100%',
    backgroundColor: '#1589FF',
    elevation: 5,
    alignItems: 'center',
    justifyContent: 'center',

    paddingVertical: 5,
  },
  Tittel: {
    fontWeight: 'bold',
    fontSize: 30,
    color: 'white',
  },
});
