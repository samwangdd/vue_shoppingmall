<template>
  <DoForm :model="model" :rules="rules" ref="DoForm">
    <DoFormItem label="姓名" prop="username">
      <DoInput v-model="model.username" />
    </DoFormItem>
    <DoFormItem label="密码" prop="password">
      <DoInput v-model="model.password" type="password" />
    </DoFormItem>
    <!-- name: {{model.username}}
    password: {{model.password}}-->
    <DoFormItem>
      <Button type="primary" @click="submitForm('DoForm')">提交</Button>
    </DoFormItem>
  </DoForm>
</template>

<script>
import { Button } from 'ant-design-vue';
import DoInput from '@/components/Form/DoInput';
import DoFormItem from '@/components/Form/DoFormItem';
import DoForm from '@/components/Form';

export default {
  name: 'Home',
  components: {
    DoInput,
    DoFormItem,
    DoForm,
    Button,
  },
  data() {
    return {
      model: { username: '张三', password: '123' },
      rules: {
        username: [{ required: true, message: '请输入用户名' }],
        password: [{ required: true, message: '请输入密码' }],
      },
    };
  },
  methods: {
    submitForm(e) {
      console.log('e :>> ', e);
    },
  },
};
</script>

<style>
</style>