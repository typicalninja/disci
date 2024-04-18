import { z } from "zod";

export interface InteractionCommand {
    name: string;
}

export const Adapters = z.enum(["hono"])
export type Adapters = z.infer<typeof Adapters>;

export const Platforms = z.enum(["workers", "node"])
export type Platforms = z.infer<typeof Platforms>;

export const configSchema = z.object({
    // points where discik will look for src file
    srcDir: z.string().default('./src'),
    adapter: Adapters.default("hono"),
    platform: Platforms.default("node")
})


export type DisckConfig = z.infer<typeof configSchema>