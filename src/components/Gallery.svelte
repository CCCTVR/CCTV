<script>
	let title = 'Title';
	let Images = [
		{
			image: 'https://tailwindui.com/img/ecommerce-images/home-page-02-edition-01.jpg',
			description: 'description',
			description2: 'description2'
		},
		{
			image: 'https://tailwindui.com/img/ecommerce-images/home-page-02-edition-01.jpg',
			description: 'description',
			description2: 'description2'
		},
		{
			image: 'https://tailwindui.com/img/ecommerce-images/home-page-02-edition-01.jpg',
			description: 'description',
			description2: 'description2'
		},
		{
			image: 'https://tailwindui.com/img/ecommerce-images/home-page-02-edition-01.jpg',
			description: 'description',
			description2: 'description2'
		},
		{
			image: 'https://tailwindui.com/img/ecommerce-images/home-page-02-edition-01.jpg',
			description: 'description',
			description2: 'description2'
		}
	];
	let columns = 2;
</script>

<div class="bg-gray-100">
	<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
		<div class="max-w-2xl mx-auto py-8 sm:py-24 lg:py-16 lg:max-w-none">
			<h2 class="text-2xl font-extrabold text-gray-900">{title}</h2>

			<div class="mt-6 space-y-12 lg:space-y-0 lg:grid lg:grid-cols-{columns} lg:gap-x-6">
				{#each Images as { image, description, description2 }}
					<div class="group relative py-4">
						<div
							class="relative w-full  bg-white rounded-lg overflow-hidden group-hover:opacity-75 "
						>
							<img
								src={image}
								alt="Desk with leather desk pad, walnut desk organizer, wireless keyboard and mouse, and porcelain mug."
								class="w-full h-full object-center object-cover"
							/>
						</div>
						<h3 class="mt-1 text-sm text-gray-500">
							<a href="#">
								<span class="absolute inset-0" />
								{description}
							</a>
						</h3>
						<p class="text-base font-semibold text-gray-900">{description2}</p>
					</div>
				{/each}
			</div>
		</div>
	</div>
</div>
