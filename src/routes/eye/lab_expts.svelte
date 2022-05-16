<script>
	// @ts-ignore
import {expts} from '/src/data/data';
import Card from '/src/components/Card.svelte';
</script>
<section class="bg-gray-100 min-h-screen">
	<article class="prose-base lg:prose-2xl max-w-7xl mx-auto p-4 text-justify">
		<h2>Lab Expriments</h2>
		<ul class="list-disc">
			<li>
				<a href="http://ccctvr.org/first_expt_mca.pdf" class="text-blue-800 no-underline hover:underline">
					<h4>First Experiment</h4>
				</a>
			</li>
			<li>
				<a href="http://ccctvr.org/second_expt_mca.pdf" class="text-blue-800 no-underline hover:underline">
					<h4>Second Experiment</h4>
				</a>
			</li>
			<li>
				<a href="http://ccctvr.org/third_expt_mca.pdf" class="text-blue-800 no-underline hover:underline">
					<h4>Third Experiment</h4>
				</a>
			</li>
			<li>
				<a href="http://ccctvr.org/fourth_expt.pdf" class="text-blue-800 no-underline hover:underline">
					<h4>Fourth Experiment</h4>
				</a>
			</li>
			<li>
				<a href="http://ccctvr.org/fifth_expt.pdf" class="text-blue-800 no-underline hover:underline">
					<h4>Fifth Experiment</h4>
				</a>
			</li>
			<li>
				<a href="http://ccctvr.org/sixth_expt.pdf" class="text-blue-800 no-underline hover:underline">
					<h4>Sixth Experiment</h4>
				</a>
			</li>
			<li>
				<a href="http://ccctvr.org/setup_analog_cctv.pdf" class="text-blue-800 no-underline hover:underline">
					<h4>SETTING UP OF AN ANALOG SURVEILLANCE SYSTEM</h4>
				</a>
			</li>
			<li>
				<a href="http://ccctvr.org/dvr.pdf" class="text-blue-800 no-underline hover:underline">
					<h4>Experiments on DVR based CCTV Camera</h4>
				</a>
			</li>
			<li>
				<a href="http://ccctvr.org/comsur_expt_setup.pdf" class="text-blue-800 no-underline hover:underline">
					<h4>Getting Started with COM-SUR</h4>
				</a>
			</li>
		</ul>
		<!-- <div class=" flex flex-nowrap space-x-5 text-justify">
			{#each expts as e }
			<Card Title={e.title} Discription={e.description} Link={e.link} />
			{/each}
		</div> -->
	</article>
</section>
