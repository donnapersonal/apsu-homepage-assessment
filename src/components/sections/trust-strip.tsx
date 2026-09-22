import {
  CashCheckIcon,
  HeadsetIcon,
  MapPinIcon,
  StethoscopeIcon,
  TruckIcon,
} from "@/components/ui/icons";
import type { HomePageContent } from "@/types/content";

interface TrustStripProps {
  items: HomePageContent["trustSignals"];
}

const trustIcons = {
  "cash-check": CashCheckIcon,
  truck: TruckIcon,
  "map-pin": MapPinIcon,
  stethoscope: StethoscopeIcon,
  headset: HeadsetIcon,
} as const;

export function TrustStrip({ items }: TrustStripProps) {
  const renderItems = (isDuplicate = false) =>
    items.map((item) => {
      const Icon = trustIcons[item.icon];

      return (
        <li
          key={`${isDuplicate ? "duplicate-" : ""}${item.id}`}
          className="flex shrink-0 items-center justify-center gap-2 whitespace-nowrap text-sm font-normal leading-[1.6] text-white lg:text-[18px]"
        >
          <Icon className="size-6 shrink-0" />
          <span>{item.label}</span>
        </li>
      );
    });

  return (
    <section
      aria-label="Apsu service highlights"
      className="mt-8 h-16 overflow-hidden bg-[#102b1c] text-white shadow-[0_4px_21.6px_rgba(2,29,23,0.06)] sm:mt-10 lg:mt-16 lg:h-[69px]"
    >
      <div className="group flex h-full w-full items-center overflow-hidden" role="presentation">
        <div className="flex h-full w-[2068px] shrink-0 animate-[trust-marquee_28s_linear_infinite] group-hover:[animation-play-state:paused] group-focus-within:[animation-play-state:paused] motion-reduce:animate-none lg:w-[2692px]">
          <ul className="flex h-full w-[1034px] shrink-0 items-center gap-8 pl-5 pr-3 lg:w-[1346px] lg:gap-14">
            {renderItems()}
          </ul>
          <ul aria-hidden="true" className="flex h-full w-[1034px] shrink-0 items-center gap-8 pl-5 pr-3 lg:w-[1346px] lg:gap-14">
            {renderItems(true)}
          </ul>
        </div>
      </div>
    </section>
  );
}
