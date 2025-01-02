export type ButtonState = "left" | "wheel" | "right";
export type Setting = {
    pointerlock?: PointerLockOptions;
};
export type MouseEventMap = {
    move: Event;
    down: Event;
    up: Event;
};
export declare const MouseButtonMap: Record<1 | 2 | 3, ButtonState>;
export declare const DefaultSettings: Setting;
