<template>
  <span
    class="NavigationToggle"
    :class="{ 'NavigationToggle--closed': !this.open }">
    <span
      class="NavigationToggle__icon"
      :class="{ 'NavigationToggle__icon--closed': !this.open }"></span>
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
