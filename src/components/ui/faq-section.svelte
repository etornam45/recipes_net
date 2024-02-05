<script lang="ts">
    export let title: string;
    export let descriptions: string[];
</script>

<section class="my-4">
    <h2 class="text-blue-900 text-3xl font-bold mb-3">{title}</h2>
    <div>
        {#each descriptions as description}
            <p class="text-gray-700 mb-2">{description}</p>
        {/each}
    </div>
</section>
