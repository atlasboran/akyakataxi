import { Phone } from "lucide-react";

export default function PricesPage() {
    const routes = [
        { from: "Akyaka", to: "Dalaman Havalimanı (DLM)", type: "Standart" },
        { from: "Akyaka", to: "Milas-Bodrum Havalimanı (BJV)", type: "Standart" },
        { from: "Akyaka", to: "Muğla Menteşe", type: "Standart" },
        { from: "Akyaka", to: "Marmaris", type: "Standart" },
        { from: "Akyaka", to: "Fethiye", type: "Standart" },
        { from: "Akyaka", to: "Köyceğiz", type: "Standart" },
    ];

    return (
        <div className="pt-32 pb-20">
            <div className="container mx-auto px-4">
                <div className="text-center max-w-3xl mx-auto mb-10 md:mb-16 space-y-4">
                    <h1 className="text-3xl md:text-5xl font-black italic">Hizmet Bölgelerimiz</h1>
                    <p className="text-lg md:text-xl text-gray-500 font-medium">Size özel transfer fiyatları ve rezervasyon için lütfen bizimle iletişime geçin.</p>
                </div>

                <div className="max-w-4xl mx-auto">
                    <div className="bg-white rounded-[40px] shadow-2xl overflow-hidden border border-gray-100 italic">
                        <div className="bg-brand-black p-8 text-white grid grid-cols-3 font-bold uppercase tracking-widest text-sm">
                            <span>Güzergah</span>
                            <span className="text-center">Araç Tipi</span>
                            <span className="text-right">Fiyat Al</span>
                        </div>
                        <div className="divide-y divide-gray-100">
                            {routes.map((route, index) => (
                                <div key={index} className="px-8 py-6 grid grid-cols-3 items-center hover:bg-gray-50 transition-colors">
                                    <div className="flex flex-col">
                                        <span className="text-brand-black/40 text-[10px] md:text-xs font-bold uppercase tracking-tighter -mb-1">{route.from}</span>
                                        <span className="text-lg md:text-xl font-black text-brand-black leading-tight">{route.to}</span>
                                    </div>
                                    <div className="text-center">
                                        <span className="px-3 py-1 bg-brand-yellow/10 text-brand-yellow rounded-full text-[10px] md:text-xs font-bold uppercase">{route.type}</span>
                                    </div>
                                    <div className="text-right flex justify-end">
                                        <a
                                            href="tel:+905442581414"
                                            className="bg-brand-yellow text-brand-black w-12 h-12 md:w-14 md:h-14 rounded-2xl flex items-center justify-center hover:scale-110 transition-transform shadow-lg shadow-brand-yellow/20"
                                            aria-label="Fiyat Almak İçin Ara"
                                        >
                                            <Phone size={24} className="md:w-7 md:h-7" />
                                        </a>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="p-8 bg-gray-50 text-center">
                            <p className="text-gray-500 font-medium italic">
                                * Listenin dışındaki tüm bölgeler ve geniş araç seçenekleri için bizi 7/24 arayabilirsiniz.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

