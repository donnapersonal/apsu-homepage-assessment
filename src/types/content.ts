export type Theme = "mint" | "pink" | "aqua" | "cream" | "forest";

export interface ImageAsset {
  src: `/${string}`;
  alt: string;
  width: number;
  height: number;
}

export interface LinkAction {
  label: string;
  href: `#${string}` | `/${string}`;
  ariaLabel?: string;
}

export interface NavItem extends LinkAction {
  id: string;
}

export interface TreatmentCategory {
  id: "weight-loss" | "birth-control" | "sleep";
  eyebrow: string;
  title: string;
  theme: Exclude<Theme, "cream" | "forest">;
  href: `#${string}`;
  visual: "vial" | "pill" | "moon";
  image?: ImageAsset;
}

export interface WorkflowStep {
  number: `0${1 | 2}`;
  title: string;
  description: string;
  bullets: readonly string[];
}

export interface CareProgram {
  id: "weight-loss" | "birth-control" | "sleep";
  theme: Exclude<Theme, "cream" | "forest">;
  eyebrow?: string;
  title: string;
  lead: string;
  detail: string;
  benefits: readonly string[];
  price: {
    amount: number;
    cadence: string;
    qualifier: string;
  };
  cta: LinkAction;
  image: ImageAsset;
  profile?: {
    name: string;
    score: number;
    status: string;
    progress: number;
    progressLabel: string;
    profileLabel: string;
    completion: number;
  };
}

export interface MedicationPlan {
  id: string;
  name: string;
  monthlyPrice: number;
  image: ImageAsset;
  href: `#${string}`;
}

export interface ScheduleFeature {
  id: string;
  title: string;
  image: ImageAsset;
  presentation: "phone" | "contained" | "cover";
  imagePosition?: "center" | "top";
}

export interface Testimonial {
  id: string;
  program: string;
  rating: 5;
  quote: string;
  author: string;
  location: string;
  image?: ImageAsset;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export interface FooterGroup {
  title: string;
  links: readonly LinkAction[];
}

export type TrustSignalIcon =
  | "cash-check"
  | "truck"
  | "map-pin"
  | "stethoscope"
  | "headset";

export interface TrustSignal {
  id: string;
  label: string;
  icon: TrustSignalIcon;
}

export interface HomePageContent {
  header: {
    primaryAction: LinkAction;
    secondaryAction: LinkAction;
  };
  nav: readonly NavItem[];
  hero: {
    eyebrow: readonly string[];
    title: string;
    highlightedTitle: string;
    description: string;
    primaryAction: LinkAction;
    languages: readonly string[];
  };
  treatments: readonly TreatmentCategory[];
  trustSignals: readonly TrustSignal[];
  workflow: {
    eyebrow: string;
    title: string;
    description: string;
    steps: readonly WorkflowStep[];
    conclusion: string;
  };
  programs: readonly CareProgram[];
  medicationPlans: readonly MedicationPlan[];
  schedule: {
    title: string;
    features: readonly ScheduleFeature[];
  };
  testimonials: {
    title: string;
    highlightedTitle: string;
    description: string;
    items: readonly Testimonial[];
  };
  faqs: {
    eyebrow: string;
    title: string;
    description: string;
    items: readonly FaqItem[];
  };
  closingCta: {
    title: string;
    details: readonly string[];
    action: LinkAction;
  };
  footer: {
    tagline: string;
    groups: readonly FooterGroup[];
    medicalDisclaimer: string;
    termsNotice: string;
    copyright: string;
  };
}
