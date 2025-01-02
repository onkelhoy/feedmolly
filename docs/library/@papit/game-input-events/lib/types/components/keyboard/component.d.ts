import { KeyInfo } from "./types";
export declare class Keyboard extends EventTarget {
    keys: Record<string, Partial<KeyInfo>>;
    verbose: boolean;
    constructor();
    on(type: string, callback: EventListenerOrEventListenerObject | null, options?: AddEventListenerOptions | boolean): void;
    addEventListener(type: string, callback: EventListenerOrEventListenerObject | null, options?: AddEventListenerOptions | boolean): void;
    key(name: string): Partial<KeyInfo>;
    handlekeydown: (e: KeyboardEvent) => void;
    handlekeyup: (e: KeyboardEvent) => void;
}
