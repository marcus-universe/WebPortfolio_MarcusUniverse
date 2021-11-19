<template>
  <Menu />
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
  }
}
</script>
