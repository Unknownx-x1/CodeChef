"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import Footer from "@/components/Footer/Footer";
import { motion } from "framer-motion";
import mascotImg from "./mascot.png";

// Inline SVG components for restaurant-themed details and premium decorations.

// 1. PepperGrinder SVG (Left decoration)
const PepperGrinder = () => (
  <svg viewBox="0 0 60 180" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-14 md:w-16 h-auto drop-shadow-[0_8px_16px_rgba(0,0,0,0.5)]">
    <defs>
      <linearGradient id="wood-dark" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#3E2723" />
        <stop offset="30%" stopColor="#5D4037" />
        <stop offset="70%" stopColor="#3E2723" />
        <stop offset="100%" stopColor="#27120F" />
      </linearGradient>
      <linearGradient id="metal-cap" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#94A3B8" />
        <stop offset="50%" stopColor="#F8FAFC" />
        <stop offset="100%" stopColor="#475569" />
      </linearGradient>
    </defs>
    {/* Metal screw cap */}
    <path d="M22 0 h16 v10 h-16 z" fill="url(#metal-cap)" stroke="#000" strokeWidth="1" />
    <circle cx="30" cy="5" r="3" fill="#1E293B" />
    {/* Wooden handle */}
    <path d="M15 10 h30 v25 c0 5 -5 10 -15 10 s-15 -5 -15 -10 z" fill="url(#wood-dark)" stroke="#000" strokeWidth="1" />
    {/* Neck link */}
    <path d="M20 45 h20 v6 h-20 z" fill="url(#metal-cap)" stroke="#000" strokeWidth="1" />
    {/* Main Grinder Body */}
    <path d="M18 51 c0 0 5 10 5 30 c0 20 -10 30 -10 50 c0 20 5 40 5 40 h24 c0 0 5 -20 5 -40 c0 -20 -10 -30 -10 -50 c0 -20 5 -30 5 -30 z" fill="url(#wood-dark)" stroke="#000" strokeWidth="1" />
    {/* Bottom ring */}
    <path d="M16 171 h28 v9 h-28 z" fill="url(#wood-dark)" stroke="#000" strokeWidth="1.5" />
  </svg>
);

// 2. KitchenJar SVG (Right decoration)
const KitchenJar = () => (
  <svg viewBox="0 0 100 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-20 md:w-22 h-auto drop-shadow-[0_8px_16px_rgba(0,0,0,0.5)]">
    <defs>
      <linearGradient id="jar-body" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#FFFFFF" />
        <stop offset="70%" stopColor="#F1F5F9" />
        <stop offset="100%" stopColor="#E2E8F0" />
      </linearGradient>
      <linearGradient id="spatula-grad" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#E2E8F0" />
        <stop offset="50%" stopColor="#94A3B8" />
        <stop offset="100%" stopColor="#475569" />
      </linearGradient>
      <linearGradient id="wood-light" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#78350F" />
        <stop offset="50%" stopColor="#D97706" />
        <stop offset="100%" stopColor="#451A03" />
      </linearGradient>
    </defs>
    {/* Steel Spatula */}
    <path d="M20 100 L20 20 c0 -3 2 -5 5 -5 h14 c3 0 5 2 5 5 l0 80 z" fill="url(#spatula-grad)" stroke="#1E293B" strokeWidth="1" />
    {/* Spatula holes */}
    <line x1="27" y1="25" x2="27" y2="70" stroke="#1E293B" strokeWidth="2.5" strokeLinecap="round" />
    <line x1="32" y1="25" x2="32" y2="70" stroke="#1E293B" strokeWidth="2.5" strokeLinecap="round" />
    <line x1="37" y1="25" x2="37" y2="70" stroke="#1E293B" strokeWidth="2.5" strokeLinecap="round" />

    {/* Wooden Spoon */}
    <path d="M50 100 L50 40 c0 -3 2 -5 5 -5 c7 0 12 -10 12 -20 c0 -10 -5 -15 -12 -15 c-7 0 -12 5 -12 15 c0 10 5 20 12 20 l0 65 z" fill="url(#wood-light)" stroke="#451A03" strokeWidth="1" />

    {/* Whisk wire loops */}
    <path d="M72 100 L72 30 C72 30 62 20 72 5 C82 20 72 30 72 30 Z" fill="none" stroke="#64748B" strokeWidth="1.5" />
    <path d="M72 100 L72 30 C72 30 65 15 72 5 C79 15 72 30 72 30 Z" fill="none" stroke="#64748B" strokeWidth="1.5" />
    <path d="M72 100 L72 30 C72 30 79 15 72 5 C65 15 72 30 72 30 Z" fill="none" stroke="#64748B" strokeWidth="1.5" />
    <line x1="72" y1="100" x2="72" y2="50" stroke="#475569" strokeWidth="2" />

    {/* Ceramic container jar */}
    <path d="M15 100 h70 v85 c0 8 -8 15 -18 15 h-34 c-10 0 -18 -7 -18 -15 z" fill="url(#jar-body)" stroke="#94A3B8" strokeWidth="1.5" />
    {/* Jar rim */}
    <path d="M10 93 h80 v7 h-80 z" fill="#F8FAFC" stroke="#94A3B8" strokeWidth="1.5" />
  </svg>
);

// 3. Garlic bulb SVG
const Garlic = () => (
  <svg viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-8 md:w-9 h-auto drop-shadow-[0_4px_8px_rgba(0,0,0,0.35)]">
    <defs>
      <linearGradient id="garlic-grad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#FFFFFF" />
        <stop offset="85%" stopColor="#F5F5F4" />
        <stop offset="100%" stopColor="#E7E5E4" />
      </linearGradient>
    </defs>
    <path d="M30 5 C25 15 10 25 10 40 c0 12 10 20 20 20 s20 -8 20 -20 c0 -15 -15 -25 -20 -35 Z" fill="url(#garlic-grad)" stroke="#D6D3D1" strokeWidth="0.75" />
    <path d="M30 5 C22 20 18 35 18 60" stroke="#E7E5E4" strokeWidth="1.2" />
    <path d="M30 5 C38 20 42 35 42 60" stroke="#E7E5E4" strokeWidth="1.2" />
    <path d="M28 2 c0 0 2 5 2 8 c0 0 2 -5 2 -8 Z" fill="#D6D3D1" />
  </svg>
);

