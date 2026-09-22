import type { HomePageContent } from "@/types/content";

export type SiteLocale =
  | "en"
  | "zh"
  | "es"
  | "vi"
  | "ko"
  | "tl"
  | "hi"
  | "ru"
  | "ar"
  | "fr"
  | "pt";

export const languageOptions = [
  { locale: "es", label: "Español" },
  { locale: "vi", label: "Tiếng Việt" },
  { locale: "ko", label: "한국어" },
  { locale: "tl", label: "Tagalog" },
  { locale: "en", label: "English" },
  { locale: "zh", label: "中文" },
  { locale: "hi", label: "हिन्दी" },
  { locale: "ru", label: "Русский" },
  { locale: "ar", label: "العربية" },
  { locale: "fr", label: "Français" },
  { locale: "pt", label: "Português" },
] as const satisfies readonly { locale: SiteLocale; label: string }[];

const zh: Record<string, string> = {
  "Get started": "开始使用",
  Login: "登录",
  "Weight Loss": "体重管理",
  "Birth Control": "避孕服务",
  Sleep: "睡眠健康",
  "Contact Us": "联系我们",
  "40+ Languages": "支持 40 多种语言",
  "US-licensed physicians": "美国执业医师",
  "Free expedited shipping": "免费加急配送",
  "Healthcare that": "懂你语言的",
  "speaks your language.": "医疗服务。",
  "Care in the language you think in. US-licensed physicians, AI translates your consultation.":
    "用你最熟悉的语言获得医疗服务。由美国执业医师诊疗，AI 为问诊提供实时翻译。",
  "Start a free consultation": "开始免费咨询",
  "Weight management": "体重管理",
  "Compounded GLP-1 Semaglutide & Tirzepatide": "复配 GLP-1 司美格鲁肽与替尔泊肽",
  "Birth control": "避孕服务",
  "Prescription birth control, delivered discreetly": "处方避孕药，私密配送",
  "Non-habit-forming formulations for sensitive sleepers": "为敏感睡眠人群提供非成瘾配方",
  "See plans": "查看方案",
  "Cash-pay, No Insurance Needed": "自费服务，无需保险",
  "Discreet Shipping": "私密配送",
  "50 States": "覆盖全美 50 州",
  "US Board Certified MDs": "美国专科认证医生",
  "24/7 AI Care Assistant": "全天候 AI 医疗助手",
  "How it works": "服务方式",
  "Real physicians, AI-amplified.": "真实医生，AI 增强。",
  "Two layers working together — each doing what they do best.": "医生与 AI 协同工作，各自发挥所长。",
  "Human physicians": "人类医生",
  "They handle diagnosis, prescriptions, and every moment that calls for clinical judgment.":
    "医生负责诊断、开具处方以及所有需要临床判断的环节。",
  "Diagnosis and treatment decisions.": "诊断和治疗决策。",
  "Prescriptions.": "开具处方。",
  "Complex symptom evaluation.": "复杂症状评估。",
  "AI care assistant": "AI 医疗助手",
  "It handles language and instant response - so nothing is lost in communication.":
    "AI 负责语言沟通和即时响应，避免信息在交流中遗漏。",
  "Real-time translation in every message.": "每条消息均提供实时翻译。",
  "Answers around the clock.": "全天候即时答复。",
  "The AI handles the language. Your physician makes the medical decisions.":
    "AI 负责语言沟通，医疗决策由医生作出。",
  "Loss Weight Your Way.": "以适合你的方式管理体重。",
  "A plan built around your goals and medical history.": "根据你的目标和病史制定个性化方案。",
  "Same-day doctor visits and prescriptions": "当日医生问诊与处方",
  "Dosage personalized": "个性化剂量",
  "Shipped from licensed USA pharmacies": "由美国持牌药房配送",
  "Birth control, without the waiting room.": "无需候诊的避孕服务。",
  "Choose the method that fits your life. A US-licensed physician prescribes online, and your refills arrive automatically.":
    "选择适合你生活方式的方法。美国执业医师在线开具处方，并自动安排续药配送。",
  "Prescribed online, delivered to your door": "在线开方，送药上门",
  "Automatic refills, delivered": "自动续药并配送",
  "Plain, discreet packaging": "简洁私密包装",
  "Start your birth control consult": "开始避孕咨询",
  "Real rest without the dependency.": "安心入睡，不产生依赖。",
  "Non-habit-forming Physician-prescribed For sensitive sleepers":
    "由医生开具适合敏感睡眠人群的非成瘾方案。",
  "Non-controlled, non-habit-forming options": "非管制、非成瘾选择",
  "Matched to your sleep pattern by a physician": "医生根据睡眠模式匹配方案",
  "No controlled sedatives": "不使用管制镇静药物",
  "Cash-pay, no insurance needed": "自费服务，无需保险",
  "Start your sleep consult": "开始睡眠咨询",
  Normal: "正常",
  Progress: "进度",
  "Your profile": "你的档案",
  from: "起",
  month: "月",
  "Compounded Semaglutide": "复配司美格鲁肽",
  "Compounded Tirzepatide": "复配替尔泊肽",
  "Completely online on your schedule": "全程在线，按你的时间安排",
  "24/7 Provider Support": "全天候医护支持",
  "Easy Manager Treatment": "便捷的治疗管理",
  "Access to FDA-approved Medication Options": "可选择 FDA 批准的药物",
  "Free, Discreet Shipping": "免费私密配送",
  Our: "我们的",
  "Success Stories": "成功案例",
  "Care that finally made sense.": "真正清晰易懂的医疗服务。",
  FAQs: "常见问题",
  "Frequently Asked Questions": "常见问题解答",
  "Have more questions? Our care team is here to help in your language.":
    "还有其他问题？我们的医疗团队会用你的语言提供帮助。",
  "What states do you serve in GLP-1 programs?": "GLP-1 项目覆盖哪些州？",
  "We are currently able to serve GLP-1 programs in all 50 states.": "目前我们可以在全美 50 州提供 GLP-1 项目服务。",
  "Which languages do you support?": "你们支持哪些语言？",
  "Do I need insurance?": "我需要医疗保险吗？",
  "No. Apsu is a cash-pay service, so coverage is not required to begin a consultation.":
    "不需要。Apsu 是自费服务，开始咨询无需保险。",
  "What is compounded medication?": "什么是复配药物？",
  "Ready For Healthcare In Your Language?": "准备好用自己的语言获得医疗服务了吗？",
  "No Appointment Needed": "无需预约",
  "No Insurance Required": "无需保险",
  "Start free consultations": "开始免费咨询",
  Products: "产品",
  Company: "公司",
  Legal: "法律信息",
  "About Apsu": "关于 Apsu",
  Terms: "条款",
  "Privacy Policy": "隐私政策",
  "Medication Safety Information": "用药安全信息",
  "American medicine, in the language you think in.": "用你熟悉的语言，获得美国医疗服务。",
  "The information on this site is for general educational purposes and is not medical advice. Apsu is a technology platform; medical care is provided by independent, licensed providers, and pharmacy services by licensed pharmacies, who decide whether treatment is appropriate. Payment does not guarantee a prescription. Apsu offers compounded GLP-1 medication, which is prepared by licensed U.S. compounding pharmacies and is not approved or evaluated by the FDA. Apsu does not manufacture medication, and product appearance may differ from images shown. Results vary and are not guaranteed. If this is an emergency, call 911.":
    "本网站信息仅用于一般教育目的，并非医疗建议。Apsu 是技术平台；医疗服务由独立持证医疗服务提供者提供，药房服务由持证药房提供，他们会决定治疗是否适合。付款不保证一定获得处方。Apsu 提供复配 GLP-1 药物，该药物由美国持证复配药房配制，未获得 FDA 批准或评估。Apsu 不生产药物，产品外观可能与图片所示不同。效果因人而异，且不作保证。如遇紧急情况，请拨打 911。",
  "By using our services, you agree to our Terms & Conditions.":
    "使用我们的服务即表示你同意我们的条款与条件。",
};

const dictionaries: Partial<Record<SiteLocale, Record<string, string>>> = {
  zh,
};

function translateValue(value: unknown, dictionary: Record<string, string>): unknown {
  if (typeof value === "string") return dictionary[value] ?? value;
  if (Array.isArray(value)) return value.map((item) => translateValue(item, dictionary));
  if (value && typeof value === "object") {
    return Object.fromEntries(
      Object.entries(value).map(([key, item]) => [key, translateValue(item, dictionary)]),
    );
  }
  return value;
}

export function localizeHomePageContent(
  content: HomePageContent,
  locale: SiteLocale,
): HomePageContent {
  const dictionary = dictionaries[locale];
  if (!dictionary) return content;
  return translateValue(content, dictionary) as HomePageContent;
}
