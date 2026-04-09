export * from "./gen/types.gen.js";
import { createClient } from "./gen/client/client.gen.js";
import { M90Client } from "./gen/sdk.gen.js";
export { M90Client };
export function createM90Client(config) {
    if (!config?.fetch) {
        const customFetch = (req) => {
            // @ts-ignore
            req.timeout = false;
            return fetch(req);
        };
        config = {
            ...config,
            fetch: customFetch,
        };
    }
    if (config?.directory) {
        config.headers = {
            ...config.headers,
            "x-m90-directory": encodeURIComponent(config.directory),
        };
    }
    const client = createClient(config);
    return new M90Client({ client });
}
