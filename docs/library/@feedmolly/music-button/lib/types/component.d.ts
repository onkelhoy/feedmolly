import { CustomElement } from "@papit/core";
export declare class MusicButton extends CustomElement {
    static style: string;
    song: HTMLAudioElement;
    play: boolean;
    constructor();
    handleclick: () => void;
    render(): DocumentFragment;
}
declare global {
    interface HTMLElementTagNameMap {
        "music-button": MusicButton;
    }
}
