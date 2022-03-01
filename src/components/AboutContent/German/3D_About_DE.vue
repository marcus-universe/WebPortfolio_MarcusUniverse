<template>
<div class="Content">

    <div class="flex_c_h">
        <p class="Intro">Ich bin Marcus und mache 3D-Art, XR-Anwendungen,
            <br>
            interaktive 3D-Szenen oder was immer Sie brauchen. </p>
    </div>
    <h3>Was sind meine Referenzen?</h3>
    <p class="article_point">Seit 2012 nutze ich 3D Software für einige Hobby-Projekte, 3D Animationen für mein <a href="https://www.youtube.com/c/MarcusUniverse-Official" target="_blank" rel="noopener noreferrer">YouTube Kanal</a>. Dazu gehören Musikvideo-Visuals, Hintergründe für Greenscreens, Wallpapers bis hin zu coolen VR Projekten.</p>
    <p class="article_point"> Außerdem habe ich über 2,5 Jahre Berufserfahrung bei <a href="https://www.morgenland-teppiche.de/" target="_blank" rel="noopener noreferrer">Morgenland-Teppiche</a> gesammelt. Dort habe ich Aufgaben, von der Frontend Webentwicklung, Social Media Content Produktion, mit Foto / Video-Shootings im Studio, bis hin zu 3D Raum Visualisierungen, übernommen. </p>
    <p class="article_point">Auch habe ich an Online 3D Art Contests teilgenommen wie z.B die "Dynamic Machines Challange".</p>
    <p class="article_point">Während meines Kommunikationsdesign-Studiums habe ich einige 3D Projekte umgesetzt im Bereich Marketing und Produktvisualisierung.</p>

    <h3 class="HeadlineL InstrumentsH3" v-if="showPolygon == true">Software die ich mag</h3>
    <ul class="ListeSoftware SoftwareBox" v-if="showPolygon == true">
        <li>
            <img src="../../../assets/softwares/unrealengine.svg" alt="Unreal Engine Epic Games">
            <p>Unreal Engine <br>(Render, Interaktivität)</p>

        </li>
        <li>
            <img src="../../../assets/softwares/blender.svg" alt="Blender 3D Modelling">
            <p>Blender <br>(Modellieren)</p>
        </li>
        <li> 
       <img src="../../../assets/softwares/davinciresolve.svg" alt="Davinci Resolve">
           <p>Davinci Resolve <br>(Videoschnitt)</p> </li>
        <li> 
            <img src="../../../assets/softwares/ae.svg" alt="After Effects">
           <p>Adobe After Effects <br>(VFX / Motion Graphics)</p> </li>
        <li> 
            <img src="../../../assets/softwares/adobecloud.svg" alt="Adobe Creative Cloud">
           <p>Adobe Suite <br>(Illustrationen, Texturen, Mockups)</p> </li>
        <li> 
            <img src="../../../assets/softwares/pureref.svg" alt="Pureref">
            <p>PureRef <br>(Moodboards)</p> </li>
    </ul>

    <div class="LastSatzBox">
        <h3>Mich in einem Satz</h3>
        <p class="EinerSatz">Ich bin ein Technerd, der ständig selbstständig sich neue Dinge beibringt und Wege findet, Technik mit Design zu verbinden.</p>
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