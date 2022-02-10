<template>
    <div class="workinprogress">
    <div class="workingcontent">
        <h1>Universe in Development</h1>
        <p>
            This portfolio universe is currently under construction. <br>
            While then follow me on Social Media.
        </p>

        <div class="social_media">
            <a href="https://www.artstation.com/marcusharting"><img src="../assets/artstation.svg" alt="Artstation"></a>
            <a href="https://www.instagram.com/marcustutorials/"><img src="../assets/insta.svg" alt="Instagram"></a>
            <a href="https://www.youtube.com/user/MarcusTutorials1"><img src="../assets/yt.svg" alt="YouTube"></a>

        </div>

    </div>
</div>    
</template>


<style lang="sass">
@import '../sass/base.sass'
.workinprogress
    background: rgba(var(--color_bg), 1)
    height: 100vh
    width: 100%
    display: flex
    justify-content: center
    align-items: center
    font-family: $fontNoto
    text-align: center
    word-wrap: break-word
    h1
        margin: 0
        padding: 0 20px
        color: $nBlue
        font-size: 6rem
        word-wrap: break-word
        @include media('<=tablet')
            font-size: 5rem
        @include media('<=phone')
            font-size: 3rem
    p
        color: $WColor
        font-size: 2rem
        word-wrap: break-word
        @include media('<=tablet')
            font-size: 1.5rem
        @include media('<=phone')
            font-size: 1rem
    .social_media
        display: flex
        justify-content: center
        align-items: center
        flex-direction: row
        margin-top: 2rem
        a
            color: $WColor
            margin-right: 3rem
            @include media('<=tablet')
                margin-right: 2rem
            @include media('<=phone')
                margin-right: 1rem
            &:hover
                color: $nBlue
                img
                    opacity: 1
            &:last-child
                margin-right: 0
            img
                width: 5rem
                opacity: 0.5
                transition: opacity 0.5s ease-in-out
</style>
