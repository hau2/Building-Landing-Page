import DuAnNoiBat from "@/components/home-page/du-an-noi-bat";
import Intro from "@/components/home-page/intro";
import Section2 from "@/components/home-page/section2";
import Section3 from "@/components/home-page/section3";
import Section4 from "@/components/home-page/section4";
import Section5 from "@/components/home-page/section5";

export default function Home() {
  return (
    <main>
      <Intro />
      <Section2/>
      <Section3 />
      <Section4 />
      <Section5 />
      <DuAnNoiBat />
    </main>
  );
}
