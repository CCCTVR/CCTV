<script>
import { webinars_2021, webinars_2022 } from '../data/data';
import Card from '../components/Card.svelte';
import '../data/data.js';
import CarouselCard from '../components/CarouselCard.svelte';

</script>
<section class="bg-gray-100 min-h-screen" style="background-image: url('/src/assets/bg.png'); background-size: contain;">
	<article class="prose-base lg:prose-2xl max-w-7xl mx-auto p-4 text-justify">
		<h2 class="text-blue-900">Webinars</h2>
		<p class="text-black">
			The Center will be organising webinars once a month and the speakers are drawn from Academic
			Institutions, Govt. organisations and Industries. Topics for the webinars are mainly related
			to Video surveillance ,forensics and analytics domain. The first webinar was held on 22nd
			April, 2021 delivered by Dr. Surubhi Mathur, senior Assistant Professor, National Forensics
			Science University, Gujarat on “Forensic Analysis of CCTV/Video evidence. Link for the
			recorded talk: <a
			class="text-blue-800 no-underline hover:underline"
			href="https://pib.gov.in/PressReleasePage.aspx?PRID=1598772"
			target="_blank">link</a>
		</p>
		<!-- 2021 webinars -->
			<h3 class="text-blue-800">2021</h3>
			<div class="flex justify-center mt-40 ">
				<div class="flex">
					<div class="grid grid-cols-4 lg:grid-cols-4 gap-4">
						{#each webinars_2021 as webinar}
							<div class="m-5 col-span-1 text-justify">
								<Card Title={webinar.title} Discription={webinar.description} Link={webinar.link} />
							</div>
						{/each}
					</div>
				</div>
			</div>
		<!-- 2022 webinars -->
			<h3 class="text-blue-800">2022</h3>
			<div class="flex justify-center mt-40 ">
				<div class="flex">
					<div class="grid grid-cols-4 lg:grid-cols-4 gap-4">
						{#each webinars_2022 as webinar}
							<div class="m-5 col-span-1 text-justify">
								<Card Title={webinar.title} Discription={webinar.description} Link={webinar.link} />
							</div>
						{/each}
					</div>
				</div>
			</div>
			<div>
				<p>test</p>
				<CarouselCard />
			</div>
	</article>
</section>
