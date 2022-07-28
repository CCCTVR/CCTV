<script>
	let sidemenu = false;
	import { nav as navig } from '../data/data.js';
</script>

<section class="fixed w-full bg-gray-100 z-50">
	<nav
		class="relative px-6 py-2 lg:py-6 flex justify-between items-center  border-b-orange-500 border-b-[0.7rem]"
	>
		<div class="px-[10px] w-[25%]">
			<!-- <span>LOGO CCTV </span> -->
			<a href="/"><img src="/static/assets/cctv_logo_1.png" alt="logo" /></a>
			<!-- <span class="lg:hidden">LOGO RVCE</span> -->
		</div>

		<!-- <a class="text-3xl font-bold leading-none" href="#">
			<img class="h-12" src="atis-assets/logo/atis/atis-mono-black.svg" alt="" width="auto" />
		</a> -->
		<div class="lg:hidden" on:click={() => (sidemenu = !sidemenu)}>
			<button class="navbar-burger flex items-center text-gray-800 p-3">
				<svg
					class="block h-4 w-4 fill-current"
					viewBox="0 0 20 20"
					xmlns="http://www.w3.org/2000/svg"
				>
					<title>Mobile menu</title>
					<path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
				</svg>
			</button>
		</div>
		<div class="hidden lg:block">
			<ul
				class="hidden absolute top-1/2 transform -translate-y-1/2 -translate-x-1/2 lg:flex lg:mx-auto lg:items-center lg:w-auto lg:space-x-2 pl-[15px] pr-[2px]"
			>
				{#each navig as { name, link }}
					<li class="">
						<a
							class="py-2 px-3 text-xl  hover:text-[#0170B9] hover:underline hover:underline-offset-[2rem] hover:decoration-4 whitespace-nowrap text-gray-900 hover:ease-in-out"
							href={link}>{name}</a
						>
					</li>
				{/each}
				<!-- <li class="text-gray-800">
				<svg
					class="w-4 h-4 current-fill"
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					stroke="currentColor"
				>
					<path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
					/>
				</svg>
			</li> -->
				<!-- <li><a class="text-sm text-orange-600 font-bold" href="#">About Us</a></li> -->
			</ul>
		</div>
		<!-- <a
			class="hidden lg:inline-block py-2 px-6 bg-white hover:bg-gray-50 text-sm text-orange-600 font-bold rounded-l-xl rounded-t-xl transition duration-200"
			href="#">Contact Us</a
		> -->
		<div class="hidden lg:block">
			<!-- <a href="https://rvce.edu.in/"><img class="w-[6.5rem]" src="/src/assets/rvce_logo.png" alt="rvce_logo" /></a> -->
		</div>
	</nav>

	<div
		class="{sidemenu ? '' : 'hidden'} navbar-menu fixed top-0 left-0 bottom-0 w-5/6 max-w-sm z-50"
	>
		<div
			class="navbar-backdrop fixed inset-0 bg-gray-800 opacity-25"
			on:click={() => (sidemenu = !sidemenu)}
		/>
		<nav class="relative flex flex-col py-6 px-6 h-full w-full bg-white border-r overflow-y-auto">
			<div class="flex items-center mb-8">
				<a class="mr-auto text-2xl font-bold leading-none" href="#">
					<img class="h-10" src="atis-assets/logo/atis/atis-mono-black.svg" alt="" width="auto" />
				</a>
				<button class="navbar-close" on:click={() => (sidemenu = !sidemenu)}>
					<svg
						class="h-6 w-6 text-gray-400 cursor-pointer hover:text-gray-500"
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						stroke="currentColor"
					>
						<path
							stroke-linecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							d="M6 18L18 6M6 6l12 12"
						/>
					</svg>
				</button>
			</div>
			<div>
				<ul>
					{#each navig as { name, link }}
						<li class="mb-2">
							<a
								class="block p-4 text-xl font-semibold text-gray-800 hover:bg-orange-50 hover:text-orange-600 rounded"
								href={link}>{name}</a
							>
						</li>
					{/each}
				</ul>
			</div>
			<div class="mt-auto">
				<!-- <div class="pt-6">
					<a
						class="block px-4 py-3 mb-3 leading-loose text-xs text-center font-semibold bg-gray-50 hover:bg-gray-100 rounded-l-xl rounded-t-xl"
						href="#">Sign In</a
					><a
						class="block px-4 py-3 mb-2 leading-loose text-xs text-center text-white font-semibold bg-orange-600 hover:bg-orange-700 rounded-l-xl rounded-t-xl"
						href="#">Sign Up</a
					>
				</div> -->
				<!-- <p class="my-4 text-xs text-center text-gray-400">
					<span>© 2020 All rights reserved.</span>
				</p>
				<div class="text-center">
					<a class="inline-block px-1" href="#">
						<img src="atis-assets/social/facebook.svg" alt="" />
					</a>
					<a class="inline-block px-1" href="#">
						<img src="atis-assets/social/twitter.svg" alt="" />
					</a>
					<a class="inline-block px-1" href="#">
						<img src="atis-assets/social/instagram.svg" alt="" />
					</a>
				</div> -->
			</div>
		</nav>
	</div>
</section>
