import { business } from "@/lib/site";
import { Brand } from "./brand";
import { Icon } from "./icons";
import { RouteLink } from "./navigation";

export function PageIntro({ label, title, children }: { label: string; title: string; children: React.ReactNode }) {
  return <section className="page-intro"><div className="container"><span className="eyebrow">{label}</span><h1>{title}</h1><p>{children}</p></div></section>;
}
export function ContactCTA() {
   return <section className="contact-cta"><div className="container cta-inner"><div><span className="eyebrow">WATER SUPPLY, MADE SIMPLE</span><h2>Let&apos;s talk about<br />your next delivery.</h2></div><div><RouteLink className="button button-aqua" href="/contact">Request a service<Icon name="arrow" /></RouteLink><a className="cta-phone" href={business.phoneHref}>{business.phone}</a></div></div></section>;
}
export function ContactDetails() {
  return <div className="contact-details">
    <div><Icon name="phone" /><div><h3>Call our team</h3><a href={business.phoneHref}>{business.phone}</a><a href={business.secondaryPhoneHref}>{business.secondaryPhone}</a></div></div>
    <div><Icon name="chat" /><div><h3>WhatsApp</h3><a href={business.whatsapp} target="_blank" rel="noopener noreferrer">Start a conversation <span aria-hidden="true">↗</span></a></div></div>
    <div><Icon name="mail" /><div><h3>Email</h3><a href={`mailto:${business.email}`}>{business.email}</a></div></div>
    <div><Icon name="pin" /><div><h3>Our office</h3><address>{business.address}</address></div></div>
  </div>;
}
export function Footer() {
  return <><footer className="site-footer"><div className="container"><div className="footer-grid">
    <div><RouteLink href="/" aria-label="BMT home"><Brand /></RouteLink><p>Professional water supply &amp; tanker delivery.<br />Dubai and the UAE.</p></div>
    <nav aria-label="Footer navigation"><h2>Explore BMT</h2><RouteLink href="/services">Our services</RouteLink><RouteLink href="/about">About BMT</RouteLink><RouteLink href="/faq">Common questions</RouteLink><RouteLink href="/contact">Request a delivery</RouteLink></nav>
    <div className="footer-contact"><h2>Get in touch</h2><a href={business.phoneHref}>{business.phone}</a><a href={business.secondaryPhoneHref}>{business.secondaryPhone}</a><a href={`mailto:${business.email}`}>{business.email}</a><address>{business.address}</address></div>
  </div><div className="footer-bottom"><span>© {new Date().getFullYear()} {business.name}</span><span>Water for everyday life. Supply for the work ahead.</span></div></div></footer>
    <div className="mobile-cta" aria-label="Quick contact"><a href={business.phoneHref}><Icon name="phone" />Call BMT</a><a href={business.whatsapp} target="_blank" rel="noopener noreferrer"><Icon name="chat" />WhatsApp</a></div>
  </>;
}
