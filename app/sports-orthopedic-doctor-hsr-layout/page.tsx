import { Metadata } from "next";
import {
    Phone,
    Activity,
    Users,
    CheckCircle,
    ShieldCheck,
    Stethoscope,
    Trophy,
    Star,
    MessageCircle,
    Calendar,
    ChevronRight,
    Zap,
} from "lucide-react";

import { BookingForm } from "@/components/forms/booking-form";
import { siteOrigin } from "@/lib/site-url";
import { CLINICS, HSR_CLINIC } from "@/lib/practice";
import { HideNavigation } from "@/components/ui/hide-navigation";
import { LandingPageTracker } from "@/components/analytics/landing-page-tracker";
import { TrackedButton } from "@/components/analytics/tracked-button";
import { TrackedCall } from "@/components/analytics/tracked-call";
import { TrackedWhatsApp } from "@/components/analytics/tracked-whatsapp";
import { FadeIn } from "@/components/animations/fade-in";
import {
    LandingNav,
    StatsStrip,
    GoogleReviews,
    LocationsWithMaps,
    FinalCtaStrip,
    MobileStickyCTA,
    LandingFooter,
    HeroImage,
} from "@/components/landing/landing-chrome";
import { LandingFaq } from "@/components/landing/landing-faq";

export const metadata: Metadata = {
    // `absolute` opts out of the root layout's "%s | Dr. Nitin N Sunku" template.
    title: {
        absolute:
            "Sports Orthopedic Doctor in HSR Layout, Bengaluru | Dr. Nitin N Sunku",
    },
    description:
        "Dr. Nitin N Sunku — sports orthopedic doctor in HSR Layout, Bengaluru and official Bengaluru FC team doctor. Expert sports medicine & sports orthopedics care: ACL, meniscus, cartilage, shoulder & ankle injuries. Same-day appointments.",
    alternates: {
        canonical: `${siteOrigin}/sports-orthopedic-doctor-hsr-layout`,
    },
    keywords: [
        "sports orthopedic doctor HSR Layout",
        "sports ortho doctor HSR",
        "sports orthopedic doctor",
        "sports orthopedic doctor Bangalore",
        "ortho sports doctor near me",
        "sports medicine specialist near me",
        "sports orthopedics",
        "sports injury doctor HSR Layout",
        "Bengaluru FC team doctor",
        "ACL surgeon HSR Layout",
        "Dr. Nitin N Sunku",
    ],
    openGraph: {
        title:
            "Sports Orthopedic Doctor in HSR Layout — Dr. Nitin N Sunku (Bengaluru FC Team Doctor)",
        description:
            "Sports orthopedics & sports medicine in HSR Layout, Bengaluru. Official Bengaluru FC team doctor — the same care for weekend athletes as for the pros.",
        url: `${siteOrigin}/sports-orthopedic-doctor-hsr-layout`,
        type: "website",
    },
    // Ads-only landing page: kept out of the organic index so it does not
    // compete with /orthopedic-doctor-in-hsr-layout or /sports-injury-doctor-bangalore.
    // 'follow' preserves link equity to the pages it links to.
    robots: { index: false, follow: true },
};

// HSR Layout is the lead clinic for this page.
const CLINIC = HSR_CLINIC;
const PRIMARY_PHONE = CLINIC.phone;
const PRIMARY_PHONE_DIGITS = CLINIC.phoneDigits;
const WHATSAPP_MESSAGE =
    "Hi Dr. Nitin, I would like to book a sports injury / sports orthopedic consultation.";

const conditions = [
    "ACL Tear & Reconstruction",
    "Meniscus / Cartilage Injury",
    "Shoulder Dislocation & Instability",
    "Rotator Cuff Tear",
    "Ankle Sprain & Instability",
    "Tennis / Golfer's Elbow",
    "Stress Fractures",
    "Achilles & Tendon Injuries",
];

