<template>
  <ul class="NavigationList" :class="classes">
    <div @click="toggle">
      <NavigationToggle :isClosed="closed" />
      <NavigationItem :item="parentItem" />
    </div>

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
      return {
        'NavigationList--closed': this.closed,
        [`NavigationList--level-${this.level}`]: true  
      };
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
    NavigationItem,
    NavigationToggle,
  },
};
</script>

<style lang="scss">
@import './NavigationList.scss';
</style>
