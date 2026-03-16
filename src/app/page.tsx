import Image from "next/image";
import TestimonialsCarousel from "./TestimonialsCarousel";

const ACCENT = "#7a9e87";
const DARK = "#1a1a1a";
const BG = "#f8f6f2";
const WARM_LIGHT = "#eeeae3";
const HERO_GREEN = "#c5dac9";

const SERVICES = [
  { title: "Damon Braces", desc: "Self-ligating Damon brackets for faster tooth movement, fewer appointments, and superior comfort over conventional braces.", img: "/images/damon.avif" },
  { title: "Invisalign", desc: "World's leading clear aligner system — virtually invisible, removable, and highly precise for a discreet smile correction.", img: "/images/invisalign.jpg" },
  { title: "Spark Aligners", desc: "Crystal-clear, stain-resistant aligners with SmartForce technology for efficient and comfortable tooth movement.", img: "/images/spark.jpg" },
  { title: "Metal Braces", desc: "Time-tested traditional metal brackets — durable, effective, and ideal for complex malocclusion cases.", img: "/images/metal.jpg" },
  { title: "Ceramic Braces", desc: "Tooth-coloured ceramic brackets offering the effectiveness of braces with a discreet, aesthetic appearance.", img: "/images/ceramic.jpg" },
  { title: "Myofunctional Appliances", desc: "Functional devices that harness natural growth to correct jaw relationships and improve breathing patterns.", img: "/images/myfunctional-appliances.jpeg" },
  { title: "Expansion Devices", desc: "Palatal expanders and arch development appliances to create space and correct arch width discrepancies.", img: "/images/expansion.jpg" },
];


const GALLERY = [
  {
    src: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=800&q=80",
    alt: "Modern dental clinic interior",
  },
  {
    src: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=800&q=80",
    alt: "Dental equipment",
  },
  {
    src: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&w=800&q=80",
    alt: "Patient smiling after treatment",
  },
];

