// import statements 
// system 
import { CustomElement, property } from "@papit/core";

// local 
import { style } from "./style";

export class Heart extends CustomElement {
  static style = style;

  @property({
    type: Number,
    rerender: false,
    after: function(this:Heart, value:number) {
      this.style.setProperty("--index", String(value));
    }
  }) index:number = 0;

  render() {
    return `
      <img src="images/heart.png" alt="game life" />
    `
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "feedmolly-heart": Heart;
  }
}