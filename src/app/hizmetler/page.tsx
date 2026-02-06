import Link from "next/link";
import { Plane, MapPin, Users, Car, ChevronRight } from "lucide-react";

export default function ServicesPage() {
    const allServices = [
        {
            title: "Akyaka İçi Taksi",
            short: "Akyaka içi ve çevresindeki tüm plaj, restoran ve kamp alanlarına hızlı ulaşım.",
            icon: <Car size={40} />,
            slug: "akyaka-taksi",
        },
        {
            title: "Dalaman Havalimanı Transfer",
            short: "DLM Havalimanı'ndan Akyaka'ya konforlu ve zamanında taksi transfer hizmeti.",
            icon: <Plane size={40} />,
            slug: "dalaman-transfer",
        },
        {
            title: "Şehirlerarası Yolculuk",
            short: "Tüm Türkiye geneline, özellikle Muğla, Antalya ve İzmir yollarında güvenli sürüş.",
            icon: <MapPin size={40} />,
            slug: "sehirlerarasi",
        },
        {
            title: "Taksi Transfer",
            short: "Geniş aileler ve arkadaş grupları için konforlu araç seçeneklerimiz.",
            icon: <Users size={40} />,
            slug: "taksi-transfer",
        },
    ];

    return (
        <div className="pt-32 pb-20">
            <div className="container mx-auto px-4">
                <div className="text-center max-w-3xl mx-auto mb-10 md:mb-16 space-y-4">
                    <h1 className="text-3xl md:text-5xl font-black italic uppercase tracking-tighter">Hizmetlerimiz</h1>
                    <p className="text-lg md:text-xl text-gray-500 font-medium italic">Akyaka&apos;nın en kapsamlı ulaşım ağıyla tanışın. Her ihtiyaca uygun bir aracımız mutlaka var.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
                    {allServices.map((service, index) => (
                        <Link
                            key={index}
                            href={`/hizmetler/${service.slug}`}
                            className="group bg-white rounded-[40px] p-10 shadow-xl border border-gray-100 flex flex-col md:flex-row gap-8 items-start hover:shadow-2xl transition-all hover:bg-brand-yellow/5"
                        >
                            <div className="w-20 h-20 bg-brand-black text-brand-yellow rounded-3xl flex items-center justify-center shrink-0 group-hover:bg-brand-yellow group-hover:text-brand-black transition-colors shadow-lg">
                                {service.icon}
                            </div>
                            <div className="space-y-4">
                                <h2 className="text-3xl font-black italic">{service.title}</h2>
                                <p className="text-gray-500 font-medium italic leading-relaxed">{service.short}</p>
                                <div className="flex items-center gap-2 font-bold text-brand-black group-hover:gap-4 transition-all italic tracking-widest uppercase text-sm">
                                    Detayları İncele <ChevronRight size={18} />
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
}
