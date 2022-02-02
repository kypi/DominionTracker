<script>
    let vp_sum = 0;
	let base_cards = [
		{name:"Estate",value:1, count:3},
		{name:"Duchy", value:3, count:0},
		{name:"Province",value:6, count:0},
        {name:"Colony", type:"flat",value:10, count:0},
		{name:"Curse",value:-1, count:0},
		{name:"VP Token",value:1, count:0}
	];
    function CalculateSum()
    {
        console.log("Calculating sum");
        vp_sum = 0;
        for (let card_index = 0; card_index < base_cards.length; card_index++) {
        
            vp_sum += base_cards[card_index].count*base_cards[card_index].value;
        }        
    }
    function increaseBaseCount(card_index) {
        console.log("Increasing " + base_cards[card_index].name);
        // if(base_cards[card_index].count < 12)
            base_cards[card_index].count += 1;
    }

    function decreaseBaseCount(card_index) {
        console.log("Decreasing " + base_cards[card_index].name);
        if(base_cards[card_index].count > 0)
            base_cards[card_index].count -= 1;
        
    }

    $: base_cards, CalculateSum(); // run calculate sum when base_cards changes.
    
</script>

<div class="box">
    <!--Need to somehow to get the optional cards from the app  -->
    <h3 class="title is-3">Victory Points: {vp_sum}</h3>
    <table class="table">
        <tr><th>Card</th><th>Count</th><th>Inc</th><th>Dec</th></tr>
    
    {#each base_cards as base_card,base_card_index}
        <tr>     
            <td>{base_card.name}</td><td>{base_card.count} </td>
            <td>
        <button class="button is-primary is-large" on:click={() => increaseBaseCount(base_card_index)}>+</button></td>
        <td><button class="button is-danger is-large" on:click={() => decreaseBaseCount(base_card_index)}>-</button></td>
        </tr>
    {/each}
    </table>
</div>

<style>
	/* div {
		text-align: center;
		padding: 1em;
		max-width: 240px;
		margin: 0 auto;
	} */

</style>