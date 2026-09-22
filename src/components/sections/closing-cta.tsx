import Image from "next/image";

import { ArrowLink } from "@/components/ui/arrow-link";
import type { HomePageContent } from "@/types/content";

interface ClosingCtaProps {
  content: HomePageContent["closingCta"];
}

function ClosingCtaTitle({ title }: { title: string }) {
  const mobileLines =
    title === "Ready for healthcare in your language?"
      ? ["Ready For", "Healthcare", "In Your", "Language?"]
      : [title];

  return (
    <h2
      id="closing-cta-title"
      aria-label={title}
      className="h-[240px] w-full text-center text-[48px] font-medium leading-[1.24] tracking-[0px] text-white lg:h-auto lg:max-w-[568px] lg:text-left"
    >
      <span aria-hidden="true" className="lg:hidden">
        {mobileLines.map((line) => (
          <span key={line} className="block">
            {line}
          </span>
        ))}
      </span>
      <span className="hidden lg:block">{title}</span>
    </h2>
  );
}

function ClosingCtaDetails({ details }: { details: readonly string[] }) {
  return (
    <ul className="flex h-20 w-full flex-col items-center gap-3 text-center text-xl leading-[1.32] text-[#f4fafa] lg:h-auto lg:w-fit lg:flex-row lg:flex-wrap lg:items-center lg:gap-0">
      {details.map((detail, index) => (
        <li key={detail} className="contents lg:flex lg:items-center lg:whitespace-nowrap">
          {index > 0 && (
            <span
              aria-hidden="true"
              className="size-1 rounded-full bg-white lg:mx-3 lg:inline-block lg:shrink-0"
            />
          )}
          <span>{detail}</span>
        </li>
      ))}
    </ul>
  );
}

function ClosingCtaCard({ content }: ClosingCtaProps) {
  return (
    <div className="relative isolate flex h-[560px] flex-col justify-between overflow-hidden rounded-2xl bg-gradient-to-r from-[#102b1c] to-[#d8efe4] p-3 text-white lg:h-[250px] lg:flex-row lg:items-end lg:p-8">
      <Image
        aria-hidden="true"
        src="/images/apsu-cta-vector.svg"
        alt=""
        width={823}
        height={302}
        unoptimized
        className="pointer-events-none absolute bottom-[58px] left-[-4px] -z-10 h-[126px] w-[343px] max-w-none select-none opacity-[0.05] lg:bottom-auto lg:left-auto lg:right-[75px] lg:top-0 lg:h-[250px] lg:w-[823px]"
      />

      <div className="relative z-10 flex h-[360px] w-full min-w-0 flex-col items-center gap-10 lg:h-[186px] lg:flex-1 lg:items-start lg:justify-between lg:gap-0">
        <ClosingCtaTitle title={content.title} />
        <ClosingCtaDetails details={content.details} />
      </div>

      <ArrowLink
        {...content.action}
        size="large"
        arrowIcon="cta"
        className="relative z-10 w-full shrink-0 !justify-between py-2 [&>span:first-child]:w-auto lg:mt-0 lg:w-[299px]"
      />
    </div>
  );
}

export function ClosingCta({ content }: ClosingCtaProps) {
  return (
    <section
      aria-labelledby="closing-cta-title"
      className="mx-auto w-full max-w-[1440px] rounded-t-[32px] bg-white px-5 py-5 lg:rounded-t-[48px] lg:px-8 lg:pb-[120px] lg:pt-8"
    >
      <ClosingCtaCard content={content} />
    </section>
  );
}
