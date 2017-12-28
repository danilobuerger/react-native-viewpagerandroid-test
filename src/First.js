import React, { Component } from "react"
import { View, Button } from "react-native"

export default class First extends Component {
  _showSecondScreen = () => {
    this.props.navigator.push({ screen: "example.Second" })
  }
  render() {
    return (
      <View>
        <Button onPress={this._showSecondScreen} title="Go To Second Screen" />
      </View>
    )
  }
}
