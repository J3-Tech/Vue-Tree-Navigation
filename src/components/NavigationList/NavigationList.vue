<template>
  <ul 
    class="NavigationList"
    :class="classes">
    <li>
      <NavigationToggle
        :isClosed="closed"
        @click.native="onToggleClick" />
      <NavigationItem
        :item="parentItem"
        @click.native="onItemClick" />
    </li>

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
        [`NavigationList--level-${this.level}`]: true,
      };
    },
  },

  watch: {
    defaultOpenLevel: function() {
      this.closed = this.level > this.defaultOpenLevel;
    },
  },

  methods: {
    onToggleClick() {
      this.closed = !this.closed;
    },
    onItemClick() {
      if (this.closed === true) {
        this.closed = false;
      }
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
