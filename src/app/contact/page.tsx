import { ContactDetails } from "@/components/page-parts";
import { RequestForm } from "@/components/request-form";
import { pageMetadata, services } from "@/lib/site";
export const metadata = pageMetadata("Contact & Service Requests", "Contact Basma Al Madina Transport LLC for water delivery. Call, WhatsApp or prepare an email request with your service and location details.", "/contact");
export default async function Contact({ searchParams }: { searchParams: Promise<{ service?: string }> }) {
  const params = await searchParams;
  const service = services.find(s => s.id === params.service);
  return <section className="contact-page"><div className="container contact-grid"><div className="contact-copy"><span className="eyebrow light">CONTACT BMT</span><h1>Your next delivery<br /><em>starts here.</em></h1><p>Have a question or need water supplied? Choose the way you prefer to get in touch.</p><ContactDetails /></div><RequestForm key={service?.id ?? "general"} initialService={service?.title} /></div></section>;
}
