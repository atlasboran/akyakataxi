import Link from "next/link";
import { Phone, CheckCircle2, ArrowLeft } from "lucide-react";
import BookingForm from "@/components/sections/BookingForm";

interface ServiceInfo {
    title: string;
    description: string;
    content: string;
}

const serviceData: Record<string, ServiceInfo> = {
    "akyaka-taksi": {
        title: "Akyaka İçi Taksi Hizmeti",
        description: "Akyaka içi ve çevresindeki köylere (Gökova, Ataköy, Akçapınar) 7/24 hızlı erişim.",
        content: "Akyaka'nın dar sokaklarından Azmak Nehri kıyısına, plajlardan orman kamplarına kadar her noktaya hakimiz. Telefon ettikten sadece 5-10 dakika sonra yanınızdayız.",
    },
    "dalaman-transfer": {
        title: "Dalaman Havalimanı Akyaka Transfer",
        description: "Dalaman Havalimanı (DLM) ile Akyaka arasında sorunsuz ve konforlu ulaşım.",
        content: "Uçağınız ne zaman inerse insin, sizi kapıda karşılıyoruz. Bagaj yardımından klimalı araç konforuna kadar her şey sizin için hazır. Sabit fiyat garantisiyle güvenle seyahat edin.",
    },
    "sehirlerarasi": {
        title: "Şehirlerarası Transfer & Taksi",
        description: "Muğla'dan tüm şehirlere uzun yol deneyimi olan şoförlerle güvenli yolculuk.",
        content: "Bodrum, Marmaris, Fethiye veya daha uzağı; İzmir, İstanbul, Antalya. Uzun mesafeli yolculuklarınızda mola düzenlemeleri ve konforlu araçlarımızla yorulmadan varış noktanıza ulaşın.",
    },
    "vip-transfer": {
        title: "VIP & Lüks Taşımacılık",
        description: "Mercedes Vito ve benzeri VIP araçlar ile grup transferleri ve özel hizmet.",
        content: "Özel misafirleriniz, iş toplantılarınız veya geniş aileniz için tam donanımlı VIP araçlarımız hizmetinizde. TV, internet ve ikram seçeneklerimizle yolculuğu keyfe dönüştürün.",
    }
};

export function generateStaticParams() {
    return [
        { slug: 'akyaka-taksi' },
        { slug: 'dalaman-transfer' },
        { slug: 'sehirlerarasi' },
        { slug: 'vip-transfer' },
    ];
}

export default function ServiceDetailPage({ params }: { params: { slug: string } }) {
    const service = serviceData[params.slug];

    if (!service) return <div>Hizmet bulunamadı.</div>;

    return (
        <div className="pt-32 pb-20">
            <div className="container mx-auto px-4">
                <Link href="/hizmetler" className="inline-flex items-center gap-2 text-gray-500 font-bold hover:text-brand-black mb-8 transition-colors">
                    <ArrowLeft size={20} /> Tüm Hizmetlere Dön
                </Link>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 items-start">
                    <div className="lg:col-span-2 space-y-6 md:space-y-8">
                        <h1 className="text-3xl md:text-6xl font-black italic">{service.title}</h1>
                        <p className="text-xl md:text-2xl text-brand-yellow font-bold italic tracking-tight">{service.description}</p>
                        <div className="prose prose-lg md:prose-xl text-gray-600 leading-relaxed italic">
                            <p>{service.content}</p>
                            <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6 not-prose">
                                {["7/24 Hizmet", "Sabit Fiyat", "Yeni Model Araçlar", "Kredi Kartı Ödeme", "Karşılama Hizmeti", "Bagaj Yardımı"].map((item, i) => (
                                    <div key={i} className="flex items-center gap-3 bg-white p-4 rounded-2xl shadow-md border border-gray-50 font-bold italic">
                                        <CheckCircle2 className="text-green-500" /> {item}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    <aside className="space-y-8">
                        <div className="bg-brand-black p-8 rounded-[40px] text-white space-y-6 shadow-2xl">
                            <h3 className="text-2xl font-black italic">Hemen Rezervasyon</h3>
                            <p className="text-gray-400 font-medium italic">Bu hizmet için şimdi arayın, yerinizi ayırtın.</p>
                            <a href="tel:+905442581414" className="btn-primary w-full py-5 text-xl italic">
                                <Phone size={24} /> 0 544 258 14 14
                            </a>
                        </div>
                        <BookingForm />
                    </aside>
                </div>
            </div>
        </div>
    );
}
