import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import tailwind from '@astrojs/tailwind';

// https://astro.build/config
import react from "@astrojs/react";
import auth from "auth-astro";
import GitHub from '@auth/core/providers/github';
import vercel from "@astrojs/vercel/serverless";

// https://astro.build/config
export default defineConfig({
  integrations: [mdx(), tailwind(), react(), auth({
    providers: [
      GitHub({
        clientId: "",
        clientSecret: "",
      }),
    ]
  })],
  output: "server",
  adapter: vercel(),
});