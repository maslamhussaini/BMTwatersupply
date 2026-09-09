import { PageIntro, ContactCTA } from "@/components/page-parts";
import { Icon, ServiceVisual } from "@/components/icons";
import { RouteLink } from "@/components/navigation";
import { business, services, pageMetadata } from "@/lib/site";
export const metadata = pageMetadata("Water Supply Services", "Explore BMT pool water, potable and non-potable supply, water removal, construction water and commercial bulk delivery services.", "/services");
export default function Services() {
  const structured = { "@context": "https://schema.org", "@type": "ItemList", itemListElement: services.map((service, index) => ({ "@type": "ListItem", position: index + 1, item: { "@type": "Service", name: service.title, description: service.description, url: `${business.url}/services#${service.id}`, provider: { "@id": `${business.url}/#business` } } })) };
  return <><script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structured).replace(/</g, "\\u003c") }} /><PageIntro label="OUR SERVICES" title="Water for every requirement.">Pool fills, daily supply, demanding projects. Find the service that fits, then talk directly with BMT.</PageIntro>
    <div className="container service-index" aria-label="Service shortcuts">{services.map(s => <a href={`#${s.id}`} key={s.id}>{s.category}<Icon name="arrow" /></a>)}</div>
    <div className="container service-list">{services.map((service, index) => <section className="service-row" id={service.id} key={service.id} aria-labelledby={`${service.id}-title`}><div className="service-art"><ServiceVisual kind={service.icon} /><span className="service-number">0{index + 1}</span></div><div className="service-description"><span className="eyebrow">{service.category}</span><h2 id={`${service.id}-title`}>{service.title}</h2><p>{service.description}</p><p className="service-uses">{service.uses}</p><RouteLink className="text-link" href={`/contact?service=${encodeURIComponent(service.id)}`}>Request this service<Icon name="arrow" /></RouteLink></div></section>)}</div><ContactCTA /></>;
}
