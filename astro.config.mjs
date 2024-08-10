import { defineConfig } from 'astro/config';

import tailwind from "@astrojs/tailwind";

import { defineConfig } from "astro/config";
import astroI18next from "astro-i18next";


const SERVER_PORT = 3000;
const LOCAL_HOST_URL = `http://localhost:${SERVER_PORT}/`

const LIVE_URL = "https://danipiza.github.io/";

const SCRIPT = process.env.npm_lifecycle_script || "";
const isBuild = SCRIPT.includes("astro build");
let BASE_URL = LOCAL_HOST_URL;


if(isBuild){
	BASE_URL = LIVE_URL;
}

// site: 'https://danipiza.github.io/',
// https://astro.build/config
export default defineConfig({  
  server: { port: SERVER_PORT },
  site: BASE_URL,
  i18n: {
    defaultLocale: 'es',
    locales: ['es','en']
  },
  integrations: [tailwind()]  // , astroI18next()              
});