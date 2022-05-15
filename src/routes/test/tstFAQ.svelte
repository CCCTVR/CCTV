<script>
	// on a tag apply text-indigo-500 underline
	let QuestionsHedding = 'CCTV';
	import { qlist1 } from '../../data/faq.js';
</script>

<section class="py-24 bg-white">
	<div class="px-8 mx-auto max-w-7xl lg:px-16">
		<h2 class="mb-4 text-xl font-bold md:text-4xl">
			{QuestionsHedding}
		</h2>
		<div class="grid grid-cols-1 gap-0 text-gray-600 md:grid-cols-2 md:gap-x-16">
			{#each qlist1 as { question, answer }}
				<div>
					<h5 class="mt-10 text-xl mb-3 font-semibold text-gray-900">{question}</h5>
					<p>
						{@html answer}
					</p>
				</div>
			{/each}
		</div>
	</div>
</section>
