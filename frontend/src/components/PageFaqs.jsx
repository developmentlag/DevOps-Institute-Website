import FaqAccordion from "@/components/FaqAccordion";

export default function PageFaqs({ items, idPrefix }) {
  if (!items || items.length === 0) return null;

  return (
    <section
      id="page-faqs"
      className="mx-auto mt-14 max-w-4xl px-4 sm:px-6 lg:px-8 pb-12"
      data-testid={`${idPrefix}-section`}
    >
      <div className="text-center">
        <span className="inline-flex rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-xs font-bold uppercase tracking-widest text-blue-700">
          Common Questions
        </span>
        <h2 className="mt-3 font-heading text-2xl sm:text-3xl font-bold text-slate-900">
          Frequently Asked Questions
        </h2>
      </div>
      <div className="mt-6">
        <FaqAccordion items={items} idPrefix={idPrefix} />
      </div>
    </section>
  );
}
