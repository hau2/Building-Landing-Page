import { VideoGallery } from "@/components/hightlight-videos";
import DuAnNoiBat from "@/components/home-page/du-an-noi-bat";
import Intro from "@/components/home-page/intro";
import ThongSo from "@/components/home-page/thong-so";
import ChairmanMessage from "./about/foreword/page";
import ClientPartnerSlider from "@/components/partners";
import HeroPage from "./about/intro/page";

export default function Home() {
    return (
        <main className="bg-gray-50">
            <Intro />
            <ThongSo />
            <ChairmanMessage />
            <HeroPage />
            <DuAnNoiBat />
            <VideoGallery />
            <ClientPartnerSlider />
        </main>
    );
}
