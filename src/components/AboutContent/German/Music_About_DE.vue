<template>
<div class="Content">

    <div class="flex_c_h">
        <p class="Intro">Ich bin Marcus und produziere Musik. </p>
    </div>
    <h3>Was sind meine Referenzen?</h3>
    <p class="article_point">Ich spiele seit über 10 Jahren Piano regelmäßig und Gitarre seit Kindesalter.</p>
    <p class="article_point"> Zudem spiele ich gern mit analogen und digitalen Synthesizern und erstelle meine eignen Patches. </p>
    <p class="article_point">Online mache ich auf meinen <a href="https://www.youtube.com/c/MarcusUniverse-Official" target="_blank" rel="noopener noreferrer">YouTube Kanal</a> und im privaten einige Loop Sessions, wo ich innerhalb kurzer Zeit Songs kreiere mit meiner Loopstation (Boss RC 505). Hier kommen alle Instrumente / Midi Controller zusammen.</p>
    <p class="article_point">Auf <a href="https://soundcloud.com/marcus-universe/tracks" target="_blank" rel="noopener noreferrer">Soundcloud</a> veröffentliche ich meine Songs.</p>

    <h3>Lieblings Genres</h3>
    <p class="article_point textcenter">80s Synthwave und Electro Swing</p>

    <h3 class="HeadlineL InstrumentsH3" v-if="showPolygon == true ">Welche Software ich nutze</h3>
    <ul class="ListeSoftware SoftwareBox" v-if="showPolygon == true">
        <li>
            <img src="../../../assets/softwares/fl_studio.svg" alt="fl studio imageline">
            <p> FL Studio <br>(DAW)</p>
            </li>
        <li>
            <img src="../../../assets/softwares/vcv.svg" alt="VCV Rack">
            
            <p>VCV Rack <br>(Synthesizer Builder)</p>
            </li>
        <li>
            <img src="../../../assets/softwares/vital.svg" alt="Vital VST">
            <p>Vital <br>(Lieblings VST)</p>
            </li>
    </ul>

    <h3 class="HeadlineL InstrumentsH3">Meine Instrumente</h3>
    <ul class="ListeSoftware Instruments">
        <li>Midi Keyboard</li>
        <li>Hybrid Synth</li>
        <li>Stratocaster E-Gitarre</li>
        <li>Launchpad Mini</li>
        <li>Boss RC 505 Loopstation</li>
        <li>Membran Mikrofon</li>
    </ul>

    <div class="LastSatzBox">
        <h3>Mich in einem Satz</h3>
        <p class="EinerSatz">Ich bin ein Technerd, der selbstständig sich neue Dinge beibringt und es liebt an Synthesizern zu spielen.</p>
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