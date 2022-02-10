<template>
    <div class="sliderTopic">
    <svg class="leftSlide" v-on:click="LeftClick" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 300">
        <g class="cls-1">
            <g id="Circle">
                <circle
                    class="cls-2"
                    cx="150"
                    cy="150"
                    r="150" />
            </g>
            <g id="Rocket">
                <path
                    class="cls-3"
                    d="M197.51,127.74a10.75,10.75,0,0,0-2.62-.34H128.7l-23.28-23.28H55.65L80.36,127.4H68.94a10.46,10.46,0,0,0-10.43,10.43v24.34a10.2,10.2,0,0,0,.5,3.16,10.48,10.48,0,0,0,9.43,7.26H80.36L55.65,195.88h49.77L128.7,172.6h66.19a10.28,10.28,0,0,0,2.62-.34,97.83,97.83,0,0,0,29.24-9.56,71.31,71.31,0,0,0,17.6-12.7C228,133.69,205.15,128.92,197.51,127.74Zm-86,35.3A13.05,13.05,0,1,1,122,157.67,13,13,0,0,1,111.48,163Zm38.58,0a13,13,0,1,1,11.49-6.86A13,13,0,0,1,150.06,163Zm38.59,0a13.05,13.05,0,1,1,10.22-4.95A13,13,0,0,1,188.65,163Z" />
            </g>
            <g id="ShadowRocket">
                <path
                    class="cls-4"
                    d="M226.75,162.7a97.83,97.83,0,0,1-29.24,9.56,10.28,10.28,0,0,1-2.62.34H128.7l-23.28,23.28H55.65L80.36,172.6H68.44A10.48,10.48,0,0,1,59,165.33c3.15-.51,8.72-1.43,16.11-2.5s16.79-2.31,27.35-3.41A13,13,0,0,0,122,157.67c5.44-.41,11.08-.75,16.84-1a13,13,0,0,0,22.69-.48c5.24,0,10.52.11,15.8.33a13,13,0,0,0,21.52,1.58A232.6,232.6,0,0,1,226.75,162.7Z" />
            </g>
        </g>
    </svg>

    <svg class="rightSlide" v-on:click="RightClick" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 300 300">
        <g class="cls-1">
            <g id="Circle">
                <circle
                    class="cls-2"
                    cx="150"
                    cy="150"
                    r="150" />
            </g>
            <g id="Rocket">
                <path
                    class="cls-3"
                    d="M197.51,127.74a10.75,10.75,0,0,0-2.62-.34H128.7l-23.28-23.28H55.65L80.36,127.4H68.94a10.46,10.46,0,0,0-10.43,10.43v24.34a10.2,10.2,0,0,0,.5,3.16,10.48,10.48,0,0,0,9.43,7.26H80.36L55.65,195.88h49.77L128.7,172.6h66.19a10.28,10.28,0,0,0,2.62-.34,97.83,97.83,0,0,0,29.24-9.56,71.31,71.31,0,0,0,17.6-12.7C228,133.69,205.15,128.92,197.51,127.74Zm-86,35.3A13.05,13.05,0,1,1,122,157.67,13,13,0,0,1,111.48,163Zm38.58,0a13,13,0,1,1,11.49-6.86A13,13,0,0,1,150.06,163Zm38.59,0a13.05,13.05,0,1,1,10.22-4.95A13,13,0,0,1,188.65,163Z" />
            </g>
            <g id="ShadowRocket">
                <path
                    class="cls-4"
                    d="M226.75,162.7a97.83,97.83,0,0,1-29.24,9.56,10.28,10.28,0,0,1-2.62.34H128.7l-23.28,23.28H55.65L80.36,172.6H68.44A10.48,10.48,0,0,1,59,165.33c3.15-.51,8.72-1.43,16.11-2.5s16.79-2.31,27.35-3.41A13,13,0,0,0,122,157.67c5.44-.41,11.08-.75,16.84-1a13,13,0,0,0,22.69-.48c5.24,0,10.52.11,15.8.33a13,13,0,0,0,21.52,1.58A232.6,232.6,0,0,1,226.75,162.7Z" />
            </g>
        </g>
    </svg>

</div>
</template>

<script>
export default {
    props: {
        navlists: {
            type: Array,
            required: true
        },
        selectedIndex: {
            type: Number,
            required: true
        }
    },
    data() {
        return {
            MycurrentIndex: this.selectedIndex,
        }
    },
    methods: {
        LeftClick() {
            var self = this;
            this.MycurrentIndex = this.selectedIndex
            if (self.MycurrentIndex > 0) {
                self.MycurrentIndex--;
                self.$emit('ChangeNav', self.MycurrentIndex);
            }else{
                self.MycurrentIndex = self.navlists.length - 1;
                self.$emit('ChangeNav', self.MycurrentIndex);
            }
        },

        RightClick() {
            var self = this;
            this.MycurrentIndex = this.selectedIndex
            if (self.MycurrentIndex < self.navlists.length - 1) {
                self.MycurrentIndex++;
                self.$emit('ChangeNav', self.MycurrentIndex);
            }else{
                self.MycurrentIndex = 0;
                self.$emit('ChangeNav', self.MycurrentIndex);
            }
        }
    }
}
</script>