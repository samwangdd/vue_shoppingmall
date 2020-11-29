<!--
 * @Author: sam
 * @LastEditTime: 2020-11-29 23:01:25
 * @LastEditors: Please set LastEditors
 * @Description: 秒杀倒计时组件
-->
<template>
  <div>
    111
    <div>{{infoMsg}}</div>
    <Button @click="handleClick" :disabled="disabled">加入购物车</Button>
  </div>
</template>

<script>
import { Button } from 'ant-design-vue';

export default {
  name: 'CountDown',
  props: {
    startTime: null,
    endTime: null,
    handleSuccess: function () {
      console.log('添加成功');
    },
    status: {
      type: Boolean,
      default: true,
    }, // 是否可以点击
    limit: {
      type: Number || undefined,
      default: undefined,
    }, // 点击次数限制，默认没有次数限制
  },
  conponents: { Button },
  data() {
    return { currentTime: new Date().getTime(), buttenText: '', infoMsg: '' };
  },
  computed: {
    disabled() {
      return !(this.status && this.limit !== 0 && this.getStatus === 1);
    },
    getStatus() {
      const cur = this.currentTime;
      let timeArr = [this.startTime, this.endTime];
      timeArr.push(cur);
      return timeArr.sort().findIndex((i) => i === cur);
    },
  },
  methods: {
    getInfoMsg(status) {
      switch (status) {
        case 0:
          return (this.infoMsg = `距开始还有：${this.getTimeLeft}`);
        case 1:
          return (this.infoMsg = `活动开始，距结束还有：${this.getTimeLeft}`);
        case 2:
          return (this.infoMsg = '活动已结束！');
        default:
          throw new Error('Please check the status!');
      }
    },
    getTimeLeft() {
      setInterval(() => {
        return Math.max(this.currentTime - this.startTime, this.endTime - this.currentTime);
      }, 1000);
    },
    handleClick() {
      this.handleSuccess;
    },
  },
  mounted() {
    const gs = this.getStatus;
    this.getInfoMsg(gs);
  },
};
</script>
