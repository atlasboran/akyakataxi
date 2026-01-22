export default function AboutPage() {
    return (
        <div className="pt-32 pb-20">
            <div className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto space-y-12">
                    <div className="text-center space-y-4">
                        <h1 className="text-3xl md:text-5xl font-black italic">Hakkımızda</h1>
                        <p className="text-lg md:text-xl text-gray-500 font-medium italic uppercase tracking-widest text-brand-yellow">Akyaka&apos;nın Köklü Ulaşım Markası</p>
                    </div>

                    <div className="prose prose-xl max-w-none text-gray-600 leading-relaxed space-y-6">
                        <p>
                            Akyaka Taxi olarak, Muğla&apos;nın eşsiz güzellikteki Akyaka beldesinde uzun yıllardır profesyonel ulaşım çözümleri sunuyoruz. Misyonumuz, yolcu güvenliğini ve konforunu her şeyin üzerinde tutarak, modern araç filomuz ve deneyimli şoför kadromuzla 7 gün 24 saat kesintisiz hizmet vermektir.
                        </p>
                        <p>
                            Gökova Körfezi&apos;nin kalbinde yer alan Akyaka&apos;nın dar sokaklarından, Dalaman Havalimanı&apos;nın yoğun trafiğine kadar her noktada bölge hakimiyetimizle size en hızlı ve güvenli rotaları sunuyoruz.
                        </p>
                        <h2 className="text-3xl font-bold text-brand-black italic">Neden Biz?</h2>
                        <ul className="grid grid-cols-1 md:grid-cols-2 gap-6 list-none p-0">
                            <li className="bg-gray-50 p-6 rounded-2xl border-l-4 border-brand-yellow font-bold">✓ 7/24 Kesintisiz Hizmet</li>
                            <li className="bg-gray-50 p-6 rounded-2xl border-l-4 border-brand-yellow font-bold">✓ Modern ve Hijyenik Araçlar</li>
                            <li className="bg-gray-50 p-6 rounded-2xl border-l-4 border-brand-yellow font-bold">✓ Deneyimli Yerel Şoförler</li>
                            <li className="bg-gray-50 p-6 rounded-2xl border-l-4 border-brand-yellow font-bold">✓ Sabit ve Şeffaf Fiyat Politikası</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}
