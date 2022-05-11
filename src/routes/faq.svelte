<script>
	import FAQ from '../components/FAQ.svelte';
	import { qlist1 } from '../data/faq.js';
</script>

<section class="bg-gray-100 min-h-screen">
	<FAQ qlist={qlist1} />
</section>
