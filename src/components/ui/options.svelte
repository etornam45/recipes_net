<script lang="ts">
  import Option from "./option.svelte";

  let selectedOption = "";
  export let options: {name: string, icon: string}[] = [];
  export let name: string;

  function handleSelection(value: string) {
    selectedOption = value;
  }
</script>

<div class="auto-grid gap-3">
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


<style>
  .auto-grid{

  }
  @media (min-width: 768px) {
    .auto-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
      grid-auto-flow: row;
    }
  }

  @media (max-width: 768px){
    .auto-grid{
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
    }
  }
</style>