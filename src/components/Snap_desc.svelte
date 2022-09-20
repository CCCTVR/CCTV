<!-- Section 1 -->
<script>
	export let Title = 'Title';
	export let Description = 'Description';
	export let img = '';
</script>

<section
	class="h-screen overflow-scroll bg-black text-white w-full snap-start  scrollbar-hide"
	style="background-image: url('assets/bg.png'); background-size: contain;"
>
	<div
		class="h-screen box-border flex flex-col items-center content-center px-8 mx-auto leading-6 text-black border-0 border-gray-300 border-solid md:flex-row max-w-7xl lg:px-16"
	>
		<!-- Image -->
		<div
			class="box-border relative w-full max-w-md px-4 mt-5 mb-4 -ml-5 text-center bg-no-repeat bg-contain border-solid md:ml-0 md:mt-0 md:max-w-none lg:mb-0 md:w-1/2 xl:pl-10"
		>
			<!-- p-2 pl-6 pr-5 xl:pl-16 xl:pr-20 -->
			<img src={img} class=" w-full " alt="" />
		</div>

		<!-- Content -->
		<div
			class="box-border order-first w-full text-black border-solid md:w-1/2 md:pl-10 md:order-none"
		>
			<h2
				class="m-0 text-xl font-semibold leading-tight border-0 border-gray-300 lg:text-3xl md:text-2xl font-poppins"
			>
				{Title}
			</h2>
			<p
				class="pt-4  m-0 leading-7 text-gray-700 border-0 border-gray-300 sm:pr-12 xl:pr-32 lg:text-lg"
			>
				{Description}
			</p>
		</div>
		<!-- End  Content -->
	</div>
</section>
