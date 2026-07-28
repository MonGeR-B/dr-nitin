import { Metadata } from "next";
import {
    Phone,
    Award,
    Activity,
    CheckCircle,
    ShieldCheck,
    Stethoscope,
    Bone,
    Heart,
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
    // `absolute` opts out of the root layout's "%s | Dr. Nitin N Sunku" template.
    title: {
        absolute:
            "Total Knee Replacement Surgery in Bangalore | Dr. Nitin N Sunku",
    },
    description:
        "Total knee replacement surgery by Dr. Nitin N Sunku, experienced knee replacement surgeon in Bangalore. Advanced implants, faster recovery & transparent knee replacement surgery cost. Book a consultation.",
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
        "knee replacement surgeon Bangalore",
        "Dr. Nitin N Sunku",
    ],
    openGraph: {
        title:
            "Total Knee Replacement Surgery in Bangalore — Dr. Nitin N Sunku",
        description:
            "Experienced knee replacement surgeon. Advanced implants, minimally invasive technique, faster recovery and transparent cost.",
        url: `${siteOrigin}/total-knee-replacement-surgery`,
        type: "website",
    },
    robots: { index: false, follow: true }, // ads-only landing page: kept out of organic index; 'follow' preserves link equity.
};

const CLINIC = PRIMARY_CLINIC;
const PRIMARY_PHONE = CLINIC.phone;
const PRIMARY_PHONE_DIGITS = CLINIC.phoneDigits;
const WHATSAPP_MESSAGE =
    "Hi Dr. Nitin, I would like to consult about total knee replacement surgery.";

