<template>
  <div class="ShowHide" id="Bar">
    <div id="left">
      <div>
        <a href="#" @click="show = false">X</a>
        <img src="~/assets/images/black-logo-tony99.png" />
        <div class="rightlogo">
          NOW YOU CAN DOWNLOAD <br />
          &amp; PLAY ANY TIME ANY WHERE
        </div>
      </div>
    </div>

    <div id="right">
      <a href="https://wasapmari.com/tony99my.apk"
        ><div class="tophide-download">{{ t("download") }}</div>
      </a>
    </div>
  </div>
</template>

<script setup lang="ts">
const show = defineModel("show", {
  type: Boolean,
  required: true,
});

const { t } = useI18n();
</script>

<style scoped lang="scss">
#Bar {
  position: fixed;
  width: stretch;
  top: 0;
  z-index: 999;
  height: 60px;
  background: #41300c;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 10px;
  animation: goldFlash 2s ease-in-out infinite;

  #left {
    div {
      display: flex;
      align-items: center;
      gap: 10px;
      font-size: 10px;

      a {
        color: #fff;
        font-weight: bold;
        font-family: cursive;
      }

      img {
        width: 45px;
      }

      .rightlogo {
        line-height: 1.2;
      }
    }
  }

  #right {
    .tophide-download {
      padding: 10px 20px;
      font-size: 12px;
      background: linear-gradient(180deg, #bd9649, #755b26);
      border-radius: 10px;
      color: #fff;
      font-weight: bold;
      line-height: 1.2;
    }
  }
}

@keyframes goldFlash {
  0% {
    box-shadow: 0 0 5px 2px rgba(250, 202, 48, 0.4);
    background-color: rgba(250, 202, 48, 0.15);
  }
  50% {
    box-shadow: 0 0 5px 2px rgba(250, 202, 48, 0.6);
    background-color: rgba(250, 202, 48, 0.25);
  }
  100% {
    box-shadow: 0 0 3px 1px rgba(250, 202, 48, 0.4);
    background-color: rgba(250, 202, 48, 0.15);
  }
}
</style>
