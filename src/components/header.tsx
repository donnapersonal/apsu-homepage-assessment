"use client";

import { useEffect, useRef, useState } from "react";

import type { LinkAction, NavItem } from "@/types/content";

import { ArrowLink } from "./ui/arrow-link";
import { ApsuLogo } from "./ui/brand";
import { CloseIcon, MenuIcon } from "./ui/icons";

interface HeaderProps {
  nav: readonly NavItem[];
  primaryAction: LinkAction;
  secondaryAction: LinkAction;
}

const navigationLinkStyles = [
  "inline-flex h-9 items-center justify-center rounded-sm px-2 py-1.5 text-[18px] font-normal leading-[1.32] text-[#111111]",
  "transition-colors duration-200 hover:text-emerald-700",
  "focus-visible:outline-none focus-visible:ring-2",
  "focus-visible:ring-emerald-600 focus-visible:ring-offset-4",
  "motion-reduce:transition-none",
].join(" ");

export function Header({
  nav,
  primaryAction,
  secondaryAction,
}: HeaderProps) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function openMobileMenu() {
    const dialog = dialogRef.current;

    if (dialog && !dialog.open) {
      dialog.showModal();
      setIsMenuOpen(true);
    }
  }

  function closeMobileMenu() {
    const dialog = dialogRef.current;

    if (dialog?.open) {
      dialog.close();
    }
  }

  useEffect(() => {
    const desktopMedia = window.matchMedia("(min-width: 1024px)");

    function closeAtDesktop(event: MediaQueryListEvent) {
      if (event.matches && dialogRef.current?.open) {
        dialogRef.current.close();
      }
    }

    desktopMedia.addEventListener("change", closeAtDesktop);

    return () => desktopMedia.removeEventListener("change", closeAtDesktop);
  }, []);

  return (
    <header className="relative z-20 w-full">
      <div className="mx-auto flex h-14 w-full items-center rounded-full border-b-[0.5px] border-black/10 bg-[#faf9f4] py-3 shadow-[0_4px_24.5px_rgba(0,0,0,0.09)] lg:h-[60px] lg:max-w-[1320px] lg:py-1.5">
        <div className="flex h-8 w-full items-center justify-between px-3 lg:h-full lg:pl-6 lg:pr-1.5">
          <a
            href="#top"
            aria-label="Apsu home"
            className="flex h-8 w-[87px] shrink-0 items-center overflow-hidden rounded-sm lg:w-[287px]"
          >
            <ApsuLogo className="block h-8 w-[87px] shrink-0 text-[#102b1c]" />
          </a>

          <nav
            aria-label="Primary navigation"
            className="hidden h-9 w-[481px] shrink-0 items-center gap-4 lg:flex"
          >
            {nav.map((item) => (
              <a
                key={item.id}
                href={item.href}
                className={`${navigationLinkStyles} whitespace-nowrap`}
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="hidden h-12 w-[293px] shrink-0 items-center gap-4 lg:flex">
            <ArrowLink
              {...primaryAction}
              showArrow={false}
              className="h-12 min-h-0 w-[165px] px-8 py-3 text-[18px] font-medium leading-[1.32] tracking-normal"
            />
            <ArrowLink
              {...secondaryAction}
              variant="outline"
              showArrow={false}
              className="h-12 min-h-0 w-28 px-8 py-3 text-[18px] font-medium leading-[1.32] tracking-normal"
            />
          </div>

          <button
            type="button"
            aria-label="Open navigation menu"
            aria-haspopup="dialog"
            aria-expanded={isMenuOpen}
            aria-controls="mobile-navigation"
            onClick={openMobileMenu}
            className="ml-auto grid size-8 shrink-0 place-items-center rounded-full text-evergreen transition-colors duration-200 hover:bg-emerald-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-600 focus-visible:ring-offset-2 motion-reduce:transition-none lg:hidden"
          >
            <MenuIcon className="size-8" />
          </button>
        </div>
      </div>
      <dialog
        ref={dialogRef}
        id="mobile-navigation"
        aria-labelledby="mobile-navigation-title"
        onClose={() => setIsMenuOpen(false)}
        className={[
          "fixed inset-0 z-50 m-0",
          "h-auto min-h-0 max-h-none",
          "w-full max-w-none",
          "bg-[#faf9f4] p-3 text-ink",
          "backdrop:bg-evergreen/20",
          "lg:hidden",
        ].join(" ")}
      >
        <div className="flex h-full min-h-0 flex-col rounded-2xl bg-white px-2 pb-3 pt-3">
          <div className="flex h-11 shrink-0 items-start justify-between border-b border-[#cddcd3] pb-3 pl-3">
            <a
              href="#top"
              aria-label="Apsu home"
              onClick={closeMobileMenu}
              className="block h-8 w-[87px] shrink-0 rounded-sm text-[#102b1c] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-600 focus-visible:ring-offset-4"
            >
              <ApsuLogo className="block h-8 w-[87px]" />
            </a>

            <button
              type="button"
              aria-label="Close navigation menu"
              onClick={closeMobileMenu}
              className="grid size-8 shrink-0 place-items-center rounded-full text-[#25314c] transition-colors duration-200 hover:bg-emerald-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-600 focus-visible:ring-offset-2 motion-reduce:transition-none"
            >
              <CloseIcon className="size-[28.67px] text-[#25314c]" />
            </button>
          </div>

          <h2 id="mobile-navigation-title" className="sr-only">
            Navigation menu
          </h2>

          <div className="flex h-[400px] w-full shrink-0 flex-col items-center gap-14 rounded-[32px] pt-14">
            <nav
              aria-label="Mobile navigation"
              className="grid h-44 w-[143px] gap-2 text-center"
            >
              {nav.map((item) => (
                <a
                  key={item.id}
                  href={item.href}
                  onClick={closeMobileMenu}
                  className={`${navigationLinkStyles} !h-[38px] !w-fit justify-self-center !px-2 !py-1.5 !text-[20px] !font-medium !leading-[1.32]`}
                >
                  {item.label}
                </a>
              ))}
            </nav>

            <div className="grid h-28 w-full gap-4">
              <ArrowLink
                {...primaryAction}
                showArrow={false}
                onClick={closeMobileMenu}
                className="h-12 min-h-0 w-full px-8 py-3 text-base font-medium leading-[1.24] tracking-normal"
              />
              <ArrowLink
                {...secondaryAction}
                variant="outline"
                showArrow={false}
                onClick={closeMobileMenu}
                className="h-12 min-h-0 w-full px-8 py-3 text-base font-medium leading-[1.24] tracking-normal"
              />
            </div>
          </div>
        </div>
      </dialog>
    </header>
  );
}
