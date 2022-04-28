<script>
	import '../app.css';
	import Sidenav from '../components/sidenav2.svelte';
</script>

<div class="flex">
	<div class="w-72"><Sidenav /></div>

	<main class="flex-col">
		<div class="max-w-6xl">
			<slot />
		</div>
	</main>
</div>
