import { c as create_ssr_component } from "../../chunks/index.js";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${$$result.head += `<!-- HEAD_svelte-suuqfi_START -->${$$result.title = `<title>Title</title>`, ""}<meta name="${"description"}" content="${"Svelte demo app"}"><!-- HEAD_svelte-suuqfi_END -->`, ""}

<section>Hello world!</section>`;
});
export {
  Page as default
};
