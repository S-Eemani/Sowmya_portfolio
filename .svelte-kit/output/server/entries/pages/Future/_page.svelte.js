import { c as create_ssr_component, e as each, b as add_attribute, d as escape } from "../../../chunks/ssr.js";
const _page_svelte_svelte_type_style_lang = "";
const css = {
  code: ".border-violet-700.svelte-1mcduuj{border-color:#6c0de3c4}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let boxes = [
    {
      name: "AWS Cloud Project",
      description: "The hands-on bootcamp offers practical learning, equipping participants with technical expertise and preparing them for real-world applications and job opportunities. It emphasizes current cloud technologies, project-building, and industry standards, providing invaluable skills for professional certifications and career advancement, targeting individuals with cloud background seeking to enhance practical skills and career prospects in cloud project management."
    }
  ];
  $$result.css.add(css);
  return `<main><section class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-center items-center p-4 relative">${each(boxes, (box, index) => {
    return `<div class="p-4 sm:p-6 md:p-8 flex flex-col gap-4 rounded-lg border border-solid border-violet-700 text-center group cursor-pointer hover:border-violet-400 duration-200 relative svelte-1mcduuj"${add_attribute("key", index, 0)}><h3 class="font-medium text-xl sm:text-2xl md:text-3xl">${escape(box.name)}</h3> <p class="relative z-4">${escape(box.description)}</p>   </div>`;
  })}</section> </main>`;
});
export {
  Page as default
};
