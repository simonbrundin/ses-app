<template><div></div></template>
<script>
export default {
  name: 'Icon',
  props: {
    name: {
      type: String,
      required: true,
    },
  },
  computed: {
    src() {
      const src = require(`@/assets/svg/${this.name}.svg`);
      return src;
    },
  },
};
</script>
