<template>
  <div class="text-field">
    <form action="">
      <div class="input-wrap">
        <input
          type="text"
          :placeholder="placeholder"
          id="textinput"
        >
        <label
          for="textinput"
          class="label"
        >{{tittle}}</label>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: 'textField',
  props: {
    placeholder: String,
    tittle: String
  }
}
</script>

<style lang="scss" scoped>
.text-field {
  margin-top: 16px;
  form {
    margin-bottom: 8px;
    .input-wrap {
      display: flex;
      flex-direction: column;
      text-align: left;

      label {
        font-family: source-han-sans-simplified-c, sans-serif;
        font-weight: 300;
        font-style: normal;
        position: relative;
        top: -75px;
        font-size: 16px;
        color: #9ab9ec;
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
          line-height: 22px;
        }

        &:hover {
          // border-color: rgba(184, 199, 224, 0.2);
          border: 2px solid rgba(184, 199, 224, 0.2);
          padding: 11px;
        }

        &:focus {
          border: 2px solid #357eff;
          background-color: #0d1424;
          padding: 11px;

          & ~ label {
            color: #357eff;
            font-weight: 800;
          }
        }
      }
    }
  }
}
</style>
