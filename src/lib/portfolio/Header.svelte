<script>
    import data from "./common.json"
    const startDate = new Date(data.header["experience-start-date"])

    function calcDate(date) {
        let diff = Math.floor(new Date().getTime() - date.getTime())

        let experience = new Date(diff)

        let message = (experience.getFullYear() - 1970) + " YEARS"
        if (experience.getMonth() > 0) {
            message += " AND " + experience.getMonth() + " MONTHS"
        }
        return message
    }
</script>
<style>
    .title {
        padding: 0px;
        margin: 0px;
        font-family: var(--hack-font);
        font-size: var(--title-size-h1-full);
        color: var(--main-color);
    }
    .font {
        font-family: var(--hack-font);
        color: var(--secondary-color)
    }
</style>
<h1 class="title">{data.header.title}</h1>
<div class="font">{data.header["sub-title"]}</div>
<div class="font">{calcDate(startDate)} OF EXPERIENCE</div>

