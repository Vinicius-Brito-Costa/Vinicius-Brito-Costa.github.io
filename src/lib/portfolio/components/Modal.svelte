<script>
    export let project, open, activateModal
</script>
<style>
    .modal-close {
        display: none;
    }
    .modal-open {
        display: flex;
    }
    .modal-container {
        width: 100vw;
        height: 100vh;
        top: 0;
        left: 0;
        position: absolute;
        align-items: center;
        justify-content: center;
    }
    .modal-content {
        z-index: 2;
        width: 700px;
        height: 700px;
        border: 3px solid var(--main-color);
        font-family: var(--hack-font);
        color: var(--secondary-color);
        display: flex;
        flex-direction: column;
        background-color: black;
    }
    .modal-content img {
        width: 100%;
        object-fit: cover;
        object-position: top;
        height: 200px;
    }

    .modal-title{
        color: var(--secondary-accent-color);
        display: flex;
        flex-direction: row;
        align-items: center;
        align-content: center;
        align-self: center;
    }
    .modal-info {
        height: 100%;
        display: flex;
        flex-direction: column;
        margin: 10px;
    }
    .modal-skill {
        margin-top: 5px;
    }
    .modal-skill-title {
        color: var(--secondary-accent-color);
    }
    .modal-info span {
        margin-top: 5px;
    }
    .modal-description {
        overflow-y: scroll;
        height: 150px;
        margin-bottom: auto;
    }
    .footer {
        margin-top: auto;
        align-content: end;
        align-self: flex-end;
    }

    .footer a {
        color: var(--secondary-accent-color);
    }
    .fade {
        cursor: pointer;
        border: none;
        position: absolute;
        background-color: rgba(0, 0, 0, 0.8);
        z-index: 1;
        width: 100%;
        height: 100%;
    }
</style>
<div class="modal-container modal-{open ? "open" : "close"} ">
    <div class="modal-content">
        <img src={project.banner} alt={project.name}/>
        <div class="modal-info">
            <div class="modal-title">
                <h2>{project.name}</h2>
            </div>
            <div class="modal-description">
                {#each project.description.split("\n") as paragraph}
                <p>{paragraph}</p>
                {/each}
            </div>
            {#each project.technologies as tech}
                <span class="modal-skill"><span class="modal-skill-title">{tech.name + ": "}</span>{tech.useCase}</span>
            {/each}
            <div class="footer">
                {#each project.links as link, index}
                    <a href={link.url} alt={link.name} target="_blank">{link.name}</a> {project.links.length > 1 && (index + 1) < project.links.length ? " - " : ""}
                {/each}
            </div>
        </div>
    </div>
    <button class="fade" on:click={() => activateModal(null)}></button>
</div>