// 4. BowlOfSpice SVG
const BowlOfSpice = () => (
  <svg viewBox="0 0 80 50" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-12 md:w-13 h-auto drop-shadow-[0_6px_12px_rgba(0,0,0,0.4)]">
    <defs>
      <linearGradient id="bowl-grad" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#FFFFFF" />
        <stop offset="70%" stopColor="#F1F5F9" />
        <stop offset="100%" stopColor="#CBD5E1" />
      </linearGradient>
    </defs>
    <path d="M5 15 c0 0 5 30 35 30 s35 -30 35 -30 Z" fill="url(#bowl-grad)" stroke="#94A3B8" strokeWidth="1" />
    <ellipse cx="40" cy="15" rx="35" ry="10" fill="#78350F" stroke="#451A03" strokeWidth="0.5" />
    <circle cx="30" cy="15" r="1.2" fill="#B45309" />
    <circle cx="36" cy="18" r="1" fill="#D97706" />
    <circle cx="45" cy="13" r="1.5" fill="#451A03" />
    <circle cx="50" cy="16" r="1.2" fill="#B45309" />
  </svg>
);

// 5. Herbs component rendering a premium green basil leaf cluster.
const Herbs = () => (
  <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-8 md:w-10 h-8 md:h-10 drop-shadow-[0_4px_8px_rgba(0,0,0,0.3)]">
    <defs>
      <linearGradient id="leaf-grad-1" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#4ADE80" />
        <stop offset="100%" stopColor="#166534" />
      </linearGradient>
      <linearGradient id="leaf-grad-2" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#22C55E" />
        <stop offset="100%" stopColor="#14532D" />
      </linearGradient>
    </defs>
    {/* Leaf 1 */}
    <path d="M50 50 C65 20 90 25 90 50 C90 75 65 80 50 50 Z" fill="url(#leaf-grad-1)" />
    <path d="M50 50 Q70 40 90 50" stroke="#86EFAC" strokeWidth="1.5" strokeLinecap="round" />
    {/* Leaf 2 */}
    <path d="M50 50 C20 35 25 10 50 10 C75 10 80 35 50 50 Z" fill="url(#leaf-grad-2)" />
    <path d="M50 50 Q50 25 50 10" stroke="#86EFAC" strokeWidth="1.5" strokeLinecap="round" />
    {/* Leaf 3 */}
    <path d="M50 50 C35 80 10 75 10 50 C10 25 35 20 50 50 Z" fill="url(#leaf-grad-1)" />
    <path d="M50 50 Q30 60 10 50" stroke="#86EFAC" strokeWidth="1.5" strokeLinecap="round" />
  </svg>
);

// 6. Peppercorn component rendering a small 3D-shaded sphere.
const Peppercorn = () => (
  <svg viewBox="0 0 10 10" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-2 h-2 drop-shadow-[0_1.5px_2px_rgba(0,0,0,0.65)]">
    <defs>
      <radialGradient id="peppercorn-grad" cx="30%" cy="30%" r="70%">
        <stop offset="0%" stopColor="#52525B" />
        <stop offset="60%" stopColor="#18181B" />
        <stop offset="100%" stopColor="#09090B" />
      </radialGradient>
    </defs>
    <circle cx="5" cy="5" r="4.5" fill="url(#peppercorn-grad)" />
  </svg>
);

// 7. CeramicPlate component displaying a high-end detailed porcelain dinner plate in perspective.
const CeramicPlate = ({ rank, children }: { rank: number; children: React.ReactNode }) => {
  const plateGradients = {
    1: "from-[#FCFBF4] via-[#F5F2DF] to-[#E3DCB6]", // Cream/Gold
    2: "from-[#F9F9F9] via-[#ECECEC] to-[#D8D8D8]", // Silver/White
    3: "from-[#F6F1EA] via-[#EADECA] to-[#CFAF8B]", // Bronze/Tan
  };

  const rimColors = {
    1: "border-[#D4AF37] shadow-[0_12px_24px_rgba(212,175,55,0.35),_inset_0_2px_4px_rgba(255,255,255,0.8)]", // Gold
    2: "border-[#A8A8A8] shadow-[0_12px_24px_rgba(168,168,168,0.15),_inset_0_2px_4px_rgba(255,255,255,0.8)]", // Silver
    3: "border-[#A76F42] shadow-[0_12px_24px_rgba(167,111,66,0.15),_inset_0_2px_4px_rgba(255,255,255,0.8)]",  // Bronze
  };

  const sizeClass = rank === 1 
    ? "w-[260px] h-[130px] md:w-[310px] md:h-[155px]" 
    : "w-[210px] h-[105px] md:w-[250px] md:h-[125px]";

  return (
    <div className={`relative flex items-center justify-center ${sizeClass}`}>
      {/* Outer Ceramic Oval Rim */}
      <div 
        className={`
          w-full h-full rounded-[50%] border-[6px] flex items-center justify-center relative
          bg-gradient-to-b ${plateGradients[rank as 1|2|3]} ${rimColors[rank as 1|2|3]}
          shadow-[0_16px_32px_rgba(0,0,0,0.45),_inset_0_2px_4px_rgba(255,255,255,0.7)]
          transition-transform duration-300
        `}
      >
        {/* Inner Plate Well (Depth) */}
        <div 
          className="
            w-[85%] h-[80%] rounded-[50%] bg-black/[0.04] border border-black/[0.06] shadow-[inset_0_6px_12px_rgba(0,0,0,0.15)]
            flex items-center justify-center relative overflow-hidden
          "
        >
          {/* Accent ring on the plate surface */}
          <div className="w-[75%] h-[75%] rounded-[50%] border border-dashed border-black/[0.05]" />
        </div>

        {/* Content children rendered over the plate */}
        <div className="absolute inset-0 flex items-center justify-center z-10">
          {children}
        </div>
      </div>
    </div>
  );
};

