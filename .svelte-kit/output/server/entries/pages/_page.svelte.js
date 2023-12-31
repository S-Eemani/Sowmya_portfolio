import { c as create_ssr_component, b as add_attribute, d as escape, v as validate_component } from "../../chunks/ssr.js";
const Step = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { step } = $$props;
  let { link } = $$props;
  if ($$props.step === void 0 && $$bindings.step && step !== void 0)
    $$bindings.step(step);
  if ($$props.link === void 0 && $$bindings.link && link !== void 0)
    $$bindings.link(link);
  return `<a${add_attribute("href", link, 0)} class="p-4 sm:p-6 md:p-8 flex flex-col gap-4 rounded-lg border border-solid border-violet-700 text-center group cursor-pointer hover:border-violet-400 duration-200"><div class="bg-slate-950 grid place-items-center px-4 text-5xl md:text-6xl -mt-10 sm:-mt-12 md:-mt-14 lg:-mt-16 mx-auto duration-200"><i${add_attribute("class", step.icon, 0)}></i></div> <h3 class="font-medium text-xl sm:text-2xl md:text-3xl">${escape(step.name)}</h3> ${slots.default ? slots.default({}) : ``} <div class data-svelte-h="svelte-23k968"><div class="flex-1 flex justify-between gap-4 items-center ml-auto cursor-pointer hover:text-slate-950 duration-200 relative after:absolute after:top-0 after:h-0 after:right-full after:w-full after:h-full after:bg-white after:duration-200 hover:after:translate-x-full after:z-[-1] overflow-hidden"><p class="relative z-4">Go to →</p></div></div></a>`;
});
const Main = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let steps = [
    {
      name: "Past",
      icon: "fa-solid fa-flag-checkered"
    },
    {
      name: "Present",
      icon: "fa-solid fa-list-check"
    },
    {
      name: "Future",
      icon: "fa-solid fa-diagram-project"
    }
  ];
  return `<main class="flex flex-col flex-1 p-4"><section id="introPage" class="grid grid-cols-1 lg:grid-cols-2 gap-10 py-8 sm:py-14" data-svelte-h="svelte-1t2nkz3"><div class="flex flex-col lg:justify-center text-center lg:text-left gap-6 md:gap-8 lg:gap-10"><h2 class="font-semibold text-4xl sm:text-5xl md:text-6xl">Hi! I&#39;m <span class="poppins text-violet-400">Sowmya</span> Eemani</h2> <p class="text-base sm:text-lg md:text-xl">&quot;It&#39;s the <span class="text-violet-400">possibility</span> of having a dream come true that makes life interesting.&quot;
                -Paulo Coelho, The Alchemist</p> <p class="text-base sm:text-lg md:text-xl">My <span class="text-violet-400">favorite tech</span> includes Python, Java, SQL, AWS, Github, Sckit-Learn, Apache Airflow, Shell Scripting, kali Linux, Docker</p> <div class="flex justify-center lg:justify-start gap-4"><a href="https://www.linkedin.com/in/sowmya-eemani/" target="_blank"><i class="fab fa-linkedin text-4xl"></i></a> <a href="https://github.com/S-Eemani" target="_blank"><i class="fa-brands fa-github text-4xl"></i></a> <a href="https://medium.com/@Sowmya_Eemani" target="_blank"><i class="fa-brands fa-medium text-4xl"></i></a> <a href="https://mail.google.com/mail/u/?authuser=sowmya3221@gmail.com" target="_blank"><i class="fa-solid fa-envelope-circle-check text-4xl"></i></a></div></div> <div class="relative shadow-2xl grid place-items-center mt-[+40px] lg:mt-0"><img src="images/self_pic_5.png" alt="Profile image" class="object-cover w-full h-98 max-h-full"></div></section> <section id="projects" class="py-20 lg:py-32 flex flex-col gap-24"><div class="flex flex-col gap-2 text-center" data-svelte-h="svelte-jhp3el"><h6 class="text-lg sm:text-xl md:text-2xl">A few of my creative endeavors.</h6> <h3 class="font-semibold text-3xl sm:text-4xl md:text-5xl">Curious to <span class="poppins text-violet-400">see</span> my work?</h3></div> <div class="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-10">${validate_component(Step, "Step").$$render($$result, { step: steps[0], link: "/Past" }, {}, {
    default: () => {
      return `<p data-svelte-h="svelte-1pmeymz">Click to know more about the tech stack I have <strong class="text-violet-400">learned and implemented</strong> so far.</p>`;
    }
  })} ${validate_component(Step, "Step").$$render($$result, { step: steps[1], link: "/Present" }, {}, {
    default: () => {
      return `<p data-svelte-h="svelte-fmpfgy">Click to know more about the projects I have my hands and brain around at the  <strong class="text-violet-400">moment</strong></p>`;
    }
  })} ${validate_component(Step, "Step").$$render($$result, { step: steps[2], link: "/Future" }, {}, {
    default: () => {
      return `<p data-svelte-h="svelte-7co5j6">Click to know more about the amazing <strong class="text-violet-400">Ideas</strong> I want to implement. click to know more</p>`;
    }
  })}</div></section></main>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `${validate_component(Main, "Main").$$render($$result, {}, {}, {})}`;
});
export {
  Page as default
};
