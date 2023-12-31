import { c as create_ssr_component, e as each, b as add_attribute, d as escape } from "../../../chunks/ssr.js";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: ".border-violet-700.svelte-1mcduuj{border-color:#6c0de3c4}.particles.svelte-1mcduuj{position:absolute;top:0;left:0;width:100%;height:100%;pointer-events:none;z-index:-1}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let boxes = [
    {
      name: "Self Portfolio",
      description: "Recognizing the need to establish an online presence, I revamped my portfolio using Svelte Kit, impressed by its powerful features and functionalities, which motivated me to update and enhance my existing portfolio.",
      link: "/Present/Project-1"
    }
  ];
  $$result.css.add(css);
  return `<main><section class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-center items-center p-4 relative">${each(boxes, (box, index) => {
    return `<div class="p-4 sm:p-6 md:p-8 flex flex-col gap-4 rounded-lg border border-solid border-violet-700 text-center group cursor-pointer hover:border-violet-400 duration-200 relative svelte-1mcduuj"${add_attribute("key", index, 0)}><h3 class="font-medium text-xl sm:text-2xl md:text-3xl">${escape(box.name)}</h3> <p class="relative z-4">${escape(box.description)}</p> <button class="mt-4 py-2 px-4 bg-blue-600 text-white rounded-md transition duration-300 hover:bg-blue-700" data-svelte-h="svelte-1hs0o6v">Go In -&gt;</button> <div class="absolute top-0 left-0 w-full h-full pointer-events-none" data-svelte-h="svelte-1vj8xya"><div class="particles svelte-1mcduuj"></div></div> </div>`;
  })}</section> </main>`;
});
export {
  Page as default
};
