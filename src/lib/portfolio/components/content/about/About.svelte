
<script>
    import headData from "$lib/portfolio/common.json"
    import data from "./about.json"
</script>
<style>
    article {
        align-self: right;
        width: 600px;
        height: 600px;
        text-align: justify;
        align-items: center;
        font-family: var(--hack-font);
        color: var(--secondary-color);
        display: flex;
        flex-direction: column;
    }

    article p {
        margin-bottom: auto;
        padding: 0;
        text-align: justify;
        padding-left: 10px;
        border-left: 3px solid var(--main-color);
    }
    
    .container {
        width: 100%;
        flex-grow: 1;
        display: flex;
    }
    .container img {
        margin: auto;
        height: 100%;
        object-fit: contain;
        image-rendering: pixelated;
        filter: grayscale(100%);
        mix-blend-mode: multiply;
    }
    .tint{
        border-radius: 100%;
        overflow: hidden;
        margin: 0 auto;
        border: 1px solid var(--main-color);
        background-color: var(--main-color);
    }
    @media only screen and (max-width: 1180px) {
        article {
            width: calc(100% - 13px);
            height: 450px;
            padding: 10px 10px;
        }
    }
</style>
<svelte:head>
	<title>{headData.head["tab-settings"]["tab-names"].about}</title>
    <meta name="description" content={data.meta.description} />
</svelte:head>
<article>
    <div class="container">
        <div class="tint">
            <img src={data.about.profile_picture.img_url} alt={data.about.profile_picture.alt} />
        </div>
    </div>
    
    <div class="container">
        <p>
            {data.about.description}
        </p>
    </div>
</article>