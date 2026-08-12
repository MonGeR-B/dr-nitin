import { Metadata } from "next";
import Link from "next/link";
import {
    Phone,
    CheckCircle,
    XCircle,
    Users,
    Activity,
    ShieldCheck,
    Hospital,
    Star,
    MessageCircle,
    ChevronRight,
    IndianRupee,
    FileText,
    Heart,
    BadgeCheck,
    Wallet,
} from "lucide-react";

import { BookingForm } from "@/components/forms/booking-form";
import { HideNavigation } from "@/components/ui/hide-navigation";
import { LandingPageTracker } from "@/components/analytics/landing-page-tracker";
import { TrackedButton } from "@/components/analytics/tracked-button";
import { TrackedCall } from "@/components/analytics/tracked-call";
import { TrackedWhatsApp } from "@/components/analytics/tracked-whatsapp";
import { FadeIn } from "@/components/animations/fade-in";
import { siteOrigin } from "@/lib/site-url";
import { ATTIBELE_CLINIC, CLINICS } from "@/lib/practice";
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
    title: { absolute: "Knee Replacement Cost in Bangalore 2026 | Dr. Nitin N Sunku" },
    description:
        "Knee replacement cost in Bangalore: realistic 2026 price ranges, what's included, insurance & cashless process. Get a written, itemised estimate — no surprises.",
    alternates: { canonical: `${siteOrigin}/knee-replacement-cost-bangalore` },
    keywords: [
        "knee replacement cost in Bangalore",
        "knee replacement surgery cost Bangalore",
        "total knee replacement price Bangalore",
        "TKR cost Bangalore 2026",
        "both knees replacement cost Bangalore",
        "knee replacement insurance coverage India",
        "knee replacement cost Attibele",
        "affordable knee replacement Bangalore",
        "knee replacement surgeon South Bangalore",
        "knee replacement package Bangalore",
    ],
    openGraph: {
        title: "Knee Replacement Cost in Bangalore (2026) — Honest Price Guide",
        description:
            "Realistic price ranges, what drives the cost, what's included, and how insurance works — from Dr. Nitin N Sunku, orthopedic surgeon, Attibele & HSR Layout.",
        url: `${siteOrigin}/knee-replacement-cost-bangalore`,
        type: "website",
    },
    robots: { index: true, follow: true },
};

// Surgical consultations and knee replacement are done at the Attibele hospital.
const CLINIC = ATTIBELE_CLINIC;
const PHONE = CLINIC.phone;
const PHONE_DIGITS = CLINIC.phoneDigits;
const WHATSAPP_MESSAGE =
    "Hi Dr. Nitin, I would like a cost estimate / consultation for knee replacement.";

// Indicative 2026 figures — keep in sync with any cost content elsewhere on
// the site. Always presented as ranges with a "confirm a written estimate"
// disclaimer, never as quotes.
const costBands = [
    {
        title: "Standard Total Knee Replacement",
        range: "₹1.7 – ₹3.5 lakh",
        unit: "per knee",
        note: "Conventional technique with proven cobalt-chromium implants — what most patients choose.",
        highlight: false,
    },
    {
        title: "Most Patients Actually Pay",
        range: "₹2.5 – ₹3.5 lakh",
        unit: "per knee",
        note: "The realistic band for a standard TKR including implant, OT, surgeon fee and a typical hospital stay.",
        highlight: true,
    },
    {
        title: "Premium Implants / Robotic-Assisted",
        range: "₹3 – ₹6.5 lakh+",
        unit: "per knee",
        note: "High-flexion, oxidised-zirconium or ceramic implants, or robotic/computer-navigated technique.",
        highlight: false,
    },
    {
        title: "Bilateral (Both Knees Together)",
        range: "₹3.5 – ₹8 lakh",
        unit: "total",
        note: "One admission, one anaesthesia and rehab cycle — costs more in total, less than two separate surgeries.",
        highlight: false,
    },
];

