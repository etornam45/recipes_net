<script lang="ts">
    type Link = {
        name: string;
        url: string;
        icon: string;
    };
    export let title: string;
    export let description: string;
    export let image: string;
    export let link: Link[];
</script>

<div class="bg-white mt-4 flex rounded-3xl overflow-hidden flex-col">
    <div class="rounded-xl overflow-hidden m-6 aspect-square w-[300px] bg-black/20">
        <img
            src={image}
            alt={title}
            class="w-full h-64 object-cover object-center"
        />
    </div>
    <div class="p-6 w-full flex-1 flex-col justify-between h-full">
        <h1 class="text-2xl font-bold text-gray-900">{title}</h1>
        <p class="text-gray-600 mt-2">{description}</p>

        <h3 class="uppercase font-bold text-lg mb-[-20px] mt-4">SHARE ON</h3>
        <div class="mt-4 flex gap-3 items-center j">
            {#each link as item (item.url)}
                <a
                    href={item.url}
                    class="text-blue-500 scale-75 hover:text-blue-600 flex items-center gap-2 mt-2"
                >
                    {@html item.icon}
                </a>
            {/each}
        </div>
    </div>
</div>
