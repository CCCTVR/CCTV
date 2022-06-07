<script>
import { each } from "svelte/internal";

export let webinar = {
		title: 'Forensic Analysis of CCTV/Video evidence',
		description: [
			'Talk 1: Objectives of Center for CCTV Research Sanjay Sahay, IPS (Retd.) Founder & Mentor Center for CCTV Research',
			'Talk 2: Forensic analysis of CCTV/Video evidence Dr. Surbhi Mathur Sr. Asst. Prof. NFSU, Gujarat',
			'Moderator Ms. Rashmi H. Coordinator, Center for CCTV Research'
		],
		link: 'src/assets/Posters/Webinars/Series 2021 -Webinar 1.pdf',
		speaker_img: [
			{img: '/src/assets/webinar_speakers2021/web1_sp1.jpg',id:1},
			{img: '/src/assets/webinar_speakers2021/web1_sp2.jpg',id:2},
			{img: '/src/assets/webinar_speakers2021/web1_sp3.jpg',id:3}
		],
		id:20211
	};
</script>

    <a href={webinar.link} target="_blank">
      <div class="card w-96 h-[30rem] shadow-xl border-solid border-blue-400 border-[2px] pt-2 hover:scale-105 transition-all duration-300 ease-linear rounded-2xl">
        <figure class="">
          <div class="carousel w-full">
            {#each webinar.speaker_img as spimg}
              <div id="item{webinar.id}{spimg.id}" class="carousel-item w-full">
                <img src={spimg.img} class="w-full" alt="speaker"/>
              </div>
            {/each}
          </div>
        </figure>
        <div class="flex justify-center w-full py-3 gap-2">
          {#each webinar.speaker_img as spimg}
          <a href="#item{webinar.id}{spimg.id}" class="btn btn-xs bg-white">{spimg.id}</a>
          {/each}
      </div>
        <div class="card-body overflow-scroll scrollbar-hide">
          <h2 class="card-title">{webinar.title}</h2>
          {#each webinar.description as d}
          <p>{d}</p>
          {/each}
        </div>
      </div>
    </a>

  