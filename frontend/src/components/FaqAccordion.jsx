import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

export default function FaqAccordion({ items, idPrefix = "faq" }) {
  return (
    <Accordion type="single" collapsible className="w-full" data-testid={`${idPrefix}-accordion`}>
      {items.map((item, i) => (
        <AccordionItem key={i} value={`item-${i}`} data-testid={`${idPrefix}-accordion-item-${i + 1}`}>
          <AccordionTrigger
            data-testid={`${idPrefix}-accordion-trigger-${i + 1}`}
            className="text-left text-base font-semibold text-slate-900 hover:no-underline"
          >
            {item.q}
          </AccordionTrigger>
          <AccordionContent className="text-slate-600 leading-relaxed">{item.a}</AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  );
}
