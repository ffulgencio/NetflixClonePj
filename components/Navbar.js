import React from 'react';
import {View, Image, StyleSheet, TouchableOpacity} from 'react-native';

const NavBar = ({name, avatar_url, navigation}) => {
  return (
    <View style={{flexDirection: 'row', margin: 5}}>
      <Image
        source={{
          uri:
            'https://elparche.co/wp-content/uploads/2018/05/netflix-n-logo-png.png',
        }}
        style={{width: 60, height: 60, marginRight: '60%'}}
      />

      <TouchableOpacity onPress={() => navigation.navigate('Finder')}>
        <Image
          source={{
            uri: 'https://www.psiquion.com/img/lupa.png',
          }}
          style={styles.miniavatar}
        />
      </TouchableOpacity>
      <Image source={{uri: avatar_url}} style={styles.miniavatar} />
    </View>
  );
};

export default NavBar;

const styles = StyleSheet.create({
  flixBackground: {
    backgroundColor: 'black',
    flex: 1,
  },
  textWhite: {
    color: 'white',
  },
  miniavatar: {
    width: 50,
    height: 50,
    borderRadius: 5,
  },
  miniavatar2: {
    width: 40,
    height: 40,
    borderRadius: 5,
    marginRight: 2,
  },
});
