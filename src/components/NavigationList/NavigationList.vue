<template>
  <ul 
    class="NavigationList"
    :class="classes">
    <li>
      <NavigationToggle
        :open="open"
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
  props: {
    level: {
      type: Number,
      required: true,
    },
    open: {
      type: Boolean,
      required: false,
      default: false,
    },
    parentItem: {
      type: Object,
      required: true,
    },
  },

  computed: {
    classes() {
      return {
        'NavigationList--closed': !this.open,
        [`NavigationList--level-${this.level}`]: true,
      };
    },
  },

  methods: {
    onToggleClick() {
      this.open = !this.open;
    },
    onItemClick() {
      if (this.open === false) {
        this.open = true;
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
