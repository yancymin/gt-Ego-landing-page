<template>
  <div class="text-area">
    <textarea :class="{checked:tips}" :name="name" :id="id" :cols="cols" :rows="rows" :placeholder="placeholder" :value=value @change="changeInput"></textarea>
    <label :for="name">{{label}}</label>
    <em v-if="tips" class="tips">请按照正确格式填写</em>
  </div>
</template>

<script>
export default {
  name: 'textArea',
  props: {
    placeholder: String,
    label: String,
    name: String,
    id: String,
    cols: String,
    rows: String,
    value: String,
    tips: Boolean
  },
  computed: {
    inputed () {
      return this.value
    }
  },
  model: {
    prop: 'value',
    event: 'update'
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
.text-area {
  margin-top: 16px;
  margin-bottom: 8px;
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
 position: absolute;
top: -30px;
    font-size: 16px;
    color: #b8c7e0;
    letter-spacing: 0;
    line-height: 16px;
    margin-bottom: 8px;
    transition: all 0.2s ease;
  }

  textarea {
    font-family: source-han-sans-simplified-c, sans-serif;
    font-weight: 500;
    font-style: normal;
    width: 400px;
    background: #172031;
    border: 1px solid rgba(184, 199, 224, 0);
    border-radius: 6px;
    padding: 12px;
    outline: none;
    font-size: 16px;
    color: #b5c4dd;
    letter-spacing: 0;
    line-height: 24px;
    transition: all 0.2s ease;
    resize: none;

    &::placeholder {
      font-size: 16px;
      color: rgba(184, 199, 224, 0.2);
      letter-spacing: 0;
      line-height: 22px;
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
</style>
