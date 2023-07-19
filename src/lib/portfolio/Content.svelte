<script>
    import About from '$lib/portfolio/components/content/about/About.svelte'
    import Projects from '$lib/portfolio/components/content/projects/Projects.svelte'
    import Skills from '$lib/portfolio/components/content/skills/Skills.svelte'
    import Contact from '$lib/portfolio/components/content/contact/Contact.svelte'
    export let selectedLink
</script>
<style>
    .container {
        padding-right: 60px;
    }
</style>

<div class="container">
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