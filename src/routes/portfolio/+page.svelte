<script>
  import Header from "$lib/portfolio/Header.svelte";
  import Navbar from "$lib/portfolio/Navbar.svelte";
  import Content from "$lib/portfolio/Content.svelte";
  import { page } from '$app/stores'
  let selectedLink = ""
  function setSelected(caller) {
        if(caller != undefined){
            selectedLink = caller
        }
    }
    

    let hash = $page.url.hash
    if (hash) {
        setSelected(hash.substring(1))
    }
    else {
        setSelected("about")
    }
</script>
<style>
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
</style>

<main class="flexbox">
    <h1 class="title-size terminal-start">></h1>
    <div class="content">
        <Header />
        <div class="content-info">
            <Navbar setSelected={setSelected} selectedLink={selectedLink} />
            <Content selectedLink={selectedLink} />
        </div>
    </div>
</main>
