<script>
	import PointCounter from './point_counter.svelte';
	// export let name;
	let player_count = 2;
	let players = [{name:"Player",score:0},{name:"Player",score:0}];

	function addPlayer() {     
		if(players.length < 9)
    	players = [...players, {name:"Player",score:0}]; // 1, 2, 3, 4, 5
	}
	function removePlayer() {
		if(players.length >2)
		    players = [...players.slice(0,players.length - 1)]; // 1, 2, 3
	}
	$: player_count = players.length;
</script>

<main>
	<!-- Create player counter -->
	Player Count: {player_count}
	<button class='button is-primary is-large' on:click={() => addPlayer()}>+</button>
	<button class='button is-danger is-large' on:click={() => removePlayer()}>-</button>
	<div class="columns is-multiline">
	{#each players as player,index}
		<div class="column">
		<h2 class="title is-2"> <input class="input is-primary" bind:value={player.name}/> {player.name} P{index+1}</h2>
			<PointCounter/>
		</div>
	{/each}
	</div>
</main>