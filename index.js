import { Navigation } from "react-native-navigation"
import First from "./src/First"
import Second from "./src/Second"

Navigation.registerComponent("example.First", () => First)
Navigation.registerComponent("example.Second", () => Second)

Navigation.startSingleScreenApp({
  screen: {
    screen: "example.First"
  }
})
