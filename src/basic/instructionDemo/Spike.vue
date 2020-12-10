<template>
  <div>
    <button :disabled="disabled" @click="handleClick">{{done ? 'you had get it!':'I wanne it!'}}</button>
    <p>{{tip}}</p>
  </div>
</template>

<script>
/**
 * 倒计时秒杀组件
 */
import moment from 'moment';

export default {
  name: 'Countdown',
  props: {
    startTime: {
      required: true,
      validator: function (val) {
        return moment.isMoment(val);
      },
    },
    endTime: {
      required: true,
      validator: function (val) {
        return moment.isMoment(val);
      },
    },
  },
  data: () => ({
    start: false,
    end: false,
    done: false,
    timeGap: 0,
    tip: '',
  }),
  computed: {
    disabled() {
      return !(this.start && !this.done && !this.end);
    },
  },
  watch: {
    startTime: {
      handler: function () {
        clearInterval(this.timeInterval);
        this.init();
      },
      immediate: true,
      deep: true,
    },
  },
  async created() {
    const serverTime = await this.getServerTime();
    this.timeGap = Date.now() - serverTime;
    this.updateState();
    this.timeInterval = setInterval(() => {
      this.updateState();
    }, 1000);
  },
  updated() {
    if (this.end || this.done) {
      clearInterval(this.timeInterval);
    }
  },
  beforeDestroy() {
    clearInterval(this.timeInterval);
  },
  methods: {
    async init() {
      const serverTime = await this.getServerTime();
      this.timeGap = Date.now() - serverTime;
      this.updateState();
      this.timeInterval = setInterval(() => {
        this.updateState();
      }, 1000);
    },
    // 模拟服务端时间，6秒传输延迟
    getServerTime() {
      return new Promise((resolve) => {
        setTimeout(() => resolve(new Date(Date.now() - 6 * 1000).getTime()), 0);
      });
    },
    updateState() {
      const now = moment(new Date(Date.now() - this.timeGap));
      const diffStart = this.startTime.diff(now);
      const diffEnd = this.endTime.diff(now);
      if (diffStart <= 0) {
        this.start = true;
        this.tip = '秒杀已开始';
      } else {
        this.tip = `距离秒杀开始还有 ${Math.ceil(diffStart / 1000)} 秒`;
      }
      if (diffEnd <= 0) {
        this.end = true;
        this.tip = '秒杀活动已经结束';
      }
    },
    handleClick() {
      alert('订单提交成功');
      this.done = true;
    },
  },
};
</script>

<style>
</style>