export default function Hero() {
  return (
    <section className="bg-[#5F7FB6] overflow-hidden h-[450px]">
      <h1
        className="
          font-bebas
          text-[#ECE9C7]
          text-[22rem]
          leading-[0.7]
          whitespace-nowrap
          select-none
          ml-4
          mt-2
          font-black
        "
        style={{
          WebkitTextStroke: "4px #111",
          textShadow: "16px 16px 0 rgba(0,0,0,0.28)",
          transform: "scaleX(0.50) scaleY(1.55)",
          transformOrigin: "top left",
          letterSpacing: "0.1em",
        }}
      >
        CODECHEF
      </h1>
    </section>
  );
}