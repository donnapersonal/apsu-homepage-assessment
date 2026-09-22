import type { HomePageContent, ImageAsset } from "@/types/content";

const images = {
  vial: {
    src: "/images/tirzepatide-vial.webp",
    alt: "A compounded tirzepatide vial",
    width: 512,
    height: 512,
  },
  weight: {
    src: "/images/woman-weight.webp",
    alt: "A patient smiling after receiving care",
    width: 1185,
    height: 1327,
  },
  birth: {
    src: "/images/woman-birth.webp",
    alt: "A patient standing comfortably at home",
    width: 1457,
    height: 1800,
  },
  sleep: {
    src: "/images/woman-sleep-fixed.png",
    alt: "A patient sitting calmly with her eyes closed",
    width: 1409,
    height: 1800,
  },
  pens: {
    src: "/images/glp1-pens-fixed.png",
    alt: "Semaglutide injection pens",
    width: 628,
    height: 406,
  },
  careTeam: {
    src: "/images/care-team-fixed.png",
    alt: "A clinician coordinating a patient's treatment",
    width: 1800,
    height: 1013,
  },
  shipping: {
    src: "/images/shipping-fixed.png",
    alt: "A courier delivering medication discreetly",
    width: 1200,
    height: 1800,
  },
  video: {
    src: "/images/doctor-video-fixed.png",
    alt: "A physician in a secure video visit",
    width: 1109,
    height: 832,
  },
  testimonial: {
    src: "/images/testimonial-blonde.webp",
    alt: "An Apsu patient sharing their care experience",
    width: 1800,
    height: 1200,
  },
} satisfies Record<string, ImageAsset>;

