// import statements 
// system 
import { CustomElement, html, property } from "@papit/core";

// local 
import { style } from "./style";
import { ClickEvent } from "./types";

export class Heart extends CustomElement {
  static style = style;

  // properties 
  @property({ type: Boolean }) foo: boolean = false;

  // event handlers
  private handleclick = () => {
    this.dispatchEvent(new CustomEvent<ClickEvent>("main-click", { detail: { timestamp: performance.now() } }));
  }

  render() {
    return html`
      <p @click="${this.handleclick}">Llama Trauma Baby Mama</p>
    `
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "feedmolly-heart": Heart;
  }
}