function SectionLabel({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center gap-3 mb-3" style={{ color: ACCENT }}>
      <span className="block h-px w-6" style={{ background: ACCENT }} />
      <span className="text-[12px] tracking-[0.2em] uppercase font-medium">{children}</span>
    </div>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen" style={{ background: BG, color: DARK, fontFamily: "var(--font-dm-sans, 'DM Sans', sans-serif)", fontWeight: 400 }}>

      {/* ── Navbar ── */}
      <nav className="sticky top-0 z-50" style={{ background: "#f0f0ef", borderBottom: "0.5px solid rgba(0,0,0,0.1)" }}>
        <div className="max-w-6xl mx-auto px-5 md:px-10 py-4 md:py-5 flex items-center justify-between">
          <span style={{ fontFamily: "var(--font-cormorant,'Cormorant Garamond',serif)", fontSize: 18, fontWeight: 600, letterSpacing: "0.10em", textTransform: "uppercase", color: DARK }}>
            Dr. Suraj <span style={{ color: ACCENT, fontWeight: 600 }}>Naslapur</span>
          </span>
          {/* Desktop nav */}
          <div className="hidden md:flex gap-5 lg:gap-10 items-center">
            {["About", "Services", "Gallery", "Testimonials", "Contact"].map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`}
                className="nav-link text-[13px] tracking-[0.08em] uppercase font-bold"
              >{item}</a>
            ))}
            <a href="#contact"
              className="text-[12px] tracking-[0.1em] uppercase font-bold px-5 py-2 transition"
              style={{ background: DARK, color: BG, borderRadius: 2 }}
            >Book Now</a>
          </div>
          {/* Mobile: just Book Now */}
          <a href="#contact" className="md:hidden text-[12px] tracking-[0.08em] uppercase font-bold px-4 py-2" style={{ background: DARK, color: BG, borderRadius: 2 }}>Book Now</a>
        </div>
      </nav>

      {/* ── Hero ── */}
      <section className="grid grid-cols-1 md:grid-cols-2" style={{ minHeight: 580 }}>
        {/* Text side */}
        <div className="flex flex-col justify-center px-5 md:px-10 lg:px-16 py-12 md:py-20" style={{ background: BG }}>
          <SectionLabel>Consultant Orthodontist · Bangalore</SectionLabel>
          <h1 className="md:whitespace-nowrap" style={{ fontFamily: "var(--font-cormorant,'Cormorant Garamond',serif)", fontSize: "clamp(36px, 7vw, 80px)", fontWeight: 500, lineHeight: 1.1, marginBottom: "0.5rem" }}>
            Dr. Suraj Naslapur
          </h1>
          <p className="text-[17px] mb-6 tracking-wide" style={{ color: DARK, fontWeight: 700, letterSpacing: "0.04em" }}>
            BDS &nbsp;·&nbsp; MDS (Orthodontics)
          </p>
          <p className="text-[16px] leading-relaxed mb-8" style={{ color: "#555", maxWidth: 380 }}>
            Specialist in correcting malocclusion and transforming smiles with Damon Self-Ligating Brackets.
          </p>
          <div className="flex gap-3 flex-wrap">
            <a href="#contact"
              className="text-[13px] tracking-[0.06em] px-7 py-3 transition"
              style={{ background: DARK, color: BG, borderRadius: 2 }}
            >Book an Appointment</a>
            <a href="https://wa.me/916363106061" target="_blank" rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-[13px] tracking-[0.06em] px-6 py-3 transition"
              style={{ background: "#128C4A", color: "white", borderRadius: 2, fontWeight: 600 }}
            >
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="16" height="16">
                <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.554 4.117 1.528 5.847L0 24l6.332-1.508A11.94 11.94 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm6.07 16.525c-.253.711-1.47 1.36-2.027 1.44-.518.073-1.172.104-1.89-.118a17.3 17.3 0 0 1-1.712-.634C9.676 16.05 7.9 13.76 7.766 13.582c-.133-.178-1.085-1.443-1.085-2.754 0-1.31.686-1.955.93-2.222.244-.267.532-.333.71-.333.177 0 .355.002.51.009.164.008.383-.062.599.457.222.533.753 1.844.819 1.977.066.133.11.288.022.466-.089.177-.133.288-.266.444-.133.156-.28.348-.4.468-.133.133-.271.277-.117.544.155.266.687 1.133 1.475 1.835.985.874 1.816 1.144 2.073 1.277.257.133.406.111.555-.067.15-.177.641-.75.812-1.007.17-.256.341-.213.577-.128.235.085 1.494.705 1.75.833.255.128.425.192.488.299.063.107.063.617-.19 1.328z"/>
              </svg>
              WhatsApp Me
            </a>
          </div>
        </div>

        {/* Image side */}
        <div className="relative flex items-end justify-center" style={{ background: HERO_GREEN, minHeight: 580 }}>
          <Image
            src="/images/dentist.jpeg"
            alt="Dr. Suraj Naslapur"
            fill
            className="object-contain object-bottom"
            priority
          />
          {/* Floating badge */}
          <div className="absolute bottom-8 left-8 z-10 rounded-[4px] px-5 py-4" style={{ background: BG, border: "0.5px solid rgba(0,0,0,0.1)" }}>
            <p style={{ fontFamily: "var(--font-cormorant,'Cormorant Garamond',serif)", fontSize: 32, fontWeight: 300, lineHeight: 1 }}>10+</p>
            <p className="text-[11px] tracking-[0.1em] uppercase mt-1" style={{ color: "#888" }}>Years Experience</p>
          </div>
        </div>
      </section>

      {/* ── Stats Bar ── */}
      <div className="grid grid-cols-3" style={{ background: DARK, padding: "1.5rem 2rem" }}>
        {[
          { num: "100+", label: "Happy Patients" },
          { num: "6+", label: "Services Offered" },
          { num: "100%", label: "Patient Satisfaction" },
        ].map((s, i) => (
          <div key={s.label} className="text-center py-3 md:py-4" style={{ borderRight: i < 2 ? "0.5px solid rgba(255,255,255,0.1)" : "none" }}>
            <p style={{ fontFamily: "var(--font-cormorant,'Cormorant Garamond',serif)", fontSize: "clamp(32px, 5vw, 52px)", fontWeight: 500, color: BG, lineHeight: 1 }}>{s.num}</p>
            <p className="text-[11px] md:text-[13px] tracking-[0.08em] md:tracking-[0.12em] uppercase mt-2" style={{ color: "rgba(255,255,255,0.6)" }}>{s.label}</p>
          </div>
        ))}
      </div>

      {/* ── About ── */}
      <section id="about" className="px-5 md:px-10 lg:px-16 py-14 md:py-20" style={{ background: WARM_LIGHT }}>
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-10 lg:gap-16 items-start">
            {/* Left: Bio */}
            <div>
              <SectionLabel>About the Doctor</SectionLabel>
              <h2 style={{ fontFamily: "var(--font-cormorant,'Cormorant Garamond',serif)", fontSize: "clamp(36px, 4vw, 52px)", fontWeight: 500, lineHeight: 1.15, marginBottom: "1.5rem" }}>
                A Smile Crafted<br /><em style={{ fontStyle: "italic", color: ACCENT }}>with Precision</em>
              </h2>
              <p className="text-[16px] leading-[1.8] mb-4" style={{ color: "#444" }}>
                Dr. Suraj Naslapur is a Consultant Orthodontist with over 10 years of clinical experience, specialising in the diagnosis and correction of all types of malocclusion. He is passionate about delivering life-changing smile transformations using the latest evidence-based techniques.
              </p>
              <p className="text-[16px] leading-[1.8] mb-10" style={{ color: "#444" }}>
                He is specially trained in <strong style={{ color: DARK, fontWeight: 500 }}>Damon Self-Ligating Brackets</strong> — a modern, low-friction bracket system that delivers faster results with significantly greater patient comfort compared to conventional braces.
              </p>
              <a href="#contact"
                className="text-[13px] tracking-[0.06em] px-7 py-3 transition inline-block"
                style={{ background: DARK, color: BG, borderRadius: 2 }}
              >Book a Consultation</a>
            </div>

            {/* Right: Credentials + highlights */}
            <div className="flex flex-col gap-6">
              {/* Education cards */}
              <div>
                <p className="text-[11px] tracking-[0.15em] uppercase mb-4" style={{ color: ACCENT }}>Education & Training</p>
                <div className="flex flex-col gap-3">
                  {[
                    { year: "MDS", title: "Master of Dental Surgery — Orthodontics", place: "AECS Maaruti College of Dental Sciences, Bangalore" },
                    { year: "BDS", title: "Bachelor of Dental Surgery", place: "Bapuji Dental College and Hospital, Davanagere" },
                    { year: "CERT", title: "Damon Self-Ligating Brackets", place: "Advanced certification in low-friction bracket systems" },
                  ].map((item) => (
                    <div key={item.title} className="flex gap-4 p-4" style={{ background: "white", border: "0.5px solid rgba(0,0,0,0.07)", borderRadius: 4 }}>
                      <span className="text-[11px] tracking-widest uppercase pt-1 shrink-0 w-10" style={{ color: ACCENT }}>{item.year}</span>
                      <div>
                        <p className="text-[15px] font-semibold leading-tight mb-1" style={{ color: DARK }}>{item.title}</p>
                        <p className="text-[13px]" style={{ color: "#666" }}>{item.place}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Highlight stats */}
              <div className="grid grid-cols-3 gap-3 mt-2">
                {[
                  { num: "10+", label: "Years of Practice" },
                  { num: "100+", label: "Patients Treated" },
                  { num: "100%", label: "Satisfaction" },
                ].map((s) => (
                  <div key={s.label} className="flex flex-col items-center justify-center py-5" style={{ background: "white", border: "0.5px solid rgba(0,0,0,0.07)", borderRadius: 4 }}>
                    <p style={{ fontFamily: "var(--font-cormorant,'Cormorant Garamond',serif)", fontSize: 36, fontWeight: 500, color: DARK, lineHeight: 1 }}>{s.num}</p>
                    <p className="text-[12px] tracking-[0.08em] uppercase mt-2 text-center" style={{ color: "#666" }}>{s.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Services ── */}
      <section id="services" className="px-5 md:px-10 lg:px-16 py-14 md:py-20" style={{ background: BG }}>
        <div className="max-w-6xl mx-auto">
          <div className="flex justify-between items-end mb-10">
            <div>
              <SectionLabel>What I Offer</SectionLabel>
              <h2 style={{ fontFamily: "var(--font-cormorant,'Cormorant Garamond',serif)", fontSize: "clamp(36px, 4vw, 52px)", fontWeight: 500, lineHeight: 1.15 }}>
                My Services
              </h2>
            </div>
          </div>
          {/* Row 1: 4 cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4" style={{ gap: "20px", marginBottom: "20px" }}>
            {SERVICES.slice(0, 4).map((s, i) => (
              <div key={s.title} className="service-card flex flex-col">
                <div className="relative w-full overflow-hidden" style={{ height: 200, borderRadius: "14px 14px 0 0" }}>
                  <Image src={s.img} alt={s.title} fill className="object-cover service-card-img" sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw" />
                  <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(0,0,0,0.25), transparent)" }} />
                  <span className="absolute bottom-3 left-4 text-[12px] font-bold" style={{ color: "rgba(255,255,255,0.75)", letterSpacing: "0.08em" }}>0{i + 1}</span>
                </div>
                <div className="flex flex-col p-5 flex-1">
                  <h3 className="mb-2" style={{ fontFamily: "var(--font-cormorant,'Cormorant Garamond',serif)", fontSize: 21, fontWeight: 700, color: DARK, lineHeight: 1.25 }}>{s.title}</h3>
                  <p className="text-[15px] leading-[1.7]" style={{ color: "#444" }}>{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
          {/* Row 2: 3 cards centered */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3" style={{ gap: "20px" }}>
            {SERVICES.slice(4).map((s, i) => (
              <div key={s.title} className="service-card flex flex-col w-full">
                <div className="relative w-full overflow-hidden" style={{ height: 200, borderRadius: "14px 14px 0 0" }}>
                  <Image src={s.img} alt={s.title} fill className="object-cover service-card-img" sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw" />
                  <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(0,0,0,0.25), transparent)" }} />
                  <span className="absolute bottom-3 left-4 text-[12px] font-bold" style={{ color: "rgba(255,255,255,0.75)", letterSpacing: "0.08em" }}>0{i + 5}</span>
                </div>
                <div className="flex flex-col p-5 flex-1">
                  <h3 className="mb-2" style={{ fontFamily: "var(--font-cormorant,'Cormorant Garamond',serif)", fontSize: 21, fontWeight: 700, color: DARK, lineHeight: 1.25 }}>{s.title}</h3>
                  <p className="text-[15px] leading-[1.7]" style={{ color: "#444" }}>{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Gallery ── */}
      <section id="gallery" className="px-5 md:px-10 lg:px-16 py-14 md:py-20" style={{ background: WARM_LIGHT }}>
        <div className="max-w-6xl mx-auto">
          <SectionLabel>Before &amp; After</SectionLabel>
            <h2 className="mb-10" style={{ fontFamily: "var(--font-cormorant,'Cormorant Garamond',serif)", fontSize: "clamp(36px, 4vw, 52px)", fontWeight: 500, lineHeight: 1.15 }}>Gallery</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {GALLERY.map((img) => (
              <div key={img.alt} className="relative overflow-hidden" style={{ height: 240, borderRadius: 4 }}>
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  className="object-cover transition-transform duration-500 hover:scale-105"
                  sizes="(max-width: 640px) 100vw, 33vw"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Testimonials ── */}
      <section id="testimonials" className="px-5 md:px-10 lg:px-16 py-14 md:py-20" style={{ background: BG }}>
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col items-center text-center mb-12">
            <SectionLabel>Patient Stories</SectionLabel>
            <h2 style={{ fontFamily: "var(--font-cormorant,'Cormorant Garamond',serif)", fontSize: "clamp(36px, 4vw, 52px)", fontWeight: 500, lineHeight: 1.15 }}>What Patients Say</h2>
          </div>
          <TestimonialsCarousel />
        </div>
      </section>

      {/* ── Contact ── */}
      <section id="contact" className="grid grid-cols-1 md:grid-cols-2" style={{ background: DARK }}>
        {/* Left: CTA */}
        <div className="flex flex-col justify-center px-5 md:px-10 lg:px-16 py-14 md:py-20">
          <SectionLabel>Get In Touch</SectionLabel>
          <h2 className="mb-4" style={{ fontFamily: "var(--font-cormorant,'Cormorant Garamond',serif)", fontSize: 52, fontWeight: 500, color: BG, lineHeight: 1.15 }}>
            Ready for a<br /><em style={{ fontStyle: "italic", color: ACCENT }}>Better Smile?</em>
          </h2>
          <p className="text-[16px] leading-[1.7] mb-8" style={{ color: "rgba(255,255,255,0.7)" }}>
            Reach out via WhatsApp for the fastest response, or use the contact details.
          </p>
          <a
            href="https://wa.me/916363106061"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 self-start px-7 py-3 text-[13px] tracking-[0.1em] uppercase transition"
            style={{ background: ACCENT, color: "white", borderRadius: 2 }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
              <path d="M12 0C5.373 0 0 5.373 0 12c0 2.123.554 4.117 1.528 5.847L0 24l6.332-1.508A11.94 11.94 0 0 0 12 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm6.07 16.525c-.253.711-1.47 1.36-2.027 1.44-.518.073-1.172.104-1.89-.118a17.3 17.3 0 0 1-1.712-.634C9.676 16.05 7.9 13.76 7.766 13.582c-.133-.178-1.085-1.443-1.085-2.754 0-1.31.686-1.955.93-2.222.244-.267.532-.333.71-.333.177 0 .355.002.51.009.164.008.383-.062.599.457.222.533.753 1.844.819 1.977.066.133.11.288.022.466-.089.177-.133.288-.266.444-.133.156-.28.348-.4.468-.133.133-.271.277-.117.544.155.266.687 1.133 1.475 1.835.985.874 1.816 1.144 2.073 1.277.257.133.406.111.555-.067.15-.177.641-.75.812-1.007.17-.256.341-.213.577-.128.235.085 1.494.705 1.75.833.255.128.425.192.488.299.063.107.063.617-.19 1.328z"/>
            </svg>
            Chat on WhatsApp
          </a>
        </div>

        {/* Right: Info */}
        <div className="flex flex-col justify-center px-5 md:px-10 lg:px-16 py-14 md:py-20 gap-8 contact-info-panel">
          {[
            { icon: "📞", label: "Phone", content: ["+91 72049 95169", "+91 63631 06061"], href: ["tel:+917204995169", "tel:+916363106061"] },
            { icon: "✉", label: "Email", content: ["drsurajnaslapur@gmail.com"], href: ["mailto:drsurajnaslapur@gmail.com"] },
            { icon: "🕐", label: "Hours", content: ["Mon – Sat: 9 AM – 8 PM", "Sunday: By Appointment"], href: [] },
          ].map((item) => (
            <div key={item.label}>
              <p className="text-[11px] tracking-[0.15em] uppercase mb-2" style={{ color: ACCENT }}>{item.icon} {item.label}</p>
              {item.content.map((c, i) => (
                item.href[i]
                  ? <a key={c} href={item.href[i]} className="block text-[15px] transition" style={{ color: "rgba(255,255,255,0.8)" }}>{c}</a>
                  : <p key={c} className="text-[15px]" style={{ color: "rgba(255,255,255,0.8)" }}>{c}</p>
              ))}
            </div>
          ))}
        </div>
      </section>

      {/* ── Footer ── */}
      <footer className="flex flex-col sm:flex-row justify-between items-center px-5 md:px-10 lg:px-16 py-8" style={{ background: "#111", borderTop: "0.5px solid rgba(255,255,255,0.05)" }}>
        <span style={{ fontFamily: "var(--font-cormorant,'Cormorant Garamond',serif)", fontSize: 20, color: "rgba(255,255,255,0.6)" }}>
          Dr. Suraj Naslapur
        </span>
        <div className="flex gap-8 my-4 sm:my-0">
          {[
            { label: "About", href: "#about" },
            { label: "Services", href: "#services" },
            { label: "Gallery", href: "#gallery" },
            { label: "Contact", href: "#contact" },
          ].map(l => (
            <a key={l.label} href={l.href} className="text-[12px] tracking-[0.08em] uppercase transition" style={{ color: "rgba(255,255,255,0.3)" }}>{l.label}</a>
          ))}
        </div>
        <span className="text-[12px]" style={{ color: "rgba(255,255,255,0.2)" }}>© {new Date().getFullYear()} Dr. Suraj Naslapur</span>
      </footer>

    </div>
  );
}
