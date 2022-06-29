<script>
	export let Title = 'Title';
	export let Description = 'Description';
	export let Image = 'images/media1.jpg';
	export let Link = ''
</script>

<a href={Link} target="__blank">
<div class="max-w-sm rounded overflow-hidden shadow-lg hover:scale-105 transition-all duration-300 ease-linear">
	<img class="w-full" src={Image}  />
	<div class="px-6 py-4">
		<div class="font-bold text-xl mb-2 text-blue-800 ">{Title}</div>
		<p class="text-gray-900 text-base">
			{Description}
		</p>
	</div>
	<div class="px-6 pt-4 pb-2">
		</div>
	</div>
</a>