const whyChoose = [
    {
        icon: Trophy,
        title: "Official Bengaluru FC Team Doctor",
        description:
            "The sports orthopedic doctor trusted by an ISL professional football club — pitch-side decisions, acute injuries and return-to-play calls.",
    },
    {
        icon: Stethoscope,
        title: "Fellowship in Arthroscopy & Sports Medicine",
        description:
            "Subspecialty training in sports orthopedics — minimally invasive, arthroscopic techniques for faster, stronger recovery.",
    },
    {
        icon: Activity,
        title: "High-Volume ACL & Arthroscopy Surgeon",
        description:
            "Anatomic reconstruction and keyhole surgery, with graft choice tailored to your sport, level and demands.",
    },
    {
        icon: Zap,
        title: "Rapid Diagnosis & Imaging",
        description:
            "MRI and X-ray coordinated quickly so you get a clear diagnosis — and a clear plan — within days, not weeks.",
    },
    {
        icon: ShieldCheck,
        title: "Structured Return-to-Play",
        description:
            "Sport-specific rehab milestones, strength testing and clearance criteria — the framework used for professional athletes.",
    },
    {
        icon: Users,
        title: "Athletes & Weekend Warriors Alike",
        description:
            "From national-level competitors to recreational runners, footballers and gym-goers — the same evidence-based standard for everyone.",
    },
];

