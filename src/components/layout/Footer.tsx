import Link from "next/link";
import { Phone, Mail, MapPin, Instagram, Facebook, Clock } from "lucide-react";

const Footer = () => {
    return (
        <footer className="bg-brand-black text-white pt-20 pb-10">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
                    {/* Brand & Mission */}
                    <div className="space-y-6">
                        <Link href="/" className="flex items-center gap-2 group">
                            <div className="bg-brand-yellow p-2 rounded-lg">
                                <span className="text-xl font-black text-brand-black italic tracking-tighter">TAXI</span>
                            </div>
                            <span className="text-xl font-extrabold text-white tracking-tight">
                                AKYAKA<span className="text-brand-yellow font-black">.</span>COM
                            </span>
                        </Link>
                        <p className="text-gray-400 leading-relaxed">
                            Akyaka&apos;nın en güvenilir ve hızlı taksi hizmeti. 7/24 kesintisiz ulaşım çözümleri, havalimanı transferleri ve şehirlerarası yolculuklarınızda yanınızdayız.
                        </p>
                        <div className="flex gap-4">
                            <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-brand-yellow hover:text-brand-black transition-all">
                                <Instagram size={20} />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-brand-yellow hover:text-brand-black transition-all">
                                <Facebook size={20} />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-lg font-bold mb-6 text-brand-yellow uppercase tracking-widest">Hizmetlerimiz</h3>
                        <ul className="space-y-4">
                            <li><Link href="/hizmetler/akyaka-taksi" className="text-gray-400 hover:text-white transition-colors">Akyaka İçi Taksi</Link></li>
                            <li><Link href="/hizmetler/dalaman-transfer" className="text-gray-400 hover:text-white transition-colors">Dalaman Havalimanı Transfer</Link></li>
                            <li><Link href="/hizmetler/sehirlerarasi" className="text-gray-400 hover:text-white transition-colors">Şehirlerarası Transfer</Link></li>
                            <li><Link href="/hizmetler/vip-transfer" className="text-gray-400 hover:text-white transition-colors">VİP Transfer</Link></li>
                        </ul>
                    </div>

                    {/* Contact Details */}
                    <div>
                        <h3 className="text-lg font-bold mb-6 text-brand-yellow uppercase tracking-widest">İletişim</h3>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3">
                                <Phone className="text-brand-yellow shrink-0" size={20} />
                                <div>
                                    <a href="tel:+905442581414" className="block text-white font-bold italic">0 544 258 14 14</a>
                                    <span className="text-xs text-gray-500 italic text-balance">7/24 Kesintisiz Hat</span>
                                </div>
                            </li>
                            <li className="flex items-start gap-3 text-gray-400">
                                <Mail className="text-brand-yellow shrink-0" size={20} />
                                <span>info@akyakataxi.com</span>
                            </li>
                            <li className="flex items-start gap-3 text-gray-400">
                                <MapPin className="text-brand-yellow shrink-0" size={20} />
                                <span>Akyaka, Ula, Muğla, Türkiye</span>
                            </li>
                        </ul>
                    </div>

                    {/* Business Info */}
                    <div>
                        <h3 className="text-lg font-bold mb-6 text-brand-yellow uppercase tracking-widest">Çalışma Saatleri</h3>
                        <ul className="space-y-4">
                            <li className="flex items-center gap-3 text-gray-400">
                                <Clock className="text-brand-yellow" size={20} />
                                <span>7 Gün / 24 Saat</span>
                            </li>
                            <li className="bg-white/5 p-4 rounded-xl border border-white/10">
                                <p className="text-sm font-medium text-white mb-2 italic">Hemen Rezervasyon Yapın</p>
                                <Link href="/rezervasyon" className="text-brand-yellow font-bold hover:underline">
                                    Online Form →
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="pt-10 border-t border-white/10 text-center md:text-left flex flex-col md:flex-row justify-between items-center gap-6">
                    <p className="text-gray-500 text-sm">
                        © {new Date().getFullYear()} Akyaka Taxi. Tüm Hakları Saklıdır.
                    </p>
                    <div className="flex gap-6 text-xs text-gray-500">
                        <Link href="/gizlilik-politikasi" className="hover:text-white">Gizlilik Politikası</Link>
                        <Link href="/mesafeli-satis" className="hover:text-white">Sözleşmeler</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
