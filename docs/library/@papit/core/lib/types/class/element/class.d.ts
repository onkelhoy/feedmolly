import { PropertyInfo } from "../../decorators/property";
import { FunctionCallback, RenderType, Setting } from "./types";
export declare class CustomElement extends HTMLElement {
    static _domparser: DOMParser;
    static observedAttributes: never[];
    static style: string;
    static styles: string[];
    private attributeinit;
    private delayedAttributes;
    protected callAfterRender: (Function | FunctionCallback)[];
    attributeToPropertyMap: Map<string, string>;
    hasrendered: boolean;
    setting: Setting;
    properties: Record<string, PropertyInfo>;
    originalHTML: string;
    lastrender: Document;
    rendercomperator: HTMLTemplateElement;
    stylecomperator: HTMLStyleElement;
    DOMpath: string;
    UUID: string;
    hasFocus: boolean;
    constructor(setting?: Partial<Setting>);
    get domparser(): DOMParser;
    connectedCallback(): void;
    disconnectedCallback(): void;
    attributeChangedCallback(name: string, oldValue: any, newValue: any): void;
    firstRender(): void;
    __update(): void;
    render(config?: any): RenderType;
    querySelector<T extends Element>(selector: string): T | null;
    originalQuerySelector<T extends Element>(selector: string): T | null;
    getProperties(): Record<string, PropertyInfo>;
    getStyle(): string;
    shadow_closest<T extends Element = HTMLElement>(selector: string): T | undefined;
    requestUpdate(): void;
    protected handleblur: () => void;
    protected handlefocus: () => void;
    private setDOMpath;
    private initAttributes;
    private updateAttribute;
}