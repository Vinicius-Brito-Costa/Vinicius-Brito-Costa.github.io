<script>
    import {marked} from 'marked'
    export let project, open, activateModal

    function parseMarkdown(md) {
        marked.Renderer.prototype.paragraph = (text) => {
            return text
        }
        return marked.parse(md.default, {gfm: true, mangle: false})
    }
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
        width: 90%;
        height: 700px;
        border: 3px solid var(--main-color);
        font-family: var(--hack-font);
        color: var(--secondary-color);
        display: flex;
        flex-direction: column;
        background-color: black;
        position: relative;
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
        height: 680px;
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
        margin-bottom: auto;
        display: flex;
        flex-direction: column;
    }
    .modal-skill-container {
        width: 100%;
        align-self: flex-end;
        display: flex;
        flex-direction: column;
        margin: 10px 0;
        padding: 5px 0;
        border-top: 1px solid var(--main-color);
        border-bottom: 1px solid var(--main-color);
    }
    :global(.video-player) {
        width: 400px;
        height: 400px;
        display: block;
        margin: auto;
    }
    :global(.modal-description img) {
        height: 200px;
        object-fit: contain;
        margin-bottom: 10px;
    }

    .footer {
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
    .modal-close-btn {
        background-color: transparent;
        border: none;
        color: var(--secondary-color);
        font-size: 30px;
        position: absolute;
        left: 98%;
        transform: translate(-98%);
        cursor: pointer;
    }

    @media only screen and (max-width: 1180px) {
        .modal-container{
            height: 100vh;
        }
        .modal-content {
            height: 95vh;
        }
        .modal-info {
            height: 100%;
        }
        .modal-skill-container {
            max-height: 70px;
            overflow-y: scroll;
        }
    }
</style>
<div class="modal-container modal-{open ? "open" : "close"} ">
    <div class="modal-content">
        <button class="modal-close-btn" on:click={() => activateModal(null)}>X</button>
        <div class="modal-info">
            <div class="modal-title">
                <h2>{project.name}</h2>
            </div>
            <div class="modal-description">
                {#await import(`./content/projects/markdown/${project.markdown}.md?raw`)}
                    Loading...
                {:then md}
                    {@html parseMarkdown(md)}
                {/await}
            </div>
            <div class="modal-skill-container">
                {#each project.technologies as tech}
                    <span class="modal-skill"><span class="modal-skill-title">{tech.name + ": "}</span>{tech.useCase}</span>
                {/each}
            </div>
            <div class="footer">
                {#each project.links as link, index}
                    <a href={link.url} alt={link.name} target="_blank">{link.name}</a> {project.links.length > 1 && (index + 1) < project.links.length ? " - " : ""}
                {/each}
            </div>
        </div>
    </div>
    <button class="fade" on:click={() => activateModal(null)}></button>
</div>