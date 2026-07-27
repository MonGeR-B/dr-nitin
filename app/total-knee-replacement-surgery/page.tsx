import { Metadata } from "next";
import {
    Phone,
    Bone,
    Activity,
    Users,
    CheckCircle,
    ShieldCheck,
    Stethoscope,
    Clock,
    Award,
    Star,
    MessageCircle,
    Calendar,
    ChevronRight,
} from "lucide-react";

import { BookingForm } from "@/components/forms/booking-form";
import { siteOrigin } from "@/lib/site-url";
import { CLINICS, PRIMARY_CLINIC } from "@/lib/practice";
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
    title: {
        absolute: "Total Knee Replacement Surgery in Bangalore | Dr. Nitin N Sunku",
    },
    description:
        "Total knee replacement surgery by Dr. Nitin N Sunku, experienced knee replacement surgeon in Bangalore. Advanced implants, conservative-first approach, insurance & cashless support. Book a consultation for knee replacement surgery.",
    alternates: {
        canonical: `${siteOrigin}/total-knee-replacement-surgery`,
    },
    keywords: [
        "knee replacement",
        "knee surgery",
        "knee replacement surgery",
        "total knee replacement",
        "total knee replacement surgery",
        "knee surgery cost",
        "knee replacement surgery cost",
        "knee replacement surgeons near me",
        "knee replacement operation",
        "Dr. Nitin N Sunku",
    ],
    openGraph: {
        title: "Total Knee Replacement Surgery in Bangalore — Dr. Nitin N Sunku",
        description:
            "Experienced knee replacement surgeon in Bangalore. Advanced implants, conservative-first approach, transparent costs, insurance & cashless support.",
        url: `${siteOrigin}/total-knee-replacement-surgery`,
        type: "website",
    },
    // Ads-only landing page: kept out of the organic index so it does not
    // compete with the /knee-replacement-cost-bangalore money page.
    robots: { index: false, follow: true },
};

// Attibele is the lead clinic (branding/lead-gen focus); both clinics shown.
const CLINIC = PRIMARY_CLINIC;
const PRIMARY_PHONE = CLINIC.phone;
const PRIMARY_PHONE_DIGITS = CLINIC.phoneDigits;
const WHATSAPP_MESSAGE =
    "Hi Dr. Nitin, I would like to book a knee replacement consultation.";

const candidates = [
    "Severe knee arthritis limiting daily activities",
    "Persistent pain despite medication & physiotherapy",
    "Knee pain that disturbs sleep or rest",
    "Stiffness, deformity or bow-legs (varus knee)",
    "Difficulty climbing stairs, walking or standing",
    "Failed conservative treatment over months",
];

const procedureTypes = [
    {
        title: "Total Knee Replacement",
        description:
            "The full knee joint surface is resurfaced with implants. The most common option for advanced, whole-joint arthritis.",
    },
    {
        title: "Partial (Unicompartmental) Replacement",
        description:
            "Only the damaged compartment is replaced when arthritis is limited to one part of the knee — smaller incision, faster recovery for the right candidate.",
    },
    {
        title: "Bilateral Knee Replacement",
        description:
            "Both knees addressed — either together or in stages — for patients with advanced arthritis in both knees. Decided case by case.",
    },
];

const costBands = [
    { label: "Single knee — standard", range: "₹1.7L – ₹3.5L" },
    { label: "Single knee — typical", range: "₹2.5L – ₹3.5L" },
    { label: "Single knee — premium implant", range: "₹3L – ₹6.5L+" },
    { label: "Both knees (bilateral)", range: "₹3.5L – ₹8L" },
];

