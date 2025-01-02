// import statements 
// system 
import { CustomElement } from "@papit/core";

// local 
import { style } from "./style";

export class PlayButton extends CustomElement {
  static style = style;

  render() {
    return `
      <img class="default" src="images/play.png" alt="play button" />
      <img class="pressed" src="images/play-pressed.png" alt="play button pressed" />
    `
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "play-button": PlayButton;
  }
}