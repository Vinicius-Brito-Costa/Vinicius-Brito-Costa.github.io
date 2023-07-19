<script>
    import SkillTag from "../../SkillTag.svelte";
    export let project, projectHeight, activateModal
</script>
<style>
    .project-container {
        background-color: transparent;
        margin: 0px 0px 30px 0px;
        padding: 0;
        border: 3px solid var(--main-color);
    }
    .project-container button {
        width: 100%;
        height: 100%;
        cursor: pointer;
        background-color: transparent;
        margin: 0;
        padding: 0;
        border: none;
        font-family: var(--hack-font);
        color: var(--secondary-color);
        display: flex;
        flex-direction: column;
        align-items: center;
        align-content: center;
    }
    .project-container img {
        width: 100%;
        height: 300px;
        object-fit: cover;
    }
    .project-container h2 {
        width: 100%;
        font-size: var(--title-size-h2-full);
        margin: 0px;
        padding: 10px 0px;
        border-top: 1px solid var(--main-color);
        border-bottom: 1px solid var(--main-color);
    }
    .project-technologies {
        display: flex;
        margin: auto;
        flex-direction: row;
        justify-content: center;
    }
</style>
<div class="project-container" style="height: {projectHeight}px;">
    <button on:click={() => {activateModal(project)}} on:keyup={()=> {}} >
        <img src={project.banner} alt={project.name}/>
        <h2>{project.name}</h2>
        <div class="project-technologies">
            {#each project.technologies as tech, index}
                {#if index < 3}
                    <SkillTag skill={tech} />
                {/if}
            {/each}
        </div>
    </button>
</div>