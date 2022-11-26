import React, {useRef} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  View,
  TouchableOpacity,
  Text,
} from 'react-native';
import CircularProgress from 'react-native-circular-progress-indicator';

const Button = ({onPress, label}) => (
  <TouchableOpacity style={styles.button} onPress={onPress}>
    <Text style={styles.buttonLabel}>{label}</Text>
  </TouchableOpacity>
);

const WithFunctions = () => {
  const progressRef = useRef(null);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <CircularProgress
          value={90}
          inActiveStrokeColor={'#2ecc71'}
          inActiveStrokeOpacity={0.2}
          progressValueColor={'#fff'}
          valueSuffix={'%'}
          onAnimationComplete={() => {
            alert('callback');
          }}
          delay={1000}
          duration={10000}
          ref={progressRef}
        />

        <View style={styles.buttonContainer}>
          <Button
            onPress={() => {
              progressRef.current.play();
            }}
            label={'Play'}
          />
          <Button
            onPress={() => {
              progressRef.current.pause();
            }}
            label={'Pause'}
          />
          <Button
            onPress={() => {
              progressRef.current.reAnimate();
            }}
            label={'RePlay'}
          />
        </View>
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
  buttonContainer: {
    width: '98%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 50,
  },
  button: {
    backgroundColor: '#010101',
    width: 115,
    alignItems: 'center',
    justifyContent: 'center',
    height: 50,
    borderRadius: 5,
    marginHorizontal: 5,
    borderColor: 'rgba(255,255,255,0.6)',
    shadowColor: 'grey',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  buttonLabel: {fontSize: 16, fontWeight: '700', color: 'white'},
});

export default WithFunctions;
