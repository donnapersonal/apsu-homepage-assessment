import { SocialMarks } from "@/components/ui/social-marks";
import type { HomePageContent } from "@/types/content";

interface FooterProps {
  content: HomePageContent["footer"];
}

type FooterGroup = HomePageContent["footer"]["groups"][number];

const footerLinkStyles = [
  "block rounded-sm text-[16px] font-normal leading-none tracking-normal text-[#faf9f4] transition-colors duration-200 lg:whitespace-nowrap",
  "hover:text-white focus-visible:outline-none focus-visible:ring-2",
  "focus-visible:ring-white focus-visible:ring-offset-4",
  "focus-visible:ring-offset-[#102b1c] motion-reduce:transition-none",
].join(" ");

function FooterBrand({ tagline }: { tagline: string }) {
  return (
    <div className="flex h-[146px] w-full flex-col gap-4 lg:h-auto lg:w-[424px]">
      <a
        href="#top"
        aria-label="Back to the top of the Apsu homepage"
        className="block h-[82px] w-[228px] max-w-full overflow-hidden rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-4 focus-visible:ring-offset-[#102b1c] lg:h-[83px]"
      >
        <span className="block whitespace-nowrap text-[103px] font-medium leading-[0.805] tracking-[-0.105em] text-[#faf9f4]">
          Apsu
        </span>
      </a>

      <p className="h-12 w-full text-[18px] font-normal leading-[1.32] tracking-normal text-[#faf9f4] lg:h-auto lg:max-w-[424px]">
        {tagline}
      </p>
    </div>
  );
}

function FooterLinkGroup({ group }: { group: FooterGroup }) {
  return (
    <nav
      aria-label={`${group.title} links`}
      className="flex w-fit min-w-[117px] flex-col gap-4"
    >
      <h2 className="min-h-6 text-[18px] font-normal leading-[1.32] tracking-normal text-white">
        {group.title}
      </h2>

      <ul className="grid w-fit min-w-[107px] gap-3">
        {group.links.map((link) => (
          <li key={link.label}>
            <a href={link.href} className={footerLinkStyles}>
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

function FooterLegalNotice({
  medicalDisclaimer,
  termsNotice,
}: {
  medicalDisclaimer: string;
  termsNotice: string;
}) {
  return (
    <div className="flex w-full max-w-[1320px] flex-col gap-6 border-b border-[#cddcd3] pb-8 text-[18px] font-normal leading-[1.6] tracking-normal text-[#faf9f4]">
      <p>{medicalDisclaimer}</p>
      <p>{termsNotice}</p>
    </div>
  );
}

function FooterMeta({ copyright }: { copyright: string }) {
  return (
    <div className="flex w-full flex-col gap-10 sm:flex-row sm:items-center sm:justify-between sm:gap-6">
      <SocialMarks tone="muted" includeFacebook size="footer" />

      <p className="text-base font-normal leading-[1.6] tracking-normal text-[#faf9f4]">
        {copyright}
      </p>
    </div>
  );
}

function FooterWatermark() {
  return (
    <div className="relative -mx-5 mt-10 h-[130px] w-[calc(100%+40px)] flex-none overflow-hidden sm:mx-0 sm:mt-0 sm:h-[340px] sm:w-full lg:-mb-[88px] lg:h-[480px]">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-0 h-full w-full max-w-[1376px] -translate-x-[calc(50%+var(--footer-watermark-x))] bg-[linear-gradient(to_bottom,#faf9f4_0%,#faf9f4_28%,rgba(250,249,244,0)_92%)] [--footer-watermark-x:4px] [--footer-watermark-position:center_calc(100%_+_clamp(8px,_2.8vw,_12px))] sm:[--footer-watermark-x:0px] sm:[--footer-watermark-position:center_bottom] lg:[--footer-watermark-x:16px]"
        style={{
          WebkitMask:
            "url('/images/apsu-cta-vector.svg') var(--footer-watermark-position) / 100% auto no-repeat",
          mask: "url('/images/apsu-cta-vector.svg') var(--footer-watermark-position) / 100% auto no-repeat",
        }}
      />
    </div>
  );
}

export function Footer({ content }: FooterProps) {
  return (
    <footer
      id="contact"
      className="scroll-mt-8 overflow-hidden bg-[#102b1c] text-[#faf9f4] lg:mx-auto lg:max-w-[1440px]"
    >
      <div className="mx-auto flex w-full flex-col px-5 pt-10 lg:px-8 lg:pt-[120px]">
        <div className="flex flex-col gap-8 lg:min-h-[488px] lg:flex-none">
          <div className="flex w-full flex-col gap-10 lg:grid lg:min-h-[167px] lg:grid-cols-[424px_minmax(0,1fr)] lg:gap-0 lg:pb-5">
            <FooterBrand tagline={content.tagline} />

            <div className="flex flex-col items-start gap-6 lg:ml-auto lg:grid lg:w-full lg:max-w-[724px] lg:grid-cols-3 lg:gap-10 xl:grid-cols-[117px_117px_minmax(0,1fr)] xl:gap-x-[128px]">
              {content.groups.map((group) => (
                <FooterLinkGroup key={group.title} group={group} />
              ))}
            </div>
          </div>

          <FooterLegalNotice
            medicalDisclaimer={content.medicalDisclaimer}
            termsNotice={content.termsNotice}
          />

          <FooterMeta copyright={content.copyright} />
        </div>

        <FooterWatermark />
      </div>
    </footer>
  );
}
