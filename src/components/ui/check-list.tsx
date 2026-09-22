import Image from "next/image";

import { CheckIcon } from "./icons";

interface CheckListProps {
  items: readonly string[];
  className?: string;
  size?: "default" | "large";
  iconVariant?: "default" | "check-circle" | "compact-check-circle";
}

export function CheckList({
  items,
  className = "",
  size = "default",
  iconVariant = "default",
}: CheckListProps) {
  const isLarge = size === "large";
  const usesCheckCircle = iconVariant === "check-circle";
  const usesCompactCheckCircle = iconVariant === "compact-check-circle";

  return (
    <ul
      className={`${usesCompactCheckCircle ? "space-y-1 xl:space-y-2" : isLarge ? "space-y-2" : "space-y-2.5"} ${className}`}
    >
      {items.map((item) => (
        <li
          key={item}
          className={
            usesCompactCheckCircle
              ? "flex min-h-[26px] items-start gap-2 text-base font-normal leading-[1.6] text-[#3b3b3c] xl:min-h-8 xl:text-xl"
              : usesCheckCircle
                ? "flex min-h-[26px] items-start gap-2 text-base font-normal leading-[1.6] text-[#3b3b3c] lg:min-h-8 lg:text-xl"
              : isLarge
                ? "flex items-start gap-2 text-[15px] leading-6 text-[#3b3b3c] sm:text-base xl:min-h-8 xl:text-xl xl:leading-8"
                : "flex items-start gap-2.5 text-[15px] leading-6 text-neutral-700 sm:text-base"
          }
        >
          {usesCheckCircle || usesCompactCheckCircle ? (
            <Image
              src="/images/check-circle.svg"
              alt=""
              aria-hidden="true"
              width={usesCompactCheckCircle ? 22 : 24}
              height={usesCompactCheckCircle ? 22 : 24}
              className={
                usesCompactCheckCircle
                  ? "mt-0.5 size-[22px] shrink-0 xl:mt-1 xl:size-6"
                  : "mt-px size-6 shrink-0 lg:mt-1"
              }
            />
          ) : (
            <CheckIcon
              className={`${isLarge ? "mt-0.5 size-5 xl:mt-1 xl:size-6" : "mt-0.5 size-5"} shrink-0 text-emerald-600`}
            />
          )}
          <span className={isLarge ? "min-w-0 flex-1" : undefined}>{item}</span>
        </li>
      ))}
    </ul>
  );
}
