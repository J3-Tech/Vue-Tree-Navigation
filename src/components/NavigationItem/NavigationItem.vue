<template>
  <span class="navigation-item" :class="classes">
    <span v-if="showLabel" class="navigation-item__label">{{ item?.name }}</span>

    <router-link
      v-if="showRouterLink"
      :to="item.meta.target"
      class="navigation-item__router-link"
      >{{ item.name }}</router-link
    >

    <a v-if="showHyperLink" :href="item.meta.target" class="navigation-item__link">{{
      item.name
    }}</a>

    <a
      v-if="showExternalHyperLink"
      :href="item.meta.target"
      target="_blank"
      class="navigation-item__external-link"
      >{{ item.name }}</a
    >
  </span>
</template>

<script>
export default {
  data() {
    return {
      active: false,
    };
  },
  props: {
    item: {
      type: Object,
      required: true,
    },
  },
  methods: {
    isActive() {
      if (this.item?.meta.target === "") {
        return false;
      }

      if (this.$route) {
        return (
          (this.$route.path + this.$route.hash).endsWith(this.item?.meta.target) ||
          (this.$route.path + this.$route.hash).endsWith(this.item?.meta.target + "/")
        );
      }

      return (
        window.location.href.endsWith(this.item?.meta.target) ||
        window.location.href.endsWith(this.item?.meta.target + "/")
      );
    },
  },
  computed: {
    showLabel() {
      console.log(this.item);
      return (
        this.item?.path === undefined &&
        this.item?.element === undefined &&
        this.item?.external === undefined
      );
    },
    showRouterLink() {
      return this.showLink && this.$router !== undefined;
    },
    showHyperLink() {
      return this.showLink && this.$router === undefined;
    },
    showExternalHyperLink() {
      return this.item?.external !== undefined;
    },
    showLink() {
      return this.item?.path !== undefined || this.item?.element !== undefined;
    },
    classes() {
      return {
        "navigation-item--active": this.active,
      };
    },
  },
  watch: {
    item() {
      this.active = this.isActive();
    },
    $route() {
      this.active = this.isActive();
    },
  },
  mounted() {
    this.active = this.isActive();

    if (!this.$router) {
      window.addEventListener("hashchange", () => {
        this.active = this.isActive();
      });
    }
  },
};
</script>

<style lang="scss">
@import "./NavigationItem.scss";
</style>
