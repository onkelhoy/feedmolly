import { VectorObject, PrintSettings } from "./types";
export declare class Vector implements VectorObject {
    x: number;
    y: number;
    z: number;
    constructor(x: number | VectorObject, y?: number, z?: number);
    get magnitude(): number;
    get angle(): number;
    set magnitude(value: number);
    set angle(value: number);
    /**
     * Sets vector to value
     * @param {Vector|number} v
     * @param {undefined|number} y
     * @param {undefined|number} z
     * @returns Vector
     */
    set(v: VectorObject | number, y?: number, z?: number): this;
    /**
     * Adds another vector to original
     * @param {Vector|number} v
     * @param {undefined|number} y
     * @param {undefined|number} z
     * @returns Vector
     */
    add(v: VectorObject | number, y?: number, z?: number): this;
    /**
     * Subtracts another vector to original
     * @param {Vector|number} v
     * @param {undefined|number} y
     * @param {undefined|number} z
     * @returns Vector
     */
    sub(v: VectorObject | number, y?: number, z?: number): this;
    /**
     * Divides another vector to original
     * @param {Vector|number} v
     * @param {undefined|number} y
     * @param {undefined|number} z
     * @returns Vector
     */
    divide(v: VectorObject | number, y?: number, z?: number): this;
    /**
     * Multiplies another vector to original
     * @param {Vector|number} v
     * @param {undefined|number} y
     * @param {undefined|number} z
     * @returns Vector
     */
    mul(v: VectorObject | number, y?: number, z?: number): this;
    /**
     * Adds 2 vectors without modifying the original
     * @param {Vector|number} v
     * @param {undefined|number} y
     * @param {undefined|number} z
     * @returns new Vector
     */
    Add(v: VectorObject | number, y?: number, z?: number): Vector;
    /**
   * Subtracts 2 vectors without modifying the original
   * @param {Vector|number} v
   * @param {undefined|number} y
   * @param {undefined|number} z
   * @returns new Vector
   */
    Sub(v: VectorObject | number, y?: number, z?: number): Vector;
    /**
     * Divides 2 vectors without modifying the original
     * @param {Vector|number} v
     * @param {undefined|number} y
     * @param {undefined|number} z
     * @returns new Vector
     */
    Divide(v: VectorObject | number, y?: number, z?: number): Vector;
    /**
     * Multiplies 2 vectors without modifying the original
     * @param {Vector|number} v
     * @param {undefined|number} y
     * @param {undefined|number} z
     * @returns new Vector
     */
    Mul(v: VectorObject | number, y?: number, z?: number): Vector;
    get opposite(): this;
    get Opposite(): Vector;
    normalise(): this;
    toString(settings?: Partial<PrintSettings>): string;
    dot(b: VectorObject): number;
    draw(ctx: CanvasRenderingContext2D, color?: string): void;
    drawDot(ctx: CanvasRenderingContext2D, color?: string, r?: number): void;
    copy(): Vector;
    static Multiply(a: VectorObject, b: VectorObject): Vector;
    static Divide(a: VectorObject, b: VectorObject): Vector;
    static Add(a: VectorObject, b: VectorObject): Vector;
    static Subtract(a: VectorObject, b: VectorObject): Vector;
    static CrossProduct(a: VectorObject, b: VectorObject): Vector;
    static Cross(a: VectorObject, b: VectorObject): number;
    static Magnitude(v: VectorObject): number;
    static Distance(a: VectorObject, b: VectorObject): number;
    static Perpendicular(a: VectorObject, b: VectorObject, windingorder?: string): Vector;
    static Normalise(v: VectorObject): Vector;
    static Dot(a: VectorObject, b: VectorObject): number;
    static Angle(v: VectorObject): number;
    static toVector(v: VectorObject | number, y?: number, z?: number): Vector;
    static Copy(v: VectorObject): Vector;
    static get Zero(): Vector;
    static get Random(): Vector;
    static Draw(v: VectorObject, ctx: CanvasRenderingContext2D, color?: string, r?: number): void;
}
