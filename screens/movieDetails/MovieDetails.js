import secret_key from '../../secret';
import React, {useEffect, useState} from 'react';
import {
  FlatList,
  StyleSheet,
  ScrollView,
  Image,
  Text,
  Button,
  View,
  Icon,
} from 'react-native';
import {symbolicateLogNow} from 'react-native/Libraries/LogBox/Data/LogBoxData';

const MovieDetails = ({route}) => {
  const [movie, setMovie] = useState({});
  const {id} = route.params;
  useEffect(() => {
    fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=${secret_key}`)
      .then(response => response.json())
      .then(data => {
        setMovie(data);
      });
  }, []);
  return (
    <View style={styles.container}>
      <ScrollView style={{margin: 5}}>
        <Image
          source={{
            uri: `https://image.tmdb.org/t/p/w500/${movie.backdrop_path}`,
          }}
          style={styles.backdrop}
        />
        <Text style={styles.title}>{movie.original_title}</Text>
        <View style={{flexDirection: 'row'}}>
          <Text style={styles.textGreen}>96% de coincidencia</Text>
          <Text style={styles.textWhite}>
            {new Date(movie.release_date).getFullYear()}
          </Text>
        </View>
        <Button color="grey" title="Reproducir" margin={5}></Button>
        <Button color="#333333" title="Descarga" margin={5}></Button>
        <View style={{flexDirection: 'row'}}>
          <Text></Text>
        </View>
        <Text style={styles.textWhite}>{movie.overview}</Text>
        <View>
          <Text>Similares</Text>
          <FlatList numColumns={3} data={[]} renderItem={() => {}}></FlatList>
        </View>
      </ScrollView>
    </View>
  );
};

export default MovieDetails;

const styles = StyleSheet.create({
  backdrop: {
    width: 400,
    height: 200,
  },
  container: {
    backgroundColor: 'black',
    flex: 1,
  },
  title: {
    color: 'white',
    fontSize: 25,
    fontWeight: 'bold',
    margin: 5,
  },
  textWhite: {
    color: 'white',
    margin: 5,
  },
  textGreen: {
    color: 'lime',
    fontWeight: 'bold',
    margin: 5,
  },
});
