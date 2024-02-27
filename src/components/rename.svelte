<script>
	// export let Title = 'Title';
	// export let Description = 'Description';
	// export let img = '';
	// export let points = ["point1", "point2", "point3"];
	export let left = {
		title: 'Title L',
		description: 'Description L',
		img: 'https://media-public.canva.com/9U9-4/MAD2909U9-4/2/t.png',
		points: ['point1 L', 'point2', 'point3']
	};
	export let right = {
		title: 'Title R',
		description: 'Description R',
		img: 'https://media-public.canva.com/9U9-4/MAD2909U9-4/2/t.png',
		points: ['point1 R', 'point2', 'point3']
	};
</script>

<section
	class="snap-y snap-mandatory h-screen overflow-scroll bg-black text-white w-screen  "
	style="background-image: url('assets/bg.png'); background-size: contain;"
>
	<div
		class="h-screen snap-start box-border flex flex-col items-center content-center px-8 mx-auto leading-6 text-black border-0 border-gray-300 border-solid md:flex-row max-w-7xl lg:px-16"
	>
		<!-- Image -->
		<div
			class="box-border relative w-full max-w-md px-4 mt-5 mb-4 -ml-5 text-center bg-no-repeat bg-contain border-solid md:ml-0 md:mt-0 md:max-w-none lg:mb-0 md:w-1/2 xl:pl-10"
		>
			<img src={right.img} class="p-2 pl-6 pr-5 xl:pl-16 xl:pr-20 w-full " alt="" />
		</div>

		<!-- Content -->
		<div
			class="box-border order-first w-full text-black border-solid md:w-1/2 md:pl-10 md:order-none"
		>
			<h2
				class="m-0 text-xl font-semibold leading-tight border-0 border-gray-300 lg:text-3xl md:text-2xl font-poppins"
			>
				{right.title}
			</h2>
			<p
				class="pt-4  m-0 leading-7 text-gray-700 border-0 border-gray-300 sm:pr-12 xl:pr-32 lg:text-lg"
			>
				{right.description}
			</p>
			<ul class="p-0 m-0 leading-6 border-0 border-gray-300">
				{#each right.points as point}
					<li class="box-border relative py-1 pl-0 text-left text-gray-500 border-solid ">
						<span
							class="inline-flex items-center justify-center w-6 h-6 mr-2 text-white bg-orange-300 rounded-full"
							><span class="text-sm font-bold">✓</span></span
						>
						{point}
					</li>
				{/each}
			</ul>
		</div>
		<!-- End  Content -->
	</div>
	<div
		class="h-screen  snap-start box-border flex flex-col items-center content-center px-8 mx-auto mt-2 leading-6 text-black border-0 border-gray-300 border-solid md:mt-20 xl:mt-0 md:flex-row max-w-7xl lg:px-16"
	>
		<div class="box-border w-full h-screen text-black border-solid md:w-1/2 md:pl-6 xl:pl-32">
			<h2
				class="m-0 text-xl font-semibold leading-tight border-0 border-gray-300 lg:text-3xl md:text-2xl"
			>
				{left.title}
			</h2>
			<p class="pt-4 pb-8 m-0 leading-7 text-gray-700 border-0 border-gray-300 sm:pr-10 lg:text-lg">
				{left.description}
			</p>
			<ul class="p-0 m-0 leading-6 border-0 border-gray-300">
				{#each left.points as point}
					<li class="box-border relative py-1 pl-0 text-left text-gray-500 border-solid ">
						<span
							class="inline-flex items-center justify-center w-6 h-6 mr-2 text-white bg-orange-300 rounded-full"
							><span class="text-sm font-bold">✓</span></span
						>
						{point}
					</li>
				{/each}
			</ul>
		</div>
		<!-- End  Content -->

		<!-- Image -->
		<div
			class="box-border relative w-full h-screen max-w-md px-4 mt-10 mb-4 text-center bg-no-repeat bg-contain border-solid md:mt-0 md:max-w-none lg:mb-0 md:w-1/2"
		>
			<img
				src="https://media-public.canva.com/pAozY/MAEe6bpAozY/2/t.png"
				class="pl-4 sm:pr-10 xl:pl-10 lg:pr-32 w-full"
				alt=""
			/>
		</div>
	</div>
</section>
