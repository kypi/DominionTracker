<script>
    let vp_sum = 0;
	let base_cards = [
		{name:"Estate",value:1, count:0},
		{name:"Duchy", value:3, count:0},
		{name:"Province",value:6, count:0},
        {name:"Colony", type:"flat",value:10, count:0},
		{name:"Curse",value:-1, count:0},
		{name:"VP Token",value:1, count:0}
	];
	let optional_cards = [
		{name:"Duke",type:"conditional",value:"0", count:0}, // 1 for each duchy
		{name:"Gardens", type:"conditional",value:"0", count:0}, // 1 for each 10 cards?
	]
    let temp_sum = 0;
    function CalculateSum()
    {
        console.log("Calculating sum");
        vp_sum = 0;
        for (let card_index = 0; card_index < base_cards.length; card_index++) {
        
            vp_sum += base_cards[card_index].count*base_cards[card_index].value;
        }
        // return temp_sum;
        
    }
    function increaseBaseCount(card_index) {
        console.log("Increasing " + base_cards[card_index].name);
        if(base_cards[card_index].count < 12)
            base_cards[card_index].count += 1;
    }

    function decreaseBaseCount(card_index) {
        console.log("Decreasing " + base_cards[card_index].name);
        if(base_cards[card_index].count > 0)
            base_cards[card_index].count -= 1;
        
    }

    $: base_cards, CalculateSum();
    
</script>

<div>
    <!--Need to somehow to get the optional cards from the app  -->
    {#each base_cards as base_card,base_card_index}
        {base_card.name} count: {base_card.count} 
        <!-- <input type=number bind:value={base_card.count} min=0 max=12>  -->
        <button on:click={() => increaseBaseCount(base_card_index)}>+</button>
        <button on:click={() => decreaseBaseCount(base_card_index)}>-</button>
        <br>
    {/each}
    <h3> Player Sum: {vp_sum}</h3>  
</div>

<style>
	/* div {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	} */

</style>