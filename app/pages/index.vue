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

const items = [
  {
    title: "Sportsbook",
    icon: new URL(
      "@/assets/images/marquee/sports/hot-sport.png",
      import.meta.url
    ),
    marqueeItems: sports,
  },
  {
    title: "Slots",
    icon: new URL(
      "@/assets/images/marquee/slots/hot-slots.png",
      import.meta.url
    ),
    marqueeItems: slots,
  },
];
</script>
