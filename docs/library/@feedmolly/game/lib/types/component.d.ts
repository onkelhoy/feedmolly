import { CustomElement } from "@papit/core";
import { Engine } from "@papit/game-engine";
import { InputEvents } from "@papit/game-input-events";
import "@feedmolly/play-button";
import "@feedmolly/heart";
import { Item } from "./components/item";
import { Molly } from "./components/molly";
import { Mode } from "./types";
export declare class Game extends CustomElement {
    static style: string;
    engine: Engine;
    events: InputEvents;
    molly: Molly;
    time: number;
    interval: number;
    items: Item[];
    eatSound: HTMLAudioElement;
    mode: Mode;
    score: number;
    hearts: number;
    constructor();
    firstRender(): Promise<void>;
    handleplayclick: () => void;
    setplay: () => void;
    gameend: () => void;
    draw: () => void;
    render(): DocumentFragment;
}
declare global {
    interface HTMLElementTagNameMap {
        "feedmolly-game": Game;
    }
}
