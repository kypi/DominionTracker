<script>
	import PintCounter from './point_counter.svelte';
	// export let name;
	let player_count = 2;
	let players = [{name:"Player1",score:0},{name:"Player2",score:0}];
	let base_cards = [
		{name:"Estate",value:1},
		{name:"Duchy", value:3},
		{name:"Province",value:6},
		{name:"Curse",value:-1},
		{name:"VP Token",value:1}
	];
	let optional_cards = [
		{name:"Colony", type:"flat",value:"10"},
		{name:"Duke",type:"conditional",value:"0"}, // 1 for each duchy
		{name:"Gardens", type:"conditional",value:"0"}, // 1 for each 10 cards?
	]

	function addPlayer() {     
    	players = [...players, {name:"Player",score:0}]; // 1, 2, 3, 4, 5
	}
	function removePlayer() {
	    players = [...players.slice(0,players.length - 1)]; // 1, 2, 3
	}
	$: player_count = players.length;
</script>

<main>
	<h2>Dominion Point Counter</h2>
	<!-- Create player counter -->
	Player Count: {player_count}
	<button on:click={() => addPlayer()}>+</button>
	<button on:click={() => removePlayer()}>-</button>
	{#each players as player,index}
		<h2> <input bind:value={player.name}/> (Player {index+1}) point counter: </h2>
		<PintCounter/>
	{/each}
</main>

<style>
	main {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	}

	h1 {
		color: #ff3e00;
		text-transform: uppercase;
		font-size: 4em;
		font-weight: 100;
	}

	@media (min-width: 640px) {
		main {
			max-width: none;
		}
	}
</style>