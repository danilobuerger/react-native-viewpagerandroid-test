import { Navigation } from "react-native-navigation"
import App from "./App"

Navigation.registerComponent("example.App", () => App)

Navigation.startSingleScreenApp({
  screen: {
    screen: "example.App"
  }
})
