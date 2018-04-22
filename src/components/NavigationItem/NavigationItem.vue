<template>
  <span
    class="NavigationItem"
    :class="classes">

    <span
      v-if="showLabel"
      class="NavigationItem__label">{{ item.name }}</span>

    <router-link
      v-if="showRouterLink"
      :to="item.meta.path"
      class="NavigationItem__router-link">{{ item.name }}</router-link>

    <a
      v-if="showHyperLink"
      :href="item.meta.path"
      class="NavigationItem__link">{{ item.name }}</a>

    <a
      v-if="showExternalHyperLink"
      :href="item.meta.path"
      target="_blank"
      class="NavigationItem__external-link">{{ item.name }}</a>
  </span>
</template>

<script>
import {
  PATH_TYPE_NONE,
  PATH_TYPE_ELEMENT,
  PATH_TYPE_ROUTE,
} from '../../config';

export default {
  props: {
    item: Object,
    required: true,
  },
  computed: {
    showLabel() {
      return this.item.meta.pathType === PATH_TYPE_NONE;
    },
    showRouterLink() {
      return this.showLink && this.$router !== undefined;
    },
    showHyperLink() {
      return this.showLink && this.$router === undefined;
    },
    showExternalHyperLink() {
      return this.item.external !== undefined;
    },
    showLink() {
      return (
        this.item.meta.pathType === PATH_TYPE_ROUTE ||
        this.item.meta.pathType === PATH_TYPE_ELEMENT
      );
    },
    isActive() {
      if (this.item.meta.path === undefined) {
        return false;
      }

      if (this.$route) {
        return this.$route.path + this.$route.hash === this.item.meta.path;
      }

      return window.location.href.endsWith(this.item.meta.path);
    },
    classes() {
      return {
        'NavigationItem--active': this.isActive,
      };
    },
  },
};
</script>

<style lang="scss">
@import './NavigationItem.scss';
</style>
