
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
        align-items: center;
        font-family: var(--hack-font);
        border-left: 3px solid var(--main-color);
        color: var(--secondary-color);
        display: flex;
    }

    article p {
        margin: 0;
        padding: 0;
    }

    @media only screen and (max-width: 1180px) {
        article {
            width: calc(100% - 13px);
            padding: 10px 10px;
        }
    }
</style>
<svelte:head>
	<title>{headData.head["tab-settings"]["tab-names"].contact}</title>
    <meta name="description" content={data.meta.description} />
</svelte:head>
<article>
    <p>
        {data.about.description}
    </p>
</article>