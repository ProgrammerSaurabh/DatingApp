export default {
  ssr: false,
  target: "static",
  head: {
    titleTemplate: "%s",
    htmlAttrs: {
      lang: "en"
    },
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { hid: "description", name: "description", content: "A Dating App" }
    ],
    link: []
  },

  css: ["~/assets/styles/style.css"],

  plugins: [],

  components: true,

  buildModules: [],

  modules: [
    "@nuxtjs/axios",
    [
      "nuxt-fontawesome",
      {
        component: "fa",
        imports: [
          {
            set: "@fortawesome/free-solid-svg-icons",
            icons: ["faUser", "faHeart", "faComment", "faSearch", "faTimes"]
          },
          {
            set: "@fortawesome/free-brands-svg-icons",
            icons: ["faGooglePlus", "faTwitter", "faInstagram"]
          }
        ],
        icons: {
          solid: true,
          brands: true
        }
      }
    ]
  ],

  build: {}
};
