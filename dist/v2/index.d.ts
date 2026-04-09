export * from "./client.js";
export * from "./server.js";
import type { ServerOptions } from "./server.js";
export declare function createM90(options?: ServerOptions): Promise<{
    client: import("./client.js").M90Client;
    server: {
        url: string;
        close(): void;
    };
}>;
