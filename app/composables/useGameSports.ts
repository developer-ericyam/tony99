export default function useGameSports() {
  const sportsName = [
    "M-SPORTS",
    "SBOBET",
    "SBOBET VIRTUAL SPORT",
    "E-SPORTS",
    "IBCBET",
    "CMD368",
    "LIVESCORE",
    "LIVE TV",
    "S-SPORTS",
    "S-SPORTS LCS",
  ];
  const sports = Array.from({ length: 10 }, (_, i) => {
    const img = `/marquee/sports/sport-${i + 1}.png`;
    return {
      name: sportsName[i] || "",
      src: img,
      alt: `Sport ${i + 1}`,
    };
  });

  return {
    sports,
  };
}
