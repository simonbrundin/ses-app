<template>
  <div>
    <Notifications />
    <nuxt />
  </div>
</template>

<script>
import Notifications from '@/components/Notifications.vue'
export default {
  components: {
    Notifications,
  },
  setup() {
    return {}
  },
}
</script>

<style lang="scss"></style>
