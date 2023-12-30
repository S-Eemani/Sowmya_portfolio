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
                Hi! I'm <span class="poppins text-violet-400">Sowmya</span> Eemani 
            </h2>
            <p class="text-base sm:text-lg md:text-xl">
                "It's the <span class="text-violet-400">possibility</span> of having a dream come true that makes life interesting."
                -Paulo Coelho, The Alchemist
            </p>

            <p class="text-base sm:text-lg md:text-xl">
                My <span class="text-violet-400">favorite tech</span> includes Python, Java, SQL, AWS, Github, Sckit-Learn, Apache Airflow, Shell Scripting, kali Linux, Docker
            </p>
            <div class="flex justify-center lg:justify-start gap-4">
                <a href="https://www.linkedin.com/in/sowmya-eemani/" target="_blank">
                    <i class="fab fa-linkedin text-4xl"></i>
                </a>
                <a href="https://github.com/S-Eemani" target="_blank">
                    <i class="fa-brands fa-github text-4xl"></i>
                </a>
                <a href="https://medium.com/@Sowmya_Eemani" target="_blank">
                    <i class="fa-brands fa-medium text-4xl"></i>
                </a>
                <a href="https://mail.google.com/mail/u/?authuser=sowmya3221@gmail.com" target="_blank">
                    <i class="fa-solid fa-envelope-circle-check text-4xl"></i>
                </a>
            </div>
        </div>
        <div class="relative shadow-2xl grid place-items-center mt-[+40px] lg:mt-0">
            <img src="images/self_pic_5.png" alt="Profile image" class="object-cover w-full h-98 max-h-full">
        </div>
    </section>
    
    
    
    <section id="projects" class="py-20 lg:py-32 flex flex-col gap-24">
        <div class="flex flex-col gap-2 text-center">
            <h6 class="text-lg sm:text-xl md:text-2xl">A few of my creative endeavors.</h6>
            <h3 class="font-semibold text-3xl sm:text-4xl md:text-5xl">Curious to <span class="poppins text-violet-400">see</span> my work?</h3>
        </div>
        <div class="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-10">
            <Step step={steps[0]} link="/Past">
                <p>Click to know more about the tech stack I have <strong class="text-violet-400"> learned and implemented</strong> so far.</p>
            </Step>
            <Step step={steps[1]} link="/Present">
                <p>Click to know more about the projects I have my hands and brain around at the  <strong class="text-violet-400"> moment</strong> </p>
            </Step>
            <Step step={steps[2]} link="/Future">
                <p>Click to know more about the amazing <strong class="text-violet-400"> Ideas</strong> I want to implement. click to know more</p>
            </Step>
        </div>
    </section>
</main>
