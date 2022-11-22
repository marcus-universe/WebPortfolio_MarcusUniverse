<template>
    <div>
        
        <div
            class="shareButtons flex_c_h gap1"
            @click="shareTrigger" v-if="copySupported && shareSupported">
            <Logo :icon="'share'"/>
            {{ copied ? 'link copied to clipboard' : '' }}
        </div>
    </div>
</template>

<script>
import Logo from '@/components/Ui/Logo.vue'
import {
    useClipboard, useShare
} from '@vueuse/core'
export default {
    components: {
        Logo
    },
    setup() {
        const { share, isSupported: shareSupported } = useShare({
            title: 'Marcus Universe Portfolio',
            text: 'Look at my awesome portfolio',
            url: 'https://marcus-universe.de',
        })

        const { copy, copied, isSupported: copySupported } = useClipboard({
            source: 'https://marcus-universe.de'
        })

        function shareTrigger() {
            if (shareSupported) {
                share()
            } else {
                copy()
            }
        }

        return {
            shareTrigger,
            copySupported,
            shareSupported,
            copied
        }
    }
}
</script>
<style lang="">
    
</style>