<style>
    article {
        flex: .5;
        font-family: var(--hack-font);
        overflow-y: scroll;
        overflow-x: hidden;
        display: flex;
        margin-left: auto;
    }
    article h3 {
        font-size: var(--title-size-h3-full);
        color: var(--secondary-color);
        margin-bottom: 0px;
        margin-top: 5px;
        text-transform:capitalize;
    }
    .container {
        width: 100%;
        display: flex;
        flex-direction: column;
    }
    .title {
        margin-bottom: 20px;
    }
    .skill-container {
        flex-direction: column;
        flex: 1;
    }
    .tag-container {
        display: flex;
        align-content: center;
        justify-content: flex-start;
        flex-direction: row;
        align-items: center;
        flex-wrap: wrap;
    }

    @media only screen and (max-width: 1180px) {
        article{
            flex: 1;
            display: flex;
            flex-direction: column;
            height: 100%;
        }
        .container {
            height: 100%;
        }
        .tag-container{
            margin-left: 20px;
            flex-wrap: wrap;
        }
        .mask-wrapper {
            width: 100%;
            display: flex;
            flex-direction: column;
            -webkit-mask-image: -webkit-linear-gradient(-90deg, rgba(0,0,0,1) 95%, rgba(255, 255, 255, 0) 100%);
        }
    }
</style>
<script>
    import headData from "$lib/portfolio/common.json"
    import data from "$lib/portfolio/components/content/skills/skills.json"
    import SkillTag from "$lib/portfolio/components/SkillTag.svelte";
</script>
<svelte:head>
	<title>{headData.head["tab-settings"]["tab-names"].skills}</title>
    <meta name="description" content={data.meta.description} />
</svelte:head>
<article class="mask-wrapper">
    <div class="container">
        <h3 class="title">Technologies:</h3>
        <div class="skill-container">
            {#each data.skills as skillBranch}
                <h3>{Object.keys(skillBranch).toString().replace("-", " ")}</h3>
                <div class="tag-container">
                    {#each skillBranch[Object.keys(skillBranch)] as skill}
                        <SkillTag skill={skill} />
                    {/each}
                </div>
            {/each}
        </div>
    </div>
</article>