const costDrivers = [
    {
        Icon: BadgeCheck,
        title: "Implant Type",
        description:
            "Usually the single biggest variable. Standard cobalt-chromium implants cost less than high-flexion, oxidised-zirconium, ceramic or custom implants. The recommendation is based on your age, activity and bone quality — not price.",
    },
    {
        Icon: Activity,
        title: "Surgical Technique",
        description:
            "Robotic-assisted and computer-navigated surgery add to the cost compared with conventional manual technique. Whether that premium is worth it for your knee is discussed openly.",
    },
    {
        Icon: Hospital,
        title: "Hospital Category & Room",
        description:
            "A large corporate hospital charges more for the same operation than a mid-sized multispeciality hospital — largely via room tariffs and overheads. Room choice (shared vs deluxe) moves the total considerably.",
    },
    {
        Icon: Users,
        title: "One Knee or Both",
        description:
            "Bilateral replacement in one sitting costs more in total than a single knee, but less than two separate admissions — and needs one rehab cycle instead of two.",
    },
    {
        Icon: Heart,
        title: "Your Overall Health",
        description:
            "Diabetes, heart disease or other conditions can require extra tests, closer monitoring or a longer stay — factored into an honest estimate upfront, not billed as a surprise later.",
    },
    {
        Icon: FileText,
        title: "What the Package Covers",
        description:
            "Two quotes are only comparable if they include the same things. Always compare itemised estimates — the checklist below shows what to look for.",
    },
];

const included = [
    "Surgeon's fee and anaesthesia",
    "Operation theatre charges",
    "The implant itself",
    "Hospital stay for the defined package days",
    "Basic medication during admission",
];

const oftenExtra = [
    "Pre-operative tests and scans (blood work, X-rays, cardiac check)",
    "Physiotherapy after discharge",
    "Extra days in hospital if recovery is slower",
    "Walker, knee brace or other aids",
    "Treatment of any complication",
];

