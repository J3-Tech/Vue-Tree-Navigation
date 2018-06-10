<template>
  <div 
    class="NavigationLevel"
    :class="classes">
    <div class="NavigationLevel__parent">
      <NavigationToggle
        :open="isOpen"
        @click.native="onToggleClick" />
      <NavigationItem
        :item="parentItem"
        @click.native="onItemClick" />
    </div>

    <ul class="NavigationLevel__children">
      <slot></slot>
    </ul>
  </div>
</template>

<script>
import { getRelativeUrl, startsWithUrl } from '../utils';

import NavigationToggle from '../NavigationToggle/NavigationToggle.vue';
import NavigationItem from '../NavigationItem/NavigationItem.vue';

export default {
  data() {
    return {
      isOpen: null,
    };
  },
  props: {
    parentItem: {
      type: Object,
      required: true,
    },
    level: {
      type: Number,
      required: true,
    },
    defaultOpenLevel: {
      type: Number,
      required: true,
    },
  },
  computed: {
    classes() {
      return {
        'NavigationLevel--closed': !this.isOpen,
        [`NavigationLevel--level-${this.level}`]: true,
      };
    },
  },
  methods: {
    onToggleClick() {
      this.isOpen = !this.isOpen;
    },
    onItemClick() {
      if (this.isOpen === false) {
        this.isOpen = true;
      }
    },
    renderLevelAsOpen() {
      if (this.defaultOpenLevel >= this.level) {
        return true;
      }

      const currentUrl = getRelativeUrl(
        window.location.href,
        window.location.origin
      );

      if (
        this.parentItem.meta.target !== '' &&
        startsWithUrl(currentUrl, this.parentItem.meta.target) === true
      ) {
        return true;
      }

      for (let i = 0; i < this.parentItem.children.length; i++) {
        let child = this.parentItem.children[i];

        if (
          child.meta.target !== '' &&
          startsWithUrl(currentUrl, child.meta.target) === true
        ) {
          return true;
        }
      }

      return false;
    },
  },
  components: {
    NavigationItem,
    NavigationToggle,
  },
  mounted() {
    this.isOpen = this.renderLevelAsOpen();
  },
};
</script>

<style lang="scss">
@import './NavigationLevel.scss';
</style>
