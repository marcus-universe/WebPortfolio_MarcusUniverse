import { createStore } from "vuex";
import works from "@/assets/json/works.json";
import softwareStack from "@/assets/json/softwarestack.json";
// import { supabase } from "./lib/supabaseClient";

export default createStore({
  state: {
    error: false,
    color_p: ["#3EE4FF", "#A25AFF", "#FFA05F"],
    color_bg: ["35, 45, 66", "57, 35, 66", "66, 40, 35"],
    screen: "desktop",
    lang: "en",
    mouseSource: "mouse",
    OpenVideo: false,
    navigation: {
      navlist: [
        {
          name: "Home",
          icon: "logo",
          subDo: "make",
          linkTitle: "",
          link: "",
          iconlink: "soundcloud",
          selected: false,
        },
        {
          name: "Explore",
          icon: "explore",
          subDo: "make",
          linkTitle: "Soundcloud Tracks",
          link: "explore",
          iconlink: "soundcloud",
          selected: false,
        },
        {
          name: "About",
          icon: "about",
          subDo: "write",
          linkTitle: "Github Profile",
          link: "about",
          iconlink: "github",
          selected: false,
        },
      ],
    },
    works: works,
    softwareStack: softwareStack,
    currentSelectedSoftwareStack: "all",
    Banner: [
      {
        title: "Sunrise Apartment",
        thumbnail: "sunrise_thumbnail",
        video: "sunrise",
        link: "https://www.artstation.com/artwork/xYzgLR",
      },
      {
        title: "VR Dream Room",
        thumbnail: "dreamroom_thumbnail",
        video: "dreamroom",
        link: "https://www.artstation.com/artwork/2q22la",
      },
      {
        title: "Dynamic Machines",
        thumbnail: "dynamicmaschines_thumbnail",
        video: "dynamicmaschines",
        link: "https://www.artstation.com/artwork/oA4wJJ",
      },
    ],
  },
  getters: {
    isDesktop: (state) => {
      if (state.screen === "desktop" || state.screen === "tablet") {
        return true;
      } else {
        return false;
      }
    },
    getSoftwareFilter: (state) => {
      if (state.currentSelectedSoftwareStack === "all") {
        return state.softwareStack.filterKathegorie;
      } else {
        return state.softwareStack.filterKathegorie.filter(
          (software) => software.tag === state.currentSelectedSoftwareStack
        );
      }
    },
  },
  mutations: {
    setScreen(state, payload) {
      state.screen = payload;
    },
    setMouseSource(state, payload) {
      state.mouseSource = payload;
    },
    setVideo(state, payload) {
      state.OpenVideo = payload;
    },
    setLang(state, payload) {
      state.lang = payload;
    },
    selectSoftwareStack(state, payload) {
      state.currentSelectedSoftwareStack = payload;
    },
    setActiveSoftwareStack(state, { active, software, index, getters }) {
      if (getters.getSoftwareFilter[index].active === true) {
        console.log("already active " + active + " " + software + " " + index);
        getters.getSoftwareFilter[index].active = false;
        state.currentSelectedSoftwareStack = "all";
      } else {
        state.softwareStack.filterKathegorie.forEach((item) => {
          item.active = false;
        });
        console.log("not active " + active + " " + software + " " + index);
        state.softwareStack.filterKathegorie[index].active = true;
        state.currentSelectedSoftwareStack = software;
      }
    },
  },
  actions: {
    changeScreen({ commit }, payload) {
      commit("setScreen", payload);
    },
    changeMouseSource({ commit }, payload) {
      commit("setMouseSource", payload);
    },
    changeSoftwareStack({ commit, getters }, { active, software, index }) {
      commit("setActiveSoftwareStack", { active, software, index, getters });
    },
  },
  modules: {},
});
