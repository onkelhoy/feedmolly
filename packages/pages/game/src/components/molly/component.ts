// import statements 

import { getlink, LoadImage } from "@papit/game-engine";
import { Vector, VectorObject } from "@papit/game-vector";
import { Mode } from "./types";
import { debounce } from "@papit/core";
import { Item } from "../item";

export class Molly extends Vector {
  static images: Record<Mode, HTMLImageElement>;

  constructor(width: number, height: number) {
    super(width / 2, height);
    this.resetMode = debounce(this.resetMode, 400);
  }

  static async load() {
    Molly.images = {
      miss: await LoadImage(getlink("/images/molly-miss-the-food400.png")),
      eat: await LoadImage(getlink("/images/molly-eat400.png")),
      normal: await LoadImage(getlink("/images/molly-normal400.png")),
    }
  }

  private _mode: Mode = "normal";
  get mode () {
    return this._mode;
  }
  set mode (value:Mode) {
    if (value !== "normal") {
      this.resetMode();
    }

    this._mode = value;
  }

  get face() {
    return {
      x: this.x + 60,
      y: this.y - 130,
      r: 35
    }
  }

  private resetMode = () => {
    this.mode = "normal";
  }

  eat(item:Item) {
    if (item.score > 0) {
      this.mode = "eat";
    }
    else {
      this.mode = "miss";
    }
  }

  update(mouse: VectorObject) {
    this.x = mouse.x;
  }

  draw(context:CanvasRenderingContext2D) {
    const img = Molly.images[this.mode];
    context.drawImage(img, this.x - img.width / 2, this.y - 230);
  }
  
  drawBoundary(context:CanvasRenderingContext2D) {
    const face = this.face;
    context.beginPath();
    context.arc(face.x, face.y, face.r, 0, Math.PI * 2);
    context.lineWidth = 3;
    context.strokeStyle = "orange";
    context.stroke();
  }
}