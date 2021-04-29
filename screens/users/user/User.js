import React, {useEffect} from 'react';
import {View, Text, Image, TouchableOpacity, StyleSheet} from 'react-native';

const User = ({name, avatar_url, navigation}) => {
  useEffect(() => {
    console.log(name);
  }, []);
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate('Movies', {name, avatar_url})}>
      <View style={styles.login}>
        <Image source={{uri: `${avatar_url}`}} style={styles.avatar} />
        <Text style={styles.textwhite}>{name}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default User;

const styles = StyleSheet.create({
  avatar: {
    borderRadius: 10,
    width: 120,
    height: 120,
  },

  textwhite: {color: 'white', fontSize: 16, margin: 5},
  login: {
    margin: 15,
    alignItems: 'center',
  },
});
