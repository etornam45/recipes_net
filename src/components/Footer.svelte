<script lang="ts">
 const footer_links = [
    {name: "Cooking Style", url: "/cooking-style"},
    {name: "Meals", url: "/meals"},
    {name: "Ingredients", url: "/ingredients"},
    {name: "Occasions", url: "/occasions"},
    {name: "Cuisines", url: "/cuisines"},
    {name: "Kitchen Tips", url: "/kitchen-tips"}
 ]  
</script>


<footer class="bg-blue-200 p-3 mx-auto flex justify-between gap-10 lg:flex-row flex-col px-8"> 
    <div class="left">
        <h1 class="text-blue-900 font-bold text-lg">
            Recepes.<span class="font-light">net</span>
        </h1>
    </div>
    <div class="right flex gap-2 flex-col lg:flex-row">
        {#each footer_links as link (link.url)}
            <a href={link.url} class=" hover:text-blue-900 mr-3">{link.name}</a>
        {/each}
    </div>
</footer>