<script>
	import { eye } from '../data/data';
	console.log(eye);
</script>

<section>
	<!-- <div class="skew skew-top mr-for-radius">
		<svg
			class="h-8 md:h-12 lg:h-20 w-full text-gray-50"
			viewBox="0 0 10 10"
			preserveAspectRatio="none"
		>
			<polygon fill="currentColor" points="0 0 10 10 0 10" />
		</svg>
	</div> -->
	<!-- <div class="skew skew-top ml-for-radius">
		<svg
			class="h-8 md:h-12 lg:h-20 w-full text-gray-50"
			viewBox="0 0 10 10"
			preserveAspectRatio="none"
		>
			<polygon fill="currentColor" points="0 10 10 0 10 10" />
		</svg>
	</div> -->
	<div class="py-2 lg:py-5 bg-gray-50 radius-for-skewed">
		<div class="container mx-auto px-4">
			<div class="mb-16 mx-auto text-center">
				<h2 class="text-4xl md:text-5xl font-bold">Center for CCTV Research</h2>
				<span class="text-orange-600 text-3xl font-bold">Research to Reality</span>
			</div>

			<div class="flex flex-wrap -mx-4">
				{#each eye as { title, description, svg }}
					<div class=" w-full md:w-1/2 lg:w-1/3 flex">
						<div
							class="w-full hover:scale-105 transition-all duration-300 ease-linear border-solid border-gray-900 rounded-lg border-2 m-3 p-3 "
						>
							<span class="mb-4 text-2xl text-orange-500 font-bold font-heading">
								{title}
								<!-- <svg
								class="w-16 h-16 mb-4 md:mb-6 bg-green-100 p-3 text-green-500 rounded "
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
							>
								<path
									stroke-linecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
								/>
							</svg> -->
							</span>
							<span class="mb-4 text-2xl font-bold font-heading" />
							<p class="text-gray-500 leading-loose">
								{description}
							</p>
						</div>
						<div />
					</div>
				{/each}
			</div>
		</div>
	</div>
	<div class="skew skew-bottom mr-for-radius">
		<svg
			class="h-8 md:h-12 lg:h-20 w-full text-gray-50"
			viewBox="0 0 10 10"
			preserveAspectRatio="none"
		>
			<polygon fill="currentColor" points="0 0 10 0 0 10" />
		</svg>
	</div>
	<div class="skew skew-bottom ml-for-radius">
		<svg
			class="h-8 md:h-12 lg:h-20 w-full text-gray-50"
			viewBox="0 0 10 10"
			preserveAspectRatio="none"
		>
			<polygon fill="currentColor" points="0 0 10 0 10 10" />
		</svg>
	</div>
</section>