export default function TotalKneeReplacementSurgeryPage() {
    const candidates = [
        "Severe knee arthritis or osteoarthritis",
        "Constant knee pain that limits daily activity",
        "Pain at rest or at night, despite medication",
        "Stiffness, deformity or bow-legged knees",
        "Little relief from physiotherapy or injections",
        "Difficulty walking, climbing stairs or standing up",
    ];

    const steps = [
        {
            title: "Assessment & Planning",
            description:
                "X-rays, examination and a review of previous treatment to confirm whether total knee replacement is genuinely the right step for you.",
        },
        {
            title: "The Operation",
            description:
                "The damaged joint surfaces are replaced with a precisely fitted implant using a tissue-sparing technique — usually under spinal anaesthesia.",
        },
        {
            title: "Early Mobilisation",
            description:
                "Most patients stand and take assisted steps within 24 hours, with physiotherapy starting the same or next day.",
        },
        {
            title: "Rehabilitation & Return",
            description:
                "A structured home and clinic rehab plan rebuilds strength and range of motion, with most patients walking independently in a few weeks.",
        },
    ];

    const sellingPoints = [
        {
            icon: Award,
            title: "Experienced Knee Replacement Surgeon",
            description:
                "10+ years and a high volume of knee procedures, from single (unilateral) to bilateral total knee replacement.",
        },
        {
            icon: Stethoscope,
            title: "Conservative-First Philosophy",
            description:
                "Surgery is recommended only when non-surgical options are genuinely exhausted — an honest 'do you actually need it' assessment.",
        },
        {
            icon: Activity,
            title: "Advanced Implants & Technique",
            description:
                "Modern implants and tissue-sparing surgery for less pain, faster mobilisation and durable, long-lasting results.",
        },
        {
            icon: ShieldCheck,
            title: "Transparent Cost & Insurance Help",
            description:
                "Clear cost bands discussed upfront, with assistance on cashless pre-authorisation and insurance paperwork.",
        },
        {
            icon: Heart,
            title: "Faster, Guided Recovery",
            description:
                "Same-day mobilisation and a structured rehab pathway so you get back to walking, stairs and daily life sooner.",
        },
        {
            icon: Bone,
            title: "Two Convenient Clinics",
            description:
                "Consultations and follow-up at Attibele and HSR Layout, Bengaluru — easy access from across South Bengaluru.",
        },
    ];

    const costBands = [
        {
            band: "Standard Implant (Unilateral)",
            price: "₹1.7L – ₹3.5L",
            note: "Single-knee total replacement with a standard implant.",
        },
        {
            band: "Typical Range (Unilateral)",
            price: "₹2.5L – ₹3.5L",
            note: "What most single-knee replacements work out to, all-inclusive.",
        },
        {
            band: "Premium / High-Flex Implant",
            price: "₹3L – ₹6.5L+",
            note: "Advanced or high-flexion implants and specialised bearings.",
        },
        {
            band: "Bilateral (Both Knees)",
            price: "₹3.5L – ₹8L",
            note: "Both knees replaced, depending on implant and single vs staged surgery.",
        },
    ];

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
                                    Conservative-First · Surgery Only When Needed
                                </span>

                                <h1 className="text-[2.5rem] sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-gray-900 leading-[1.05] tracking-tight mb-4 break-words">
                                    <span className="block">Total Knee Replacement</span>
                                    <span className="block bg-gradient-to-r from-blue-700 via-blue-600 to-indigo-600 bg-clip-text text-transparent pb-1">
                                        Surgery in Bangalore
                                    </span>
                                </h1>

                                <p className="text-lg sm:text-xl md:text-2xl text-blue-800 font-semibold mb-4">
                                    Dr. Nitin N Sunku — Knee Replacement Surgeon
                                </p>
                                <p className="text-base sm:text-lg text-gray-600 mb-6 max-w-xl leading-relaxed">
                                    If knee arthritis has made walking, stairs or standing painful, total knee replacement surgery can restore pain-free movement. Dr. Nitin N Sunku is an experienced knee replacement surgeon using advanced implants and tissue-sparing technique for faster recovery — with an honest, conservative-first assessment of whether you actually need the operation.
                                </p>

                                <div className="flex flex-wrap gap-2 mb-7">
                                    <span className="inline-flex items-center gap-1.5 bg-white/90 backdrop-blur border border-gray-200 rounded-full px-3 py-1.5 text-xs sm:text-sm font-medium text-gray-800 shadow-sm">
                                        <CheckCircle className="w-3.5 h-3.5 text-emerald-600" />
                                        Advanced Implants
                                    </span>
                                    <span className="inline-flex items-center gap-1.5 bg-white/90 backdrop-blur border border-gray-200 rounded-full px-3 py-1.5 text-xs sm:text-sm font-medium text-gray-800 shadow-sm">
                                        <CheckCircle className="w-3.5 h-3.5 text-emerald-600" />
                                        Insurance / Cashless Help
                                    </span>
                                    <span className="inline-flex items-center gap-1.5 bg-white/90 backdrop-blur border border-gray-200 rounded-full px-3 py-1.5 text-xs sm:text-sm font-medium text-gray-800 shadow-sm">
                                        <Star className="w-3.5 h-3.5 text-yellow-500 fill-yellow-500" />
                                        10+ Years Experience
                                    </span>
                                </div>

                                <div className="flex flex-col sm:flex-row gap-3 mb-6">
                                    <TrackedButton
                                        buttonName="Book Appointment - Hero"
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
                            <HeroImage alt="Dr. Nitin N Sunku — Total Knee Replacement Surgeon in Bangalore" />
                        </FadeIn>
                    </div>
                </div>
            </section>

            <StatsStrip />

            {/* ============= WHO NEEDS IT ============= */}
            <section id="services" className="bg-gradient-to-b from-blue-50/60 to-white py-14 md:py-20 overflow-hidden">
                <div className="container mx-auto px-4 max-w-7xl">
                    <FadeIn>
                        <div className="text-center mb-12">
                            <span className="inline-block text-xs font-bold text-blue-700 uppercase tracking-widest mb-3">
                                — Do You Need a Knee Replacement? —
                            </span>
                            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-3 break-words">
                                Signs a Knee Replacement{" "}
                                <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                                    May Help
                                </span>
                            </h2>
                            <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
                                Total knee replacement is considered when the joint is badly worn and other treatments no longer control the pain.
                            </p>
                        </div>
                    </FadeIn>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-5 max-w-6xl mx-auto">
                        {candidates.map((item, idx) => (
                            <FadeIn key={item} delay={idx * 0.05}>
                                <div className="group flex items-start gap-3 bg-white rounded-2xl p-4 md:p-5 border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 h-full">
                                    <span className="w-9 h-9 rounded-xl bg-blue-100 flex items-center justify-center flex-shrink-0 group-hover:bg-blue-600 transition-colors">
                                        <CheckCircle className="w-5 h-5 text-blue-700 group-hover:text-white transition-colors" />
                                    </span>
                                    <span className="font-semibold text-gray-800 text-sm md:text-base leading-snug">
                                        {item}
                                    </span>
                                </div>
                            </FadeIn>
                        ))}
                    </div>
                </div>
            </section>

            {/* ============= HOW THE SURGERY WORKS (unique content) ============= */}
            <section id="about" className="bg-white py-14 md:py-20 overflow-hidden">
                <div className="container mx-auto px-4 max-w-5xl">
                    <FadeIn>
                        <div className="text-center mb-12">
                            <span className="inline-block text-xs font-bold text-blue-700 uppercase tracking-widest mb-3">
                                — What to Expect —
                            </span>
                            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-3 break-words">
                                Your Knee Replacement, Step by Step
                            </h2>
                        </div>
                    </FadeIn>

                    <div className="grid sm:grid-cols-2 gap-4 md:gap-6">
                        {steps.map((step, idx) => (
                            <FadeIn key={step.title} delay={idx * 0.08}>
                                <div className="bg-gradient-to-br from-blue-50 to-indigo-50/50 rounded-2xl p-6 border border-blue-100 h-full">
                                    <div className="flex items-center gap-3 mb-3">
                                        <span className="w-9 h-9 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold flex-shrink-0">
                                            {idx + 1}
                                        </span>
                                        <h3 className="font-bold text-gray-900 text-lg leading-tight">
                                            {step.title}
                                        </h3>
                                    </div>
                                    <p className="text-sm md:text-base text-gray-600 leading-relaxed">
                                        {step.description}
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
                                — Transparent Pricing —
                            </span>
                            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-3 break-words">
                                Knee Replacement Surgery Cost
                            </h2>
                            <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
                                Indicative all-inclusive cost bands in Bangalore. Your final knee surgery cost depends on the implant chosen, your health, and hospital — and is confirmed in writing after consultation.
                            </p>
                        </div>
                    </FadeIn>

                    <FadeIn delay={0.1}>
                        <div className="bg-white rounded-2xl shadow-md border border-blue-100 overflow-hidden">
                            {costBands.map((row, idx) => (
                                <div
                                    key={row.band}
                                    className={`p-6 ${idx !== costBands.length - 1 ? "border-b border-blue-100" : ""}`}
                                >
                                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-2">
                                        <p className="text-lg font-semibold text-gray-900">{row.band}</p>
                                        <span className="inline-block bg-blue-100 text-blue-800 font-semibold rounded-full px-4 py-1 text-sm sm:text-base self-start sm:self-auto">
                                            {row.price}
                                        </span>
                                    </div>
                                    <p className="text-sm text-gray-600 leading-relaxed">{row.note}</p>
                                </div>
                            ))}
                        </div>
                    </FadeIn>

                    <p className="text-center text-sm text-gray-600 mt-6">
                        Want a detailed breakdown? See our full{" "}
                        <a href="/knee-replacement-cost-bangalore" className="text-blue-700 font-semibold hover:text-blue-900 underline underline-offset-2">
                            knee replacement surgery cost in Bangalore
                        </a>{" "}
                        guide — or book a consultation for a personalised, written estimate. Most policies cover knee replacement, and the team assists with cashless pre-authorisation.
                    </p>
                </div>
            </section>

            {/* ============= WHY CHOOSE ============= */}
            <section className="bg-white py-14 md:py-20 overflow-hidden">
                <div className="container mx-auto px-4 max-w-7xl">
                    <FadeIn>
                        <div className="text-center mb-12">
                            <span className="inline-block text-xs font-bold text-blue-700 uppercase tracking-widest mb-3">
                                — Why Choose Dr. Nitin —
                            </span>
                            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-3 break-words">
                                A Knee Replacement You Can{" "}
                                <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                                    Trust
                                </span>
                            </h2>
                        </div>
                    </FadeIn>

                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-5">
                        {sellingPoints.map((point, idx) => (
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
                                    Free Surgical Opinion
                                </span>
                                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold mb-3 leading-tight break-words">
                                    Book Your Knee Consultation
                                </h2>
                                <p className="text-base md:text-lg text-blue-100 max-w-md mx-auto">
                                    Share your details — our team will call you back within hours with next steps and a cost estimate.
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
                subheading="Knee replacement consultation and follow-up in Attibele and HSR Layout, Bengaluru."
            />

            <LandingFaq
                pageName="Total Knee Replacement Surgery in Bangalore"
                pagePath="/total-knee-replacement-surgery"
                aboutCondition="Knee osteoarthritis"
                subheading="Practical answers about total knee replacement surgery, cost, and recovery."
                items={[
                    {
                        q: "What is total knee replacement surgery?",
                        a: "Total knee replacement (total knee arthroplasty) is an operation that replaces the worn-out surfaces of a damaged knee joint with a precisely fitted artificial implant. It is one of the most successful and predictable orthopedic operations for advanced knee arthritis, relieving pain and restoring movement when other treatments no longer work.",
                    },
                    {
                        q: "How much does knee replacement surgery cost in Bangalore?",
                        a: "As an indicative guide, a single (unilateral) total knee replacement typically ranges from about ₹1.7L to ₹3.5L, with most cases falling around ₹2.5L–₹3.5L. Premium or high-flexion implants can be ₹3L–₹6.5L+, and both knees together roughly ₹3.5L–₹8L. Your final knee replacement surgery cost depends on the implant, your health and the hospital, and is confirmed in writing after consultation. See our detailed cost guide at /knee-replacement-cost-bangalore.",
                    },
                    {
                        q: "Do I really need a knee replacement, or are there alternatives?",
                        a: "Not everyone with knee pain needs surgery. Dr. Nitin follows a conservative-first approach — physiotherapy, medication, weight management and targeted injections are considered first. Total knee replacement is recommended only when the joint is badly worn and these measures no longer control your pain and limit your daily life.",
                    },
                    {
                        q: "How long is recovery after a knee replacement operation?",
                        a: "Most patients stand and take assisted steps within 24 hours and walk with support within days. Independent walking usually returns over a few weeks, with continued strengthening for a few months. Recovery depends on your fitness, whether one or both knees are done, and how closely you follow the rehab plan.",
                    },
                    {
                        q: "Is knee replacement covered by insurance?",
                        a: "Yes — total knee replacement is covered by most health insurance policies. The team assists with cashless pre-authorisation and the required paperwork at both clinics. Bring your policy details to the consultation so coverage can be confirmed.",
                    },
                    {
                        q: "Where can I find a knee replacement surgeon near me in Bangalore?",
                        a: "Dr. Nitin N Sunku consults at Raghava Multispeciality Hospital, Attibele (convenient for Electronic City, Sarjapur Road and Hosur Road) and Health Nest Hospital, HSR Layout. Call +91-9980031006 or use the booking form on this page to arrange a consultation.",
                    },
                ]}
            />

            <FinalCtaStrip
                clinic={CLINIC}
                title="Walk Without Knee Pain Again."
                subtitle="Book a knee replacement consultation today."
            />

            <MobileStickyCTA clinic={CLINIC} />
            <LandingFooter clinic={CLINIC} />
        </main>
    );
}
