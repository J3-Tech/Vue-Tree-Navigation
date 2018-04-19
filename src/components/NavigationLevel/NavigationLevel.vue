<template>
  <ul 
    class="NavigationLevel"
    :class="classes">
    <li>
      <NavigationToggle
        :open="isOpen"
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
      isOpen: this.open,
    };
  },
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
  },

  components: {
    NavigationItem,
    NavigationToggle,
  },
};
</script>

<style lang="scss">
@import './NavigationLevel.scss';
</style>
