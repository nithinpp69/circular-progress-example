import React from 'react';
import {SafeAreaView, ScrollView, StyleSheet} from 'react-native';
import CircularProgress from 'react-native-circular-progress-indicator';

const Custom = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <CircularProgress
          value={60}
          radius={120}
          progressValueColor={'#ecf0f1'}
          activeStrokeColor={'#f39c12'}
          inActiveStrokeColor={'#9b59b6'}
          inActiveStrokeOpacity={0.5}
          inActiveStrokeWidth={20}
          activeStrokeWidth={40}
          delay={1000}
        />
        <CircularProgress
          value={60}
          radius={120}
          progressValueColor={'#ecf0f1'}
          activeStrokeColor={'#f39c12'}
          inActiveStrokeColor={'#9b59b6'}
          inActiveStrokeOpacity={0.5}
          inActiveStrokeWidth={40}
          activeStrokeWidth={20}
          delay={1000}
        />
        <CircularProgress
          value={60}
          radius={120}
          inActiveStrokeOpacity={0.5}
          activeStrokeWidth={20}
          inActiveStrokeWidth={20}
          progressValueStyle={{fontWeight: '100', color: 'yellow'}}
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

export default Custom;
