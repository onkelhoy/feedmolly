import { Vector } from "@papit/game-vector";
import { Mode } from "./types";
import { Item } from "../item";
export declare class Molly extends Vector {
    static images: Record<Mode, HTMLImageElement>;
    constructor(width: number, height: number);
    static load(): Promise<void>;
    private _mode;
    get mode(): Mode;
    set mode(value: Mode);
    get face(): {
        x: number;
        y: number;
        r: number;
    };
    private resetMode;
    eat(item: Item): void;
    draw(context: CanvasRenderingContext2D): void;
    drawBoundary(context: CanvasRenderingContext2D): void;
}
