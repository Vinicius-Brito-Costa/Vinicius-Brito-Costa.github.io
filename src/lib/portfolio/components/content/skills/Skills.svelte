<style>
    article {
        font-family: var(--hack-font);
    }
    article h3 {
        font-size: var(--title-size-h3-full);
        color: var(--secondary-color);
        margin-bottom: 0px;
        margin-top: 5px;
        text-transform:capitalize;
    }
    .title {
        margin-bottom: 20px;
    }
    .tag-container {
        display: flex;
    }
</style>
<script>
    import headData from "$lib/portfolio/common.json"
    import data from "$lib/portfolio/components/content/skills/skills.json"
    import SkillTag from "$lib/portfolio/components/SkillTag.svelte";
</script>
<svelte:head>
	<title>{headData.head["tab-settings"]["tab-names"].contact}</title>
    <meta name="description" content={data.meta.description} />
</svelte:head>
<article>
    <h3 class="title">Technologies:</h3>
    <div>
        {#each data.skills as skillBranch}
            <h3>{Object.keys(skillBranch).toString().replace("-", " ")}</h3>
            <div class="tag-container">
                {#each skillBranch[Object.keys(skillBranch)] as skill}
                    <SkillTag skill={skill} />
                {/each}
            </div>
        {/each}
    </div>
</article>