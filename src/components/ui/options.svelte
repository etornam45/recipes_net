
<script lang="ts">
  import Option from "./option.svelte";

  let selectedOption = "";
  export let options: string[] = [];

  function handleSelection(value: string) {
    selectedOption = value;
  }
</script>

<div class="flex items-center justify-between gap-3  flex-wrap lg:flex-nowrap">
  {#each options as option}
    <Option
      value={option}
      selected={selectedOption === option}
      onSelection={handleSelection}
    />
  {/each}
</div>
