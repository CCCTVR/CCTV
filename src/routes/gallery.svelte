<script>
	import Gallery from '../components/Gallery.svelte';
	import { GalleryImages } from '../data/data.js';


</script>

<section
	class="min-h-screen"
	style="background-image: url('/src/assets/bg.png'); background-size: contain;"
>
	<article class="prose-base lg:prose-2xl max-w-7xl mx-auto p-4 text-justify">
		<h2 class="text-blue-800">Gallery</h2>
		<div class="container">
			<div class="carousel">
			  <div class="carousel__face"><span class=" align-top">Innaguration of the cctv research center</span></div>
			  <div class="carousel__face"><span></span></div>
			  <div class="carousel__face"><span></span></div>
			  <div class="carousel__face"><span></span></div>
			  <div class="carousel__face"><span></span></div>
			  <div class="carousel__face"><span></span></div>
			  <div class="carousel__face"><span></span></div>
			  <div class="carousel__face"><span></span></div>
			  <div class="carousel__face"><span>Woow</span></div>
			</div>
		  </div>
	</article>
</section>

<style>
	body {
  margin: 0;
  background: lightgray;
  text-align: center;
  font-family: sans-serif;
  color: #fefefe;
}
.container {
  position: relative;
  width: 320px;
  margin: 100px auto 0 auto;
  perspective: 1000px;
}

.carousel {
  position: absolute;
  width: 100%;
  height: 100%;
  transform-style: preserve-3d; 
  animation: rotate360 60s infinite forwards linear;
}
.carousel__face { 
  position: absolute;
  width: 300px;
  height: 187px;
  top: 20px;
  left: 10px;
  right: 10px;
  background-size: cover;
  box-shadow:inset 0 0 0 2000px rgba(124, 121, 121, 0.5);
  display: flex;
}

span {
  margin: auto;
  font-size: 2rem;
}


.carousel__face:nth-child(1) {
  background-image: url("/src/assets/images/img1.jpg");
  transform: rotateY(  0deg) translateZ(430px); }
.carousel__face:nth-child(2) { 
  background-image: url("/src/assets/images/img2.jpg");
    transform: rotateY( 40deg) translateZ(430px); }
.carousel__face:nth-child(3) {
  background-image: url("/src/assets/images/img3.jpg");
  transform: rotateY( 80deg) translateZ(430px); }
.carousel__face:nth-child(4) {
  background-image: url("/src/assets/images/img4.jpg");
  transform: rotateY(120deg) translateZ(430px); }
.carousel__face:nth-child(5) { 
  background-image: url("/src/assets/images/img5.jpg");
 transform: rotateY(160deg) translateZ(430px); }
.carousel__face:nth-child(6) { 
  background-image: url("/src/assets/images/img6.jpg");
 transform: rotateY(200deg) translateZ(430px); }
.carousel__face:nth-child(7) { 
  background-image: url("/src/assets/images/img8.jpg");
 transform: rotateY(240deg) translateZ(430px); }
.carousel__face:nth-child(8) {
  background-image: url("/src/assets/images/img9.jpg");
  transform: rotateY(280deg) translateZ(430px); }
.carousel__face:nth-child(9) {
  background-image: url("/src/assets/images/img10.jpg");
  transform: rotateY(320deg) translateZ(430px); }



@keyframes rotate360 {
  from {
    transform: rotateY(0deg);
  }
  to {
    transform: rotateY(-360deg);
  }
}

</style>