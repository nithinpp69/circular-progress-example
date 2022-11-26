import React from 'react';
import {SafeAreaView, ScrollView, StyleSheet} from 'react-native';
import CircularProgress from 'react-native-circular-progress-indicator';

const DashedCircle = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <CircularProgress
          value={100}
          radius={120}
          inActiveStrokeOpacity={0.5}
          activeStrokeWidth={20}
          inActiveStrokeWidth={20}
          progressValueStyle={{fontWeight: '100', color: 'white'}}
          activeStrokeSecondaryColor="yellow"
          inActiveStrokeColor="rgba(255,255,255,0.4)"
          duration={5000}
          dashedStrokeConfig={{
            count: 50,
            width: 4,
          }}
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

export default DashedCircle;
