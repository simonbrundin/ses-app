<template>
  <div id="match-schedule">
    <h1 class="title light">Ditt spelschema</h1>
    <div class="card match" v-for="(match, index) in matches" :key="index">{{match.date}}</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      matches: [
        // Sample data
        {
          id: 123,
          date: "20:30 17/7",
          h1: "Abhi",
          h2: "Mamma",
          a1: "Sophie",
          a2: "Emma",
        },
        {
          id: 256,
          date: "16:30 12/7",
          h1: "Abhi",
          h2: "Mamma",
          a1: "Sophie",
          a2: "Emma",
        },
      ],
    };
  },
};
</script>

<style lang="scss">
.match {
  margin: 0 0 20px 0;
}
</style>