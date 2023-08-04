<script>
  import ImageLoader from "../../../ImageLoader.svelte";
    import SkillTag from "../../SkillTag.svelte";
    export let project, activateModal
</script>
<style>
    .project-container {
        height: 100%;
        background-color: transparent;
        margin: 0;
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
    .project-banner {
        height: 300px;
        width: 100%;
    }
    .project-container h2 {
        width: 100%;
        font-size: var(--title-size-h2-full);
        margin: 0px;
        border-top: 1px solid var(--main-color);
        border-bottom: 1px solid var(--main-color);
    }
    .project-technologies {
        display: flex;
        margin: auto;
        flex-direction: row;
        justify-content: center;
    }

    @media only screen and (max-width: 1180px) {
        .project-container button {
            position: relative;
            flex-direction: row;
        }
        .project-banner {
            opacity: .2;
            height: 100%;
        }
        .project-container h2 {
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            width: auto;
            padding: 0;
            text-align: center;
            margin: auto;
            border: none;
        }
        .project-technologies{
            display: none;
        }
    }
</style>
<div class="project-container">
    <button on:click={() => {activateModal(project)}} on:keyup={()=> {}} >
        <div class="project-banner">
            <ImageLoader name={project.name} fullres={project.banner} lowres={project.banner_low_res} />
        </div>
        <!-- <img src={project.banner} alt={project.name} loading="lazy"/> -->
        <h2>{project.name.replace(/ /g, '\u00a0')}</h2>
        <div class="project-technologies">
            {#each project.technologies as tech, index}
                {#if index < 3}
                    <SkillTag skill={tech} />
                {/if}
            {/each}
        </div>
    </button>
</div>