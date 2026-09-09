import { PageIntro, ContactCTA } from "@/components/page-parts";
import { RouteLink } from "@/components/navigation";
import { Icon } from "@/components/icons";
import { faqs, pageMetadata } from "@/lib/site";
export const metadata = pageMetadata("Frequently Asked Questions", "Answers to common BMT questions about pool water, potable and non-potable supply, tank emptying, construction supply and requesting a delivery.", "/faq");
export default function FAQ() {
  return <><PageIntro label="A LITTLE CLARITY" title="Before your next delivery.">Straightforward answers about our water supply services and how to get in touch.</PageIntro><section className="section"><div className="container faq-layout"><aside><h2>How can we help?</h2><p>For a question about your location or specific requirements, speak to BMT directly.</p><RouteLink className="text-link" href="/contact">Ask our team<Icon name="arrow" /></RouteLink></aside><div className="faq-list">{faqs.map((faq, index) => <details key={faq.question}><summary><span className="faq-number">0{index + 1}</span>{faq.question}<span className="faq-plus" aria-hidden="true">+</span></summary><p>{faq.answer}</p></details>)}</div></div></section><ContactCTA /></>;
}
