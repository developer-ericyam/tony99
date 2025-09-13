export default function useGameCasino() {
  const casinoName = [
    "Evolution",
    "Evolution",
    "Pragmatic Play",
    "Pragmatic Play",
    "Evolution",
    "Pragmatic Play",
    "Pragmatic Play",
    "Evolution",
  ];
  const casino = Array.from({ length: 8 }, (_, i) => {
    const img = `/marquee/casino/live-tumbnail-${i + 1}.png`;
    return {
      name: casinoName[i] || "",
      src: img,
      alt: `Casino ${i + 1}`,
    };
  });

  return {
    casino,
  };
}
