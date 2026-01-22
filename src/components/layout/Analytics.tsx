"use client";

import Script from "next/script";

const Analytics = () => {
    return (
        <>
            {/* Google Tag (gtag.js) */}
            <Script
                src={`https://www.googletagmanager.com/gtag/js?id=AW-17111968454`}
                strategy="afterInteractive"
            />
            <Script id="google-tags" strategy="afterInteractive">
                {`
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());
                    gtag('config', 'AW-17111968454');
                `}
            </Script>
        </>
    );
};

export default Analytics;
