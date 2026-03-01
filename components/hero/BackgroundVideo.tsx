"use client";

import { useRef } from "react";

export default function BackgroundVideo() {
    const videoRef = useRef<HTMLVideoElement>(null);

    const tryPlay = async () => {
        const v = videoRef.current;
        if (!v) return;

        // iOS любит, когда это выставлено максимально явно
        v.muted = true;
        v.defaultMuted = true;
        v.volume = 0;

        v.setAttribute("playsinline", "true");
        v.setAttribute("webkit-playsinline", "true");

        try {
            await v.play();
        } catch {
            // если всё равно заблокировано — стартуем после первого жеста
            const resume = async () => {
                try { await v.play(); } catch {}
            };
            window.addEventListener("touchstart", resume, { once: true, passive: true });
            window.addEventListener("click", resume, { once: true });
        }
    };

    return (
        <div className="absolute inset-0 z-0 pointer-events-none">
            <video
                ref={videoRef}
                autoPlay
                muted
                loop
                playsInline
                preload="metadata"
                poster="/hero-poster.jpg"
                disablePictureInPicture
                className="w-full h-full object-cover"
                onCanPlay={tryPlay}
            >
                <source src="/hero-bg-ios.mp4" type="video/mp4" />
            </video>
        </div>
    );
}