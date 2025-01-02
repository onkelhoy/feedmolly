import { Settings, Language, Enhanced, Data, TranslateSettings } from "./types";
export declare class Localization {
    current: Language;
    map: Map<string, Enhanced>;
    displaynames: Intl.DisplayNames;
    abortControllers: Map<string, AbortController>;
    constructor(settings?: Settings);
    private handleadd;
    private set;
    private detect;
    add(...data: Array<Data | Data[]>): void;
    load(data: Data): void;
    change(id: string): Promise<boolean | undefined>;
    subscribe(callback: EventListener): void;
    unsubscribe(callback: EventListener): void;
    t(key: string, settings?: TranslateSettings): string | undefined;
    translate(key: string, settings?: TranslateSettings): string | undefined;
}
declare global {
    interface Window {
        localization: Localization;
    }
}
