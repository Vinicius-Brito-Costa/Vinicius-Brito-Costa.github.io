<script>
    import {marked} from 'marked'
    export let project, open, activateModal

    function parseMarkdown(md) {
        // marked.Renderer.prototype.paragraph = (text) => {
        //     return text
        // }
        marked.Renderer.prototype.paragraph = (text) => {
            if (text.startsWith("<img")) {
                return text + "\n";
            }
            return "<p>" + text.replace("\n", "<br/>") + "</p>";
        };

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
        width: 100%;
        height: 100%;
        top: 0;
        left: 0;
        position: absolute;
        align-items: center;
        justify-content: center;
    }
    .modal-content {
        z-index: 2;
        width: 80%;
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
        color: var(--secondary-color);
        flex: 1;
        display: flex;
        flex-direction: column;
        align-items: center;
        align-content: center;
        align-self: center;
    }
    .modal-title h2 {
        margin-bottom: 0;
        color: var(--secondary-accent-color);
    }
    .modal-title h4 {
        margin: 0 0 10px 0;
        font-weight: 100;
    }
    .modal-info {
        height: 100%;
        display: flex;
        flex-direction: column;
        margin: 0 10px;
        align-items: center;
    }
    .modal-skill {
        margin-bottom: 5px;
    }
    .modal-skill-title {
        color: var(--secondary-accent-color);
    }
    .modal-info span {
        margin-top: 5px;
    }
    .modal-description {
        overflow-y: scroll;
        display: flex;
        gap: 10px;
        flex-direction: row-reverse;
        /* height: 380px; */
        flex: 10;
        scrollbar-width: none;
    }
    :global(.modal-description p){
        flex: 1;
        text-align: justify;
        align-self: right;
    }
    .modal-skill-container {
        width: 100%;
        align-self: flex-end;
        display: flex;
        flex-direction: column;
        flex: 2;
        padding: 5px 0;
        border-top: 1px solid var(--main-color);
        border-bottom: 1px solid var(--main-color);
        height: 100%;
        justify-content: center;
    }
    :global(.video-player) {
        width: 400px;
        height: 400px;
        display: block;
        margin: auto;
    }
    :global(.modal-description img) {
        height: 100%;
        object-fit:cover;
        /* object-position: top; */
        flex: 2;
        /* border-left: 1px solid var(--main-color); */
        border: 1px solid var(--main-color);
    }
    :global(.modal-description a) {
        color: var(--secondary-accent-color);
    }

    .footer {
        flex: 1;
        height: 30px;
        align-content: end;
        align-self: flex-end;
        align-content: center;
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
        top: 18px;
        transform: translate(-98%);
        cursor: pointer;
    }

    @media only screen and (max-width: 1500px) {
        .modal-content {
            width: 90%;
        }
    }

    @media only screen and (max-width: 1180px) {
        .modal-container{
            height: 100%;
        }
        .modal-content {
            height: 95%;
        }
        .modal-info {
            height: 100%;
        }
        .modal-description {
            gap: 10px;
            flex-direction: column;
            width: 100%;
        }
        :global(.modal-description img) {
            height: 200px;
        }
        .modal-skill-container {
            height: 60px;
            overflow-y: scroll;
            justify-content:start;
        }
    }
</style>
<div class="modal-container modal-{open ? "open" : "close"} ">
    <div class="modal-content">
        <button class="modal-close-btn" on:click={() => activateModal(null)}>X</button>
        <div class="modal-info">
            <div class="modal-title">
                <h2>{project.name}</h2>
                <h4>{project.categories}</h4>
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