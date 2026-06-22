import Image from "next/image";

const alumniCards = [
  {
    rotate: 12,
    translateY: 10,
    float: "float2",
  },
  {
    rotate: -6,
    translateY: -20,
    float: "float1",
  },
  {
    rotate: 10,
    translateY: 10,
    float: "float2",
  },
  {
    rotate: -4,
    translateY: 35,
    float: "float3",
  },
  {
    rotate: -8,
    translateY: 20,
    float: "float4",
  },
  {
    rotate: -18,
    translateY: -10,
    float: "float1",
  },
  {
    rotate: -18,
    translateY: 15,
    float: "float2",
  },
];

export default function Alumni() {
  return (
    <section className="bg-[#5878AF] py-24 overflow-hidden">
      <div className="overflow-hidden ">
        <div className="alumni-track gap-8 flex py-10">
        {alumniCards.map((card, index) => (
          <div
            key={index}
            className={card.float}
            style={{
              animation: `${card.float} ${
                3 + (index % 3)
              }s ease-in-out infinite`,
            }}
          >
            <div
              className="
                bg-[#ECE9C7]
                w-[240px]
                h-[360px]
                p-6
                border border-black/10
                shadow-[14px_14px_0px_rgba(0,0,0,0.18)]
                flex flex-col
              "
              style={{
                transform: `rotate(${card.rotate}deg) translateY(${card.translateY}px)`,
              }}
            >
              <h3
                className="
                  font-serif
                  italic
                  text-xl
                  text-black
                  mb-4
                "
              >
                Alumni Name
              </h3>

              <p
                className="
                  text-[13px]
                  leading-6
                  text-black/90
                  flex-1
                "
              >
                Add alumni testimonial, experience, journey, achievements,
                memories with CodeChef, company experience, or any content
                here.
              </p>

              <div className="flex justify-center mt-6">
                <div className="relative w-24 h-24 rounded-full overflow-hidden border-2 border-black">
                  <Image
                    src="/images/alumni-placeholder.jpg"
                    alt="Alumni"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
  );
}