// 8. Avatar component showing a generic head and shoulders placeholder inside a circle with a white outline.
const Avatar = ({ rank }: { rank: number }) => {
  const size = rank === 1 ? "w-22 h-22 sm:w-26 sm:h-26" : "w-18 h-18 sm:w-22 sm:h-22";
  return (
    <div className={`relative ${size} rounded-full border-[5px] border-white bg-[#5D708B] flex items-end justify-center overflow-hidden shadow-lg`}>
      <svg viewBox="0 0 100 100" className="w-full h-full text-white" fill="currentColor">
        {/* Head */}
        <circle cx="50" cy="38" r="18" />
        {/* Shoulders */}
        <path d="M 15,85 C 15,62 30,55 50,55 C 70,55 85,62 85,85 Z" />
      </svg>
    </div>
  );
};

// 9. StarIcon for rendering rating stars.
const StarIcon = ({ color }: { color: string }) => (
  <svg viewBox="0 0 24 24" fill={color} className="w-4 h-4 sm:w-5 sm:h-5">
    <path d="M12 .587l3.668 7.431 8.2 1.191-5.934 5.787 1.4 8.168L12 18.896l-7.334 3.857 1.4-8.168L.132 9.209l8.2-1.191L12 .587z" />
  </svg>
);

// Steam Effect Component (rising waves behind the mascot)
const SteamEffect = () => (
  <div className="absolute inset-0 pointer-events-none z-0 flex justify-center gap-6 overflow-hidden mt-6">
    <svg className="w-5 h-20 text-[#FFF2C7]/30 animate-steam-1" viewBox="0 0 20 100" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
      <path d="M10 90 Q15 65 5 45 T10 0" />
    </svg>
    <svg className="w-5 h-20 text-[#FFF2C7]/30 animate-steam-2" viewBox="0 0 20 100" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
      <path d="M10 90 Q5 70 15 50 T10 0" />
    </svg>
    <svg className="w-5 h-20 text-[#FFF2C7]/30 animate-steam-3" viewBox="0 0 20 100" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
      <path d="M10 90 Q15 75 5 55 T10 0" />
    </svg>
  </div>
);

// Beam Dust particles component for realistic spotlight beam ambiance
const BeamDust = ({ count }: { count: number }) => {
  const particles = Array.from({ length: count }).map((_, i) => {
    const left = `${15 + (i * 15) % 60}%`;
    const top = `${10 + (i * 18) % 70}%`;
    const size = `${1.5 + (i % 2) * 1.5}px`;
    const delay = `${i * 0.8}s`;
    const duration = `${5 + (i % 3) * 2}s`;
    return { left, top, size, delay, duration };
  });

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((p, i) => (
        <div
          key={i}
          className="absolute rounded-full bg-white/40 blur-[0.3px]"
          style={{
            left: p.left,
            top: p.top,
            width: p.size,
            height: p.size,
            animation: `beam-dust-drift ${p.duration} ease-in-out infinite`,
            animationDelay: p.delay,
          }}
        />
      ))}
    </div>
  );
};


// Component 1: LeaderboardHeader containing the top navigation links and the page heading.
function LeaderboardHeader() {
  return (
    <header className="w-full max-w-6xl mx-auto px-6 pt-6 flex flex-col gap-4 md:gap-5 z-10 relative">
      {/* Centered Top Navigation Bar */}
      <div className="flex justify-center items-center w-full">
        <div className="flex items-center gap-4 sm:gap-6">
          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex items-center gap-8 text-white font-sans font-bold text-xs tracking-widest">
            <Link href="/home" className="hover:opacity-80 transition-opacity">HOME</Link>
            <Link href="/events" className="hover:opacity-80 transition-opacity">EVENTS</Link>
            <Link href="/blogs" className="hover:opacity-80 transition-opacity">BLOGS</Link>
            <Link href="/team" className="hover:opacity-80 transition-opacity">OUR TEAM</Link>
            <Link href="/leaderboard" className="bg-black text-white px-5 py-2.5 rounded-lg border border-white/10 hover:bg-[#1a1a1a] transition-colors">
              LEADERBOARD
            </Link>
          </nav>

          {/* Hamburger Menu Icon */}
          <button className="text-white hover:opacity-80 p-1" aria-label="Menu">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="w-8 h-8">
              <line x1="4" y1="6" x2="20" y2="6" strokeLinecap="round" />
              <line x1="4" y1="12" x2="20" y2="12" strokeLinecap="round" />
              <line x1="4" y1="18" x2="20" y2="18" strokeLinecap="round" />
            </svg>
          </button>
        </div>
      </div>

      {/* Centered Hero Title with Cooking details */}
      <div className="flex flex-col items-center justify-center w-full">
        {/* Yellow Chef Hat Accent at the top */}
        <div className="flex items-center gap-3 text-[#ECE9C7] mb-0.5 opacity-90">
          <span className="text-xl sm:text-2xl font-semibold tracking-widest">\\\</span>
          <svg viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7">
            <path d="M12 2a4 4 0 0 0-4 4c0 .35.04.7.13 1.03A5 5 0 0 0 3 12c0 2.22 1.45 4.1 3.48 4.76A4.5 4.5 0 0 0 11 21h2a4.5 4.5 0 0 0 4.52-4.24C19.55 16.1 21 14.22 21 12a5 5 0 0 0-5.13-4.97c.09-.33.13-.68.13-1.03a4 4 0 0 0-4-4zM8 17h8v1a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2v-1z" />
          </svg>
          <span className="text-xl sm:text-2xl font-semibold tracking-widest">///</span>
        </div>

        <h1 
          className="font-teko text-7xl sm:text-8xl md:text-9xl font-extrabold text-white tracking-widest uppercase leading-none drop-shadow-[0_2px_4px_rgba(0,0,0,0.3)] text-center"
        >
          LEADERBOARD
        </h1>

        {/* Small uppercase text under title */}
        <div className="flex items-center justify-center gap-3 w-full max-w-xl mx-auto mt-1 select-none">
          <div className="h-[2px] bg-white/20 flex-1" />
          <span className="text-yellow-400 text-sm">★</span>
          <span className="text-white text-xs sm:text-sm font-bold tracking-[0.25em] uppercase whitespace-nowrap">
            Top Performers of CodeChef VIT Chennai
          </span>
          <span className="text-yellow-400 text-sm">★</span>
          <div className="h-[2px] bg-white/20 flex-1" />
        </div>
      </div>
    </header>
  );
}

