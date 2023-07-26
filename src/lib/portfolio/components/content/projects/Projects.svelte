<script>
    import headData from "$lib/portfolio/common.json"
    import data from "$lib/portfolio/components/content/projects/projects.json"
    import Project from "$lib/portfolio/components/content/projects/Project.svelte"
    import Modal from "$lib/portfolio/components/Modal.svelte"

    let screenSize;
    let modalData = data.projects[0]
    let open = false
    let projectHeight = 400

    function getContainerHeight() {
        return screenSize >= 1180 ? projectHeight / 2 : projectHeight
    }
    function activateModal(project){
        if (project != undefined){
            modalData = project
            open = true
        }
        else {
            open = false
        }
    }
</script>
<style>
    .mask-wrapper {
        width: 550px;
        height: 600px;
        overflow: scroll;
        -webkit-mask-image: -webkit-linear-gradient(-90deg, rgba(0,0,0,1) 70%, rgba(255,255,255,0) 100%);
    }
    .main-container {
        width: 100%;
        display: flex;
        flex-direction: column;
        gap: 30px;
    }

    @media only screen and (max-width: 1180px) {
        article {
            flex: 1;
            height: 100%;
            display: flex;
            flex-direction: column;
            width: 100%;
        }
        .main-container {
            flex: 1;
        }
        .mask-wrapper {
            width: 100%;
            display: flex;
            flex-direction: column;
        }
    }
</style>
<svelte:window bind:innerWidth={screenSize} />
<svelte:head>
	<title>{headData.head["tab-settings"]["tab-names"].contact}</title>
    <meta name="description" content={data.meta.description} />
</svelte:head>
<article>
    <div class="mask-wrapper">
        <div class="main-container">
            {#each data.projects as project}
            <Project project={project} projectHeight={screenSize >= 1180 ? projectHeight : projectHeight / 2} activateModal={activateModal} />
            {/each}
            <div id="filler" style="height: {screenSize >= 1180 ? projectHeight : projectHeight / 4}px"></div>
        </div>
    </div>
    <Modal project={modalData} open={open} activateModal={activateModal} />
</article>