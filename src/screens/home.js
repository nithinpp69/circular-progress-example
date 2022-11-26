import React from 'react';
import {StyleSheet, View, Text, TouchableOpacity, FlatList} from 'react-native';
import ROUTES from '../data/routes';

function HomeScreen({navigation}) {
  return (
    <View style={styles.container}>
      <FlatList
        data={ROUTES}
        renderItem={({item}) => (
          <Button
            title={item.title}
            onPress={() => {
              navigation.navigate(item.route);
            }}
          />
        )}
        ListHeaderComponent={() => <View style={styles.filler} />}
        ListFooterComponent={() => <View style={styles.filler} />}
        keyExtractor={item => item.route}
      />
    </View>
  );
}

const Button = ({title, onPress}) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.buttonText}>{title}</Text>
      <Text style={styles.buttonText}>🔥</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#17191A',
  },
  filler: {
    height: 15,
  },
  button: {
    width: '90%',
    height: 60,
    borderRadius: 5,
    backgroundColor: '#242627',
    alignSelf: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: 8,
    paddingHorizontal: 15,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default HomeScreen;
