<script>
	import { eye } from '../data/data';
	import Card from '../components/Card.svelte';
	import '../data/data.js';
	console.log(eye);
</script>

<section style="background-image: url('/src/assets/bg.png'); background-size: contain;">
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
	<div class="py-2 lg:py-5  radius-for-skewed">
		<div class="container mx-auto px-5">
			<div class="mb-7 mx-auto flex justify-center">
				<!-- <h2 class="text-4xl md:text-5xl font-bold">Center for CCTV Research</h2> bg gray
				<span class="text-black-600 text-3xl font-bold">Research to Reality</span> -->
				<img src="/src/assets/text_img.PNG" alt="text" class="w-[70%]" />
			</div>
			<div class="w-[100%] flex flex-row space-x-7">
				
				<div class="flex-1 ">
					<div class="flex items-center  text-[1.7rem] h-full  text-blue-900">
					
						<span class="text-justify font-serif"
							>An integrated research facility to bridge the gap in knowledge, practice, protocols,
							testing, expriments, training, certification and expertise in video surveillance.
						</span>
					</div>
				</div>
				<div class="flex flex-row p-1 ">
					<!-- <div class="object-right">
						<span><img src="/src/assets/cctv_img1.png" alt="" class="w-[22rem] " /></span>
						<span><img src="/src/assets/cctv_img2.png" alt="" class="w-[22rem] " /></span>
					</div>
					<div class="flex flex-col p-1 object-right">
						<span><img src="/src/assets/cctv_img3.png" alt="" class="w-[22rem] " /></span>
						<span><img src="/src/assets/cctv_img4.png" alt="" class="w-[22rem] " /></span>
					</div> -->
					<div class="object-right">
						<img src="/src/assets/collage.png" alt="" class="w-[45rem]" />
					</div>
				</div>
			</div>
			<div class="w-[100%] flex flex-row space-x-7">
				<div class="flex flex-row p-1 pt-8">
					<div class="object-left">
						<img src="/src/assets/stakeholders.png" alt="" class="w-[47rem]" />
					</div>
				</div>
				<div class="flex-1 pt-5 ">
					<div class="flex items-center  text-[2.2rem] h-full  text-blue-900">
						<span class="text-justify ">Multi Stakeholder Research Facility </span>
					</div>
				</div>
			</div>
			<div class="flex justify-center mt-40 ">
				<div class="flex">
					<div class="grid grid-cols-1 lg:grid-cols-2 gap-4">
						{#each eye as eye}
							<div class="m-5 col-span-1 text-justify">
								<Card Title={eye.title} Discription={eye.description} Link={eye.link} />
							</div>
						{/each}
					</div>
				</div>
			</div>
		</div>
	</div>
</section>
