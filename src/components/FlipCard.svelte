<script>
	export let Title = 'Title';
	export let Description = 'Description';
	export let Link = '';
</script>



  <div class="flip-card">
    <div class="flip-card-inner flex flex-nowrap ">
      <div class="flip-card-front border-blue-400 border-[1px] border-solid rounded-2xl content-center pt-14">
        <h3 class="text-blue-800 ">{Title}</h3>
      </div>
      <div class="flip-card-back border-[#232426] border-[1px] border-solid rounded-2xl">
        
        <div class="pt-16">
          <p class="text-xl">{Description}</p>
          <a href="{Link}" target="_blank"><button class="btn btn-primary">Know More</button></a>
        </div>
      </div>
    </div>
  </div>


<style>
  .flip-card {
  background-color: transparent;
  width: 300px;
  height: 300px;
  perspective: 1000px; /* Remove this if you don't want the 3D effect */
}

/* This container is needed to position the front and back side */
.flip-card-inner {
  position: relative;
  width: 100%;
  height: 100%;
  text-align: center;
  transition: transform 0.8s;
  transform-style: preserve-3d;
}

/* Do an horizontal flip when you move the mouse over the flip box container */
.flip-card:hover .flip-card-inner {
  transform: rotateY(180deg);
}

/* Position the front and back side */
.flip-card-front, .flip-card-back {
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
}

/* Style the front side (fallback if image is missing) */
.flip-card-front {
  background-color:transparent ; 
  /* #f3f4f6 */
  color: black;
}

/* Style the back side */
.flip-card-back {
  background-color: #232426;
  color: white;
  transform: rotateY(180deg);
}
</style>