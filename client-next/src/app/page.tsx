"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function HookPage() {
  const router = useRouter();

  const [showCode, setShowCode] = useState(false);
  const [showChef, setShowChef] = useState(false);
  const [showHat, setShowHat] = useState(false);
  const [flash, setFlash] = useState(false);

  useEffect(() => {
    const t1 = setTimeout(() => setShowCode(true), 2000);
    const t2 = setTimeout(() => setShowChef(true), 2600);
    const t3 = setTimeout(() => setShowHat(true), 3400);
    const t4 = setTimeout(() => setFlash(true), 4500);
    const t5 = setTimeout(() => router.push("/home"), 5200);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      clearTimeout(t4);
      clearTimeout(t5);
    };
  }, [router]);

  const codeLetters = [
    { letter: "C", x: -500, y: -300 },
    { letter: "O", x: 500, y: -250 },
    { letter: "D", x: -450, y: 300 },
    { letter: "E", x: 450, y: 250 },
  ];

  const chefLetters = ["C", "H", "E", "F"];

  return (
    <main className="relative h-screen overflow-hidden bg-black flex items-center justify-center">



      {/* CODE LETTERS */}
      <div className="flex relative z-20">

        {codeLetters.map((item, index) => (
          <motion.span
            key={item.letter}
            initial={{
              opacity: 0,
              x: -400,
              filter: "blur(12px)",
            }}
            animate={{
              opacity: 1,
              x: 0,
              filter: "blur(0px)",
            }}
            transition={{
              duration: 0.7,
              delay: index * 0.2,
              ease: [0.22, 1, 0.36, 1],
            }}
            whileInView={{
              x: [0, -5, 5, -3, 0],
            }}
            className="
    text-[120px]
    md:text-[200px]
    lg:text-[260px]
    font-extralight
    tracking-[-0.1em]
    text-white
    select-none
  "
          >
            {item.letter}
          </motion.span>
        ))}

        {/* CHEF TRAIN */}
{/* CHEF */}
<AnimatePresence>
  {showChef && (
    <div className="flex">
      {chefLetters.map((letter, index) => {
        const animations = [
          {
            x: 1000,
            y: 0,
            rotate: 0,
          },
          {
            x: 0,
            y: -600,
            rotate: 0,
          },
          {
            x: 0,
            y: 600,
            rotate: 0,
          },
          {
            x: 800,
            y: 0,
            rotate: 180,
          },
        ];

        return (
          <motion.span
            key={letter}
            initial={{
              opacity: 0,
              ...animations[index],
            }}
            animate={{
              opacity: 1,
              x: 0,
              y: 0,
              rotate: 0,
            }}
            transition={{
              duration: 0.9,
              delay: index * 0.15,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="
              text-[120px]
              md:text-[200px]
              lg:text-[260px]
              font-extralight
              tracking-[-0.1em]
              text-white
              select-none
            "
          >
            {letter}
          </motion.span>
        );
      })}
    </div>
  )}
</AnimatePresence>
      </div>

      {/* CHEF HAT */}
      <AnimatePresence>
        {showHat && (
          <motion.div
            initial={{
              y: -500,
              opacity: 0,
              rotate: -15,
            }}
            animate={{
              y: -120,
              opacity: 1,
              rotate: 0,
            }}
            transition={{
              type: "spring",
              stiffness: 160,
              damping: 8,
            }}
            className="absolute z-30"
          >
            <Image
              src="/images/hat.png"
              alt="Chef Hat"
              width={180}
              height={180}
              priority
            />
          </motion.div>
        )}
      </AnimatePresence>

      {/* FLASH */}
      <AnimatePresence>
        {flash && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 1 }}
            transition={{ duration: 2 }}
            className="absolute inset-0 bg-white z-50"
          />
        )}
      </AnimatePresence>
    </main>
  );
}