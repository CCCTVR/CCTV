<!--Need to make a card for this-->
<script>
	import MediaCard from '../components/MediaCard.svelte';
	import { media } from '../data/data';
</script>

<!-- <h1 class="text-5xl">MEDIA</h1>
<h2 class="text-2xl">NFSU ACTIVELY PARTICPATING IN SOLVING THE DELHI RIOT CASES.</h2> -->

<section class="bg-gray-100 min-h-screen" style="background-image: url('/src/assets/bg.png'); background-size: contain;">
	<article class="prose-base lg:prose-xl max-w-7xl mx-auto p-4 text-justify">
		<h2 class="text-orange-700">MEDIA</h2>
		

		
		<div class=" flex flex-nowrap space-x-5">
        
			{#each media as i}
			<MediaCard Title={i.Title} Description={i.Description} Image={i.Image} Link={i.Link} />
		{/each}
		
		</div>
	</article>
</section>
