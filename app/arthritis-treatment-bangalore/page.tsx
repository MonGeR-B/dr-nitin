import { Metadata } from "next";
import Link from "next/link";
import {
    Phone,
    Award,
    Heart,
    CheckCircle,
    Stethoscope,
    Users,
    Activity,
    ShieldCheck,
    Hospital,
    Star,
    MessageCircle,
    Calendar,
    ChevronRight,
    Layers,
    Syringe,
    Scale,
} from "lucide-react";

import { BookingForm } from "@/components/forms/booking-form";
import { HideNavigation } from "@/components/ui/hide-navigation";
import { LandingPageTracker } from "@/components/analytics/landing-page-tracker";
import { TrackedButton } from "@/components/analytics/tracked-button";
import { TrackedCall } from "@/components/analytics/tracked-call";
import { TrackedWhatsApp } from "@/components/analytics/tracked-whatsapp";
import { FadeIn } from "@/components/animations/fade-in";
import { siteOrigin } from "@/lib/site-url";
import { CLINICS, PRIMARY_CLINIC } from "@/lib/practice";
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
import { LandingArticle } from "@/components/landing/landing-article";

export const metadata: Metadata = {
    // `absolute` opts out of the root layout's "%s | Dr. Nitin N Sunku"
    // template — without it the live <title> renders the brand twice.
    title: { absolute: "Arthritis Treatment in Bangalore | Dr. Nitin N Sunku" },
    description:
        "Knee & joint arthritis treated stage by stage — physiotherapy, injections (HA/GFC), and replacement only when needed. Attibele & HSR Layout. Book today.",
    alternates: { canonical: `${siteOrigin}/arthritis-treatment-bangalore` },
    keywords: [
        "arthritis treatment Bangalore",
        "arthritis doctor Bangalore",
        "knee arthritis treatment Bangalore",
        "osteoarthritis specialist Bangalore",
        "arthritis treatment without surgery",
        "joint pain arthritis doctor Bangalore",
        "knee arthritis injection Bangalore",
        "early arthritis treatment Bangalore",
        "arthritis doctor Attibele",
        "arthritis specialist HSR Layout",
    ],
    openGraph: {
        title: "Arthritis Treatment in Bangalore — Dr. Nitin N Sunku",
        description:
            "Stage-matched arthritis care: lifestyle and physiotherapy first, precise injections where indicated, joint replacement only when genuinely needed.",
        url: `${siteOrigin}/arthritis-treatment-bangalore`,
        type: "website",
    },
    robots: { index: true, follow: true },
};

const CLINIC = PRIMARY_CLINIC;
const PHONE = CLINIC.phone;
const PHONE_DIGITS = CLINIC.phoneDigits;
const WHATSAPP_MESSAGE =
    "Hi Dr. Nitin, I have joint pain / arthritis and would like to book an appointment.";

const conditions = [
    { title: "Knee Osteoarthritis", Icon: Activity },
    { title: "Hip Arthritis", Icon: Hospital },
    { title: "Shoulder Arthritis", Icon: Users },
    { title: "Early Morning Stiffness", Icon: Layers },
    { title: "Cartilage Wear & Degeneration", Icon: ShieldCheck },
    { title: "Post-Injury Arthritis", Icon: Heart },
    { title: "Overweight-Related Joint Load", Icon: Scale },
    { title: "Multiple Joint Pain", Icon: Stethoscope },
];

const stages = [
    {
        stage: "Early",
        title: "Protect the Joint",
        description:
            "Occasional pain after activity, mild stiffness. The focus: strengthening, weight optimisation, activity tweaks and education. Done properly, this stage can be held for years — no injections, no surgery.",
    },
    {
        stage: "Moderate",
        title: "Control Symptoms, Preserve Function",
        description:
            "Regular pain, difficulty with stairs and long walks. Structured physiotherapy plus, where indicated, ultrasound-guided injections — hyaluronic acid for lubrication, GFC/PRP for biological support — to reduce pain and keep you active.",
    },
    {
        stage: "Advanced",
        title: "Restore What's Lost",
        description:
            "Rest pain, night pain, deformity, life shrinking around the knee. When conservative care no longer controls symptoms, joint replacement gives reliably good results — discussed honestly, with written costs upfront.",
    },
];

