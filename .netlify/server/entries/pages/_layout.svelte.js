import { c as create_ssr_component } from "../../chunks/index.js";
const global = "";
const pwaInfo = { "pwaInDevEnvironment": false, "webManifest": { "href": "/manifest.webmanifest", "useCredentials": false, "linkTag": '<link rel="manifest" href="/manifest.webmanifest">' } };
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let webManifest;
  globalThis && globalThis.__awaiter || function(thisArg, _arguments, P, generator) {
    function adopt(value) {
      return value instanceof P ? value : new P(function(resolve) {
        resolve(value);
      });
    }
    return new (P || (P = Promise))(function(resolve, reject) {
      function fulfilled(value) {
        try {
          step(generator.next(value));
        } catch (e) {
          reject(e);
        }
      }
      function rejected(value) {
        try {
          step(generator["throw"](value));
        } catch (e) {
          reject(e);
        }
      }
      function step(result) {
        result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
      }
      step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
  };
  webManifest = pwaInfo ? pwaInfo.webManifest.linkTag : "";
  return `${$$result.head += `<!-- HEAD_svelte-hnr6zt_START --><!-- HTML_TAG_START -->${webManifest}<!-- HTML_TAG_END --><!-- HEAD_svelte-hnr6zt_END -->`, ""}

${``}




${slots.default ? slots.default({}) : ``}`;
});
export {
  Layout as default
};
