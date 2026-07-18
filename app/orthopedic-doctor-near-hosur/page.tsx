import { Metadata } from "next";
import {
    Phone,
    MapPin,
    Clock,
    Award,
    Heart,
    CheckCircle,
    Stethoscope,
    Users,
    Activity,
    ShieldCheck,
    Hospital,
    Navigation,
    Star,
    MessageCircle,
    Calendar,
    ChevronRight,
    Factory,
    Timer,
} from "lucide-react";

import { BookingForm } from "@/components/forms/booking-form";
import { HideNavigation } from "@/components/ui/hide-navigation";
import { LandingPageTracker } from "@/components/analytics/landing-page-tracker";
import { TrackedButton } from "@/components/analytics/tracked-button";
import { TrackedCall } from "@/components/analytics/tracked-call";
import { TrackedWhatsApp } from "@/components/analytics/tracked-whatsapp";
import { FadeIn } from "@/components/animations/fade-in";
import { siteOrigin } from "@/lib/site-url";
import { ATTIBELE_CLINIC } from "@/lib/practice";
import {
    LandingNav,
    StatsStrip,
    GoogleReviews,
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
    title: { absolute: "Orthopedic Doctor near Hosur — Bangalore Side | Dr. Nitin Sunku" },
    description:
        "Fellowship-trained orthopedic specialist ~15 min from Hosur, just across the border in Attibele, Bengaluru. Joint pain, fractures, sports injuries. Book today.",
    alternates: { canonical: `${siteOrigin}/orthopedic-doctor-near-hosur` },
    keywords: [
        "orthopedic doctor near Hosur",
        "best orthopedic doctor near Hosur",
        "orthopedic specialist Hosur Bangalore border",
        "bone doctor near Hosur",
        "orthopedic doctor Attibele near Hosur",
        "knee pain doctor near Hosur",
        "fracture treatment near Hosur",
        "sports injury doctor near Hosur",
        "orthopedic doctor SIPCOT Hosur",
        "Bangalore orthopedic doctor for Hosur patients",
    ],
    openGraph: {
        title: "Orthopedic Doctor near Hosur — Dr. Nitin N Sunku",
        description:
            "Fellowship-trained orthopedic & sports medicine specialist at Raghava Multispeciality Hospital, Attibele — about 15 minutes from Hosur town, straight up NH 44.",
        url: `${siteOrigin}/orthopedic-doctor-near-hosur`,
        type: "website",
    },
    robots: { index: true, follow: true },
};

// Hosur-side patients are served from the Attibele clinic — all CTAs route there.
const CLINIC = ATTIBELE_CLINIC;
const PHONE = CLINIC.phone;
const PHONE_DIGITS = CLINIC.phoneDigits;
const WHATSAPP_MESSAGE =
    "Hi Dr. Nitin, I'm from the Hosur area and would like to book an appointment.";

const conditions = [
    { title: "Knee Pain & Arthritis", Icon: Activity },
    { title: "Bone Fractures & Trauma", Icon: Award },
    { title: "Industrial & Workplace Injuries", Icon: Factory },
    { title: "Back & Neck Pain", Icon: Stethoscope },
    { title: "Shoulder Pain & Stiffness", Icon: Users },
    { title: "Sports & Two-Wheeler Injuries", Icon: Heart },
    { title: "Joint Replacement", Icon: Hospital },
    { title: "ACL / Meniscus Tears", Icon: ShieldCheck },
];

const areasServed = [
    { name: "Hosur Town", distance: "10–12 km", note: "~15–20 min via NH 44" },
    { name: "SIPCOT Industrial Area", distance: "12–14 km", note: "~20 min drive" },
    { name: "Mathigiri", distance: "12 km", note: "~18 min drive" },
    { name: "Bagalur Road side", distance: "12–15 km", note: "~20 min drive" },
    { name: "Hosur RTO / Bus Stand area", distance: "11 km", note: "~17 min drive" },
    { name: "Zuzuvadi", distance: "9–10 km", note: "~14 min drive" },
    { name: "Attibele Border", distance: "1–2 km", note: "Minutes away" },
    { name: "Attibele", distance: "0 km", note: "Clinic location" },
];

