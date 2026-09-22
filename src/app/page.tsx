import { LocalizedHome } from "@/components/localized-home";
import { getHomePageContent } from "@/lib/content";

export default async function Home() {
  const content = await getHomePageContent();
  return <LocalizedHome baseContent={content} />;
}