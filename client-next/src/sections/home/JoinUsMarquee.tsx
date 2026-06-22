export default function Marquee() {
  return (
    <div className="bg-[#ECE9C7] overflow-hidden border-y-2 border-black py-3">
      <div
        className="animate-marquee whitespace-nowrap text-black text-3xl tracking-wide"
        style={{ fontFamily: "Bebas Neue" }}
      >
        JOIN US MARQUEE!!! &nbsp;&nbsp;&nbsp;
        JOIN US MARQUEE!!! &nbsp;&nbsp;&nbsp;
        JOIN US MARQUEE!!! &nbsp;&nbsp;&nbsp;
        JOIN US MARQUEE!!! &nbsp;&nbsp;&nbsp;
        JOIN US MARQUEE!!! &nbsp;&nbsp;&nbsp;
      </div>
    </div>
  );
}