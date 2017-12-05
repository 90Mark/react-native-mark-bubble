import React, { Component } from 'react'
import RootSiblings from 'react-native-root-siblings'
import BubbleView from './BubbleView'

class Bubble extends Component {

  static show = (gold) => {
    this._bubble && this._bubble.destroy()
    this.timer && clearInterval(this.timer)

    this._bubble = new RootSiblings(
      <BubbleView gold={gold}/>
    )
    this.timer = setTimeout(() => {
      this._bubble && this._bubble.destroy()
      this.timer && clearInterval(this.timer)
    }, 3000)
    return this._bubble
  }

  render () {
    return null
  }

}

export default Bubble
