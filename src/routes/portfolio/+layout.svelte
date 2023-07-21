<script>
    import data from "$lib/portfolio/common.json"
    import { dev } from '$app/environment';
    import { inject } from '@vercel/analytics';
    inject({ mode: dev ? 'development' : 'production' });
</script>
<style>
    @font-face {
        font-family: 'Hack';
        src: url("/static/fonts/Hack-Regular.ttf") format("ttf");
		font-style: normal;
    }
    @font-face {
        font-family: 'Hack';
        src: url("/static/fonts/Hack-Bold.ttf") format("ttf");
		font-style: bold;
    }
    :global(body){
        width: 100%;
        height: 100vh;
        background-color: rgb(27, 27, 27);
    }
    :global(:root){
        --main-color: rgb(31, 219, 14);
        --main-accent-color: rgb(0, 255, 0);
        --secondary-color: rgb(218, 218, 218);
        --secondary-accent-color: white;
        --hack-font: "Hack";
        --title-size-h1-full: 40px;
        --title-size-h2-full: 30px;
        --title-size-h3-full: 20px;

        --small-space: 15px;
        --medium-space: 25px;
        --large-space: 35px;
    }
    .background {
        width: 100%;
        height: 100%;
    }
    .main-container {
        padding: var(--small-space);
        height: calc(100vh - calc(var(--small-space) * 2));
    }
    .border-line {
        height: 100%;
        border: 2px solid var(--main-color);
    }
    .spacer{
        padding: var(--small-space);
        height: calc(100% - 20px);
    }
</style>
<svelte:head>
	<title>{data.head["tab-settings"]["tab-names"].base}</title>
    <link rel="icon" href={data.head.favicon} />
</svelte:head>
<div class="background">
    <div class="main-container">
        <div class="border-line green-border">
            <div class="spacer">
                <slot></slot>
            </div>
        </div>
    </div>
</div>