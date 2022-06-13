<script>
	import Card_know_more from '../../components/Card_know_more.svelte'
</script>

<section
	class="bg-gray-100 min-h-screen"
	style="background-image: url('/src/assets/bg.png'); background-size: contain;"
>
	<article class="prose-base lg:prose-xl max-w-7xl mx-auto p-4 text-justify text-gray-900">
		<h2 class="text-blue-900">Skill Development Programmes</h2>
		<p>
			The country is witnessing huge number of video surveillance installations coming up and there
			is a great need for trained manpower in this field.
		</p>
		<p>CCTV system integrators are not able to train them and put them on the field.</p>
		<p>
			Hence this activity will be taken up by the center by way of conducting skill development
			programmes providing hands on training in the domain of CCTV surveillance. Essentially,the
			programme comprises of two modules which are briefly explained below.
		</p>

		<img src="/src/assets/photos/Skill Development/sd10.jpeg" alt="" class="w-[50%] h-auto rounded-md mx-auto" />
		<p class="text-center font-medium ">Skill development activity 1</p>
		<img src="/src/assets/photos/Skill Development/sd9.jpeg" alt="" class="w-[50%] h-[50%] rounded-md mx-auto" />
		<p class="text-center font-medium ">Skill development activity 2</p>
		<div class=" flex flex-nowrap space-x-2">
			<Card_know_more
				Title="Skill development Brochure"
				Description="Topics that will be covered are basics of analog
			and IP cameras, Digital Video Recorders (DVR),
			Network Video Recorders (NVR), storage,
			networking, (wired and wireless) power and data
			cabling, central monitoring station" 
				Link="/src/assets/Posters/Skill_development/Brochure-Skill Development-Program2021.pdf"
				know_more_link="/eye/skill_dev_module"
			/>
		</div>

		<h3 class="text-blue-800">Comsur</h3>
		<p>
			This is a tool to carry out <strong>
				auditing of video footages from live camera feeds, Video quality enhancement , automatic
				video data backup on the cloud
			</strong> (in case of failure of recorders for data recovery) and automatic incident report being
			generated in MS power point.
		</p>

		<h3 class="text-blue-800">Video Mangagement Software [VMS]</h3>
		<p>
			This software is the operation centre of large video surveillance systems responsible for
			capturing, monitoring and recording of all the live camera feeds on to a central or
			distributed network storage devices. It has <strong>
				many other rich features including book marking, event detections, generating alarms and
				messages etc
			</strong>.
		</p>
		<p>This software has been developed and supplied by M/S VIDEONETICS, India.</p>

		<h3 class="text-blue-800">GateBOT</h3>
		<p>
			It is an <strong>
				ANPR(Automatic Number Plate recognition) software solution which is powered, real time edge
				processing based end to end fully automated system
			</strong> backed by artificial intelligence to efficiently identify, monitor and authorise vehicles
			entering or exiting gated premises.
		</p>
		<p>
			It detects entry and exit of vehicles and stores their details including license plate number
			vehicle type, in/out time etc in the database.
		</p>
		<p>
			It can be seamlessly integrated with existing/new CCTV cameras, boom barriers, automatic
			gates, traffic lights, other audio video alert systems, and QR reader to deliver a complete
			unmanned experience.
		</p>
		<p>
			It performs real time edge processing without costly servers with optional internet
			connection. Runs on a standard Windows platform.
		</p>
	</article>
</section>