// Component 2: PlatePodiumCard rendering a single player inside/above a ceramic dinner plate.
function PlatePodiumCard({ 
  rank, 
  name, 
  stars,
  isCenter = false 
}: { 
  rank: 1 | 2 | 3; 
  name: string; 
  stars: number;
  isCenter?: boolean; 
}) {
  const badgeGradients = {
    1: "from-[#FFE07D] via-[#D4AF37] to-[#8A6F1C] text-black border-black",
    2: "from-[#F1F5F9] via-[#94A3B8] to-[#475569] text-white border-black",
    3: "from-[#FDBA74] via-[#C27E46] to-[#7C2D12] text-white border-black",
  };

  return (
    <div className={`
      relative flex flex-col items-center z-10 transition-all duration-300
      ${isCenter ? 'order-1 md:order-2 mb-10 md:mb-16 -translate-y-[25px] scale-105' : rank === 2 ? 'order-2 md:order-1' : 'order-3 md:order-3'}
      plate-hover-lift group
    `}>
      
      {/* Ceramic Plate */}
      <CeramicPlate rank={rank}>
        {/* Avatar positioned overlapping the top rim */}
        <div className="absolute -top-10 md:-top-12 left-1/2 -translate-x-1/2 z-20 transition-transform duration-300 group-hover:scale-105">
          <Avatar rank={rank} />
          {/* Shadow below avatar cast onto plate surface */}
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[80%] h-1.5 bg-black/30 blur-[2px] rounded-full -z-10" />
        </div>

        {/* Basil leaves sitting inside the plate on the right side of the avatar */}
        <div className="absolute right-4 top-1 sm:right-6 sm:top-2 pointer-events-none scale-75 rotate-[35deg] opacity-90">
          <Herbs />
        </div>

        {/* Name label centered inside the plate well */}
        <div className="mt-8 flex flex-col items-center justify-center">
          <span className="font-sans font-black text-xs sm:text-sm tracking-widest text-[#1c1917] uppercase leading-none">
            {name}
          </span>
          <div className="flex gap-0.5 mt-1 sm:mt-1.5">
            {Array.from({ length: 5 }).map((_, i) => (
              <StarIcon key={i} color={i < stars ? '#D4AF37' : '#CBD5E1'} />
            ))}
          </div>
        </div>

        {/* Sparkle effect on Gold Plate */}
        {rank === 1 && (
          <div className="absolute -top-2 right-4 z-30 animate-sparkle pointer-events-none">
            <svg viewBox="0 0 24 24" fill="#FFE07D" className="w-5 h-5 drop-shadow-[0_0_8px_#D4AF37]">
              <path d="M12 0l3 9 9 3-9 3-3 9-3-9-9-3 9-3z" />
            </svg>
          </div>
        )}

        {/* Ribbon Medal Badge overlapping the bottom lip of the plate */}
        <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 z-30 flex flex-col items-center justify-center">
          {/* Blue Ribbon tails */}
          <svg viewBox="0 0 40 30" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-10 h-7 drop-shadow-[0_2px_4px_rgba(0,0,0,0.35)] -mb-7 z-0">
            {/* Left ribbon */}
            <path d="M12 0 L6 26 L12 22 L18 26 Z" fill="#1D4ED8" stroke="#1E3A8A" strokeWidth="1" />
            {/* Right ribbon */}
            <path d="M28 0 L22 26 L28 22 L34 26 Z" fill="#1D4ED8" stroke="#1E3A8A" strokeWidth="1" />
          </svg>
          {/* Circular badge */}
          <div className={`
            rounded-full border-[3px] border-black flex items-center justify-center font-bebas text-base font-extrabold w-8 h-8 shadow-[3px_3px_0px_rgba(0,0,0,1)] z-10 relative
            bg-gradient-to-br ${badgeGradients[rank as 1|2|3]}
          `}>
            {rank}
          </div>
        </div>
      </CeramicPlate>
    </div>
  );
}

