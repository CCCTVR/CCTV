<script>
	export let Title = 'Title';
	export let Discription = 'Discription';
	export let Link = '';
</script>

<div
	class=" h-full shadow-lg flex flex-nowrap border-solid border-blue-400 border-[1px] pt-2 hover:scale-105 transition-all duration-300 ease-linear rounded-2xl text-justify"
>
	<a href={Link} target="_blank">
		<div class="px-6 py-4">
			<div class="font-bold text-2xl ">{Title}</div>
			<p class="text-gray-700 text-lg mt-10">
				{Discription}
			</p>
		</div>
	</a>
</div>
