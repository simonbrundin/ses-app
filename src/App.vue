<template>
  <div id="app">
    <Login />
    <Menu />
    <Notifications />
    <NextGame />
    <StandingsTable />
    <AvailabilityCalendar />
    <ScheduleSelector
      :minTime="minTime"
      :maxTime="maxTime"
      :numDays="numDays"
      :selection="schedule"
      :halfHour="halfHour"
      :auto-complete="autoComplete"
      :show-date="showDate"
      @onChange="handleDateChange"
    />
    <Book />
  </div>
</template>

<script>
import Notifications from "./components/Notifications.vue";
import NextGame from "./components/NextGame.vue";
import StandingsTable from "./components/StandingsTable.vue";
import Menu from "./components/Menu.vue";
import Login from "./components/Login.vue";
import Book from "./components/Book.vue";
import AvailabilityCalendar from "./components/AvailabilityCalendar.vue";
import ScheduleSelector from "../node_modules/vue-schedule-selector/src/components/ScheduleSelector.vue";

export default {
  name: "App",
  components: {
    Notifications,
    NextGame,
    StandingsTable,
    Menu,
    Login,
    Book,
    AvailabilityCalendar,
    ScheduleSelector
  },
  data() {
    return {
      minTime: 6, // 最小时间 0
      maxTime: 23, // 最大时间 23
      numDays: 7, // 显示天数
      schedule: [], // 时间
      halfHour: false, // 是否显示半小时
      autoComplete: true, // 是否开启自动补全
      showDate: false // 是否显示星期
    };
  },
  mounted() {},
  methods: {
    handleDateChange(newSchedule, customizeDate) {
      // 自定义日期只显示最小时间和最大时间，不需要可以不接受第二参数
      console.log(customizeDate);
      // 如果不赋值，则每次都是重新选择
      this.schedule = newSchedule;
    }
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #fff;
  margin: 20px;
}
</style>
