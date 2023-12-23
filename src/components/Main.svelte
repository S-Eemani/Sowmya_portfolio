<script>
    import Step from "./Step.svelte";
    
    let steps = [
        {name: 'Past', icon:"fa-solid fa-flag-checkered"},
        {name: 'Present', icon:'fa-solid fa-list-check'},
        {name: 'Future', icon:'fa-solid fa-diagram-project'},
    ]
</script>

<main class="flex flex-col flex-1 p-4">
    <section id="introPage" class="grid grid-cols-1 lg:grid-cols-2 gap-10 py-8 sm:py-14">
        <div class="flex flex-col lg:justify-center text-center lg:text-left gap-6 md:gap-8 lg:gap-10">
            <h2 class="font-semibold text-4xl sm:text-5xl md:text-6xl">
                Hi! I'm <span class="poppins text-violet-400">Sowmya</span> Eemani <br/>Software <span class="poppins text-violet-400">Developer</span>
            </h2>
            <p class="text-base sm:text-lg md:text-xl">
                My <span class="text-violet-400">favorite tech</span> includes JavaScript (NEXT.JS or SvelteKit), TailwindCSS, Node.js + Express.js & PostgreSQL or Firebase/Firestore!
            </p>
            <a class="blueShadow mx-auto lg:mr-auto text-base sm:text-lg md:text-xl poppins relative overflow-hidden px-6 py-3 group rounded-full bg-white text-slate-950 cursor-pointer" href="#" target="_blank">
                <div class="absolute top-0 right-full w-full h-full bg-violate-400 opacity-20 group-hover:translate-x-full z-0 duration-200"></div>
                <h4 class="relative z-9">Get in touch &rarr;</h4>
            </a>
        </div>
        <div class="relative shadow-2xl grid place-items-center">
            <img src="images/Self pic.png" alt="Profile image" class="object-cover h-121 max-h-">
        </div>
    </section>

    <section id="projects" class="py-20 lg:py-32 flex flex-col gap-24">
        <div class="flex flex-col gap-2 text-center">
            <h6 class="text-lg sm:text-xl md:text-2xl">A few of my creative endeavors.</h6>
            <h3 class="font-semibold text-3xl sm:text-4xl md:text-5xl">Curious to <span class="poppins text-violet-400">see</span> my work?</h3>
        </div>
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-10">
            <Step step={steps[0]}>
                <p>Click to know more about the tech stack I have <strong class="text-violet-400"> learned and implemented</strong> so far.</p>
            </Step>
            <Step step={steps[1]}>
                <p>Click to know more about the projects I have my hands and brain around at the  <strong class="text-violet-400"> moment</strong> </p>
            </Step>
            <Step step={steps[2]}>
                <p>Click to know more about the amazing <strong class="text-violet-400"> Ideas</strong> I want to implement. click to know ,pre</p>
            </Step>
        </div>
        
    </section>
</main>
