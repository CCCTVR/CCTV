<script>
// @ts-nocheck

import { trainingPrograms } from '/src/data/data';
	import Card from '/src/components/Card.svelte';
</script>

<section class="bg-gray-100 min-h-screen justify-center">
    <article class="prose-base lg:prose-2xl max-w-7xl mx-auto p-4 text-justify">
    <h2><span class="justify-center">Training Programs</span></h2>
    <div class=" flex flex-nowrap space-x-5">
        
        {#each trainingPrograms as tp}
            <Card Title={tp.title} Discription={tp.description} Link={tp.link} />
        {/each}
    
    </div>
</article>
</section>