import { createStore } from "vuex";
import api from "@/api/utilities/service";

export default createStore({
  state: {
    navShowed: false,
    dialogCallbackShowed: false,
    contactPhone: "+7 (347) 258-66-55",
    headerPhone: "+7 (347) 258-66-55",
    domrf: 'https://наш.дом.рф/сервисы/каталог-новостроек/объект/52088',
    homeSite: "https://www.aisrb.ru",
    address: null,
    coords: null,
    worktime: null,
    banners: [],
    bannerWasShown: false,
  },
  getters: {
    unmaskedPhone() {
      return (phone) => "+" + phone.replace(/\D/g, "");
    },
    shortPhone(state) {
      return state.headerPhone.split(" ")[2];
    },
    prefixhone(state) {
      const parts = state.headerPhone.split(" ");
      return parts[0] + " " + parts[1];
    },
    address(state) {
      return state.address;
    },
    coords(state) {
      return state.coords;
    },
    worktime(state) {
      return state.worktime;
    },
    banners(state) {
      return state.banners;
    },
    bannerWasShown(state) {
      return state.bannerWasShown;
    },
  },
  mutations: {
    setBannerWasShown(state, payload) {
      if (typeof payload !== "boolean")
        throw new Error("payload must be boolean");
      state.bannerWasShown = payload;
    },
    setAddress(state, payload) {
      state.address = payload;
    },
    setWorktime(state, payload) {
      state.worktime = payload;
    },
    setBanners(state, payload) {
      state.banners = payload;
    },
    setCoords(state, payload) {
      if (typeof payload !== "string") throw "payload must be string";
      let [lat, lng] = payload.split(", ");
      lat = parseFloat(lat);
      lng = parseFloat(lng);
      if (isNaN(lat) || isNaN(lng)) throw "lat lng must be float";
      state.coords = [lat, lng];
    },
    navToggle(state, value) {
      state.dialogCallbackShowed = false;
      if (typeof value === "boolean") return (state.navShowed = value);
      state.navShowed = !state.navShowed;
    },
    callbackToggle(state, value) {
      state.navShowed = false;
      if (typeof value === "boolean")
        return (state.dialogCallbackShowed = value);
      state.dialogCallbackShowed = !state.dialogCallbackShowed;
    },
  },
  actions: {
    async getFeedback(_c, { theme, name, cellphone }) {
      return await api.swot
        .post("feedback", {
          json: {
            client_id: process.env.VUE_APP_CLIENT_ID,
            client_secret: process.env.VUE_APP_CLIENT_SECRET,
            email_ids: [2],
            theme: theme,
            user_name: name,
            user_phone: cellphone,
            crm_lead: 0,
            _dictionary: {
              user_name: "Имя пользователя",
            },
          },
        })
        .json();
    },
    async getAddress({ commit }) {
      const {
        data: { body },
      } = await api.swot("static_pages/1").json();
      commit("setAddress", body);
      return body;
    },
    async getCoords({ commit }) {
      const {
        data: { body },
      } = await api.swot("static_pages/2").json();
      commit("setCoords", body);
      return body;
    },
    async getWorktime({ commit }) {
      const {
        data: { body },
      } = await api.swot("static_pages/3").json();
      commit("setWorktime", body);
      return body;
    },
    async getBanners({ commit }) {
      const { data } = await api.swot("documents").json();
      const docNames = ["banner-desktop", "banner-mobile"];
      const list = Array.isArray(data) ? data : [];
      const banners = list.filter((doc) => docNames.includes(doc.title));
      commit("setBanners", banners);
    },
    async getMetric() {
      const {
        data: { body },
      } = await api.swot("static_pages/5").json();
      return body;
    },
  },
  modules: {
    news: require("./news").default,
    flats: require("./flats").default,
    storeys: require("./storeys").default,
    entrances: require("./entrances").default,
    loaders: require("./loaders").default,
    galleries: require("./galleries").default,
  },
});