export default function SportsOrthopedicDoctorHsrLayoutPage() {
    return (
        <main className="min-h-screen bg-white w-full overflow-x-clip">
            <HideNavigation />
            <LandingPageTracker />
            <LandingNav clinic={CLINIC} />

            {/* ============= HERO ============= */}
            <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-white to-indigo-50">
                <div aria-hidden className="absolute -top-32 -right-32 w-96 h-96 bg-blue-200/40 rounded-full blur-3xl"></div>
                <div aria-hidden className="absolute -bottom-32 -left-32 w-96 h-96 bg-indigo-200/40 rounded-full blur-3xl"></div>
                <div aria-hidden className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-br from-cyan-100/30 to-transparent rounded-full blur-3xl"></div>

                <div className="container mx-auto px-4 pt-10 pb-12 md:pt-16 md:pb-20 relative z-10">
                    <div className="grid lg:grid-cols-2 gap-10 lg:gap-12 items-center max-w-7xl mx-auto">
                        <FadeIn direction="right">
                            <div>
                                <span className="inline-flex items-center gap-2 bg-white/80 backdrop-blur border border-blue-200 text-blue-700 text-xs sm:text-sm font-semibold rounded-full px-4 py-2 mb-5 shadow-sm">
                                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                                    Official Bengaluru FC Team Doctor
                                </span>

                                <h1 className="text-[2.5rem] sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-gray-900 leading-[1.05] tracking-tight mb-4 break-words">
                                    <span className="block">Sports Orthopedic Doctor</span>
                                    <span className="block bg-gradient-to-r from-blue-700 via-blue-600 to-indigo-600 bg-clip-text text-transparent pb-1">
                                        in HSR Layout
                                    </span>
                                </h1>

                                <p className="text-lg sm:text-xl md:text-2xl text-blue-800 font-semibold mb-4">
                                    Dr. Nitin N Sunku — Sports Orthopedics &amp; Sports Medicine Specialist
                                </p>
                                <p className="text-base sm:text-lg text-gray-600 mb-6 max-w-xl leading-relaxed">
                                    Looking for a sports orthopedic doctor in HSR Layout or an ortho sports doctor near you? Dr. Nitin N Sunku is a fellowship-trained sports orthopedic doctor in Bangalore and the official team doctor for Bengaluru FC — treating ACL and meniscus tears, cartilage and ligament injuries, shoulder and ankle problems with the same sports medicine protocols used for professional athletes.
                                </p>

                                <div className="flex flex-wrap gap-2 mb-7">
                                    <span className="inline-flex items-center gap-1.5 bg-white/90 backdrop-blur border border-gray-200 rounded-full px-3 py-1.5 text-xs sm:text-sm font-medium text-gray-800 shadow-sm">
                                        <CheckCircle className="w-3.5 h-3.5 text-emerald-600" />
                                        Bengaluru FC Team Doctor
                                    </span>
                                    <span className="inline-flex items-center gap-1.5 bg-white/90 backdrop-blur border border-gray-200 rounded-full px-3 py-1.5 text-xs sm:text-sm font-medium text-gray-800 shadow-sm">
                                        <CheckCircle className="w-3.5 h-3.5 text-emerald-600" />
                                        Fellowship-Trained
                                    </span>
                                    <span className="inline-flex items-center gap-1.5 bg-white/90 backdrop-blur border border-gray-200 rounded-full px-3 py-1.5 text-xs sm:text-sm font-medium text-gray-800 shadow-sm">
                                        <Star className="w-3.5 h-3.5 text-yellow-500 fill-yellow-500" />
                                        Same-Day Slots
                                    </span>
                                </div>

                                <div className="flex flex-col sm:flex-row gap-3 mb-6">
                                    <TrackedButton
                                        buttonName="Book Consultation - Hero"
                                        buttonLocation="Hero"
                                        href="#booking-form"
                                        className="group inline-flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold px-6 py-4 rounded-xl shadow-lg shadow-blue-500/30 hover:shadow-xl hover:shadow-blue-500/40 transition-all transform hover:-translate-y-0.5"
                                        metadata={{ cta_type: "form_scroll", condition: "sports-ortho-hsr" }}
                                    >
                                        <Calendar className="w-5 h-5" />
                                        Book Appointment
                                        <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                                    </TrackedButton>
                                    <TrackedWhatsApp
                                        phoneDigits={PRIMARY_PHONE_DIGITS}
                                        message={WHATSAPP_MESSAGE}
                                        location="Hero"
                                        className="inline-flex items-center justify-center gap-2 bg-white border-2 border-emerald-500 text-emerald-700 hover:bg-emerald-50 font-semibold px-6 py-4 rounded-xl shadow-sm transition-all"
                                    >
                                        <MessageCircle className="w-5 h-5" />
                                        WhatsApp Us
                                    </TrackedWhatsApp>
                                </div>

                                <TrackedCall phone={PRIMARY_PHONE} location="Hero" className="inline-flex items-center gap-3 group">
                                    <span className="w-11 h-11 bg-gradient-to-br from-blue-600 to-blue-800 group-hover:scale-110 transition-transform rounded-full flex items-center justify-center shadow-md">
                                        <Phone className="w-5 h-5 text-white" />
                                    </span>
                                    <div>
                                        <p className="text-[11px] text-gray-500 leading-tight">Call directly</p>
                                        <p className="text-lg sm:text-xl font-bold text-blue-900 leading-tight">{PRIMARY_PHONE}</p>
                                    </div>
                                </TrackedCall>
                            </div>
                        </FadeIn>

                        <FadeIn direction="left" delay={0.15}>
                            <HeroImage alt="Dr. Nitin N Sunku — Sports Orthopedic Doctor in HSR Layout & Bengaluru FC Team Doctor, Bengaluru" />
                        </FadeIn>
                    </div>
                </div>
            </section>

            <StatsStrip />

            {/* ============= CONDITIONS TREATED ============= */}
            <section id="services" className="bg-gradient-to-b from-blue-50/60 to-white py-14 md:py-20 overflow-hidden">
                <div className="container mx-auto px-4 max-w-7xl">
                    <FadeIn>
                        <div className="text-center mb-12">
                            <span className="inline-block text-xs font-bold text-blue-700 uppercase tracking-widest mb-3">
                                — Sports Injuries We Treat —
                            </span>
                            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-3 break-words">
                                Sports Orthopedics for{" "}
                                <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                                    Every Level of Athlete
                                </span>
                            </h2>
                            <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
                                Specialist diagnosis and treatment for the full range of sports injuries — at our HSR Layout clinic.
                            </p>
                        </div>
                    </FadeIn>

                    <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-5 max-w-6xl mx-auto">
                        {conditions.map((c, idx) => (
                            <FadeIn key={c} delay={idx * 0.05}>
                                <div className="group flex items-center gap-3 bg-white rounded-2xl p-4 md:p-5 border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 h-full">
                                    <span className="w-9 h-9 rounded-xl bg-blue-100 flex items-center justify-center flex-shrink-0 group-hover:bg-blue-600 transition-colors">
                                        <CheckCircle className="w-5 h-5 text-blue-700 group-hover:text-white transition-colors" />
                                    </span>
                                    <span className="font-semibold text-gray-800 text-sm md:text-base leading-tight">
                                        {c}
                                    </span>
                                </div>
                            </FadeIn>
                        ))}
                    </div>
                </div>
            </section>

            {/* ============= WHAT IS A SPORTS ORTHOPEDIC DOCTOR (unique content) ============= */}
            <section id="about" className="bg-white py-14 md:py-20 overflow-hidden">
                <div className="container mx-auto px-4 max-w-3xl">
                    <FadeIn>
                        <div className="mb-8">
                            <span className="inline-block text-xs font-bold text-blue-700 uppercase tracking-widest mb-3">
                                — What Is a Sports Orthopedic Doctor? —
                            </span>
                            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-900 leading-tight break-words">
                                Sports orthopedics is not the same as general orthopedics.
                            </h2>
                        </div>
                    </FadeIn>
                    <FadeIn delay={0.1}>
                        <div className="space-y-4 text-base md:text-lg text-gray-700 leading-relaxed">
                            <p>
                                A sports orthopedic doctor is an orthopedic surgeon with additional fellowship training in sports medicine and arthroscopy. The difference matters: an athletic injury is judged not only by whether it heals, but by whether you can return to your sport at the same level — and do it safely. That means sharper diagnosis, a bias toward joint-preserving keyhole surgery, and a rehabilitation plan built around return-to-play, not just pain relief.
                            </p>
                            <p>
                                As the official team doctor for Bengaluru FC, Dr. Nitin makes these calls under real pressure — pitch-side acute injuries, imaging decisions, and clearance for players whose careers depend on getting it right. If you have been searching for a sports orthopedic doctor near you, a sports medicine specialist near me, or an ortho sports doctor in HSR, that same standard is available to you at the HSR Layout clinic.
                            </p>
                            <p>
                                Most sports injuries do <strong>not</strong> need surgery. The first job is an honest diagnosis and a conservative plan where one will work — activity modification, targeted physiotherapy, injections such as PRP where appropriate. Surgery is recommended only when the evidence clearly supports it for your specific injury and goals.
                            </p>
                        </div>
                    </FadeIn>
                </div>
            </section>

            {/* ============= WHY CHOOSE ============= */}
            <section className="bg-gradient-to-br from-gray-50 via-blue-50/40 to-white py-14 md:py-20 overflow-hidden">
                <div className="container mx-auto px-4 max-w-7xl">
                    <FadeIn>
                        <div className="text-center mb-12">
                            <span className="inline-block text-xs font-bold text-blue-700 uppercase tracking-widest mb-3">
                                — Why Choose Dr. Nitin —
                            </span>
                            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-3 break-words">
                                Elite-Level Care.{" "}
                                <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                                    Athlete-First Mindset.
                                </span>
                            </h2>
                            <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
                                A clear path back to the sport you love.
                            </p>
                        </div>
                    </FadeIn>

                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-5">
                        {whyChoose.map((point, idx) => (
                            <FadeIn key={point.title} delay={idx * 0.06}>
                                <div className="group bg-white rounded-2xl p-5 md:p-6 border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 h-full">
                                    <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center mb-4 group-hover:from-blue-600 group-hover:to-blue-800 transition-colors">
                                        <point.icon className="w-6 h-6 text-blue-700 group-hover:text-white transition-colors" />
                                    </div>
                                    <h3 className="font-bold text-gray-900 text-base md:text-lg mb-2 leading-tight">
                                        {point.title}
                                    </h3>
                                    <p className="text-sm text-gray-600 leading-relaxed">
                                        {point.description}
                                    </p>
                                </div>
                            </FadeIn>
                        ))}
                    </div>
                </div>
            </section>

            <GoogleReviews />

            {/* ============= BOOKING FORM ============= */}
            <section id="booking-form" className="relative bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 py-12 sm:py-16 md:py-24 overflow-hidden">
                <div aria-hidden className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(circle at 2px 2px, white 1px, transparent 0)", backgroundSize: "32px 32px" }}></div>
                <div aria-hidden className="absolute -top-32 -left-32 w-96 h-96 bg-cyan-300/20 rounded-full blur-3xl"></div>
                <div aria-hidden className="absolute -bottom-32 -right-32 w-96 h-96 bg-indigo-300/20 rounded-full blur-3xl"></div>

                <div className="container mx-auto px-4 relative z-10">
                    <div className="max-w-2xl mx-auto">
                        <FadeIn>
                            <div className="text-center mb-8 text-white">
                                <span className="inline-flex items-center gap-2 bg-white/15 backdrop-blur border border-white/20 rounded-full px-4 py-1.5 mb-4 text-xs font-bold uppercase tracking-wider">
                                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
                                    Same-Day Appointments
                                </span>
                                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold mb-3 leading-tight break-words">
                                    Book Your Sports Ortho Consultation
                                </h2>
                                <p className="text-base md:text-lg text-blue-100 max-w-md mx-auto">
                                    Tell us about your injury — our team will call you back within hours to confirm your slot.
                                </p>
                            </div>
                        </FadeIn>

                        <FadeIn delay={0.1}>
                            <div className="bg-white rounded-3xl shadow-2xl p-6 md:p-10 border border-white/50">
                                <BookingForm source="ads-sports-ortho-hsr" />
                            </div>
                        </FadeIn>

                        <FadeIn delay={0.2}>
                            <div className="mt-8 grid sm:grid-cols-2 gap-3">
                                <TrackedCall phone={PRIMARY_PHONE} location="Booking Section" className="inline-flex items-center justify-center gap-2 bg-white/95 hover:bg-white text-blue-700 font-semibold px-5 py-3.5 rounded-xl shadow-lg transition">
                                    <Phone className="w-5 h-5" />
                                    Call {PRIMARY_PHONE}
                                </TrackedCall>
                                <TrackedWhatsApp phoneDigits={PRIMARY_PHONE_DIGITS} message={WHATSAPP_MESSAGE} location="Booking Section" className="inline-flex items-center justify-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white font-semibold px-5 py-3.5 rounded-xl shadow-lg shadow-emerald-500/30 transition">
                                    <MessageCircle className="w-5 h-5" />
                                    WhatsApp Us
                                </TrackedWhatsApp>
                            </div>
                        </FadeIn>
                    </div>
                </div>
            </section>

            <LocationsWithMaps
                clinics={CLINICS}
                primaryId={CLINIC.id}
                heading="Visit Us — Two Convenient Locations"
                subheading="Sports orthopedic care in HSR Layout and Attibele, Bengaluru."
            />

            <LandingFaq
                pageName="Sports Orthopedic Doctor in HSR Layout"
                pagePath="/sports-orthopedic-doctor-hsr-layout"
                aboutCondition="Sports injury"
                subheading="Straight answers about sports orthopedics, ACL tears and return-to-play in HSR Layout."
                items={[
                    {
                        q: "What does a sports orthopedic doctor do?",
                        a: "A sports orthopedic doctor is an orthopedic surgeon with extra fellowship training in sports medicine and arthroscopy. They diagnose and treat sports injuries — ligament and cartilage tears, dislocations, tendon and overuse injuries — with an emphasis on safe return to sport, keyhole surgery where surgery is needed, and structured rehabilitation. Dr. Nitin is the official team doctor for Bengaluru FC.",
                    },
                    {
                        q: "Where can I find a sports orthopedic doctor in HSR Layout?",
                        a: "Dr. Nitin consults at Health Nest Hospital, Sector 2, 24th Main Road, HSR Layout, Bengaluru 560102 — convenient for HSR Layout, Koramangala, BTM Layout, Bellandur and Sarjapur Road. Call +91-9449031003 or use the booking form on this page for a same-day slot where available.",
                    },
                    {
                        q: "Does an ACL tear always need surgery?",
                        a: "No. It depends on your age, activity level, degree of instability and associated injuries. Recreational athletes with a stable knee can sometimes recover with structured rehabilitation alone; competitive and pivot-sport athletes usually benefit from arthroscopic reconstruction. You'll get an honest recommendation, not a default to surgery.",
                    },
                    {
                        q: "How soon after a sports injury should I see a doctor?",
                        a: "Within a few days if there was swelling, a 'pop', instability, locking, or an inability to bear weight. Early, accurate diagnosis stops small injuries from becoming chronic problems and shortens overall recovery time.",
                    },
                    {
                        q: "Is the same care available for amateur and weekend athletes?",
                        a: "Yes. As a sports orthopedic doctor and team doctor for Bengaluru FC, Dr. Nitin applies the same diagnostic standards, imaging protocols and return-to-play criteria used for professional footballers to weekend runners, gym-goers and school athletes.",
                    },
                    {
                        q: "What does a sports orthopedics consultation cost?",
                        a: "A consultation is typically ₹500–₹1,000 and includes a clinical examination and a written plan. Costs for arthroscopy or ligament reconstruction depend on the injury and hospital, are discussed transparently before any decision, and are widely covered by health insurance.",
                    },
                ]}
            />

            <FinalCtaStrip
                clinic={CLINIC}
                title="Don't Let a Sports Injury Sideline You."
                subtitle="Diagnostic precision trusted by professional athletes."
            />

            <MobileStickyCTA clinic={CLINIC} />
            <LandingFooter clinic={CLINIC} />
        </main>
    );
}
