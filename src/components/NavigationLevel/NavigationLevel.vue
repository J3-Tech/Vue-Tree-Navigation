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
import NavigationToggle from '../NavigationToggle/NavigationToggle.vue';
import NavigationItem from '../NavigationItem/NavigationItem.vue';

export default {
  data() {
    return {
      isOpen: this.open,
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
    open: {
      type: Boolean,
      required: false,
      default: false,
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
