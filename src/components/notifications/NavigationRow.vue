<template>
  <div class="navigation-row">
    <svg
      class="back-button"
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
    >
      <path d="M16.67 0l2.83 2.829-9.339 9.175 9.339 9.167-2.83 2.829-12.17-11.996z" />
    </svg>
    <img class="profile-image" src="../../assets/max.jpg" alt />
  </div>
</template>

<script>
export default {};
</script>

<style>
.navigation-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.back-button {
  width: 12px;
  fill: rgb(145, 145, 145);
}
.profile-image {
  border-radius: 18px;
  width: 45px;
  height: 45px;
}
</style>