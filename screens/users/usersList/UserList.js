import React, {useEffect} from 'react';
import {View, Text, StyleSheet, FlatList, ScrollView} from 'react-native';
import User from '../user/User';

const UserList = ({users, navigation}) => {
  useEffect(() => {
    console.info(users);
  }, []);
  return (
    <View style={styles.centered}>
      <Text style={styles.textwhite}>¿Quién eres? Elige tu perfil</Text>

      <FlatList
        style={{margin: 10}}
        // numColumns={2}
        data={users}
        numColumns={2}
        // keyExtractor={(user, index) => user.name}
        renderItem={({item},i) => <User {...item} navigation={navigation} key={i}/>}
      />
    </View>
  );
};

export default UserList;

const styles = StyleSheet.create({
  textwhite: {color: 'white', fontSize: 24},
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  centered: {
    alignItems: 'center',
  },
});
