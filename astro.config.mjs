import { defineConfig } from "astro/config";

import cloudflare from "@astrojs/cloudflare";
import clerk from "@clerk/astro";

// https://astro.build/config
export default defineConfig({
  output: "server",
  adapter: cloudflare({
    platformProxy: {
      enabled: true,
      configPath: "wrangler.toml",
    },
  }),
  integrations: [clerk()],
});