const sellingPoints = [
    {
        Icon: Timer,
        title: "Closer Than You Think",
        description:
            "From Hosur town, the clinic is a straight 15–20 minute run up NH 44 — just across the Karnataka border in Attibele. Far closer than Bengaluru city hospitals, without the city traffic.",
    },
    {
        Icon: Award,
        title: "Fellowship-Trained Specialist",
        description:
            "Dr. Nitin is a fellowship-trained orthopedic & sports medicine specialist with 10+ years of experience treating joint, spine and sports conditions.",
    },
    {
        Icon: Factory,
        title: "Industrial-Belt Injury Experience",
        description:
            "Hosur's factories and the NH 44 corridor produce hand injuries, fractures and two-wheeler trauma daily. The hospital's 24/7 casualty, in-house X-ray and operating theatre are minutes from the border.",
    },
    {
        Icon: Users,
        title: "Official Bengaluru FC Team Doctor",
        description:
            "Sports-medicine expertise trusted by professional footballers — applied to factory-team cricketers, school athletes and weekend players from Hosur alike.",
    },
    {
        Icon: Heart,
        title: "Conservative-First Philosophy",
        description:
            "Non-surgical options are exhausted first — physiotherapy, medication, guided injections — before surgery is ever recommended. Honest, evidence-based care.",
    },
    {
        Icon: ShieldCheck,
        title: "Insurance & Written Estimates",
        description:
            "Health insurance is accepted for procedures — including policies held by Tamil Nadu residents — with pre-authorisation help from the hospital team and written estimates before any surgery.",
    },
];

