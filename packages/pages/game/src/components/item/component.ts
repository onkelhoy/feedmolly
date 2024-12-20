/**
 * @file this file is for all falling items 
 * @module item
 * @author Henry Pap [onkelhoy@gmail.com]
 */

import { getlink, LoadImage } from "@papit/game-engine";
import { Vector } from "@papit/game-vector";

export class Item extends Vector {
  static items:Array<{ image: HTMLImageElement, score: number }> = [];

  index: number;
  rotation: number;
  speed: number;
  rotationspeed: number;
  
  static async load () {
    if (Item.items.length > 0) return;
    
    // assets/images/background.jpg 
    // assets/images/molly eat.png 
    // assets/images/molly miss the food.png 
    // assets/images/molly normal.png 

    Item.items.push(
      { image: await LoadImage(getlink("/images/beef.png")), score: 1, },
      { image: await LoadImage(getlink("/images/bone.png")), score: -1, },
      { image: await LoadImage(getlink("/images/can.png")), score: -1, },
      { image: await LoadImage(getlink("/images/candy.png")), score: 1, },
      { image: await LoadImage(getlink("/images/carrot.png")), score: 1, },
      { image: await LoadImage(getlink("/images/chicken.png")), score: 1, },
      { image: await LoadImage(getlink("/images/egg.png")), score: 1, },
      { image: await LoadImage(getlink("/images/plastic-bag.png")), score: -1, },
      { image: await LoadImage(getlink("/images/potato.png")), score: 1, },
      { image: await LoadImage(getlink("/images/sausage.png")), score: 1, },
      { image: await LoadImage(getlink("/images/water.png")), score: 1, },
    );
  }

  constructor(width:number) {
    super(150 + (width - 300) * Math.random(), -200);
    // super(300, 300);

    this.index = Math.floor((Math.random() * Item.items.length)) % Item.items.length;
    this.rotation = 0;
    this.speed = (Math.random() * 7 + 8) / 10;
    this.rotationspeed = 0.01 + (Math.random() / 100);
  }

  get image() {
    return Item.items[this.index].image;
  }
  get score() {
    return Item.items[this.index].score;
  }

  update() {
    this.rotation += this.rotationspeed;
    this.y+=this.speed;
  }

  draw(context:CanvasRenderingContext2D) {
    context.save();
    context.translate(this.x, this.y);
    context.rotate(this.rotation);
    context.drawImage(this.image, -this.image.width / 2, -this.image.height / 2);
    context.restore();
  }
}