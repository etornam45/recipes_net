<script lang="ts">
    import { is_all_selected } from "../lib/store";
    import { nutritionalStyles, options } from "../lib/data";
    import { data_store } from "../lib/store";
    import type { IOption } from "../lib/types";
    import Options from "./ui/options.svelte";
    import Select from "./ui/select.svelte";

    let protien: IOption[] = options;
    let nutritionalStyle = nutritionalStyles;
    let cuisine = ["Italian", "Mexican", "Chinese", "Japanese"];

    function handleSubmit() {
        // using form data to get the selected values
        const form = new FormData(
            document.querySelector("#form") as HTMLFormElement,
        );
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

<form
    id="form"
    class="rounded-xl border p-4 mt-20"
    action=""
    method="post"
    on:change={handleSubmit}
>
    <h2 class="text-blue-950 font-bold text-3xl">Make your selections</h2>
    <p class="py-3">
        Choose a protien, nutritional style, and cuisine to get started.
    </p>

    <div class="flex flex-col gap-3">
        <Options options={protien} name="protien" />
        <div class="py-5 lg:py-0"></div>
        <Options options={nutritionalStyle} name="nutrition" />
        <div class="py-5 lg:py-0"></div>
        <Select options={cuisine} name="cuisine" />

        <a
            href="/#/history"
            type="submit"
            on:click={(e) => {
                if ($is_all_selected === true) {
                    e.preventDefault();
                }
            }}
            class="bg-blue-200 cursor-pointer {$is_all_selected === true ?  "inactive" : "active"} text-slate-800 p-2.5 rounded-lg text-center font-bold"
        >
            Generate Recepes!
        </a>
        <!-- <button type="submit">
            Generate Recepes!
        </button> -->
    </div>
</form>
<div class="p-10"></div>

<style>
    .active {
        pointer-events: none;
        background-color: #022979;
        color: white;
    }
</style>