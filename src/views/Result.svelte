<script lang="ts">
    import AiBanner from "../components/AIBanner.svelte";
    import ShareBanner from "../components/ShareBanner.svelte";
    import TabedResult from "../components/TabedResult.svelte";
    import Button from "../components/ui/button.svelte";
    import EmailAuth from "../components/EmailAuth.svelte";
    import { _ingredients, _directions } from "../lib/data";
    import { onMount } from "svelte";
    import { generating } from "../lib/store";
    import Auth from "../components/Auth.svelte";

    let servings = 4;
    let ingredients = _ingredients;
    let directions = _directions;

    onMount(() => {
        setTimeout(() => {
            generating.set(false);
        }, 3000);
    });
</script>

<AiBanner
    title="AI Recepe Generator"
    description="Your Custorm AI Generated Recepe is Ready to be served"
/>
<ShareBanner
    title={`Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut `}
    descriptions={[
        `Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut eos ratione expedita vero. Cum, quidem dolore! Pariatur necessitatibus illo atque doloribus reiciendis perferendis minus repudiandae, culpa earum autem repellendus quaerat?`,
        `You can also view your results in the history section.`,
    ]}
/>

{#if !$generating}
    <TabedResult {ingredients} {directions} {servings} />
{/if}

<Auth />
