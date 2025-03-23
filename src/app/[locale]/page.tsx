import { VideoGallery } from "@/components/hightlight-videos";
import DuAnNoiBat from "@/components/home-page/du-an-noi-bat";
import Intro from "@/components/home-page/intro";
import ThongSo from "@/components/home-page/thong-so";

export default function Home() {
  return (
    <main>
      <Intro />
      <ThongSo />
      <DuAnNoiBat />
      <VideoGallery />
    </main>
  );
}