const sellingPoints = [
    {
        Icon: Layers,
        title: "Stage-Matched Treatment",
        description:
            "Arthritis care fails when everyone gets the same prescription. Treatment here is matched to your stage — an early knee is managed completely differently from an advanced one.",
    },
    {
        Icon: Award,
        title: "Fellowship-Trained Specialist",
        description:
            "Dr. Nitin is a fellowship-trained orthopedic & sports medicine specialist with 10+ years of experience managing arthritis from first twinge to joint replacement.",
    },
    {
        Icon: Syringe,
        title: "Guided Injections, Not Blind Ones",
        description:
            "When an injection is indicated — hyaluronic acid, GFC or PRP — it's placed under ultrasound guidance into the exact compartment, which is a meaningful part of why it works.",
    },
    {
        Icon: Heart,
        title: "Surgery Is the Last Step, Not the First",
        description:
            "Most arthritic joints never need replacement. You'll be told honestly which stage you're in, what can realistically be preserved, and when surgery genuinely becomes the better option.",
    },
    {
        Icon: Scale,
        title: "The Weight Conversation, Handled Respectfully",
        description:
            "Every extra kilo loads the knee several-fold with each step. Weight is addressed as a practical treatment lever — with realistic guidance, not lectures.",
    },
    {
        Icon: Hospital,
        title: "Two Bengaluru Locations",
        description:
            "Consult at Raghava Multispeciality Hospital, Attibele, or Health Nest Hospital, HSR Layout — whichever is the easier drive for you.",
    },
];

