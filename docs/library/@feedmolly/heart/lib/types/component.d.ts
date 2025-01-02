import { CustomElement } from "@papit/core";
export declare class Heart extends CustomElement {
    static style: string;
    index: number;
    render(): string;
}
declare global {
    interface HTMLElementTagNameMap {
        "feedmolly-heart": Heart;
    }
}
