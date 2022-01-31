<script>
	import PointCounter from './point_counter.svelte';
	// export let name;
	let player_count = 2;
	let players = [{name:"Player",score:0},{name:"Player",score:0}];

	let optional_cards = [
		{name:"Colony", type:"flat",value:"10"},
		{name:"Duke",type:"conditional",value:"0"}, // 1 for each duchy
		{name:"Gardens", type:"conditional",value:"0"}, // 1 for each 10 cards?
	]

	function addPlayer() {     
    	players = [...players, {name:"Player",score:0}]; // 1, 2, 3, 4, 5
	}
	function removePlayer() {
		if(players.length >2)
		    players = [...players.slice(0,players.length - 1)]; // 1, 2, 3
	}
	$: player_count = players.length;
</script>

<main>
	<h2>Dominion Point Counter</h2>
	<!-- Create player counter -->
	Player Count: {player_count}
	<button class='button is-primary' on:click={() => addPlayer()}>+</button>
	<button class='button is-danger' on:click={() => removePlayer()}>-</button>
	<div class="columns is-multiline">
	{#each players as player,index}
		<div class="column">
		<h2 class="title is-2"> <input class="input is-primary" bind:value={player.name}/> ({player.name} P{index+1}) point counter: </h2>
			<PointCounter/>
		</div>
	{/each}
	</div>
</main>