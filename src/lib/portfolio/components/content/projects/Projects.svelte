<script>
    import headData from "$lib/portfolio/common.json"
    import data from "$lib/portfolio/components/content/projects/projects.json"
    import Project from "$lib/portfolio/components/content/projects/Project.svelte"
    import Modal from "$lib/portfolio/components/Modal.svelte"

    let screenSize = 1180;
    let modalData = data.projects[0]
    let open = false
    let projectHeight = 400

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
        overflow-y: scroll;
        overflow-x: hidden;
        -webkit-mask-image: -webkit-linear-gradient(-90deg, rgba(0,0,0,1) 95%, rgba(255, 255, 255, 0) 100%);
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
    @media only screen and (max-height: 865px) {
        .mask-wrapper {
            height: 450px;
        }
    }
</style>
<svelte:window bind:innerWidth={screenSize} />
<svelte:head>
	<title>{headData.head["tab-settings"]["tab-names"].projects}</title>
    <meta name="description" content={data.meta.description} />
</svelte:head>
<article>
    <div class="mask-wrapper">
        <div class="main-container">
            {#each data.projects as project}
            <div class="project-container" style="height: {screenSize >= 1180 ? projectHeight : projectHeight / 2}px">
                <Project project={project} activateModal={activateModal} />
            </div>
            {/each}
            <div id="filler" style="height: {screenSize >= 1180 ? projectHeight : projectHeight / 2}px"></div>
        </div>
    </div>
    <Modal project={modalData} open={open} activateModal={activateModal} />
</article>