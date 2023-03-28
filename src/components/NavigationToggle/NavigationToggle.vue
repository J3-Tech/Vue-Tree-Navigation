<template>
  <span
    class="navigation-toggle"
    :class="{ 'navigation-toggle--closed': !this.open }"
  >
    <span
      class="navigation-toggle__icon"
      :class="{ 'navigation-toggle__icon--closed': !this.open }"
    ></span>
  </span>
</template>

<script>
export default {
  props: {
    open: {
      type: Boolean,
      required: false,
      default: false,
    },
  },
};
</script>

<style lang="scss">
@import './NavigationToggle.scss';
</style>
