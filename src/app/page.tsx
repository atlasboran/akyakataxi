import Image from "next/image";
import Link from "next/link";
import { Phone, MessageCircle, ShieldCheck, Clock, Star, Plane, Users, CheckCircle } from "lucide-react";

export default function Home() {
  const services = [
    {
      title: "Havalimanı Transfer",
      description: "Dalaman Havalimanı (DLM) transferlerinde konforlu araçlar.",
      icon: <Plane size={32} />,
      link: "/hizmetler/dalaman-transfer",
      color: "bg-brand-yellow",
    },
    {
      title: "Şehirlerarası Taksi",
      description: "Muğla, Marmaris, Fethiye veya Bodrum'a sabit fiyat garantisi.",
      icon: <MapPin size={32} />,
      link: "/hizmetler/sehirlerarasi",
      color: "bg-brand-yellow",
    },
    {
      title: "VIP Transfer",
      description: "Özel günleriniz için Mercedes Vito VIP araçlarımızla hizmetinizdeyiz.",
      icon: <Users size={32} />,
      link: "/hizmetler/vip-transfer",
      color: "bg-brand-yellow",
    },
  ];

  return (
    <div className="pt-20">
      {/* Schema.org JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "TaxiService",
            "name": "Akyaka Taxi",
            "description": "Akyaka'nın en güvenilir ve hızlı taksi hizmeti. 7/24 Dalaman transfer ve VIP taşımacılık.",
            "url": "https://akyakataxi.com",
            "telephone": "+905442581414",
            "areaServed": {
              "@type": "City",
              "name": "Akyaka"
            },
            "provider": {
              "@type": "LocalBusiness",
              "name": "Akyaka Taxi",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Akyaka",
                "addressLocality": "Ula",
                "addressRegion": "Muğla",
                "addressCountry": "TR"
              }
            }
          }),
        }}
      />

      {/* Hero Section - Simplified & Trust Focused */}
      <section className="relative min-h-[85vh] flex items-center bg-white overflow-hidden">
        <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
          <div className="space-y-8 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-brand-yellow/20 rounded-full text-brand-black text-sm font-bold uppercase tracking-wider">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
              Akyaka&apos;da Şu An Aktif &amp; Uygun
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-black text-brand-black leading-tight italic">
              Akyaka&apos;da <span className="bg-brand-yellow px-2 font-black not-italic">Güvenli</span> Taksi Hizmeti
            </h1>
            <p className="text-xl text-gray-600 font-medium leading-relaxed">
              Dalaman Havalimanı transferi, şehir içi ulaşım ve VIP yolculuklarınız için 7/24 hizmetinizdeyiz.
              <span className="block mt-2 font-bold text-brand-black italic underline decoration-brand-yellow decoration-4 underline-offset-4 uppercase tracking-tighter">Sabit Fiyat • Hızlı Varış • Güvenli Sürüş</span>
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a href="tel:+905442581414" className="bg-brand-yellow text-brand-black px-6 py-4 sm:px-10 sm:py-6 rounded-2xl font-black text-xl sm:text-2xl md:text-3xl flex items-center justify-center gap-3 hover:scale-105 transition-transform shadow-2xl shadow-brand-yellow/30">
                <Phone className="w-6 h-6 sm:w-8 sm:h-8" />
                0544 258 14 14
              </a>
              <a href="https://wa.me/905321388062" className="bg-green-500 text-white px-6 py-4 sm:px-10 sm:py-6 rounded-2xl font-black text-lg sm:text-xl md:text-2xl flex items-center justify-center gap-3 hover:scale-105 transition-transform shadow-xl">
                <MessageCircle className="w-6 h-6 sm:w-8 sm:h-8" />
                WhatsApp
              </a>
            </div>

            <div className="flex items-center gap-6 pt-4">
              <div className="flex items-center gap-2 text-brand-black font-bold">
                <CheckCircle size={20} className="text-green-500" /> Kredi Kartı Geçerli
              </div>
              <div className="flex items-center gap-2 text-brand-black font-bold">
                <CheckCircle size={20} className="text-green-500" /> 7/24 Karşılama
              </div>
            </div>
          </div>

          <div className="relative group">
            <div className="absolute -inset-4 bg-brand-yellow/10 rounded-[60px] blur-3xl group-hover:bg-brand-yellow/20 transition-all" />
            <div className="relative rounded-[50px] overflow-hidden border-8 border-white shadow-2xl">
              <Image
                src="/images/hero-taxi.png"
                alt="Akyaka Taksi"
                width={800}
                height={600}
                className="object-cover hover:scale-110 transition-transform duration-700"
              />
            </div>
            {/* Trust Badge */}
            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-3xl shadow-2xl border border-gray-100 hidden md:block animate-float">
              <div className="flex items-center gap-4">
                <div className="bg-brand-yellow p-3 rounded-2xl">
                  <ShieldCheck size={32} className="text-brand-black" />
                </div>
                <div>
                  <p className="font-black text-brand-black text-xl italic leading-none">Lisanslı &amp; Sigortalı</p>
                  <p className="text-gray-500 font-bold text-xs uppercase tracking-widest mt-1 italic">Resmi Taksi Plakası</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof Bar */}
      <section className="bg-brand-black py-10">
        <div className="container mx-auto px-4 flex flex-wrap justify-around items-center gap-6">
          <div className="flex items-center gap-2">
            <Star size={20} fill="#FDB813" stroke="#FDB813" />
            <span className="text-white font-black text-lg sm:text-2xl italic tracking-tighter">4.9 / 5 Google Puanı</span>
          </div>
          <div className="flex items-center gap-2">
            <Clock size={20} className="text-brand-yellow" />
            <span className="text-white font-black text-lg sm:text-2xl italic tracking-tighter">9 Dakika Varış Süresi</span>
          </div>
          <div className="flex items-center gap-2">
            <Users size={20} className="text-brand-yellow" />
            <span className="text-white font-black text-lg sm:text-2xl italic tracking-tighter">15+ Modern Araç</span>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="group bg-white p-10 rounded-[40px] shadow-xl hover:shadow-2xl transition-all border border-gray-100 hover:-translate-y-2">
                <div className={`w-16 h-16 rounded-2xl bg-brand-yellow text-brand-black flex items-center justify-center mb-8 shadow-lg font-bold`}>
                  {service.icon}
                </div>
                <h3 className="text-2xl font-black text-brand-black mb-4 group-hover:text-brand-yellow transition-colors italic">{service.title}</h3>
                <p className="text-gray-500 font-medium leading-relaxed mb-8 italic">
                  {service.description}
                </p>
                <div className="flex flex-col gap-3">
                  <a href="tel:+905442581414" className="bg-brand-black text-brand-yellow py-3 rounded-xl font-black text-center text-sm shadow-lg hover:bg-brand-yellow hover:text-brand-black transition-colors uppercase italic tracking-widest">Hemen Ara</a>
                  <Link href={service.link} className="text-center font-bold text-gray-400 text-xs uppercase tracking-widest hover:text-brand-black transition-colors">Detaylar →</Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Big Yellow CTA */}
      <section className="py-20 relative overflow-hidden bg-brand-yellow mx-4 my-10 rounded-[60px]">
        <div className="container mx-auto px-8 relative z-10 text-center flex flex-col items-center gap-8">
          <h2 className="text-2xl sm:text-4xl md:text-6xl font-black text-brand-black italic uppercase tracking-tighter">Uçağınız Inince Kapıda Bekliyoruz</h2>
          <p className="text-lg sm:text-2xl text-brand-black/70 font-bold max-w-2xl">Gecikme, valiz bekleme dert değil. Sizi isminizle karşılıyor ve Akyaka&apos;ya güvenle ulaştırıyoruz.</p>
          <a href="tel:+905442581414" className="bg-brand-black text-brand-yellow px-8 py-5 sm:px-16 sm:py-8 rounded-3xl font-black text-xl sm:text-3xl md:text-4xl shadow-2xl flex items-center justify-center gap-4 sm:gap-6 hover:scale-105 transition-transform active:scale-95 italic">
            <Phone className="w-8 h-8 sm:w-12 sm:h-12" />
            0 544 258 14 14
          </a>
          <div className="flex gap-8 text-brand-black font-black uppercase text-sm tracking-[0.2em] opacity-40 italic">
            <span>Dalaman Havalimanı</span>
            <span>•</span>
            <span>Akyaka Gökova</span>
            <span>•</span>
            <span>Muğla Taksi</span>
          </div>
        </div>
      </section>

      {/* Google Maps Section */}
      <section className="h-[400px] w-full relative -mb-10 rounded-t-[50px] overflow-hidden">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12739.04354245605!2d28.32230495!3d37.050516!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14bfde682d3855a9%3A0xe6759c5d078ec80e!2sAkyaka%2C%20Ula%2FMuğla!5e0!3m2!1str!2str!4v1700000000000!5m2!1str!2str"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </section>
    </div>
  );
}

// Separate component for MapPin since it was used but not defined locally or imported correctly in the simplified version
const MapPin = ({ size }: { size: number }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
);
