"use client";

import { useState } from "react";

import type { HomePageContent } from "@/types/content";

interface FaqProps {
  content: HomePageContent["faqs"];
  initialOpenId?: string | null;
}

type FaqItem = HomePageContent["faqs"]["items"][number];

function resolveInitialOpenId(
  items: HomePageContent["faqs"]["items"],
  initialOpenId: string | null | undefined,
) {
  if (initialOpenId === null) return null;

  if (initialOpenId && items.some((item) => item.id === initialOpenId)) {
    return initialOpenId;
  }

  return items[0]?.id ?? null;
}

function FaqToggleIcon({ isOpen }: { isOpen: boolean }) {
  return (
    <span
      className={`grid size-10 shrink-0 place-items-center rounded-full transition-transform duration-200 lg:size-12 motion-reduce:transition-none ${
        isOpen
          ? "rotate-180 bg-white text-[#2a2a2a]"
          : "border border-[#d7e2dd] bg-white text-[#858586]"
      }`}
    >
      <svg aria-hidden="true" viewBox="0 0 24 24" className="size-6 fill-none">
        <path d="m6 9 6 6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </span>
  );
}

function FaqAccordionItem({
  item,
  isOpen,
  onToggle,
}: {
  item: FaqItem;
  isOpen: boolean;
  onToggle: () => void;
}) {
  const triggerId = `faq-${item.id}-trigger`;
  const panelId = `faq-${item.id}-panel`;

  return (
    <article className="overflow-hidden rounded-xl bg-[#f0f6f3] shadow-[0_4px_12px_rgba(2,34,39,0.08)]">
      <h3>
        <button
          id={triggerId}
          type="button"
          aria-expanded={isOpen}
          aria-controls={panelId}
          onClick={onToggle}
          className={`flex min-h-[84px] w-full items-center justify-between gap-0 p-4 text-left text-xl font-medium leading-[1.16] tracking-[0px] lg:h-[88px] lg:px-6 lg:py-0 lg:text-2xl ${
            isOpen
              ? "border-b border-dashed border-[#b8d9c6] bg-[#587362] text-white"
              : "bg-white text-[#2a2a2a]"
          }`}
        >
          <span className="flex-1">{item.question}</span>
          <FaqToggleIcon isOpen={isOpen} />
        </button>
      </h3>

      <div
        id={panelId}
        role="region"
        aria-labelledby={triggerId}
        aria-hidden={!isOpen}
        inert={!isOpen}
        className={`grid transition-[grid-template-rows] duration-300 ease-out motion-reduce:transition-none ${
          isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
        }`}
      >
        <div className="overflow-hidden">
          <p className="bg-white p-4 text-base leading-[1.6] tracking-[0px] text-[#3b3b3c] lg:min-h-[77px] lg:p-6 lg:text-lg">
            {item.answer}
          </p>
        </div>
      </div>
    </article>
  );
}

export function Faq({ content, initialOpenId }: FaqProps) {
  const defaultOpenId = resolveInitialOpenId(content.items, initialOpenId);
  const [openId, setOpenId] = useState<string | null>(() =>
    defaultOpenId,
  );
  const [firstTitleWord, ...remainingTitleWords] = content.title.split(" ");
  const resolvedOpenId =
    openId === null || content.items.some((item) => item.id === openId)
      ? openId
      : defaultOpenId;

  if (content.items.length === 0) return null;

  return (
    <section
      id="faqs"
      aria-labelledby="faq-title"
      className="mx-auto flex w-full max-w-[351px] scroll-mt-8 flex-col gap-6 px-2 py-14 lg:grid lg:max-w-[1384px] lg:grid-cols-[512px_760px] lg:gap-12 lg:px-8 lg:py-[120px]"
    >
      <div className="flex h-[148px] w-full flex-col gap-4 lg:h-[245px] lg:w-[512px]">
        <p className="hidden h-[21px] w-full text-base font-normal leading-[1.32] tracking-[2px] text-[#00774d] lg:block">
          {content.eyebrow}
        </p>

        <h2
          id="faq-title"
          className="h-20 w-full text-[32px] font-medium leading-[1.24] tracking-[0px] text-[#102b1c] lg:h-32 lg:text-[52px]"
        >
          {remainingTitleWords.length > 0 ? (
            <>
              <span className="block">{firstTitleWord} </span>
              <span className="block">{remainingTitleWords.join(" ")}</span>
            </>
          ) : (
            content.title
          )}
        </h2>
        <p className="h-[52px] w-full text-base leading-[1.6] tracking-[0px] text-[#3b3b3c] lg:h-16 lg:text-xl">
          {content.description}
        </p>
      </div>

      <div className="grid content-start gap-5 lg:w-[760px]">
        {content.items.map((item) => {
          const isOpen = item.id === resolvedOpenId;

          return (
            <FaqAccordionItem
              key={item.id}
              item={item}
              isOpen={isOpen}
              onToggle={() =>
                setOpenId((currentId) =>
                  currentId === item.id ? null : item.id,
                )
              }
            />
          );
        })}
      </div>
    </section>
  );
}
