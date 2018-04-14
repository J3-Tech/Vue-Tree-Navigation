<template>
  <ul class="navigation-list" :class="classes">
    <navigation-toggle :isClosed="closed" @click.native="toggle"></navigation-toggle>
    <NavigationItem :item="parentItem" />

    <!-- child items goes here -->
    <slot></slot>
  </ul>
</template>

<script>
import NavigationToggle from '../NavigationToggle/NavigationToggle.vue';
import NavigationItem from '../NavigationItem/NavigationItem.vue';

export default {
  data() {
    return {
      closed: this.level > this.defaultOpenLevel,
    };
  },

  props: {
    level: {
      type: Number,
      required: true,
    },
    defaultOpenLevel: {
      type: Number,
      required: true,
    },
    parentItem: {
      type: Object,
      required: true,
    },
  },

  computed: {
    classes() {
      return { closed: this.closed };
    },
  },

  watch: {
    defaultOpenLevel: function() {
      this.closed = this.level > this.defaultOpenLevel;
    },
  },

  methods: {
    toggle() {
      this.closed = !this.closed;
    },
  },

  components: {
    'navigation-toggle': NavigationToggle,
    NavigationItem,
  },
};
</script>

<style lang="scss">
@import './NavigationList.scss';
</style>
