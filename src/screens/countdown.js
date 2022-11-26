import React from 'react';
import {SafeAreaView, ScrollView, StyleSheet, Text} from 'react-native';
import CircularProgress from 'react-native-circular-progress-indicator';

const CountDown = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <CircularProgress
          value={0}
          radius={120}
          maxValue={10}
          initialValue={10}
          progressValueColor={'#fff'}
          activeStrokeWidth={15}
          inActiveStrokeWidth={15}
          duration={10000}
          onAnimationComplete={() => alert('time out')}
          delay={1000}
          valueSuffix="S"
          valueSuffixStyle={styles.suffix}
        />
        <Text>Hello</Text>
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
  suffix: {
    fontSize: 45,
    color: 'yellowgreen',
  },
});

export default CountDown;
