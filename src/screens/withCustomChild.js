import React from 'react';
import {SafeAreaView, ScrollView, StyleSheet, View, Text} from 'react-native';
import {CircularProgressBase} from 'react-native-circular-progress-indicator';

const props = {
  activeStrokeWidth: 25,
  inActiveStrokeWidth: 25,
  inActiveStrokeOpacity: 0.2,
  delay: 1000,
};

const WithCustomChild = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <CircularProgressBase
          {...props}
          value={80}
          radius={125}
          activeStrokeColor={'#badc58'}
          inActiveStrokeColor={'#badc58'}>
          <View style={styles.childContainer}>
            <Text style={styles.childText}>CUSTOM</Text>
          </View>
        </CircularProgressBase>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#181818',
  },
  scrollContainer: {
    minWidth: '100%',
    flexGrow: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  childContainer: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: '#e84118',
    alignItems: 'center',
    justifyContent: 'center',
    opacity: 0.6,
  },
  childText: {
    color: 'white',
    fontSize: 14,
    fontWeight: 'bold',
  },
});

export default WithCustomChild;
