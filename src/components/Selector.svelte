<script lang="ts">
    import { nutritionalStyles, options } from "../lib/data";
    import { data_store } from "../lib/store";
    import type { IOption } from "../lib/types";
    import Options from "./ui/options.svelte";
    import Select from "./ui/select.svelte";

    let protien: IOption[] = options
    let nutritionalStyle = nutritionalStyles
    let cuisine = ["Italian", "Mexican", "Chinese", "Japanese"];

    function handleSubmit() {
        // using form data to get the selected values
        const form = new FormData(document.querySelector("#form") as HTMLFormElement); 
        const protien = form.get("protien");
        const nutrition = form.get("nutrition");
        const cuisine = form.get("cuisine");
        console.log(protien, nutrition, cuisine);
        data_store.update((data) => {
            return {
                ...data,
                protien: protien as string,
                nutrition: nutrition as string,
                cuisine: cuisine as string,
            };
        });
    }
</script>

<form id="form" class="rounded-xl border p-4 mt-20 " action="" method="post" on:change={handleSubmit}>
    <h2 class="text-blue-950 font-bold text-3xl">Make your selections</h2>
    <p class="py-3">
        Choose a protien, nutritional style, and cuisine to get started.
    </p>

    <div class="flex flex-col gap-3">
        <Options options={protien} name="protien" />
        <div class="py-5 lg:py-0"></div>
        <Options options={nutritionalStyle} name="nutrition"/>
        <div class="py-5 lg:py-0"></div>
        <Select options={cuisine} name="cuisine"/>

        <a href="/#/history" type="submit" class="bg-blue-900 p-2.5 rounded-lg text-white font-bold">
            Generate Recepes!
        </a>
        <!-- <button type="submit">
            Generate Recepes!
        </button> -->
    </div>
</form>
<div class="p-10"></div>
