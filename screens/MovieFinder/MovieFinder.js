import {forModalPresentationIOS} from '@react-navigation/stack/lib/typescript/src/TransitionConfigs/CardStyleInterpolators';
import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TextInput,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import secret_key from '../../secret';

const MovieFinder = ({navigation}) => {
  const [movies, setMovies] = useState([]);
  const [text, setText] = useState('');

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/discover/movie?api_key=${secret_key}&sort_by=vote_count.desc`,
    )
      .then(response => response.json())
      .then(data => {
        setMovies(data.results ? data.results.slice() : []);
        //   this.setState({ movies: data.results.slice(), page: data.page, total_pages: data.total_pages });
      });
  }, []);

  useEffect(() => {
    clearTimeout(pausa);
    function searchMovies() {
      fetch(
        `https://api.themoviedb.org/3/search/movie?api_key=${secret_key}&query=${text}`,
      )
        .then(response => response.json())
        .then(data => {
          setMovies(data.results.slice());
          //console.warn('search', data);
        })
        .catch(err => {
          console.error(err);
        });
    }
    const pausa = setTimeout(searchMovies, 1000);
  }, [text]);

  return (
    <View style={{alignItems: 'center', backgroundColor: 'black', flex: 1}}>
      <TextInput
        value={text}
        onChangeText={setText}
        placeholder={'Search'}
        style={{
          backgroundColor: '#333333',
          color: 'white',
          width: '100%',
        }}></TextInput>
      {movies ? (
        <FlatList
          style={{margin: 10}}
          data={movies}
          numColumns={3}
          // keyExtractor={(user, index) => user.name}
          renderItem={({item}) => (
            <TouchableOpacity
              onPress={() => navigation.navigate('Details', {id: item.id})}>
              <Image
                source={{
                  uri: `https://image.tmdb.org/t/p/w200/${item.poster_path}`,
                }}
                style={styles.movie}
              />
            </TouchableOpacity>
          )}
        />
      ) : (
        <Text style={{color: 'white'}}>No hay resultados</Text>
      )}
    </View>
  );
};

export default MovieFinder;

const styles = StyleSheet.create({
  movie: {
    width: 120,
    height: 170,
    margin: 5,
    borderRadius: 5,
  },
});
