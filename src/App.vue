<template>
<Menu :navlists="navigation.navlist" />
<StartPage />
</template>

<script>
import Menu from './components/Menu.vue'
import StartPage from './components/StartPage.vue'

export default {
    name: 'App',
    components: {
        Menu,
        StartPage
    },
    data() {
        return {
            navigation: {
                navlist: [{
                        name: 'Home',
                        link: '#Home'
                    },
                    {
                        name: 'Works',
                        link: '#Work'
                    },
                    {
                        name: 'About',
                        link: '#About'
                    }
                ]
            }

        }
    }
}
</script>
