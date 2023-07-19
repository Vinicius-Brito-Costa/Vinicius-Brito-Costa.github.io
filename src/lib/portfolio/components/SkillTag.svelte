
<script>
    export let skill
    const hashtagUrl = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9ImN1cnJlbnRDb2xvciIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIGNsYXNzPSJsdWNpZGUgbHVjaWRlLWhhc2giPjxsaW5lIHgxPSI0IiB4Mj0iMjAiIHkxPSI5IiB5Mj0iOSIvPjxsaW5lIHgxPSI0IiB4Mj0iMjAiIHkxPSIxNSIgeTI9IjE1Ii8+PGxpbmUgeDE9IjEwIiB4Mj0iOCIgeTE9IjMiIHkyPSIyMSIvPjxsaW5lIHgxPSIxNiIgeDI9IjE0IiB5MT0iMyIgeTI9IjIxIi8+PC9zdmc+"
</script>
<style>
    .skill-tag {
        display: block;
        width: fit-content;
        background-color: var(--main-color);
        color: black;
        border: 1px solid black;
        border-radius: 0.35rem;
        padding: 3px 15px;
        margin: 5px 5px;
        transition: background-color 0.5s ease-in-out;
        cursor: default;
    }
    .skill-tag:hover{
        background-color: var(--main-accent-color);
    }
    .skill-tag div {
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .skill-tag img {
        height: 15px;
    }
</style>
<span class="skill-tag"><div><img src={hashtagUrl} alt="hashtag" />{skill.name}</div></span>