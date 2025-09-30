<template>
  <div>
    <HomeCarousel />
    <section class="game-section" style="padding-top: 10px">
      <HomeMarquee
        v-for="(item, index) in items"
        :key="index"
        :title="item.title"
        :icon="item.icon"
        :items="item.marqueeItems"
      />
    </section>

    <section class="about-section">
      <HomeSectionAbout />
    </section>

    <section class="providers-section">
      <HomeSectionProviders />
    </section>

    <section class="seo-section">
      <HomeSectionSEO />
    </section>
  </div>
</template>

<script setup lang="ts">
const { sports } = useGameSports();
const { slots } = useGameSlots();
const { casino } = useGameCasino();
const { poker } = useGamePoker();
const { battle } = useGameBattle();
const { lottery } = useGameLottery();

const items = [
  {
    title: "Sportsbook",
    icon: "/marquee/sports/hot-sport.png",
    marqueeItems: sports,
  },
  {
    title: "Slots",
    icon: "/marquee/slots/hot-slots.png",
    marqueeItems: slots,
  },
  {
    title: "Live Casino",
    icon: "/marquee/casino/hot-casino.png",
    marqueeItems: casino,
  },
  {
    title: "Poker",
    icon: "/marquee/poker/hot-games.png",
    marqueeItems: poker,
  },
  {
    title: "Battle",
    icon: "/marquee/battle/hot-battle.png",
    marqueeItems: battle,
  },
  {
    title: "Lottery",
    icon: "/marquee/lottery/hot-lottery.png",
    marqueeItems: lottery,
  },
];
</script>
