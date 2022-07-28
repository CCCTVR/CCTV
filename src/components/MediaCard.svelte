<script>
	export let Title = 'Title';
	export let Description = 'Description';
	export let Image = '/static/assets/images/media1.jpg';
	export let Link = ''
</script>

<a href={Link} target="__blank">
<div class="max-w-sm rounded overflow-hidden shadow-lg hover:scale-105 transition-all duration-300 ease-linear h-[577px]">
	<img class="w-full h-[213px]" src={Image} alt=" "/>
	<div class="px-6 py-4 overflow-scroll scrollbar-hide ">
		<div class="font-bold text-lg mb-1 text-blue-800 ">{Title}</div>
		<p class="text-gray-900 text-base ">
			{Description}
		</p>
	</div>
	</div>
</a>
