import React, { Component } from "react"
import { View, Button, ViewPagerAndroid, Text } from "react-native"

var styles = {
  container: {
    flex: 1
  },
  pageStyle: {
    alignItems: "center",
    padding: 20
  }
}

export default class First extends Component {
  _showSecondScreen = () => {
    this.props.navigator.push({ screen: "example.Second" })
  }
  render() {
    return (
      <View style={styles.container}>
        <Text>
          1. Scroll the View Pager. Notice that this scrolls smoothly.
        </Text>
        <Text>2. Tap the "Go To Second Screen"</Text>
        <Text>3. Go Back</Text>
        <Text>
          4. Scroll the View Pager. Notice that this doesn't scroll smoothly
          aynmore.
        </Text>
        <Button onPress={this._showSecondScreen} title="Go To Second Screen" />
        <ViewPagerAndroid style={styles.container} initialPage={0}>
          <View style={styles.pageStyle} key="1">
            <Text>First page (Scroll Me)</Text>
          </View>
          <View style={styles.pageStyle} key="2">
            <Text>Second page (Scroll Me)</Text>
          </View>
        </ViewPagerAndroid>
      </View>
    )
  }
}
