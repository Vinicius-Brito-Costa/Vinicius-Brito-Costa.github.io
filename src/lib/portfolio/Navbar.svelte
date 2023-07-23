<script>
    export let selectedLink
    import { page } from '$app/stores'
    import NavbarLink from './NavbarLink.svelte';
    function setSelected(link) {
        selectedLink = link
    }

    if (!selectedLink){
        setSelected("about")
    }
</script>
<style>
    #navbar {
        list-style-type: none;
        padding: 0;
        margin: 0;
    }
</style>
<ul id="navbar">
    <NavbarLink name="about" selectedLink={selectedLink} setSelected={setSelected} />
    <NavbarLink name="projects" selectedLink={selectedLink} setSelected={setSelected} />
    <NavbarLink name="skills" selectedLink={selectedLink} setSelected={setSelected} />
    <NavbarLink name="contact" selectedLink={selectedLink} setSelected={setSelected} />
</ul>