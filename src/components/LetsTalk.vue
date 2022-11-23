<template>
<section class="About Talk">
    <template v-if="lang.includes('de')"><h1 class="Headline AboutTitle">Schreib mich an</h1></template>
    <template v-if="!lang.includes('de')"><h1 class="Headline AboutTitle">Let's Talk</h1></template>
    

    <div class="talkmessage">
        <template v-if="!lang.includes('de')">
            <p class="Content">The best ways to send a message to me into my universe.
            </p>
        </template>

        <template v-if="lang.includes('de')">
            <p class="Content">Die besten Wege mir eine Nachricht in mein Universum zu senden.
            </p>
        </template>

    </div>

    <div class="social_media">

        <a target="_blank" href="https://www.linkedin.com/in/marcus-harting-626b1aa4/">
            <Logo :icon="'linkedin'"/>
            <div class="flex_c">
                <p v-if="lang.includes('de')" class="smallInfo">Jetzt vernetzen</p>
                <p v-if="!lang.includes('de')" class="smallInfo">Let's connect</p>
                <p>linkedin.com/in/marcus-harting</p>
            </div>
            
            

        </a>

    </div>
<div class="FormContainer flex_c_h">
    <form action="https://formsubmit.co/contact@marcus-universe.de" method="POST" class="Form flex_c_v gap1">
        <input type="text" name="name" required placeholder="Name">
        <input type="email" name="email" required placeholder="E-Mail">
        <input type="text" name="subject" required placeholder="Subject" v-model="subject">
        <textarea name="message" required placeholder="Write me a message"></textarea>
        <input type="hidden" name="_next" value="https://marcus-universe.de/#/submit">
        <input type="hidden" name="_subject" :value="'New Mail ' + subject">
        <input type="hidden" name="_captcha" value="false">
        <input type="hidden" name="_autoresponse" value="Marcus Universe received your Message. Be patient until you get an answer. The universe is very big and messages take time to get to you at the speed of light.">
        <button type="submit">Send</button>
    </form>
    </div>
</section>
</template>

<script>
import Logo from '@/components/Ui/Logo.vue'
export default {
    name: "Contact",
    data() {
        return {
            subject: "",
        };
    },
    components: {
        Logo,
    },
    computed: {
        lang() {
            return this.$store.state.lang;
        }
    }
}
</script>
