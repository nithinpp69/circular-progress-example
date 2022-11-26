import React from 'react';
import {SafeAreaView, ScrollView, StyleSheet} from 'react-native';
import CircularProgress from 'react-native-circular-progress-indicator';

const WithSubtitle = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <CircularProgress
          value={60}
          inActiveStrokeColor={'#2ecc71'}
          inActiveStrokeOpacity={0.2}
          progressValueColor={'#fff'}
          valueSuffix={'%'}
          delay={1000}
          radius={120}
          title={'KM/H'}
          titleColor={'white'}
          titleStyle={{fontWeight: 'bold'}}
          subtitle={'subtitle'}
          subtitleColor={'grey'}
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

export default WithSubtitle;
