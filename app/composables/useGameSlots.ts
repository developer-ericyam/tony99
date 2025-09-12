export default function useGameSlots() {
  const png = [8, 13, 14, 15];
  const slotsName = [
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

  const slots = Array.from({ length: 10 }, (_, i) => {
    let img = `../assets/images/marquee/slots/slot-${i + 1}.jpg`;
    if (png.includes(i))
      img = `../assets/images/marquee/slots/slot-${i + 1}.png`;
    return {
      name: slotsName[i] || "",
      src: new URL(img, import.meta.url),
      alt: `Slots ${i + 1}`,
    };
  });

  return {
    slots,
  };
}
