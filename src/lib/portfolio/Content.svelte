<script>
    import About from '$lib/portfolio/components/content/about/About.svelte'
    import Projects from '$lib/portfolio/components/content/projects/Projects.svelte'
    import Skills from '$lib/portfolio/components/content/skills/Skills.svelte'
    import Contact from '$lib/portfolio/components/content/contact/Contact.svelte'
    export let selectedLink
    let screenSize;
</script>
<style>
    .container {
        padding-right: 60px;
        display: flex;
        height: 100%;
    }

    .container-spacer {
        overflow: hidden;
    }

    @media only screen and (max-width: 1180px) {
        .container {
            flex-direction: column;
            padding-right: 0px;
            height: 100%;
        }
        .container-spacer {
            display: flex;
            flex-direction: column;
        }
    }
    @media only screen and (max-height: 865px) {
        .container-spacer {
            height: 450px;
        }
    }
    @media only screen and (max-height: 760px) {
        .container-spacer {
            height: 350px;
        }
    }
</style>
<svelte:window bind:innerHeight={screenSize} />
<div class="container">
    <div class="container-spacer">
        {#if selectedLink == "about"}
            <About />
        {:else if selectedLink == "projects"}
            <Projects />
        {:else if selectedLink == "skills"}
            <Skills />
        {:else if selectedLink == "contact"}
            <Contact />
        {/if}
    </div>
</div>