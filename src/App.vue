<template>
<router-view v-slot="{Component}">
    <transition
        name="fade"
        mode="out-in">
        <component :is="Component" />
    </transition>
</router-view>

<!-- <p>
  Klicken Sie <a href="#" @click.prevent="disableTracking">hier</a>,
  um das Tracking durch Google Analytics zu deaktivieren.
</p> -->
</template>

<style lang="scss">
@font-face {
  font-family: Assistant;
  src: url(./assets/fonts/Assistant/Assistant-VariableFont_wght.ttf) format("truetype");
}

// @font-face {
//     font-family: 'Noto Sans JP';
//     font-weight: 100;
//     font-display: swap;
//     src: url('./assets/fonts/NotoSansJP/NotoSansJP-Thin.otf') format('opentype');
// }
// @font-face {
//   font-family: 'Noto Sans JP';
//   src: url('./assets/fonts/NotoSansJP/NotoSansJP-Regular.otf') format('opentype');
//   font-weight: 400;
//   font-display: swap;
// }
// @font-face {
//   font-family: 'Noto Sans JP';
//   src: url('./assets/fonts/NotoSansJP/NotoSansJP-Medium.otf') format('opentype');
//   font-weight: 500;
//   font-display: swap;
// }
// @font-face {
//   font-family: 'Noto Sans JP';
//   src: url('./assets/fonts/NotoSansJP/NotoSansJP-Bold.otf') format('opentype');
//   font-weight: 700;
//   font-display: swap;
// }
// @font-face {
//   font-family: 'Noto Sans JP';
//   src: url('./assets/fonts/NotoSansJP/NotoSansJP-Black.otf') format('opentype');
//   font-weight: 900;
//   font-display: swap;
// }

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
    transform: scale(1);
}

.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.5s ease, transform 0.5s ease;
}
</style>

<script>
export default {
    methods: {
        disableTracking: function () {
            this.$ga.disable();
            alert('Tracking disabled');
        }
    }
}
</script>
