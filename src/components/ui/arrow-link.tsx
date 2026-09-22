import type { MouseEventHandler } from "react";
import Image from "next/image";

import type { LinkAction } from "@/types/content";

import { ArrowRightIcon, CtaArrowIcon } from "./icons";

type ArrowLinkVariant = "dark" | "light" | "outline";

interface ArrowLinkProps extends LinkAction {
  variant?: ArrowLinkVariant;
  className?: string;
  showArrow?: boolean;
  arrowIcon?: "default" | "cta" | "cta-dark";
  size?: "default" | "large" | "compact" | "program" | "birth-control" | "medication";
  onClick?: MouseEventHandler<HTMLAnchorElement>;
}

const variantStyles: Record<ArrowLinkVariant, string> = {
  dark:
    "bg-evergreen text-white hover:bg-[#0d4a2d] active:translate-y-px",
  light:
    "bg-white text-neutral-900 hover:bg-neutral-50 active:translate-y-px",
  outline:
    "border border-evergreen bg-transparent text-evergreen hover:bg-emerald-50 active:translate-y-px",
};

export function ArrowLink({
  label,
  href,
  ariaLabel,
  variant = "dark",
  className = "",
  showArrow = true,
  arrowIcon = "default",
  size = "default",
  onClick,
}: ArrowLinkProps) {
  const isLarge = size === "large";
  const isCompact = size === "compact";
  const isProgram = size === "program";
  const isBirthControl = size === "birth-control";
  const isMedication = size === "medication";

  return (
    <a
      href={href}
      aria-label={ariaLabel ?? label}
      onClick={onClick}
      className={[
        `group inline-flex items-center rounded-full font-medium ${isProgram || isBirthControl || isMedication ? "justify-between" : "justify-center"}`,
        isLarge
          ? "h-14 gap-2 py-0 pl-8 pr-2 text-lg leading-6"
          : isProgram
            ? "h-12 gap-2 py-2 pl-6 pr-2 text-lg leading-[1.32] xl:h-14 xl:py-0 xl:pl-8 xl:leading-6"
          : isBirthControl
            ? "h-12 gap-1 py-2 pl-6 pr-2 text-base leading-[1.24] xl:h-14 xl:gap-2 xl:py-0 xl:pl-8 xl:text-lg xl:leading-6"
          : isMedication
            ? "h-12 gap-2 py-2 pl-6 pr-2 text-lg leading-[1.32]"
          : isCompact
            ? "h-12 gap-2 py-2 pl-6 pr-2 text-base leading-[1.24]"
            : "min-h-12 gap-3 px-5 text-[15px] tracking-[-0.01em]",
        "transition duration-200 motion-reduce:transition-none",
        "focus-visible:outline-none focus-visible:ring-2",
        "focus-visible:ring-emerald-600 focus-visible:ring-offset-2",
        variantStyles[variant],
        className,
      ].join(" ")}
    >
      <span
        className={
          isLarge
            ? "w-[87px] shrink-0 whitespace-nowrap"
          : isProgram
              ? "shrink-0 whitespace-nowrap"
            : isBirthControl
              ? "shrink-0 whitespace-nowrap"
            : isMedication
              ? "shrink-0 whitespace-nowrap"
            : isCompact
              ? "w-[77px] shrink-0 whitespace-nowrap"
              : undefined
        }
      >
        {label}
      </span>

      {showArrow && variant !== "outline" && (
        <span
          aria-hidden="true"
          className={[
            `grid shrink-0 place-items-center ${isLarge ? "size-10" : isProgram || isBirthControl ? "size-8 xl:size-10" : "size-8"}`,
            "transition-transform duration-200",
            "group-hover:translate-x-0.5",
            "motion-reduce:transform-none motion-reduce:transition-none",
          ].join(" ")}
        >
          {arrowIcon === "cta-dark" ? (
            <Image
              src="/images/arrow-right-circle.svg"
              alt=""
              width={32}
              height={32}
              className="size-8 shrink-0"
            />
          ) : arrowIcon === "cta" ? (
            <CtaArrowIcon
              className={`${isLarge ? "size-10" : "size-8"} text-[#102b1c]`}
            />
          ) : (
            <span
              className={[
                "grid place-items-center rounded-full",
                isLarge
                  ? "size-[33.33px]"
                  : isProgram
                    ? "size-[26.67px] xl:size-[33.33px]"
                  : isMedication
                    ? "size-[26.67px]"
                  : isCompact
                    ? "size-[26.67px]"
                    : "size-8",
                variant === "dark"
                  ? `bg-white ${isCompact ? "text-[#102b1c]" : "text-evergreen"}`
                  : "bg-[#111111] text-white",
              ].join(" ")}
            >
              <ArrowRightIcon
                className={
                  isLarge
                    ? "size-7"
                    : isProgram
                      ? "size-[23px] xl:size-7"
                    : isMedication
                      ? "size-[23px]"
                      : isCompact
                        ? "size-[23px]"
                        : "size-5"
                }
              />
            </span>
          )}
        </span>
      )}
    </a>
  );
}
