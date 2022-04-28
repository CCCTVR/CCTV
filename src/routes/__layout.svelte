<script>
	import '../app.css';
	import Sidenav from '../components/sidenav2.svelte';
</script>

<div class="flex">
	<div class="w-72"><Sidenav /></div>

	<main class="flex-col">
		<slot />
	</main>
</div>
