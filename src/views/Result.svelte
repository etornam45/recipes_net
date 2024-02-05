<script lang="ts">
    import AiBanner from "../components/AIBanner.svelte";
    import ShareBanner from "../components/ShareBanner.svelte";
    import type { IDirection, IResult } from "../lib/types";
    import TabedResult from "../components/TabedResult.svelte";
    import Button from "../components/ui/button.svelte";
    import EmailAuth from "../components/EmailAuth.svelte";

    // let results: IResult[] = [];
    let servings = 4;
    let  ingredients = [
        {
            name: "Tomato",
            amount: 2,
            unit: "pcs",
        },
        {
            name: "Onion",
            amount: 1,
            unit: "pcs",
        },
        {
            name: "Garlic",
            amount: 2,
            unit: "cloves",
        },
        {
            name: "Olive oil",
            amount: 2,
            unit: "tbsp",
        },
        {
            name: "Salt",
            amount: 1,
            unit: "tsp",
        },
        {
            name: "Pepper",
            amount: 1,
            unit: "tsp",
        },
        {
            name: "Basil",
            amount: 1,
            unit: "tsp",
        },
        {
            name: "Pasta",
            amount: 200,
            unit: "g",
        },
    ];


    let directions: IDirection[] = [
        {
            description: "Boil water in a large pot.",
        },
        {
            description: "Add pasta and cook for 8 minutes.",
        },
        {
            description: "Drain the pasta and set aside.",
        },
        {
            description: "In a large pan, heat olive oil over medium heat.",
        },
        {
            description: "Add garlic and onion and cook until soft.",
        },
        {
            description: "Add tomatoes and cook for 5 minutes.",
        },
        {
            description: "Add pasta, salt, pepper, and basil.",
        },
        {
            description: "Toss everything together and serve.",
        },
    ];
</script>

<AiBanner title="AI Recepe Generator" description="Your Custorm AI Generated Recepe is Ready to be served" />
<ShareBanner
    title={`
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut 
`}
    descriptions={[
        `
    Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut eos ratione expedita vero. Cum, quidem dolore! Pariatur necessitatibus illo atque doloribus reiciendis perferendis minus repudiandae, culpa earum autem repellendus quaerat?
`,
        `You can also view your results in the history section.
`,
    ]}
    image="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/food-offer-banner-design-template-120969040f9a0d84860674d52de6cdbf_screen.jpg?ts=1625718735"
/>

<TabedResult ingredients={ingredients} directions={directions} {servings} />

<div class="flex items-center justify-between py-5">
    <Button link="">Save Recepe</Button>
</div>

<EmailAuth />