export default function ArthritisTreatmentBangalorePage() {
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
                                    Stage-Matched Arthritis Care
                                </span>

                                <h1 className="text-[2.5rem] sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-gray-900 leading-[1.05] tracking-tight mb-4 break-words">
                                    <span className="block">Arthritis Treatment{" "}</span>
                                    <span className="block bg-gradient-to-r from-blue-700 via-blue-600 to-indigo-600 bg-clip-text text-transparent pb-1">
                                        in Bangalore
                                    </span>
                                </h1>

                                <p className="text-lg sm:text-xl md:text-2xl text-blue-800 font-semibold mb-4">
                                    Dr. Nitin N Sunku — Orthopedic &amp; Sports Medicine Specialist
                                </p>
                                <p className="text-base sm:text-lg text-gray-600 mb-6 max-w-xl leading-relaxed">
                                    An arthritis diagnosis is not a surgery date. It&apos;s a spectrum — and where you are on it decides everything. Early knees are protected, moderate knees are treated, advanced knees are replaced. The mistake is treating them all the same.
                                </p>

                                <div className="flex flex-wrap gap-2 mb-7">
                                    <span className="inline-flex items-center gap-1.5 bg-white/90 backdrop-blur border border-gray-200 rounded-full px-3 py-1.5 text-xs sm:text-sm font-medium text-gray-800 shadow-sm">
                                        <CheckCircle className="w-3.5 h-3.5 text-emerald-600" />
                                        Fellowship-Trained
                                    </span>
                                    <span className="inline-flex items-center gap-1.5 bg-white/90 backdrop-blur border border-gray-200 rounded-full px-3 py-1.5 text-xs sm:text-sm font-medium text-gray-800 shadow-sm">
                                        <CheckCircle className="w-3.5 h-3.5 text-emerald-600" />
                                        Non-Surgical Options First
                                    </span>
                                    <span className="inline-flex items-center gap-1.5 bg-white/90 backdrop-blur border border-gray-200 rounded-full px-3 py-1.5 text-xs sm:text-sm font-medium text-gray-800 shadow-sm">
                                        <Star className="w-3.5 h-3.5 text-yellow-500 fill-yellow-500" />
                                        Insurance Accepted
                                    </span>
                                </div>

                                <div className="flex flex-col sm:flex-row gap-3 mb-6">
                                    <TrackedButton
                                        buttonName="Book Appointment - Hero"
                                        buttonLocation="Hero"
                                        href="#booking-form"
                                        className="group inline-flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold px-6 py-4 rounded-xl shadow-lg shadow-blue-500/30 hover:shadow-xl hover:shadow-blue-500/40 transition-all transform hover:-translate-y-0.5"
                                        metadata={{ cta_type: "form_scroll", condition: "arthritis" }}
                                    >
                                        <Calendar className="w-5 h-5" />
                                        Book Appointment
                                        <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                                    </TrackedButton>
                                    <TrackedWhatsApp
                                        phoneDigits={PHONE_DIGITS}
                                        message={WHATSAPP_MESSAGE}
                                        location="Hero"
                                        className="inline-flex items-center justify-center gap-2 bg-white border-2 border-emerald-500 text-emerald-700 hover:bg-emerald-50 font-semibold px-6 py-4 rounded-xl shadow-sm transition-all"
                                    >
                                        <MessageCircle className="w-5 h-5" />
                                        WhatsApp Us
                                    </TrackedWhatsApp>
                                </div>

                                <TrackedCall phone={PHONE} location="Hero" className="inline-flex items-center gap-3 group">
                                    <span className="w-11 h-11 bg-gradient-to-br from-blue-600 to-blue-800 group-hover:scale-110 transition-transform rounded-full flex items-center justify-center shadow-md">
                                        <Phone className="w-5 h-5 text-white" />
                                    </span>
                                    <div>
                                        <p className="text-[11px] text-gray-500 leading-tight">Call directly</p>
                                        <p className="text-lg sm:text-xl font-bold text-blue-900 leading-tight">{PHONE}</p>
                                    </div>
                                </TrackedCall>
                            </div>
                        </FadeIn>

                        <FadeIn direction="left" delay={0.15}>
                            <HeroImage alt="Dr. Nitin N Sunku — Arthritis Treatment in Bangalore" />
                        </FadeIn>
                    </div>
                </div>
            </section>

            <StatsStrip />

            {/* ============= CONDITIONS ============= */}
            <section id="services" className="bg-gradient-to-b from-blue-50/60 to-white py-14 md:py-20 overflow-hidden">
                <div className="container mx-auto px-4 max-w-7xl">
                    <FadeIn>
                        <div className="text-center mb-12">
                            <span className="inline-block text-xs font-bold text-blue-700 uppercase tracking-widest mb-3">
                                — Arthritis Problems We Treat —
                            </span>
                            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-3 break-words">
                                Wherever Arthritis{" "}
                                <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                                    Shows Up
                                </span>
                            </h2>
                            <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
                                Knee, hip, shoulder — and the stiffness, swelling and morning creakiness in between.
                            </p>
                        </div>
                    </FadeIn>

                    <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-3 md:gap-5">
                        {conditions.map(({ title, Icon }, idx) => (
                            <FadeIn key={title} delay={idx * 0.05}>
                                <div className="group bg-white rounded-2xl p-5 md:p-6 border border-gray-100 shadow-sm hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 text-center h-full">
                                    <div className="w-12 h-12 mx-auto mb-3 rounded-2xl bg-blue-100 group-hover:bg-blue-600 flex items-center justify-center transition-colors">
                                        <Icon className="w-6 h-6 text-blue-700 group-hover:text-white transition-colors" />
                                    </div>
                                    <h3 className="font-bold text-gray-900 text-sm md:text-base leading-tight">
                                        {title}
                                    </h3>
                                </div>
                            </FadeIn>
                        ))}
                    </div>
                </div>
            </section>

            {/* ============= STAGE-MATCHED CARE (unique content) ============= */}
            <section className="bg-white py-14 md:py-20 overflow-hidden">
                <div className="container mx-auto px-4 max-w-7xl">
                    <FadeIn>
                        <div className="text-center mb-12">
                            <span className="inline-block text-xs font-bold text-blue-700 uppercase tracking-widest mb-3">
                                — The Right Treatment for Your Stage —
                            </span>
                            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-3 break-words">
                                Early. Moderate. Advanced.{" "}
                                <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                                    Three Different Plans.
                                </span>
                            </h2>
                            <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
                                Where you are on the arthritis spectrum decides what actually helps.
                            </p>
                        </div>
                    </FadeIn>

                    <div className="grid md:grid-cols-3 gap-4 md:gap-6 max-w-5xl mx-auto">
                        {stages.map(({ stage, title, description }, idx) => (
                            <FadeIn key={stage} delay={idx * 0.08}>
                                <div className="relative bg-white rounded-2xl p-6 md:p-7 border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 h-full">
                                    <span className="absolute -top-4 left-6 rounded-full bg-gradient-to-br from-blue-600 to-indigo-600 text-white text-xs font-bold uppercase tracking-wider px-4 py-2 shadow-md">
                                        {stage}
                                    </span>
                                    <h3 className="font-bold text-gray-900 text-base md:text-lg mt-4 mb-2 leading-tight">{title}</h3>
                                    <p className="text-sm text-gray-600 leading-relaxed">{description}</p>
                                </div>
                            </FadeIn>
                        ))}
                    </div>

                    <FadeIn delay={0.25}>
                        <div className="max-w-4xl mx-auto mt-10 bg-gradient-to-br from-blue-50 via-white to-indigo-50 rounded-2xl p-6 md:p-8 border border-blue-100 shadow-sm">
                            <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                                Go deeper on any stage:{" "}
                                <Link href="/blog/early-signs-of-knee-osteoarthritis" className="text-blue-700 font-semibold hover:text-blue-900 underline underline-offset-2">
                                    early signs of knee osteoarthritis
                                </Link>
                                ,{" "}
                                <Link href="/treatments/osteoarthritis-knee-treatment" className="text-blue-700 font-semibold hover:text-blue-900 underline underline-offset-2">
                                    the osteoarthritis knee treatment programme
                                </Link>
                                ,{" "}
                                <Link href="/treatments/non-surgical-knee-pain-treatment" className="text-blue-700 font-semibold hover:text-blue-900 underline underline-offset-2">
                                    non-surgical knee pain treatment
                                </Link>
                                , or — for advanced arthritis —{" "}
                                <Link href="/knee-replacement-cost-bangalore" className="text-blue-700 font-semibold hover:text-blue-900 underline underline-offset-2">
                                    what knee replacement actually costs
                                </Link>
                                .
                            </p>
                        </div>
                    </FadeIn>
                </div>
            </section>

            {/* ============= WHY CHOOSE ============= */}
            <section id="about" className="bg-gradient-to-br from-gray-50 via-blue-50/40 to-white py-14 md:py-20 overflow-hidden">
                <div className="container mx-auto px-4 max-w-7xl">
                    <FadeIn>
                        <div className="text-center mb-12">
                            <span className="inline-block text-xs font-bold text-blue-700 uppercase tracking-widest mb-3">
                                — Why Choose Dr. Nitin —
                            </span>
                            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-3 break-words">
                                Arthritis Care Without{" "}
                                <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                                    the Hard Sell
                                </span>
                            </h2>
                            <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
                                Six reasons patients across Bengaluru trust this practice with their joints.
                            </p>
                        </div>
                    </FadeIn>

                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-5">
                        {sellingPoints.map(({ Icon, title, description }, idx) => (
                            <FadeIn key={title} delay={idx * 0.06}>
                                <div className="group bg-white rounded-2xl p-5 md:p-6 border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 h-full">
                                    <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center mb-4 group-hover:from-blue-600 group-hover:to-blue-800 transition-colors">
                                        <Icon className="w-6 h-6 text-blue-700 group-hover:text-white transition-colors" />
                                    </div>
                                    <h3 className="font-bold text-gray-900 text-base md:text-lg mb-2 leading-tight">
                                        {title}
                                    </h3>
                                    <p className="text-sm text-gray-600 leading-relaxed">{description}</p>
                                </div>
                            </FadeIn>
                        ))}
                    </div>
                </div>
            </section>

            {/* ============= REGENERATIVE OPTIONS (unique content) ============= */}
            <section className="py-14 md:py-20 bg-gradient-to-br from-blue-700 via-blue-800 to-indigo-800 text-white relative overflow-hidden">
                <div aria-hidden className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(circle at 2px 2px, white 1px, transparent 0)", backgroundSize: "32px 32px" }}></div>
                <div className="container mx-auto px-4 max-w-6xl relative z-10">
                    <FadeIn>
                        <div className="grid lg:grid-cols-5 gap-10 items-center">
                            <div className="lg:col-span-3">
                                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-5 leading-tight">
                                    Between &ldquo;Take Painkillers&rdquo; and &ldquo;Replace the Knee&rdquo;
                                </h2>
                                <p className="text-base md:text-lg text-blue-100 leading-relaxed mb-5">
                                    There&apos;s a middle band of arthritis where patients are told to just manage with painkillers — or pushed toward surgery they&apos;re not ready for. This is exactly where guided injection therapy earns its place: hyaluronic acid to restore joint lubrication, and growth-factor concentrate (GFC) or PRP to support the joint biologically. Not a miracle cure, not for every knee — but for the right patient at the right stage, delivered precisely under ultrasound, they buy years of active life.
                                </p>
                                <div className="inline-flex items-center gap-2 bg-white/15 backdrop-blur border border-white/20 rounded-full px-5 py-2.5 text-sm font-semibold">
                                    <Syringe className="w-4 h-4" />
                                    HA · GFC · PRP — always ultrasound-guided, always stage-appropriate
                                </div>
                            </div>

                            <div className="lg:col-span-2">
                                <div className="bg-white/10 backdrop-blur border border-white/20 rounded-3xl p-7 md:p-8 text-center">
                                    <Layers className="w-12 h-12 mx-auto mb-4 text-blue-200" />
                                    <p className="text-2xl md:text-3xl font-bold leading-tight mb-2">The Middle Path</p>
                                    <p className="text-base text-blue-100 leading-relaxed">For knees too painful for exercise alone, too good to replace.</p>
                                    <div className="mt-6 pt-6 border-t border-white/20 grid grid-cols-3 gap-3 text-center">
                                        <div>
                                            <p className="text-xl font-bold">HA</p>
                                            <p className="text-[11px] text-blue-200 uppercase tracking-wider mt-1">Lubricate</p>
                                        </div>
                                        <div>
                                            <p className="text-xl font-bold">GFC</p>
                                            <p className="text-[11px] text-blue-200 uppercase tracking-wider mt-1">Support</p>
                                        </div>
                                        <div>
                                            <p className="text-xl font-bold">Physio</p>
                                            <p className="text-[11px] text-blue-200 uppercase tracking-wider mt-1">Sustain</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </FadeIn>
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
                                    Find Out What Stage You&apos;re In
                                </h2>
                                <p className="text-base md:text-lg text-blue-100 max-w-md mx-auto">
                                    Examination, X-ray if needed, and a stage-matched plan — the team will call back within hours.
                                </p>
                            </div>
                        </FadeIn>

                        <FadeIn delay={0.1}>
                            <div className="bg-white rounded-3xl shadow-2xl p-6 md:p-10 border border-white/50">
                                <BookingForm source="ads-arthritis" />
                            </div>
                        </FadeIn>

                        <FadeIn delay={0.2}>
                            <div className="mt-8 grid sm:grid-cols-2 gap-3">
                                <TrackedCall phone={PHONE} location="Booking Section" className="inline-flex items-center justify-center gap-2 bg-white/95 hover:bg-white text-blue-700 font-semibold px-5 py-3.5 rounded-xl shadow-lg transition">
                                    <Phone className="w-5 h-5" />
                                    Call {PHONE}
                                </TrackedCall>
                                <TrackedWhatsApp phoneDigits={PHONE_DIGITS} message={WHATSAPP_MESSAGE} location="Booking Section" className="inline-flex items-center justify-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white font-semibold px-5 py-3.5 rounded-xl shadow-lg shadow-emerald-500/30 transition">
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
                heading="Consult at Attibele or HSR Layout"
                subheading="Arthritis assessment, guided injections and joint replacement — at whichever clinic suits you."
            />

            <LandingArticle slug="arthritis-treatment-bangalore" />

            <LandingFaq
                pageName="Arthritis Treatment in Bangalore"
                pagePath="/arthritis-treatment-bangalore"
                aboutCondition="Osteoarthritis"
                subheading="Straight answers about arthritis treatment with Dr. Nitin N Sunku."
                items={[
                    {
                        q: "Does an arthritis diagnosis mean I'll eventually need a joint replacement?",
                        a: "No. Most people with osteoarthritis never need a replacement. With stage-appropriate care — muscle strengthening, weight optimisation, activity modification and, where indicated, guided injections — many joints are managed comfortably for decades. Replacement is for the minority whose advanced arthritis no longer responds to conservative care.",
                    },
                    {
                        q: "What non-surgical treatments actually work for knee arthritis?",
                        a: "The evidence-backed core is unglamorous but effective: quadriceps and hip strengthening, weight reduction, and activity modification. On top of that, ultrasound-guided hyaluronic acid injections can improve lubrication and comfort, and GFC/PRP can biologically support the joint in appropriately selected earlier-stage knees.",
                    },
                    {
                        q: "Are GFC and PRP injections a proven treatment or an experiment?",
                        a: "They occupy a middle ground: a growing evidence base supports their use in early-to-moderate knee osteoarthritis for pain relief and function, but they don't regrow a fully worn joint and they're not right for every knee. You'll get an honest assessment of whether your stage is one where they genuinely help — and a clear no if it isn't.",
                    },
                    {
                        q: "How much weight loss actually makes a difference to knee arthritis?",
                        a: "More than most people expect — each kilo lost reduces the load on the knee several-fold with every step, and studies show meaningful symptom improvement with even 5–10% body-weight reduction. It's often the single most powerful treatment available, which is why it's addressed seriously rather than skipped.",
                    },
                    {
                        q: "What does an arthritis consultation cost and include?",
                        a: "Typically ₹500–₹1,000, including clinical examination, staging (with X-ray where indicated), and a written stage-matched treatment plan. Injections and surgery, if ever needed, are always quoted in writing beforehand, and health insurance is accepted for procedures.",
                    },
                    {
                        q: "Where can I consult Dr. Nitin for arthritis?",
                        a: "At Raghava Multispeciality Hospital, Attibele (Mon–Sat, 10 AM–6 PM) or Health Nest Hospital, HSR Layout Sector 2 (Mon–Sat, 10 AM–8 PM). Call +91-9980031006 or book via WhatsApp or the form on this page.",
                    },
                ]}
            />

            <FinalCtaStrip
                clinic={CLINIC}
                title="Arthritis Is a Spectrum, Not a Sentence."
                subtitle="Find out your stage — and your real options. Book today."
            />

            <MobileStickyCTA clinic={CLINIC} />
            <LandingFooter clinic={CLINIC} currentPath="/arthritis-treatment-bangalore" />
        </main>
    );
}
