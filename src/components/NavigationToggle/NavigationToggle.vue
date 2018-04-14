<template>
  <span
    class="NavigationToggle"
    :class="classes">
    <span class="NavigationToggle__icon"></span>
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
      return { 'NavigationToggle--closed': this.isClosed };
    },
  },
};
</script>

<style lang="scss">
@import './NavigationToggle.scss';
</style>
