<script>
	export let Title = 'Title';
	export let Description = 'Description';
	export let Link = '';
	export let know_more_link = '';
</script>

<div
	class=" h-full shadow-lg flex flex-nowrap border-solid border-blue-400 border-[1px] pt-2 hover:scale-105 transition-all duration-300 ease-linear rounded-2xl"
>
	<a href={Link}>
		<div class="px-6 py-4">
			<div class="font-bold text-2xl text-blue-800">{Title}</div>
			<p class="text-gray-700 text-lg mt-10">
				{Description}
			</p>
			<a class="hover:text-blue-600 hover:underline" href={know_more_link}>Know more</a>
		</div>
	</a>
</div>