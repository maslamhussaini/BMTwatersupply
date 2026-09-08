"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

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
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-7 h-7">
        <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z" />
      </svg>
    ),
  },
  {
    title: "Sweet / Potable Water Supply",
    description:
      "High-quality drinking water delivered to your door. Suitable for residential, villa and commercial daily use.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-7 h-7">
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
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-7 h-7">
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
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-7 h-7">
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
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-7 h-7">
        <path d="M3 21h18M5 21V7l8-4v18M19 21V11l-6-3" />
      </svg>
    ),
  },
  {
    title: "Commercial / Bulk Water Delivery",
    description:
      "Bulk water delivery for hotels, compounds, commercial properties and large-scale requirements. Flexible scheduling.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-7 h-7">
        <rect x="2" y="7" width="20" height="14" rx="2" />
        <path d="M16 7V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v2" />
      </svg>
    ),
  },
];

const clientTypes = [
  {
    title: "Villas",
    description: "Regular potable water supply for residential villas and households.",
  },
  {
    title: "Swimming Pools",
    description: "Clean water for pool filling, top-ups and maintenance.",
  },
  {
    title: "Apartments",
    description: "Water supply solutions for residential towers and apartment complexes.",
  },
  {
    title: "Hotels",
    description: "Bulk water delivery for hospitality operations and guest requirements.",
  },
  {
    title: "Commercial Properties",
    description: "Reliable supply for offices, retail spaces and commercial buildings.",
  },
  {
    title: "Construction Sites",
    description: "Scheduled potable and non-potable water for construction projects.",
  },
  {
    title: "Industrial Requirements",
    description: "Non-potable water for processing, cleaning and site operations.",
  },
  {
    title: "Compounds",
    description: "Bulk water supply for residential compounds and community facilities.",
  },
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
    <div className="min-h-screen bg-white pb-20 md:pb-0">
      {/* Navbar */}
      <header
        className={`fixed w-full z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white/95 backdrop-blur-sm shadow-md"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link href="#home" className="flex items-center gap-3 flex-shrink-0">
              <img src="/bmt-logo.svg" alt="BMT Logo" className="h-10 w-auto" />
              <div className={scrolled ? "text-primary" : "text-white"}>
                <span className="text-xl font-bold tracking-tight block leading-none">
                  Basma Al Madina
                </span>
                <span className="text-[10px] font-medium tracking-widest uppercase opacity-80">
                  Water Supply
                </span>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              <Link href="#home" className={`nav-link text-sm ${scrolled ? "text-gray-700" : "text-white/90"}`}>
                Home
              </Link>
              <Link href="#services" className={`nav-link text-sm ${scrolled ? "text-gray-700" : "text-white/90"}`}>
                Services
              </Link>
              <Link href="#about" className={`nav-link text-sm ${scrolled ? "text-gray-700" : "text-white/90"}`}>
                About
              </Link>
              <Link href="#contact" className={`nav-link text-sm ${scrolled ? "text-gray-700" : "text-white/90"}`}>
                Contact
              </Link>
              <a href="tel:+971553311977" className="btn-primary text-sm">
                Call Now
              </a>
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className={`md:hidden p-2 ${scrolled ? "text-gray-700" : "text-white"}`}
              aria-label="Toggle menu"
            >
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {mobileOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </nav>
        </div>

        {/* Mobile menu */}
        {mobileOpen && (
          <div className="md:hidden bg-white border-t border-gray-100 shadow-lg">
            <div className="px-4 py-4 space-y-3">
              <Link href="#home" className="block text-gray-900 font-medium py-2" onClick={() => setMobileOpen(false)}>
                Home
              </Link>
              <Link href="#services" className="block text-gray-600 font-medium py-2" onClick={() => setMobileOpen(false)}>
                Services
              </Link>
              <Link href="#about" className="block text-gray-600 font-medium py-2" onClick={() => setMobileOpen(false)}>
                About
              </Link>
              <Link href="#contact" className="block text-gray-600 font-medium py-2" onClick={() => setMobileOpen(false)}>
                Contact
              </Link>
              <a href="tel:+971553311977" className="btn-primary w-full justify-center">
                Call Now
              </a>
            </div>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section id="home" className="relative bg-gradient-to-br from-navy via-primary to-secondary text-white pt-28 pb-24 md:pt-36 md:pb-32 overflow-hidden">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-10">
          <svg width="100%" height="100%">
            <pattern id="waterPattern" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
              <circle cx="30" cy="30" r="1.5" fill="white" />
            </pattern>
            <rect width="100%" height="100%" fill="url(#waterPattern)" />
          </svg>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Text */}
            <div className="reveal">
              <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 mb-6 border border-white/20">
                <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                <span className="text-sm font-medium text-white/90">
                  Serving Dubai &amp; UAE
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                Reliable Water Supply,
                <br />
                <span className="text-accent">Delivered When You Need It.</span>
              </h1>
              <p className="text-lg md:text-xl text-white/80 mb-8 max-w-xl leading-relaxed">
                Fast and reliable water tanker delivery for residential, commercial, construction and other requirements across Dubai and the UAE.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="tel:+971553311977" className="btn-primary text-lg px-8 py-4 justify-center">
                  Call Now
                </a>
                <a
                  href="https://wa.me/971553311977"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-whatsapp text-lg px-8 py-4 justify-center"
                >
                  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 mr-2">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                  WhatsApp Us
                </a>
              </div>
            </div>

            {/* Illustration */}
            <div className="relative reveal stagger-2 hidden lg:block">
              <div className="relative">
                {/* Tanker SVG */}
                <svg viewBox="0 0 500 300" className="w-full h-auto drop-shadow-2xl">
                  {/* Decorative circles */}
                  <circle cx="250" cy="140" r="130" fill="rgba(255,255,255,0.03)" stroke="rgba(255,255,255,0.06)" strokeWidth="1"/>
                  <circle cx="250" cy="140" r="100" fill="none" stroke="rgba(255,255,255,0.04)" strokeWidth="1"/>
                  
                  {/* Ground line */}
                  <line x1="40" y1="235" x2="460" y2="235" stroke="rgba(255,255,255,0.15)" strokeWidth="2" strokeDasharray="6 4"/>
                  
                  {/* Tanker body */}
                  <rect x="110" y="105" width="270" height="115" rx="48" fill="#0077B6"/>
                  <rect x="110" y="135" width="270" height="65" rx="26" fill="rgba(255,255,255,0.08)"/>
                  
                  {/* Tank details */}
                  <rect x="122" y="120" width="246" height="6" rx="3" fill="rgba(255,255,255,0.18)"/>
                  <rect x="122" y="195" width="246" height="6" rx="3" fill="rgba(255,255,255,0.1)"/>
                  
                  {/* Water inside tank */}
                  <path d="M125 175 C175 168 215 180 255 172 C295 164 335 178 370 172 L370 195 C335 200 295 188 255 196 C215 204 175 192 125 200 Z" fill="#00A3E0" opacity="0.55"/>
                  <path d="M125 188 C175 181 215 193 255 185 C295 177 335 191 370 185 L370 195 C335 200 295 188 255 196 C215 204 175 192 125 200 Z" fill="#00A3E0" opacity="0.3"/>
                  
                  {/* Cab */}
                  <rect x="30" y="125" width="78" height="95" rx="12" fill="#003B73"/>
                  <rect x="40" y="137" width="58" height="42" rx="6" fill="white" opacity="0.92"/>
                  <rect x="46" y="143" width="46" height="30" rx="4" fill="#E0F2FE"/>
                  
                  {/* Connection */}
                  <rect x="108" y="155" width="8" height="40" fill="#003B73"/>
                  
                  {/* Wheels */}
                  <circle cx="155" cy="225" r="26" fill="#0A1628"/>
                  <circle cx="155" cy="225" r="15" fill="#374151"/>
                  <circle cx="155" cy="225" r="6" fill="#9CA3AF"/>
                  
                  <circle cx="330" cy="225" r="26" fill="#0A1628"/>
                  <circle cx="330" cy="225" r="15" fill="#374151"/>
                  <circle cx="330" cy="225" r="6" fill="#9CA3AF"/>
                  
                  <circle cx="405" cy="225" r="22" fill="#0A1628"/>
                  <circle cx="405" cy="225" r="12" fill="#374151"/>
                  <circle cx="405" cy="225" r="4" fill="#9CA3AF"/>
                </svg>

                {/* Floating water drops */}
                <div className="absolute top-8 right-16 animate-[float_3s_ease-in-out_infinite]">
                  <svg width="36" height="54" viewBox="0 0 36 54" fill="none">
                    <path d="M18 0C18 0 0 32 0 40C0 47.7 8.1 54 18 54C27.9 54 36 47.7 36 40C36 32 18 0 18 0Z" fill="#00A3E0" opacity="0.85"/>
                  </svg>
                </div>
                <div className="absolute top-24 right-4 animate-[float_4s_ease-in-out_infinite]" style={{animationDelay: "1s"}}>
                  <svg width="28" height="42" viewBox="0 0 36 54" fill="none">
                    <path d="M18 0C18 0 0 32 0 40C0 47.7 8.1 54 18 54C27.9 54 36 47.7 36 40C36 32 18 0 18 0Z" fill="#00A3E0" opacity="0.6"/>
                  </svg>
                </div>
                <div className="absolute bottom-24 right-24 animate-[float_3.5s_ease-in-out_infinite]" style={{animationDelay: "0.5s"}}>
                  <svg width="22" height="33" viewBox="0 0 36 54" fill="none">
                    <path d="M18 0C18 0 0 32 0 40C0 47.7 8.1 54 18 54C27.9 54 36 47.7 36 40C36 32 18 0 18 0Z" fill="#00A3E0" opacity="0.45"/>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Wave divider */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
          <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-[200%] h-[60px] animate-[wave_14s_linear_infinite]">
            <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" fill="white" opacity=".25"/>
            <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,19.45,31.77,11.48,64.73,17.27,97.08,12.37,43.72-6.62,84.83-28.31,128.77-38.87,59-14,122.39,2,171.68,20.08,35.53,12.93,69.88,30.93,103.37,41.63,22.87,7.44,46.32,12.95,69.83,14.07C1152.12,87.44,1200,56.52,1200,0Z" fill="white" opacity=".5"/>
            <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.18c59.54-10.66,116.79-31.33,175.48-45.58C738.28-12.36,854.55-2.85,980.65,9.22c54.66,5.24,106.63,18.38,157.63,29.67C1235.15,49.7,1200,56.52,1200,0Z" fill="white"/>
          </svg>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 reveal">
            <span className="inline-block text-secondary font-semibold text-sm uppercase tracking-wider mb-3">
              Our Services
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Comprehensive Water Supply Solutions
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              From swimming pools to construction sites, we deliver the right water, in the right quantity, at the right time.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div
                key={index}
                className={`service-card bg-white p-8 rounded-xl border border-gray-100 reveal stagger-${index + 1}`}
              >
                <div className="w-14 h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-6 text-primary">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed mb-6">
                  {service.description}
                </p>
                <a
                  href="https://wa.me/971553311977"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-secondary font-semibold text-sm hover:text-primary transition-colors"
                >
                  Request Service
                  <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Capacity Section */}
      <section id="capacity" className="py-20 md:py-28 bg-[#F0F7FF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 reveal">
            <span className="inline-block text-secondary font-semibold text-sm uppercase tracking-wider mb-3">
              Delivery Options
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Flexible Water Delivery for Every Need
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Whether you need a small top-up or a bulk supply, BMT arranges the right delivery for your requirements.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100 text-center reveal stagger-1 service-card">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6 text-primary">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-8 h-8">
                  <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Residential &amp; Small Scale</h3>
              <p className="text-gray-600">
                Ideal for villas, apartments, small pools and household top-ups. Quick dispatch for everyday needs.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100 text-center reveal stagger-2 service-card">
              <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-6 text-secondary">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-8 h-8">
                  <rect x="2" y="7" width="20" height="14" rx="2" />
                  <path d="M16 7V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v2" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Commercial &amp; Standard Supply</h3>
              <p className="text-gray-600">
                Perfect for hotels, compounds, commercial properties and large pools. Scheduled or on-call delivery.
              </p>
            </div>

            <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100 text-center reveal stagger-3 service-card">
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6 text-accent">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-8 h-8">
                  <path d="M3 21h18M5 21V7l8-4v18M19 21V11l-6-3" />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Construction &amp; Bulk Projects</h3>
              <p className="text-gray-600">
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
            <span className="inline-block text-secondary font-semibold text-sm uppercase tracking-wider mb-3">
              Who We Serve
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Trusted Across Every Sector
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              From individual villas to large construction projects, BMT delivers water where it is needed most.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {clientTypes.map((client, index) => (
              <div
                key={index}
                className={`service-card bg-white border border-gray-100 rounded-xl p-6 text-center reveal stagger-${(index % 4) + 1}`}
              >
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 text-primary">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-6 h-6">
                    <path d="M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {client.title}
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  {client.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-20 md:py-24 bg-[#F0F7FF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {trustPoints.map((point, index) => (
              <div key={index} className={`text-center reveal stagger-${index + 1}`}>
                <div className="w-14 h-14 bg-primary rounded-full flex items-center justify-center mx-auto mb-5 text-white">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  {point.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {point.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="reveal">
              <span className="inline-block text-secondary font-semibold text-sm uppercase tracking-wider mb-3">
                About BMT
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Professional Water Supply &amp; Tanker Delivery
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Basma Al Madina Transport LLC (BMT) is a Dubai-based water supply and tanker delivery company focused on reliable, responsive service for residential, commercial and construction water requirements across the UAE.
              </p>
              <p className="text-gray-600 mb-8 leading-relaxed">
                We understand that timely water delivery is critical. Whether it is a swimming pool fill, a construction site supply, or a bulk commercial delivery, our team is structured to respond quickly and deliver safely. Our commitment is to make water delivery simple, dependable and transparent for every customer.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="tel:+971553311977" className="btn-primary justify-center">
                  Call Now
                </a>
                <a href="https://wa.me/971553311977" target="_blank" rel="noopener noreferrer" className="btn-whatsapp justify-center">
                  WhatsApp Us
                </a>
              </div>
            </div>

            <div className="reveal stagger-2">
              <div className="bg-gradient-to-br from-primary to-secondary rounded-2xl p-8 md:p-10 text-white">
                <h3 className="text-2xl font-bold mb-6">Why Choose BMT?</h3>
                <ul className="space-y-4">
                  {[
                    "Responsive dispatch across Dubai and the UAE",
                    "Clean, quality water maintained to required standards",
                    "Transparent pricing with no hidden charges",
                    "Flexible scheduling — scheduled or on-call",
                    "Professional team and maintained tankers",
                    "Direct communication — call, WhatsApp or form",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <svg className="w-6 h-6 text-accent flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-white/90">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-20 md:py-28 bg-[#F0F7FF]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 reveal">
            <span className="inline-block text-secondary font-semibold text-sm uppercase tracking-wider mb-3">
              FAQ
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-gray-600">
              Quick answers to common questions about BMT water supply services.
            </p>
          </div>

          <div className="space-y-4 reveal">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white rounded-xl border border-gray-100 overflow-hidden"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full flex items-center justify-between p-5 text-left font-semibold text-gray-900 hover:bg-gray-50 transition-colors"
                  aria-expanded={openFaq === index}
                >
                  <span className="pr-4">{faq.question}</span>
                  <span className="text-2xl text-primary flex-shrink-0 transition-transform duration-200" style={{transform: openFaq === index ? 'rotate(45deg)' : 'rotate(0deg)'}}>
                    +
                  </span>
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${openFaq === index ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}`}
                >
                  <div className="px-5 pb-5 text-gray-600 leading-relaxed">
                    {faq.answer}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact / Quote Section */}
      <section id="contact" className="py-20 md:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16 reveal">
            <span className="inline-block text-secondary font-semibold text-sm uppercase tracking-wider mb-3">
              Contact Us
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Get In Touch
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Have a question or need a quote? Reach out to BMT directly or send us your requirements.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div className="reveal">
              <div className="bg-gradient-to-br from-primary to-secondary rounded-2xl p-8 md:p-10 text-white h-full">
                <h3 className="text-2xl font-bold mb-6">
                  Basma Al Madina Transport LLC
                </h3>
                <p className="text-white/80 mb-8">
                  Your trusted partner for water supply and tanker delivery in Dubai and the UAE.
                </p>

                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-5 h-5">
                        <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm text-white/70 mb-1">Phone</p>
                      <a href="tel:+971553311977" className="text-lg font-semibold hover:text-accent transition-colors">
                        +971 55 331 1977
                      </a>
                      <br />
                      <a href="tel:+971504643456" className="text-lg font-semibold hover:text-accent transition-colors">
                        +971 50 464 3456
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-5 h-5">
                        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                        <path d="M22 6l-10 7L2 6" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm text-white/70 mb-1">Email</p>
                      <a href="mailto:Fk7550358@gmail.com" className="text-lg font-semibold hover:text-accent transition-colors">
                        Fk7550358@gmail.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-5 h-5">
                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                        <circle cx="12" cy="10" r="3" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm text-white/70 mb-1">Address</p>
                      <p className="text-white/90 leading-relaxed">
                        Office 402, Crystal Tower,
                        <br />
                        M Hotel by Millennium,
                        <br />
                        Business Bay, Dubai, UAE
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-10 pt-8 border-t border-white/20">
                  <p className="text-sm text-white/70 mb-4">Or reach us directly:</p>
                  <div className="flex flex-col sm:flex-row gap-3">
                    <a href="tel:+971553311977" className="btn-primary justify-center">
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
              <div className="bg-white rounded-2xl p-8 md:p-10 border border-gray-100 shadow-sm">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  Request a Quote
                </h3>
                <p className="text-gray-600 mb-8">
                  Fill out the form and we will get back to you shortly.
                </p>

                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">
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
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">
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

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">
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

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">
                      Location
                    </label>
                    <input
                      type="text"
                      className="input"
                      placeholder="Area / Community in Dubai"
                      value={formData.location}
                      onChange={(e) =>
                        setFormData({ ...formData, location: e.target.value })}
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1.5">
                      Message
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

                  <button type="submit" className="btn-primary w-full justify-center text-base">
                    Send Request via WhatsApp
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-navy text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* Brand */}
            <div className="lg:col-span-2">
              <div className="flex items-center gap-3 mb-6">
                <img src="/bmt-logo.svg" alt="BMT Logo" className="h-10 w-auto" />
                <div>
                  <span className="text-xl font-bold block leading-none">Basma Al Madina</span>
                  <span className="text-[10px] font-medium tracking-widest uppercase text-white/70">
                    Water Supply
                  </span>
                </div>
              </div>
              <p className="text-gray-400 mb-6 max-w-md leading-relaxed">
                Basma Al Madina Transport LLC — professional water supply and tanker delivery services across Dubai and the UAE.
              </p>
              <div className="flex items-center gap-4">
                <a href="tel:+971553311977" className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-white/20 transition-colors" aria-label="Call">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-5 h-5">
                    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
                  </svg>
                </a>
                <a href="https://wa.me/971553311977" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-white/20 transition-colors" aria-label="WhatsApp">
                  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                  </svg>
                </a>
                <a href="mailto:Fk7550358@gmail.com" className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center hover:bg-white/20 transition-colors" aria-label="Email">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-5 h-5">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <path d="M22 6l-10 7L2 6" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
              <ul className="space-y-3">
                <li>
                  <Link href="#home" className="text-gray-400 hover:text-white transition-colors">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="#services" className="text-gray-400 hover:text-white transition-colors">
                    Services
                  </Link>
                </li>
                <li>
                  <Link href="#about" className="text-gray-400 hover:text-white transition-colors">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="#faq" className="text-gray-400 hover:text-white transition-colors">
                    FAQ
                  </Link>
                </li>
                <li>
                  <Link href="#contact" className="text-gray-400 hover:text-white transition-colors">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-lg font-semibold mb-6">Contact Info</h4>
              <ul className="space-y-4 text-gray-400">
                <li className="flex items-start gap-3">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-5 h-5 flex-shrink-0 mt-0.5">
                    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
                  </svg>
                  <a href="tel:+971553311977" className="hover:text-white transition-colors">
                    +971 55 331 1977
                  </a>
                </li>
                <li className="flex items-start gap-3">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-5 h-5 flex-shrink-0 mt-0.5">
                    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
                  </svg>
                  <a href="tel:+971504643456" className="hover:text-white transition-colors">
                    +971 50 464 3456
                  </a>
                </li>
                <li className="flex items-start gap-3">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-5 h-5 flex-shrink-0 mt-0.5">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                    <path d="M22 6l-10 7L2 6" />
                  </svg>
                  <a href="mailto:Fk7550358@gmail.com" className="hover:text-white transition-colors">
                    Fk7550358@gmail.com
                  </a>
                </li>
                <li className="flex items-start gap-3">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5} className="w-5 h-5 flex-shrink-0 mt-0.5">
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
          <div className="border-t border-white/10 mt-12 pt-8 text-center text-gray-500 text-sm">
            <p>&copy; {new Date().getFullYear()} Basma Al Madina Transport LLC. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* Floating WhatsApp Button */}
      <a
        href="https://wa.me/971553311977"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-24 right-6 z-40 bg-[#25D366] text-white p-4 rounded-full shadow-lg hover:bg-[#20bd5a] transition-all hover:scale-110 md:bottom-8"
        aria-label="Chat on WhatsApp"
      >
        <svg viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
        </svg>
      </a>

      {/* Mobile sticky CTA bar */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 p-3 flex gap-3 md:hidden z-40">
        <a href="tel:+971553311977" className="flex-1 btn-primary justify-center text-sm">
          Call Now
        </a>
        <a href="https://wa.me/971553311977" target="_blank" rel="noopener noreferrer" className="flex-1 btn-whatsapp justify-center text-sm">
          WhatsApp
        </a>
      </div>
    </div>
  );
}
