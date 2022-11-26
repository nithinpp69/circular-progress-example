import React from 'react';
import {SafeAreaView, ScrollView, StyleSheet} from 'react-native';
import CircularProgress from 'react-native-circular-progress-indicator';

const SimpleProgress = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <CircularProgress value={58} delay={1000} />
        <CircularProgress
          value={60}
          radius={120}
          duration={2000}
          progressValueColor={'#ecf0f1'}
          maxValue={200}
          title={'KM/H'}
          titleColor={'white'}
          titleStyle={{fontWeight: 'bold'}}
          delay={1000}
        />
        <CircularProgress
          value={60}
          activeStrokeWidth={12}
          progressValueColor={'#ecf0f1'}
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

export default SimpleProgress;
