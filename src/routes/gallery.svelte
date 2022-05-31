<script>
	import Gallery from '../components/Gallery.svelte';
	import { GalleryImages } from '../data/data.js';
	import { each } from 'svelte/internal';
</script>
<section class="min-h-screen" style="background-image: url('/src/assets/bg.png'); background-size: contain;">
	<article class="prose-base lg:prose-2xl max-w-7xl mx-auto p-4 text-justify">
		<h2 class="text-blue-800">Gallery</h2>
	

	<!-- <div class="pt-[1rem] flex">
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
		
	</div> -->

	<div class="carousel w-full">
		<div id="slide1" class="carousel-item relative w-full">
		  <img src="/src/assets/images/img1.jpg" class="w-full" />
		  <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
			<a href="#slide4" class="btn btn-circle">❮</a> 
			<a href="#slide2" class="btn btn-circle">❯</a>
		  </div>
		  
		</div> 
		<div id="slide2" class="carousel-item relative w-full">
		  <img src="/src/assets/images/img2.jpg" class="w-full" />
		  <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
			<a href="#slide1" class="btn btn-circle">❮</a> 
			<a href="#slide3" class="btn btn-circle">❯</a>
		  </div>
		</div> 
		<div id="slide3" class="carousel-item relative w-full">
		  <img src="/src/assets/images/img3.jpg" class="w-full" />
		  <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
			<a href="#slide2" class="btn btn-circle">❮</a> 
			<a href="#slide4" class="btn btn-circle">❯</a>
		  </div>
		</div> 
		<div id="slide4" class="carousel-item relative w-full">
		  <img src="/src/assets/images/img9.jpg" class="w-full" />
		  <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
			<a href="#slide3" class="btn btn-circle">❮</a> 
			<a href="#slide1" class="btn btn-circle">❯</a>
		  </div>
		</div>
	  </div>
</article>
</section>