import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "../globals.css";
import Footer from "@/components/footer";
import Header from "@/components/header";

import {NextIntlClientProvider} from 'next-intl';
import {getMessages} from 'next-intl/server';
import {notFound} from 'next/navigation';
import {routing} from '@/i18n/routing';
import { Playfair_Display } from "next/font/google";
import { Great_Vibes } from "next/font/google";

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["600", "700"],
  variable: "--font-playfair",
});

const greatVibes = Great_Vibes({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-greatvibes",
});

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

export default async  function RootLayout({
  children,
  params
}: {
  children: React.ReactNode;
  params: Promise<{locale: string}>;
  }) {
    const {locale} = await params;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    if (!routing.locales.includes(locale as any)) {
      notFound();
    }
  
    // Providing all messages to the client
    // side is the easiest way to get started
    const messages = await getMessages();
 
  return (
    <html lang="locale">
      <body className={`${roboto.variable} ${playfair.variable} ${greatVibes.variable} font-sans`}>
         <NextIntlClientProvider messages={messages}>
          <Header />
          <div className="h-[90px]" />
          {children}
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
