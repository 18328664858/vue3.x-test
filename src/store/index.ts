import { createStore } from "vuex";
const defaultState = {
  name: "hw",
};

export default createStore({
  state() {
    return defaultState;
  },
  mutations: {
    changeName(state: typeof defaultState, data: string) {
      state.name = data;
    },
  },
  actions: {
    changeName(context, data) {
      context.commit("changeName", data);
    },
  },
  getters: {
    double(state: typeof defaultState) {
      return state.name;
    },
  },
});
