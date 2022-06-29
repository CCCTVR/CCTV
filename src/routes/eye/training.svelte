<script>
	import { trainingPrograms } from '../../data/data';
	import Card from '../../components/Card.svelte';
</script>

<section
	class="bg-gray-100 min-h-screen justify-center"
	style="background-image: url('/src/assets/bg.png'); background-size: contain;"
>
	<article class="prose-base lg:prose-xl max-w-7xl mx-auto p-4 text-justify">
		<h2><span class="justify-center text-orange-700">Training Programs</span></h2>
		<div class="grid grid-cols-1 lg:grid-cols-2 gap-4">
			{#each trainingPrograms as tp}
				<Card Title={tp.title} Description={tp.description} Link={tp.link} />
			{/each}
		</div>
	</article>
</section>
