<template>
<div class="SoftwareSkills flex_c_v gap2">

    <transition-group
        name="fadeWork"
        tag="div"
        class=" flex_c_h gap2 filterSoftware">
        <div
            class=" flex_c alignCenter SoftwareCategorie"
            v-for="(software, index) in getSoftwareFilter"
            :key="software"
            @click="selectSoftwareStack(software.tag, software.active, index)"
            :class="[{ 'active': software.active }, { 'flex_wrap': screen !== 'desktop' }]">
            <h3>{{software.name}}</h3>
        </div>
    </transition-group>

    <transition-group
        name="fadeWork"
        tag="div"
        class="softwareList flex_c_h gap2 flex_wrap alignStretch">
        <div
            class="softwareCard flex_c"
            v-for="programm in filteredSoftwareList"
            :key="programm">
            <Logo :icon="programm.link" />
            <h4>{{programm.name}}</h4>
        </div>
    </transition-group>

</div>
</template>

<script>
import Logo from '@/components/Ui/Logo.vue'
export default {
    name: 'SoftwareSkills',
    components: {
        Logo
    },
    methods: {
        selectSoftwareStack(software, active, index) {
            this.$store.dispatch('changeSoftwareStack', {
                active,
                software,
                index
            })

        }
    },
    computed: {
        screen() {
            return this.$store.state.screen
        },
        softwareStack() {
            return this.$store.state.softwareStack
        },
        getSoftwareFilter() {
            return this.$store.getters.getSoftwareFilter
        },
        filteredSoftwareList() {
            return this.$store.state.softwareStack.softwareList.filter(item => {
                return item.tags.includes(this.$store.state.currentSelectedSoftwareStack)
            })
        },
        currentSelectedSoftwareStack() {
            return this.$store.state.currentSelectedSoftwareStack
        }
    },

}
</script>

<style lang="">

</style>
