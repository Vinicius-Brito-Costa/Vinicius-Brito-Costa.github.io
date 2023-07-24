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
            console.log(project)
            modalData = project
            open = true
        }
        else {
            open = false
        }
        console.log(open)
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
    }

    @media only screen and (max-width: 1180px) {
        .mask-wrapper {
            width: 100%;
            height: 400px;
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
        <div class="main-container" style="height: {projectHeight * (data.projects.length + 1) - projectHeight / 2}px;">
            {#each data.projects as project}
            <Project project={project} projectHeight={screenSize >= 1180 ? projectHeight : projectHeight / 2} activateModal={activateModal} />
            {/each}
        </div>
    </div>
    <Modal project={modalData} open={open} activateModal={activateModal} />
</article>