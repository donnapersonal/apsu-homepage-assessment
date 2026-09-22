import Image from "next/image";

import { ArrowLink } from "@/components/ui/arrow-link";
import { CheckList } from "@/components/ui/check-list";
import type { CareProgram } from "@/types/content";

interface ProgramShowcaseProps {
  program: CareProgram;
  reverse?: boolean;
}

const themeStyles: Record<CareProgram["theme"], string> = {
  mint: "bg-mint",
  pink: "bg-pink",
  aqua: "bg-aqua",
};

export function ProgramShowcase({
  program,
  reverse = false,
}: ProgramShowcaseProps) {
  if (program.id === "weight-loss") {
    return (
      <section
        id={program.id}
        aria-labelledby={`${program.id}-title`}
        className="mx-auto w-full max-w-[1360px] scroll-mt-8 px-5 pb-8 xl:px-0"
      >
        <div className="relative isolate h-[678px] overflow-hidden rounded-2xl bg-[#bcffe6]/80 p-3 xl:h-[619px] xl:overflow-visible xl:rounded-[32px] xl:p-0">
          <div className="relative z-10 flex h-full w-full flex-col xl:absolute xl:left-8 xl:top-8 xl:h-[555px] xl:w-[614px] xl:justify-start xl:rounded-l-2xl xl:px-8 xl:py-20">
            <div className="flex h-[306px] w-full flex-col gap-6 xl:h-[389px] xl:w-[456px] xl:gap-9">
              <div className="flex h-[234px] w-full flex-col xl:h-[297px] xl:gap-4">
                <p className="hidden uppercase text-[#00774d] xl:block xl:h-[21px] xl:text-base xl:font-normal xl:leading-[1.32] xl:tracking-[2px]">
                  {program.eyebrow}
                </p>

                <div className="flex h-[234px] w-full flex-col gap-4 xl:h-[260px] xl:gap-5">
                  <h2
                    id={`${program.id}-title`}
                    className="h-20 w-full text-[32px] font-medium leading-[1.24] tracking-normal text-[#111111] xl:h-32 xl:text-[52px]"
                  >
                    {program.title}
                  </h2>
                  <CheckList
                    items={program.benefits}
                    size="large"
                    iconVariant="compact-check-circle"
                    className="h-[138px] w-full xl:h-28"
                  />
                </div>
              </div>

              <ArrowLink
                {...program.cta}
                variant="light"
                size="program"
                arrowIcon="cta-dark"
                className="w-full self-start xl:w-[175px]"
              />
            </div>
          </div>

          <div className="absolute bottom-0 left-1/2 z-0 h-[355px] w-[317px] -translate-x-1/2 xl:-top-[73px] xl:bottom-auto xl:left-auto xl:right-0 xl:h-[692px] xl:w-[682px] xl:translate-x-0">
            <Image
              src={program.image.src}
              alt={program.image.alt}
              fill
              sizes="(max-width: 1279px) 317px, 682px"
              className="object-contain object-bottom"
            />
          </div>
        </div>
      </section>
    );
  }

  if (program.id === "birth-control") {
    return (
      <section
        id={program.id}
        aria-labelledby={`${program.id}-title`}
        className="mx-auto w-full max-w-[1344px] scroll-mt-8 px-5 xl:px-3"
      >
        <div className="relative overflow-hidden rounded-2xl bg-[#ffdeff] px-3 pt-3 xl:h-[718px] xl:overflow-visible xl:rounded-[32px] xl:p-8">
          <div className="grid min-w-0 gap-0 xl:h-full xl:grid-cols-[minmax(0,673px)_minmax(0,555px)] xl:gap-6">
            <div className="relative z-10 flex min-w-0 flex-col rounded-l-2xl pb-6 xl:h-[664px] xl:gap-8 xl:px-8 xl:py-[60px]">
              <div className="flex min-w-0 max-w-[562px] flex-col gap-4 xl:h-[352px] xl:gap-8">
                <h2
                  id={`${program.id}-title`}
                  className="text-[32px] font-medium leading-[1.24] text-[#111111] xl:h-32 xl:text-[52px]"
                >
                  <span className="block max-w-[285px] xl:max-w-none">
                    {program.title}
                  </span>
                </h2>

                <div className="flex flex-col gap-4 xl:h-48">
                  <p className="text-base font-normal leading-[1.6] text-[#3b3b3c] xl:h-16 xl:w-[615px] xl:max-w-none xl:text-xl xl:leading-8">
                    {program.lead}
                  </p>

                  <CheckList
                    items={program.benefits}
                    size="large"
                    iconVariant="compact-check-circle"
                    className="h-28 w-full max-w-[562px]"
                  />
                </div>
              </div>

              <div className="mt-6 flex w-full flex-col gap-4 border-t border-[#ffc0ff] pt-[23px] xl:mt-0 xl:h-40 xl:max-w-[609px] xl:pt-6">
                <p
                  aria-label={`${program.price.qualifier} $${program.price.amount} per ${program.price.cadence}`}
                  className="flex h-16 w-full items-baseline text-[32px] font-medium leading-[1.16] text-[#111111]"
                >
                  <span className="capitalize">{program.price.qualifier}</span>
                  <span className="ml-2 text-[52px] leading-[1.24]">
                    ${program.price.amount}
                  </span>
                  <span>/mo</span>
                </p>

                <ArrowLink
                  {...program.cta}
                  variant="light"
                  size="birth-control"
                  arrowIcon="cta-dark"
                  className="w-full xl:w-[365px]"
                />
              </div>
            </div>

            <div className="relative h-[412px] xl:-mb-8 xl:-mt-16 xl:h-[750px]">
              <Image
                src={program.image.src}
                alt={program.image.alt}
                width={405}
                height={751}
                sizes="(max-width: 1279px) 311px, 405px"
                className="absolute left-1/2 top-0 h-[416px] w-[283px] max-w-none -translate-x-1/2 object-contain object-bottom pt-4 xl:bottom-0 xl:left-auto xl:right-0 xl:top-auto xl:h-[751px] xl:w-[405px] xl:translate-x-0 xl:pt-0"
              />
            </div>
          </div>
        </div>
      </section>
    );
  }

  if (program.id === "sleep") {
    if (!program.profile) {
      throw new Error("Sleep program profile data is required.");
    }

    const profile = program.profile;

    return (
      <section
        id={program.id}
        aria-labelledby={`${program.id}-title`}
        className="mx-auto w-full max-w-[1344px] scroll-mt-8 px-5 lg:px-3"
      >
        <div className="relative h-[938px] overflow-hidden rounded-2xl bg-[#d0fffd] px-3 pt-3 lg:h-[718px] lg:overflow-visible lg:rounded-[32px] lg:px-8 lg:py-0">
          <div className="grid h-[926px] gap-6 lg:h-full lg:grid-cols-[596px_minmax(0,1fr)] lg:gap-7">
            <div className="relative order-2 h-[404px] lg:order-1 lg:h-auto lg:min-h-0">
              <Image
                src={program.image.src}
                alt={program.image.alt}
                width={596}
                height={752}
                unoptimized
                sizes="(max-width: 1023px) 311px, 596px"
                className="absolute bottom-0 left-1/2 z-[1] h-[422px] w-[309px] -translate-x-1/2 scale-[1.06] object-contain object-center lg:-top-[34px] lg:left-0 lg:h-[752px] lg:w-[596px] lg:max-w-none lg:translate-x-0 lg:scale-100 lg:object-bottom"
              />

              <div className="absolute bottom-[52px] left-1/2 z-10 flex h-[88px] w-[327px] -translate-x-1/2 items-end gap-1.5 lg:bottom-[72px] lg:left-[12px] lg:h-32 lg:w-[575px] lg:translate-x-0 lg:gap-3">
                <div className="relative h-[86px] w-[204px] shrink-0 rounded-xl bg-white p-2 shadow-[1px_1px_2px_rgba(0,0,0,0.10),2px_3px_4px_rgba(0,0,0,0.09)] lg:h-32 lg:w-[378px] lg:rounded-2xl lg:p-4">
                  <p className="h-8 border-b border-dashed border-[#cddcd3] pb-1.5 text-base font-medium leading-[1.6] text-[#102b1c] lg:h-10 lg:pb-3 lg:text-2xl lg:leading-[1.16]">
                    {profile.name}
                  </p>
                  <div className="absolute bottom-2 left-2 flex h-[26px] w-[188px] items-end gap-3 text-[#111111] lg:static lg:mt-4 lg:h-10 lg:w-[329px] lg:items-end lg:justify-between lg:gap-0">
                    <span className="flex items-baseline gap-2 lg:gap-3">
                      <span className="text-base font-medium leading-[1.6] lg:text-[32px] lg:leading-[1.24]">{profile.score}</span>
                      <span className="text-xs leading-none text-[#00774d] lg:text-lg lg:leading-[1.6]">{profile.status}</span>
                    </span>
                    <span className="flex items-baseline gap-2 lg:gap-3">
                      <span className="text-base font-medium leading-[1.6] lg:text-[32px] lg:leading-[1.24]">{profile.progress}%</span>
                      <span className="text-xs leading-none text-[#00774d] lg:text-lg lg:leading-[1.6]">{profile.progressLabel}</span>
                    </span>
                  </div>
                </div>

                <div className="h-[88px] w-[117px] shrink-0 rounded-xl bg-white p-2 shadow-[1px_1px_2px_rgba(0,0,0,0.10),2px_3px_4px_rgba(0,0,0,0.09)] lg:h-32 lg:w-[185px] lg:rounded-2xl lg:p-4">
                  <p className="h-5 text-base font-medium leading-[1.24] text-[#173a26] lg:h-7 lg:text-2xl lg:leading-[1.16]">{profile.profileLabel}</p>
                  <div className="mt-7 flex h-6 flex-col gap-1.5 lg:mt-7 lg:h-[51px] lg:gap-4">
                    <div className="h-1.5 w-full rounded-full bg-[linear-gradient(90deg,#3B82F6_0%,#1A8A79_40%,#F59E0B_70%,#EF4444_100%)]" />
                    <p className="h-3 text-xs leading-none text-[#00774d] lg:-mt-2 lg:h-[29px] lg:text-lg lg:leading-[1.6]">{profile.completion}%</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="relative z-20 order-1 flex h-[498px] flex-col lg:order-2 lg:h-[676px] lg:w-[615px] lg:gap-8 lg:rounded-l-2xl lg:px-8 lg:py-[60px]">
              <div className="flex h-[322px] w-full flex-col gap-4 lg:h-[364px] lg:w-[551px]">
                <h2
                  id={`${program.id}-title`}
                  className="h-10 text-[32px] font-medium leading-[1.24] text-[#111111] lg:h-16 lg:text-[52px]"
                >
                  Sleep
                </h2>

                <div className="flex h-[266px] flex-col gap-4 lg:h-[268px]">
                  <div className="flex h-[82px] flex-col gap-1 text-base leading-[1.6] text-[#3b3b3c] lg:h-[100px] lg:text-xl lg:leading-8">
                    <p>{program.lead}</p>
                    <p className="max-w-[500px]">{program.detail}</p>
                  </div>

                  <CheckList
                    items={program.benefits}
                    size="large"
                    iconVariant="compact-check-circle"
                    className="h-[168px] w-full lg:h-[152px]"
                  />
                </div>
              </div>

              <div className="mt-6 flex h-[152px] w-full flex-col gap-4 border-t border-[#83f2ec] pt-[23px] lg:mt-0 lg:h-40 lg:w-[551px] lg:pt-6">
                <p
                  aria-label={`${program.price.qualifier} $${program.price.amount} per ${program.price.cadence}`}
                  className="flex h-16 items-baseline text-[32px] font-medium leading-[1.16] text-[#111111]"
                >
                  <span className="capitalize">{program.price.qualifier}</span>
                  <span className="ml-2 text-[52px] leading-[1.24]">${program.price.amount}</span>
                  <span>/mo</span>
                </p>

                <ArrowLink
                  {...program.cta}
                  variant="light"
                  size="birth-control"
                  arrowIcon="cta-dark"
                  className="w-full lg:w-[301px]"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section
      id={program.id}
      aria-labelledby={`${program.id}-title`}
      className="mx-auto w-full max-w-[1344px] scroll-mt-8 px-3"
    >
      <div
        className={`relative grid overflow-hidden rounded-[32px] ${themeStyles[program.theme]} lg:h-[718px] lg:grid-cols-2`}
      >
        <div
          className={`relative z-10 flex flex-col justify-center px-6 py-12 sm:px-12 sm:py-16 lg:px-16 ${reverse ? "lg:order-2" : ""}`}
        >
          <h2
            id={`${program.id}-title`}
            className="max-w-[530px] text-[40px] font-medium leading-[1.05] tracking-[-0.04em] text-evergreen sm:text-[58px]"
          >
            {program.title}
          </h2>

          <p className="mt-7 max-w-lg text-lg leading-7 text-neutral-700">
            {program.lead}
          </p>
          <p className="mt-2 max-w-lg text-base leading-7 text-neutral-600">
            {program.detail}
          </p>

          <CheckList items={program.benefits} className="mt-6" />

          <div className="mt-8 max-w-[550px] border-t border-emerald-900/20 pt-7">
            <p
              aria-label={`${program.price.qualifier} $${program.price.amount} per ${program.price.cadence}`}
              className="flex flex-wrap items-baseline gap-x-2 text-[30px] font-medium tracking-[-0.03em] text-evergreen sm:text-[40px]"
            >
              <span className="capitalize">{program.price.qualifier}</span>
              <span className="text-[50px] text-neutral-950 sm:text-[64px]">
                ${program.price.amount}
              </span>
              <span className="text-base font-normal tracking-normal text-neutral-700 sm:text-lg">
                / {program.price.cadence}
              </span>
            </p>

            <ArrowLink
              {...program.cta}
              variant="light"
              className="mt-5 w-full sm:w-auto"
            />
          </div>
        </div>

        <div
          className={`relative min-h-[390px] self-end sm:min-h-[500px] lg:min-h-full ${reverse ? "lg:order-1" : ""}`}
        >
          <Image
            src={program.image.src}
            alt={program.image.alt}
            fill
            sizes="(max-width: 1023px) 100vw, 50vw"
            className="object-contain object-bottom"
          />
        </div>
      </div>
    </section>
  );
}
