<script>
	// on a tag apply text-indigo-500 underline
	export let qlist = [
		{
			question: 'What is the difference between analog and IP cameras',
			answer:
				'The difference between analog and IP security cameras is mainly in how video footage moves from the cameras to the video recorder. For IP cameras, the video is transferred digitally over a network. ... Analog cameras record footage and send the signal via a coaxial cable directly to a DVR (Digital Video Recorder).'
		}
	];
</script>

<section class="py-24 ">
	<div class="px-8 mx-auto max-w-7xl lg:px-16">
		<h2 class="mb-4 text-xl font-bold md:text-4xl text-orange-700">FAQ</h2>
		<div class="grid grid-cols-1 gap-0 text-gray-800 md:grid-cols-2 md:gap-x-16">
			{#each qlist as { question, answer }}
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
