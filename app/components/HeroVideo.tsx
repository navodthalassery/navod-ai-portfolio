"use client";

import { useEffect, useRef, useState } from "react";
import { Pause, Play } from "lucide-react";
import { useLanguage } from "../lib/LanguageProvider";

const labels = {
  en: { play: "Play", pause: "Pause", error: "Animation unavailable" },
  ar: { play: "تشغيل", pause: "إيقاف مؤقت", error: "الحركة غير متاحة" },
};

const portraitLabels = {
  en: { play: "Play", pause: "Pause", error: "Portrait animation unavailable" },
  ar: { play: "تشغيل", pause: "إيقاف مؤقت", error: "حركة الصورة الشخصية غير متاحة" },
};

export default function HeroVideo({ variant = "background" }: { variant?: "background" | "portrait" }) {
  const { lang } = useLanguage();
  const portrait = variant === "portrait";
  const text = (portrait ? portraitLabels : labels)[lang];
  const videoRef = useRef<HTMLVideoElement>(null);
  const toggleRef = useRef<() => void>(() => {});
  const [playing, setPlaying] = useState(false);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");
    const mobile = window.matchMedia("(max-width: 767px)");
    const connection = (navigator as Navigator & { connection?: { saveData?: boolean } }).connection;
    let wanted = !reduced.matches && !mobile.matches && !connection?.saveData;
    let visible = false;
    let disposed = false;

    const showPoster = () => {
      video.pause();
      video.removeAttribute("src");
      video.load();
      setPlaying(false);
    };

    const reconcile = () => {
      if (disposed || !wanted || !visible || document.hidden) {
        showPoster();
        return;
      }
      if (!video.getAttribute("src")) {
        video.src = portrait ? "/media/navod-portrait-live.mp4" : mobile.matches ? "/media/navod-ai-background-mobile.mp4" : "/media/navod-ai-background.mp4";
        video.load();
      }
      void video.play().then(() => {
        if (disposed || !wanted || !visible || document.hidden) {
          showPoster();
        } else {
          setPlaying(true);
        }
      }).catch(() => {
        setPlaying(false);
        // A rejected autoplay request leaves the poster and manual play control available.
      });
    };

    toggleRef.current = () => {
      wanted = !wanted;
      reconcile();
    };

    const onPolicyChange = () => {
      if (reduced.matches || mobile.matches) wanted = false;
      reconcile();
    };
    const observer = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
      reconcile();
    }, { threshold: 0 });
    observer.observe(video);
    document.addEventListener("visibilitychange", reconcile);
    reduced.addEventListener("change", onPolicyChange);
    mobile.addEventListener("change", onPolicyChange);
    return () => {
      disposed = true;
      showPoster();
      observer.disconnect();
      document.removeEventListener("visibilitychange", reconcile);
      reduced.removeEventListener("change", onPolicyChange);
      mobile.removeEventListener("change", onPolicyChange);
      toggleRef.current = () => {};
    };
  }, [portrait]);

  return (
    <>
      <div className={portrait ? "portrait-video-layer" : "hero-video-layer"} aria-hidden="true">
        <video
          ref={videoRef}
          muted loop playsInline preload="none"
          poster={portrait ? "/navod-portrait.png" : "/media/navod-ai-background-poster.jpg"}
          tabIndex={-1}
          onPlay={() => setPlaying(true)}
          onPause={() => setPlaying(false)}
          onError={() => { setFailed(true); setPlaying(false); }}
          className={failed ? "invisible" : undefined}
        />
      </div>
      <button
        type="button"
        className={portrait ? "hero-video-control portrait-video-control" : "hero-video-control"}
        aria-pressed={playing}
        disabled={failed}
        onClick={() => toggleRef.current()}
      >
        {playing ? <Pause size={14} aria-hidden="true" /> : <Play size={14} aria-hidden="true" />}
        {failed ? text.error : playing ? text.pause : text.play}
      </button>
    </>
  );
}