export default function OrthopedicDoctorNearHosurPage() {
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
                                    15 Minutes from Hosur, on the Bangalore Side
                                </span>

                                <h1 className="text-[2.5rem] sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-gray-900 leading-[1.05] tracking-tight mb-4 break-words">
                                    <span className="block">Orthopedic Doctor</span>
                                    <span className="block bg-gradient-to-r from-blue-700 via-blue-600 to-indigo-600 bg-clip-text text-transparent pb-1">
                                        near Hosur
                                    </span>
                                </h1>

                                <p className="text-lg sm:text-xl md:text-2xl text-blue-800 font-semibold mb-4">
                                    Dr. Nitin N Sunku — at Raghava Multispeciality Hospital, Attibele
                                </p>
                                <p className="text-base sm:text-lg text-gray-600 mb-6 max-w-xl leading-relaxed">
                                    Bangalore-standard specialist care without the Bangalore drive. The clinic sits just across the Karnataka border in Attibele — a straight run up NH 44 from Hosur town, SIPCOT and Mathigiri, with no city traffic in between.
                                </p>

                                <div className="flex flex-wrap gap-2 mb-7">
                                    <span className="inline-flex items-center gap-1.5 bg-white/90 backdrop-blur border border-gray-200 rounded-full px-3 py-1.5 text-xs sm:text-sm font-medium text-gray-800 shadow-sm">
                                        <CheckCircle className="w-3.5 h-3.5 text-emerald-600" />
                                        Fellowship-Trained
                                    </span>
                                    <span className="inline-flex items-center gap-1.5 bg-white/90 backdrop-blur border border-gray-200 rounded-full px-3 py-1.5 text-xs sm:text-sm font-medium text-gray-800 shadow-sm">
                                        <CheckCircle className="w-3.5 h-3.5 text-emerald-600" />
                                        24/7 Casualty for Injuries
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
                                        metadata={{ cta_type: "form_scroll", condition: "near-hosur-local" }}
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
                            <HeroImage alt="Dr. Nitin N Sunku — Orthopedic Doctor near Hosur" />
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
                                — Conditions We Treat —
                            </span>
                            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-3 break-words">
                                Complete Orthopedic Care,{" "}
                                <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                                    Across the Border
                                </span>
                            </h2>
                            <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
                                From factory-floor injuries to family joint problems — handled minutes from Hosur.
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

            {/* ============= AREAS SERVED (unique content) ============= */}
            <section className="bg-gradient-to-br from-gray-50 via-blue-50/40 to-white py-14 md:py-20 overflow-hidden">
                <div className="container mx-auto px-4 max-w-7xl">
                    <FadeIn>
                        <div className="text-center mb-12">
                            <span className="inline-block text-xs font-bold text-blue-700 uppercase tracking-widest mb-3">
                                — Serving Hosur &amp; the Border Belt —
                            </span>
                            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-3 break-words">
                                One Straight Road{" "}
                                <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                                    Up NH 44
                                </span>
                            </h2>
                            <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
                                No city traffic, no flyover maze — Hosur to the clinic door in about 15–20 minutes.
                            </p>
                        </div>
                    </FadeIn>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 mb-8">
                        {areasServed.map((area, idx) => (
                            <FadeIn key={area.name} delay={idx * 0.04}>
                                <div className="bg-white rounded-2xl border border-gray-100 hover:border-blue-300 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 p-4 md:p-5 text-center h-full">
                                    <div className="w-10 h-10 mx-auto mb-2 rounded-full bg-blue-600 flex items-center justify-center">
                                        <MapPin className="w-5 h-5 text-white" />
                                    </div>
                                    <p className="font-bold text-gray-900 text-base md:text-lg leading-tight">{area.name}</p>
                                    <p className="text-xs font-semibold text-orange-600 mt-1">{area.distance}</p>
                                    <p className="text-[11px] text-gray-500 mt-0.5 leading-snug">{area.note}</p>
                                </div>
                            </FadeIn>
                        ))}
                    </div>

                    <FadeIn delay={0.2}>
                        <div className="max-w-4xl mx-auto bg-white rounded-2xl p-6 md:p-8 border border-blue-100 shadow-sm">
                            <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                                For Hosur families, serious orthopedic care has usually meant a long drive — deep into Bengaluru, fighting Silk Board traffic, or waiting for a visiting specialist&apos;s clinic day. The Attibele clinic changes that equation: a fellowship-trained orthopedic and sports medicine specialist, available six days a week at a full multispeciality hospital with in-house X-ray, operating theatre and 24/7 casualty — a 15–20 minute drive from Hosur town, just across the border. Patients from Tamil Nadu are welcome; no referral is needed, and existing scans or reports from Hosur hospitals can be brought along for review.
                            </p>
                        </div>
                    </FadeIn>
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
                                Why Hosur Patients{" "}
                                <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                                    Cross the Border
                                </span>
                            </h2>
                            <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
                                Six reasons families and factory teams from Hosur come to Attibele.
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
                                    Book Your Appointment
                                </h2>
                                <p className="text-base md:text-lg text-blue-100 max-w-md mx-auto">
                                    The team at the Attibele clinic will call you back within hours to confirm your slot.
                                </p>
                            </div>
                        </FadeIn>

                        <FadeIn delay={0.1}>
                            <div className="bg-white rounded-3xl shadow-2xl p-6 md:p-10 border border-white/50">
                                <BookingForm source="ads-near-hosur" />
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

            {/* ============= HOW TO REACH ============= */}
            <section className="bg-white py-14 md:py-20 overflow-hidden">
                <div className="container mx-auto px-4 max-w-7xl">
                    <FadeIn>
                        <div className="text-center mb-12">
                            <span className="inline-block text-xs font-bold text-blue-700 uppercase tracking-widest mb-3">
                                — How to Reach from Hosur —
                            </span>
                            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-3 break-words">
                                Straight Up the{" "}
                                <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                                    Bengaluru Highway
                                </span>
                            </h2>
                            <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
                                On Sarjapura–Attibele Road, opposite Canara Bank — with on-site parking.
                            </p>
                        </div>
                    </FadeIn>

                    <div className="grid lg:grid-cols-2 gap-10 items-stretch">
                        <FadeIn direction="right">
                            <div className="bg-gradient-to-br from-blue-50 via-white to-indigo-50 rounded-3xl p-6 md:p-8 border border-blue-100 shadow-sm h-full">
                                <h3 className="text-xl md:text-2xl font-bold text-blue-900 mb-5 leading-tight">
                                    {CLINIC.name}
                                </h3>

                                <div className="space-y-4 text-gray-700">
                                    <div className="flex gap-3">
                                        <span className="w-10 h-10 rounded-xl bg-blue-100 flex items-center justify-center flex-shrink-0">
                                            <MapPin className="w-5 h-5 text-blue-700" />
                                        </span>
                                        <div className="min-w-0 flex-1">
                                            <p className="text-xs font-semibold text-blue-700 uppercase tracking-wide mb-1">Address</p>
                                            <p className="text-sm leading-relaxed">{CLINIC.address}</p>
                                        </div>
                                    </div>

                                    <div className="flex gap-3">
                                        <span className="w-10 h-10 rounded-xl bg-blue-100 flex items-center justify-center flex-shrink-0">
                                            <Clock className="w-5 h-5 text-blue-700" />
                                        </span>
                                        <div className="min-w-0 flex-1">
                                            <p className="text-xs font-semibold text-blue-700 uppercase tracking-wide mb-1">Hours</p>
                                            {CLINIC.hours.map((h) => (
                                                <p key={h.label} className="text-sm">
                                                    {h.label}: <span className="font-medium">{h.display}</span>
                                                </p>
                                            ))}
                                            <p className="text-sm font-semibold text-red-700 mt-1">Hospital casualty: 24/7 for injuries</p>
                                        </div>
                                    </div>

                                    <div className="flex gap-3">
                                        <span className="w-10 h-10 rounded-xl bg-blue-100 flex items-center justify-center flex-shrink-0">
                                            <Phone className="w-5 h-5 text-blue-700" />
                                        </span>
                                        <div className="min-w-0 flex-1">
                                            <p className="text-xs font-semibold text-blue-700 uppercase tracking-wide mb-1">Phone</p>
                                            <TrackedCall phone={PHONE} location="How To Reach" className="text-blue-700 hover:text-blue-900 font-bold text-base">
                                                {PHONE}
                                            </TrackedCall>
                                        </div>
                                    </div>
                                </div>

                                <div className="mt-6 grid sm:grid-cols-2 gap-3">
                                    <TrackedCall phone={PHONE} location="How To Reach CTA" className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold px-4 py-3 rounded-xl shadow-lg shadow-blue-500/30 transition text-sm">
                                        <Phone className="w-4 h-4" />
                                        Call
                                    </TrackedCall>
                                    <TrackedWhatsApp phoneDigits={PHONE_DIGITS} message={WHATSAPP_MESSAGE} location="How To Reach CTA" className="inline-flex items-center justify-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white font-semibold px-4 py-3 rounded-xl shadow-lg shadow-emerald-500/30 transition text-sm">
                                        <MessageCircle className="w-4 h-4" />
                                        WhatsApp
                                    </TrackedWhatsApp>
                                </div>

                                <div className="mt-6 pt-6 border-t border-blue-100 space-y-4">
                                    <div>
                                        <p className="flex items-center gap-2 text-xs font-bold text-blue-700 uppercase tracking-wide mb-2">
                                            <Navigation className="w-4 h-4" />
                                            From Hosur town / bus stand
                                        </p>
                                        <p className="text-sm text-gray-700 leading-relaxed">
                                            Take NH 44 toward Bengaluru, cross the Karnataka border at Attibele, and turn onto Sarjapura–Attibele Road in Attibele town. The hospital is on your right, opposite Canara Bank (formerly Syndicate Bank) — roughly 15–20 minutes door to door.
                                        </p>
                                    </div>
                                    <div>
                                        <p className="flex items-center gap-2 text-xs font-bold text-blue-700 uppercase tracking-wide mb-2">
                                            <Navigation className="w-4 h-4" />
                                            From SIPCOT / Mathigiri
                                        </p>
                                        <p className="text-sm text-gray-700 leading-relaxed">
                                            Join NH 44 toward Bengaluru and follow the same route through the Attibele border — about 20 minutes. On-site parking is available, with space to drop an injured passenger at the entrance.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </FadeIn>

                        <FadeIn direction="left" delay={0.1}>
                            <div className="min-w-0 w-full h-full">
                                <div className="aspect-video lg:aspect-auto lg:h-full w-full rounded-3xl overflow-hidden border border-gray-200 shadow-lg min-h-[400px]">
                                    <iframe
                                        src={CLINIC.mapEmbedSrc}
                                        loading="lazy"
                                        style={{ border: 0, width: "100%", height: "100%", display: "block" }}
                                        referrerPolicy="no-referrer-when-downgrade"
                                        title={`${CLINIC.name}, ${CLINIC.shortLocality} — Map`}
                                    />
                                </div>
                            </div>
                        </FadeIn>
                    </div>
                </div>
            </section>

            <LandingArticle slug="orthopedic-doctor-near-hosur" />

            <LandingFaq
                pageName="Orthopedic Doctor near Hosur"
                pagePath="/orthopedic-doctor-near-hosur"
                subheading="Practical answers for patients coming from Hosur, SIPCOT, Mathigiri and the border belt."
                items={[
                    {
                        q: "How far is the clinic from Hosur?",
                        a: "About 10–12 km from Hosur town — a straight 15–20 minute drive up NH 44 toward Bengaluru, crossing the border at Attibele. The hospital is on Sarjapura–Attibele Road, opposite Canara Bank, with on-site parking.",
                    },
                    {
                        q: "Can patients from Tamil Nadu consult here?",
                        a: "Of course. No referral is needed, and many patients come from Hosur, SIPCOT and surrounding areas. Bring any existing X-rays, MRI films or reports from Hosur hospitals — they'll be reviewed rather than repeated unnecessarily.",
                    },
                    {
                        q: "Will my health insurance work across the state border?",
                        a: "Health insurance policies are national — a policy bought in Tamil Nadu works at a Karnataka hospital. Insurance is accepted for procedures, with pre-authorisation help from the hospital team. Bring your policy or TPA card and call ahead to confirm the specifics for your insurer.",
                    },
                    {
                        q: "What about workplace injuries or fractures outside clinic hours?",
                        a: "The hospital casualty accepts injuries 24/7 — nights, Sundays and holidays included — with in-house X-ray and an operating theatre. For a suspected fracture from a factory or road accident, come straight in; it's usually far quicker than reaching a big Bengaluru hospital.",
                    },
                    {
                        q: "How much does a consultation cost?",
                        a: "Typically ₹500–₹1,000, including clinical examination and a written treatment plan. Any procedure or surgery is quoted in writing before you decide.",
                    },
                    {
                        q: "What are the clinic timings?",
                        a: "OPD runs Monday to Saturday, 10:00 AM – 6:00 PM, with same-day slots available most days. Call +91-9980031006 or book via WhatsApp or the form on this page — the team will confirm your slot within hours.",
                    },
                ]}
            />

            <FinalCtaStrip
                clinic={CLINIC}
                title="Specialist Care, Just Across the Border."
                subtitle="15 minutes from Hosur — book at Attibele today."
            />

            <MobileStickyCTA clinic={CLINIC} />
            <LandingFooter clinic={CLINIC} />
        </main>
    );
}
