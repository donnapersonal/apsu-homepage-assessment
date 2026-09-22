interface SocialMarksProps {
  tone?: "dark" | "light" | "muted";
  includeFacebook?: boolean;
  size?: "default" | "testimonial" | "footer";
}

const toneStyles = {
  dark: "bg-evergreen text-white",
  light: "bg-white text-evergreen",
  muted: "bg-white/10 text-white/75",
} as const;

function InstagramMark() {
  return (
    <span className="grid size-6 place-items-center">
      <svg viewBox="0.75 0.75 18 18" fill="none" className="!size-[18px]">
        <path
          d="M0.75 9.75C0.75 5.50736 0.75 3.38604 2.06802 2.06802C3.38604 0.75 5.50736 0.75 9.75 0.75C13.9926 0.75 16.114 0.75 17.432 2.06802C18.75 3.38604 18.75 5.50736 18.75 9.75C18.75 13.9926 18.75 16.114 17.432 17.432C16.114 18.75 13.9926 18.75 9.75 18.75C5.50736 18.75 3.38604 18.75 2.06802 17.432C0.75 16.114 0.75 13.9926 0.75 9.75Z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M13.75 9.75C13.75 11.9591 11.9591 13.75 9.75 13.75C7.54086 13.75 5.75 11.9591 5.75 9.75C5.75 7.54086 7.54086 5.75 9.75 5.75C11.9591 5.75 13.75 7.54086 13.75 9.75Z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M15.125 4.5H15M15.25 4.5C15.25 4.63808 15.138 4.75 15 4.75C14.8619 4.75 14.75 4.63808 14.75 4.5C14.75 4.36193 14.8619 4.25 15 4.25C15.138 4.25 15.25 4.36193 15.25 4.5Z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </span>
  );
}

function XMark() {
  return (
    <span className="grid size-6 place-items-center">
      <svg
        viewBox="0 0 20 20"
        fill="none"
        className="!size-[18px]"
      >
        <path
          d="M0.75 18.75L8.2984 11.2016M11.2016 8.2984L18.75 18.75H13.75L8.2984 11.2016L0.75 0.75H5.75L11.2016 8.2984ZM18.75 0.75L11.2016 8.2984"
          stroke="currentColor"
          strokeWidth="1.5"
          vectorEffect="non-scaling-stroke"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </span>
  );
}

function FacebookMark() {
  return (
    <span className="grid size-6 place-items-center">
      <svg
        viewBox="0 0 16 22"
        fill="none"
        className="!h-5 !w-3.5"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M1.93182 9.0833C0.95406 9.0833 0.75 9.2752 0.75 10.1944V11.8611C0.75 12.7804 0.95406 12.9722 1.93182 12.9722H4.29545V19.6389C4.29545 20.5581 4.49951 20.75 5.47727 20.75H7.8409C8.8187 20.75 9.0227 20.5581 9.0227 19.6389V12.9722H11.6767C12.4183 12.9722 12.6094 12.8367 12.8131 12.1664L13.3196 10.4997C13.6685 9.3514 13.4535 9.0833 12.1832 9.0833H9.0227V6.30556C9.0227 5.69191 9.5518 5.19444 10.2045 5.19444H13.5682C14.5459 5.19444 14.75 5.00259 14.75 4.08333V1.86111C14.75 0.94185 14.5459 0.75 13.5682 0.75H10.2045C6.941 0.75 4.29545 3.23731 4.29545 6.30556V9.0833H1.93182Z"
          stroke="currentColor"
          strokeWidth="1.5"
          vectorEffect="non-scaling-stroke"
          strokeLinejoin="round"
        />
      </svg>
    </span>
  );
}

function LinkedInMark() {
  return (
    <span className="grid size-6 place-items-center">
      <svg
        viewBox="0 0 20 19"
        fill="none"
        className="!h-[19px] !w-5"
      >
        <path
          d="M0.292293 19H5.25193V5.95799H0.292293V19ZM1.41463 7.08032H4.12959V17.8776H1.41463V7.08032ZM2.77213 0C1.24355 0 0 1.24358 0 2.77213C0 4.30067 1.24355 5.5443 2.77213 5.5443C4.30071 5.5443 5.5443 4.30071 5.5443 2.77213C5.5443 1.24355 4.30067 0 2.77213 0ZM1.12233 2.77213C1.12233 1.86244 1.8624 1.12233 2.77213 1.12233C3.68186 1.12233 4.42196 1.8624 4.42196 2.77213C4.42196 3.68186 3.68186 4.42196 2.77213 4.42196C1.8624 4.42196 1.12233 3.68182 1.12233 2.77213ZM19.1425 10.0533C18.966 7.51478 16.8485 5.55859 14.2233 5.55859C13.0491 5.55859 11.9407 5.96682 11.0673 6.69117V5.95791H6.31496V18.9999H11.2746V11.867C11.2746 11.0631 11.9286 10.4091 12.7325 10.4091C13.5364 10.4091 14.1904 11.0631 14.1904 11.8673L14.1952 19H19.1545V10.0654L19.1425 10.0533ZM10.1523 17.8777H7.4373V7.08028H9.94493V8.68324L10.843 8.6884L11.0098 8.42937C11.715 7.33453 12.9163 6.68096 14.2233 6.68096C16.3122 6.68096 17.9848 8.27475 18.0311 10.3093L18.0322 17.8777H15.3168L15.3128 11.867C15.3128 10.4442 14.1553 9.28672 12.7325 9.28672C11.3098 9.28672 10.1523 10.4442 10.1523 11.867V17.8777Z"
          fill="currentColor"
        />
      </svg>
    </span>
  );
}

export function SocialMarks({
  tone = "dark",
  includeFacebook = false,
  size = "default",
}: SocialMarksProps) {
  const isTestimonial = size === "testimonial";
  const isFooter = size === "footer";
  const toneClass = isFooter
    ? "bg-[#173a26] text-[#faf9f4]"
    : isTestimonial && tone === "dark"
      ? "bg-[#102b1c] text-white"
      : toneStyles[tone];
  const markStyles = `grid place-items-center rounded-full font-semibold ${
    isTestimonial
      ? "size-9 p-1 text-sm [&_svg]:size-[18px]"
      : isFooter
        ? "size-9 text-base [&_svg]:size-6"
        : "size-8 text-xs"
  } ${toneClass}`;

  return (
    <div
      aria-hidden="true"
      className={`flex gap-2 ${
        isTestimonial ? "h-9 w-[124px]" : isFooter ? "h-9 w-[168px]" : ""
      }`}
    >
      <span className={markStyles}>
        <XMark />
      </span>
      {includeFacebook && (
        <span className={markStyles}>
          <FacebookMark />
        </span>
      )}
      <span className={markStyles}>
        <InstagramMark />
      </span>
      <span className={markStyles}>
        <LinkedInMark />
      </span>
    </div>
  );
}
