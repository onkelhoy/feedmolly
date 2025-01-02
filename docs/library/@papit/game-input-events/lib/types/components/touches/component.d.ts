import { Vector } from "@papit/game-vector";
import { TouchesEventMap } from "./types";
declare class ExtendedTouch {
    position: Vector;
    movement: Vector;
    start: number;
    end: null | number;
    identifier: number;
    screenX: number;
    screenY: number;
    clientX: number;
    clientY: number;
    pageX: number;
    pageY: number;
    radiusX: number;
    radiusY: number;
    rotationAngle: number;
    force: number;
    target: EventTarget;
    constructor(touch: Touch);
    get id(): number;
    update(touch: Touch): void;
    release(): this;
}
export declare class Touches extends EventTarget {
    mouse: ExtendedTouch | null;
    position: Vector;
    movement: Vector;
    touches: Record<number, ExtendedTouch>;
    changedTouches: ExtendedTouch[];
    verbose: boolean;
    constructor(canvas: HTMLCanvasElement);
    on<K extends keyof TouchesEventMap>(type: K, callback: EventListenerOrEventListenerObject | null, options?: AddEventListenerOptions | boolean): void;
    addEventListener<K extends keyof TouchesEventMap>(type: K, callback: EventListenerOrEventListenerObject | null, options?: AddEventListenerOptions | boolean): void;
    handletouchstart: (e: TouchEvent) => void;
    handletouchend: (e: TouchEvent) => void;
    handletouchmove: (e: TouchEvent) => void;
    handletouchcancel: (e: TouchEvent) => void;
    touchChange(touch: Touch): ExtendedTouch;
}
export {};
