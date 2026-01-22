import Image from "next/image";
import { Phone, MessageCircle, ShieldCheck, Clock, CheckCircle2, Star, Plane } from "lucide-react";

export const metadata = {
    title: "Dalaman Akyaka Transfer | 0544 258 14 14",
    description: "Dalaman Havalimanı - Akyaka transfer hizmeti. Sabit fiyat, 7/24 hizmet, modern araçlar. Hemen arayın veya WhatsApp'tan yazın.",
};

export default function TransferLandingPage() {
    return (
        <div className="pt-20 bg-white">
            {/* Simple Hero for Ads */}
            <section className="py-12 md:py-24 relative overflow-hidden">
                <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div className="space-y-8 animate-fade-in relative z-10">
                        <div className="inline-flex items-center gap-2 px-3 py-1 bg-brand-yellow text-brand-black rounded-lg font-black text-sm uppercase italic tracking-tighter">
                            <Plane size={16} /> Dalaman Havalimanı Karşılama
                        </div>
                        <h1 className="text-4xl sm:text-5xl md:text-7xl font-black leading-none italic uppercase tracking-tighter text-brand-black">
                            Dalaman <span className="text-brand-yellow">Akyaka</span> Transfer
                        </h1>
                        <p className="text-lg sm:text-xl md:text-2xl text-gray-500 font-bold italic leading-relaxed">
                            Resepsiyonla uğraşmayın, direkt şoförle konuşun. Sabit fiyat garantisiyle sizi Havalimanı çıkışında karşılıyoruz.
                        </p>

                        <div className="flex flex-col gap-6 pt-4">
                            <a href="tel:+905442581414" className="bg-brand-yellow text-brand-black px-8 py-6 sm:px-12 sm:py-8 rounded-[30px] font-black text-2xl sm:text-3xl md:text-4xl shadow-2xl shadow-brand-yellow/50 flex flex-col items-center justify-center gap-2 hover:scale-105 transition-transform group">
                                <div className="flex items-center gap-4">
                                    <Phone className="w-8 h-8 sm:w-12 sm:h-12 animate-pulse" />
                                    0 544 258 14 14
                                </div>
                                <span className="text-[10px] sm:text-xs uppercase tracking-[0.3em] opacity-40 group-hover:opacity-100 transition-opacity">Hemen Ara - 7/24 Aktif</span>
                            </a>

                            <a href="https://wa.me/905442581414" className="bg-green-500 text-white px-8 py-5 sm:px-10 sm:py-6 rounded-[30px] font-black text-lg sm:text-xl md:text-2xl flex items-center justify-center gap-4 hover:bg-green-600 transition-all shadow-xl">
                                <MessageCircle className="w-6 h-6 sm:w-8 sm:h-8" />
                                WhatsApp&apos;tan Fiyat Al
                            </a>
                        </div>

                        <div className="grid grid-cols-2 gap-6 pt-8 border-t border-gray-100 italic">
                            <div className="flex items-center gap-3 text-brand-black font-black uppercase text-xs tracking-widest">
                                <CheckCircle2 size={24} className="text-brand-yellow" /> Sabit Fiyat
                            </div>
                            <div className="flex items-center gap-3 text-brand-black font-black uppercase text-xs tracking-widest">
                                <CheckCircle2 size={24} className="text-brand-yellow" /> VIP Karşılama
                            </div>
                            <div className="flex items-center gap-3 text-brand-black font-black uppercase text-xs tracking-widest">
                                <CheckCircle2 size={24} className="text-brand-yellow" /> Kredi Kartı
                            </div>
                            <div className="flex items-center gap-3 text-brand-black font-black uppercase text-xs tracking-widest">
                                <CheckCircle2 size={24} className="text-brand-yellow" /> 7/24 Destek
                            </div>
                        </div>
                    </div>

                    <div className="relative">
                        <div className="absolute -inset-10 bg-brand-yellow/20 rounded-full blur-[120px]" />
                        <div className="relative rounded-[60px] overflow-hidden border-[12px] border-white shadow-2xl">
                            <Image
                                src="/images/hero-taxi.png"
                                alt="Akyaka Taxi Karşılama"
                                width={800}
                                height={800}
                                className="object-cover"
                            />
                        </div>
                        {/* Price Badge */}
                        <div className="absolute top-10 -right-10 bg-brand-black text-brand-yellow p-8 rounded-full shadow-2xl border-4 border-brand-yellow -rotate-12 animate-float">
                            <p className="text-xs font-bold uppercase tracking-widest leading-none mb-1">Başlayan Fiyatlarla</p>
                            <p className="text-5xl font-black italic tracking-tighter">₺1200</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Social Proof */}
            <section className="py-20 bg-gray-50 border-y border-gray-100">
                <div className="container mx-auto px-4 max-w-5xl">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
                        <div>
                            <Star size={48} className="text-brand-yellow mx-auto mb-4" />
                            <h3 className="text-xl font-black italic uppercase tracking-tighter mb-2">5 Yıldızlı Hizmet</h3>
                            <p className="text-gray-500 font-bold italic text-sm">Google haritalarda 500+ olumlu yorum.</p>
                        </div>
                        <div>
                            <Clock size={48} className="text-brand-yellow mx-auto mb-4" />
                            <h3 className="text-xl font-black italic uppercase tracking-tighter mb-2">Tam Vaktinde</h3>
                            <p className="text-gray-500 font-bold italic text-sm">Rötar olsa bile biz sizi bekliyoruz.</p>
                        </div>
                        <div>
                            <ShieldCheck size={48} className="text-brand-yellow mx-auto mb-4" />
                            <h3 className="text-xl font-black italic uppercase tracking-tighter mb-2">Güvenli Araçlar</h3>
                            <p className="text-gray-500 font-bold italic text-sm">D2 belgeli ve sigortalı VIP araçlar.</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Fleet */}
            <section className="py-24">
                <div className="container mx-auto px-4 text-center space-y-12">
                    <h2 className="text-3xl md:text-5xl font-black italic uppercase tracking-tighter">Geniş Araç Filomuz</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-6xl mx-auto">
                        <div className="group space-y-6">
                            <div className="rounded-[50px] overflow-hidden shadow-2xl relative h-[300px] md:h-[400px]">
                                <Image
                                    src="https://images.unsplash.com/photo-1549194388-f61be84a6e9e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                                    alt="Vito VIP"
                                    fill
                                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                                />
                            </div>
                            <h3 className="text-2xl md:text-3xl font-black italic">VIP Vito (9+1)</h3>
                        </div>
                        <div className="group space-y-6">
                            <div className="rounded-[50px] overflow-hidden shadow-2xl relative h-[300px] md:h-[400px]">
                                <Image
                                    src="https://images.unsplash.com/photo-1511702771955-42b52e1cd168?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                                    alt="Sedan Taxi"
                                    fill
                                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                                />
                            </div>
                            <h3 className="text-2xl md:text-3xl font-black italic">Konfor Sedan</h3>
                        </div>
                    </div>
                </div>
            </section>

            {/* Floating CTA for Mobile ONLY on this landing page */}
            <div className="md:hidden fixed bottom-6 left-6 right-6 z-[100]">
                <a href="tel:+905442581414" className="bg-brand-yellow text-brand-black w-full py-5 rounded-3xl font-black text-xl flex items-center justify-center gap-4 shadow-2xl border-4 border-white animate-bounce italic">
                    <Phone size={24} /> HEMEN ARA
                </a>
            </div>
        </div>
    );
}