const whyChoose = [
    {
        icon: Award,
        title: "Experienced Knee Replacement Surgeon",
        description:
            "Over 10 years and thousands of patients — fellowship-trained, with a contribution to Springer's Atlas of Arthroscopy.",
    },
    {
        icon: Activity,
        title: "Advanced Implants & Techniques",
        description:
            "Modern implants and precise techniques chosen for your anatomy, activity level and long-term durability.",
    },
    {
        icon: Stethoscope,
        title: "Conservative-First, Surgery Only When Needed",
        description:
            "Non-surgical options are exhausted first. Surgery is recommended only when the evidence clearly supports it for your knee.",
    },
    {
        icon: ShieldCheck,
        title: "Insurance & Cashless Support",
        description:
            "The team assists with pre-authorisation paperwork so eligible patients can use cashless health insurance for surgery.",
    },
    {
        icon: Clock,
        title: "Structured Rehab, Faster Recovery",
        description:
            "A clear rehabilitation pathway gets most patients walking with support within a day or two of surgery.",
    },
    {
        icon: Users,
        title: "Trusted by 5000+ Patients",
        description:
            "A conservative, patient-first reputation across Attibele, HSR Layout and south Bengaluru.",
    },
];

export default function TotalKneeReplacementSurgeryPage() {
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
                                    Conservative-First Knee Care
                                </span>

                                <h1 className="text-[2.5rem] sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-gray-900 leading-[1.05] tracking-tight mb-4 break-words">
                                    <span className="block">Total Knee Replacement</span>
                                    <span className="block bg-gradient-to-r from-blue-700 via-blue-600 to-indigo-600 bg-clip-text text-transparent pb-1">
                                        Surgery in Bangalore
                                    </span>
                                </h1>

                                <p className="text-lg sm:text-xl md:text-2xl text-blue-800 font-semibold mb-4">
                                    Dr. Nitin N Sunku — Knee Replacement &amp; Joint Surgeon
                                </p>
                                <p className="text-base sm:text-lg text-gray-600 mb-6 max-w-xl leading-relaxed">
                                    If knee arthritis is limiting your daily life, total knee replacement surgery can restore pain-free movement. Dr. Nitin N Sunku is an experienced knee replacement surgeon in Bangalore who recommends surgery only when non-surgical options have been exhausted — and uses advanced implants and techniques for a durable, faster recovery.
                                </p>

                                <div className="flex flex-wrap gap-2 mb-7">
                                    <span className="inline-flex items-center gap-1.5 bg-white/90 backdrop-blur border border-gray-200 rounded-full px-3 py-1.5 text-xs sm:text-sm font-medium text-gray-800 shadow-sm">
                                        <CheckCircle className="w-3.5 h-3.5 text-emerald-600" />
                                        Advanced Implants
                                    </span>
                                    <span className="inline-flex items-center gap-1.5 bg-white/90 backdrop-blur border border-gray-200 rounded-full px-3 py-1.5 text-xs sm:text-sm font-medium text-gray-800 shadow-sm">
                                        <CheckCircle className="w-3.5 h-3.5 text-emerald-600" />
                                        Cashless Insurance Support
                                    </span>
                                    <span className="inline-flex items-center gap-1.5 bg-white/90 backdrop-blur border border-gray-200 rounded-full px-3 py-1.5 text-xs sm:text-sm font-medium text-gray-800 shadow-sm">
                                        <Star className="w-3.5 h-3.5 text-yellow-500 fill-yellow-500" />
                                        10+ Years
                                    </span>
                                </div>

                                <div className="flex flex-col sm:flex-row gap-3 mb-6">
                                    <TrackedButton
                                        buttonName="Book Consultation - Hero"
                                        buttonLocation="Hero"
                                        href="#booking-form"
                                        className="group inline-flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold px-6 py-4 rounded-xl shadow-lg shadow-blue-500/30 hover:shadow-xl hover:shadow-blue-500/40 transition-all transform hover:-translate-y-0.5"
                                        metadata={{ cta_type: "form_scroll", condition: "total-knee-replacement" }}
                                    >
                                        <Calendar className="w-5 h-5" />
                                        Book Consultation
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
                            <HeroImage alt="Dr. Nitin N Sunku — Knee Replacement Surgeon in Bangalore" />
                        </FadeIn>
                    </div>
                </div>
            </section>

            <StatsStrip />

            {/* ============= CANDIDATES ============= */}
            <section id="services" className="bg-gradient-to-b from-blue-50/60 to-white py-14 md:py-20 overflow-hidden">
                <div className="container mx-auto px-4 max-w-5xl">
                    <FadeIn>
                        <div className="text-center mb-12">
                            <span className="inline-block text-xs font-bold text-blue-700 uppercase tracking-widest mb-3">
                                — Is Knee Replacement Right for You? —
                            </span>
                            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-3 break-words">
                                Signs a Knee Replacement May{" "}
                                <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                                    Help
                                </span>
                            </h2>
                            <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
                                Surgery is a last resort — but for advanced arthritis, it reliably restores mobility and relieves pain.
                            </p>
                        </div>
                    </FadeIn>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
                        {candidates.map((c, idx) => (
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

            {/* ============= PROCEDURE TYPES ============= */}
            <section className="bg-white py-14 md:py-20 overflow-hidden">
                <div className="container mx-auto px-4 max-w-6xl">
                    <FadeIn>
                        <div className="text-center mb-12">
                            <span className="inline-block text-xs font-bold text-blue-700 uppercase tracking-widest mb-3">
                                — Types of Knee Replacement —
                            </span>
                            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-3 break-words">
                                The Right Operation for Your Knee
                            </h2>
                        </div>
                    </FadeIn>

                    <div className="grid md:grid-cols-3 gap-5">
                        {procedureTypes.map((p, idx) => (
                            <FadeIn key={p.title} delay={idx * 0.08}>
                                <div className="bg-gradient-to-br from-blue-50 via-white to-indigo-50 rounded-3xl p-6 md:p-7 border border-blue-100 shadow-sm h-full">
                                    <div className="w-12 h-12 rounded-2xl bg-blue-100 flex items-center justify-center mb-4">
                                        <Bone className="w-6 h-6 text-blue-700" />
                                    </div>
                                    <h3 className="font-bold text-gray-900 text-lg mb-2 leading-tight">
                                        {p.title}
                                    </h3>
                                    <p className="text-sm text-gray-600 leading-relaxed">
                                        {p.description}
                                    </p>
                                </div>
                            </FadeIn>
                        ))}
                    </div>
                </div>
            </section>

            {/* ============= COST BANDS (unique content) ============= */}
            <section className="bg-gradient-to-br from-gray-50 via-blue-50/40 to-white py-14 md:py-20 overflow-hidden">
                <div className="container mx-auto px-4 max-w-4xl">
                    <FadeIn>
                        <div className="text-center mb-10">
                            <span className="inline-block text-xs font-bold text-blue-700 uppercase tracking-widest mb-3">
                                — Knee Replacement Surgery Cost —
                            </span>
                            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-3 break-words">
                                What Does It Cost in Bangalore?
                            </h2>
                            <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
                                Indicative ranges. Your final knee surgery cost depends on the implant, hospital, room category, and whether health insurance is used.
                            </p>
                        </div>
                    </FadeIn>

                    <FadeIn delay={0.1}>
                        <div className="grid sm:grid-cols-2 gap-4">
                            {costBands.map((band) => (
                                <div
                                    key={band.label}
                                    className="flex items-center justify-between gap-4 bg-white rounded-2xl px-5 py-5 border border-blue-100 shadow-sm"
                                >
                                    <span className="text-sm md:text-base font-semibold text-gray-800">
                                        {band.label}
                                    </span>
                                    <span className="inline-block bg-blue-100 text-blue-800 font-bold rounded-full px-4 py-1.5 text-sm md:text-base whitespace-nowrap">
                                        {band.range}
                                    </span>
                                </div>
                            ))}
                        </div>
                    </FadeIn>

                    <p className="text-center text-sm text-gray-600 mt-6">
                        Want a full breakdown of implants, insurance and what&apos;s included?{" "}
                        <a
                            href="/knee-replacement-cost-bangalore"
                            className="text-blue-700 font-semibold hover:text-blue-900 underline underline-offset-2"
                        >
                            Read our detailed knee replacement cost guide
                        </a>
                        .
                    </p>
                </div>
            </section>

            {/* ============= WHY CHOOSE ============= */}
            <section id="about" className="bg-white py-14 md:py-20 overflow-hidden">
                <div className="container mx-auto px-4 max-w-7xl">
                    <FadeIn>
                        <div className="text-center mb-12">
                            <span className="inline-block text-xs font-bold text-blue-700 uppercase tracking-widest mb-3">
                                — Why Choose Dr. Nitin —
                            </span>
                            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-3 break-words">
                                Experience You Can{" "}
                                <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                                    Trust With Your Knees
                                </span>
                            </h2>
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
                                    Book a Knee Replacement Consultation
                                </h2>
                                <p className="text-base md:text-lg text-blue-100 max-w-md mx-auto">
                                    Share your symptoms — our team will call you back within hours to confirm your slot.
                                </p>
                            </div>
                        </FadeIn>

                        <FadeIn delay={0.1}>
                            <div className="bg-white rounded-3xl shadow-2xl p-6 md:p-10 border border-white/50">
                                <BookingForm source="ads-total-knee-replacement" />
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
                subheading="Knee replacement consultations in Attibele and HSR Layout, Bengaluru."
            />

            <LandingFaq
                pageName="Total Knee Replacement Surgery in Bangalore"
                pagePath="/total-knee-replacement-surgery"
                aboutCondition="Knee osteoarthritis"
                subheading="Clear answers about knee replacement surgery, recovery and cost."
                items={[
                    {
                        q: "When is total knee replacement surgery necessary?",
                        a: "When knee arthritis has advanced to the point that pain and stiffness limit daily life, and non-surgical treatment — medication, physiotherapy, weight management, injections — no longer gives adequate relief. It is a planned, elective decision made together with your surgeon, never rushed.",
                    },
                    {
                        q: "How much does knee replacement surgery cost in Bangalore?",
                        a: "As a guide, a single knee typically ranges from about ₹2.5–3.5 lakh with standard implants, rising to ₹3–6.5 lakh or more for premium implants; both knees (bilateral) range roughly ₹3.5–8 lakh. The final knee surgery cost depends on the implant, hospital, room category and your insurance. See our detailed knee replacement cost guide for a full breakdown.",
                    },
                    {
                        q: "Is knee replacement surgery covered by insurance?",
                        a: "Yes — knee replacement is covered by most health insurance policies, and the team assists eligible patients with cashless pre-authorisation paperwork. Bring your policy details to the consultation so coverage can be checked early.",
                    },
                    {
                        q: "How long is recovery after a knee replacement operation?",
                        a: "Most patients stand and walk with support within a day or two of surgery, walk independently within a few weeks, and resume most normal activities by around 6–12 weeks with structured physiotherapy. Full recovery and comfort continue to improve over several months.",
                    },
                    {
                        q: "How long does a knee replacement last?",
                        a: "Modern knee implants commonly last 15–20 years or more, depending on your weight, activity level and implant type. Choosing the right implant and technique for your knee is a key part of the pre-surgery planning.",
                    },
                    {
                        q: "Where can I find a knee replacement surgeon near me?",
                        a: "Dr. Nitin consults at Raghava Multispeciality Hospital, Attibele (convenient for Electronic City, Sarjapur Road and Hosur Road) and Health Nest Hospital, HSR Layout. Call +91-9980031006 or use the booking form on this page to arrange a consultation.",
                    },
                ]}
            />

            <FinalCtaStrip
                clinic={CLINIC}
                title="Ready to Get Moving Again?"
                subtitle="Book a knee replacement consultation today."
            />

            <MobileStickyCTA clinic={CLINIC} />
            <LandingFooter clinic={CLINIC} />
        </main>
    );
}
