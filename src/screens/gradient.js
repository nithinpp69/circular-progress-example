import React from 'react';
import {SafeAreaView, ScrollView, StyleSheet} from 'react-native';
import CircularProgress from 'react-native-circular-progress-indicator';

const Gradient = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <CircularProgress
          value={100}
          activeStrokeColor={'#2465FD'}
          activeStrokeSecondaryColor={'#C25AFF'}
          delay={1000}
        />
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
});

export default Gradient;
