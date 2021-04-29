import React from 'react';
import {
  View,
  ScrollView,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
} from 'react-native';

const HorizontalList = ({title, movies, navigation}) => {
  return (
    <View>
      <Text style={{color: 'white', fontSize: 20}}>{title}</Text>
      <ScrollView horizontal>
        {movies.map(movie => (
          <TouchableOpacity
            onPress={() => navigation.navigate('Details', {id: movie.id})}>
            <Image
              source={{
                uri: `https://image.tmdb.org/t/p/w200/${movie.poster_path}`,
              }}
              style={styles.movie}
            />
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

export default HorizontalList;

const styles = StyleSheet.create({
  movie: {
    width: 100,
    height: 150,
    margin: 5,
    borderRadius: 5,
  },
});
