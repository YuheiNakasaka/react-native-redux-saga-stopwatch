import React from 'react';
import PropTypes from 'prop-types';
import { TouchableHighlight, View, Text, StyleSheet } from 'react-native';

import { connect } from 'react-redux';
import { startTimerBtn, stopTimerBtn, resetTimerBtn } from '../../actions/home';

const styles = StyleSheet.create({
  container: {
    marginTop: 100,
  },
  text: {
    textAlign: 'center',
  },
  timer: {
    margin: 10,
    textAlign: 'center',
  },
  button: {
    height: 60,
    margin: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
  },
  startbutonColor: {
    backgroundColor: '#0b7eff',
  },
  stopbutonColor: {
    backgroundColor: '#999',
  },
});

const App = (props) => {
  const {
    container,
    text,
    buttonText,
    button,
    startbutonColor,
    stopbutonColor,
    timer,
  } = styles;

  function pad(time) {
    const strTime = `${time}`;
    if (strTime.length < 2) {
      return `0${strTime}`;
    }
    return strTime;
  }

  return (
    <View style={container}>
      <Text style={text}>Redux Saga Timer</Text>
      <Text style={timer}>
        { pad(parseInt(props.homeData.totalTime / 600, 10)) }
        :
        { pad(parseInt(props.homeData.totalTime / 10, 10) % 60) }
        :
        { pad(props.homeData.totalTime % 10) }
      </Text>
      <TouchableHighlight style={[button, startbutonColor]} onPress={() => props.startTimerBtn()}>
        <Text style={buttonText}>start</Text>
      </TouchableHighlight>
      <TouchableHighlight style={[button, stopbutonColor]} onPress={() => props.stopTimerBtn()}>
        <Text style={buttonText}>stop</Text>
      </TouchableHighlight>
      <TouchableHighlight style={[button, stopbutonColor]} onPress={() => props.resetTimerBtn()}>
        <Text style={buttonText}>reset</Text>
      </TouchableHighlight>
    </View>
  );
};

App.propTypes = {
  startTimerBtn: PropTypes.func.isRequired,
  stopTimerBtn: PropTypes.func.isRequired,
  resetTimerBtn: PropTypes.func.isRequired,
  homeData: PropTypes.shape({
    timerRunning: PropTypes.bool.isRequired,
    totalTime: PropTypes.number.isRequired,
  }).isRequired,
};

function mapStateToProps(state) {
  return {
    homeData: state.homeData,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    startTimerBtn: () => dispatch(startTimerBtn()),
    stopTimerBtn: () => dispatch(stopTimerBtn()),
    resetTimerBtn: () => dispatch(resetTimerBtn()),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(App);
