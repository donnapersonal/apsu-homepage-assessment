import Image from "next/image";

import { ArrowLink } from "@/components/ui/arrow-link";
import type { MedicationPlan } from "@/types/content";

interface MedicationPlansProps {
  plans: readonly MedicationPlan[];
}

export function MedicationPlans({ plans }: MedicationPlansProps) {
  return (
    <section
      id="medication-plans"
      aria-labelledby="medication-plans-title"
      className="mx-auto w-full max-w-[1360px] scroll-mt-8 px-5 xl:px-0"
    >
      <h2 id="medication-plans-title" className="sr-only">
        Weight management medication plans
      </h2>

      <div className="grid h-[920px] gap-8 bg-[#f7faf8] xl:h-[553px] xl:grid-cols-2">
        {plans.map((plan) => (
          <article
            key={plan.id}
            className="flex h-[444px] min-h-0 flex-col gap-5 overflow-hidden rounded-2xl bg-white p-6 shadow-[0_4px_12px_rgba(2,31,24,0.06)] xl:h-[553px] xl:gap-8"
          >
            <div className="relative h-[225px] shrink-0 overflow-hidden xl:h-[332px]">
              <Image
                src={plan.image.src}
                alt={plan.image.alt}
                fill
                sizes="(max-width: 1279px) 287px, 432px"
                className="-rotate-[5deg] scale-[1.3] object-contain object-center"
              />
            </div>

            <div className="flex h-[151px] min-h-0 flex-col gap-4 xl:h-[141px] xl:gap-8">
              <h3 className="h-[23px] text-xl font-medium leading-[1.16] text-[#173a26] xl:h-[37px] xl:text-[32px]">
                {plan.name}
              </h3>

              <div className="flex h-28 min-h-0 flex-col items-start gap-3 border-t border-[#afc1b6] pt-3 xl:h-[72px] xl:flex-row xl:items-center xl:justify-between xl:gap-4 xl:pt-6">
                <p
                  aria-label={`Starting at $${plan.monthlyPrice} per month`}
                  className="whitespace-nowrap text-2xl font-medium leading-10 text-[#111111] xl:w-[399px]"
                >
                  From{" "}
                  <span className="text-[32px] leading-[1.24]">
                    ${plan.monthlyPrice}
                  </span>
                  <span>/mo</span>
                </p>

                <ArrowLink
                  label="Get started"
                  href={plan.href}
                  ariaLabel={`Get started with ${plan.name}`}
                  size="medication"
                  className="w-full !bg-[#102b1c] xl:w-[181px] xl:shrink-0"
                />
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
