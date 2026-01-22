import { Phone, Mail, MapPin, Clock } from "lucide-react";

export default function ContactPage() {
    return (
        <div className="pt-32 pb-20">
            <div className="container mx-auto px-4">
                <div className="text-center max-w-3xl mx-auto mb-10 md:mb-16 space-y-4">
                    <h1 className="text-3xl md:text-5xl font-black italic">İletişim</h1>
                    <p className="text-lg md:text-xl text-gray-500 font-medium">Size bir telefon kadar yakınız. Sorularınız veya rezervasyonlarınız için bize ulaşın.</p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
                    {/* Contact Info */}
                    <div className="space-y-8">
                        <div className="bg-brand-yellow p-10 rounded-[40px] shadow-2xl space-y-8 h-full">
                            <h2 className="text-3xl font-black italic mb-4">Bize Ulaşın</h2>

                            <div className="flex items-start gap-6 group">
                                <div className="w-14 h-14 bg-brand-black text-brand-yellow rounded-2xl flex items-center justify-center shrink-0 shadow-lg group-hover:rotate-12 transition-transform">
                                    <Phone size={24} />
                                </div>
                                <div>
                                    <p className="text-brand-black/60 font-bold uppercase text-[10px] md:text-xs tracking-widest mb-1">Müşteri Hattı</p>
                                    <a href="tel:+905442581414" className="text-xl md:text-3xl font-black italic hover:underline">0 544 258 14 14</a>
                                </div>
                            </div>

                            <div className="flex items-start gap-6 group">
                                <div className="w-14 h-14 bg-brand-black text-brand-yellow rounded-2xl flex items-center justify-center shrink-0 shadow-lg group-hover:rotate-12 transition-transform">
                                    <Mail size={24} />
                                </div>
                                <div>
                                    <p className="text-brand-black/60 font-bold uppercase text-[10px] md:text-xs tracking-widest mb-1">E-Posta</p>
                                    <p className="text-lg md:text-2xl font-black italic">info@akyakataxi.com</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-6 group">
                                <div className="w-14 h-14 bg-brand-black text-brand-yellow rounded-2xl flex items-center justify-center shrink-0 shadow-lg group-hover:rotate-12 transition-transform">
                                    <MapPin size={24} />
                                </div>
                                <div>
                                    <p className="text-brand-black/60 font-bold uppercase text-[10px] md:text-xs tracking-widest mb-1">Adres</p>
                                    <p className="text-lg md:text-2xl font-black italic leading-tight">Akyaka, Ula, Muğla<br />Türkiye</p>
                                </div>
                            </div>

                            <div className="flex items-start gap-6 group">
                                <div className="w-14 h-14 bg-brand-black text-brand-yellow rounded-2xl flex items-center justify-center shrink-0 shadow-lg group-hover:rotate-12 transition-transform">
                                    <Clock size={24} />
                                </div>
                                <div>
                                    <p className="text-brand-black/60 font-bold uppercase text-[10px] md:text-xs tracking-widest mb-1">Çalışma Saatleri</p>
                                    <p className="text-lg md:text-2xl font-black italic">7 Gün / 24 Saat</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Form / Map View Placeholder */}
                    <div className="bg-gray-100 rounded-[40px] overflow-hidden min-h-[500px] relative shadow-2xl">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12739.04354245605!2d28.32230495!3d37.050516!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14bfde682d3855a9%3A0xe6759c5d078ec80e!2sAkyaka%2C%20Ula%2FMuğla!5e0!3m2!1str!2str!4v1700000000000!5m2!1str!2str"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen
                            loading="lazy"
                            referrerPolicy="no-referrer-when-downgrade"
                            className="absolute inset-0 grayscale contrast-125"
                        ></iframe>
                    </div>
                </div>
            </div>
        </div>
    );
}
