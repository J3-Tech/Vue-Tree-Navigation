<template>
  <span class="navigation-toggle" :class="classes">
    <span class="navigation-toggle-icon"></span>
  </span>
</template>

<script>
export default {
  props: {
    isClosed: {
      type: Boolean,
      required: true,
    },
  },

  computed: {
    classes() {
      return { 'closed': this.isClosed };
    },
  },
};
</script>

<style lang="scss">
  @import './assets/_base.scss';
</style>

