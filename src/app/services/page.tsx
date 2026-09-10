import { PageIntro, ContactCTA } from "@/components/page-parts";
import { ServiceCard } from "@/components/service-card";
import { business, services, pageMetadata } from "@/lib/site";
export const metadata = pageMetadata("Water Supply Services", "Explore BMT pool water, potable and TSE supply, rain water removal, construction water and commercial bulk delivery services.", "/services");
export default function Services() {
  const structured = { "@context": "https://schema.org", "@type": "ItemList", itemListElement: services.map((service, index) => ({ "@type": "ListItem", position: index + 1, item: { "@type": "Service", name: service.title, description: service.description, url: `${business.url}/services/${service.id}`, provider: { "@id": `${business.url}/#business` } } })) };
  return <><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structured).replace(/</g, "\\u003c") }} /><PageIntro label="OUR SERVICES" title="Water for every requirement.">Pool fills, daily supply, demanding projects. Find the service that fits, then talk directly with BMT.</PageIntro>
    <div className="container service-card-grid service-card-grid-full">{services.map(service => <ServiceCard key={service.id} service={service} />)}</div><ContactCTA /></>;
}
