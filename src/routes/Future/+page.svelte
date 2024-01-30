<script>
    let boxes = [
      {
        name: 'AWS Cloud Project',
        description: 'The hands-on bootcamp offers practical learning, equipping participants with technical expertise and preparing them for real-world applications and job opportunities. It emphasizes current cloud technologies, project-building, and industry standards, providing invaluable skills for professional certifications and career advancement, targeting individuals with cloud background seeking to enhance practical skills and career prospects in cloud project management.',
        // link: "/Past/Project-1"
      },
    ];
  
    function openNewPage(link) {
      window.open(link, '_blank');
    }
  </script>
  
  <main>
    <section class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-center items-center p-4 relative">
      {#each boxes as box, index}
        <div class="p-4 sm:p-6 md:p-8 flex flex-col gap-4 rounded-lg border border-solid border-violet-700 text-center group cursor-pointer hover:border-violet-400 duration-200 relative bg-[#020617]" key={index}>
          <h3 class="font-medium text-xl sm:text-2xl md:text-3xl">{box.name}</h3>
          <p class="relative z-4">{box.description}</p>
          <!-- <button class="mt-4 py-2 px-4 bg-blue-600 text-white rounded-md transition duration-300 hover:bg-blue-700" on:click={() => openNewPage(box.link)}>Go In -></button> -->
          <!-- <div class="absolute top-0 left-0 w-full h-full pointer-events-none">
            <div class="particles"></div>
          </div> -->
        </div>
      {/each}
    </section>
  </main>
  
  <style>
    /* Add necessary classes here or in your existing CSS file */
    .border-violet-700 {
      border-color: #6c0de3c4; /* Adjust the color as needed */
    }
  
    .border-violet-400 {
      border-color: #c72eb1; /* Adjust the color as needed */
    }
  
    /* Add other classes based on your requirements */
    .particles {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none; /* Ensures the particles do not intercept mouse events */
    z-index: -1; /* Places the particles behind the boxes */
  }
  </style>
  