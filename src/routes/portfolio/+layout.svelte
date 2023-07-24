<script>
    import Header from "$lib/portfolio/Header.svelte";
    import Navbar from "$lib/portfolio/Navbar.svelte";
    import data from "$lib/portfolio/common.json"
    import { page } from '$app/stores';
    import { dev } from '$app/environment';
    import { inject } from '@vercel/analytics';
    inject({ mode: dev ? 'development' : 'production' });

    let selectedLink = $page.route.id.replace("/portfolio/", "")
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

        --title-size-h1-mobile: 30px;
        --link-size-mobile: 20px;

        --title-size-h1-full: 40px;
        --title-size-h2-full: 30px;
        --title-size-h3-full: 20px;
        
        --xsmall-space: 5px;
        --small-space: 15px;
        --medium-space: 25px;
        --large-space: 35px;

        --first-width-break: 1180px;
    }
    .background {
        z-index: 2;
        width: 100%;
        height: 100%;
    }
    .noise-filter {
        z-index: -1;
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0;
        left: 0;
        opacity: .1;
        filter: contrast(150%) brightness(100%);
        background: 
            radial-gradient(circle at 50% 50%, rgba(0,0,0,1), rgba(255,255,255,0)),
            url("data:image/svg+xml,%3Csvg viewBox='0 0 600 600' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E");

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
    .flexbox {
        display: flex;
        height: 100%;
    }
    .content {
        width: 100%;
    }
    .content-info {
        padding-top: 10px;
        display: flex;
        justify-content: space-between;
    }
    .terminal-start {
        padding: 0px 30px 0px 10px;
        margin: 0px;
        font-family: var(--hack-font);
        font-size: var(--title-size-h1-full);
        color: var(--main-color);
    }

    @media only screen and (max-width: 1180px) {
        .main-container {
            padding: var(--xsmall-space);
        }
        .spacer{
            padding: var(--xsmall-space);
            height: calc(100% - 10px);
        }
        .terminal-start {
            width: 20px;
            font-size: var(--title-size-h1-mobile);
            padding: 0px 10px 0px 0px;
        }
        .content-info {
            flex-direction: column;
        }
        .filler {
            width: 35px;
        }
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
                <main class="flexbox">
                    <h1 class="title-size terminal-start">></h1>
                    <div class="content">
                        <Header />
                        <div class="content-info">
                            <Navbar selectedLink={selectedLink}/>
                            <slot></slot>
                        </div>
                    </div>
                    <div class="filler"></div>
                </main>
            </div>
        </div>
    </div>
</div>
<div class ="noise-filter"></div>