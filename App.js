import React, { Component } from 'react';
import Swiper from 'react-native-deck-swiper';
import {
  Image,
  StatusBar,
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Dimensions
} from 'react-native';
import { Transitioning, Transition } from 'react-native-reanimated';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import data from './data';
const { width } = Dimensions.get('window');

const stackSize = 4;
const colors = {
  red: '#EC2379',
  blue: '#0070FF',
  gray: '#777777',
  white: '#ffffff',
  black: '#000000'
};
const ANIMATION_DURATION = 200;

const transition = (
  <Transition.Sequence>
    <Transition.Out
      type='slide-bottom'
      durationMs={ANIMATION_DURATION}
      interpolation='easeIn'
    />
    <Transition.Together>
      <Transition.In
        type='fade'
        durationMs={ANIMATION_DURATION}
        delayMs={ANIMATION_DURATION / 2}
      />
      <Transition.In
        type='slide-bottom'
        durationMs={ANIMATION_DURATION}
        delayMs={ANIMATION_DURATION / 2}
        interpolation='easeOut'
      />
    </Transition.Together>
  </Transition.Sequence>
);

export default class Exemple extends Component {
  swiperRef = React.createRef();
  transitionRef = React.createRef();
  state = {
    cards: data,
    index: 0
  };

  renderCard = card => {
    return (
      <View style={styles.card}>
        <Image source={{ uri: card.image }} style={styles.cardImage} />
      </View>
    );
  };

  onSwiped = () => {
    this.transitionRef.current.animateNextTransition();
    this.setState({
      index: (this.state.index + 1) % this.state.cards.length
    });
  };

  swipeLeft = () => {
    this.swiperRef.current.swipeLeft();
  };

  swipeRight = () => {
    this.swiperRef.current.swipeRight();
  };

  render() {
    return (
      <SafeAreaView style={styles.container}>
        <MaterialCommunityIcons
          name='crop-square'
          size={width}
          color={colors.blue}
          style={{
            opacity: 0.05,
            transform: [{ rotate: '45deg' }, { scale: 1.6 }],
            position: 'absolute',
            left: -15,
            top: 30
          }}
        />
        <StatusBar hidden={true} />
        <View style={styles.swiperContainer}>
          <Swiper
            ref={this.swiperRef}
            renderCard={this.renderCard}
            backgroundColor={'transparent'}
            onSwiped={this.onSwiped}
            onTapCard={this.swipeLeft}
            cards={this.state.cards}
            cardIndex={this.state.index}
            cardVerticalMargin={50}
            stackSize={stackSize}
            stackScale={10}
            stackSeparation={14}
            infinite
            animateOverlayLabelsOpacity
            animateCardOpacity
            disableTopSwipe
            disableBottomSwipe
            overlayLabels={{
              left: {
                title: 'NOPE',
                style: {
                  label: {
                    backgroundColor: colors.red,
                    borderColor: colors.red,
                    color: colors.white,
                    borderWidth: 1,
                    fontSize: 24
                  },
                  wrapper: {
                    flexDirection: 'column',
                    alignItems: 'flex-end',
                    justifyContent: 'flex-start',
                    marginTop: 20,
                    marginLeft: -20
                  }
                }
              },
              right: {
                title: 'LIKE',
                style: {
                  label: {
                    backgroundColor: colors.blue,
                    borderColor: colors.blue,
                    color: colors.white,
                    borderWidth: 1,
                    fontSize: 24
                  },
                  wrapper: {
                    flexDirection: 'column',
                    alignItems: 'flex-start',
                    justifyContent: 'flex-start',
                    marginTop: 20,
                    marginLeft: 20
                  }
                }
              }
            }}
          />
        </View>
        <View style={styles.bottomContainer}>
          <Transitioning.View
            ref={this.transitionRef}
            transition={transition}
            style={styles.bottomContainerMeta}
          >
            <View key={this.state.index} style={{ alignItems: 'center' }}>
              <Text style={[styles.text, styles.heading]} numberOfLines={2}>
                {this.state.cards[this.state.index].name}
              </Text>
              <Text style={[styles.text, styles.price]}>
                {this.state.cards[this.state.index].price}
              </Text>
            </View>
          </Transitioning.View>
          <View style={styles.footerContainer}>
            <MaterialCommunityIcons.Button
              name='close'
              size={94}
              backgroundColor='transparent'
              underlayColor='transparent'
              activeOpacity={0.3}
              color={colors.red}
              onPress={this.swipeLeft}
            />
            <MaterialCommunityIcons.Button
              name='circle-outline'
              size={94}
              backgroundColor='transparent'
              underlayColor='transparent'
              activeOpacity={0.3}
              color={colors.blue}
              onPress={this.swipeRight}
            />
          </View>
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white
  },
  swiperContainer: {
    flex: 0.55
  },
  bottomContainer: {
    flex: 0.45,
    justifyContent: 'space-evenly'
  },
  bottomContainerMeta: { alignContent: 'flex-end', alignItems: 'center' },
  footerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly'
  },
  cardImage: {
    width: 180,
    height: '100%',
    resizeMode: 'contain'
  },
  card: {
    flex: 0.45,
    borderRadius: 8,
    shadowRadius: 25,
    shadowColor: colors.black,
    shadowOpacity: 0.08,
    shadowOffset: { width: 0, height: 0 },
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.white
  },
  text: {
    textAlign: 'center',
    fontSize: 50,
    backgroundColor: 'transparent'
  },
  done: {
    textAlign: 'center',
    fontSize: 30,
    color: colors.white,
    backgroundColor: 'transparent'
  },
  text: { fontFamily: 'Courier' },
  heading: { fontSize: 24, marginBottom: 10, color: colors.gray },
  price: { color: colors.blue, fontSize: 32, fontWeight: '500' }
});
