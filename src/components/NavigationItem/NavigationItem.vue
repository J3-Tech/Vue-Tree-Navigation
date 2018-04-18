/**
 * Return a navigation item - a hyperlink, a router link, or a text.
 * Return only item name in case it is neither the route nor the element.
 * Return a router link in case the item is route.
 * Return a hyperlink in case the item is element.
 */

<template>
  <span class="NavigationItem">
    <span v-if="showText">{{ item.name }}</span>

    <a
      v-if="showHyperLink"
      :href="item.meta.path">{{ item.name }}</a>

    <a
      v-if="showExternalHyperLink"
      :href="item.meta.path"
      target="_blank">{{ item.name }}</a>

    <router-link
      v-if="showRouterLink"
      class="router-link"
      :to="item.meta.path">{{ item.name }}</router-link>
  </span>
</template>

<script>
import {
  PATH_TYPE_NONE,
  PATH_TYPE_ELEMENT,
  PATH_TYPE_ROUTE,
  PATH_TYPE_EXTERNAL,
} from '../../config';

export default {
  props: {
    item: Object,
    required: true,
  },
  computed: {
    showText() {
      return this.item.meta.pathType === PATH_TYPE_NONE;
    },
    showHyperLink() {
      return this.showLink && this.$router === undefined;
    },
    showExternalHyperLink() {
      return this.item.meta.pathType === PATH_TYPE_EXTERNAL;
    },
    showRouterLink() {
      return this.showLink && this.$router !== undefined;
    },
    showLink() {
      return (
        this.item.meta.pathType === PATH_TYPE_ROUTE ||
        this.item.meta.pathType === PATH_TYPE_ELEMENT
      );
    },
  }
};
</script>

<style lang="scss">
@import './NavigationItem.scss';
</style>
