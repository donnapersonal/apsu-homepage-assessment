import { homePageContent } from "@/data/home";
import type { HomePageContent } from "@/types/content";
// import { localizeHomePageContent, type SiteLocale } from "@/i18n/locales";

/**
 * Data boundary for the future CMS/API. 
 * The page depends on the contract, not the mock source.
 */
// export async function getHomePageContent(locale: SiteLocale = "en"): Promise<HomePageContent> {
//   return localizeHomePageContent(homePageContent, locale);
// }
export async function getHomePageContent(): Promise<HomePageContent> {
  return homePageContent;
}