/**
 * Common interface for all builders
 */
export interface IBuilder {
    reset(): void;

    /**
     * Emulate construction of doors
     */
    buildDoors(): void;

    /**
    * Emulate construction of windows
    */
    buildWindows(): void;
}
