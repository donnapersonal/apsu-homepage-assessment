import { CheckList } from "@/components/ui/check-list";
import type { HomePageContent } from "@/types/content";

interface WorkflowProps {
  content: HomePageContent["workflow"];
}

export function Workflow({ content }: WorkflowProps) {
  const titleParts = content.title.split(", ");
  const hasResponsiveEnglishTitle = titleParts.length === 2;

  return (
    <section
      id="about"
      aria-labelledby="workflow-title"
      className="
        mx-auto flex h-[1220px] w-full scroll-mt-8
        flex-col gap-6 rounded-[32px] px-5 py-14
        lg:h-[1072px] lg:max-w-[1440px]
        lg:gap-12 lg:px-8 lg:py-[120px]
      "
    >
      <header className="flex h-[185px] w-full flex-col gap-4 text-center lg:h-[181px]">
        <p className="h-[21px] w-full text-base font-normal uppercase leading-[1.32] tracking-[2px] text-[#00774d]">
          {content.eyebrow}
        </p>

        <div className="flex h-[148px] w-full flex-col items-center gap-4 lg:h-36">
          <h2
            id="workflow-title"
            className="h-20 w-full text-[32px] font-medium leading-[1.24] tracking-normal text-[#102b1c] lg:h-16 lg:w-[751px] lg:text-[52px]"
          >
            {hasResponsiveEnglishTitle ? (
              <>
                <span>{titleParts[0]},</span>{" "}
                <span className="block lg:inline">{titleParts[1]}</span>
              </>
            ) : (
              content.title
            )}
          </h2>

          <p className="h-[52px] w-full text-base font-normal leading-[1.6] text-[#3b3b3c] lg:h-16 lg:w-[362px] lg:text-xl">
            {content.description}
          </p>
        </div>
      </header>

      <div className="grid h-[833px] w-full gap-8 lg:mx-auto lg:h-[529px] lg:max-w-[1120px] lg:grid-cols-2 lg:gap-6">
        {content.steps.map((step) => (
          <article
            key={step.number}
            className="flex h-[400.5px] min-h-0 flex-col gap-6 overflow-hidden rounded-2xl bg-white px-3 pb-5 pt-4 shadow-[0_4px_21.6px_rgba(2,29,23,0.06)] lg:h-[529px] lg:px-6 lg:pb-[60px] lg:pt-10"
          >
            <span
              aria-hidden="true"
              className="ml-auto h-[62px] min-w-[53px] shrink-0 whitespace-nowrap text-right text-[52px] font-normal leading-[1.2] tracking-normal text-[rgba(33,172,136,0.28)] lg:h-24 lg:min-w-[81px] lg:text-[80px]"
            >
              {step.number}
            </span>

            <div className="flex h-[260px] w-full shrink-0 flex-col gap-8 lg:h-[274px] lg:max-w-[500px]">
              <h3 className="h-10 w-full text-[32px] font-medium leading-[1.24] tracking-normal text-[#102b1c] lg:h-[50px] lg:text-[40px]">
                {step.title}
              </h3>

              <div className="flex h-[188px] w-full flex-col gap-4 lg:h-48">
                <p className="h-[78px] w-full text-base font-normal leading-[1.6] text-[#3b3b3c] lg:h-16 lg:text-xl">
                  {step.description}
                </p>

                <CheckList
                  items={step.bullets}
                  className="h-[94px] lg:h-28"
                  size="large"
                  iconVariant="check-circle"
                />
              </div>
            </div>
          </article>
        ))}
      </div>

      <p className="mx-auto h-[42px] w-full text-center text-base font-medium leading-[1.32] text-[#102b1c] lg:h-[26px] lg:w-[725px] lg:text-xl">
        {content.conclusion}
      </p>
    </section>
  );
}
