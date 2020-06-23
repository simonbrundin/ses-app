<template>
  <div id="notifications">
    <div class="notification">
      <p>Det saknas en betalning från dig på 200kr</p>
      <button>Betala nu</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Notifications",
  data() {
    return {
      mamma: 123
    };
  }
};
</script>

<style>
.notification {
  background: pink;
  padding: 10px;

  border: 2px solid black;
  margin: 0 0 20px;
}
</style>