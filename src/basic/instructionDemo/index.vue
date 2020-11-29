<template>
  <div>
    <button @click="reStart">start</button>
    <br />
    <!-- <Spike :startTime="startTime" :endTime="endTime" /> -->
    <!-- <ClockDirective /> -->
    <CountDown :startTime="startTime" :endTime="endTime" />
  </div>
</template>

<script>
/**
 * instruction 指令练习
 */
import moment from 'moment';
// import Spike from './Spike'; // 倒计时秒杀组件
// import ClockDirective from "./ClockDirective";
import CountDown from '@/basic/lesson12/CountDown';

export default {
  components: {
    // Spike,
    // ClockDirective,
    CountDown,
  },
  data: () => ({
    startTime: moment('2020-8-29 14:00:00'),
    endTime: moment('2020-8-29 17:00:00'),
  }),
  methods: {
    reStart() {
      this.startTime = moment(new Date(Date.now() - 60 * 1000));
      this.endTime = moment(new Date(Date.now() + 60 * 1000));
    },
  },
};
</script>

<style>
</style>