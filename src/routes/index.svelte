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
						<span class="text-justify font-serif">
							<h1 class="flex justify-center text-2xl font-bold">Vision</h1>
							<br />
							An integrated research facility to bridge the gap in knowledge, practice, protocols,
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
			<div class="w-[100%] flex flex-row space-x-7 pb-2">
				<div class="flex flex-row p-1 pt-8">
					<div class="object-left">
						<img src="/src/assets/stakeholders.png" alt="" class="w-[47rem] " />
					</div>
				</div>
				<div class="flex-1 pt-5">
					<div class="flex items-center  text-[2.2rem] h-full text-blue-900">
						<div class="text-justify">
							Multi Stakeholder Research Facility
							<div class="flex flex-row pt-[2rem]">
								<div>
									<img src="/src/assets/COMSUR_logo.jpeg" alt="COMSUR logo" class="w-[15rem] pr-[4rem]">

									
								</div>
								<div>
									<img src="/src/assets/NFSU_logo.png" alt="NFSU logo" class="w-[15rem]" />
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div class="bg-orange-500 mt-5">
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
			</div>

			<div class="flex justify-center mt-5 ">
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
<section>
	<footer class="footer p-10 bg-base-200 text-base-content">
		<div class="pt-[2rem]">
			<!-- <img class="w-[20%]" src="src/assets/CCTV_eye.jpeg" alt="CCTVR logo"/> -->
			<p>CENTER FOR CCTV RESEARCH<br />Research to Reality</p>
			<div class="grid grid-flow-col gap-4">
				<a href="https://twitter.com/?lang=en" target="_blank"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" class="fill-current"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path></svg></a> 
				<a href="https://www.youtube.com" target="_blank"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" class="fill-current"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path></svg></a>
				<a href="https://www.facebook.com/" target="_blank"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" class="fill-current"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path></svg></a>
			</div>
			</div>


		<div>
			<span class="footer-title">Address</span>
			<div class="">
				<p class="">CENTER FOR CCTV RESEARCH</p>
				<p>RV COLLEGE OF ENGINEERING CAMPUS</p>
				<p>Mysore Road, RV Vidyaniketan, Post</p>
				<p>Bengaluru, Karnataka 560059</p>
			</div>
		</div>
		<div>
			<span class="footer-title">Email</span>
			<p><a class="link link-hover" href="mailto:contact@ccctvr.org">contact@ccctvr.org</a></p>
		</div>
		<div>
			<span class="footer-title">Contact</span>
			<p class="">Dr. Azra Nasreen</p>
			<p>Center Coordinator</p>
		</div>
		<div>
			<span class="footer-title">Know More</span>
			<a class="link link-hover" href="/aboutus">About us</a>
			<!-- <a class="link link-hover" href="/dreamteam">Team</a> -->
			<!-- <a class="link link-hover" href="/eye/consultancy"></a> -->
		</div>
	</footer>
</section>
