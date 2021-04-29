import React from 'react'
import {View, Image,StyleSheet} from 'react-native';
import UserList from '../users/usersList/UserList';

const Home = ({users, navigation}) => {
  return (
    <View style={styles.flixBackground}>
      <Image
        source={{
          uri: `https://1000marcas.net/wp-content/uploads/2020/01/Netflix-logo-600x338.png`,
        }}
        style={styles.logo}
      />

      <UserList users={users} navigation={navigation} />
    </View>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
  textwhite: {color: 'white'},
  flixBackground: {
    backgroundColor: 'black',
    color: 'white',
    flex: 1,
    alignItems: 'center',
  },
  logo: {
    marginTop: 10,
    marginBottom: 20,
    width: 200,
    height: 50,
  },
});


export default Home;