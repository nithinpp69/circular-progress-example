import React from 'react';
import {SafeAreaView, ScrollView, StyleSheet} from 'react-native';
import {CircularProgressBase} from 'react-native-circular-progress-indicator';

const props = {
  activeStrokeWidth: 25,
  inActiveStrokeWidth: 25,
  inActiveStrokeOpacity: 0.2,
  delay: 1000,
};

const WithChild = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <CircularProgressBase
          {...props}
          value={80}
          radius={125}
          activeStrokeColor={'#e84118'}
          inActiveStrokeColor={'#e84118'}>
          <CircularProgressBase
            {...props}
            value={87}
            radius={100}
            activeStrokeColor={'#badc58'}
            inActiveStrokeColor={'#badc58'}>
            <CircularProgressBase
              {...props}
              value={62}
              radius={75}
              activeStrokeColor={'#18dcff'}
              inActiveStrokeColor={'#18dcff'}
            />
          </CircularProgressBase>
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
});

export default WithChild;
