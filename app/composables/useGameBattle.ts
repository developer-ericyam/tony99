export default function useGameBattle() {
  const battleName = [
    "Global Gaming",
    "Cockfight",
    "Joker",
    "Jili",
    "Miki World",
    "CQ9 Gaming",
    "Astro Tech",
  ];
  const battle = Array.from({ length: 7 }, (_, i) => {
    const img = `/marquee/battle/battle-${i + 1}.png`;
    return {
      name: battleName[i] || "",
      src: img,
      alt: `Battle ${i + 1}`,
    };
  });

  return {
    battle,
  };
}
