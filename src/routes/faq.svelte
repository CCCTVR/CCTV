<script>
	import FAQ from '../components/FAQ.svelte';
	import { qlist1 } from '../data/faq.js';
</script>

<section class="bg-gray-100 min-h-screen" style="background-image: url('/src/assets/bg.png'); background-size: contain;">
	
	<FAQ qlist={qlist1} />
</section>
