import {Dimensions} from "react-native";

// iPhone 6/7 sizes
const width = 375;
const height = 667;

// scale to the window size
const window = Dimensions.get("window");

// min() for compensating for landscape mode
const scaleFactor = Math.min(window.width, window.height) / width;

// return size relative to the iPhone 6/7 display points
export function vu(size) {
  return size * scaleFactor;
}
