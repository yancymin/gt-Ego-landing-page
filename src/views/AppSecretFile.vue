<template>
  <div class="secretFile">
    <div class="details-wrap">
      <details v-for="k,index of details" :key="index" open>
        <summary>{{k.title}}</summary>
        <p>{{k.content}}</p>
      </details>
    </div>
  </div>
</template>

<script>
export default {
  name: "secretFile",
  data() {
    return {
      details: [
        {
          title: "什么是秘钥文件？",
          content: "秘钥文件是您的自定义密码加密私钥，对 Ego ID 起到保护作用。如果您更换设备可以通过秘钥文件+授权密码来找回您的身份数据。网络传输秘钥文件有被黑客获取的风险建议您将秘钥文件离线保存。"
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
@import "../style/global.scss";

.secretFile {
  display: flex;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  background-color: #0d1424;
  color: #fff;

  .details-wrap {
    width: 100%;
    details {
      width: 100%;
      background-color: #1b2638;

      p {
        text-align: left;
        @include p(13px, 18px);
        color: #b8c7e0 !important;
        padding: 12px 15px;
        border-bottom: 1px solid #2a3b57;
        animation: openDetail 400ms ease;
      }
      summary {
        position: relative;
        display: block;
        padding: 12px 15px;
        @include h2(15px, 15px);
        font-weight: 500;
        color: #fff !important;
        border-bottom: 1px solid #2a3b57;
        outline:none;

        &:after {
            content:"";
            display: block;
            width: 15px;
            height: 2px;
            position: absolute;
            bottom: -1px;
            left: 0;
            background-color: #1B2638;
        }

        &::-webkit-details-marker {
          display: none;
        }

        &:before {
          display: inline-block;
          content: "";
          width: 24px;
          height: 24px;
          background: url("data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iOHB4IiBoZWlnaHQ9IjEycHgiIHZpZXdCb3g9IjAgMCA4IDEyIiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPgogICAgPCEtLSBHZW5lcmF0b3I6IFNrZXRjaCA1MiAoNjY4NjkpIC0gaHR0cDovL3d3dy5ib2hlbWlhbmNvZGluZy5jb20vc2tldGNoIC0tPgogICAgPHRpdGxlPmljb24vbmF2aWdhdGlvbi9jaGV2cm9uX3JpZ2h0XzI0cHg8L3RpdGxlPgogICAgPGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+CiAgICA8ZGVmcz4KICAgICAgICA8cG9seWdvbiBpZD0icGF0aC0xIiBwb2ludHM9IjcgMyA1LjU5IDQuNDEgMTAuMTcgOSA1LjU5IDEzLjU5IDcgMTUgMTMgOSI+PC9wb2x5Z29uPgogICAgPC9kZWZzPgogICAgPGcgaWQ9IuS6jOacnyIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPGcgaWQ9IuW4uOingemXrumimCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoLTM0Ny4wMDAwMDAsIC04MC4wMDAwMDApIj4KICAgICAgICAgICAgPGcgaWQ9IuWIhue7hC1jb3B5LTIiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDAuMDAwMDAwLCA2NC4wMDAwMDApIj4KICAgICAgICAgICAgICAgIDxnIGlkPSLlj7Plr7zoiKoiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDM0Mi4wMDAwMDAsIDEzLjAwMDAwMCkiPgogICAgICAgICAgICAgICAgICAgIDxtYXNrIGlkPSJtYXNrLTIiIGZpbGw9IndoaXRlIj4KICAgICAgICAgICAgICAgICAgICAgICAgPHVzZSB4bGluazpocmVmPSIjcGF0aC0xIj48L3VzZT4KICAgICAgICAgICAgICAgICAgICA8L21hc2s+CiAgICAgICAgICAgICAgICAgICAgPHVzZSBpZD0iaWNvbi9uYXZpZ2F0aW9uL2NoZXZyb25fcmlnaHRfMjRweCIgZmlsbD0iI0ZGRkZGRiIgZmlsbC1ydWxlPSJub256ZXJvIiB4bGluazpocmVmPSIjcGF0aC0xIj48L3VzZT4KICAgICAgICAgICAgICAgIDwvZz4KICAgICAgICAgICAgPC9nPgogICAgICAgIDwvZz4KICAgIDwvZz4KPC9zdmc+");
          background-repeat: no-repeat;
          background-position: center;
          position: absolute;
          top: 8px;
          right: 8px;
          font-weight: bold;
          font-size: 1rem;
          transition: all 300ms ease;
        }

        &:hover {
          cursor: pointer;
        }
      }

      &[open] summary::before {
        transform: rotate(90deg);
      }

  

        @keyframes openDetail {
          0% {
            opacity: 0;
          }
          100% {
            opacity: 1;
          }
        }
    }
  }
}
</style>

