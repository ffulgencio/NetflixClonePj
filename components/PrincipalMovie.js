import React from 'react';
import {View, Image, Button, StyleSheet} from 'react-native';

const PrincipalMovie = () => {
  return (
    <View style={{alignItems: 'center'}}>
      <Image
        source={{
          uri:
            'https://i.pinimg.com/originals/6c/77/5f/6c775f7a7b90a7f8620897c6bdd0e839.jpg',
        }}
        style={styles.poster}
      />
      <View style={{flexDirection: 'row', margin: 5}}>
        <Button title="Mi lista" color="black" style={{margin: 5}} />
        <Button title="Reproducir" color="gray" style={{margin: 5}} />
        <Button title="Info" color="black" style={{margin: 5}} />
      </View>
    </View>
  );
};

export default PrincipalMovie;

const styles = StyleSheet.create({
  poster: {
    width: 250,
    height: 350,
    borderRadius: 10,
  },
});
