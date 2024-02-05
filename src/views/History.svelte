<script lang="ts">
    import AiBanner from "../components/AIBanner.svelte";
    import BbqStyle from "../components/BbqStyle.svelte";
    import Button from "../components/ui/button.svelte";
</script>

<div class="py-5">
    <AiBanner
        title="AI Generated Recipe"
        description="Step 2: Pick your favorite Bbq style Healthy Fish recipe from the list of AI generated options below. We will provide you with the ingredients and directions to cook the recipe."
    />
    <div class="p-8 border rounded-lg my-8">
        <h2 class="text-3xl text-center mb-8 font-bold text-blue-800">Bbq Style Fish Recepe </h2>
        <BbqStyle />

        <div class=" flex mx-auto">
            <Button link="result">Create Custom Recipe</Button>
        </div>
    </div>
</div>
