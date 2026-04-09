import { type Config } from "./gen/types.gen.js";
export type ServerOptions = {
    hostname?: string;
    port?: number;
    signal?: AbortSignal;
    timeout?: number;
    config?: Config;
};
export type TuiOptions = {
    project?: string;
    model?: string;
    session?: string;
    agent?: string;
    signal?: AbortSignal;
    config?: Config;
};
export declare function createM90Server(options?: ServerOptions): Promise<{
    url: string;
    close(): void;
}>;
export declare function createM90Tui(options?: TuiOptions): {
    close(): void;
};
