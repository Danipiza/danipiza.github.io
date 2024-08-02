import { defineConfig } from 'astro/config';

import tailwind from "@astrojs/tailwind";

/*const LIVE_URL = "https://danipiza.github.io/";

const SCRIPT = process.env.npm_lifecycle_script || "";
const isBuild = SCRIPT.includes("astro build");
let BASE_URL = LOCAL_HOST_URL;


if(isBuild){
	BASE_URL = LIVE_URL;
}*/

//site: BASE_URL,
// https://astro.build/config
export default defineConfig({  
  site: 'https://danipiza.github.io/',
  integrations: [tailwind()]
});