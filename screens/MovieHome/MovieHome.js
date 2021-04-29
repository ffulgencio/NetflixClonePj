import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  Image,
  FlatList,
  StyleSheet,
  ScrollView,
} from 'react-native';

import secret_key from '../../secret';

import Navbar from '../../components/Navbar';
import PrincipalMovie from '../../components/PrincipalMovie';
import HorizontalList from '../../components/HorizontalList';

const MovieHome = ({route, navigation}) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/discover/movie?api_key=${secret_key}&sort_by=vote_count.desc`,
    )
      .then(response => response.json())
      .then(data => {
        setMovies(data.results.slice());
        //   this.setState({ movies: data.results.slice(), page: data.page, total_pages: data.total_pages });
      });
  }, []);

  return (
    <ScrollView>
      <View style={styles.flixBackground}>
        {/* <Text style={styles.textWhite}>MovieHome</Text> */}
        {/* <Text style={styles.textWhite}>{name}</Text> */}
        <Navbar {...route.params} navigation={navigation} />
        <PrincipalMovie />
        <HorizontalList
          movies={movies}
          title="Populares"
          navigation={navigation}
        />
        <HorizontalList
          movies={movies.slice(5)}
          title="Lista de deseados"
          navigation={navigation}
        />
        <HorizontalList
          movies={[...movies].reverse()}
          title="Recomendadas para ti"
          navigation={navigation}
        />
      </View>
    </ScrollView>
  );
};

export default MovieHome;

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
});
