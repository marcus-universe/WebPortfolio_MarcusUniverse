import { createStore } from 'vuex'
import works from '@/assets/json/works.json'

export default createStore({
  state: {
    error: false,
    color_p: ["#3EE4FF", "#A25AFF", "#FFA05F"],
    color_bg: ["35, 45, 66", "57, 35, 66", "66, 40, 35"],
    screen: 'desktop',
    lang: 'en',
    mousePosition: {
      x: 0,
      y: 0
    },
    mouseSource: 'mouse',
    OpenVideo: false,
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
        },
    works: works,
    Banner: [
      {
      title: 'Sunrise Apartment',
      thumbnail: 'sunrise_thumbnail',
      video: 'sunrise',
      link: 'https://www.artstation.com/artwork/xYzgLR'
      },
      {
        title: 'VR Dream Room',
        thumbnail: 'dreamroom_thumbnail',
        video: 'dreamroom',
        link: 'https://www.artstation.com/artwork/2q22la'
      },
      {
        title: 'Dynamic Maschines',
        thumbnail: 'dynamicmaschines_thumbnail',
        video: 'dynamicmaschines',
        link: 'https://www.artstation.com/artwork/oA4wJJ'
      }
    ]

  },
  getters: {
    isDesktop: state => {
      if (state.screen === 'desktop' || state.screen === 'tablet') {
        return true;
      } else {
        return false;
      }
    }
  },
  mutations: {
    setScreen(state, payload) {
      state.screen = payload
    },
    setMousePosition(state, { x, y }) {
      state.mousePosition.x = x
      state.mousePosition.y = y
    },
    setMouseSource(state, payload) {
      state.mouseSource = payload
    },
    setVideo(state, payload) {
      state.OpenVideo = payload
    },
    setLang(state, payload) {
      state.lang = payload
    }
  },
  actions: {
  },
  modules: {
  }
})
