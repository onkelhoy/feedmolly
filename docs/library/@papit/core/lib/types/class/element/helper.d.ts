import { Setting, ICustomElement } from "./types";
export declare function ConvertFromString(value: string | null, type: Function): any;
export declare function renderStyle(setting: Setting, element: ICustomElement): void;
export declare function renderHTML(setting: Setting, element: ICustomElement): void;
export declare function getSelector(node: Element): string;
