<template>
  <div id="book">
    <button @click="showBookingSite = !showBookingSite">Boka tid</button>
    <br />
    <iframe
      v-if="showBookingSite"
      src="https://playtomic.io/search?search__dateValue=2020-06-24&search__isSearchingFromMap=false&search__placeLocation=62.485456%2C17.324865&search__placeText=Timr%C3%A5%2C%20Sverige&search__radius=50000&search__sportValue=PADEL&search__timeValue=16%3A30&search__timeZone=utc%2B02%3A00&search__zoom=8"
      frameborder="0"
    ></iframe>
  </div>
</template>

<script>
export default {
  name: 'Book',
  data() {
    return {
      showBookingSite: false,
    };
  },
  computed: {
    datum: () => {
      let date = new Date();
      date.setDate(date.getDate() + 1);
      date = date.toDateString();
      return date;
    },
  },
};
</script>

<style>
iframe {
  width: 100vw;
  height: 100vh;
}
</style>
