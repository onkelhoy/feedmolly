import { CustomElement } from "@papit/core";
import { Localization, TranslateSettings } from "./components/localization";
export declare class Translator extends CustomElement {
    static style: string;
    localization: Localization;
    dynamicAttributes: Set<string>;
    private internal;
    private noupdate;
    private observer;
    private text;
    private _key;
    get key(): string;
    set key(value: string);
    t(key: string, settings?: Partial<TranslateSettings>): string | undefined;
    get innerText(): string;
    get innerHTML(): string;
    get textContent(): string;
    scope?: string;
    constructor();
    connectedCallback(): void;
    disconnectedCallback(): void;
    attributeChangedCallback(name: string, oldValue: string | null, newValue: string | null): void;
    private mutantobservercallback;
    private handleslotchange;
    translateKey(key: string, variables?: Record<string, string>): string;
    private updateText;
    render(): DocumentFragment;
}
declare global {
    interface HTMLElementTagNameMap {
        "pap-translator": Translator;
    }
}
