import DuAnNoiBat from "@/components/home-page/du-an-noi-bat";
import Intro from "@/components/home-page/intro";
import ThongSo from "@/components/home-page/thong-so";
import TinTuc from "@/components/home-page/tintuc";

export default function Home() {
  return (
    <main>
      <Intro />
      <ThongSo />
      <DuAnNoiBat />
      <TinTuc />
    </main>
  );
}
