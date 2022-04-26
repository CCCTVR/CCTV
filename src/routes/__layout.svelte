<script>
	import '../app.css';
	import Sidenav from '../components/sidenav2.svelte';
</script>

<div class="flex">
	<Sidenav />
	<main class="flex-col">
		<slot />
	</main>
</div>
