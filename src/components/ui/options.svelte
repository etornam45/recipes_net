<script lang="ts">
  import Option from "./option.svelte";

  let selectedOption = "";
  export let options: {name: string, icon: string}[] = [];
  export let name: string;

  function handleSelection(value: string) {
    selectedOption = value;
  }
</script>

<div class="flex items-center justify-between gap-3  flex-wrap lg:flex-nowrap">
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
