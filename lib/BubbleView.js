/**
 * Created by mark on 2017/9/6.
 */

import React, { Component } from 'react'
import { Platform, StyleSheet, Text, View } from 'react-native'

export default class BubbleView extends Component {

  constructor (props) {
    super(props)
  }

  render () {
    const addMarginTop = Platform.OS === 'ios' ? 25 : 5

    return (
      <View style={[styles.willBeginBG, {marginTop: addMarginTop}]}>
        <View style={styles.willBeginBGView}>
          <View style={styles.willBeginIconView}>
          </View>
          <Text style={styles.willBeginText}>{this.props.gold}</Text>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
    willBeginBG: {
      position: 'absolute',
      justifyContent: 'center',
      alignItems: 'center',
      alignSelf: 'center'
    },
    willBeginBGView: {
      paddingHorizontal: 15,
      height: 36,
      backgroundColor: '#33aadd',
      borderRadius: 18,
      flexDirection: 'row',
      alignItems: 'center'
    },
    willBeginIconView: {
      marginRight: 10
    },
    willBeginText: {
      fontSize: 18,
      color: '#ffffff'
    },
  }
)
