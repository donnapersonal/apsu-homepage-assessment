import Image from "next/image";

import { SocialMarks } from "@/components/ui/social-marks";
import type { HomePageContent, Testimonial } from "@/types/content";

interface TestimonialsProps {
  content: HomePageContent["testimonials"];
}

function RatingStars({ rating }: { rating: number }) {
  return (
    <div
      aria-label={`${rating} out of 5 stars`}
      className="flex h-6 w-[136px] items-center gap-1"
    >
      {Array.from({ length: rating }, (_, index) => (
        <span key={index} aria-hidden="true" className="flex size-6 items-center justify-center">
          <Image src="/images/star.svg" alt="" width={24} height={24} className="size-6" unoptimized />
        </span>
      ))}
    </div>
  );
}

function TestimonialFooter({
  item,
  tone = "dark",
  socialOffset = "-top-3",
}: {
  item: Testimonial;
  tone?: "dark" | "light";
  socialOffset?: string;
}) {
  const isLight = tone === "light";

  return (
    <div className="flex h-[62px] w-full items-end justify-between gap-0 lg:w-[376px]">
      <div className="flex h-[62px] w-[161px] flex-col gap-1">
        <p className={`h-8 text-xl font-medium leading-[1.6] tracking-[0px] ${isLight ? "text-white" : "text-[#111111]"}`}>
          {item.author}
        </p>
        <p className={`h-[26px] text-base leading-[1.6] tracking-[0px] ${isLight ? "text-white/80" : "text-[#3b3b3c]"}`}>
          {item.location}
        </p>
      </div>
      <div className={`relative ${socialOffset}`}>
        <SocialMarks tone={isLight ? "light" : "dark"} size="testimonial" />
      </div>
    </div>
  );
}

function QuoteCard({ item }: { item: Testimonial }) {
  return (
    <article className="flex h-[400px] w-full flex-col justify-between rounded-xl bg-[#faf9f4] p-6 sm:min-h-[460px] lg:h-[530px] lg:min-h-0 lg:rounded-2xl">
      <div className="flex w-full flex-col gap-4 lg:h-[180px] lg:w-[376px] lg:gap-5">
        <p className="h-7 text-2xl font-medium leading-[1.16] text-[#00774d] lg:h-[37px] lg:text-[32px]">
          {item.program}
        </p>

        <div className="flex flex-col gap-3 lg:gap-3">
          <RatingStars rating={item.rating} />

          <blockquote className="h-[104px] w-full text-base leading-[1.6] tracking-[0px] text-[#3b3b3c] lg:h-[87px] lg:text-lg">
            {item.quote}
          </blockquote>
        </div>
      </div>

      <TestimonialFooter item={item} />
    </article>
  );
}

function ImageCard({ item }: { item: Testimonial & { image: NonNullable<Testimonial["image"]> } }) {
  return (
    <article className="relative h-[400px] overflow-hidden rounded-xl bg-emerald-50 lg:h-[530px] lg:min-h-0 lg:rounded-2xl">
      <Image
        src={item.image.src}
        alt={item.image.alt}
        fill
        sizes="(max-width: 1023px) 100vw, 33vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-evergreen/90 via-transparent to-transparent" />

      <div className="absolute inset-x-0 bottom-0 p-6 text-white lg:h-[110px]">
        <TestimonialFooter item={item} tone="light" socialOffset="-top-1" />
      </div>
    </article>
  );
}

export function Testimonials({ content }: TestimonialsProps) {
  if (content.items.length === 0) return null;

  return (
    <section
      aria-labelledby="testimonials-title"
      className="mx-auto w-full max-w-[351px] sm:max-w-[1384px] sm:px-5 sm:py-24 lg:px-0 lg:py-0"
    >
      <div className="flex flex-col gap-6 rounded-2xl bg-white p-2 sm:gap-10 sm:rounded-[30px] sm:px-8 sm:py-16 lg:h-[930px] lg:gap-0 lg:rounded-[32px] lg:px-8 lg:py-[120px]">
        <div className="flex h-[78px] w-full flex-col items-center gap-3 text-center sm:h-auto sm:gap-4 lg:h-28">
          <h2
            id="testimonials-title"
            className="h-10 w-full text-[32px] font-medium leading-[1.24] tracking-normal text-evergreen sm:h-auto sm:text-[56px] lg:h-16 lg:text-[52px]"
          >
            {content.title}{" "}
            <span className="text-emerald-700">{content.highlightedTitle}</span>
          </h2>
          <p className="h-[26px] text-base leading-[1.6] text-[#3b3b3c] lg:h-8 lg:text-xl">{content.description}</p>
        </div>

        <div className="grid gap-6 sm:mt-10 sm:gap-5 lg:mt-12 lg:grid-cols-3 lg:gap-6">
          {content.items.map((item) =>
            item.image ? (
              <ImageCard
                key={item.id}
                item={{ ...item, image: item.image }}
              />
            ) : (
              <QuoteCard key={item.id} item={item} />
            ),
          )}
        </div>
      </div>
    </section>
  );
}
