export const state = () => ({
  socialID: '',
  firstName: '',
  lastName: '',
  email: '',
  tel: '',
  oddslots: [],
  evenslots: [],
  dept: 0,
});

export const getters = {};

export const mutations = {
  user(state, userObject) {
    state = userObject;
  },
  userInfo(state, userInfo) {
    // state.user.socialID = this.$auth.user.sub;
    state.user.firstName = userInfo.firstname;
    state.user.lastName = userInfo.lastname;
    state.user.email = userInfo.email;
    state.user.tel = userInfo.tel;
  },
  firstName(state, value) {
    state.user.firstName = value;
  },
  lastName(state, value) {
    state.user.lastName = value;
  },
  email(state, value) {
    state.user.email = value;
  },
  tel(state, value) {
    state.user.tel = value;
  },
  resetDept(state, value) {
    state.dept = 0;
  },
};

export const actions = {};
