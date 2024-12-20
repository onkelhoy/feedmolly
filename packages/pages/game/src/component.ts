// import statements 
// system 
import { CustomElement, html, property, query } from "@papit/core";

import { Engine, getlink, LoadImage } from "@papit/game-engine";

// local 
import { style } from "./style";
import { Item } from "./components/item";

export class Game extends CustomElement {
  static style = style;

  engine!: Engine;
  time: number;
  interval: number;
  score = 0;
  items: Item[] = [];

  @query('div') scoreElement!: HTMLDivElement;

  constructor() {
    super();
    this.interval = 1000;
    this.time = performance.now();
  }

  async firstRender() {
    super.connectedCallback();
    if (!this.shadowRoot) throw new Error("could not establish shadowRoot");


    this.engine = new Engine(
      {
        query: '#main',
        documentElemenet: this.shadowRoot,
      }, 
      {
        query: '#background',
        documentElemenet: this.shadowRoot,
      }, 
    );

    await Item.load();
    const background = await LoadImage(getlink("/images/background.jpg"));

    this.engine.loop(this.draw); // cool function
    this.engine.getContext(1).drawImage(background, 0, 0, this.engine.width, this.engine.height);
  }

  draw = () => {
    this.engine.ctx.clearRect(0, 0, this.engine.width, this.engine.height);
    this.time++;

    const now = performance.now();
    if (now - this.time > this.interval) 
    {
      this.interval = Math.random() * 1000 + 500;
      this.time = now;

      this.items.push(new Item(this.engine.width));
    }

    for (let i=0; i<this.items.length; i++) {
      const item = this.items[i];
      item.update();
      item.draw(this.engine.context);

      if (item.y > this.engine.height + 50)
      {
        this.items.splice(i, 1);
        i--;

        if (item.score > 0) 
        {
          this.score--;
          if (this.scoreElement) this.scoreElement.innerHTML = String(this.score);
        }
      }
    }
  }

  render() {
    return html`
      <canvas id="background"></canvas>
      <canvas id="main"></canvas>
      <div>SCORE: <span id="score">0</span></div>
    `
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "feedmolly-game": Game;
  }
}