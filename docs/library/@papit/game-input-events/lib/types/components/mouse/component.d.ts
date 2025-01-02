import { Vector } from "@papit/game-vector";
import { ButtonState, Setting, MouseEventMap } from "./types";
export declare class Mouse extends EventTarget {
    position: Vector;
    movement: Vector;
    setting: Setting;
    lastpointerlock: number;
    clicked: boolean;
    verbose: boolean;
    click: {
        start: null | number;
        end: null | number;
        button: null | ButtonState;
    };
    pointerlocktimer: NodeJS.Timeout | null;
    constructor(canvas: HTMLCanvasElement, setting: Setting);
    on<K extends keyof MouseEventMap>(type: K, callback: EventListenerOrEventListenerObject | null, options?: AddEventListenerOptions | boolean): void;
    addEventListener<K extends keyof MouseEventMap>(type: K, callback: EventListenerOrEventListenerObject | null, options?: AddEventListenerOptions | boolean): void;
    handlemousemove: (e: MouseEvent) => void;
    handlemousedown: (e: MouseEvent) => void;
    handlemouseup: (e: MouseEvent) => void;
    draw(ctx: CanvasRenderingContext2D, strokecolor?: string, fillcolor?: string, thickness?: number): void;
    handlepointersetup: (e: MouseEvent) => void;
    handlepointerlockchange: (e: Event) => void;
    handlepointerlockerror: (e: Event) => void;
}
