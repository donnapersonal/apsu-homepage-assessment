"use client";

import Image from "next/image";
import {
  type KeyboardEvent,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";

import type { HomePageContent, ScheduleFeature } from "@/types/content";

interface ScheduleCarouselProps {
  content: HomePageContent["schedule"];
  initialIndex?: number;
}

interface CarouselPosition {
  activeIndex: number;
  canGoBack: boolean;
  canGoForward: boolean;
}

const edgeTolerance = 2;

function CarouselControls({
  canGoBack,
  canGoForward,
  goBack,
  goForward,
}: {
  canGoBack: boolean;
  canGoForward: boolean;
  goBack: () => void;
  goForward: () => void;
}) {
  return (
    <div className="flex h-12 w-[104px] shrink-0 gap-2" aria-label="Carousel controls">
      <button
        type="button"
        onClick={goBack}
        disabled={!canGoBack}
        aria-label="Show previous features"
        className="size-12 shrink-0 rounded-full transition-opacity disabled:cursor-not-allowed"
      >
        <Image src="/images/carousel-arrow-left.svg" alt="" width={48} height={48} className="size-12" />
      </button>
      <button
        type="button"
        onClick={goForward}
        disabled={!canGoForward}
        aria-label="Show next features"
        className="size-12 shrink-0 rounded-full transition-opacity disabled:cursor-not-allowed"
      >
        <Image src="/images/carousel-arrow-right.svg" alt="" width={48} height={48} className="size-12" />
      </button>
    </div>
  );
}

function clampIndex(index: number, itemCount: number) {
  return Math.min(Math.max(index, 0), Math.max(itemCount - 1, 0));
}

function getCardOffset(card: HTMLLIElement, viewport: HTMLDivElement) {
  return (
    card.getBoundingClientRect().left -
    viewport.getBoundingClientRect().left +
    viewport.scrollLeft
  );
}

function ScheduleCard({
  feature,
  index,
  count,
  cardRef,
}: {
  feature: ScheduleFeature;
  index: number;
  count: number;
  cardRef: (node: HTMLLIElement | null) => void;
}) {
  const isCover = feature.presentation === "cover";
  const isPhone = feature.presentation === "phone";
  const isManagement = feature.id === "management";
  const isMedication = feature.id === "medication";
  const isShipping = feature.id === "shipping";

  return (
    <li
      ref={cardRef}
      role="group"
      aria-roledescription="slide"
      aria-label={`${index + 1} of ${count}`}
      className="relative h-[510px] w-[333px] shrink-0 snap-start overflow-hidden rounded-2xl bg-white shadow-[0_4px_21.6px_rgba(2,29,23,0.06)] sm:h-[520px] sm:w-auto sm:basis-[55%] lg:h-[654px] lg:w-[382px] lg:basis-auto"
    >
      {isPhone ? (
        <div className="absolute left-1.5 top-24 h-[614.44px] w-80 overflow-hidden bg-white lg:left-[31px] lg:top-[126px]">
          <Image
            src={feature.image.src}
            alt={feature.image.alt}
            width={1109}
            height={832}
            unoptimized
            sizes="320px"
            className="absolute -left-[344px] -top-[136px] h-[757px] w-[1008px] max-w-none lg:-left-[444px] lg:-top-[157px] lg:h-[899px] lg:w-[1198px]"
          />
        </div>
      ) : isManagement ? (
        <Image
          src={feature.image.src}
          alt={feature.image.alt}
          width={1800}
          height={1013}
          unoptimized
          sizes="382px"
          className="absolute -left-[384px] -top-16 h-[718px] w-[1270px] max-w-none"
        />
      ) : isMedication ? (
        <div className="absolute left-[9px] top-[241px] h-[340.7px] w-[406.15px]">
          <Image
            src={feature.image.src}
            alt={feature.image.alt}
            width={628}
            height={406}
            unoptimized
            sizes="467px"
            className="h-auto w-full max-w-none origin-top-right translate-x-[42px] scale-[1.27]"
          />
        </div>
      ) : (
        <Image
          src={feature.image.src}
          alt={feature.image.alt}
          fill
          unoptimized
          sizes="(max-width: 639px) 84vw, (max-width: 1023px) 55vw, 30vw"
          className={
            isCover
              ? `object-cover ${feature.imagePosition === "top" ? "object-top" : "object-center"}`
              : "translate-y-[12%] scale-[1.15] object-contain object-center"
          }
        />
      )}

      {isManagement && <div className="absolute inset-0 bg-black/10" />}
      {isShipping && <div className="absolute inset-0 bg-black/15" />}

      {isCover && (
        <div className="absolute inset-x-0 top-0 h-[130px] bg-[linear-gradient(180deg,rgba(16,43,28,0.75)_0%,rgba(28,142,113,0)_100%)]" />
      )}

      {isPhone && (
        <div className="absolute left-[95px] top-[298px] z-[5] h-[181.87px] w-[220px] overflow-hidden rounded-[14.08px] bg-[#eaf7ee] shadow-[0_2.35px_2.35px_rgba(0,0,0,0.15)] lg:left-[143px] lg:top-[412px]">
          <div className="pointer-events-none absolute -left-[60px] -top-[390px] h-[153px] w-[153px] rounded-full bg-[#e8f1fd]/80 blur-[88px]" />
          <div className="pointer-events-none absolute left-[144px] top-[29px] h-[153px] w-[153px] rounded-full bg-[#e8f1fd]/80 blur-[88px]" />
          <div className="pointer-events-none absolute left-[144px] -top-[195px] h-[153px] w-[153px] rounded-full bg-[#e8f1fd]/80 blur-[88px]" />
          <div className="pointer-events-none absolute -left-[60px] top-[120px] h-[153px] w-[153px] rounded-full bg-[#e8f1fd]/80 blur-[88px]" />

          <div className="relative flex h-[42.08px] w-[220px] items-start justify-between pb-[4.69px] pl-[9.39px] pr-[9.39px] pt-[9.39px] text-[#102b1c]">
            <div className="flex h-7 w-[163.84px] items-center gap-[7.04px]">
              <svg aria-hidden="true" viewBox="0 0 14 14" className="h-3.5 w-3.5 shrink-0 fill-none stroke-[#91a699] stroke-[1.4]">
                <path d="m8.7 2.7-4.3 4.3 4.3 4.3" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <div className="flex h-7 w-[142.8px] items-center gap-[7.04px]">
                <div className="relative h-7 w-7 shrink-0">
                  <Image src="/images/physician.webp" alt="" fill unoptimized sizes="28px" className="rounded-full object-cover" />
                  <span className="absolute left-[22.49px] top-[22.61px] h-[5px] w-[5px] rounded-full border-[0.5px] border-white bg-[#009269]" />
                </div>
                <div className="flex h-[25.35px] w-[57px] flex-col justify-center gap-[2.35px]">
                  <span className="h-3 whitespace-nowrap text-[8.21px] font-medium leading-[11.73px] text-[#111111]">Dr. Helena Fox</span>
                  <span className="h-[11px] text-[7.04px] leading-[10.56px] text-[#00774d]">Online</span>
                </div>
              </div>
            </div>
            <div className="flex h-3.5 w-[37.39px] items-center justify-end gap-[9.39px] pt-px">
              <svg aria-hidden="true" viewBox="0 0 14 14" className="h-3.5 w-3.5 fill-none stroke-[#102b1c] stroke-[1.25]">
                <path d="M4.1 2.2 5.6 4.8 4.5 6c.7 1.5 1.8 2.6 3.4 3.4l1.2-1.1 2.7 1.5-.2 1.7c-.1.5-.6.8-1.1.8-4.8-.3-8.5-4-8.8-8.8 0-.5.3-1 .8-1.1l1.6-.2Z" strokeLinejoin="round" />
              </svg>
              <svg aria-hidden="true" viewBox="0 0 14 14" className="h-3.5 w-3.5 fill-none stroke-[#102b1c] stroke-[1.25]">
                <rect x="1.4" y="3" width="8.1" height="8" rx="1.5" />
                <path d="m9.5 5 3-1.5v7L9.5 9" strokeLinejoin="round" />
              </svg>
            </div>
          </div>

          <div className="relative flex h-[17.39px] w-[220px] items-center gap-[14.08px] px-[9.39px] py-[4.69px]">
            <span className="h-0 flex-1 border-t-[0.5px] border-[#cddcd3]" />
            <span className="h-2 w-[23px] text-center text-[8px] leading-2 text-[#3b3b3c]">Today</span>
            <span className="h-0 flex-1 border-t-[0.5px] border-[#cddcd3]" />
          </div>
          <div className="relative flex h-[119px] w-[220px] flex-col gap-[7.04px] pb-[9.39px] pl-[9.39px] pr-[9.39px] pt-[4.69px]">
            <div className="flex h-[44.35px] w-[201.23px] items-end gap-[7.04px]">
              <span className="relative h-[18.77px] w-[18.77px] shrink-0 rounded-full bg-white">
                <Image src="/images/physician.webp" alt="" fill unoptimized sizes="19px" className="rounded-full object-cover" />
                <span className="absolute left-[13.61px] top-[13.11px] h-[5px] w-[5px] rounded-full border-[0.5px] border-white bg-[#009269]" />
              </span>
              <div className="relative h-[44.35px] w-[175.41px] rounded-[8px] bg-white/60 p-[6px] text-[#69706c]">
                <div className="flex h-[20.35px] w-[163.41px] flex-col gap-[2.35px]">
                  <span className="h-2 text-[8px] leading-2 text-[#292b2a]">Dr. Helena Fox</span>
                  <span className="h-[10px] whitespace-nowrap text-[8px] leading-[1.24]">Hello! How are you feeling today?</span>
                </div>
                <span className="absolute bottom-[6px] right-[6px] h-[10px] w-[35px] text-right text-[8px] leading-[1.24] text-[#3b3b3c]">10:00 AM</span>
              </div>
            </div>
            <div className="flex h-11 w-[201.23px] justify-end">
              <div className="flex h-11 w-[175.41px] flex-col gap-[2px] rounded-[8px] bg-[#102b1c] p-[6px] text-white">
                <span className="h-5 w-[163.41px] text-[8px] leading-[1.24]">
                  I&apos;m feeling fine, thank you! Just want to<br />follow up on my recent tests.
                </span>
                <span className="flex h-[10px] w-[163.41px] items-center justify-end gap-[2.35px]">
                  <svg aria-hidden="true" viewBox="0 0 12 12" className="h-[11.73px] w-[11.73px] fill-none stroke-white stroke-[0.88]">
                    <path d="m1.3 6.2 2 2 3.4-4" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="m4.6 7.9.8.8 5.2-5.4" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <span className="h-[10px] w-[35px] text-right text-[8px] leading-[1.24] text-white">10:00 AM</span>
                </span>
              </div>
            </div>
          </div>
        </div>
      )}

      <h3
        className={`absolute z-10 text-center text-2xl font-medium leading-[1.16] sm:text-[28px] lg:top-8 lg:text-[32px] ${isManagement ? "left-6 right-4 top-8 text-white" : isMedication ? "left-6 right-4 top-8 text-[#102b1c]" : isShipping ? "left-6 right-4 top-8 text-white lg:left-5 lg:right-auto lg:h-[74px] lg:w-[342px]" : `left-6 right-4 top-8 h-7 sm:inset-x-7 lg:h-auto ${isCover ? "text-white" : "text-[#102b1c]"}`}`}
      >
        {feature.title}
      </h3>
    </li>
  );
}

export function ScheduleCarousel({
  content,
  initialIndex = 0,
}: ScheduleCarouselProps) {
  const viewportRef = useRef<HTMLDivElement>(null);
  const cardRefs = useRef<Array<HTMLLIElement | null>>([]);
  const safeInitialIndex = clampIndex(initialIndex, content.features.length);
  const activeIndexRef = useRef(safeInitialIndex);
  const [position, setPosition] = useState<CarouselPosition>({
    activeIndex: safeInitialIndex,
    canGoBack: safeInitialIndex > 0,
    canGoForward: safeInitialIndex < content.features.length - 1,
  });

  const syncPosition = useCallback(() => {
    const viewport = viewportRef.current;

    if (!viewport || content.features.length === 0) {
      return;
    }

    const scrollLeft = viewport.scrollLeft;
    const maxScroll = Math.max(0, viewport.scrollWidth - viewport.clientWidth);
    let nearestIndex = 0;
    let nearestDistance = Number.POSITIVE_INFINITY;

    cardRefs.current.forEach((card, index) => {
      if (!card) return;

      const distance = Math.abs(getCardOffset(card, viewport) - scrollLeft);
      if (distance < nearestDistance) {
        nearestDistance = distance;
        nearestIndex = index;
      }
    });

    const nextPosition = {
      activeIndex: nearestIndex,
      canGoBack: scrollLeft > edgeTolerance,
      canGoForward: scrollLeft < maxScroll - edgeTolerance,
    };

    activeIndexRef.current = nearestIndex;

    setPosition((current) =>
      current.activeIndex === nextPosition.activeIndex &&
      current.canGoBack === nextPosition.canGoBack &&
      current.canGoForward === nextPosition.canGoForward
        ? current
        : nextPosition,
    );
  }, [content.features.length]);

  const scrollToIndex = useCallback(
    (index: number, behavior?: ScrollBehavior) => {
      const viewport = viewportRef.current;
      const card = cardRefs.current[clampIndex(index, content.features.length)];

      if (!viewport || !card) return;

      const maxScroll = Math.max(0, viewport.scrollWidth - viewport.clientWidth);
      viewport.scrollTo({
        left: Math.min(getCardOffset(card, viewport), maxScroll),
        behavior:
          behavior ??
          (window.matchMedia("(prefers-reduced-motion: reduce)").matches
            ? "auto"
            : "smooth"),
      });
    },
    [content.features.length],
  );

  useEffect(() => {
    const viewport = viewportRef.current;
    if (!viewport) return;

    scrollToIndex(safeInitialIndex, "auto");
    syncPosition();

    const resizeObserver = new ResizeObserver(() => {
      scrollToIndex(activeIndexRef.current, "auto");
      syncPosition();
    });
    resizeObserver.observe(viewport);

    return () => resizeObserver.disconnect();
  }, [safeInitialIndex, scrollToIndex, syncPosition]);

  function goForward() {
    const viewport = viewportRef.current;
    if (!viewport) return;

    const nextIndex = cardRefs.current.findIndex(
      (card) =>
        card !== null &&
        getCardOffset(card, viewport) > viewport.scrollLeft + edgeTolerance,
    );

    if (nextIndex >= 0) scrollToIndex(nextIndex);
  }

  function goBack() {
    const viewport = viewportRef.current;
    if (!viewport) return;

    const previousIndex = cardRefs.current.reduce(
      (match, card, index) =>
        card !== null &&
        getCardOffset(card, viewport) < viewport.scrollLeft - edgeTolerance
          ? index
          : match,
      0,
    );

    scrollToIndex(previousIndex);
  }

  function handleKeyDown(event: KeyboardEvent<HTMLDivElement>) {
    if (event.key === "ArrowRight" && position.canGoForward) {
      event.preventDefault();
      goForward();
    }

    if (event.key === "ArrowLeft" && position.canGoBack) {
      event.preventDefault();
      goBack();
    }

    if (event.key === "Home") {
      event.preventDefault();
      scrollToIndex(0);
    }

    if (event.key === "End") {
      event.preventDefault();
      scrollToIndex(content.features.length - 1);
    }
  }

  if (content.features.length === 0) return null;

  return (
    <section
      aria-labelledby="schedule-title"
      className="mx-auto flex w-full max-w-[1344px] flex-col gap-6 rounded-[32px] px-5 pb-14 sm:gap-12 sm:px-3 sm:py-20 sm:pb-[120px] lg:max-w-[1320px] lg:px-0"
    >
      <div className="flex h-[140px] w-full flex-col gap-3 sm:h-auto sm:flex-row sm:items-end sm:justify-between sm:gap-6 lg:h-32 lg:w-[1320px]">
        <h2
          id="schedule-title"
          className="h-20 w-full text-[32px] font-medium leading-[1.24] text-[#102b1c] sm:h-auto sm:max-w-[570px] sm:text-[52px] lg:h-32 lg:w-[539px]"
        >
          {content.title}
        </h2>

        <div className="flex justify-end">
          <CarouselControls
            canGoBack={position.canGoBack}
            canGoForward={position.canGoForward}
            goBack={goBack}
            goForward={goForward}
          />
        </div>
      </div>

      <div
        ref={viewportRef}
        role="region"
        aria-roledescription="carousel"
        aria-label={content.title}
        tabIndex={0}
        onKeyDown={handleKeyDown}
        onScroll={syncPosition}
        className="w-[calc(100%+20px)] overflow-x-auto overscroll-x-contain rounded-l-2xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-600 focus-visible:ring-offset-4 sm:w-auto sm:rounded-2xl [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        <ul className="flex snap-x snap-mandatory gap-3 sm:gap-6 lg:w-[1600px]">
          {content.features.map((feature, index) => (
            <ScheduleCard
              key={feature.id}
              feature={feature}
              index={index}
              count={content.features.length}
              cardRef={(node) => {
                cardRefs.current[index] = node;
              }}
            />
          ))}
        </ul>
      </div>

      <p className="sr-only" aria-live="polite">
        Showing feature {position.activeIndex + 1} of {content.features.length}
      </p>
    </section>
  );
}
