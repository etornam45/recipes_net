<script lang="ts">
  import Option from "./option.svelte";

  let selectedOption = "";
  export let options: {name: string, icon: string}[] = [];
  export let name: string;

  function handleSelection(value: string) {
    selectedOption = value;
  }
</script>

<div class=" grid gap-3" style="grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));">
  {#each options as option}
    <Option
      value={option.name}
      icon={option.icon}
      {name}
      selected={selectedOption === option.name}
      onSelection={handleSelection}
    />
  {/each}
</div>
