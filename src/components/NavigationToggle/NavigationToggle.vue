<template>
  <span
    class="NavigationToggle"
    :class="{ 'NavigationToggle--closed': this.isClosed }">
    <span
      class="NavigationToggle__icon"
      :class="{ 'NavigationToggle__icon--closed': this.isClosed }"></span>
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
};
</script>

<style lang="scss">
@import './NavigationToggle.scss';
</style>
