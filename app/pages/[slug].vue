<template>
  <div>
    <template v-if="!!gameItem">
      <GameGrid :item="gameItem" />
      <HomeSectionProviders />
    </template>

    <div class="seo-container">
      <ContentWordpress />
    </div>
  </div>
</template>

<script setup lang="ts">
import { games } from "~/utils/data";

const route = useRoute();
const localePath = useLocalePath();

const gameItem = computed(() => {
  return games.find((game) => localePath(game.path) === route.path);
});

onMounted(() => {
  const countdowns = document.querySelectorAll(".countdown");
  countdowns.forEach((el: any) => {
    const targetDate: any = new Date(el.dataset.date);
    if (isNaN(targetDate)) {
      el.textContent = "Invalid date";
      return;
    }
    function updateCountdown() {
      const now = new Date().getTime();
      const diff = targetDate - now;
      if (diff <= 0) {
        el.textContent = "Expired";
        clearInterval(timer);
        return;
      }
      const days = Math.floor(diff / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      // const seconds = Math.floor((diff % (1000 * 60)) / 1000);
      el.innerHTML = `<span>${days}</span>day(s) <span>${hours}</span>hour(s) <span>${minutes}</span>minute(s)`;
    }
    updateCountdown();
    const timer = setInterval(updateCountdown, 60000);
  });
});
</script>

<style scoped lang="scss">
.seo-container {
  :deep(.promotion-card) {
    display: flex;
    align-items: center;
    background: linear-gradient(45deg, #a17f3c, #312304);
    border-radius: 15px;
    padding: 10px;
    box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.1);
    border: 1px solid gold;
    height: 100%;
    margin: 12px 0;

    > img {
      width: 40%;
      border-radius: 10px;
    }

    .promotion-body {
      flex: 1;
      display: flex;
      flex-direction: column;
      gap: 25px;
      padding: 0 20px;

      .info {
        display: flex;

        .detail {
          width: 40%;
          margin-top: 10px;
          margin-bottom: 10px;
          margin-left: 70px;
          padding: 10px 20px;
          border-left: 1px solid #ddd;
          position: relative;

          h3 {
            margin-top: 0;
            margin-bottom: 10px;
            line-height: 1.1;
            font-size: 24px;
          }

          p {
            color: #aaa;
            font-size: 14px;
            margin-top: 0;
            margin-bottom: 10px;
          }

          &::after {
            background: url("https://tony99mys.com/data/1908/uploads/icn_cat-money.png");
            content: "";
            position: absolute;
            width: 40px;
            height: 40px;
            left: -55px;
            top: 5px;
            background-size: 100%;
            background-repeat: no-repeat;
            background-position: center;
            opacity: 0.5;
            filter: brightness(7.5);
          }
        }

        .promo-count {
          font-size: 20px;
          color: goldenrod;
          margin-top: 10px;
          margin-bottom: 10px;
          margin-left: 70px;
          padding: 10px 20px;
          border-left: 1px solid #ddd;

          br {
            display: none;
          }

          > div {
            background: #452f00;
            border: 2px solid #231800;
            margin-top: 10px;
          }

          span {
            display: -webkit-inline-box;
            text-align: center;
            margin: auto;
            padding: 4px;
            color: #ffffff;
            font-weight: bold;
          }
        }
      }

      .actions {
        display: flex;
        margin-top: 10px;
        position: relative;
        gap: 4px;

        a {
          flex: 1;
          display: flex;
          justify-content: center;
          align-items: center;
          text-decoration: none;
          min-height: 38px;
          outline: none;
          border: 0;
          border-radius: 6px;
          font-size: 14px;
          cursor: pointer;
        }

        .btn-register {
          background-color: #f0e78d;
          color: #000000;
        }

        .btn-learn-more {
          flex: 1;
          background-color: transparent;
          border: 1px solid #919191;
          color: #fff;
        }
      }
    }
  }

  :deep(.seo) {
    background: #c3a64c;
    padding: 20px;
    border-radius: 20px;
    color: #323232ff;
  }
}
</style>
