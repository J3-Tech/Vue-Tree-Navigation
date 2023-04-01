<template>
  <div id="app" :class="open ? 'navOpen' : ''">
    <div class="container">
      <button id="hamburger" class="button button-clear" v-on:click="open = !open">
        <i class="fas fa-2x fa-bars"></i>
      </button>
      <nav>
        <vue-tree-navigation :items="items" :defaultOpenLevel="defaultOpenLevel" />
      </nav>
      <main>
        <a
          id="github"
          href="https://github.com/J3-Tech/vue-tree-navigation"
          target="_blank"
          ><i class="fab fa-2x fa-github"></i
        ></a>
        <router-view></router-view>
      </main>
    </div>
  </div>
</template>

<script>
import TreeNavigation from "../src/components/TreeNavigation/TreeNavigation";

export default {
  data() {
    return {
      open: false,
      items: [
        {
          name: "Introduction",
          path: "/",
          children: [
            { name: "Features", element: "features" },
            { name: "Requirements", element: "requirements" },
            { name: "Demo", element: "demo" },
          ],
        },
        {
          name: "Installation",
          path: "/installation",
          children: [
            {
              name: "Usage",
              path: "/usage",
              children: [
                {
                  name: "Props",
                  children: [
                    { name: "items", element: "items" },
                    { name: "defaultOpenLevel", element: "default-open-level" },
                  ],
                },
              ],
            },
          ],
        },
        {
          name: "Examples",
          path: "/examples",
          children: [
            { name: "Auto-generated", path: "/auto" },
            { name: "Manually defined", path: "/manually-defined" },
            { name: "This website", path: "/this-website" },
            { name: "Styling", element: "styles" },
          ],
        },
        {
          name: "Visit Github",
          external: "https://github.com/J3-Tech/vue-tree-navigation",
        },
      ],
      defaultOpenLevel: 2,
    };
  },
  components: {
    "vue-tree-navigation": TreeNavigation,
  },
};

// window.addEventListener("popstate", () => {
//   app.currentRoute = window.location.pathname;
// });
</script>

<style lang="scss">
@import "./App.scss";
</style>
