// import statements 
// system 
import { CustomElement, debounce, html, property, query } from "@papit/core";

import { Engine, getlink, LoadImage } from "@papit/game-engine";
import { InputEvents } from "@papit/game-input-events";

import "@feedmolly/play-button";
import "@feedmolly/heart";

// local 
import { style } from "./style";
import { Item } from "./components/item";
import { Molly } from "./components/molly";
import { Vector } from "@papit/game-vector";
import { Mode } from "./types";

export class Game extends CustomElement {
  static style = style;

  engine!: Engine;
  events!: InputEvents;
  molly!: Molly;
  time: number;
  interval: number;
  items: Item[] = [];
  eatSound!: HTMLAudioElement;

  @property({ type: String, rerender: false }) mode:Mode = "start";
  @property({ type: Number }) score:number = 0;
  @property({ type: Number }) hearts:number = 3;

  constructor() {
    super();
    this.interval = 1000;
    this.time = performance.now();
    this.setplay = debounce(this.setplay);
  }

  async firstRender() {
    super.firstRender();
    if (!this.shadowRoot) throw new Error("could not establish shadowRoot");

    this.engine = new Engine(
      {
        query: 'canvas',
        documentElemenet: this.shadowRoot,
      }, 
    );
    this.events = new InputEvents(this.engine.canvas, {
      keyboard: undefined,
      touch: undefined,
      mouse: {
        pointerlock: undefined,
      }
    });
    this.molly = new Molly(this.engine.width, this.engine.height);

    await Item.load();
    await Molly.load();
    this.eatSound = new Audio(getlink("/sounds/flip.mp3"));
  }
  
  handleplayclick = () => {
    this.score = 0;
    this.hearts = 3;
    this.engine.loop(this.draw); // cool function
    this.setplay();
  }
  
  setplay = () => {
    this.mode = "play";
  }

  gameend = () => {
    this.items = [];
    this.engine.stop();
    this.mode = "end";
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

    this.molly.update(this.events.mouse.position);
    const face = this.molly.face;

    for (let i=0; i<this.items.length; i++) {
      const item = this.items[i];
      item.update();
      item.draw(this.engine.context);

      const distance = Vector.Distance(item, face);
      let eaten = false;
      if (distance <= face.r) {
        this.molly.eat(item);
        eaten = true;
        if (item.score > 0) {
          this.score++;
        }
        else if (this.hearts > 0)
        {
          this.hearts--;
        }
        this.eatSound.play();
      }

      const missfood = item.y > this.engine.height + 50 && item.score > 0;
      if (eaten || missfood)
      {
        if (missfood) {
          this.molly.mode = "miss";
        }
        this.items.splice(i, 1);
        i--;
        if (missfood && this.hearts > 0) {
          this.hearts--;
        }
      }
    }

    if (this.hearts <= 0) {
      this.gameend();
    } 
    this.molly.draw(this.engine.context);
  }

  render() {
    return html`
      <img class="background" src="images/background.jpg" alt="game background" />
      <canvas>Your browser does not support html-canvas</canvas>
      <header>
        <div>
          <feedmolly-heart key="0" index="0"></feedmolly-heart>
          <feedmolly-heart key="1" index="1"></feedmolly-heart>
          <feedmolly-heart key="2" index="2"></feedmolly-heart>
        </div>
        <div class="score">
          SCORE: <span>${this.score}</span>
        </div>
      </header>

      <footer>
        <p>art & concept by Phượng Ngọc Đào</p>
      </footer>

      <div class="menu start">
        <img src="images/menu-background.png" alt="menu background" />
        <play-button @click="${this.handleplayclick}"></play-button>
      </div>

      <div class="menu end">
        <img src="images/menu-background.png" alt="menu background" />
        <img class="game-over" src="images/game-over.png" alt="game over" />
        <play-button @click="${this.handleplayclick}"></play-button>
      </div>
    `
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "feedmolly-game": Game;
  }
}