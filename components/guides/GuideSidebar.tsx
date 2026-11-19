import type { ReactNode } from "react";
import { contact } from "@/data/project";
import { EnquireButton, CallButton, WhatsAppButton } from "@/components/guides/GuideCtas";

type TocItem = { id: string; label: string };

type GuideSidebarProps = {
  toc: TocItem[];
  ctaTitle: string;
  ctaBody: ReactNode;
  ctaLabel: string;
};

// Sticky desktop rail: table of contents plus an always-visible enquiry card.
export default function GuideSidebar({ toc, ctaTitle, ctaBody, ctaLabel }: GuideSidebarProps) {
  return (
    <aside className="hidden lg:block">
      <div className="sticky top-28 space-y-6">
        <nav
          aria-label="On this page"
          className="rounded-xl border border-[#DCD6C2] bg-[#F6F4EC] p-5"
        >
          <p className="uppercase text-[11px] tracking-[0.25em] text-[#8A6D2F] mb-3">
            On this page
          </p>
          <ol className="space-y-2 text-sm">
            {toc.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  className="block text-gray-700 hover:text-[#0B3B2C] hover:translate-x-0.5 transition"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ol>
        </nav>

        <div className="rounded-xl bg-[#0B3B2C] p-6 text-white shadow-lg">
          <p className="text-lg font-semibold [font-family:var(--font-work-sans)] mb-2">
            {ctaTitle}
          </p>
          <div className="text-sm text-[#F0E9D6] leading-relaxed mb-5">{ctaBody}</div>
          <div className="flex flex-col gap-2.5">
            <EnquireButton label={ctaLabel} className="w-full" />
            <CallButton
              label={contact.phone}
              variant="ghostLight"
              className="w-full"
            />
            <WhatsAppButton variant="ghostLight" className="w-full" />
          </div>
        </div>
      </div>
    </aside>
  );
}
