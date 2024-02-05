<script>
    import AddBanner from "../components/AddBanner.svelte";
    import FaQs from "../components/FAQs.svelte";
    import BreadCrumb from "../components/ui/bread-crumb.svelte";
    import Selector from "../components/Selector.svelte";
    let social_links = [
        {
            name: "facebook",
            url: "/to-facebook",
            icon: `<img width="48" height="48" src="https://img.icons8.com/fluency/48/facebook-new.png" alt="facebook-new"/>`,
        },
        {
            name: "twitter",
            url: "/to-twitter",
            icon: `<img width="48" height="48" src="https://img.icons8.com/fluency/48/twitter.png" alt="twitter"/>`,
        },
        {
            name: "instagram",
            url: "/to-instagram",
            icon: `<img width="48" height="48" src="https://img.icons8.com/fluency/48/instagram-new.png" alt="instagram-new"/>`,
        },
    ];
</script>

<div>
    <BreadCrumb />
    <AddBanner
        title="Welcome to Recepes.net"
        description="Get started by making your selections below. Choose a protien, nutritional style, and cuisine to get started. Get started by making your selections below. Choose a protien, nutritional style, and cuisine to get started. Get started by making your selections below. Choose a protien, nutritional style, and cuisine to get started. "
        image="https://as2.ftcdn.net/v2/jpg/03/41/61/85/1000_F_341618539_9Wb4qtWdvBEGwRa17PBNjWpCkMXvPTZO.jpg"
        link={social_links}
    />
    <Selector />

    <FaQs />
</div>
