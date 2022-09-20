<script>
	import { expts } from '../../data/data';
	import Card from '../../components/Card.svelte';
	import FlipCard from '../../components/FlipCard.svelte';
</script>

<section
	class="bg-gray-100 min-h-screen"
	style="background-image: url('assets/bg.png'); background-size: contain;"
>
	<article class="prose-base lg:prose-xl max-w-7xl mx-auto p-4 text-justify">
		<h2 class="text-orange-700">Lab Experiments</h2>

		<!-- OLD CARD -->
		<!-- <div class="flex justify-center">
			<div class="grid grid-cols-3 lg:grid-cols-4 gap-4">
				{#each expts as e }
					<Card Title={e.title} Description={e.description} Link={e.link}/>
				{/each}
			</div>
	</div> -->

		<div class="flex justify-center">
			<div class="grid grid-cols-3 lg:grid-cols-4 gap-7">
				{#each expts as e}
					<FlipCard Title={e.description} Description="" Link={e.link} />
				{/each}
			</div>
		</div>
	</article>
</section>
