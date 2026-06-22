import Navbar from "@/components/Navbar/navbar";
import Footer from "@/components/Footer/Footer";

import JoinUsMarquee from "@/sections/home/JoinUsMarquee";
import Hero from "@/sections/home/Hero";
import Alumni from "@/sections/home/Alumni";
import Video from "@/sections/home/Video";
import Companies from "@/sections/home/Companies";

export default function HomePage() {
  return (
    <>
    <Navbar />
    <Video />
      

      <JoinUsMarquee />
    

      {/* <Hero /> */}

      <Alumni />
<JoinUsMarquee />
      

      <Companies />

      <Footer />
    </>
  );
}