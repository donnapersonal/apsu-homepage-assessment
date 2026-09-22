"use client";

import { useEffect, useMemo, useRef, useState } from "react";

import { Header } from "@/components/header";
import { Hero } from "@/components/sections/hero";
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
      </main>
    </div>
  );
}
