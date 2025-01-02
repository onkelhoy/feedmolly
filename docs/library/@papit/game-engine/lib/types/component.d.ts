/**
 * @file this file is dedicated for all canvas related functionalities - this is rather simple
 * @module engine
 * @author Henry Pap [onkelhoy@gmail.com]
 */
import { Setting, SettingCallback } from "./types";
/**
 * @typedef {object} EngineSettings
 * @property {string} [query]
 * @property {string} [type=2d]
 * @property {number} [width]
 * @property {number} [height]
 * @property {Function[]} [callbacks]
 */
export declare class Engine {
    info: {
        setting: Setting;
        element: HTMLCanvasElement;
        context: CanvasRenderingContext2D;
    }[];
    /**
     *
     * @param  {...string|EngineSettings} selectors
     */
    constructor(...selectors: (Partial<Setting> | string)[]);
    get canvas(): HTMLCanvasElement;
    get element(): HTMLCanvasElement;
    get setting(): Setting;
    get context(): CanvasRenderingContext2D;
    get ctx(): CanvasRenderingContext2D;
    get width(): number;
    get height(): number;
    getSetting(index: number): Setting;
    getContext(index: number): CanvasRenderingContext2D;
    getElement(index: number): HTMLCanvasElement;
    getCanvas(index: number): HTMLCanvasElement;
    loop(callback: SettingCallback, index?: number): void;
    stop(index?: number): void;
}
export declare function LoadImage(src: string): Promise<unknown>;
