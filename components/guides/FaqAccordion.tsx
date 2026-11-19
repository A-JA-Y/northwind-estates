export type Faq = { question: string; answer: string };

// Native <details> accordion: works without JavaScript and keeps every answer
// in the HTML for crawlers. The same array feeds the FAQPage JSON-LD.
export default function FaqAccordion({ faqs }: { faqs: Faq[] }) {
  return (
    <div className="divide-y divide-[#DCD6C2] rounded-xl border border-[#DCD6C2] bg-white">
      {faqs.map((faq, i) => (
        <details key={faq.question} className="group px-5 md:px-6" open={i === 0}>
          <summary className="flex cursor-pointer list-none items-start justify-between gap-4 py-5 text-left font-semibold text-gray-900 [&::-webkit-details-marker]:hidden">
            <span>
              <span className="text-[#C0A15C] mr-2">{i + 1}.</span>
              {faq.question}
            </span>
            <span
              aria-hidden="true"
              className="mt-0.5 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full border border-[#C0A15C] text-[#C0A15C] transition-transform duration-200 group-open:rotate-45"
            >
              +
            </span>
          </summary>
          <p className="pb-5 pr-8 text-[15px] leading-relaxed text-gray-700">{faq.answer}</p>
        </details>
      ))}
    </div>
  );
}

export function faqSchema(faqs: Faq[]) {
  return {
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  };
}
