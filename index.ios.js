var formatTime = require('minutes-seconds-milliseconds');
import React from 'react';

// USE ES15 style variable de-structuring to require these components from
// React
import {
  Text,
  View,
  TouchableHighlight,
  AppRegistry,
  StyleSheet
} from 'react-native'


var StopWatch = React.createClass({
  getInitialState: function() { // Ran by React exactly one time, when the component is first created
    // Returns an object, and always avoid putting logic into getInitialState()
    return {
      timeElapsed: null
    }
  },
  render: function(){
    return <View style={styles.container}>
      <View style={[styles.header]}>
        <View style={[styles.timerWrapper]}>
          <Text style={styles.timer}>
            {formatTime(this.state.timeElapsed)}
          </Text>
        </View>
        <View style={[styles.buttonWrapper]}>
          {this.startStopButton()}
          {this.lapButton()}
        </View>
      </View>

      <View style={[styles.footer]}>
        <Text>
          I am  a list of laps
        </Text>
      </View>
    </View>
  },
  startStopButton: function() {
    return <TouchableHighlight
      underlayColor="gray"
      onPress={this.handleStartPress.bind(this)}
      style={[styles.button, styles.startButton]}>
      <Text>
      Start
      </Text>
    </TouchableHighlight>
  },
  lapButton: function() {
    return <View style={styles.button}>
        <Text>
        Lap
        </Text>
      </View>
  },
  handleStartPress: function(){
    //console.log('start was pressed');
    var startTime = new Date();

    // Updating state causes the screen to re-render
    setInterval(() => { //anonymous fat arrow function call
      this.setState({  // Always call this.setState to update state. Give object
        timeElapsed: new Date() - startTime
      });
    }, 30);
  }
});

var styles = StyleSheet.create({
  container: {
    flex: 1, // Fill the entire screen
    alignItems: 'stretch' // Parent child take as much space as possible (far left to far right)
  },
  header: { // Yellow
    flex: 1
  },
  footer: { // Blue
    flex: 1
  },
  timerWrapper: {
    flex: 5,
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonWrapper: {
    flex: 3,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  timer: {
    fontSize: 60
  },
  button: {
    borderWidth: 2,
    height: 100,
    width: 100,
    borderRadius: 50,
    justifyContent: 'center',
    alignItems: 'center'
  },
  startButton: {
    borderColor: '#00CC00'
  }
});

//Aero ES 2015 syntax                      () => StopWatch is same as function
//                                               with a return
AppRegistry.registerComponent('stopwatch', () => StopWatch);
