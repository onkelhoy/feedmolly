import { CustomElement } from "@papit/core";
import { Engine } from "@papit/game-engine";
import { InputEvents } from "@papit/game-input-events";
import "@feedmolly/play-button";
import "@feedmolly/music-button";
import "@feedmolly/heart";
import { Item } from "./components/item";
import { Molly } from "./components/molly";
import { Vector } from "@papit/game-vector";
import { Mode } from "./types";
import { MusicButton } from "@feedmolly/music-button";
export declare class Game extends CustomElement {
    static style: string;
    engine: Engine;
    events: InputEvents;
    molly: Molly;
    time: number;
    interval: number;
    items: Item[];
    eatSound: HTMLAudioElement;
    crySound: HTMLAudioElement;
    dragmolly: null | Vector;
    difficultiness: number;
    mode: Mode;
    score: number;
    hearts: number;
    musicButton: MusicButton;
    constructor();
    firstRender(): Promise<void>;
    handleplayclick: () => void;
    handlepress: () => void;
    handlerelease: (e: Event) => void;
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
