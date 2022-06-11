<script>
	import {expts} from '../../data/data';
	import Card from '../../components/Card.svelte';
</script>
<section class="bg-gray-100 min-h-screen" style="background-image: url('/src/assets/bg.png'); background-size: contain;">
	<article class="prose-base lg:prose-2xl max-w-7xl mx-auto p-4 text-justify">
		<h2 class="text-blue-900">Lab Expriments</h2>
		
		<!-- <div class=" flex flex-nowrap space-x-5 text-justify">
			{#each expts as e }
			<Card Title={e.title} Description={e.description} Link={e.link} />
			{/each}
		</div> -->

		<div class="flex justify-center">
			<div class="grid grid-cols-3 lg:grid-cols-4 gap-4">
				{#each expts as e }
					<Card Title={e.title} Description={e.description} Link={e.link}/>
				{/each}
			</div>
	</div>
	</article>
</section>
