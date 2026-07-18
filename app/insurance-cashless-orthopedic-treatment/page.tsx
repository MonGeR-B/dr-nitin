import { Metadata } from "next";
import Link from "next/link";
import {
    Phone,
    CheckCircle,
    XCircle,
    ShieldCheck,
    Hospital,
    Star,
    MessageCircle,
    ChevronRight,
    FileText,
    Wallet,
    ClipboardList,
    AlertTriangle,
    BadgeCheck,
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

export const metadata: Metadata = {
    // `absolute` opts out of the root layout's "%s | Dr. Nitin N Sunku"
    // template — without it the live <title> renders the brand twice.
    title: { absolute: "Cashless & Insurance Orthopedic Treatment | Dr. Nitin N Sunku" },
    description:
        "How cashless orthopedic surgery works in Bangalore: what's covered, pre-authorisation steps, documents needed & policy traps to check. Get pre-auth help.",
    alternates: { canonical: `${siteOrigin}/insurance-cashless-orthopedic-treatment` },
    keywords: [
        "cashless orthopedic surgery Bangalore",
        "orthopedic surgery insurance coverage",
        "knee replacement insurance cashless",
        "ACL surgery covered by insurance",
        "fracture surgery insurance claim",
        "TPA cashless orthopedic hospital",
        "health insurance joint replacement India",
        "pre-authorisation orthopedic surgery",
        "cashless hospital Attibele",
        "orthopedic insurance claim help Bangalore",
    ],
    openGraph: {
        title: "Cashless & Insurance Orthopedic Treatment — Dr. Nitin N Sunku",
        description:
            "A plain-English guide to using health insurance for orthopedic surgery — what's typically covered, how pre-authorisation works, and the policy fine print to check first.",
        url: `${siteOrigin}/insurance-cashless-orthopedic-treatment`,
        type: "website",
    },
    robots: { index: true, follow: true },
};

const CLINIC = ATTIBELE_CLINIC;
const PHONE = CLINIC.phone;
const PHONE_DIGITS = CLINIC.phoneDigits;
const WHATSAPP_MESSAGE =
    "Hi, I'd like help checking my insurance coverage for orthopedic treatment.";

const steps = [
    {
        step: "1",
        title: "Share Your Policy Details",
        description:
            "Bring (or WhatsApp ahead) your health insurance policy or TPA card. The hospital insurance desk checks the basics — policy type, TPA, and what the process for your insurer looks like.",
    },
    {
        step: "2",
        title: "Clinical Assessment & Estimate",
        description:
            "Dr. Nitin examines you, confirms whether a procedure is genuinely indicated, and you receive a written, itemised estimate — the same document the insurer will see.",
    },
    {
        step: "3",
        title: "Pre-Authorisation Request",
        description:
            "For planned surgery, the hospital desk submits the pre-authorisation to your insurer/TPA with the clinical notes and estimate — typically a few days before the admission date.",
    },
    {
        step: "4",
        title: "Approval & Admission",
        description:
            "Once the insurer approves, you're admitted and treated with the approved amount billed directly to the insurer. Any non-covered items are told to you before, not after.",
    },
    {
        step: "5",
        title: "Discharge & Settlement",
        description:
            "At discharge, the hospital settles the covered amount with the insurer. You pay only your share — co-pay, non-covered items, or amounts above sub-limits — all shown transparently.",
    },
];

const usuallyCovered = [
    "Knee and hip replacement surgery (planned, medically indicated)",
    "ACL reconstruction and other arthroscopic surgery",
    "Fracture fixation surgery (plates, screws, nails)",
    "Hospitalisation, operation theatre and implant charges (subject to policy limits)",
    "Emergency admissions after accidents (with intimation to the insurer)",
];

const usuallyNotCovered = [
    "OPD consultations and follow-up visits (unless your policy has an OPD benefit)",
    "PRP, GFC and similar regenerative injections — many insurers class these as OPD or non-standard treatment",
    "Physiotherapy after discharge (varies by policy)",
    "Amounts above room-rent or implant sub-limits in your policy",
    "Treatment during your policy's waiting period for that condition",
];

const gotchas = [
    {
        Icon: AlertTriangle,
        title: "Waiting Periods",
        description:
            "Joint replacement commonly has a 2–4 year waiting period from policy start; pre-existing conditions have their own. Check yours before fixing a surgery date — not after.",
    },
    {
        Icon: Wallet,
        title: "Room-Rent & Implant Sub-Limits",
        description:
            "A room-rent cap doesn't just limit the room — in many policies it proportionally reduces every linked charge. Choosing a room within your cap protects the whole claim.",
    },
    {
        Icon: FileText,
        title: "Co-Pay Clauses",
        description:
            "Some policies (especially senior-citizen and employer top-ups) carry a fixed co-pay percentage. Knowing it upfront means your written estimate reflects your true out-of-pocket.",
    },
];

const documents = [
    "Health insurance policy copy or TPA e-card",
    "Photo ID (Aadhaar / PAN / passport) of the patient",
    "Doctor's advice note for surgery (issued at consultation)",
    "Recent investigation reports — X-ray, MRI, blood work",
    "Previous treatment records for the same condition, if any",
    "Employer ID, if it's a corporate group policy",
];

export default function InsuranceCashlessOrthopedicTreatmentPage() {
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
                                    <ShieldCheck className="w-3.5 h-3.5" />
                                    Pre-Authorisation Help at the Hospital Desk
                                </span>

                                <h1 className="text-[2.5rem] sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-gray-900 leading-[1.05] tracking-tight mb-4 break-words">
                                    <span className="block">Insurance &amp; Cashless</span>
                                    <span className="block bg-gradient-to-r from-blue-700 via-blue-600 to-indigo-600 bg-clip-text text-transparent pb-1">
                                        Orthopedic Treatment
                                    </span>
                                </h1>

                                <p className="text-lg sm:text-xl md:text-2xl text-blue-800 font-semibold mb-4">
                                    Dr. Nitin N Sunku — Attibele &amp; HSR Layout, Bengaluru
                                </p>
                                <p className="text-base sm:text-lg text-gray-600 mb-6 max-w-xl leading-relaxed">
                                    Most patients delay needed surgery not because of the operation — but because the insurance process feels opaque. Here&apos;s how cashless orthopedic treatment actually works, what&apos;s typically covered, and the three policy clauses to check before you fix a date.
                                </p>

                                <div className="flex flex-wrap gap-2 mb-7">
                                    <span className="inline-flex items-center gap-1.5 bg-white/90 backdrop-blur border border-gray-200 rounded-full px-3 py-1.5 text-xs sm:text-sm font-medium text-gray-800 shadow-sm">
                                        <CheckCircle className="w-3.5 h-3.5 text-emerald-600" />
                                        Pre-Auth Paperwork Handled
                                    </span>
                                    <span className="inline-flex items-center gap-1.5 bg-white/90 backdrop-blur border border-gray-200 rounded-full px-3 py-1.5 text-xs sm:text-sm font-medium text-gray-800 shadow-sm">
                                        <CheckCircle className="w-3.5 h-3.5 text-emerald-600" />
                                        Written Itemised Estimates
                                    </span>
                                    <span className="inline-flex items-center gap-1.5 bg-white/90 backdrop-blur border border-gray-200 rounded-full px-3 py-1.5 text-xs sm:text-sm font-medium text-gray-800 shadow-sm">
                                        <Star className="w-3.5 h-3.5 text-yellow-500 fill-yellow-500" />
                                        No Surprise Billing
                                    </span>
                                </div>

                                <div className="flex flex-col sm:flex-row gap-3 mb-6">
                                    <TrackedWhatsApp
                                        phoneDigits={PHONE_DIGITS}
                                        message={WHATSAPP_MESSAGE}
                                        location="Hero"
                                        className="group inline-flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold px-6 py-4 rounded-xl shadow-lg shadow-blue-500/30 hover:shadow-xl hover:shadow-blue-500/40 transition-all transform hover:-translate-y-0.5"
                                    >
                                        <MessageCircle className="w-5 h-5" />
                                        WhatsApp Your Policy — We&apos;ll Help Check
                                    </TrackedWhatsApp>
                                    <TrackedButton
                                        buttonName="Book Appointment - Hero"
                                        buttonLocation="Hero"
                                        href="#booking-form"
                                        className="inline-flex items-center justify-center gap-2 bg-white border-2 border-blue-500 text-blue-700 hover:bg-blue-50 font-semibold px-6 py-4 rounded-xl shadow-sm transition-all group"
                                        metadata={{ cta_type: "form_scroll", condition: "insurance-cashless" }}
                                    >
                                        Book a Consultation
                                        <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                                    </TrackedButton>
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
                            <HeroImage alt="Dr. Nitin N Sunku — Insurance & Cashless Orthopedic Treatment" />
                        </FadeIn>
                    </div>
                </div>
            </section>

            <StatsStrip
                stats={[
                    { value: "Cashless", label: "Pre-Auth Support" },
                    { value: "Written", label: "Itemised Estimates" },
                    { value: "Reimburse", label: "Claim Help Too" },
                    { value: "4.9★", label: "Patient Rating" },
                ]}
            />

            {/* ============= 5-STEP PROCESS (unique content) ============= */}
            <section id="services" className="bg-gradient-to-b from-blue-50/60 to-white py-14 md:py-20 overflow-hidden">
                <div className="container mx-auto px-4 max-w-7xl">
                    <FadeIn>
                        <div className="text-center mb-12">
                            <span className="inline-block text-xs font-bold text-blue-700 uppercase tracking-widest mb-3">
                                — How Cashless Works —
                            </span>
                            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-3 break-words">
                                Five Steps, No{" "}
                                <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                                    Mysteries
                                </span>
                            </h2>
                            <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
                                From policy card to settled bill — what actually happens, in order.
                            </p>
                        </div>
                    </FadeIn>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4 md:gap-5">
                        {steps.map(({ step, title, description }, idx) => (
                            <FadeIn key={step} delay={idx * 0.06}>
                                <div className="relative bg-white rounded-2xl p-5 md:p-6 pt-8 border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 h-full">
                                    <span className="absolute -top-4 left-5 w-9 h-9 rounded-full bg-gradient-to-br from-blue-600 to-indigo-600 text-white font-bold flex items-center justify-center shadow-md">
                                        {step}
                                    </span>
                                    <h3 className="font-bold text-gray-900 text-sm md:text-base mb-2 leading-tight">{title}</h3>
                                    <p className="text-xs md:text-sm text-gray-600 leading-relaxed">{description}</p>
                                </div>
                            </FadeIn>
                        ))}
                    </div>

                    <FadeIn delay={0.3}>
                        <div className="max-w-4xl mx-auto mt-10 bg-white rounded-2xl p-6 md:p-7 border border-blue-100 shadow-sm">
                            <p className="text-sm md:text-base text-gray-700 leading-relaxed">
                                <strong>Emergency admissions work differently:</strong> for accident and fracture surgery, treatment isn&apos;t delayed for paperwork — the insurer is intimated within their notification window (usually 24 hours), and pre-authorisation is processed in parallel. If cashless approval isn&apos;t possible in time, you pay and claim reimbursement afterward, and the hospital desk helps assemble the claim file.
                            </p>
                        </div>
                    </FadeIn>
                </div>
            </section>

            {/* ============= COVERED VS NOT (unique content) ============= */}
            <section className="bg-white py-14 md:py-20 overflow-hidden">
                <div className="container mx-auto px-4 max-w-5xl">
                    <FadeIn>
                        <div className="text-center mb-12">
                            <span className="inline-block text-xs font-bold text-blue-700 uppercase tracking-widest mb-3">
                                — Typical Coverage —
                            </span>
                            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-3 break-words">
                                What Insurance Usually{" "}
                                <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                                    Covers — and Doesn&apos;t
                                </span>
                            </h2>
                            <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
                                General patterns across Indian health policies — your own policy wording always decides.
                            </p>
                        </div>
                    </FadeIn>

                    <div className="grid md:grid-cols-2 gap-5">
                        <FadeIn>
                            <div className="bg-emerald-50/70 rounded-2xl border border-emerald-100 p-6 md:p-7 h-full">
                                <h3 className="flex items-center gap-2 font-bold text-emerald-800 text-lg mb-4">
                                    <CheckCircle className="w-5 h-5" />
                                    Usually Covered
                                </h3>
                                <ul className="space-y-3">
                                    {usuallyCovered.map((item) => (
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
                                    Usually Not Covered
                                </h3>
                                <ul className="space-y-3">
                                    {usuallyNotCovered.map((item) => (
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
                        <div className="mt-6 bg-gradient-to-br from-blue-50 via-white to-indigo-50 rounded-2xl p-6 md:p-7 border border-blue-100 shadow-sm">
                            <p className="text-sm md:text-base text-gray-700 leading-relaxed">
                                Planning a specific surgery? See the detailed cost guides:{" "}
                                <Link href="/knee-replacement-cost-bangalore" className="text-blue-700 font-semibold hover:text-blue-900 underline underline-offset-2">
                                    knee replacement cost
                                </Link>{" "}
                                and{" "}
                                <Link href="/blog/acl-surgery-cost-and-recovery-bangalore" className="text-blue-700 font-semibold hover:text-blue-900 underline underline-offset-2">
                                    ACL surgery cost &amp; recovery
                                </Link>
                                .
                            </p>
                        </div>
                    </FadeIn>
                </div>
            </section>

            {/* ============= THREE GOTCHAS ============= */}
            <section id="about" className="bg-gradient-to-br from-gray-50 via-blue-50/40 to-white py-14 md:py-20 overflow-hidden">
                <div className="container mx-auto px-4 max-w-7xl">
                    <FadeIn>
                        <div className="text-center mb-12">
                            <span className="inline-block text-xs font-bold text-blue-700 uppercase tracking-widest mb-3">
                                — Check These Before Fixing a Date —
                            </span>
                            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-3 break-words">
                                The Three Clauses That{" "}
                                <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                                    Decide Your Bill
                                </span>
                            </h2>
                            <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
                                Most claim disappointments trace back to one of these three lines of policy fine print.
                            </p>
                        </div>
                    </FadeIn>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5 max-w-5xl mx-auto">
                        {gotchas.map(({ Icon, title, description }, idx) => (
                            <FadeIn key={title} delay={idx * 0.08}>
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

            {/* ============= DOCUMENTS CHECKLIST (unique content) ============= */}
            <section className="py-14 md:py-20 bg-gradient-to-br from-blue-700 via-blue-800 to-indigo-800 text-white relative overflow-hidden">
                <div aria-hidden className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(circle at 2px 2px, white 1px, transparent 0)", backgroundSize: "32px 32px" }}></div>
                <div className="container mx-auto px-4 max-w-6xl relative z-10">
                    <FadeIn>
                        <div className="grid lg:grid-cols-5 gap-10 items-center">
                            <div className="lg:col-span-3">
                                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-5 leading-tight">
                                    What to Bring for a Smooth Pre-Authorisation
                                </h2>
                                <p className="text-base md:text-lg text-blue-100 leading-relaxed mb-5">
                                    Nine out of ten pre-authorisation delays are missing-document delays. Bring these to your consultation (or WhatsApp them ahead) and the hospital desk can usually file the pre-auth the same day:
                                </p>
                                <div className="space-y-2.5">
                                    {documents.map((doc) => (
                                        <p key={doc} className="flex gap-2.5 text-sm md:text-base text-blue-100 leading-relaxed">
                                            <ClipboardList className="w-4 h-4 text-blue-200 flex-shrink-0 mt-1" />
                                            {doc}
                                        </p>
                                    ))}
                                </div>
                            </div>

                            <div className="lg:col-span-2">
                                <div className="bg-white/10 backdrop-blur border border-white/20 rounded-3xl p-7 md:p-8 text-center">
                                    <BadgeCheck className="w-12 h-12 mx-auto mb-4 text-blue-200" />
                                    <p className="text-2xl md:text-3xl font-bold leading-tight mb-2">Desk Does the Chasing</p>
                                    <p className="text-base text-blue-100 leading-relaxed">The hospital insurance desk files, follows up and escalates — you focus on getting better.</p>
                                    <div className="mt-6 pt-6 border-t border-white/20 grid grid-cols-3 gap-3 text-center">
                                        <div>
                                            <p className="text-xl font-bold">File</p>
                                            <p className="text-[11px] text-blue-200 uppercase tracking-wider mt-1">Pre-Auth</p>
                                        </div>
                                        <div>
                                            <p className="text-xl font-bold">Track</p>
                                            <p className="text-[11px] text-blue-200 uppercase tracking-wider mt-1">Approval</p>
                                        </div>
                                        <div>
                                            <p className="text-xl font-bold">Settle</p>
                                            <p className="text-[11px] text-blue-200 uppercase tracking-wider mt-1">Direct</p>
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
                                    Bring Your Policy or TPA Card
                                </span>
                                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold mb-3 leading-tight break-words">
                                    Start With a Consultation
                                </h2>
                                <p className="text-base md:text-lg text-blue-100 max-w-md mx-auto">
                                    Clinical assessment first, then coverage check and written estimate — the team will call back within hours.
                                </p>
                            </div>
                        </FadeIn>

                        <FadeIn delay={0.1}>
                            <div className="bg-white rounded-3xl shadow-2xl p-6 md:p-10 border border-white/50">
                                <BookingForm source="ads-insurance-cashless" />
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
                subheading="Insurance-supported procedures are performed at Raghava Multispeciality Hospital, Attibele."
            />

            <LandingFaq
                pageName="Insurance & Cashless Orthopedic Treatment"
                pagePath="/insurance-cashless-orthopedic-treatment"
                subheading="Straight answers about using health insurance for orthopedic treatment. Your policy wording always takes precedence — bring it along and we'll help you check."
                items={[
                    {
                        q: "Is knee or hip replacement covered by health insurance?",
                        a: "Usually yes — joint replacement for advanced arthritis is a medically indicated planned surgery, covered by most comprehensive policies once the joint-replacement waiting period (commonly 2–4 years from policy start) has passed. Room-rent and implant sub-limits can create an out-of-pocket gap, which your written estimate will show upfront.",
                    },
                    {
                        q: "Are PRP or GFC injections covered by insurance?",
                        a: "Usually not. Most Indian insurers treat regenerative injections as outpatient or non-standard treatment and exclude them from hospitalisation cover. They're priced transparently as self-pay procedures — ask for the written cost at consultation. If your policy has a specific OPD or advanced-treatment rider, bring the wording and we'll check.",
                    },
                    {
                        q: "Can emergency fracture surgery be done cashless?",
                        a: "Often yes. Treatment starts immediately — paperwork never delays emergency care — while the insurer is intimated within the notification window (typically 24 hours of admission) and pre-authorisation is processed in parallel. Where cashless approval can't come through in time, you pay and claim reimbursement, with the hospital desk assembling the claim file.",
                    },
                    {
                        q: "Which insurance companies does the hospital work with?",
                        a: "Coverage depends on your specific insurer and TPA arrangement, and empanelment lists change — so rather than publish a list here, we ask you to WhatsApp or bring your policy/TPA card, and the hospital insurance desk will confirm exactly how your policy can be used, usually the same day.",
                    },
                    {
                        q: "What if my pre-authorisation is rejected?",
                        a: "A rejection is often a documentation or clarification issue rather than a final no — the desk responds to insurer queries and refiles where warranted. If cashless is ultimately declined, treatment can proceed on a pay-and-reimburse basis with a complete claim file prepared for you. Either way, you'll know your position before surgery, not after.",
                    },
                    {
                        q: "Is the consultation itself covered by insurance?",
                        a: "Usually not — OPD consultations (typically ₹500–₹1,000) are excluded unless your policy has a specific OPD benefit. Hospitalisation cover applies from admission for a covered procedure. The consultation is where you get the diagnosis, the written estimate and the coverage check that make the rest of the process predictable.",
                    },
                ]}
            />

            <FinalCtaStrip
                clinic={CLINIC}
                title="Don't Let Paperwork Postpone Treatment."
                subtitle="WhatsApp your policy — we'll help you check coverage."
            />

            <MobileStickyCTA clinic={CLINIC} />
            <LandingFooter clinic={CLINIC} />
        </main>
    );
}
