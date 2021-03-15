<template>
  <div id="match-schedule">
    <h1 class="title light">Ditt spelschema</h1>
    <div v-for="(match, index) in matches" :key="index" class="card match">
      <div class="date-text">
        {{ match.date }}
        <!-- <div>Match: {{ match.id }}</div> -->
      </div>
      <button class="cancel-button">Avboka</button>
    </div>
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
          date: '17/7 kl. 20:30',
          h1: 'Abhi',
          h2: 'Mamma',
          a1: 'Sophie',
          a2: 'Emma',
        },
        {
          id: 256,
          date: '12/7 kl. 16:30',
          h1: 'Abhi',
          h2: 'Mamma',
          a1: 'Sophie',
          a2: 'Emma',
        },
        {
          id: 456,
          date: '18/10 kl. 11:30',
        },
        {
          id: 246,
          date: '22/10 kl. 20:00',
        },
        {
          id: 26,
          date: '29/10 kl. 17:30',
        },
        {
          id: 50,
          date: '1/11 kl. 18:30',
        },
        {
          id: 236,
          date: '8/11 kl. 21:30',
        },
        {
          id: 756,
          date: '15/11 kl. 16:00',
        },
        {
          id: 259,
          date: '20/11 kl. 19:30',
        },
        {
          id: 56,
          date: '26/11 kl. 10:30',
        },
        {
          id: 216,
          date: '30/11 kl. 17:30',
        },
        {
          id: 356,
          date: '2/12 kl. 11:00',
        },
      ],
    };
  },
};
</script>

<style lang="scss" scope>
#match-schedule {
  margin: 0 0 72px 0;
}

.match {
  margin: 0 0 20px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.date-text {
  font-weight: 300;
  color: $light;
}

.cancel-button {
  text-align: right;
  font-size: 14px;
}

#match-schedule .card {
  background: $dark-grey;
}
</style>
