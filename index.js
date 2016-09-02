import {Dimensions} from "react-native";

const d = Dimensions.get("window");

export let width = 375;
export let height = 667;

export function configure(w, h) {
  width = w;
  height = h;
}

export const vw = (d.width / 100);
export const vh = (d.height / 100);

export const vmin = Math.min(vw, vh);
export const vmax = Math.max(vw, vh);

export function vu(size) {
  return ((size / width) * vmin) * 100;
}
