<template>
  <section class="home-container">
    <div class="container-sm h-full flex flex-column">
      <div class="home-height">
        <component :is="updatedComponent" />
      </div>
      <div class="bottom-menus flex flex-row align-center justify-between w-full">
        <div
          class="bottom-menu flex align-center justify-center"
          :class="index == menuIndex ? 'active' : ''"
          v-for="(menu,index) in menus"
          :key="index"
          @click="menuClicked(menu)"
        >
          <fa :icon="['fa',menu.icon]" />
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  head() {
    return {
      title: this.updatedComponent,
    };
  },
  computed: {
    updatedComponent() {
      return this.menus[this.menuIndex].component;
    },
  },
  mounted() {
    if (window.localStorage.getItem("menu")) {
      this.menuIndex = window.localStorage.getItem("menu");
    }
  },
  data() {
    return {
      menus: [
        {
          icon: "search",
          component: "Search",
        },
        {
          icon: "heart",
          component: "Likes",
        },
        {
          icon: "comment",
          component: "Chats",
        },
        {
          icon: "user",
          component: "Profile",
        },
      ],
      menuIndex: 0,
    };
  },
  methods: {
    menuClicked(menu) {
      this.menuIndex = this.menus.findIndex((menu_) => menu.icon == menu_.icon);
      window.localStorage.setItem("menu", this.menuIndex);
      this.$emit("menu-clicked", menu);
    },
  },
};
</script>

<style scoped>
.home-container {
  width: 100%;
  height: 100vh;
  background-color: #f6f6f6;
}

.bottom-menu {
  color: var(--theme-color);
  background-color: white;
  cursor: pointer;
  padding: 10px 0 20px;
  font-size: 20px;
  display: flex;
  width: 25%;
}

.bottom-menu.active {
  border-top: 3px solid var(--theme-color);
}

.home-height {
  height: 100%;
  max-height: (100% - 60px);
  overflow-y: auto;
}

@media (max-width: 992px) {
  .container-sm {
    max-width: 100%;
  }
}
</style>