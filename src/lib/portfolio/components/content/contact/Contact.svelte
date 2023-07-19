<script>
    import headData from "$lib/portfolio/common.json"
    import data from "$lib/portfolio/components/content/contact/contact.json"
</script>
<style>
    article {
        display: flex;
        width: 600px;
    }
    .contact {
        font-family: var(--hack-font);
    }
    .contact-name {
        color: var(--secondary-color);
    }
    .contact-link {
        color: var(--main-color);
    }
    .contact-link:hover {
        color: var(--main-accent-color);
    }
</style>
<svelte:head>
	<title>{headData.head["tab-settings"]["tab-names"].contact}</title>
    <meta name="description" content={data.meta.description} />
</svelte:head>
<article>
    <div class="contact">
        {#each data.contacts as contact}
            <h2 class="contact-name">{contact.name}: <a href={(contact.type == "email" ? "mailto:" : "") + contact.contact} target="_blank" class="contact-link">{contact.title}</a></h2>
        {/each}
        
    </div>
</article>