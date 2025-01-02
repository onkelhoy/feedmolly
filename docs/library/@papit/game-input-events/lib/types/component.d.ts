import { Vector } from "@papit/game-vector";
import { Mouse } from "./components/mouse";
import { Keyboard } from "./components/keyboard";
import { Touches } from "./components/touches";
import { Settings } from "./types";
export declare class InputEvents extends EventTarget {
    settings: Settings;
    mouse: Mouse;
    touch: Touches;
    keyboard: Keyboard;
    position: Vector;
    movement: Vector;
    pressing: boolean;
    constructor(canvas: HTMLCanvasElement, settings: Settings);
    set verbose(value: boolean);
    handledown: (e: Event) => void;
    handleup: (e: Event) => void;
    handlemove: (e: Event) => void;
    key(name: string): Partial<import("./components/keyboard").KeyInfo>;
    onkey(eventname: string, callback: EventListenerOrEventListenerObject | null): void;
    on(eventname: string, callback: EventListenerOrEventListenerObject | null): void;
}
