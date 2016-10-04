import React from 'react';

// USE ES15 style variable de-structuring to require these components from
// React
import {
  Text,
  View,
  AppRegistry
} from 'react-native'

var StopWatch = React.createClass({
  render: function(){
    return <View>
      <Text>
        00:00.00
      </Text>
      {this.startStopButton()}
      {this.lapButton()}

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
  }
});


//Aero ES 2015 syntax                      () => StopWatch is same as function
//                                               with a return
AppRegistry.registerComponent('stopwatch', () => StopWatch);
