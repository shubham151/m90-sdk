export * from "./client.js"
export * from "./server.js"

import { createM90Client } from "./client.js"
import { createM90Server } from "./server.js"
import type { ServerOptions } from "./server.js"

export async function createM90(options?: ServerOptions) {
  const server = await createM90Server({
    ...options,
  })

  const client = createM90Client({
    baseUrl: server.url,
  })

  return {
    client,
    server,
  }
}
