<template>
  <div class="text-field">
    <div class="input-wrap">
      <input :class="{checked: tips}" type="text" :placeholder="placeholder" :name="name" :value="inputed" @change="changeInput">
      <label :for="name" class="label">{{label}}</label>
      <em v-if="tips" class="tips">请按照正确格式填写</em>
    </div>
  </div>
</template>

<script>
export default {
  name: 'textField',

  props: {
    value: String,
    placeholder: String,
    label: String,
    name: String,
    tips: Boolean
  },
  computed: {
    inputed () {
      return this.value
    }
  },
  model: {
    prop: 'value', // 绑定的值，通过父组件传递
    event: 'update' // 自定义时间名
  },
  methods: {
    changeInput (e) {
      this.$emit('againInput', this.name)
      this.$emit('update', e.target.value) // 子组件与父组件通讯，告知父组件更新绑定的值
    }
  }
}
</script>

<style lang="scss" scoped>
.text-field {
  margin-top: 16px;
 margin-bottom: 30px;

  .input-wrap {
    display: flex;
    flex-direction: column;
    text-align: left;
    position: relative;
    .tips{
      color: #4C9AFF;
      position: absolute;
      right: 0;
      bottom: 0;
      font-style: normal;
    }
    .checked {
      box-shadow: inset 0 0 0 2px #4C9AFF;
    }
    label {
      font-family: source-han-sans-simplified-c, sans-serif;
      font-weight: 300;
      font-style: normal;
      position: relative;
      top: -75px;
      font-size: 16px;
      color: #b8c7e0;
      letter-spacing: 0;
      line-height: 16px;
      margin-bottom: 8px;
      transition: all 0.2s ease;
    }

    input {
      font-family: source-han-sans-simplified-c, sans-serif;
      font-weight: 500;
      font-style: normal;
      width: 400px;
      // height: 36px;
      background: #172031;
      border: 1px solid rgba(184, 199, 224, 0);
      border-radius: 6px;
      padding: 12px;
      outline: none;
      font-size: 16px;
      color: #b5c4dd;
      letter-spacing: 0;
      line-height: 16px;
      transition: all 0.2s ease;

      &::placeholder {
        font-size: 16px;
        color: rgba(184, 199, 224, 0.2);
        letter-spacing: 0;
        line-height: 16px;
        padding-top: 4px;
      }

      &:hover {
        box-shadow: inset 0 0 0 2px rgba(184, 199, 224, 0.2);
      }

      &:focus {
        box-shadow: inset 0 0 0 2px #357eff;
        background-color: #0d1424;

        & ~ label {
          color: #357eff;
          font-weight: 800;
        }
      }
    }
  }
}
</style>
