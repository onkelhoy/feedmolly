/**
 * @file this file is for all falling items
 * @module item
 * @author Henry Pap [onkelhoy@gmail.com]
 */
import { Vector } from "@papit/game-vector";
export declare class Item extends Vector {
    static items: Array<{
        image: HTMLImageElement;
        score: number;
    }>;
    index: number;
    rotation: number;
    speed: number;
    rotationspeed: number;
    static load(): Promise<void>;
    constructor(width: number);
    get image(): HTMLImageElement;
    get score(): number;
    update(): void;
    draw(context: CanvasRenderingContext2D): void;
}