export const homePageContent = {
  header: {
    primaryAction: { label: "Get started", href: "#weight-loss" },
    secondaryAction: { label: "Login", href: "#login" },
  },
  nav: [
    { id: "weight-loss", label: "Weight Loss", href: "#weight-loss" },
    { id: "birth-control", label: "Birth Control", href: "#birth-control" },
    { id: "sleep", label: "Sleep", href: "#sleep" },
    { id: "contact", label: "Contact Us", href: "#contact" },
  ],
  hero: {
    eyebrow: ["40+ Languages", "US-licensed physicians", "Free expedited shipping"],
    title: "Healthcare that",
    highlightedTitle: "speaks your language.",
    description:
      "Care in the language you think in. US-licensed physicians, AI translates your consultation.",
    primaryAction: { label: "Start a free consultation", href: "#weight-loss" },
    languages: [
      "Español",
      "Tiếng Việt",
      "한국어",
      "Tagalog",
      "English",
      "中文",
      "हिन्दी",
      "Русский",
      "العربية",
      "Français",
      "Português",
    ],
  },
  treatments: [
    {
      id: "weight-loss",
      eyebrow: "Weight management",
      title: "Compounded GLP-1 Semaglutide & Tirzepatide",
      theme: "mint",
      href: "#weight-loss",
      visual: "vial",
      image: images.vial,
    },
    {
      id: "birth-control",
      eyebrow: "Birth control",
      title: "Prescription birth control, delivered discreetly",
      theme: "pink",
      href: "#birth-control",
      visual: "pill",
    },
    {
      id: "sleep",
      eyebrow: "Sleep",
      title: "Non-habit-forming formulations for sensitive sleepers",
      theme: "aqua",
      href: "#sleep",
      visual: "moon",
    },
  ],
  trustSignals: [
    {
      id: "cash-pay",
      label: "Cash-pay, No Insurance Needed",
      icon: "cash-check",
    },
    {
      id: "shipping",
      label: "Discreet Shipping",
      icon: "truck",
    },
    {
      id: "states",
      label: "50 States",
      icon: "map-pin",
    },
    {
      id: "physicians",
      label: "US board-certified MDs",
      icon: "stethoscope",
    },
    {
      id: "assistant",
      label: "24/7 AI Care Assistant",
      icon: "headset",
    },
  ],
  workflow: {
    eyebrow: "How it works",
    title: "Real physicians, AI-amplified.",
    description: "Two layers working together — each doing what they do best.",
    steps: [
      {
        number: "01",
        title: "Human physicians",
        description:
          "They handle diagnosis, prescriptions, and every moment that calls for clinical judgment.",
        bullets: ["Diagnosis and treatment decisions.", "Prescriptions.", "Complex symptom evaluation."],
      },
      {
        number: "02",
        title: "AI care assistant",
        description:
          "It handles language and instant response — so nothing is lost in communication.",
        bullets: ["Real-time translation in every message.", "Answers around the clock."],
      },
    ],
    conclusion: "The AI handles the language. Your physician makes the medical decisions.",
  },
  programs: [
    {
      id: "weight-loss",
      theme: "mint",
      eyebrow: "Weight Loss",
      title: "Lose Weight Your Way.",
      lead: "A plan built around your goals and medical history.",
      detail: "Ongoing physician oversight, transparent pricing, and medication from licensed US pharmacies.",
      benefits: [
        "Same-day doctor visits and prescriptions",
        "Dosage personalized",
        "Shipped from licensed USA pharmacies",
      ],
      price: { amount: 200, cadence: "month", qualifier: "from" },
      cta: { label: "See plans", href: "#medication-plans" },
      image: images.weight,
    },
    {
      id: "birth-control",
      theme: "pink",
      title: "Birth control, without the waiting room.",
      lead:
        "Choose the method that fits your life. A US-licensed physician prescribes online, and your refills arrive automatically.",
      detail: "",
      benefits: [
        "Prescribed online, delivered to your door",
        "Automatic refills, delivered",
        "Plain, discreet packaging",
      ],
      price: { amount: 20, cadence: "month", qualifier: "from" },
      cta: { label: "Start your birth control consult", href: "#contact" },
      image: images.birth,
    },
    {
      id: "sleep",
      theme: "aqua",
      title: "Sleep",
      lead: "Real rest without the dependency.",
      detail: "Non-habit-forming, physician-prescribed care for sensitive sleepers.",
      benefits: [
        "Non-controlled, non-habit-forming options",
        "Matched to your sleep pattern by a physician",
        "No controlled sedatives",
        "Cash-pay, no insurance needed",
      ],
      price: { amount: 20, cadence: "month", qualifier: "from" },
      cta: { label: "Start your sleep consult", href: "#contact" },
      image: images.sleep,
      profile: {
        name: "Olivia Gomes",
        score: 78,
        status: "Normal",
        progress: 89.5,
        progressLabel: "Progress",
        profileLabel: "Your profile",
        completion: 82,
      },
    },
  ],
  medicationPlans: [
    { id: "semaglutide", name: "Compounded Semaglutide", monthlyPrice: 200, image: images.vial, href: "#contact" },
    { id: "tirzepatide", name: "Compounded Tirzepatide", monthlyPrice: 200, image: images.vial, href: "#contact" },
  ],
  schedule: {
    title: "Completely online on your schedule",
    features: [
      {
        id: "support",
        title: "24/7 Provider Support",
        image: images.video,
        presentation: "phone",
      },
      {
        id: "management",
        title: "Easy Treatment Management",
        image: images.careTeam,
        presentation: "cover",
      },
      {
        id: "medication",
        title: "Access to FDA-approved Medication Options",
        image: images.pens,
        presentation: "contained",
      },
      {
        id: "shipping",
        title: "Free Expedited Shipping",
        image: images.shipping,
        presentation: "cover",
        imagePosition: "top",
      },
    ],
  },
  testimonials: {
    title: "Our",
    highlightedTitle: "Success Stories",
    description: "Care that finally made sense.",
    items: [
      {
        id: "maria",
        program: "Weight Loss",
        rating: 5,
        quote:
          "I described my symptoms in my own language and actually felt understood, no translating in my head.",
        author: "Maria R.",
        location: "Houston, TX",
      },
      {
        id: "david",
        program: "Sleep",
        rating: 5,
        quote:
          "Private, simple, and in my language the whole way through. It made getting care feel normal again.",
        author: "David L.",
        location: "Queens, NY",
        image: images.testimonial,
      },
      {
        id: "an",
        program: "Sleep",
        rating: 5,
        quote:
          "Private, simple, and in my language the whole way through. It made getting care feel normal again.",
        author: "An N.",
        location: "San Jose, CA",
      },
    ],
  },
  faqs: {
    eyebrow: "FAQs",
    title: "Frequently Asked Questions",
    description: "Have more questions? Our care team is here to help in your language.",
    items: [
      {
        id: "states",
        question: "What states do you serve in GLP-1 programs?",
        answer: "We are currently able to serve GLP-1 programs in all 50 states.",
      },
      {
        id: "languages",
        question: "Which languages do you support?",
        answer:
          "The care experience supports more than 40 languages. A US-licensed physician remains responsible for all medical decisions.",
      },
      {
        id: "insurance",
        question: "Do I need insurance?",
        answer: "No. Apsu is a cash-pay service, so coverage is not required to begin a consultation.",
      },
      {
        id: "compounded",
        question: "What is compounded medication?",
        answer:
          "A compounded medication is prepared for an individual patient by a licensed pharmacy. Compounded drugs are not FDA-approved and are prescribed only when a clinician decides they are appropriate.",
      },
    ],
  },
  closingCta: {
    title: "Ready for healthcare in your language?",
    details: ["No Appointment Needed", "No Insurance Required"],
    action: { label: "Start free consultations", href: "#weight-loss" },
  },
  footer: {
    tagline: "American medicine, in the language you think in.",
    groups: [
      {
        title: "Products",
        links: [
          { label: "Weight Loss", href: "#weight-loss" },
          { label: "Birth Control", href: "#birth-control" },
          { label: "Sleep", href: "#sleep" },
        ],
      },
      {
        title: "Company",
        links: [
          { label: "About Apsu", href: "#about" },
          { label: "Blogs", href: "#blogs" },
          { label: "FAQs", href: "#faqs" },
          { label: "Contact Us", href: "#contact" },
        ],
      },
      {
        title: "Legal",
        links: [
          { label: "Terms", href: "#terms" },
          { label: "Privacy Policy", href: "#privacy" },
          { label: "Medication Safety Information", href: "#safety" },
        ],
      },
    ],
    medicalDisclaimer:
      "The information on this site is for general educational purposes and is not medical advice. Apsu is a technology platform; medical care is provided by independent, licensed providers, and pharmacy services by licensed pharmacies, who decide whether treatment is appropriate. Payment does not guarantee a prescription. Apsu offers compounded GLP-1 medication, which is prepared by licensed U.S. compounding pharmacies and is not approved or evaluated by the FDA. Apsu does not manufacture medication, and product appearance may differ from images shown. Results vary and are not guaranteed. If this is an emergency, call 911.",
    termsNotice: "By using our services, you agree to our Terms & Conditions.",
    copyright: "© 2026 APSU. All rights reserved.",
  },
} satisfies HomePageContent;
