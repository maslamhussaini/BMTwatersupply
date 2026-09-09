"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

const faqs = [
  {
    question: "What type of water supply do you provide?",
    answer:
      "Basma Al Madina Transport LLC provides potable (sweet) water, non-potable (salt) water, swimming pool water, and bulk water removal services across Dubai and the UAE.",
  },
  {
    question: "Do you provide swimming pool water?",
    answer:
      "Yes. We deliver clean, balanced swimming pool water suitable for filling new pools or topping up existing ones. Our team ensures the water meets the standards required for pool use.",
  },
  {
    question: "Do you provide potable / sweet water?",
    answer:
      "Yes. We supply potable (sweet) drinking-quality water for residential, commercial and villa requirements. The water is suitable for drinking, cooking and all household uses.",
  },
  {
    question: "Do you provide non-potable / salt water?",
    answer:
      "Yes. We supply non-potable (salt) water for construction sites, dust suppression, cleaning, and other industrial or site-specific uses where potable water is not required.",
  },
  {
    question: "Do you provide water removal / tank emptying?",
    answer:
      "Yes. We offer water removal and tank emptying services for swimming pools, overhead tanks, underground tanks and construction sites. Our team arrives with the appropriate equipment to complete the job efficiently.",
  },
  {
    question: "Can you supply construction sites?",
    answer:
      "Yes. We regularly supply both potable and non-potable water to construction sites across Dubai. Bulk deliveries can be arranged on a scheduled or on-call basis depending on your project requirements.",
  },
  {
    question: "How can I request a delivery?",
    answer:
      "You can request a delivery by calling us directly at +971 55 331 1977 or +971 50 464 3456, sending a message on WhatsApp, or filling out the quote request form on this page.",
  },
  {
    question: "How can I contact BMT?",
    answer:
      "You can reach Basma Al Madina Transport LLC by phone at +971 55 331 1977 or +971 50 464 3456, by email at Fk7550358@gmail.com, or through the WhatsApp link provided on this page. Our office is located at Office 402, Crystal Tower, M Hotel by Millennium, Business Bay, Dubai.",
  },
];

const services = [
  {
    title: "Swimming Pool Water Supply",
    description:
      "Clean, balanced water delivery for new pool fills and top-ups. Reliable supply to keep your pool ready for use.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-7 h-7">
        <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z" />
      </svg>
    ),
  },
  {
    title: "Sweet / Potable Water Supply",
    description:
      "High-quality drinking water delivered to your door. Suitable for residential, villa and commercial daily use.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-7 h-7">
        <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z" />
        <path d="M12 6v6l4 2" />
      </svg>
    ),
  },
  {
    title: "Salt / Non-Potable Water Supply",
    description:
      "Non-potable water for construction, cleaning and dust suppression. Cost-effective supply for site operations.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-7 h-7">
        <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z" />
        <path d="M12 6v6" />
      </svg>
    ),
  },
  {
    title: "Water Removal / Tank Emptying",
    description:
      "Efficient tank emptying and water removal for pools, overhead tanks, underground tanks and construction sites.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-7 h-7">
        <path d="M12 2v20M2 12h20" />
        <path d="M8 8l-4-4M16 8l4-4M8 16l-4 4M16 16l4 4" />
      </svg>
    ),
  },
  {
    title: "Construction Site Water Supply",
    description:
      "Scheduled or on-call water delivery for construction projects. Potable and non-potable options available.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-7 h-7">
        <path d="M3 21h18M5 21V7l8-4v18M19 21V11l-6-3" />
      </svg>
    ),
  },
  {
    title: "Commercial / Bulk Water Delivery",
    description:
      "Bulk water delivery for hotels, compounds, commercial properties and large-scale requirements. Flexible scheduling.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-7 h-7">
        <rect x="2" y="7" width="20" height="14" rx="2" />
        <path d="M16 7V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v2" />
      </svg>
    ),
  },
];

