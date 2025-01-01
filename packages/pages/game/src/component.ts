// import statements 
// system 
import { CustomElement, debounce, html, property, query } from "@papit/core";

import { Engine, getlink, LoadImage } from "@papit/game-engine";
import { InputEvents } from "@papit/game-input-events";

// local 
import { style } from "./style";
import { Item } from "./components/item";
import { Molly } from "./components/molly";
import { Vector } from "@papit/game-vector";

export class Game extends CustomElement {
  static style = style;

  engine!: Engine;
  events!: InputEvents;
  molly!: Molly;
  time: number;
  interval: number;
  score = 0;
  items: Item[] = [];
  eatSound!: HTMLAudioElement;

  @query('div.score') scoreElement!: HTMLDivElement;
  @query<HTMLDivElement>({
    selector: "div.menu",
    load: async function (this:Game, element) {

      let img = element.querySelector("img");
      if (img) return;

      img = await LoadImage(getlink("/images/menu-background.png"));
      element.appendChild(img);
      
      const buttonDivDefault = element.querySelector("button > div.default");
      if (buttonDivDefault) {
        const btnDefault = await LoadImage(getlink("/images/play.png"));
        buttonDivDefault.appendChild(btnDefault);
      }
      else {
        console.log('no button added')
      }
      const buttonDivPress = element.querySelector("button > div.press");
      if (buttonDivPress) {
        const btnPress = await LoadImage(getlink("/images/play-pressed.png"));
        buttonDivPress.appendChild(btnPress);
      }
    }
  }) menuElement!: HTMLDivElement;

  @property({ type: Boolean, rerender: false }) play:boolean = false;

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
        query: '#main',
        documentElemenet: this.shadowRoot,
      }, 
      {
        query: '#background',
        documentElemenet: this.shadowRoot,
      }, 
    );
    this.events = new InputEvents(this.engine.canvas, {
      keyboard: undefined,
      touch: undefined,
      mouse: {
        pointerlock: {
          unadjustedMovement: false,
        }
      }
    });
    this.molly = new Molly(this.engine.width, this.engine.height);

    await Item.load();
    await Molly.load();
    this.eatSound = new Audio(getlink("/sounds/flip.mp3"));
    const background = await LoadImage(getlink("/images/background.jpg"));

    this.engine.getContext(1).drawImage(background, 0, 0, this.engine.width, this.engine.height);
  }
  
  handleClick = () => {
    this.engine.loop(this.draw); // cool function
    this.setplay();
  }
  
  setplay = () => {
    this.play = true;
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
        this.score += item.score;
        this.eatSound.play();
      }

      const missfood = item.y > this.engine.height + 50;
      if (eaten || missfood)
      {
        if (missfood) {
          this.molly.mode = "miss";
        }

        this.items.splice(i, 1);
        i--;

        if (missfood) {
          if (item.score > 0) this.score--;
        }
        if (this.scoreElement) this.scoreElement.innerHTML = String(this.score);
      }
    }

    this.molly.draw(this.engine.context);
  }

  render() {
    return html`
      <canvas id="background"></canvas>
      <canvas id="main"></canvas>
      <div class="score">SCORE: <span id="score">0</span></div>
      <div class="menu">
        <button @click="${this.handleClick}">
          <div class="default"></div>
          <div class="press"></div>
        </button>
      </div>
    `
  }
}

declare global {
  interface HTMLElementTagNameMap {
    "feedmolly-game": Game;
  }
}