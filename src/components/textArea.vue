<template>
  <div class="text-area">
    <textarea :name="name" :id="id" :cols="cols" :rows="rows" :placeholder="placeholder"></textarea>
    <label :for="name">{{label}}</label>
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
    rows: String
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

  label {
    font-family: source-han-sans-simplified-c, sans-serif;
    font-weight: 300;
    font-style: normal;
    position: relative;
    top: -172px;
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
