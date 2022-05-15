<script>
import { trainingPrograms } from '/src/data/data';
	import Card from '/src/components/Card.svelte';
</script>

<section class="bg-gray-100 min-h-screen">
    <article class="prose-base lg:prose-2xl max-w-7xl mx-auto p-4">
    <h2 class="content-center">Training Programs</h2>
    <div class=" flex flex-nowrap space-x-5">
        
        {#each trainingPrograms as eye}
            <Card Title={eye.title} Discription={eye.description} Link={eye.link} />
        {/each}
    
    </div>
</article>
</section>