// Component 3: PodiumSection organizing the top 3 players inside dinner plates.
function PodiumSection({ topThree }: { topThree: Array<{ name: string; star: string }> }) {
  const p1 = topThree[0] || { name: "Name", star: "5" };
  const p2 = topThree[1] || { name: "Name", star: "4" };
  const p3 = topThree[2] || { name: "Name", star: "3" };

  return (
    <section className="w-full max-w-4xl mx-auto px-6 mt-2 mb-10 flex flex-col md:flex-row items-center md:items-end justify-center gap-6 md:gap-10 lg:gap-12 relative">
      
      {/* Kitchen Decorations: Left Side (Pepper Grinder, Bowl of Spices, Basil, Peppercorns) */}
      <div className="absolute left-[-4%] bottom-[5%] hidden lg:flex items-end gap-2.5 pointer-events-none select-none z-0">
        <PepperGrinder />
        <div className="flex flex-col items-center gap-1.5 -ml-2 mb-2">
          <BowlOfSpice />
          <div className="flex gap-1.5 mt-1">
            <Peppercorn />
            <Peppercorn />
            <Peppercorn />
          </div>
        </div>
        <div className="rotate-[-15deg] mb-4 -ml-2">
          <Herbs />
        </div>
      </div>

      {/* Kitchen Decorations: Right Side (Kitchen Utensils Jar, Garlic, Basil, Peppercorns) */}
      <div className="absolute right-[-4%] bottom-[5%] hidden lg:flex items-end gap-2 pointer-events-none select-none z-0">
        <div className="rotate-[15deg] mb-4">
          <Herbs />
        </div>
        <div className="flex flex-col items-center gap-1.5 mb-2">
          <Garlic />
          <div className="flex gap-1.5 mt-1">
            <Peppercorn />
            <Peppercorn />
          </div>
        </div>
        <div className="-ml-3">
          <KitchenJar />
        </div>
      </div>
      
      {/* Rank #2 (Left Card) */}
      <PlatePodiumCard 
        rank={2} 
        name={p2.name} 
        stars={parseInt(p2.star) || 4} 
      />

      {/* Rank #1 (Center Card) */}
      <PlatePodiumCard 
        rank={1} 
        name={p1.name} 
        stars={parseInt(p1.star) || 5} 
        isCenter={true} 
      />

      {/* Rank #3 (Right Card) */}
      <PlatePodiumCard 
        rank={3} 
        name={p3.name} 
        stars={parseInt(p3.star) || 3} 
      />
    </section>
  );
}

