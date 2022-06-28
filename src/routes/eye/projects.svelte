<script>
	import Card from '../../components/Card.svelte';
</script>

<section
	class="bg-gray-100 min-h-screen"
	style="background-image: url('/src/assets/bg.png'); background-size: contain;"
>
	<article class="prose-base lg:prose-xl max-w-7xl mx-auto p-4 text-justify text-gray-900">
		<h2 class="text-orange-900">Projects</h2>
		<p class="">Projects will be one of the most important activities of the Center.</p>
		<p>
			Experts from the Center and Industry will come out with challenging problem statements which
			will be assigned to the students of RVCE.
		</p>
		<p>Each project will have a team of students, one Faculty guide and a project mentor.</p>
		<p>
			As on now,about 6 projects have been assigned to different teams and they have already started
			the literature survey.
		</p>
		<p>
			There will be frequent interaction sessions with students, project guide and the mentor to
			assess the progress of the project work.
		</p>
		<p>
			Projects are related to developing A<strong
				>I and ML based algorithms to analyse and extract content</strong
			>
			in an intelligent manner from live video surveillance camera feeds.
		</p>
		<div>
			<Card
				Title="Automatic Animal Detection using Neural Classifier in CCTV Surveillance"
				Description="there is need to develop intelligent video analytics algorithms which work onthe  video  feeds  coming  from  the  CCTV  cameras  in  real  time  for  detection  of  wildanimals. On detection, alerts in the form of SMS/MMS should be sent to the security guards."
				Link="/src/assets/projects/wildanimal.pdf"
				/>
		</div>
	</article>
</section>
<!-- <iframe src="/src/assets/projects/wildanimal.pdf"  title="Animals" class="w-[50%] h-[75%]"></iframe> -->
