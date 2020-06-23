<template>
  <div id="menu">
    <img class="ikon" src="../assets/menyikon.png" alt />
    <div>SES</div>
    <img class="ikon" src="../assets/menyikon.png" alt />
  </div>
</template>

<script>
export default {
  name: "Menu"
};
</script>

<style>
#menu {
  display: flex;
  justify-content: space-between;
  margin: 0 -20px 20px;
  padding: 0 20px 20px;
  border-bottom: 1px solid black;
}

.ikon {
  width: 25px;
}

div {
  color: #050505;
}
</style>