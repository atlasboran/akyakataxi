"use client";

import { Calendar, Clock, MapPin, User, Phone, ChevronRight } from "lucide-react";

const BookingForm = () => {
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const data = {
            name: formData.get("name"),
            phone: formData.get("phone"),
            from: formData.get("from"),
            to: formData.get("to"),
            date: formData.get("date"),
            time: formData.get("time"),
        };

        const message = `🚕 *YENİ REZERVASYON TALEBİ* 🚕%0A%0A` +
            `👤 *Ad Soyad:* ${data.name}%0A` +
            `📞 *Telefon:* ${data.phone}%0A` +
            `📍 *Nereden:* ${data.from}%0A` +
            `🏁 *Nereye:* ${data.to}%0A` +
            `📅 *Tarih:* ${data.date}%0A` +
            `⏰ *Saat:* ${data.time}%0A%0A` +
            `✨ _Bu mesaj web sitemiz üzerindeki rezervasyon formundan gönderilmiştir._`;

        // Send to WhatsApp (New specified number for bookings)
        const whatsappUrl = `https://wa.me/905321388062?text=${message}`;

        // Open WhatsApp in a new tab
        window.open(whatsappUrl, "_blank");
    };

    return (
        <div className="bg-white rounded-3xl shadow-2xl p-5 md:p-8 border border-gray-100">
            <div className="flex items-center gap-4 mb-6 md:mb-8">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-brand-yellow rounded-2xl flex items-center justify-center text-brand-black shrink-0">
                    <Calendar size={20} />
                </div>
                <div>
                    <h3 className="text-lg md:text-xl font-extrabold text-brand-black">Online Rezervasyon</h3>
                    <p className="text-xs md:text-sm text-gray-500 font-medium italic">Anında konfirme taksi</p>
                </div>
            </div>

            <form className="space-y-4 md:space-y-5" onSubmit={handleSubmit}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5">
                    {/* Ad Soyad */}
                    <div className="relative">
                        <User className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                        <input
                            required
                            name="name"
                            type="text"
                            placeholder="Adınız Soyadınız"
                            className="w-full pl-11 md:pl-12 pr-4 py-3 md:py-4 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-brand-yellow outline-none transition-all font-medium text-sm md:text-base"
                        />
                    </div>

                    {/* Telefon */}
                    <div className="relative">
                        <Phone className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                        <input
                            required
                            name="phone"
                            type="tel"
                            placeholder="Telefon Numaranız"
                            className="w-full pl-11 md:pl-12 pr-4 py-3 md:py-4 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-brand-yellow outline-none transition-all font-medium text-sm md:text-base"
                        />
                    </div>
                </div>

                {/* Nereden */}
                <div className="relative">
                    <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 text-green-500" size={18} />
                    <input
                        required
                        name="from"
                        type="text"
                        placeholder="Nereden Alınacaksınız?"
                        className="w-full pl-11 md:pl-12 pr-4 py-3 md:py-4 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-brand-yellow outline-none transition-all font-medium text-sm md:text-base"
                    />
                </div>

                {/* Nereye */}
                <div className="relative">
                    <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 text-red-500" size={18} />
                    <input
                        required
                        name="to"
                        type="text"
                        placeholder="Nereye Gideceksiniz?"
                        className="w-full pl-11 md:pl-12 pr-4 py-3 md:py-4 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-brand-yellow outline-none transition-all font-medium text-sm md:text-base"
                    />
                </div>

                <div className="grid grid-cols-2 gap-4 md:gap-5">
                    {/* Tarih */}
                    <div className="relative">
                        <Calendar className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                        <input
                            required
                            name="date"
                            type="date"
                            className="w-full pl-11 md:pl-12 pr-4 py-3 md:py-4 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-brand-yellow outline-none transition-all font-medium text-sm md:text-base"
                        />
                    </div>

                    {/* Saat */}
                    <div className="relative">
                        <Clock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                        <input
                            required
                            name="time"
                            type="time"
                            className="w-full pl-11 md:pl-12 pr-4 py-3 md:py-4 bg-gray-50 border border-gray-200 rounded-xl focus:ring-2 focus:ring-brand-yellow outline-none transition-all font-medium text-sm md:text-base"
                        />
                    </div>
                </div>

                <button
                    type="submit"
                    className="w-full btn-primary py-4 md:py-5 text-base md:text-lg group"
                >
                    Rezervasyon Oluştur
                    <ChevronRight className="group-hover:translate-x-1 transition-transform" />
                </button>

                <p className="text-center text-xs text-gray-400 font-medium">
                    * Rezervasyon onayı için sizi arayacağız. <br /> (WhatsApp üzerinden iletilir)
                </p>
            </form>
        </div>
    );
};

export default BookingForm;
