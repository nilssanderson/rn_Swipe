
import React, { Component } from 'react';
import { View, Animated } from 'react-native';


class Ball extends Component {
  componentWillMount() {
    // 1. Where is the item right now? Animated.ValueXY
    // set position to (0,0) in the order of (x,y)
    this.position = new Animated.ValueXY(0, 0);

    // 2. Where is the element moving to? Animated.Spring
    // animate position from initial (0,0) to (200,500) using spring
    Animated.spring(this.position, {
      toValue: { x: 200, y: 500 }
    }).start();
  }

  render() {
    return (
      // 3. What element are we trying to move? Animated.View
      <Animated.View style={this.position.getLayout()}>
        <View style={styles.ballStyles} />
      </Animated.View>
    );
  }
}


const styles = {
  ballStyles: {
    height: 60,
    width: 60,
    borderRadius: 30,
    borderWidth: 30,
    borderColor: 'black'
  }
}


export default Ball;
