import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Analytics from "@/components/layout/Analytics";
import { MessageCircle, Phone } from "lucide-react";

export const metadata: Metadata = {
  title: "Akyaka Taksi | 7/24 Güvenli Ulaşım & Havalimanı Transfer",
  description: "Akyaka'nın en güvenilir taksi hizmeti. Dalaman Havalimanı transfer, VIP taşımacılık ve şehirlerarası transfer hizmetleri. 7/24 hızlı ve güvenilir ulaşım.",
  keywords: "akyaka taksi, akyaka taxi, dalaman akyaka transfer, muğla taksi, akyaka vip transfer, akyaka havalimanı transfer",
  openGraph: {
    title: "Akyaka Taksi | Güvenli ve Hızlı Ulaşım",
    description: "Akyaka ve çevresinde 7/24 taksi ve VIP transfer hizmetleri.",
    url: "https://akyakataxi.com",
    siteName: "Akyaka Taxi",
    locale: "tr_TR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <body className="antialiased">
        <Analytics />
        <Navbar />
        <main>{children}</main>
        <Footer />

        {/* Floating WhatsApp Button */}
        <a
          href="https://wa.me/905442581414"
          className="fixed bottom-28 md:bottom-6 right-6 z-[100] bg-green-500 text-white p-4 rounded-full shadow-2xl animate-float hover:bg-green-600 transition-all active:scale-90"
          aria-label="WhatsApp ile İletişime Geç"
        >
          <MessageCircle size={32} />
        </a>

        {/* Mobile Fixed Call Button (Only on Mobile) */}
        <div className="md:hidden fixed bottom-1 left-4 right-4 z-[90] pb-safe">
          <a
            href="tel:+905442581414"
            className="bg-brand-yellow text-brand-black w-full py-4 rounded-2xl font-black text-xl shadow-2xl flex items-center justify-center gap-3 border-4 border-white italic"
          >
            <Phone size={24} />
            0 544 258 14 14
          </a>
        </div>
      </body>
    </html>
  );
}
