"use client";

import { useEffect } from "react";
import { animate, stagger, type AnimationOptions, type DOMKeyframesDefinition } from "motion";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import type { CompanyProfile } from "@/lib/companyProfile";
import { HeaderBar } from "./sections/HeaderBar";
import { HeroSection } from "./sections/HeroSection";
import { AboutSection } from "./sections/AboutSection";
import { ServicesSection } from "./sections/ServicesSection";
import { WhySection } from "./sections/WhySection";
import { ContactSection } from "./sections/ContactSection";
import { FooterBar } from "./sections/FooterBar";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

type Props = { profile: CompanyProfile };

export function HomeClient({ profile }: Props) {
  useEffect(() => {
    const animateDom = animate as (
      el: string | Element,
      keyframes: DOMKeyframesDefinition,
      options?: AnimationOptions,
    ) => unknown;

    const heroKeyframes: DOMKeyframesDefinition = { opacity: [0, 1], y: [18, 0] };
    animateDom(".hero-title", heroKeyframes, { duration: 0.9, ease: "easeOut" });
    animateDom(".cta-primary", { y: [0, -3, 0] }, { duration: 2, ease: "easeInOut", repeat: Infinity });
    animateDom(".hero-sub", { opacity: [0, 1], y: [10, 0] }, { duration: 0.8, ease: "easeOut", delay: 0.1 });

    gsap.utils.toArray<HTMLElement>(".card-anim").forEach((card) => {
      gsap.from(card, {
        opacity: 0,
        y: 26,
        duration: 0.7,
        ease: "power3.out",
        scrollTrigger: {
          trigger: card,
          start: "top 80%",
        },
      });
    });

    animateDom(
      ".badge-row .chip",
      { opacity: [0, 1], x: [-8, 0] },
      { delay: stagger(0.05), duration: 0.4, ease: "easeOut" },
    );

    return () => {
      ScrollTrigger.killAll();
    };
  }, []);

  return (
    <div className="relative min-h-screen overflow-hidden text-slate-100">
      <div className="hero-bg pointer-events-none" aria-hidden />

      <HeaderBar />

      <main className="mx-auto flex max-w-6xl flex-col gap-16 px-6 py-16 sm:gap-20 sm:py-20">
        <HeroSection profile={profile} />
        <AboutSection profile={profile} />
        <ServicesSection packages={profile.packages} />
        <WhySection reasons={profile.whyUs} />
        <ContactSection contacts={profile.contacts} />
      </main>

      <FooterBar />
    </div>
  );
}
