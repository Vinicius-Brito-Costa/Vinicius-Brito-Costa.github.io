<script>
    export let height, name, fullres, lowres

    let image_loaded = false
    function onload() {
        image_loaded = true
    }
</script>

<style>
    div, img {
        all:none;
    }
    .blur_mode {
        position: relative;
        opacity: .5;
        display: block;
        height: 100%;
        width: 100%;
        background-size: cover;
        background-position: center;
    }
    .blur_mode > img {
        opacity: 0;
        transition: ease-in .2s;
    }
    .blur_mode::before {
        content: "";
        position: absolute;
        inset: 0;
        animation: pulse 1.5s ease-out infinite;
        background-color: rgba(255, 255, 255, 0.2);
    }
    @keyframes pulse {
        0% {
            background-color: rgba(255, 255, 255, 0);
        }
        50% {
            background-color: rgba(255, 255, 255, 0.2);
        }
        100% {
            background-color: rgba(255, 255, 255, 0);
        }
    }
    .blur_mode.loaded::before{
        animation: none;
        background-color: transparent;
    }
    .blur_mode.loaded img{
        opacity: 1;
    }
    .main-image {
        height: 100%;
        width: 100%;
        object-position: center;
        object-fit: cover;
    }
</style>

<div class=blur_mode class:loaded={image_loaded}
        style="transition: .2s ease-out background-image;
            {lowres ? "background-image:url(" + lowres + ");" : null}">
    <img class="main-image" src={fullres} alt={name} loading="lazy" use:onload />
</div>