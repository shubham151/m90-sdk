export * from "./gen/types.gen.js";
import { type Config } from "./gen/client/types.gen.js";
import { M90Client } from "./gen/sdk.gen.js";
export { type Config as M90ClientConfig, M90Client };
export declare function createM90Client(config?: Config & {
    directory?: string;
}): M90Client;
