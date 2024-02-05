
<script lang="ts">
    export let value: string;
    export let selected: boolean = false;
    export let onSelection: (value: string) => void;
</script>

<!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
<!-- svelte-ignore a11y-click-events-have-key-events -->
<label on:click={() => onSelection(value)} class:selected class={`${selected && "bg-blue-100 border-blue-500"} relative w-full p-2.5 border-2 cursor-pointer rounded-lg`}>
    <input required type="radio" bind:group={selected} {value} class="absolute top-2 right-2"/>
    {value}
</label>
