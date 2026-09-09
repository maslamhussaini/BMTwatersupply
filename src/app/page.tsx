import { RequestForm } from "@/components/request-form";
import { RouteLink } from "@/components/navigation";
import { Icon, ServiceVisual } from "@/components/icons";
import { ContactCTA } from "@/components/page-parts";
import { business, pageMetadata, services } from "@/lib/site";

export const metadata = pageMetadata("Water Tanker Supply Dubai", "Professional water supply and tanker delivery in Dubai and the UAE. Request pool, potable, non-potable or bulk water directly from BMT.", "/");

export default function Home() {
  return <>
    <section className="home-hero"><div className="water-contours" aria-hidden="true" /><div className="container hero-grid">
      <div className="hero-copy"><span className="eyebrow light"><span className="status-dot" />DUBAI &amp; UAE · WATER SUPPLY</span>
        <h1>Water where<br />you need it.<br /><em>Service you<br className="desktop-break" /> can count on.</em></h1>
        <p>From your home to your next project. Professional water supply and tanker delivery for residential, commercial and construction needs.</p>
        <div className="hero-actions"><a className="button button-aqua" href={business.phoneHref}><Icon name="phone" />Call BMT</a><RouteLink className="text-link light-link" href="/services">Explore services<Icon name="arrow" /></RouteLink></div>
        <div className="hero-support"><span>Potable &amp; non-potable</span><span>Scheduled or on-call</span></div>
      </div><RequestForm />
    </div></section>
    <section className="section services-preview"><div className="container">
      <div className="section-heading"><div><span className="eyebrow">THE RIGHT WATER. THE RIGHT PURPOSE.</span><h2>Every delivery starts<br />with what you need.</h2></div><RouteLink className="text-link" href="/services">View all services<Icon name="arrow" /></RouteLink></div>
      <div className="preview-grid">{services.slice(0, 3).map((service, index) => <article key={service.id}><RouteLink className="preview-link" href={`/services#${service.id}`}><ServiceVisual kind={service.icon} /><div className="preview-caption"><span>0{index + 1} / {service.category}</span><h3>{service.short}<Icon name="arrow" /></h3></div></RouteLink></article>)}</div>
      <p className="service-footnote">Also here for water removal, construction supply and commercial bulk delivery.</p>
    </div></section>
    <section className="home-about section"><div className="container about-split"><div><span className="eyebrow">A DIRECT LINE TO BMT</span><h2>Less back and forth.<br /><em>More getting it done.</em></h2><RouteLink className="text-link" href="/about">Meet Basma Al Madina<Icon name="arrow" /></RouteLink></div><div className="about-copy"><p>Basma Al Madina Transport LLC is a Dubai-based water supply and tanker delivery company. We keep the conversation direct, with flexible scheduling for everyday and larger requirements.</p><div className="fact-lines"><div><Icon name="pin" /><span>Based in Business Bay, Dubai</span></div><div><Icon name="bulk" /><span>Residential, commercial &amp; construction supply</span></div><div><Icon name="chat" /><span>Call, WhatsApp or email our team directly</span></div></div></div></div></section>
    <section className="section request-process"><div className="container"><div className="section-heading"><div><span className="eyebrow">START WITH A CONVERSATION</span><h2>A simple way to request.</h2></div><RouteLink className="text-link" href="/faq">Questions? Start here<Icon name="arrow" /></RouteLink></div><ol className="process-grid"><li><span>01</span><h3>Tell us what you need.</h3><p>Choose a service and add your location and requirements.</p></li><li><span>02</span><h3>Choose how to connect.</h3><p>Open your request in WhatsApp or your email app.</p></li><li><span>03</span><h3>Send it to BMT.</h3><p>Review your draft and press Send to discuss your delivery with our team.</p></li></ol></div></section><ContactCTA />
  </>;
}
