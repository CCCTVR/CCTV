<script>
	import Gallery from '../components/Gallery.svelte';
	import { GalleryImages } from '../data/data.js';
import { each, onMount } from 'svelte/internal';
import Carousel from 'svelte-carousel'
// onMount(async () => {
//     const module = await import('svelte-carousel');
//     // @ts-ignore
//     Carousel = module.default;
//   });
/**
* @type {Carousel}
*/
let carousel; // for calling methods of the carousel instance
const handleNextClick = () => {
  carousel.goToNext()
}
	
</script>
<section class="min-h-screen" style="background-image: url('/src/assets/bg.png'); background-size: contain;">
	<article class="prose-base lg:prose-2xl max-w-7xl mx-auto p-4 text-justify">
		<h2 class="text-blue-800">Gallery</h2>
	

	<div class="pt-[1rem] flex">
		<Carousel
		  bind:this={carousel}
		  autoplay
  autoplayDuration={2000}
  
		>
		  <div class="img-container"><img src="/src/assets/images/img1.jpg" alt="" class="w-[70%] px-20">
			<p class="text-2xl text-center pt-4 ">Innaguration of the CCTV research center by the dignitaries</p>
		</div>
		  <div><img src="/src/assets/images/img2.jpg" alt="" class="w-[70%] px-20"><p class="text-2xl text-center pt-4"></p></div>
		  <div><img src="/src/assets/images/img3.jpg" alt="" class="w-[70%] px-20"><p class="text-2xl text-center pt-4"></p></div>
		  <div><img src="/src/assets/images/img9.jpg" alt="" class="w-[70%] px-20"><p class="text-2xl text-center pt-4">Shri. Sanjay Sahay lighting the lamp</p></div>
		</Carousel>
		
	</div>
</article>
</section>