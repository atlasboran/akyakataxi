import BookingForm from "@/components/sections/BookingForm";
import { MessageCircle } from "lucide-react";

export default function ReservationPage() {
    return (
        <div className="pt-32 pb-20 bg-gray-50 min-h-screen">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start max-w-6xl mx-auto">
                    <div className="space-y-8">
                        <h1 className="text-5xl font-black italic">Online Rezervasyon</h1>
                        <p className="text-xl text-gray-500 font-medium italic">
                            Formu doldurun, sizi 5 dakika içinde geri arayalım ve aracınızı hemen yönlendirelim.
                        </p>

                        <div className="space-y-4">
                            <div className="bg-brand-yellow p-8 rounded-3xl shadow-xl italic group hover:-rotate-1">
                                <p className="text-brand-black/60 font-bold uppercase text-xs tracking-widest mb-1 italic">Hızlı Çağrı</p>
                                <a href="tel:+905442581414" className="text-4xl font-black block leading-none">0 544 258 14 14</a>
                            </div>

                            <div className="bg-green-500 p-8 rounded-3xl shadow-xl text-white italic group hover:rotate-1 transition-transform">
                                <p className="text-white/60 font-bold uppercase text-xs tracking-widest mb-1 italic">WhatsApp Hattı</p>
                                <a href="https://wa.me/905442581414" className="text-4xl font-black flex items-center gap-4 italic">
                                    <MessageCircle size={32} />
                                    Mesaj Gönder
                                </a>
                            </div>
                        </div>

                        <div className="p-8 border-2 border-dashed border-gray-200 rounded-3xl italic">
                            <h3 className="font-bold text-brand-black mb-2 uppercase tracking-tighter italic">Neden Rezervasyon Yapmalıyım?</h3>
                            <ul className="space-y-2 text-gray-500 font-medium italic">
                                <li>✓ Tatil planınızı garantiye alırsınız.</li>
                                <li>✓ Havalimanında bekleme yapmazsınız.</li>
                                <li>✓ Sabit fiyat avantajından yararlanırsınız.</li>
                                <li>✓ Özel isteklerinizi (çocuk koltuğu vb.) belirtebilirsiniz.</li>
                            </ul>
                        </div>
                    </div>

                    <div className="sticky top-32">
                        <BookingForm />
                    </div>
                </div>
            </div>
        </div>
    );
}
