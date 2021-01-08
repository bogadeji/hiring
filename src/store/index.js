import axios from "axios";
// import data from "@/static/data.json";

import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
  state: {
    userDetails: []
},

getters: {
  userDetails: state => state.userDetails
},

mutations: {
  setUserDetails: (state, payload) => {
    state.userDetails = payload;
  }
},

actions: {
  async getUserDetails({ commit }) {
    try {
      const result = await axios.get(
        "https://hirng-x2021.glitch.me/api",
        {
          headers: {
            "Content-Type": "application/json"
          }
        }
      );
      console.log(result.data)
      if (result.data) {
        commit("setUserDetails", result.data);
      }
    } catch (e) {
      console.log("error", e);
    }
  }
},
  strict: debug
})
