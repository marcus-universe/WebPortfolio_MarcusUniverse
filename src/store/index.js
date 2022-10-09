import { createStore } from 'vuex'

export default createStore({
  state: {
    error: false,
    color_p: ["#3EE4FF", "#A25AFF", "#FFA05F"],
    color_bg: ["35, 45, 66", "57, 35, 66", "66, 40, 35"],
    navigation: {
        navlist: [
                {
                        name: 'Home',
                        icon: 'logo',
                        subDo: 'make',
                        linkTitle: '',
                        link: '',
                        iconlink: 'soundcloud',
                        selected: false
                    },
                    {
                        name: 'Explore',
                        icon: 'explore',
                        subDo: 'make',
                        linkTitle: 'Soundcloud Tracks',
                        link: 'explore',
                        iconlink: 'soundcloud',
                        selected: false
                    },
                    {
                        name: 'About',
                        icon: 'about',
                        subDo: 'write',
                        linkTitle: 'Github Profile',
                        link: 'about',
                        iconlink: 'github',
                        selected: false
                    }
                ]
            }

  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
