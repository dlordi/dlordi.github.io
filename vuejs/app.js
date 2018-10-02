
Vue.use(Vuetify);
Vue.use(VueRouter);
Vue.use(Vuex);

const app = new Vue({
  el: 'v-app',
  data: {
    navLeft: {
      visible: true,
      tiles: [
        { icon: 'dashboard', title: 'Dashboard', link: '/dashboard', },
        { icon: 'settings', title: 'Settings', link: '/settings', },
      ],
    },

    tbrTop: {
      items: [
        { title: 'Home', icon: 'dashboard', link: '/home', },
        { title: 'About', icon: 'question_answer', link: '/about', },
      ]
    },

    dlgSimple: { visible: false, title: '', text: '', },

    dtbSimple: {
      headers: [
        { value: 'h1', text: 'Header 1', align: 'left', },
        { value: 'h2', text: 'Header 2', align: 'center', },
        { value: 'h3', text: 'Header 3', align: 'right', },
      ],
      items: [
        { h1: '1.1', h2: '1.2', h3: '1.3', },
        { h1: '2.1', h2: '2.2', h3: '2.3', },
      ],
    },
  },

  mounted() {
  },

  methods: {
    navLeftTileClick(tile) {
      console.log(tile.link)
    },
    tbrTopItemClick(item) {
      this.dlgSimple.title = 'Hey'
      this.dlgSimple.text = item.link
      this.dlgSimple.visible = true
    },
    dlgSimpleActionClick() {
      this.dlgSimple.visible = false
    },
  },

  store: new Vuex.Store({
    state: {},
    mutations: {},
    actions: {},
    getters: {},
  }),

  router: new VueRouter({
    routes: [
      { path: '/', component: {template: '<h1>INDEX</h1>'}, },
      { path: '/home', component: {template: '<h1>HOME</h1>'}, },
      { path: '/about', component: {template: '<h1>ABOUT</h1>'}, },
    ],
    // non usa # per il routing ma si basa sull'errore 404
    // che deve essere restituito dal web server
    // mode: 'history',
  }),

});