const clientTypes = [
  { title: "Villas", description: "Regular potable water supply for residential villas and households." },
  { title: "Swimming Pools", description: "Clean water for pool filling, top-ups and maintenance." },
  { title: "Apartments", description: "Water supply solutions for residential towers and apartment complexes." },
  { title: "Hotels", description: "Bulk water delivery for hospitality operations and guest requirements." },
  { title: "Commercial Properties", description: "Reliable supply for offices, retail spaces and commercial buildings." },
  { title: "Construction Sites", description: "Scheduled potable and non-potable water for construction projects." },
  { title: "Industrial Requirements", description: "Non-potable water for processing, cleaning and site operations." },
  { title: "Compounds", description: "Bulk water supply for residential compounds and community facilities." },
];

const trustPoints = [
  { title: "Fast Response", description: "Quick dispatch and timely delivery across Dubai." },
  { title: "Clean Water", description: "Quality water supply maintained to required standards." },
  { title: "Reliable Delivery", description: "Dependable service when you need it most." },
  { title: "Professional Service", description: "Experienced team and well-maintained tankers." },
];

export default function HomePage() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    service: "",
    location: "",
    message: "",
  });

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("revealed");
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
    );
    document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone || !formData.service) {
      alert("Please fill in all required fields (Name, Phone, Service Required).");
      return;
    }
    const message = `New Quote Request:%0A%0AName: ${encodeURIComponent(formData.name)}%0APhone: ${encodeURIComponent(formData.phone)}%0AService: ${encodeURIComponent(formData.service)}%0ALocation: ${encodeURIComponent(formData.location)}%0AMessage: ${encodeURIComponent(formData.message)}`;
    window.open(`https://wa.me/971553311977?text=${message}`, "_blank");
  };

  return (
    <div className="min-h-screen bg-white font-body text-slate pb-20 md:pb-0" suppressHydrationWarning>
      {/* Navbar */}
      <header
        className={`fixed w-full z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white/95 backdrop-blur-md shadow-sm border-b border-slate-100"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link href="#home" className="flex items-center gap-3 flex-shrink-0">
              <Image src="/bmt-logo.svg" alt="BMT Logo" width={96} height={32} className="h-9 w-auto" priority loading="eager" />
              <div className={`flex flex-col ${scrolled ? "text-navy" : "text-white"}`}>
                <span className="text-base font-bold tracking-tight leading-none">
                  Basma Al Madina
                </span>
                <span className="text-[10px] font-semibold tracking-[0.2em] uppercase opacity-70">
                  Water Supply
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              <Link href="#services" className={`nav-link text-sm ${scrolled ? "text-slate-600" : "text-white"}`}>
                Services
              </Link>
              <Link href="#about" className={`nav-link text-sm ${scrolled ? "text-slate-600" : "text-white"}`}>
                About
              </Link>
              <Link href="#faq" className={`nav-link text-sm ${scrolled ? "text-slate-600" : "text-white"}`}>
                FAQ
              </Link>
              <Link href="#contact" className={`nav-link text-sm ${scrolled ? "text-slate-600" : "text-white"}`}>
                Contact
              </Link>
              <a href="tel:+971553311977" className={`btn btn-navy text-sm py-2.5 px-5 ${!scrolled ? "!text-white" : ""}`}>
                Call Now
              </a>
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className={`md:hidden p-2 ${scrolled ? "text-navy" : "text-white"}`}
              aria-label="Toggle menu"
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                {mobileOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </nav>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="md:hidden bg-white border-b border-slate-100 shadow-lg">
            <div className="px-4 py-6 space-y-1">
              <Link href="#services" className="block text-navy font-medium py-3 border-b border-slate-50" onClick={() => setMobileOpen(false)}>
                Services
              </Link>
              <Link href="#about" className="block text-slate-600 font-medium py-3 border-b border-slate-50" onClick={() => setMobileOpen(false)}>
                About
              </Link>
              <Link href="#faq" className="block text-slate-600 font-medium py-3 border-b border-slate-50" onClick={() => setMobileOpen(false)}>
                FAQ
              </Link>
              <Link href="#contact" className="block text-slate-600 font-medium py-3 border-b border-slate-50" onClick={() => setMobileOpen(false)}>
                Contact
              </Link>
              <a href="tel:+971553311977" className="btn btn-navy w-full justify-center mt-4">
                Call Now
              </a>
            </div>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section id="home" className="relative bg-navy text-white overflow-hidden">
        {/* Background layers */}
        <div className="absolute inset-0 bg-gradient-to-br from-navy via-navy-light to-primary/90" />
        <div className="absolute inset-0 opacity-[0.04]" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />

        {/* Water-inspired geometric accent */}
        <div className="absolute -right-32 -top-32 w-[500px] h-[500px] rounded-full border border-white/[0.06] opacity-40" />
        <div className="absolute -right-20 -top-20 w-[400px] h-[400px] rounded-full border border-white/[0.04] opacity-30" />
        <div className="absolute -left-20 bottom-20 w-[300px] h-[300px] rounded-full border border-accent/10 opacity-40" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-24 md:pt-40 md:pb-32">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 mb-8 reveal">
              <span className="w-1.5 h-1.5 bg-accent rounded-full relative">
                <span className="absolute inset-0 bg-accent rounded-full animate-ping opacity-60" />
              </span>
              <span className="text-[11px] font-bold tracking-[0.25em] uppercase text-white/80">
                Dubai &amp; UAE
              </span>
            </div>

            <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.05] mb-8 tracking-tight reveal stagger-1">
              Water Tanker Delivery,
              <br />
              <span className="text-accent">When You Need It.</span>
            </h1>

            <p className="text-lg md:text-xl text-slate-300 mb-12 max-w-2xl leading-relaxed reveal stagger-2">
              Professional water supply services for residential, commercial, construction and industrial requirements across Dubai and the UAE.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 reveal stagger-3">
              <a href="tel:+971553311977" className="btn btn-primary text-base px-8 py-4 justify-center">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="w-5 h-5">
                  <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
                </svg>
                Call Now
              </a>
              <a
                href="https://wa.me/971553311977"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-whatsapp text-base px-8 py-4 justify-center"
              >
                <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                WhatsApp Us
              </a>
            </div>
          </div>
        </div>

        {/* Clean geometric transition */}
        <div className="absolute bottom-0 left-0 right-0">
          <div className="h-24 bg-gradient-to-t from-white via-white/80 to-transparent" />
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 reveal">
            <span className="section-label">Our Services</span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-navy mb-5">
              Comprehensive Water Supply Solutions
            </h2>
            <p className="text-lg text-slate-500 max-w-2xl mx-auto leading-relaxed">
              From swimming pools to construction sites, we deliver the right water, in the right quantity, at the right time.
            </p>
          </div>

          {/* Core Services — 3 featured cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {services.slice(0, 3).map((service, index) => (
              <div
                key={index}
                className={`reveal stagger-${index + 1} group relative bg-white border border-slate-200 rounded-2xl p-8 md:p-10 text-center hover:border-primary/30 hover:shadow-lg transition-all duration-300`}
              >
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-6 text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold text-navy mb-3">
                  {service.title}
                </h3>
                <p className="text-slate-500 leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>

          {/* Divider + CTA */}
          <div className="flex items-center justify-center reveal">
            <div className="h-px bg-slate-200 flex-1 max-w-xs" />
            <span className="px-6 text-xs font-bold tracking-[0.2em] uppercase text-slate-400">
              More Services
            </span>
            <div className="h-px bg-slate-200 flex-1 max-w-xs" />
          </div>

          {/* Additional Services — compact row */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
            {services.slice(3, 6).map((service, index) => (
              <div
                key={index + 3}
                className={`reveal stagger-${index + 4} flex items-start gap-4 group`}
              >
                <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-slate-50 border border-slate-100 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white group-hover:border-primary transition-all duration-300">
                  {service.icon}
                </div>
                <div>
                  <h3 className="text-base font-bold text-navy mb-1">
                    {service.title}
                  </h3>
                  <p className="text-sm text-slate-500 leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-14 reveal">
            <a
              href="https://wa.me/971553311977"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-secondary font-semibold text-sm hover:text-primary transition-colors"
            >
              Request a service
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* Capacity / Delivery Options */}
      <section id="capacity" className="py-20 md:py-28 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 reveal">
            <span className="section-label">Delivery Options</span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-navy mb-5">
              Flexible Water Delivery for Every Need
            </h2>
            <p className="text-lg text-slate-500 max-w-2xl mx-auto leading-relaxed">
              Whether you need a small top-up or a bulk supply, BMT arranges the right delivery for your requirements.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-8 md:p-10 reveal stagger-1 group hover:shadow-lg transition-shadow duration-300">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-6 text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6">
                  <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-navy mb-3">Residential &amp; Small Scale</h3>
              <p className="text-slate-500 leading-relaxed">
                Ideal for villas, apartments, small pools and household top-ups. Quick dispatch for everyday needs.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 md:p-10 reveal stagger-2 group hover:shadow-lg transition-shadow duration-300">
              <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center mb-6 text-secondary group-hover:bg-secondary group-hover:text-white transition-colors duration-300">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6">
                  <rect x="2" y="7" width="20" height="14" rx="2" />
                  <path d="M16 7V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v2" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-navy mb-3">Commercial &amp; Standard Supply</h3>
              <p className="text-slate-500 leading-relaxed">
                Perfect for hotels, compounds, commercial properties and large pools. Scheduled or on-call delivery.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-8 md:p-10 reveal stagger-3 group hover:shadow-lg transition-shadow duration-300">
              <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mb-6 text-accent group-hover:bg-accent group-hover:text-white transition-colors duration-300">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-6 h-6">
                  <path d="M3 21h18M5 21V7l8-4v18M19 21V11l-6-3" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-navy mb-3">Construction &amp; Bulk Projects</h3>
              <p className="text-slate-500 leading-relaxed">
                Designed for construction sites, industrial requirements and large-scale projects requiring regular supply.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Who We Serve */}
      <section id="clients" className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 reveal">
            <span className="section-label">Who We Serve</span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-navy mb-5">
              Trusted Across Every Sector
            </h2>
            <p className="text-lg text-slate-500 max-w-2xl mx-auto leading-relaxed">
              From individual villas to large construction projects, BMT delivers water where it is needed most.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {clientTypes.map((client, index) => (
              <div
                key={index}
                className={`reveal stagger-${(index % 4) + 1} group p-6 rounded-xl border border-slate-100 hover:border-secondary/20 hover:shadow-md transition-all duration-300 bg-white`}
              >
                <div className="w-10 h-10 rounded-lg bg-slate-50 flex items-center justify-center mb-4 text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5">
                    <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z" />
                  </svg>
                </div>
                <h3 className="text-base font-bold text-navy mb-1.5">
                  {client.title}
                </h3>
                <p className="text-sm text-slate-500 leading-relaxed">
                  {client.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust / Value Props */}
      <section className="py-20 md:py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 reveal">
            <span className="section-label">Why BMT</span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-navy mb-5">
              Built on Reliability
            </h2>
            <p className="text-lg text-slate-500 max-w-2xl mx-auto leading-relaxed">
              Basma Al Madina Transport LLC is structured around responsive delivery, clean water standards, and transparent service across Dubai and the UAE.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
            {trustPoints.map((point, index) => (
              <div key={index} className={`reveal stagger-${index + 1} text-center`}>
                <div className="w-14 h-14 rounded-full bg-white border border-slate-200 flex items-center justify-center mx-auto mb-5">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="w-6 h-6 text-primary">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-navy mb-2">{point.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{point.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div className="reveal">
              <span className="section-label">About BMT</span>
              <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-navy mb-6 leading-tight">
                Professional Water Supply &amp; Tanker Delivery
              </h2>
              <p className="text-lg text-slate-500 mb-6 leading-relaxed">
                Basma Al Madina Transport LLC (BMT) is a Dubai-based water supply and tanker delivery company focused on reliable, responsive service for residential, commercial and construction water requirements across the UAE.
              </p>
              <p className="text-slate-500 mb-8 leading-relaxed">
                We understand that timely water delivery is critical. Whether it is a swimming pool fill, a construction site supply, or a bulk commercial delivery, our team is structured to respond quickly and deliver safely. Our commitment is to make water delivery simple, dependable and transparent for every customer.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="tel:+971553311977" className="btn btn-navy justify-center">
                  Call Now
                </a>
                <a href="https://wa.me/971553311977" target="_blank" rel="noopener noreferrer" className="btn-whatsapp justify-center">
                  WhatsApp Us
                </a>
              </div>
            </div>

            <div className="reveal stagger-2">
              <div className="bg-gradient-to-br from-navy to-primary rounded-2xl p-8 md:p-10 text-white">
                <h3 className="font-display text-2xl font-bold mb-8">Why Choose BMT?</h3>
                <ul className="space-y-5">
                  {[
                    "Responsive dispatch across Dubai and the UAE",
                    "Clean, quality water maintained to required standards",
                    "Transparent pricing with no hidden charges",
                    "Flexible scheduling — scheduled or on-call",
                    "Professional team and maintained tankers",
                    "Direct communication — call, WhatsApp or form",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-4">
                      <svg className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-white/90 text-[15px] leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-20 md:py-28 bg-slate-50">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 reveal">
            <span className="section-label">FAQ</span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-navy mb-5">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-slate-500">
              Quick answers to common questions about BMT water supply services.
            </p>
          </div>

          <div className="space-y-3 reveal">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white rounded-xl border border-slate-100 overflow-hidden"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full flex items-center justify-between p-5 md:p-6 text-left font-semibold text-navy hover:bg-slate-50 transition-colors"
                  aria-expanded={openFaq === index}
                >
                  <span className="pr-4 text-[15px] md:text-base">{faq.question}</span>
                  <span className="text-2xl text-primary flex-shrink-0 transition-transform duration-200" style={{ transform: openFaq === index ? "rotate(45deg)" : "rotate(0deg)" }}>
                    +
                  </span>
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${openFaq === index ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}
                >
                  <div className="px-5 md:px-6 pb-5 md:pb-6 text-slate-500 leading-relaxed text-[15px]">
                    {faq.answer}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact / Quote Section */}
      <section id="contact" className="py-20 md:py-28 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 reveal">
            <span className="section-label">Contact Us</span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-navy mb-5">
              Need Water Delivered?
            </h2>
            <p className="text-lg text-slate-500 max-w-2xl mx-auto leading-relaxed">
              Have a question or need a quote? Reach out to BMT directly or send us your requirements.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Contact Info */}
            <div className="reveal">
              <div className="bg-gradient-to-br from-navy to-primary rounded-2xl p-8 md:p-10 text-white h-full">
                <h3 className="font-display text-2xl font-bold mb-2">
                  Basma Al Madina Transport LLC
                </h3>
                <p className="text-slate-300 mb-8 text-[15px]">
                  Your trusted partner for water supply and tanker delivery in Dubai and the UAE.
                </p>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center flex-shrink-0">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5">
                        <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-xs text-slate-400 mb-1 uppercase tracking-wider font-semibold">Phone</p>
                      <a href="tel:+971553311977" className="text-lg font-semibold hover:text-accent transition-colors block">
                        +971 55 331 1977
                      </a>
                      <a href="tel:+971504643456" className="text-lg font-semibold hover:text-accent transition-colors block">
                        +971 50 464 3456
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center flex-shrink-0">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5">
                        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                        <path d="M22 6l-10 7L2 6" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-xs text-slate-400 mb-1 uppercase tracking-wider font-semibold">Email</p>
                      <a href="mailto:Fk7550358@gmail.com" className="text-lg font-semibold hover:text-accent transition-colors">
                        Fk7550358@gmail.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center flex-shrink-0">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5">
                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                        <circle cx="12" cy="10" r="3" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-xs text-slate-400 mb-1 uppercase tracking-wider font-semibold">Address</p>
                      <p className="text-white/90 leading-relaxed text-[15px]">
                        Office 402, Crystal Tower,
                        <br />
                        M Hotel by Millennium,
                        <br />
                        Business Bay, Dubai, UAE
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-10 pt-8 border-t border-white/15">
                  <p className="text-xs text-slate-400 mb-4 uppercase tracking-wider font-semibold">Or reach us directly:</p>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <a href="tel:+971553311977" className="btn btn-primary justify-center">
                      Call Now
                    </a>
                    <a href="https://wa.me/971553311977" target="_blank" rel="noopener noreferrer" className="btn-whatsapp justify-center">
                      WhatsApp Us
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Quote Form */}
            <div className="reveal stagger-2">
              <div className="bg-white rounded-2xl p-8 md:p-10 border border-slate-100 shadow-sm">
                <h3 className="font-display text-2xl font-bold text-navy mb-2">
                  Request a Quote
                </h3>
                <p className="text-slate-500 mb-8 text-[15px]">
                  Fill out the form and we will get back to you shortly.
                </p>

                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-semibold text-navy mb-1.5">
                        Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        className="input"
                        placeholder="Your full name"
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })}
                        required
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-navy mb-1.5">
                        Phone <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="tel"
                        className="input"
                        placeholder="+971 XX XXX XXXX"
                        value={formData.phone}
                        onChange={(e) =>
                          setFormData({ ...formData, phone: e.target.value })}
                        required
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-sm font-semibold text-navy mb-1.5">
                        Location
                      </label>
                      <select
                        className="input"
                        value={formData.location}
                        onChange={(e) =>
                          setFormData({ ...formData, location: e.target.value })}
                      >
                        <option value="">Select location</option>
                        <option value="Dubai">Dubai</option>
                        <option value="Sharjah">Sharjah</option>
                        <option value="Ajman">Ajman</option>
                        <option value="Abu Dhabi">Abu Dhabi</option>
                        <option value="Other">Other</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-navy mb-1.5">
                        Service Required <span className="text-red-500">*</span>
                      </label>
                      <select
                        className="input"
                        value={formData.service}
                        onChange={(e) =>
                          setFormData({ ...formData, service: e.target.value })}
                        required
                      >
                        <option value="">Select a service</option>
                        <option value="Swimming Pool Water Supply">
                          Swimming Pool Water Supply
                        </option>
                        <option value="Sweet / Potable Water Supply">
                          Sweet / Potable Water Supply
                        </option>
                        <option value="Salt / Non-Potable Water Supply">
                          Salt / Non-Potable Water Supply
                        </option>
                        <option value="Water Removal / Tank Emptying">
                          Water Removal / Tank Emptying
                        </option>
                        <option value="Construction Site Water Supply">
                          Construction Site Water Supply
                        </option>
                        <option value="Commercial / Bulk Water Delivery">
                          Commercial / Bulk Water Delivery
                        </option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-navy mb-1.5">
                      Message <span className="text-slate-400 font-normal">(Optional)</span>
                    </label>
                    <textarea
                      className="input"
                      rows={4}
                      placeholder="Tell us about your requirements..."
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })}
                    />
                  </div>

                  <button type="submit" className="btn-whatsapp w-full justify-center text-base py-3.5">
                    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                    Send via WhatsApp
                  </button>
                </form>

                <div className="mt-6 pt-6 border-t border-slate-100 text-center">
                  <p className="text-sm text-slate-500">
                    Or call us directly:{" "}
                    <a href="tel:+971553311977" className="text-navy font-semibold hover:text-accent transition-colors">
                      +971 55 331 1977
                    </a>{" "}
                    •{" "}
                    <a href="https://wa.me/971553311977" target="_blank" rel="noopener noreferrer" className="text-[#25D366] font-semibold hover:text-[#20bd5a] transition-colors">
                      WhatsApp +971 55 331 1977
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-navy text-white pt-16 pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
            {/* Brand */}
            <div className="lg:col-span-2">
              <div className="flex items-center gap-3 mb-6">
                <Image src="/bmt-logo.svg" alt="BMT Logo" width={96} height={32} className="h-10 w-auto" priority loading="eager" />
                <div>
                  <span className="text-lg font-bold block leading-none">Basma Al Madina</span>
                  <span className="text-[10px] font-semibold tracking-[0.2em] uppercase text-white/70">
                    Water Supply
                  </span>
                </div>
              </div>
              <p className="text-slate-400 mb-6 max-w-md leading-relaxed text-[15px]">
                Basma Al Madina Transport LLC — professional water supply and tanker delivery services across Dubai and the UAE.
              </p>
              <div className="flex items-center gap-3">
                <a href="tel:+971553311977" className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors" aria-label="Call">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5">
                    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
                  </svg>
                </a>
                <a href="https://wa.me/971553311977" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors" aria-label="WhatsApp">
                  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                </a>
                <a href="mailto:Fk7550358@gmail.com" className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors" aria-label="Email">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-5 h-5">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <path d="M22 6l-10 7L2 6" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-sm font-bold uppercase tracking-[0.15em] mb-6 text-slate-300">Quick Links</h4>
              <ul className="space-y-3">
                <li><Link href="#services" className="text-slate-400 hover:text-white transition-colors text-[15px]">Services</Link></li>
                <li><Link href="#about" className="text-slate-400 hover:text-white transition-colors text-[15px]">About</Link></li>
                <li><Link href="#faq" className="text-slate-400 hover:text-white transition-colors text-[15px]">FAQ</Link></li>
                <li><Link href="#contact" className="text-slate-400 hover:text-white transition-colors text-[15px]">Contact</Link></li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-sm font-bold uppercase tracking-[0.15em] mb-6 text-slate-300">Contact Info</h4>
              <ul className="space-y-4 text-slate-400 text-[15px]">
                <li className="flex items-start gap-3">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-4 h-4 flex-shrink-0 mt-0.5">
                    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
                  </svg>
                  <a href="tel:+971553311977" className="hover:text-white transition-colors">
                    +971 55 331 1977
                  </a>
                </li>
                <li className="flex items-start gap-3">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-4 h-4 flex-shrink-0 mt-0.5">
                    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
                  </svg>
                  <a href="tel:+971504643456" className="hover:text-white transition-colors">
                    +971 50 464 3456
                  </a>
                </li>
                <li className="flex items-start gap-3">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-4 h-4 flex-shrink-0 mt-0.5">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <path d="M22 6l-10 7L2 6" />
                  </svg>
                  <a href="mailto:Fk7550358@gmail.com" className="hover:text-white transition-colors">
                    Fk7550358@gmail.com
                  </a>
                </li>
                <li className="flex items-start gap-3">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-4 h-4 flex-shrink-0 mt-0.5">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                  <span>
                    Office 402, Crystal Tower,
                    <br />
                    M Hotel by Millennium,
                    <br />
                    Business Bay, Dubai, UAE
                  </span>
                </li>
              </ul>
            </div>
          </div>

          {/* Bottom bar */}
          <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-slate-500 text-sm">
              &copy; {new Date().getFullYear()} Basma Al Madina Transport LLC. All rights reserved.
            </p>
            <p className="text-slate-600 text-xs">
              Professional Water Supply &amp; Tanker Delivery — Dubai, UAE
            </p>
          </div>
        </div>
      </footer>

      {/* Mobile sticky CTA bar */}
      <div className="fixed bottom-0 left-0 right-0 bg-white/95 backdrop-blur-sm border-t border-slate-200 p-3 flex gap-3 md:hidden z-40">
        <a href="tel:+971553311977" className="flex-1 btn btn-navy justify-center text-sm py-3">
          Call Now
        </a>
        <a href="https://wa.me/971553311977" target="_blank" rel="noopener noreferrer" className="flex-1 btn-whatsapp justify-center text-sm py-3">
          WhatsApp
        </a>
      </div>
    </div>
  );
}
