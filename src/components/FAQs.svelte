<script lang="ts">
    import FAQSection from "./ui/faq-section.svelte";
    let faqs: { title: string; description: string[] }[] = [
        {
            title: "What is the best way to cook a steak?",
            description: [
                "The best way to cook a steak is to use a cast iron skillet and cook it on high heat for 2 minutes on each side.",
                "Then, put the skillet in the oven at 375 degrees for 5 minutes.",
            ],
        },
        {
            title: "How do I make the perfect chocolate chip cookies?",
            description: [
                "The perfect chocolate chip cookies are made with butter, brown sugar, and vanilla extract.",
                "You should also use a mix of milk and dark chocolate chips.",
            ],
        },
        {
            title: "What is the best way to cook a steak?",
            description: [
                "The best way to cook a steak is to use a cast iron skillet and cook it on high heat for 2 minutes on each side.",
                "Then, put the skillet in the oven at 375 degrees for 5 minutes.",
            ],
        },
        {
            title: "What is the best way to cook a steak?",
            description: [
                "The best way to cook a steak is to use a cast iron skillet and cook it on high heat for 2 minutes on each side.",
                "Then, put the skillet in the oven at 375 degrees for 5 minutes.",
            ],
        },
    ];
</script>

<section class="my-2">
    {#each faqs as faq}
        <FAQSection title={faq.title} descriptions={faq.description} />
    {/each}
</section>
