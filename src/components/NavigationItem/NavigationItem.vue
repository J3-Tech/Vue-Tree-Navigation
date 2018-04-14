/**
 * Return a navigation item - a hyperlink, a router link, or a text.
 * Return only item name in case it is neither the route nor the element.
 * Return a router link in case the item is route.
 * Return a hyperlink in case the item is element.
 */

<template>
  <div class="NavigationItem">
    <span v-if="showText">{{ item.name }}</span>

    <a
      v-if="showHyperLink"
      :href="item.meta.path">{{ item.name }}</a>

    <router-link
      v-if="showRouterLink"
      class="router-link"
      :to="item.meta.path">{{ item.name }}</router-link>
  </div>
</template>

<script>
import pathTypes from '../../pathTypes';
const { PATH_TYPE_NONE, PATH_TYPE_ELEMENT, PATH_TYPE_ROUTE } = pathTypes;

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
      return this.item.meta.pathType === PATH_TYPE_ELEMENT;
    },
    showRouterLink() {
      return this.item.meta.pathType === PATH_TYPE_ROUTE;
    },
  },
};
</script>

<style lang="scss">
@import './NavigationItem.scss';
</style>
