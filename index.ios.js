import React from 'react';

// USE ES15 style variable de-structuring to require these components from
// React
import {
  Text,
  View,
  AppRegistry,
  StyleSheet
} from 'react-native'

var StopWatch = React.createClass({
  render: function(){
    return <View style={styles.container}>
      <View style={[styles.header, this.border('yellow')]}>
        <View style={this.border('red')}>
          <Text>
            00:00.00
          </Text>
        </View>
        <View style={this.border('green')}>
          {this.startStopButton()}
          {this.lapButton()}
        </View>
      </View>

      <View style={[styles.footer, this.border('blue')]}>
        <Text>
          I am  a list of laps
        </Text>
      </View>
    </View>
  },
  startStopButton: function() {
    return <View>
      <Text>
      Start
      </Text>
    </View>
  },
  lapButton: function() {
    return <View>
        <Text>
        Lap
        </Text>
      </View>
  },
  border: function(color) {
    return {
      borderColor: color,
      borderWidth: 4
    }
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
  }
});

//Aero ES 2015 syntax                      () => StopWatch is same as function
//                                               with a return
AppRegistry.registerComponent('stopwatch', () => StopWatch);