// Component 4: LeaderboardRow rendering a single table entry (without STARS).
function LeaderboardRow({ 
  rank,
  name, 
  rating, 
  problems,
  maxRating,
}: { 
  rank: number;
  name: string; 
  rating: string; 
  problems: number;
  maxRating: number;
}) {
  const rankColors = rank === 4 ? "bg-[#1E3A8A]" : rank === 5 ? "bg-[#334155]" : "bg-[#1E293B]";

  return (
    <div className="
      flex justify-between items-center w-full rounded-lg border-2 border-black/85 px-4 sm:px-6 py-3 my-2.5 font-sans font-bold text-xs sm:text-sm transition-all duration-200 cursor-default hover:-translate-y-0.5 hover:scale-[1.002]
      bg-white text-black hover:bg-[#FAF8E8] shadow-[3px_3px_0px_rgba(0,0,0,1)] hover:shadow-[4px_4px_0px_rgba(0,0,0,1)]
    ">
      {/* Rank column */}
      <div className="w-[10%] text-left flex items-center">
        <div className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-mono font-black border-2 border-black text-white ${rankColors}`}>
          {rank}
        </div>
      </div>

      {/* Chef column */}
      <div className="w-[35%] text-left flex items-center gap-3">
        <div className="w-8 h-8 rounded-full border-2 border-black bg-[#5D708B] flex items-end justify-center overflow-hidden shadow-sm">
          <svg viewBox="0 0 100 100" className="w-full h-full text-white" fill="currentColor">
            <circle cx="50" cy="38" r="18" />
            <path d="M 15,85 C 15,62 30,55 50,55 C 70,55 85,62 85,85 Z" />
          </svg>
        </div>
        <span className="tracking-wide uppercase truncate max-w-[120px] sm:max-w-[180px]">{name}</span>
      </div>

      {/* Current Rating column */}
      <div className="w-[20%] flex justify-center items-center gap-1.5 font-mono text-xs sm:text-sm uppercase tracking-wide">
        <span>{rating}</span>
        <span className="text-red-500 animate-pulse">🔥</span>
      </div>

      {/* Problems Solved column */}
      <div className="w-[15%] flex justify-center items-center gap-1.5 font-mono text-xs sm:text-sm tracking-wide text-neutral-700">
        <span className="text-blue-700 font-bold font-sans">{"{}"}</span>
        <span>{problems}</span>
      </div>

      {/* Max Rating column */}
      <div className="w-[10%] flex justify-center font-mono text-xs sm:text-sm">
        {maxRating}
      </div>

      {/* Action / View Profile column */}
      <div className="w-[10%] flex justify-end">
        <button className="px-3.5 py-1 rounded border-2 border-black font-sans font-bold shadow-[2px_2px_0px_rgba(0,0,0,1)] text-xs bg-[#1E3A8A] text-white hover:bg-blue-800 transition-colors">
          View
        </button>
      </div>
    </div>
  );
}

// Component 5: LeaderboardTable placing the large cream-colored panel and rendering player rows (without STARS).
function LeaderboardTable({ rows }: { rows: Array<{ name: string; star: string; rating: string; isTopThree: boolean; problems: number; maxRating: number }> }) {
  const tableRows = rows.slice(3);

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.08,
      },
    },
  };

  const rowVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring" as const,
        stiffness: 100,
        damping: 15,
      },
    },
  };

  return (
    <section className="w-full max-w-4xl mx-auto px-6 mb-24 relative z-10">
      
      {/* 3D-styled Plaque Banner: TODAY'S SPECIALS */}
      <div className="
        absolute -top-6 left-1/2 -translate-x-1/2 
        bg-gradient-to-b from-[#1E40AF] via-[#1E3A8A] to-[#172554] 
        text-[#F8FAFC] border-[3px] border-black rounded px-8 py-2.5 
        font-bebas text-xl tracking-widest 
        shadow-[6px_6px_0px_rgba(0,0,0,1),_inset_0_2px_0px_rgba(255,255,255,0.4),_inset_0_-2px_0px_rgba(0,0,0,0.4)]
        flex items-center justify-center gap-3.5 z-30 select-none
        border-t-[#3B82F6] border-b-[#0F172A]
      ">
        {/* Left gold rivet screw */}
        <div className="w-2.5 h-2.5 rounded-full bg-gradient-to-br from-[#FFE07D] to-[#8A6F1C] border border-black shadow-[1px_1px_0px_rgba(0,0,0,0.5)] -ml-4 mr-2" />

        <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-[#FFE07D] drop-shadow-[0_1.5px_2px_rgba(0,0,0,0.4)]">
          <path d="M12 2a4 4 0 0 0-4 4c0 .35.04.7.13 1.03A5 5 0 0 0 3 12c0 2.22 1.45 4.1 3.48 4.76A4.5 4.5 0 0 0 11 21h2a4.5 4.5 0 0 0 4.52-4.24C19.55 16.1 21 14.22 21 12a5 5 0 0 0-5.13-4.97c.09-.33.13-.68.13-1.03a4 4 0 0 0-4-4z" />
        </svg>
        <span className="drop-shadow-[0_2px_3px_rgba(0,0,0,0.6)] font-extrabold">TODAY'S SPECIALS</span>
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 text-[#FFE07D] drop-shadow-[0_1.5px_2px_rgba(0,0,0,0.4)]">
          <path d="M12 2a4 4 0 0 0-4 4c0 .35.04.7.13 1.03A5 5 0 0 0 3 12c0 2.22 1.45 4.1 3.48 4.76A4.5 4.5 0 0 0 11 21h2a4.5 4.5 0 0 0 4.52-4.24C19.55 16.1 21 14.22 21 12a5 5 0 0 0-5.13-4.97c.09-.33.13-.68.13-1.03a4 4 0 0 0-4-4z" />
        </svg>

        {/* Right gold rivet screw */}
        <div className="w-2.5 h-2.5 rounded-full bg-gradient-to-br from-[#FFE07D] to-[#8A6F1C] border border-black shadow-[1px_1px_0px_rgba(0,0,0,0.5)] -mr-4 ml-2" />
      </div>

      {/* Cream Card Panel Container (Restaurant Menu) with enhanced 3D shadow */}
      <div className="relative bg-[#F7F0DC] border-[3px] border-black p-4 sm:p-8 rounded-lg shadow-[12px_12px_0px_rgba(0,0,0,1)] pt-10 border-t-white/20 border-l-white/20">
        
        {/* Metal L-Shaped Corner Brackets */}
        {/* Top-Left */}
        <div className="absolute -top-3.5 -left-3.5 w-12 h-12 pointer-events-none z-30 select-none">
          <svg viewBox="0 0 40 40" fill="none" className="w-full h-full drop-shadow-[2px_2px_4px_rgba(0,0,0,0.6)]">
            <path d="M0 0 H40 V12 H12 V40 H0 Z" fill="#2E3A4E" stroke="#000000" strokeWidth="2.5" />
            <circle cx="6" cy="6" r="3" fill="#94A3B8" stroke="#000000" strokeWidth="1.5" />
            <circle cx="26" cy="6" r="3" fill="#94A3B8" stroke="#000000" strokeWidth="1.5" />
            <circle cx="6" cy="26" r="3" fill="#94A3B8" stroke="#000000" strokeWidth="1.5" />
          </svg>
        </div>

        {/* Top-Right */}
        <div className="absolute -top-3.5 -right-3.5 w-12 h-12 pointer-events-none z-30 select-none">
          <svg viewBox="0 0 40 40" fill="none" className="w-full h-full drop-shadow-[2px_2px_4px_rgba(0,0,0,0.6)]">
            <path d="M40 0 H0 V12 H28 V40 H40 Z" fill="#2E3A4E" stroke="#000000" strokeWidth="2.5" />
            <circle cx="34" cy="6" r="3" fill="#94A3B8" stroke="#000000" strokeWidth="1.5" />
            <circle cx="14" cy="6" r="3" fill="#94A3B8" stroke="#000000" strokeWidth="1.5" />
            <circle cx="34" cy="26" r="3" fill="#94A3B8" stroke="#000000" strokeWidth="1.5" />
          </svg>
        </div>

        {/* Bottom-Left */}
        <div className="absolute -bottom-3.5 -left-3.5 w-12 h-12 pointer-events-none z-30 select-none">
          <svg viewBox="0 0 40 40" fill="none" className="w-full h-full drop-shadow-[2px_2px_4px_rgba(0,0,0,0.6)]">
            <path d="M0 40 H40 V28 H12 V0 H0 Z" fill="#2E3A4E" stroke="#000000" strokeWidth="2.5" />
            <circle cx="6" cy="34" r="3" fill="#94A3B8" stroke="#000000" strokeWidth="1.5" />
            <circle cx="26" cy="34" r="3" fill="#94A3B8" stroke="#000000" strokeWidth="1.5" />
            <circle cx="6" cy="14" r="3" fill="#94A3B8" stroke="#000000" strokeWidth="1.5" />
          </svg>
        </div>

        {/* Bottom-Right */}
        <div className="absolute -bottom-3.5 -right-3.5 w-12 h-12 pointer-events-none z-30 select-none">
          <svg viewBox="0 0 40 40" fill="none" className="w-full h-full drop-shadow-[2px_2px_4px_rgba(0,0,0,0.6)]">
            <path d="M40 40 H0 V28 H28 V0 H40 Z" fill="#2E3A4E" stroke="#000000" strokeWidth="2.5" />
            <circle cx="34" cy="34" r="3" fill="#94A3B8" stroke="#000000" strokeWidth="1.5" />
            <circle cx="14" cy="34" r="3" fill="#94A3B8" stroke="#000000" strokeWidth="1.5" />
            <circle cx="34" cy="14" r="3" fill="#94A3B8" stroke="#000000" strokeWidth="1.5" />
          </svg>
        </div>

        {/* Table Header Row (Without STARS column) */}
        <div className="flex justify-between items-center w-full bg-white border-2 border-black rounded-lg px-6 py-2.5 mb-4 font-sans font-bold text-xs sm:text-sm text-neutral-600 shadow-sm uppercase tracking-wider select-none">
          <span className="w-[10%] text-left">RANK</span>
          <span className="w-[35%] text-left">CHEF</span>
          <span className="w-[20%] text-center">CURRENT RATING</span>
          <span className="w-[15%] text-center">PROBLEMS SOLVED</span>
          <span className="w-[10%] text-center">MAX RATING</span>
          <span className="w-[10%] text-right">PROFILE</span>
        </div>

        {/* Table Rows with Stagger Animation */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-40px" }}
          className="flex flex-col gap-1"
        >
          {tableRows.map((row, index) => (
            <motion.div key={index} variants={rowVariants}>
              <LeaderboardRow 
                rank={index + 4}
                name={row.name} 
                rating={row.rating} 
                problems={row.problems}
                maxRating={row.maxRating}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

// Main Page Component
export default function LeaderboardPage() {
  // Generate 15 wavy background paths dynamically to cover the entire page scroll height
  const backgroundPaths = Array.from({ length: 15 }, (_, i) => {
    const yBase = i * 420 + 80;
    const isEven = i % 2 === 0;
    return isEven
      ? `M -100,${yBase} Q 300,${yBase - 50} 800,${yBase + 20} T 1900,${yBase - 20}`
      : `M -100,${yBase} Q 400,${yBase + 100} 900,${yBase - 50} T 2100,${yBase + 50}`;
  });

  const rows = [
    { name: "Name", star: "5", rating: "Current Rating", isTopThree: true, problems: 954, maxRating: 2150 },
    { name: "Name", star: "4", rating: "Current Rating", isTopThree: true, problems: 885, maxRating: 1980 },
    { name: "Name", star: "3", rating: "Current Rating", isTopThree: true, problems: 742, maxRating: 1810 },
    { name: "Name", star: "4", rating: "1876", isTopThree: false, problems: 845, maxRating: 2013 },
    { name: "Name", star: "4", rating: "1823", isTopThree: false, problems: 742, maxRating: 1950 },
    { name: "Name", star: "3", rating: "1689", isTopThree: false, problems: 615, maxRating: 1760 },
    { name: "Name", star: "3", rating: "1587", isTopThree: false, problems: 590, maxRating: 1690 },
    { name: "Name", star: "3", rating: "1542", isTopThree: false, problems: 533, maxRating: 1623 },
    { name: "Name", star: "3", rating: "1480", isTopThree: false, problems: 495, maxRating: 1540 },
    { name: "Name", star: "3", rating: "1420", isTopThree: false, problems: 410, maxRating: 1480 },
  ];

  const [curtainsOpened, setCurtainsOpened] = React.useState(false);
  const [showLights, setShowLights] = React.useState(false);

  React.useEffect(() => {
    // Start curtain opening after a brief delay
    const curtainTimer = setTimeout(() => {
      setCurtainsOpened(true);
    }, 300);

    // Turn on spotlights after 1.2s
    const lightsTimer = setTimeout(() => {
      setShowLights(true);
    }, 1200);

    return () => {
      clearTimeout(curtainTimer);
      clearTimeout(lightsTimer);
    };
  }, []);

  return (
    <main className="w-full min-h-screen bg-[#5878AF] relative flex flex-col items-center pt-4 overflow-hidden select-none">
      
      {/* Left Curtain drapes open */}
      <motion.div
        initial={{ x: "0%" }}
        animate={{ x: curtainsOpened ? "-100%" : "0%" }}
        transition={{ duration: 2.2, ease: [0.25, 1, 0.5, 1] }}
        className="fixed inset-y-0 left-0 w-[50vw] z-50 pointer-events-none border-r-[6px] border-yellow-500 shadow-[10px_0_30px_rgba(0,0,0,0.6)]"
        style={{
          background: "repeating-linear-gradient(90deg, #500 0px, #700 30px, #900 60px, #700 90px, #500 120px)",
        }}
      >
        {/* Gold tassel cord */}
        <div className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-32 bg-[#D4AF37] border-2 border-black rounded shadow" />
      </motion.div>

      {/* Right Curtain drapes open */}
      <motion.div
        initial={{ x: "0%" }}
        animate={{ x: curtainsOpened ? "100%" : "0%" }}
        transition={{ duration: 2.2, ease: [0.25, 1, 0.5, 1] }}
        className="fixed inset-y-0 right-0 w-[50vw] z-50 pointer-events-none border-l-[6px] border-yellow-500 shadow-[-10px_0_30px_rgba(0,0,0,0.6)]"
        style={{
          background: "repeating-linear-gradient(90deg, #500 0px, #700 30px, #900 60px, #700 90px, #500 120px)",
        }}
      >
        {/* Gold tassel cord */}
        <div className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-32 bg-[#D4AF37] border-2 border-black rounded shadow" />
      </motion.div>

      {/* Top Left Spotlight Fixture & Beam */}
      <div className="fixed top-0 left-0 z-40 pointer-events-none">
        <svg 
          viewBox="0 0 100 100" 
          className="w-24 h-24 text-[#111111] drop-shadow-2xl m-4"
          style={{ transform: "rotate(-45deg)", transformOrigin: "50% 15%" }}
        >
          {/* Spotlight mounting yoke */}
          <path d="M15 15 H85 V22 H15 Z" fill="#222222" stroke="#000" strokeWidth="1.5" />
          <path d="M30 22 V45 C30 55 70 55 70 45 V22" fill="none" stroke="#222222" strokeWidth="4" />
          {/* Matte black cylindrical body */}
          <rect x="35" y="25" width="30" height="46" rx="4" fill="#1A1A1A" stroke="#000" strokeWidth="2" />
          {/* Rear cooling fin cap */}
          <rect x="38" y="20" width="24" height="6" rx="1.5" fill="#0D0D0D" stroke="#000" strokeWidth="1.5" />
          {/* Warm white lens */}
          <ellipse cx="50" cy="70" rx="12" ry="4" fill="#FFF7D6" />
        </svg>
        {/* Soft, semi-transparent warm white light beam with feathered edges */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: showLights ? 1 : 0 }}
          transition={{ duration: 1.8, ease: "easeOut" }}
          className="absolute top-12 left-12 w-[550px] md:w-[750px] h-[950px] md:h-[1250px] bg-gradient-to-b from-[#FFF7D6]/20 via-[#FFF7D6]/3.5 to-transparent blur-[20px] -z-10"
          style={{ transform: "rotate(45deg)", transformOrigin: "top left" }}
        >
          {/* Dust particles inside the beam path */}
          <BeamDust count={6} />
        </motion.div>
      </div>

      {/* Top Right Spotlight Fixture & Beam */}
      <div className="fixed top-0 right-0 z-40 pointer-events-none">
        <svg 
          viewBox="0 0 100 100" 
          className="w-24 h-24 text-[#111111] drop-shadow-2xl m-4"
          style={{ transform: "rotate(45deg)", transformOrigin: "50% 15%" }}
        >
          {/* Spotlight mounting yoke */}
          <path d="M15 15 H85 V22 H15 Z" fill="#222222" stroke="#000" strokeWidth="1.5" />
          <path d="M30 22 V45 C30 55 70 55 70 45 V22" fill="none" stroke="#222222" strokeWidth="4" />
          {/* Matte black cylindrical body */}
          <rect x="35" y="25" width="30" height="46" rx="4" fill="#1A1A1A" stroke="#000" strokeWidth="2" />
          {/* Rear cooling fin cap */}
          <rect x="38" y="20" width="24" height="6" rx="1.5" fill="#0D0D0D" stroke="#000" strokeWidth="1.5" />
          {/* Warm white lens */}
          <ellipse cx="50" cy="70" rx="12" ry="4" fill="#FFF7D6" />
        </svg>
        {/* Soft, semi-transparent warm white light beam with feathered edges */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: showLights ? 1 : 0 }}
          transition={{ duration: 1.8, ease: "easeOut" }}
          className="absolute top-12 right-12 w-[550px] md:w-[750px] h-[950px] md:h-[1250px] bg-gradient-to-b from-[#FFF7D6]/20 via-[#FFF7D6]/3.5 to-transparent blur-[20px] -z-10"
          style={{ transform: "rotate(-45deg)", transformOrigin: "top right" }}
        >
          {/* Dust particles inside the beam path */}
          <BeamDust count={6} />
        </motion.div>
      </div>

      {/* Dynamic Keyframe Animations */}
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes beam-dust-drift {
          0% { transform: translateY(0px) translateX(0px); opacity: 0; }
          25% { opacity: 0.6; }
          75% { opacity: 0.6; }
          100% { transform: translateY(120px) translateX(15px); opacity: 0; }
        }
        @keyframes mascot-float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-4px); }
        }
        @keyframes glow-pulse {
          0%, 100% { opacity: 0.12; transform: scale(1); }
          50% { opacity: 0.22; transform: scale(1.04); }
        }
        @keyframes steam-rise {
          0% { transform: translateY(10px) scaleX(1); opacity: 0; }
          50% { opacity: 0.3; }
          100% { transform: translateY(-40px) scaleX(1.2); opacity: 0; }
        }
        @keyframes sparkle-rotate {
          0%, 100% { transform: scale(0) rotate(0deg); opacity: 0; }
          50% { transform: scale(1) rotate(180deg); opacity: 1; }
        }
        .animate-mascot-float {
          animation: mascot-float 4s ease-in-out infinite;
        }
        .animate-glow-pulse {
          animation: glow-pulse 6s ease-in-out infinite;
        }
        .animate-steam-1 {
          animation: steam-rise 4s ease-in-out infinite;
        }
        .animate-steam-2 {
          animation: steam-rise 5s ease-in-out infinite 1.5s;
        }
        .animate-steam-3 {
          animation: steam-rise 4.5s ease-in-out infinite 0.7s;
        }
        .animate-sparkle {
          animation: sparkle-rotate 3.5s ease-in-out infinite;
        }
        .plate-hover-lift {
          transition: transform 0.3s cubic-bezier(0.2, 0.8, 0.2, 1);
        }
        .plate-hover-lift:hover {
          transform: translateY(-5px);
        }
      `}} />

      {/* Dashed curved paths in the background */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none z-0" xmlns="http://www.w3.org/2000/svg">
        {backgroundPaths.map((d, idx) => (
          <path 
            key={idx}
            d={d} 
            fill="none" 
            stroke="white" 
            strokeWidth="4" 
            strokeDasharray="12 12" 
            strokeOpacity="0.3"
          />
        ))}
      </svg>

      {/* Header bar and large title */}
      <LeaderboardHeader />

      {/* Mascot & Podium Section Container - grouped together as one connected composition */}
      <div className="relative w-full max-w-4xl mx-auto flex flex-col items-center mt-2 z-10 select-none">
        
        {/* Centered Mascot Illustration - presenting the winners, moved downward directly behind center plate */}
        <div className="relative flex flex-col items-center justify-center z-10">
          {/* Soft warm yellow radial glow behind it */}
          <div className="absolute w-[450px] h-[450px] rounded-full bg-gradient-to-b from-[#FFF2C7]/20 via-[#D4AF37]/5 to-transparent blur-3xl -z-10 animate-glow-pulse" />
          
          {/* Steam rising effect behind the mascot */}
          <SteamEffect />

          {/* Mascot Image with gentle float */}
          <div className="animate-mascot-float relative">
            <Image 
              src={mascotImg} 
              alt="CodeChef Mascot" 
              width={350} 
              height={350}
              priority
              className="h-[325px] md:h-[375px] w-auto object-contain drop-shadow-[0_12px_24px_rgba(0,0,0,0.3)]"
            />
          </div>
        </div>

        {/* Top 3 Podium Section - layered in front of mascot with positive margin to ensure separation */}
        <div className="relative w-full z-20 mt-8 md:mt-10">
          <PodiumSection topThree={rows.slice(0, 3)} />
        </div>
      </div>

      {/* Leaderboard Table Grid Panel */}
      <div className="relative w-full z-10 -mt-2">
        <LeaderboardTable rows={rows} />
      </div>

      {/* Page Footer */}
      <Footer />
    </main>
  );
}
