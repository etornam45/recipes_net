<script lang="ts">
    export let name: string;
    export let title: string;
    export let description: string;
    export let selected: boolean;
    export let onClick: () => void;
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
<label
    on:click={onClick}
    class:selected
    class={`${
        selected && "bg-blue-100 border-blue-500"
    } relative w-full p-2.5 border-2 cursor-pointer rounded-lg`}
>
    <input
        required
        type="radio"
        bind:group={selected}
        {name}
        value="{title}"
        class="absolute top-2 right-2"
    />
    <h2
        class="text-xl text-blue-900 font-bold"
    >{title}</h2>
    {description}
</label>


<style>
    .selected {
        background-color: #8ea5d3;
        border-color: #1351ad;
    }
</style>