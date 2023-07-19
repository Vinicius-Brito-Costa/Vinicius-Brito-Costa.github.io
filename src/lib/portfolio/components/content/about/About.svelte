
<script>
    import headData from "$lib/portfolio/common.json"
    import data from "./about.json"
</script>
<style>
    article {
        align-self: right;
        width: 600px;
        padding-left: 10px;
        text-align: justify;
        font-family: var(--hack-font);
        border-left: 3px solid var(--main-color);
        color: var(--secondary-color);
    }
</style>
<svelte:head>
	<title>{headData.head["tab-settings"]["tab-names"].contact}</title>
    <meta name="description" content={data.meta.description} />
</svelte:head>
<article>
    <!-- <div class="profile-picture"></div> -->
    {data.about.description}
</article>