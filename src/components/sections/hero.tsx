import Image from "next/image";

import { ArrowLink } from "@/components/ui/arrow-link";
import {
  GlobeIcon,
  MoonIcon,
  PillIcon,
  StethoscopeIcon,
  TruckIcon,
} from "@/components/ui/icons";
import type { HomePageContent, TreatmentCategory } from "@/types/content";
import { languageOptions, type SiteLocale } from "@/i18n/locales";

interface HeroProps {
  content: HomePageContent["hero"];
  treatments: HomePageContent["treatments"];
  locale: SiteLocale;
  onLocaleChange: (locale: SiteLocale) => void;
}

const eyebrowIcons = [GlobeIcon, StethoscopeIcon, TruckIcon] as const;

const themeStyles: Record<TreatmentCategory["theme"], string> = {
  mint: "bg-[rgba(188,255,230,0.8)]",
  pink: "bg-pink",
  aqua: "bg-aqua",
};

function ProductVisual({
  product,
  fallbackImage,
}: {
  product: TreatmentCategory;
  fallbackImage?: TreatmentCategory["image"];
}) {
  const productImage = product.image ?? fallbackImage;

  if (productImage) {
    return (
      <Image
        src={productImage.src}
        alt={product.image?.alt ?? "Prescription medication vial"}
        width={productImage.width}
        height={productImage.height}
        sizes="(min-width: 1440px) 568px, (min-width: 1024px) 41vw, 335px"
        className="pointer-events-none absolute bottom-[-42%] right-[max(-101px,-30%)] z-20 h-auto w-[min(100%,335px)] max-w-none object-contain lg:bottom-[-36%] lg:right-[-40%] lg:w-[135%]"
        priority
      />
    );
  }

  if (product.visual === "pill") {
    return (
      <PillIcon className="pointer-events-none absolute bottom-4 right-1 size-36 text-[#7b4775] sm:right-3 sm:size-48" />
    );
  }

  return (
    <MoonIcon className="pointer-events-none absolute bottom-2 right-0 size-40 text-[#176b68] sm:right-2 sm:size-52" />
  );
}

