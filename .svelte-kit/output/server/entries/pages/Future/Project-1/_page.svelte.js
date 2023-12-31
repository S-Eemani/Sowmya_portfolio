import { c as create_ssr_component, b as add_attribute } from "../../../../chunks/ssr.js";
let imagePath = "../images/Self pic.png";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<main id="main" class="mt-4"><div class="main-content paddsection"><div class="container"><div class="row justify-content-center"><div class="col-md-8 col-md-offset-2"><div class="row"><div class="container-main single-main"><div class="col-md-12"><div class="block-main mb-30 d-flex flex-column align-items-center"><img${add_attribute("src", imagePath, 0)} class="img-responsive border rounded-lg mb-4" style="height: 600px; width: auto; left: 50%; max-width: 100%; border: 2px solid #000;" alt="SVM Based Classifier for Detection of DDoS in IoT"> <div class="content-main single-post padDiv text-center" data-svelte-h="svelte-1cew481"><div class="journal-txt"><h2 style="font-size: 24px; font-weight: bold; color: rgb(167, 139, 250); --tw-text-opacity: 1;">AWS</h2></div> <p class="mb-30 text-center">The</p> <p class="mb-30 text-center">In</p> <p class="mb-30 text-center">We</p></div></div></div></div></div></div></div></div></div></main>`;
});
export {
  Page as default
};
