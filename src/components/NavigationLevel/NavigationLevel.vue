<template>
  <div class="navigation-level" :class="classes">
    <div class="navigation-level__parent">
      <NavigationToggle :open="isOpen" @click.native="onToggleClick" />
      <NavigationItem :item="parentItem" @click.native="onItemClick" />
    </div>

    <ul class="navigation-level__children">
      <slot></slot>
    </ul>
  </div>
</template>

<script>
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
        'navigation-level--closed': !this.isOpen,
        [`navigation-level--level-${this.level}`]: true,
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

      let currentUrl;
      if (this.$router !== undefined) {
        currentUrl = this.$route.path + this.$route.hash;
      } else {
        currentUrl = window.location.pathname + window.location.hash;
      }

      if (
        this.parentItem?.meta.target !== '' &&
        currentUrl.includes(this.parentItem?.meta.target)
      ) {
        return true;
      }

      for (let i = 0; i < this.parentItem?.children.length; i++) {
        let child = this.parentItem?.children[i];

        if (
          child.meta.target !== '' &&
          currentUrl.includes(child.meta.target)
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
