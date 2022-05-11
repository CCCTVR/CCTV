<script>
	export let Title = 'Title';
	export let Discription = 'Discription';
	export let Image = 'imges/media1.jpg';
	export let ImageAlt = 'ImageAlt';
	export let Tags = ['Tag1', 'Tag2', 'Tag3'];
</script>

<div class="max-w-sm rounded overflow-hidden shadow-lg">
	<img class="w-full" src={Image} alt={ImageAlt} />
	<div class="px-6 py-4">
		<div class="font-bold text-xl mb-2">{Title}</div>
		<p class="text-gray-700 text-base">
			{Discription}
		</p>
	</div>
	<div class="px-6 pt-4 pb-2">
		{#each Tags as tag}
			<span
				class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2"
				>{tag}</span
			>
		{/each}
	</div>
</div>
