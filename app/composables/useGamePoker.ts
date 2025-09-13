export default function useGamePoker() {
  const jpg = [0, 1, 2, 3];
  const pokerName = [
    "Evolution",
    "Evolution",
    "Pragmatic Play",
    "Pragmatic Play",
    "Evolution",
    "Pragmatic Play",
    "Pragmatic Play",
    "Evolution",
    "Evolution",
    "Pragmatic Play",
  ];

  const poker = Array.from({ length: 10 }, (_, i) => {
    let img = `/marquee/poker/poker-tumbnail-${i + 1}.png`;
    if (jpg.includes(i)) img = `/marquee/poker/poker-tumbnail-${i + 1}.jpg`;
    return {
      name: pokerName[i] || "",
      src: img,
      alt: `Poker ${i + 1}`,
    };
  });

  return {
    poker,
  };
}
