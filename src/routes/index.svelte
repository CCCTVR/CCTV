<script>
	import { eye, webinars_2021, webinars_2022 } from '../data/data';
	import Card from '../components/Card.svelte';
	import '../data/data.js';
	import Typewriter from 'svelte-typewriter';
	import Marquee from 'svelte-fast-marquee';
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
	<div class="text-2xl text-black pt-4 ">
		<Marquee pauseOnHover={true}>
			<p class=" px-5 text-orange-500 font-bold">Recent Webinars:</p>

			{#each webinars_2022 as wb}
				<a href={wb.link} target="_blank" class="hover:text-orange-500 hover:underline ">
					<p class="px-5 ">{wb.title}</p>
				</a>
			{/each}
			<p class="px-5" />
		</Marquee>
	</div>

	<div class="py-2 lg:py-5  radius-for-skewed">
		<div class="container mx-auto px-5">
			<div class="mb-7 mx-auto flex justify-center">
				<!-- <h2 class="text-4xl md:text-5xl font-bold">Center for CCTV Research</h2> bg gray
				<span class="text-black-600 text-3xl font-bold">Research to Reality</span> -->
				<img src="/src/assets/text_img.PNG" alt="text" class="w-[70%]" />
			</div>
			<div class="w-[100%] flex flex-col md:flex-row space-x-7">
				<div class="flex-1 ">
					<div class="flex items-center  text-[1.7rem] h-full  text-blue-900 ">
						<span class=" text-justify font-sans	">
							<h1 class="flex justify-center text-4xl text-orange-500 font-bold ">Vision</h1>
							<br />
							<strong>
								An integrated research facility to bridge the gap in knowledge, practice, protocols,
								testing, expriments, training, certification and expertise in video surveillance.
							</strong>
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
			<div class="w-[100%] flex flex-col md:flex-row space-x-7 pb-2">
				<div class="flex flex-row p-1 pt-8">
					<div class="object-left">
						<img src="/src/assets/stakeholders.png" alt="" class="w-[47rem] " />
					</div>
				</div>
				<div class="flex-1 pt-5">
					<div class="flex items-center  text-[2.2rem] h-full text-orange-500">
						<div class=" font-bold  text-center">
							Multi Stakeholder Research Facility with
							<div class="">
								<Typewriter loop interval={40} unwriteInterval={40}>
									<span class="">COMSUR</span>
									<span class="">NFSU</span>
									<span>Videonetics Technology</span>
									<span>Mistral Solutions</span>
									<span>Mialo Technologies</span>
									<span>TechConPro</span>
								</Typewriter>
							</div>
							<div class="flex flex-row pt-[2rem]">
								<div>
									<img
										src="/src/assets/COMSUR_logo.jpeg"
										alt="COMSUR logo"
										class="w-[15rem] pr-[1rem] h-24"
									/>
								</div>
								<div>
									<img
										src="/src/assets/NFSU_logo.png"
										alt="NFSU logo"
										class="w-[15rem] pr-[1rem] h-24"
									/>
								</div>
								<div>
									<img
										src="/src/assets/videonetics_logo.PNG"
										alt="COMSUR logo"
										class="w-[15rem] pr-[1rem] h-24"
									/>
								</div>
							</div>
							<div class="flex flex-row pt-[2rem]">
								<div>
									<img
										src="/src/assets/mistral_logo.PNG"
										alt="COMSUR logo"
										class="w-[15rem] pr-[1rem] h-24"
									/>
								</div>
								<div>
									<img
										src="/src/assets/mialo_logo.PNG"
										alt="COMSUR logo"
										class="w-[15rem] pr-[1rem] h-24"
									/>
								</div>
								<div>
									<img
										src="/src/assets/techonpro_logo.PNG"
										alt="COMSUR logo"
										class="w-[15rem] pr-[1rem] h-24"
									/>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			<!-- <div class="bg-orange-500 mt-5">
				<div class="flex flex-row space-x-60 items-center h-full">
					<div class="w-[11rem] h-[11rem] px-5 py-[1rem]">
						<img
							src="/src/assets/sicon1.png"
							alt=""
							class="w-[100%] hover:scale-125 transition-all duration-300 ease-linear rounded-full  border-solid border-4 border-orange-500"
						/>
					</div>
					<div class="w-[11rem] h-[11rem] px-5 py-[1rem]">
						<img
							src="/src/assets/sicon2.png"
							alt=""
							class="w-[100%] hover:scale-125 transition-all duration-300 ease-linear rounded-full  border-solid border-4 border-orange-500"
						/>
					</div>
					<div class="w-[11rem] h-[11rem] px-5 py-[1rem]">
						<img
							src="/src/assets/sicon3.png"
							alt=""
							class="w-[100%] hover:scale-125 transition-all duration-300 ease-linear rounded-full  border-solid border-4 border-orange-500"
						/>
					</div>
					<div class="w-[11rem] h-[11rem] px-5 py-[1rem]">
						<img
							src="/src/assets/sicon4.png"
							alt=""
							class="w-[100%] hover:scale-125 transition-all duration-300 ease-linear rounded-full  border-solid border-4 border-orange-500"
						/>
					</div>
				</div>
			</div> -->

			<div class="bg-orange-500 mt-5">
				<div class="grid md:grid-cols-2 lg:grid-cols-4 gap-2 mx-auto p-5">
					<div class="w-[11rem] h-[11rem]  mx-auto">
						<img
							src="/src/assets/sicon1.png"
							alt=""
							class="w-[100%] hover:scale-125 transition-all duration-300 ease-linear rounded-full  border-solid border-4 border-orange-500"
						/>
					</div>
					<div class="w-[11rem] h-[11rem] mx-auto ">
						<img
							src="/src/assets/sicon2.png"
							alt=""
							class="w-[100%] hover:scale-125 transition-all duration-300 ease-linear rounded-full  border-solid border-4 border-orange-500"
						/>
					</div>
					<div class="w-[11rem] h-[11rem] mx-auto ">
						<img
							src="/src/assets/sicon3.png"
							alt=""
							class="w-[100%] hover:scale-125 transition-all duration-300 ease-linear rounded-full  border-solid border-4 border-orange-500"
						/>
					</div>
					<div class="w-[11rem] h-[11rem] mx-auto ">
						<img
							src="/src/assets/sicon4.png"
							alt=""
							class="w-[100%] hover:scale-125 transition-all duration-300 ease-linear rounded-full  border-solid border-4 border-orange-500"
						/>
					</div>
				</div>
			</div>

			<div class="flex justify-center mt-5 ">
				<div class="flex">
					<div class="grid grid-cols-1 lg:grid-cols-2 gap-4">
						{#each eye as eye}
							<div class="m-5 col-span-1 text-justify">
								<Card Title={eye.title} Description={eye.description} Link={eye.link} />
							</div>
						{/each}
					</div>
				</div>
			</div>
		</div>
	</div>
</section>
<section />

<style>
	@import url('https://fonts.googleapis.com/css2?family=Oxygen&display=swap');
</style>
