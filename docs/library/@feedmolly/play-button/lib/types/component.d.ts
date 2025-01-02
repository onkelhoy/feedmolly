import { CustomElement } from "@papit/core";
export declare class PlayButton extends CustomElement {
    static style: string;
    render(): string;
}
declare global {
    interface HTMLElementTagNameMap {
        "play-button": PlayButton;
    }
}
