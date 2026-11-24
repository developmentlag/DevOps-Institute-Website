import PageEndMap from "@/components/PageEndMap";
import PageFaqs from "@/components/PageFaqs";
import { KeyFactsSection } from "@/components/PageFacts";

export default function PageEndContent({ items, idPrefix }) {
  return (
    <>
      <KeyFactsSection />
      <PageEndMap />
      <PageFaqs items={items} idPrefix={idPrefix} />
    </>
  );
}