export default function KneeReplacementCostBangalorePage() {
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
                                    <IndianRupee className="w-3.5 h-3.5" />
                                    Honest, Written, Itemised Estimates
                                </span>

                                <h1 className="text-[2.5rem] sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-gray-900 leading-[1.05] tracking-tight mb-4 break-words">
                                    {/* The trailing {" "} is load-bearing: without it the two
                                        block spans concatenate in extracted text and Google
                                        reads the H1 as "Knee ReplacementCost in Bangalore". */}
                                    <span className="block">Knee Replacement{" "}</span>
                                    <span className="block bg-gradient-to-r from-blue-700 via-blue-600 to-indigo-600 bg-clip-text text-transparent pb-1">
                                        Cost in Bangalore
                                    </span>
                                </h1>

                                <p className="text-lg sm:text-xl md:text-2xl text-blue-800 font-semibold mb-4">
                                    Dr. Nitin N Sunku — Orthopedic &amp; Joint Replacement Surgeon
                                </p>
                                <p className="text-base sm:text-lg text-gray-600 mb-6 max-w-xl leading-relaxed">
                                    Online estimates swing wildly and hospital quotes hide line items. Here are the realistic 2026 price bands, what actually drives the number up or down, and how to get a clear written estimate for <em>your</em> knee — with no surprises after admission.
                                </p>

                                <div className="flex flex-wrap gap-2 mb-7">
                                    <span className="inline-flex items-center gap-1.5 bg-white/90 backdrop-blur border border-gray-200 rounded-full px-3 py-1.5 text-xs sm:text-sm font-medium text-gray-800 shadow-sm">
                                        <CheckCircle className="w-3.5 h-3.5 text-emerald-600" />
                                        Itemised Written Estimate
                                    </span>
                                    <span className="inline-flex items-center gap-1.5 bg-white/90 backdrop-blur border border-gray-200 rounded-full px-3 py-1.5 text-xs sm:text-sm font-medium text-gray-800 shadow-sm">
                                        <CheckCircle className="w-3.5 h-3.5 text-emerald-600" />
                                        Insurance &amp; Pre-Auth Help
                                    </span>
                                    <span className="inline-flex items-center gap-1.5 bg-white/90 backdrop-blur border border-gray-200 rounded-full px-3 py-1.5 text-xs sm:text-sm font-medium text-gray-800 shadow-sm">
                                        <Star className="w-3.5 h-3.5 text-yellow-500 fill-yellow-500" />
                                        Surgery Only If Truly Needed
                                    </span>
                                </div>

                                <div className="flex flex-col sm:flex-row gap-3 mb-6">
                                    <TrackedButton
                                        buttonName="Get Estimate - Hero"
                                        buttonLocation="Hero"
                                        href="#booking-form"
                                        className="group inline-flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold px-6 py-4 rounded-xl shadow-lg shadow-blue-500/30 hover:shadow-xl hover:shadow-blue-500/40 transition-all transform hover:-translate-y-0.5"
                                        metadata={{ cta_type: "form_scroll", condition: "knee-replacement-cost" }}
                                    >
                                        <FileText className="w-5 h-5" />
                                        Get an Exact Estimate
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
                            <HeroImage alt="Dr. Nitin N Sunku — Knee Replacement Surgeon, Bangalore" />
                        </FadeIn>
                    </div>
                </div>
            </section>

            <StatsStrip
                stats={[
                    { value: "10+ Yrs", label: "Surgical Experience" },
                    { value: "Written", label: "Itemised Estimates" },
                    { value: "Cashless", label: "Pre-Auth Support" },
                    { value: "4.9★", label: "Patient Rating" },
                ]}
            />

            {/* ============= COST BANDS (unique content) ============= */}
            <section id="services" className="bg-gradient-to-b from-blue-50/60 to-white py-14 md:py-20 overflow-hidden">
                <div className="container mx-auto px-4 max-w-7xl">
                    <FadeIn>
                        <div className="text-center mb-12">
                            <span className="inline-block text-xs font-bold text-blue-700 uppercase tracking-widest mb-3">
                                — 2026 Price Ranges —
                            </span>
                            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-3 break-words">
                                What Knee Replacement{" "}
                                <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                                    Really Costs
                                </span>
                            </h2>
                            <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
                                Indicative Bangalore ranges for planning — your written estimate depends on implant, room and health factors below.
                            </p>
                        </div>
                    </FadeIn>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
                        {costBands.map(({ title, range, unit, note, highlight }, idx) => (
                            <FadeIn key={title} delay={idx * 0.06}>
                                <div
                                    className={
                                        highlight
                                            ? "relative bg-gradient-to-br from-blue-600 to-indigo-700 text-white rounded-2xl p-5 md:p-6 shadow-xl h-full"
                                            : "bg-white rounded-2xl p-5 md:p-6 border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 h-full"
                                    }
                                >
                                    {highlight && (
                                        <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-orange-500 text-white text-[10px] font-bold uppercase tracking-wider rounded-full px-3 py-1 shadow">
                                            Typical Range
                                        </span>
                                    )}
                                    <h3 className={`font-bold text-sm md:text-base leading-tight mb-3 ${highlight ? "text-white" : "text-gray-900"}`}>
                                        {title}
                                    </h3>
                                    <p className={`text-2xl md:text-3xl font-extrabold leading-tight ${highlight ? "text-white" : "text-blue-700"}`}>
                                        {range}
                                    </p>
                                    <p className={`text-xs font-semibold uppercase tracking-wide mt-1 mb-3 ${highlight ? "text-blue-100" : "text-orange-600"}`}>
                                        {unit}
                                    </p>
                                    <p className={`text-xs md:text-sm leading-relaxed ${highlight ? "text-blue-50" : "text-gray-600"}`}>
                                        {note}
                                    </p>
                                </div>
                            </FadeIn>
                        ))}
                    </div>

                    <FadeIn delay={0.25}>
                        <p className="text-center text-xs md:text-sm text-gray-500 max-w-2xl mx-auto mt-8">
                            All figures are indicative 2026 ranges for general planning. Prices change over time and vary with the factors below — always confirm a current, written, itemised estimate before deciding.
                        </p>
                    </FadeIn>
                </div>
            </section>

            {/* ============= COST DRIVERS ============= */}
            <section className="bg-white py-14 md:py-20 overflow-hidden">
                <div className="container mx-auto px-4 max-w-7xl">
                    <FadeIn>
                        <div className="text-center mb-12">
                            <span className="inline-block text-xs font-bold text-blue-700 uppercase tracking-widest mb-3">
                                — Why Quotes Differ —
                            </span>
                            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-3 break-words">
                                What Drives the Cost{" "}
                                <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                                    Up or Down
                                </span>
                            </h2>
                            <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
                                Two patients can be quoted very different prices for &ldquo;the same&rdquo; operation. Here&apos;s why.
                            </p>
                        </div>
                    </FadeIn>

                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-5">
                        {costDrivers.map(({ Icon, title, description }, idx) => (
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

            {/* ============= INCLUDED VS EXTRA (unique content) ============= */}
            <section className="bg-gradient-to-br from-gray-50 via-blue-50/40 to-white py-14 md:py-20 overflow-hidden">
                <div className="container mx-auto px-4 max-w-5xl">
                    <FadeIn>
                        <div className="text-center mb-12">
                            <span className="inline-block text-xs font-bold text-blue-700 uppercase tracking-widest mb-3">
                                — Read the Fine Print —
                            </span>
                            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-3 break-words">
                                What a Package{" "}
                                <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                                    Includes — and Doesn&apos;t
                                </span>
                            </h2>
                            <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
                                Ask any hospital for this breakdown before comparing quotes.
                            </p>
                        </div>
                    </FadeIn>

                    <div className="grid md:grid-cols-2 gap-5">
                        <FadeIn>
                            <div className="bg-emerald-50/70 rounded-2xl border border-emerald-100 p-6 md:p-7 h-full">
                                <h3 className="flex items-center gap-2 font-bold text-emerald-800 text-lg mb-4">
                                    <CheckCircle className="w-5 h-5" />
                                    Usually Included
                                </h3>
                                <ul className="space-y-3">
                                    {included.map((item) => (
                                        <li key={item} className="flex gap-2.5 text-sm md:text-base text-gray-700 leading-relaxed">
                                            <CheckCircle className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-1" />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </FadeIn>
                        <FadeIn delay={0.1}>
                            <div className="bg-orange-50/70 rounded-2xl border border-orange-100 p-6 md:p-7 h-full">
                                <h3 className="flex items-center gap-2 font-bold text-orange-800 text-lg mb-4">
                                    <XCircle className="w-5 h-5" />
                                    Often Billed Extra
                                </h3>
                                <ul className="space-y-3">
                                    {oftenExtra.map((item) => (
                                        <li key={item} className="flex gap-2.5 text-sm md:text-base text-gray-700 leading-relaxed">
                                            <XCircle className="w-4 h-4 text-orange-500 flex-shrink-0 mt-1" />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </FadeIn>
                    </div>

                    <FadeIn delay={0.2}>
                        <div className="mt-6 bg-white rounded-2xl p-6 md:p-7 border border-blue-100 shadow-sm">
                            <p className="text-sm md:text-base text-gray-700 leading-relaxed">
                                <strong>The one question that protects you:</strong> &ldquo;What happens to the price if I stay longer than the package days?&rdquo; A good hospital answers in writing. At the Attibele clinic, every surgical patient receives an itemised written estimate for their specific implant and room choice before any date is fixed.
                            </p>
                        </div>
                    </FadeIn>
                </div>
            </section>

            {/* ============= INSURANCE (unique content) ============= */}
            <section className="py-14 md:py-20 bg-gradient-to-br from-blue-700 via-blue-800 to-indigo-800 text-white relative overflow-hidden">
                <div aria-hidden className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(circle at 2px 2px, white 1px, transparent 0)", backgroundSize: "32px 32px" }}></div>
                <div className="container mx-auto px-4 max-w-6xl relative z-10">
                    <FadeIn>
                        <div className="grid lg:grid-cols-5 gap-10 items-center">
                            <div className="lg:col-span-3">
                                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-5 leading-tight">
                                    Does Insurance Cover Knee Replacement?
                                </h2>
                                <p className="text-base md:text-lg text-blue-100 leading-relaxed mb-5">
                                    In most cases, yes — knee replacement is a medically indicated, planned surgery for advanced arthritis, and comprehensive health policies in India cover it. Three things to check with your insurer before fixing a date: the <strong>waiting period</strong> for joint replacement (often 2–4 years from policy start), any <strong>sub-limits</strong> on room rent or implant cost, and whether the hospital is in your insurer&apos;s <strong>cashless network</strong>. The hospital insurance desk helps with pre-authorisation paperwork, and many patients with a sound policy pay only a modest portion out of pocket.
                                </p>
                                <div className="inline-flex items-center gap-2 bg-white/15 backdrop-blur border border-white/20 rounded-full px-5 py-2.5 text-sm font-semibold">
                                    <Wallet className="w-4 h-4" />
                                    Bring your policy / TPA details — we&apos;ll help check coverage
                                </div>
                            </div>

                            <div className="lg:col-span-2">
                                <div className="bg-white/10 backdrop-blur border border-white/20 rounded-3xl p-7 md:p-8 text-center">
                                    <ShieldCheck className="w-12 h-12 mx-auto mb-4 text-blue-200" />
                                    <p className="text-2xl md:text-3xl font-bold leading-tight mb-2">Check Before You Book</p>
                                    <p className="text-base text-blue-100 leading-relaxed">Three policy details that decide your out-of-pocket cost</p>
                                    <div className="mt-6 pt-6 border-t border-white/20 grid grid-cols-3 gap-3 text-center">
                                        <div>
                                            <p className="text-xl font-bold">Waiting</p>
                                            <p className="text-[11px] text-blue-200 uppercase tracking-wider mt-1">Period</p>
                                        </div>
                                        <div>
                                            <p className="text-xl font-bold">Sub-</p>
                                            <p className="text-[11px] text-blue-200 uppercase tracking-wider mt-1">Limits</p>
                                        </div>
                                        <div>
                                            <p className="text-xl font-bold">Cashless</p>
                                            <p className="text-[11px] text-blue-200 uppercase tracking-wider mt-1">Network</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </FadeIn>
                </div>
            </section>

            {/* ============= DO YOU EVEN NEED SURGERY (unique content) ============= */}
            <section className="bg-white py-14 md:py-20 overflow-hidden">
                <div className="container mx-auto px-4 max-w-4xl">
                    <FadeIn>
                        <div className="text-center mb-10">
                            <span className="inline-block text-xs font-bold text-blue-700 uppercase tracking-widest mb-3">
                                — The Cheapest Outcome —
                            </span>
                            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-3 break-words">
                                First Question: Do You{" "}
                                <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                                    Even Need It?
                                </span>
                            </h2>
                        </div>
                    </FadeIn>

                    <FadeIn delay={0.1}>
                        <div className="bg-gradient-to-br from-blue-50 via-white to-indigo-50 rounded-3xl p-6 md:p-8 border border-blue-100 shadow-sm">
                            <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-4">
                                The least expensive knee replacement is the one you don&apos;t need. Many painful knees — especially in early and moderate arthritis — are managed well without replacement: physiotherapy, weight and activity guidance, medication, and where indicated, <Link href="/treatments/non-surgical-knee-pain-treatment" className="text-blue-700 font-semibold hover:text-blue-900 underline underline-offset-2">non-surgical treatments</Link> such as guided injections. Dr. Nitin&apos;s practice is conservative-first: surgery is recommended only when the joint is genuinely beyond these options, and you&apos;ll be told honestly if it isn&apos;t.
                            </p>
                            <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-4">
                                And when surgery <em>is</em> the right call, cheapest is not the same as best value. The implant should last 15–20 years or more — and that longevity depends heavily on accurate positioning and alignment, which depends on the surgeon&apos;s experience. A revision surgery years too soon is the most expensive outcome of all. The sensible target: an appropriate implant, an experienced surgeon, and a clear, fair, written price.
                            </p>
                            <p className="text-sm text-gray-500">
                                Struggling with knee pain but not sure where you stand? Start with the{" "}
                                <Link href="/knee-pain-bangalore" className="text-blue-700 font-semibold hover:text-blue-900 underline underline-offset-2">
                                    knee pain assessment page
                                </Link>{" "}
                                or book a consultation below.
                            </p>
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
                                    No-Obligation Assessment
                                </span>
                                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold mb-3 leading-tight break-words">
                                    Get Your Written, Itemised Estimate
                                </h2>
                                <p className="text-base md:text-lg text-blue-100 max-w-md mx-auto">
                                    Consultation → X-ray assessment → honest advice on whether surgery is needed → exact estimate for your implant and room choice.
                                </p>
                            </div>
                        </FadeIn>

                        <FadeIn delay={0.1}>
                            <div className="bg-white rounded-3xl shadow-2xl p-6 md:p-10 border border-white/50">
                                <BookingForm source="ads-knee-replacement-cost" />
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
                subheading="Surgical consultations and knee replacement are done at Raghava Multispeciality Hospital, Attibele; initial consultations are also available at HSR Layout."
            />

            <LandingArticle slug="knee-replacement-cost-bangalore" />

            <LandingFaq
                pageName="Knee Replacement Cost in Bangalore"
                pagePath="/knee-replacement-cost-bangalore"
                aboutCondition="Knee osteoarthritis"
                subheading="Straight answers on pricing, insurance and planning for knee replacement with Dr. Nitin N Sunku."
                items={[
                    {
                        q: "How much does a knee replacement cost in Bangalore in 2026?",
                        a: "For a standard total knee replacement, most hospitals in Bangalore charge roughly ₹1.7–₹3.5 lakh per knee, with the realistic band most patients pay sitting around ₹2.5–₹3.5 lakh. Premium implants or robotic-assisted surgery run roughly ₹3–₹6.5 lakh+, and bilateral (both knees in one sitting) roughly ₹3.5–₹8 lakh. These are indicative planning figures — always confirm a current written estimate.",
                    },
                    {
                        q: "Is it cheaper to do both knees at the same time?",
                        a: "In total, bilateral replacement in one admission usually costs less than two separate surgeries — one anaesthesia, one hospital stay, one rehab cycle. Whether it's advisable depends on your age, heart health and overall fitness, which is assessed before any recommendation.",
                    },
                    {
                        q: "Does health insurance cover knee replacement?",
                        a: "Most comprehensive policies cover it, since it's a medically indicated planned surgery. Check three things: the joint-replacement waiting period (often 2–4 years from policy start), sub-limits on room rent or implant cost, and whether the hospital is in your insurer's cashless network. The hospital team assists with pre-authorisation.",
                    },
                    {
                        q: "How many days will I stay in hospital?",
                        a: "A typical package covers a defined number of admission days, and most patients are walking with support within a day or two of surgery. The exact stay depends on your recovery and overall health — and your written estimate states clearly what happens to the price if extra days are needed.",
                    },
                    {
                        q: "How long does a knee implant last?",
                        a: "A well-positioned modern implant typically lasts 15–20 years or more. Longevity depends heavily on surgical accuracy — correct alignment and positioning — which is why surgeon experience matters more than shaving the last rupee off a quote.",
                    },
                    {
                        q: "Where does Dr. Nitin perform knee replacement?",
                        a: "Surgical consultations and knee replacement are done at Raghava Multispeciality Hospital, Attibele — convenient for patients across South Bengaluru, Anekal, Chandapura, Hosur Road and Electronic City. Initial consultations are also available at Health Nest Hospital, HSR Layout. Call +91-9980031006 to book.",
                    },
                ]}
            />

            <FinalCtaStrip
                clinic={CLINIC}
                title="Know Your Exact Number."
                subtitle="Honest assessment first — written estimate before any decision."
            />

            <MobileStickyCTA clinic={CLINIC} />
            <LandingFooter clinic={CLINIC} currentPath="/knee-replacement-cost-bangalore" />
        </main>
    );
}
