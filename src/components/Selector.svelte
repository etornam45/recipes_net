<script lang="ts">
    import Options from "./ui/options.svelte";
    import Select from "./ui/select.svelte";

    let protien = ["Chicken", "Beef", "Pork", "Fish", "Tofu", "Tempeh"];
    let nutritionalStyle = ["Keto", "Paleo", "Vegan", "Vegetarian"];
    let cuisine = ["Italian", "Mexican", "Chinese", "Japanese"];
</script>

<form class="rounded-xl border p-4 mt-20 " action="#" method="post">
    <h2 class="text-blue-950 font-bold text-3xl">Make your selections</h2>
    <p class="py-3">
        Choose a protien, nutritional style, and cuisine to get started.
    </p>

    <div class="flex flex-col gap-3">
        <Options options={protien} />
        <div class="py-5 lg:py-0"></div>
        <Options options={nutritionalStyle} />
        <div class="py-5 lg:py-0"></div>
        <Select options={cuisine} />

        <button type="submit" class="bg-blue-900 p-2.5 rounded-lg text-white font-bold">
            Generate Recepes!
        </button>
    </div>
</form>
<div class="p-10"></div>
