<template>
<div class="Content">

    <div class="flex_c_h">
        <p class="Intro">Ich bin Marcus und ich code Webapps/Websites. </p>
    </div>
    <h3>Was sind meine Referenzen?</h3>
    <p class="article_point">Bei <a href="https://www.morgenland-teppiche.de/" target="_blank" rel="noopener noreferrer">Morgenland-Teppiche</a> habe ich über 1 Jahr als Frontend Dev gearbeitet und einen Webshop verwaltet.</p>
    <p class="article_point"> Ich habe eine 2 jährige staatliche Berufsausbildung zum Screendesigner + 1 Jahr Fachabi erfolgreich absolviert. </p>
    <p class="article_point">Neben Uni Projekten entwickle ich an kleinen Electron Web Apps.</p>

    <h3 class="HeadlineL InstrumentsH3" v-if="showPolygon == true">Tools/Sprachen die ich nutze</h3>
    <ul class="ListeSoftware SoftwareBox" v-if="showPolygon == true">
        <li>
            <img src="../../../assets/softwares/vue.svg" alt="Vue 3 Javascript">
            <p>Vue3 <br>(VueCLI)</p>
        </li>
        <li>
            <img src="../../../assets/softwares/vscode.svg" alt="VS Code Editor">

            <p> VS Code <br>(Editor)</p>
        </li>
        <li>
            <img src="../../../assets/softwares/electron.svg" alt="Electron">
            <p>Electron (Native Webapps)</p>
        </li>
        <li>
            <img src="../../../assets/softwares/nodejs.svg" alt="Node JS SASS">
            <p>NodeJS <br>(HTML, CSS/SASS, Javascript)</p>

        </li>
        <li>
            <img src="../../../assets/softwares/python.svg" alt="Python">
            <p>Python <br>(Tools/Scripts)</p>
        </li>
        <li>
            <img src="../../../assets/softwares/firebase.svg" alt="Firebase Database">
            <p>Firebase <br>(Database)</p>
        </li>
    </ul>

    <div class="LastSatzBox">
        <h3>Mich in einem Satz</h3>
        <p class="EinerSatz">Ich bin ein Technerd, der selbstständig sich neue Dinge beibringt und auf dem laufenden bleibt über neue Tools und APIs.</p>
    </div>
</div>
</template>

<script>
export default {
    props:{
        showPolygon: {
            type: Boolean,
            required: true
        }, 
    }
}
</script>
