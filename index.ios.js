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
      timeElapsed: null,
      running: false,
      startTime: null,
      laps: []
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
        {this.laps()}
      </View>
    </View>
  },
  laps: function() {
    return this.state.laps.map(function(time, index){
      return <View style={styles.lap}>
        <Text style={styles.lapText}>
          Lap #{index + 1}
        </Text>
        <Text style={styles.lapText}>
          {formatTime(time)}
        </Text>
      </View>
    });
  },
  startStopButton: function() {
    var style = this.state.running ? styles.stopButton : styles.startButton;
    return <TouchableHighlight
      underlayColor="gray"
      onPress={this.handleStartPress.bind(this)}
      style={[styles.button, style]}>
      <Text>
      {this.state.running ? 'Stop' : 'Start'}
      </Text>
    </TouchableHighlight>
  },
  lapButton: function() {
    return <TouchableHighlight
      style={styles.button}
      underlayColor="gray"
      onPress={this.handleLapPress}>
        <Text>
        Lap
        </Text>
      </TouchableHighlight>
  },
  handleLapPress: function() {
    // get the time elapsed
    var lap = this.state.timeElapsed;

    // reset the timer to zero
    this.setState({
      startTime: new Date(),
      laps: this.state.laps.concat([lap]) // use concat instead of push because of state rules
    });
  },
  handleStartPress: function(){
    if (this.state.running) {
      clearInterval(this.interval);
      this.setState({running: false})
      return
    }
    //console.log('start was pressed');
    this.setState({startTime: new Date()});

    // Updating state causes the screen to re-render
    this.interval = setInterval(() => { //anonymous fat arrow function call
      this.setState({  // Always call this.setState to update state. Give object
        timeElapsed: new Date() - this.state.startTime,
        running: true
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
  },
  stopButton: {
    borderColor: '#CC0000'
  },
  lap: {
    justifyContent: 'space-around',
    flexDirection: 'row',
    backgroundColor: 'gray'
  },
  lapText : {
    fontSize: 30
  }
});

//Aero ES 2015 syntax                      () => StopWatch is same as function
//                                               with a return
AppRegistry.registerComponent('stopwatch', () => StopWatch);
