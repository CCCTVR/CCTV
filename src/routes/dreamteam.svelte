<script>
	import Team from '../components/oldteam.svelte';
	let dream_team = [
		{ name: 'Dr K N Subramanya Principal RVCE', designation: 'ChairPerson', img: 'images/hod.PNG' },
		{ name: 'Shri. Sanjay Sahay', designation: 'Founder and Mentor', img: 'images/hod.PNG' },
		{ name: 'Dr. Ramakanth K P', designation: 'Center Head, CCCTVR', img: 'images/hod.PNG' },
		{ name: 'Shri T Shankar', designation: 'Head, Research and Projects', img: 'images/hod.PNG' },
		{ name: 'Dr. Shreelakshmi K', designation: 'Head, Operations', img: 'images/hod.PNG' },
		{
			name: 'Dr. Ravishankar S',
			designation: 'Head, Communication and Networking',
			img: 'images/hod.PNG'
		},
		{ name: 'Ms. Rashmi H', designation: 'Coordinator, CCCTVR', img: 'images/hod.PNG' }
	];
	let industry_team = [
		{ name: 'Shri. Gautam Goradia, COMSUR', designation: 'Member', img: 'images/hod.PNG' },
		{ name: 'Mr. Avinash Trivedi, Videonetics', designation: 'Member', img: 'images/hod.PNG' },
		{ name: 'Mr. Pawan Vashist', designation: 'Member', img: 'images/hod.PNG' },
		{
			name: 'Mistral Solutions',
			designation: 'Member',
			img: 'images/hod.PNG'
		} /* Mistral Solutions has no designation*/
	];

	let academia_team = [
		{ name: 'Dr. Surbhi Mathur, NFSU', designation: 'Member', img: 'images/hod.PNG' },
		{ name: 'Prof. Roopa J, RVCE', designation: 'Member', img: 'images/hod.PNG' },
		{ name: 'Dr. Azra Nasreen', designation: 'Member', img: 'images/hod.PNG' },
		{ name: 'Dr. Hemavathy R', designation: 'Member', img: 'images/hod.PNG' },
		{ name: 'Ms. Neethu S', designation: 'Member', img: 'images/hod.PNG' }
	];
	let operations_team = [
		{ name: 'Mr. Ravikumar Koppal', designation: 'Member', img: 'images/hod.PNG' },
		{ name: 'Mr. Shiva Kumar', designation: 'Member', img: 'images/hod.PNG' },
		{ name: 'Mr. Somesh Nandi', designation: 'Member', img: 'images/hod.PNG' },
		{ name: 'Mr. Vithal', designation: 'Member', img: 'images/hod.PNG' }
	];
</script>

<h2 class="text-3xl">dream team</h2>
<div class="grid grid-cols-1 gap-8 mb-8 mt-8 xl:mt-8 md:grid-cols-2 xl:grid-cols-4">
	{#each dream_team as { name, designation, img }, i}
		<Team {name} {designation} image={img} />
	{/each}
</div>
<h2 class="text-3xl">industry team</h2>
<div class="grid grid-cols-1 gap-8 mt-8 mb-8 xl:mt-8 md:grid-cols-2 xl:grid-cols-4">
	{#each industry_team as { name, designation, img }, i}
		<Team {name} {designation} image={img} />
	{/each}
</div>

<h2 class="text-3xl">academia team</h2>
<div class="grid grid-cols-1 gap-8 mt-8 mb-8 xl:mt-8 md:grid-cols-2 xl:grid-cols-4">
	{#each academia_team as { name, designation, img }, i}
		<Team {name} {designation} image={img} />
	{/each}
</div>

<h2 class="text-3xl">operations team</h2>
<div class="grid grid-cols-1 gap-8 mt-8 mb-8 xl:mt-8 md:grid-cols-2 xl:grid-cols-4">
	{#each operations_team as { name, designation, img }, i}
		<Team {name} {designation} image={img} />
	{/each}
</div>

<!-- <div class="mx-auto">
	<h2>DREAM TEAM</h2>
	<h3>Academia</h3>
	<table>
		<tr>
			<th>Slno</th>
			<th>Name</th>
			<th>Designation</th>
		</tr>
		<tr>
			<td>1</td>
			<td>Dr. K N Subramanya, <br />Principal, RVCE</td>
			<td>Chair Person</td>
		</tr>
		<tr>
			<td>2</td>
			<td>Shri. Sanjay Sahay</td>
			<td>Founder and Mentor</td>
		</tr><tr>
			<td>3</td>
			<td>Dr. Ramakanth K P</td>
			<td>Center Head, CCCTVR</td>
		</tr>
		<tr>
			<td>4</td>
			<td>Shri T Shankar</td>
			<td>Head, Research and Projects</td>
		</tr>
		<tr>
			<td>5</td>
			<td>Dr. Shreelakshmi K</td>
			<td>Head, Operations</td>
		</tr>
		<tr>
			<td>6</td>
			<td>Dr. Ravishankar S</td>
			<td>Head, Communication and Networking</td>
		</tr>
		<tr>
			<td>7</td>
			<td>Ms. Rashmi H</td>
			<td>Coordinator, CCCTVR</td>
		</tr>
		<tr>
			<td>8</td>
			<td>Dr. Surbhi Mathur, NFSU</td>
			<td>Member</td>
		</tr><tr>
			<td>9</td>
			<td>Prof. Roopa J, RVCE</td>
			<td>Member</td>
		</tr><tr>
			<td>10</td>
			<td>Dr. Azra Nasreen</td>
			<td>Member</td>
		</tr>
		<tr>
			<td>11</td>
			<td>Dr. Hemavathy R</td>
			<td>Member</td>
		</tr>
		<tr>
			<td>12</td>
			<td>Ms. Neethu S</td>
			<td>Member</td>
		</tr>
	</table>
	<h3>Industry</h3>
	<table>
		<tr>
			<td>13</td>
			<td>Shri. Gautam Goradia, COMSUR</td>
			<td>Member</td>
		</tr>
		<tr>
			<td>14</td>
			<td>Mr. Avinash Trivedi, Videonetics</td>
			<td>Member</td>
		</tr><tr>
			<td>15</td>
			<td>Mr. Pawan Vashist, </td>
			<td>Member</td>
		</tr>
		<tr>
			<td />
			<td><strong>Mistral Solutions</strong></td>
			<td />
		</tr>
	</table>
	<h3>Operations</h3>
	<table>
		<tr>
			<td>16</td>
			<td>Mr. Ravikumar Koppal</td>
			<td>Member</td>
		</tr>
		<tr>
			<td>17</td>
			<td>Mr. Shiva Kumar</td>
			<td>Member</td>
		</tr><tr>
			<td>18</td>
			<td>Mr. Somesh Nandi</td>
			<td>Member</td>
		</tr>
		<tr>
			<td>19</td>
			<td>Mr. Vithal</td>
			<td>Member</td>
		</tr>
	</table>
</div> -->
