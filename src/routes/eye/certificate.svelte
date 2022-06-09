<script>
	// @ts-ignore
	import  Card from '/src/components/Card.svelte';
</script>

<section
	class="bg-gray-100 min-h-screen"
	style="background-image: url('/src/assets/bg.png'); background-size: contain;"
>
	<article class="prose-base lg:prose-2xl max-w-7xl mx-auto p-4 text-justify text-gray-900">
		<h3 class="text-blue-900">Certification Courses</h3>
		<p>
			The center had organized a 5 day certification course on "An overview of Video Surveillance
			systems" from 30th August to 3rd Sept 2021.
		</p>
		<div class=" flex flex-nowrap space-x-2">
			<Card
				Title="Certification Course Brochure"	
				Discription="5-DAYS CERTIFICATION COURSE
				ON
				AN OVERVIEW OF VIDEO
				SURVEILLANCE SYSTEMS"
				Link="/src/assets/Posters/Certification_course/FinalBrochure19thAug2021.pdf	"
			/>
		</div>
		<!-- <p>The program schedule is given below.</p> -->
		<!-- <a href="http://ccctvr.org/tentative_schedule_5day_course.pdf" class="text-blue-800 no-underline hover:underline">
			<h4>Tentative schedule of the 5 days course.</h4>
		</a> -->
	</article>
</section>
