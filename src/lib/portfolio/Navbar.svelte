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
    @media only screen and (max-width: 1180px) {
        .divider {
            opacity: 0.5;
            border-bottom: solid 1px var(--main-color);
            margin: 0px 40px;
            margin-bottom: 10px;
        }
    }
</style>
<ul id="navbar">
    <NavbarLink name="about" selectedLink={selectedLink} setSelected={setSelected} />
    <NavbarLink name="projects" selectedLink={selectedLink} setSelected={setSelected} />
    <NavbarLink name="skills" selectedLink={selectedLink} setSelected={setSelected} />
    <NavbarLink name="contact" selectedLink={selectedLink} setSelected={setSelected} />
</ul>
<div class="divider"></div>