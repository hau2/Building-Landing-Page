import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import Footer from "@/components/footer";
import Header from "@/components/header";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

const roboto = Roboto({
  variable: "--font-roboto-thin",
  subsets: ["vietnamese"],
  weight: ["100", "300"],
});

export const metadata: Metadata = {
  title: "CÔNG TY CỔ PHẦN XÂY DỰNG BÌNH DOANH",
  description:
    "BÌNH DOANH được hình thành và phát triển với khát khao tạo dựng nên những công trình kiến trúc kỳ vĩ có độ bền đến hàng thế kỷ.",
  icons: {
    icon: "/logo.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={roboto.variable}>
        <Header />
        <div className="h-[90px]" />
        {children}
        <Footer />
      </body>
    </html>
  );
}
