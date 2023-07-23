<script>
    export let selectedLink, name, setSelected
    const SELECTED_TEXT = "> "
</script>
<style>
    .info {
        font-family: var(--hack-font);
        font-size: var(--title-size-h3-full);
        letter-spacing: 5px;
    }
    .link {
        text-decoration: none;
        width: fit-content;
        cursor: pointer;
    }
    .is-selected {
        color: var(--secondary-accent-color);
    }
    .is-not-selected {
        color: var(--secondary-color);
    }
    li {
        padding-bottom: 10px;
    }
</style>
<li>
    <a class="link info {selectedLink == name ? 'is-selected' : 'is-not-selected'}" href={"/portfolio/" + name} on:click={() => setSelected(name)}>{selectedLink == name ? SELECTED_TEXT : ""}{name}()</a>
</li>