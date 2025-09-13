export default function useGameLottery() {
  const lotteryName = [
    "Keno",
    "Malaysia Lottery",
    "XOSO79",
    "93Connect",
    "QQKeno",
  ];
  const lottery = Array.from({ length: 5 }, (_, i) => {
    const img = `/marquee/lottery/lottery-${i + 1}.png`;
    return {
      name: lotteryName[i] || "",
      src: img,
      alt: `Lottery ${i + 1}`,
    };
  });

  return {
    lottery,
  };
}
