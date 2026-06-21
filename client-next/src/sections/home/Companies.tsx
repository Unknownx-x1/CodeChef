export default function Companies() {
  const companies = [
    {
      name: "Google",
      logo: "/logos/google.png",
    },
    {
      name: "UBS",
      logo: "/logos/ubs.png",
    },
    {
      name: "JPMorgan",
      logo: "/logos/jpmorgan.png",
    },
    {
      name: "Nutanix",
      logo: "/logos/nutanix.png",
    },
    {
      name: "Futures First",
      logo: "/logos/futuresfirst.png",
    },
  ];

  return (
    <section className="relative py-32 px-8 overflow-hidden bg-[#5878AF]">

      {/* Background Text */}
      <h1
        className="
          absolute
          inset-0
          flex
          items-center
          justify-center
          font-bebas
          text-[20rem]
          text-white/[0.03]
          pointer-events-none
          select-none
        "
      >
        CODECHEF
      </h1>

      {/* Heading */}
      <div className="text-center mb-20 relative z-10">
        <p
          className="
            font-bebas
            tracking-[0.4em]
            text-[#ECE9C7]
            text-xl
            mb-4
          "
        >
          OUR ALUMNI WORK AT
        </p>

        <div
          className="
            w-32
            h-[2px]
            bg-[#ECE9C7]
            mx-auto
          "
        />
      </div>

      {/* Logos Grid */}
      <div
        className="
          relative
          z-10
          max-w-7xl
          mx-auto
          grid
          grid-cols-2
          md:grid-cols-3
          lg:grid-cols-5
          gap-8
        "
      >
        {companies.map((company) => (
          <div
            key={company.name}
            className="
              group
              h-44
              rounded-3xl
              bg-white/10
              backdrop-blur-md
              border
              border-white/10
              flex
              items-center
              justify-center
              transition-all
              duration-500
              hover:-translate-y-3
              hover:bg-white/15
              hover:border-[#ECE9C7]/30
              hover:shadow-2xl
            "
          >
            <img
              src={company.logo}
              alt={company.name}
              className="
                h-16
                object-contain
                opacity-90
                transition-all
                duration-500
                group-hover:grayscale-0
                group-hover:opacity-100
                group-hover:scale-110
              "
            />
          </div>
        ))}
      </div>
    </section>
  );
}