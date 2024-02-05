<script lang="ts">
    import BbqOption from "./ui/BbqOPtion.svelte";
    let selectedOption = "";
    export let options: { name: string; description: string }[] = [
        {
            name: "Memphis",
            description: "Memphis is known for its dry rubs and sauces. The dry rub is a combination of paprika, garlic, onion, and other spices. The sauce is a tomato-based sauce with a sweet and tangy flavor.",
        },
        {
            name: "Texas",
            description: "Texas is known for its beef brisket. The brisket is slow-cooked over indirect heat for several hours. The sauce is a tomato-based sauce with a sweet and tangy flavor.",
        },
        {
            name: "Kansas City",
            description: "Kansas City is known for its sweet and tangy sauce. The sauce is a combination of ketchup, molasses, and other spices. The sauce is used as a glaze for the meat.",
        },
    ];

    function handleSelection(value: string) {
        selectedOption = value;
    }
</script>

<div class="py-5 flex gap-4 flex-col lg:flex-row">
    {#each options as option}
        <BbqOption
            title={option.name}
            name="bbqStyle"
            description={option.description}
            selected={selectedOption === option.name}
            onClick={() => handleSelection(option.name)}
        />
    {/each}
</div>
