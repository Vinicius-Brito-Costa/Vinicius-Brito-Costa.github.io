<script>
    import data from "$lib/portfolio/common.json"
</script>
<style>
    :global(body) {
        background-color: rgb(27, 27, 27);
    }
    .container {
        font-family: 'Hack';
        color: white;
        width: 100%;
        height: 100vh;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        text-align: center;
    }
    .container h1 {
        margin: 0;
    }
    .container a{
        color: white;
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
</style>
<svelte:head>
	<title>{data.head["tab-settings"]["tab-names"].error}</title>
    <link rel="icon" href={data.head.favicon} />
    <link rel='stylesheet' href='//cdn.jsdelivr.net/npm/hack-font@3.3.0/build/web/hack-subset.css'>
</svelte:head>
<div class="container">
    <h1>404</h1>
    <h2>Invalid Request</h2>
    <a href="/portfolio/about">Go Back to the main page.</a>
</div>
<div class="noise-filter"></div>

  