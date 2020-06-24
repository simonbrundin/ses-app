<template>
  <div id="availability-calendar">
    <div class="tid"></div>
    <div class="dag1">M</div>
    <div class="dag2">Ti</div>
    <div class="dag3">O</div>
    <div class="dag4">To</div>
    <div class="dag5">F</div>
    <div class="dag6">L</div>
    <div class="dag7">S</div>
    <div>06.00</div>
    <div>06.30</div>
    <div>07.30</div>
    <div>07.00</div>
    <div>08.00</div>
    <div>08.30</div>
    <div>09.00</div>
    <div>09.30</div>
    <div>10.00</div>
    <div>10.30</div>
    <div>11.00</div>
    <div>11.30</div>
    <div>12.00</div>
    <div>12.30</div>
    <div>13.00</div>
    <div>13.30</div>
    <div>14.00</div>
    <div>14.30</div>
    <div>15.00</div>
    <div>15.30</div>
    <div>16.00</div>
    <div>16.30</div>
    <div>17.00</div>
    <div>17.30</div>
    <div>18.00</div>
    <div>18.30</div>
    <div>19.00</div>
    <div>19.30</div>
    <div>20.00</div>
    <div>20.30</div>
    <div>21.00</div>
    <div>21.30</div>
    <div>22.00</div>
    <div>22.30</div>
    <div>23.00</div>
    <div>23.30</div>
    <div></div>
  </div>
</template>

<script>
export default {
  name: "AvailabilityCalendar"
};
</script>

<style>
#availability-calendar {
  display: grid;
  grid-template-columns: 2fr repeat(7, 1fr);
}
</style>