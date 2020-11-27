import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {Component} from 'react';
import {
  Text,
  View,
  ActivityIndicator,
  Image,
  StyleSheet,
  TouchableOpacity,
  Button,
} from 'react-native';

export class History extends Component {
  constructor() {
    super();
    this.state = {
      token: '',
      data: [],
      loading: false,
      statusBarang: '',
      status: '',
    };
    AsyncStorage.getItem('token').then((token) => {
      if (token != null) {
        this.setState({token: token});
        console.log(token);
        this.history();
      } else {
        console.log('token tidak ada');
      }
    });
  }
  history = () => {
    const url = 'https://api-shop1.herokuapp.com/api/history';
    this.setState({loading: true});
    fetch(url, {
      method: 'GET',
      headers: {
        Accept: 'aplication/json',
        'Content-Type': 'aplication/json',
        Authorization: `Bearer ${this.state.token}`,
      },
    })
      .then((respon) => respon.json())
      .then((resJson) => {
        console.log(resJson);
        this.setState({
          data: resJson.pesanan_detail,
          loading: false,
          status: resJson.pesanan_detail[0].status,
        });
        console.log(this.state.status);
        console.log(this.state.data[0].id);
      })
      .catch((error) => {
        console.log('error is' + error);
        this.setState({loading: false});
      });
  };
  konfir = () => {
    const url = `https://api-shop1.herokuapp.com/api/konfirmasiPembeli/${this.data[0].id}`;
    this.setState({loading: true});
    fetch(url, {
      method: 'GET',
      headers: {
        Accept: 'aplication/json',
        'Content-Type': 'aplication/json',
        Authorization: `Bearer ${this.state.token}`,
      },
    })
      .then((respon) => respon.json())
      .then((resJson) => {
        console.log(resJson);
        this.setState({
          data: resJson.pesanan_detail,
          loading: false,
          status: resJson.pesanan_detail[0].status,
        });
        console.log(this.state.status);
      })
      .catch((error) => {
        console.log('error is' + error);
        this.setState({loading: false});
      });
  };

  render() {
    return (
      <View>
        {this.state.data == null ? (
          <View>
            <ActivityIndicator color="red" size={30} />
          </View>
        ) : (
          <View style={styles.boxTampildata}>
            {this.state.data.map((val, key) => {
              return (
                <View key={key}>
                  <TouchableOpacity
                    style={styles.boksProduk}
                    onPress={() =>
                      this.props.navigation.navigate('Detail', {item: val})
                    }>
                    <View style={styles.viewImage}>
                      <Image source={{uri: val.gambar}} style={styles.image} />
                    </View>
                    <View style={styles.viewTeks}>
                      <Text>{val.nama}</Text>
                      <Text>{'Rp ' + val.harga}</Text>
                    </View>
                  </TouchableOpacity>
                  {this.state.status == 1 ? (
                    <View>
                      <Text> Pesanan Anda Sedang DIkemas </Text>
                    </View>
                  ) : (
                    <View>
                      <Text>Sedang Dalam Pengiriman</Text>
                      <Button title="Diterima" onPress={() => this.konfir()} />
                    </View>
                  )}
                </View>
              );
            })}
          </View>
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  viewUtama: {
    flex: 1,
  },
  boxTampildata: {
    width: '100%',
    height: '100%',
    flexWrap: 'wrap',
  },
  boksProduk: {
    width: '100%',
    height: 270,
    backgroundColor: 'white',
    borderRadius: 10,
    paddingTop: 5,
    paddingTop: 5,
  },
  image: {
    width: 150,
    height: 150,
  },
  viewImage: {
    alignItems: 'center',
  },
  viewTeks: {
    paddingLeft: 7,
    // justifyContent: 'space-around',
  },
});
export default History;
