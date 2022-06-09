<script>
	import Gallery from '../components/Gallery.svelte';
	import { GalleryImages } from '../data/data.js';
	import { each } from 'svelte/internal';
</script>

<section
	class="min-h-screen"
	style="background-image: url('/src/assets/bg.png'); background-size: contain;"
>
	<article class="prose-base lg:prose-2xl max-w-7xl mx-auto p-4 text-justify scrollbar-hide">
		<h2 class="text-blue-800">Gallery</h2>

		<!-- <div class="carousel w-full">
			<div id="slide1" class="carousel-item relative w-full">
				<img src="/src/assets/images/img1.jpg" class="w-full" alt="" />
				<div
					class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2"
				>
					<a href="#slide4" class="btn btn-circle">❮</a>
					<a href="#slide2" class="btn btn-circle">❯</a>
				</div>
			</div>
			<div id="slide2" class="carousel-item relative w-full">
				<img src="/src/assets/images/img2.jpg" class="w-full" alt="" />
				<div
					class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2"
				>
					<a href="#slide1" class="btn btn-circle">❮</a>
					<a href="#slide3" class="btn btn-circle">❯</a>
				</div>
			</div>
			<div id="slide3" class="carousel-item relative w-full">
				<img src="/src/assets/images/img3.jpg" class="w-full" alt="" />
				<div
					class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2"
				>
					<a href="#slide2" class="btn btn-circle">❮</a>
					<a href="#slide4" class="btn btn-circle">❯</a>
				</div>
			</div>
			<div id="slide4" class="carousel-item relative w-full">
				<img src="/src/assets/images/img9.jpg" class="w-full" alt="" />
				<div
					class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2"
				>
					<a href="#slide3" class="btn btn-circle">❮</a>
					<a href="#slide5" class="btn btn-circle">❯</a>
				</div>
			</div>
			<div id="slide5" class="carousel-item relative w-full">
				<img src="/src/assets/images/img8.jpg" class="w-full" alt="" />
				<div
					class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2"
				>
					<a href="#slide4" class="btn btn-circle">❮</a>
					<a href="#slide6" class="btn btn-circle">❯</a>
				</div>
			</div>
			<div id="slide6" class="carousel-item relative w-full">
				<img src="/src/assets/images/img11.jpg" class="w-full" alt="" />
				<div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
				  <a href="#slide5" class="btn btn-circle">❮</a> 
				  <a href="#slide1" class="btn btn-circle">❯</a>
				</div>
			  </div>
		</div> -->
		<div class="mx-auto">
			<div class="snap-x mx-auto snap-mandatory h-screen flex   overflow-x-scroll scrollbar-hide">
				<div
					class="snap-start  w-full flex-shrink-0 h-96 mx-auto  justify-center text-2xl scrollbar-hide "
				>
					<img src="/src/assets/images/img1.jpg" alt="" class="mx-auto" />
					<p class="text-bold text-black mx-auto text-center">Shri Panduranga Shetty Inagurating the research center</p>
				</div>
				<div
					class="snap-start  w-full flex-shrink-0 h-96 mx-auto  justify-center text-2xl scrollbar-hide "
				>
					<img src="/src/assets/images/img8.jpg" alt="" class="mx-auto" />
					<p class="text-bold text-black mx-auto text-center">Important Dignitaries Of CCTVR</p>
				</div>
				<div
					class="snap-start  w-full flex-shrink-0 h-96 mx-auto  justify-center text-2xl scrollbar-hide "
				>
					<img src="/src/assets/images/img2.jpg" alt="" class="mx-auto" />
					<p class="text-bold text-black mx-auto text-center">Important Dignitaries visiting CCTV lab</p>
				</div>
				<div
					class="snap-start  w-full flex-shrink-0 h-96 mx-auto  justify-center text-2xl scrollbar-hide "
				>
					<img src="/src/assets/images/img4.jpg" alt="" class="mx-auto" />
					<p class="text-bold text-black mx-auto text-center">Important Dignitaries visiting CCTV lab</p>
				</div>
				<div
					class="snap-start  w-full flex-shrink-0 h-96 mx-auto  justify-center text-2xl scrollbar-hide "
				>
					<img src="/src/assets/images/img5.jpg" alt="" class="mx-auto" />
					<p class="text-bold text-black mx-auto text-center">Activities in CCTV lab</p>
				</div>
				<div
					class="snap-start  w-full flex-shrink-0 h-96 mx-auto  justify-center text-2xl scrollbar-hide "
				>
					<img src="/src/assets/images/img9.jpg" alt="" class="mx-auto" />
					<p class="text-bold text-black mx-auto text-center">Shri Sanjay Sahay lighting the lamp</p>
				</div>
				<div
					class="snap-start  w-full flex-shrink-0 h-96 mx-auto  justify-center text-2xl scrollbar-hide "
				>
					<img src="/src/assets/images/img11.jpg" alt="" class="mx-auto " />
					<p class="text-bold text-black mx-auto text-center">Important Dignitaries at Webinar</p>
				</div>
				<!-- <div
					class="snap-start  w-full flex-shrink-0 h-96 mx-auto  justify-center text-2xl scrollbar-hide "
				>
					<img src="/src/assets/photos/CCTV lab Entrance.JPG" alt="" class="mx-auto w-[50%]" />
					<p class="text-bold text-black mx-auto text-center">CCTV research lab</p>
				</div> -->
			</div>
		</div>
	</article>
</section>
