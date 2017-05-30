

import React, { Component } from 'react';
import {
  View,
  Animated,
  PanResponder,
} from 'react-native';
import styles from './Styles/DeckStyles';


class Deck extends Component {
  renderCards() {
    return this.props.data.map(item => {
      return this.props.renderCard(item);
    });
  }

  render() {
    return (
      <View
        style={styles.containerStyles}
      >
        {this.renderCards()}
      </View>
    );
  }
}


export default Deck;
