<template>
  <ul class="navigation-list" :class="classes">
    <navigation-toggle :isClosed="closed" @click.native="toggle"></navigation-toggle>
    <slot></slot>
  </ul>
</template>

<script>
import NavigationToggle from '../NavigationToggle/NavigationToggle.vue';

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
  },
};
</script>

<style lang="scss">
@import './NavigationList.scss';
</style>
