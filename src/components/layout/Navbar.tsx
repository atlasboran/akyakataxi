"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X, Phone, MessageCircle } from "lucide-react";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const navLinks = [
        { name: "Ana Sayfa", href: "/" },
        { name: "Hizmetler", href: "/hizmetler" },
        { name: "Fiyatlar", href: "/fiyatlar" },
        { name: "Rezervasyon", href: "/rezervasyon" },
        { name: "İletişim", href: "/iletisim" },
    ];

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-white py-3 shadow-md" : "bg-white py-4"
                }`}
        >
            <div className="container mx-auto px-4 flex items-center justify-between">
                <Link href="/" className="flex items-center gap-2 group">
                    <div className="bg-brand-yellow p-2 rounded-lg group-hover:rotate-12 transition-transform">
                        <span className="text-xl font-black text-brand-black italic tracking-tighter">TAXI</span>
                    </div>
                    <span className="text-lg md:text-xl font-extrabold text-brand-black tracking-tight">
                        AKYAKA<span className="text-brand-yellow font-black">.</span>COM
                    </span>
                </Link>

                {/* Desktop Links */}
                <div className="hidden md:flex items-center gap-8">
                    {navLinks.map((link) => (
                        <Link key={link.name} href={link.href} className="nav-link">
                            {link.name}
                        </Link>
                    ))}

                    <div className="flex items-center gap-2 border-l border-gray-200 pl-8">
                        <button className="text-xs font-bold text-brand-black">TR</button>
                        <span className="text-gray-300">|</span>
                        <button className="text-xs font-bold text-gray-400 hover:text-brand-black transition-colors">EN</button>
                    </div>

                    <a
                        href="tel:+905442581414"
                        className="btn-primary py-2 px-6 text-sm italic"
                    >
                        <Phone size={16} />
                        0 544 258 14 14
                    </a>
                </div>

                {/* Mobile Toggle */}
                <button
                    className="md:hidden text-brand-black p-2 hover:bg-gray-100 rounded-lg transition-colors"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {/* Mobile Menu Overlay */}
            <div
                className={`fixed inset-0 bg-brand-black/60 z-[55] md:hidden transition-opacity duration-300 ${isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
                    }`}
                onClick={() => setIsOpen(false)}
            />
            {/* Mobile Menu Panel */}
            <div
                className={`fixed inset-y-0 right-0 w-full max-w-[280px] bg-white z-[60] shadow-2xl transform transition-transform duration-300 ease-in-out md:hidden ${isOpen ? "translate-x-0" : "translate-x-full"
                    }`}
            >
                <div className="p-6 flex flex-col h-full">
                    <div className="flex items-center justify-between mb-8">
                        <span className="text-xl font-black text-brand-black italic uppercase tracking-tighter">Menü</span>
                        <button onClick={() => setIsOpen(false)} className="p-2 hover:bg-gray-100 rounded-full transition-colors">
                            <X size={24} />
                        </button>
                    </div>
                    <div className="flex flex-col gap-2">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.href}
                                className="text-lg font-bold text-brand-black p-4 hover:bg-brand-yellow rounded-2xl transition-all"
                                onClick={() => setIsOpen(false)}
                            >
                                {link.name}
                            </Link>
                        ))}
                    </div>
                    <div className="mt-auto flex flex-col gap-3">
                        <a
                            href="tel:+905442581414"
                            className="bg-brand-yellow text-brand-black w-full py-4 rounded-2xl font-black text-center text-lg italic flex items-center justify-center gap-3 shadow-lg"
                        >
                            <Phone size={20} />
                            0 544 258 14 14
                        </a>
                        <a
                            href="https://wa.me/905321388062"
                            className="bg-green-500 text-white w-full py-4 rounded-2xl font-black flex items-center justify-center gap-3 hover:bg-green-600 transition-colors text-lg italic shadow-lg"
                        >
                            <MessageCircle size={20} />
                            WhatsApp
                        </a>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
