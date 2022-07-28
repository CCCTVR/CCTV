<script>
	// import Team from '../components/oldteam.svelte';
	import Team from '../components/Team.svelte';
	import { teams } from '../data/data.js';

	console.log(teams);
</script>

<section class="bg-gray-100 min-h-screen" style="background-image: url('/static/assets/bg.png'); background-size: contain;">
	{#each teams as { TeamName, TeamMembers }}
		<Team {TeamMembers} {TeamName}   />
	{/each}
</section>
<!-- <h2 class="text-3xl">dream team</h2>
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
</div> -->

<!-- del -->
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
