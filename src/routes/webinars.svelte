<script>
	import { webinars_2021, webinars_2022 } from '../data/data';
	import '../data/data.js';
	import CarouselCard from '../components/CarouselCard.svelte';
</script>

<section
	class="bg-gray-100 min-h-screen"
	style="background-image: url('/src/assets/bg.png'); background-size: contain;"
>
	<article class="prose-base lg:prose-xl max-w-7xl mx-auto p-4 text-justify">
		<h2 class="text-orange-700">Webinars</h2>
		<p class="text-black">
			The Center will be organising webinars once a month and the speakers are drawn from Academic
			Institutions, Govt. organisations and Industries. Topics for the webinars are mainly related
			to Video surveillance ,forensics and analytics domain. The first webinar was held on 22nd
			April, 2021 delivered by Dr. Surubhi Mathur, senior Assistant Professor, National Forensics
			Science University, Gujarat on “Forensic Analysis of CCTV/Video evidence. Link for the
			recorded talk: <a
				class="text-blue-800 no-underline hover:underline"
				href="https://pib.gov.in/PressReleasePage.aspx?PRID=1598772"
				target="_blank">link</a
			>
		</p>
	</article>
	<article class="max-w-7xl mx-auto p-4">
		<h3 class="text-orange-600 text-3xl">2021</h3>
		<div class="">
			<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 ">
				{#each webinars_2021 as webinar}
					<div class="-mx-1 md:my-2">
						<CarouselCard {webinar} />
					</div>
				{/each}
			</div>
		</div>
		<h3 class="text-orange-600 text-3xl">2022</h3>
		<div class="mx-auto">
			<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 ">
				{#each webinars_2022 as webinar}
					<div class="-mx-1 md:my-2">
						<CarouselCard {webinar} />
					</div>
				{/each}
			</div>
		</div>
	</article>
</section>
