"use client";

import { useEffect, useMemo, useRef, useState } from "react";

import { BmiCalculator } from "@/components/bmi-calculator";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { ClosingCta } from "@/components/sections/closing-cta";
import { Faq } from "@/components/sections/faq";
import { Hero } from "@/components/sections/hero";
import { MedicationPlans } from "@/components/sections/medication-plans";
import { ProgramShowcase } from "@/components/sections/program-showcase";
import { ScheduleCarousel } from "@/components/sections/schedule-carousel";
import { Testimonials } from "@/components/sections/testimonials";
import { TrustStrip } from "@/components/sections/trust-strip";
import { Workflow } from "@/components/sections/workflow";
import {
  localizeHomePageContent,
  type SiteLocale,
} from "@/i18n/locales";
import type { HomePageContent } from "@/types/content";

const localeStorageKey = "apsu-locale";

export function LocalizedHome({ baseContent }: { baseContent: HomePageContent }) {
  const [locale, setLocale] = useState<SiteLocale>("en");
  const localeReady = useRef(false);
  const content = useMemo(
    () => localizeHomePageContent(baseContent, locale),
    [baseContent, locale],
  );

  useEffect(() => {
    const savedLocale = window.localStorage.getItem(localeStorageKey) as SiteLocale | null;
    if (!savedLocale) {
      localeReady.current = true;
      return;
    }

    const restoreLocale = window.setTimeout(() => {
      localeReady.current = true;
      setLocale(savedLocale);
    }, 0);
    return () => window.clearTimeout(restoreLocale);
  }, []);

  useEffect(() => {
    if (!localeReady.current) return;
    document.documentElement.lang = locale;
    document.documentElement.dir = locale === "ar" ? "rtl" : "ltr";
    window.localStorage.setItem(localeStorageKey, locale);
  }, [locale]);

  const weightLossProgram = content.programs.find((item) => item.id === "weight-loss")!;
  const birthControlProgram = content.programs.find((item) => item.id === "birth-control")!;
  const sleepProgram = content.programs.find((item) => item.id === "sleep")!;

  return (
    <div className="min-h-screen w-full overflow-x-hidden bg-[#faf9f4] pt-3 lg:pt-8">
      <div className="mx-3 rounded-2xl bg-white p-2 lg:mx-auto lg:max-w-[1384px] lg:rounded-[24px] lg:p-7">
        <Header
          nav={content.nav}
          primaryAction={content.header.primaryAction}
          secondaryAction={content.header.secondaryAction}
        />
        <Hero
          content={content.hero}
          treatments={content.treatments}
          locale={locale}
          onLocaleChange={setLocale}
        />
      </div>
      <main>
        <TrustStrip items={content.trustSignals} />
        <Workflow content={content.workflow} />
        <ProgramShowcase program={weightLossProgram} />
        <MedicationPlans plans={content.medicationPlans} />
        <BmiCalculator />
        <div className="flex flex-col gap-8 pb-14 pt-3 xl:gap-20 xl:py-[120px]">
          <ProgramShowcase program={birthControlProgram} reverse />
          <ProgramShowcase program={sleepProgram} />
        </div>
        <ScheduleCarousel content={content.schedule} />
        <Testimonials content={content.testimonials} />
        <Faq content={content.faqs} />
        <ClosingCta content={content.closingCta} />
      </main>
      <Footer content={content.footer} />
    </div>
  );
}
