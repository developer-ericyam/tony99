<template>
  <div class="tony-app">
    <a-layout has-sider>
      <a-layout-sider
        class="sider"
        :class="{ collapsed: collapsed }"
        v-model:collapsed="collapsed"
        width="250"
      >
        <div class="burger-menu">
          <a-button shape="circle" @click="collapsed = !collapsed">
            <MenuOutlined />
          </a-button>
        </div>

        <a-menu
          class="menu"
          mode="inline"
          v-for="(menu, index) in menus"
          :key="index"
        >
          <li v-if="menu.title" class="menu-title">{{ menu.title }}</li>
          <a-menu-item
            class="menu-item"
            v-for="item in menu.items"
            :key="item.key"
          >
            <img class="icon" :src="item.icon" />
            <span class="nav-text">{{ item.text }}</span>
          </a-menu-item>
        </a-menu>
        <br />
      </a-layout-sider>
    </a-layout>

    <a-layout
      class="content"
      :style="{ marginLeft: collapsed ? '80px' : '250px' }"
    >
      <a-layout-header v-show="showNoticedownload">
        <AppHeaderNoticeDownload v-model:show="showNoticedownload" />
      </a-layout-header>
      <a-layout-content>
        <AppHeaderToolbar />
        <div class="main-content">
          <slot />
        </div>
      </a-layout-content>
      <AppFooter />
    </a-layout>
  </div>
</template>

<script setup lang="ts">
import HomeIcon from "~/assets/icons/menu-home.png";
import SlotsIcon from "~/assets/icons/menu-slots.png";
import CasinoIcon from "~/assets/icons/menu-casino.png";
import SportsIcon from "~/assets/icons/menu-sports.png";
import Gaming2Icon from "~/assets/icons/menu-gaming2.png";
import FishingIcon from "~/assets/icons/menu-fishing.png";
import LotteryIcon from "~/assets/icons/menu-lottery.png";
import RankigIcon from "~/assets/icons/menu-ranking.png";
import PerdanaIcon from "~/assets/icons/menu-perdana.png";
import FightingIcon from "~/assets/icons/menu-fighting.png";
import MVPIcon from "~/assets/icons/menu-mvp.png";
import VIPIcon from "~/assets/icons/menu-vip.png";
import RedeemIcon from "~/assets/icons/menu-redeem.png";
import PromoIcon from "~/assets/icons/menu-promo.png";
import SupportIcon from "~/assets/icons/menu-support.png";
import CloudIcon from "~/assets/icons/menu-cloud.png";
import ResponsibleIcon from "~/assets/icons/menu-responsible.png";
import TermIcon from "~/assets/icons/menu-terms.png";

const showNoticedownload = ref(true);
const collapsed = ref(false);
const selectedKeys = ref<string[]>(["1"]);

const menus = [
  {
    title: "",
    items: [{ key: "1", icon: HomeIcon, text: "Home" }],
  },
  {
    title: "Popular Games",
    items: [
      { key: "2", icon: SlotsIcon, text: "Slots" },
      { key: "3", icon: CasinoIcon, text: "Live Casino" },
      { key: "4", icon: SportsIcon, text: "Sportsbook" },
      { key: "5", icon: Gaming2Icon, text: "Poker" },
      { key: "6", icon: FishingIcon, text: "Battle" },
      { key: "7", icon: LotteryIcon, text: "Lottery" },
    ],
  },
  {
    title: "Tournaments",
    items: [
      { key: "8", icon: RankigIcon, text: "Ranking Hall" },
      { key: "9", icon: PerdanaIcon, text: "JP6D Prize" },
      { key: "10", icon: FightingIcon, text: "Challenge" },
      { key: "11", icon: MVPIcon, text: "MVP Leaderboard" },
    ],
  },
  {
    title: "",
    items: [
      { key: "12", icon: VIPIcon, text: "VIP" },
      { key: "13", icon: RedeemIcon, text: "Redeem Mall" },
      { key: "14", icon: PromoIcon, text: "Promotions" },
    ],
  },
  {
    title: "More",
    items: [
      { key: "15", icon: SupportIcon, text: "Customer Support" },
      { key: "16", icon: CloudIcon, text: "F6Notes App" },
      { key: "17", icon: ResponsibleIcon, text: "Responsible Gambling" },
      { key: "18", icon: TermIcon, text: "Terms" },
    ],
  },
];
</script>

<style scoped lang="scss">
.tony-app {
  .sider {
    background: #000000ff;
    overflow: auto;
    height: 100dvh;
    position: fixed;
    z-index: 1;
    left: 0;
    top: 0;
    bottom: 0;
    padding: 0 15px;

    .burger-menu {
      height: 60px;
      display: flex;
      align-items: center;
      justify-content: flex-end;

      button {
        background-color: #6b5602;
        border: none;
        color: #fff;
      }
    }

    &.collapsed {
      .burger-menu {
        justify-content: center;
      }
    }
  }

  .menu {
    margin-bottom: 20px;
    background: linear-gradient(158deg, #c49c4d, #291c00);
    border-inline-end: none !important;
    border-radius: 7px;
    padding: 4px 0;

    .menu-title {
      border-bottom: 1px solid #ffffff57;
      margin-bottom: 10px;
      height: 58px;
      display: flex;
      align-items: center;
      padding: 10px 0 10px 24px;
      pointer-events: none;
      position: relative;
      width: 100%;
      font-size: 15px;
      color: #fff;
      font-weight: bold;
      text-shadow: 0 1px 1px #323232bd;
    }

    :deep(.menu-item) {
      border-radius: 40px;
      margin: 0 5px;
      padding-top: 10px;
      padding-bottom: 10px;
      min-height: 40px;
      height: auto;

      &.ant-menu-item-selected {
        background: transparent;
      }

      &:hover {
        background: #291c00 !important;
        .icon {
          filter: unset !important;
        }
      }

      .ant-menu-title-content {
        display: flex;
        align-items: center;
        font-size: 15px;
        font-weight: bold;
        color: #fff;
        text-shadow: 0 1px 1px #323232bd;
        text-wrap-mode: wrap;
        line-height: 18px;
      }

      .icon {
        width: 18px;
        height: 18px;
        margin-right: 15px;
        filter: grayscale(0.5) brightness(1) sepia(1) hue-rotate(333deg);
      }
    }
  }

  .content {
    background: transparent;
    color: #fff;

    .ant-layout-header {
      background-color: transparent;
      color: #fff;
      padding: 0;
    }

    .ant-layout-content {
      max-width: 1550px;

      .main-content {
        padding-top: 10px;
        padding-left: 20px;
        padding-right: 20px;
      }
    }
  }
}
</style>