export function Hero({ content, treatments, locale, onLocaleChange }: HeroProps) {
  const descriptionLines = content.description.match(/^(.+?[.!?。！？])\s*(.*)$/);
  const fallbackProductImage = treatments.find((product) => product.image)?.image;
  const languageRows = [
    [
      languageOptions[0],
      languageOptions[1],
      languageOptions[2],
      languageOptions[3],
      languageOptions[4],
      languageOptions[5],
      languageOptions[0],
      languageOptions[1],
      languageOptions[2],
      languageOptions[3],
    ],
    [
      languageOptions[9],
      languageOptions[10],
      languageOptions[6],
      languageOptions[7],
      languageOptions[8],
      languageOptions[9],
      languageOptions[10],
      languageOptions[6],
      languageOptions[7],
    ],
  ];

  return (
    <section
      id="top"
      aria-labelledby="hero-title"
      className="mx-auto w-full max-w-[1384px] scroll-mt-4 rounded-b-[16px] bg-white pb-1 pt-4 sm:pt-7 lg:pb-0 lg:pt-0"
    >
      <div className="mx-auto flex w-full max-w-[1320px] flex-col gap-9 bg-white pt-12 sm:px-6 sm:pt-16 lg:gap-0 lg:px-0 lg:pt-20">
        <div className="flex w-full flex-col gap-6 lg:contents">
        <div className="mx-auto flex w-full flex-col gap-3 text-center lg:min-h-[360px] lg:gap-0 lg:px-0">
          <ul className="flex h-[50px] w-full flex-wrap items-center justify-center gap-x-1 gap-y-1 text-xs font-medium leading-[1.6] text-[#21ac88] sm:text-sm lg:mb-3 lg:h-[30px] lg:gap-3">
            {content.eyebrow.map((item, index) => {
              const Icon = eyebrowIcons[index] ?? GlobeIcon;

              return (
                <li
                  key={item}
                  className={`flex h-[23px] items-center justify-center gap-1 whitespace-nowrap rounded-xl py-0.5 pl-2 ${
                    index === 2
                      ? "order-first basis-full lg:order-none lg:basis-auto"
                      : ""
                  } lg:h-[30px] lg:gap-2 lg:py-1 lg:pl-3 lg:text-sm lg:leading-[1.6]`}
                >
                  <Icon className="size-4 shrink-0 lg:size-5" />
                  <span>{item}</span>
                </li>
              );
            })}
          </ul>

          <div className="flex h-[309px] w-full flex-col items-center gap-6 lg:h-[318px] lg:gap-6">
            <div className="flex h-[229px] w-full flex-col items-center gap-4 lg:h-[238px]">
              <h1
                id="hero-title"
                className="mx-auto h-[135px] w-full text-[36px] font-medium leading-[1.24] tracking-normal text-evergreen sm:text-6xl sm:leading-[1.04] sm:tracking-[-0.045em] lg:h-[158px] lg:w-[872px] lg:max-w-full lg:text-[72px] lg:leading-[1.1] lg:tracking-normal"
              >
                {content.title}{" "}
                <span className="text-emerald-700">
                  {content.highlightedTitle}
                </span>
              </h1>

              <p className="mx-auto h-[78px] w-full text-base font-normal leading-[1.6] text-[#3b3b3c] lg:h-16 lg:max-w-none lg:text-xl">
                {descriptionLines ? (
                  <>
                    <span className="block">{descriptionLines[1]}</span>
                    <span className="block">{descriptionLines[2]}</span>
                  </>
                ) : (
                  content.description
                )}
              </p>
            </div>

            <ArrowLink
              {...content.primaryAction}
              size="large"
              arrowIcon="cta"
              className="mt-0 h-14 min-h-0 w-[281px] max-w-full gap-2 py-4 pl-8 pr-2 !text-base font-medium !leading-[1.24] tracking-normal [&>span:first-child]:w-[193px] [&>span:first-child]:shrink-0 [&>span:first-child]:whitespace-nowrap lg:w-[305px] lg:!text-lg lg:!leading-[1.32] lg:[&>span:first-child]:w-[217px]"
            />
          </div>
        </div>

        <p id="consultation-languages" className="sr-only">
          Consultation languages include
        </p>
        <div
          aria-labelledby="consultation-languages"
          aria-label="Choose a consultation language. Scroll horizontally for more options."
          role="region"
          tabIndex={0}
          className="mx-auto h-[72px] w-[319px] max-w-full touch-pan-x overflow-x-auto overflow-y-hidden overscroll-x-contain scroll-smooth outline-none [scrollbar-width:none] focus-visible:ring-2 focus-visible:ring-emerald-600 focus-visible:ring-offset-2 lg:mt-8 lg:h-[104px] lg:w-full lg:max-w-[1080px] [&::-webkit-scrollbar]:hidden"
          style={{
            WebkitMaskImage:
              "linear-gradient(to right, transparent 0, black 5%, black 95%, transparent 100%)",
            maskImage:
              "linear-gradient(to right, transparent 0, black 5%, black 95%, transparent 100%)",
          }}
        >
          <div className="flex h-full flex-col gap-2 lg:gap-4">
            {languageRows.map((row, rowIndex) => (
              <ul
                key={rowIndex}
                className={`flex h-8 w-max items-center gap-2 lg:h-11 lg:gap-4 ${rowIndex === 0 ? "-translate-x-8" : "-translate-x-20"}`}
              >
                {row.map((language, index) => {
                  const isSelected = locale === language.locale;
                  const canSwitchInterface = language.locale === "en" || language.locale === "zh";

                  return (
                    <li key={`${rowIndex}-${language.locale}-${index}`}>
                      <button
                        type="button"
                        lang={language.locale}
                        aria-pressed={isSelected}
                        aria-disabled={!canSwitchInterface}
                        title={canSwitchInterface ? `Switch interface to ${language.label}` : `${language.label} consultation supported`}
                        onClick={() => {
                          if (canSwitchInterface) onLocaleChange(language.locale);
                        }}
                        className={`inline-flex h-8 min-w-0 items-center justify-center whitespace-nowrap rounded-full border px-4 py-2 text-sm font-normal leading-[1.16] text-[#585d5a] transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-600 focus-visible:ring-offset-2 lg:h-11 lg:min-w-32 lg:px-8 lg:py-3 lg:text-base lg:leading-[1.24] lg:text-[#292b2a] ${
                          isSelected
                            ? "border-[#b8d9c6] bg-[#b8d9c6]"
                            : canSwitchInterface
                              ? "border-[#b8d9c6] bg-[#faf9f4] hover:bg-emerald-50"
                              : "cursor-default border-[#b8d9c6] bg-[#faf9f4]"
                        }`}
                      >
                        {language.label}
                      </button>
                    </li>
                  );
                })}
              </ul>
            ))}
          </div>
        </div>
        </div>

        <div className="mx-auto grid w-full max-w-[1320px] gap-6 px-0 lg:mt-14 lg:grid-cols-3 lg:gap-6">
          {treatments.map((product) => (
            <article
              key={product.id}
              className={`relative h-[220px] min-h-0 overflow-hidden rounded-[16px] p-3 shadow-[0_4px_12px_rgba(2,31,24,0.06)] lg:h-[421px] lg:p-6 ${themeStyles[product.theme]}`}
            >
              <div className="relative z-10 flex h-[103px] w-full flex-col gap-4 lg:h-[124px]">
                <p className="h-[18px] w-[239px] text-sm font-normal uppercase leading-[1.32] tracking-[2px] text-[#102b1c] lg:h-6 lg:text-[18px]">
                  {product.eyebrow}
                </p>

                <h2 className="h-[69px] w-[239px] text-xl font-medium leading-[1.16] tracking-normal text-[#2a2a2a] lg:h-[84px] lg:text-2xl">
                  {product.title}
                </h2>
              </div>

              <div className="absolute bottom-3 left-3 z-10 lg:bottom-6 lg:left-6">
                <ArrowLink
                  label="See plans"
                  href={product.href}
                  ariaLabel={`Explore ${product.eyebrow.toLowerCase()} care`}
                  variant="light"
                  size="compact"
                  arrowIcon="cta-dark"
                  className="
                    h-12 w-[149px] gap-2 py-2 pl-6 pr-2
                    text-[16px] font-medium leading-[1.24] tracking-normal
                    text-[#111111]
                    [&>span:first-child]:w-[77px]

                    lg:w-[167px] lg:pl-8
                    lg:text-[18px] lg:leading-[1.32]
                    lg:[&>span:first-child]:w-[87px]
                  "
                />
              </div>

              <ProductVisual product={product} fallbackImage={fallbackProductImage} />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
