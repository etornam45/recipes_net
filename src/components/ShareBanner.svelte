<script lang="ts" >
    import Buble from "./ui/buble.svelte";

    export let title: string;
    export let descriptions: string[];
    export let image: string;
</script>

<div class="shared grid gap-5 my-8 " style="grid-template-columns: 250px 1fr;">
    <div class="left overflow-hidden rounded-lg flex-1 w-[250px] h-[250px]" >
        <img src="{image}" width="250" height="250" alt="{title}">
    </div>
    <div class="right">
        <div class="flex justify-between items-center">
            <div class="flex gap-2">
                <Buble value="Fish" color="red" />
                <Buble value="BBQ" color="green" />
                <Buble value="Milk" color="black" />
            </div>

            <button class=" p-1.5 px-6 bg-blue-800 rounded-lg text-white font-semibold">
                Save Recipe
            </button>
        </div>
        <h2 class="text-blue-800 text-wrap text-3xl py-3 font-bold">{title}</h2>
        <div>
            {#each descriptions as description}
                <p>{description}</p>
            {/each}
        </div>
    </div>
</div>

<style >
    .shared {
        grid-template-columns: 250px 1fr;
    }

    @media (max-width: 768px) {
        .shared {
            grid-template-columns: 1fr !important;
        }
    }
    .shared img {
        object-fit: cover;
    }

    .shared .right {
        display: flex;
        flex-direction: column;
        gap: 10px;
    }
</style>