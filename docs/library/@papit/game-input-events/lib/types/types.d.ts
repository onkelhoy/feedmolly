import { MouseSettings, Mouse } from "./components/mouse";
import { Touches } from "./components/touches";
export type Settings = {
    mouse: MouseSettings;
    touch: undefined;
    keyboard: undefined;
    verbose?: boolean;
};
export type ClickEvents = {
    target: Mouse | Touches;
};
