import { CustomElement } from "../element/class";
import { Setting } from "../element/types";
export declare class CustomElementInternals extends CustomElement {
    static formAssociated: boolean;
    protected _internals: ElementInternals;
    disabled?: boolean;
    constructor(setting?: Partial<Setting>);
    protected formDisabledCallback(disabled: boolean): void;
    protected formAssociatedCallback(form: HTMLFormElement): void;
    protected formStateRestoreCallback(state: any, mode: any): void;
    protected checkValidity(): boolean;
    protected reportValidity(): boolean;
    protected setValidity(flags?: ValidityStateFlags | undefined, message?: string | undefined, anchor?: HTMLElement | undefined): void;
}
