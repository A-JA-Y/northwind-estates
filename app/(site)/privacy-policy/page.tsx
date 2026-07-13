import type { Metadata } from "next";
import PageBanner from "@/components/PageBanner";
import { SITE_URL, project } from "@/data/project";

const PAGE_URL = `${SITE_URL}/privacy-policy`;

export const metadata: Metadata = {
  title: "Privacy Policy & Disclaimer | NorthWind Sanctuary",
  description:
    "Privacy policy and disclaimer for the NorthWind Sanctuary marketing website, operated by an authorised channel partner. Read the terms of use and information disclaimer.",
  alternates: { canonical: PAGE_URL },
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <PageBanner
        eyebrow="Legal"
        title="Privacy Policy / Disclaimer"
        subtitle="Please read the following terms before using this website."
      />

      <section className="w-full bg-white py-16 px-6">
        <div className="max-w-3xl mx-auto flex flex-col gap-8 text-sm text-gray-600 leading-relaxed">
          <div>
            <h2 className="text-lg font-semibold text-gray-900 mb-3">Disclaimer</h2>
            <p>
              This is not the official website of {project.developer}. It is
              operated by an authorised channel partner of {project.name} for
              information and marketing purposes only. All trademarks, logos,
              renders, plans and images relating to {project.name} and{" "}
              {project.developer} are the property of the developer and all rights
              in them are reserved by the developer.
            </p>
            <p className="mt-3">
              By using or accessing{" "}
              <span className="font-medium text-gray-800">
                www.northwindsanctuary.in
              </span>{" "}
              you agree with this disclaimer without any limitation. By accessing
              this website, the viewer confirms that the information — including
              the brochure, floor plans, renders and other marketing collateral
              published here — is solely for informational purposes, and that the
              viewer has not relied on this information for making any booking or
              purchase in any project of the developer.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-gray-900 mb-3">Privacy Policy</h2>
            <p>
              We respect your privacy. Information submitted through the enquiry
              forms on this website (such as your name, phone number, and email)
              is used only to respond to your request and to share
              {" "}{project.name}-related information such as the brochure, floor
              plans and site-visit details.
            </p>
            <p className="mt-3">
              We do not sell your personal data to third parties. Data may be
              shared with the developer and with authorised representatives of{" "}
              {project.name} solely for the purpose of assisting you with
              project-related queries. You may ask us to delete your details at
              any time by writing to us through the contact page.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-gray-900 mb-3">
              Accuracy of Information
            </h2>
            <p>
              Project details, plans, area figures, specifications, amenities and
              availability mentioned on this website are indicative, are drawn
              from the developer&rsquo;s brochure, and are subject to change
              without prior notice. Renders and images are artist&rsquo;s
              impressions and are not a legal offering. No prices are published on
              this website — all pricing is shared on request through the enquiry
              form. Users are advised to verify all details, including RERA
              registration particulars, with the authorised sales team before
              taking any decision.
            </p>
          </div>

          <div>
            <h2 className="text-lg font-semibold text-gray-900 mb-3">Contact</h2>
            <p>
              For any queries regarding this website, or to request that your
              details be removed from our records, please visit our{" "}
              <a href="/contact-us" className="text-[#C0A15C] hover:underline">
                Contact Us
              </a>{" "}
              page and submit an enquiry — our team will get back to you.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
