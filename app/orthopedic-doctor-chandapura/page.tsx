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
    Baby,
    Navigation,
    Star,
    MessageCircle,
    Calendar,
    ChevronRight,
    Home,
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

export const metadata: Metadata = {
    // `absolute` opts out of the root layout's "%s | Dr. Nitin N Sunku"
    // template — without it the live <title> renders the brand twice.
    title: { absolute: "Orthopedic Doctor in Chandapura & Anekal | Dr. Nitin Sunku" },
    description:
        "Orthopedic specialist 8 minutes from Chandapura, 10 from Anekal — at Raghava Hospital, Attibele. Knee & joint pain, fractures, kids' injuries. Book today.",
    alternates: { canonical: `${siteOrigin}/orthopedic-doctor-chandapura` },
    keywords: [
        "orthopedic doctor Chandapura",
        "best orthopedic doctor Chandapura",
        "orthopedic doctor Anekal",
        "ortho doctor near me Chandapura",
        "bone doctor Anekal",
        "knee pain doctor Chandapura",
        "fracture treatment Chandapura",
        "orthopedic doctor Chandapura Anekal Road",
        "orthopedic doctor Jigani",
        "orthopedic doctor Hennagara",
        "orthopedic clinic near Chandapura circle",
    ],
    openGraph: {
        title: "Orthopedic Doctor in Chandapura & Anekal — Dr. Nitin N Sunku",
        description:
            "Fellowship-trained orthopedic specialist minutes from Chandapura and Anekal, at Raghava Multispeciality Hospital, Attibele. Joint pain, fractures and sports injuries close to home.",
        url: `${siteOrigin}/orthopedic-doctor-chandapura`,
        type: "website",
    },
    robots: { index: true, follow: true },
};

// Chandapura & Anekal patients are served from the Attibele clinic — all CTAs route there.
const CLINIC = ATTIBELE_CLINIC;
const PHONE = CLINIC.phone;
const PHONE_DIGITS = CLINIC.phoneDigits;
const WHATSAPP_MESSAGE =
    "Hi Dr. Nitin, I'm from the Chandapura / Anekal area and would like to book an appointment.";

const conditions = [
    { title: "Knee Pain & Arthritis", Icon: Activity },
    { title: "Elderly Joint & Hip Care", Icon: Users },
    { title: "Children's Fractures", Icon: Baby },
    { title: "Bone Fractures & Trauma", Icon: Award },
    { title: "Back & Neck Pain", Icon: Stethoscope },
    { title: "Shoulder Pain & Stiffness", Icon: ShieldCheck },
    { title: "Sports & Two-Wheeler Injuries", Icon: Heart },
    { title: "Joint Replacement", Icon: Hospital },
];

const areasServed = [
    { name: "Chandapura", distance: "4 km", note: "~8 min drive" },
    { name: "Anekal", distance: "5 km", note: "~10 min drive" },
    { name: "Hennagara", distance: "6 km", note: "~12 min drive" },
    { name: "Bommasandra", distance: "6 km", note: "~12 min drive" },
    { name: "Jigani", distance: "8 km", note: "~15 min drive" },
    { name: "Surya City / Neo Town", distance: "5–7 km", note: "~10–14 min" },
    { name: "Marsur", distance: "6 km", note: "~12 min drive" },
    { name: "Attibele", distance: "0 km", note: "Clinic location" },
];

const sellingPoints = [
    {
        Icon: Home,
        title: "Specialist Care Without the City Trip",
        description:
            "Until recently, seeing a good orthopedic specialist meant a 30 km trip into Bengaluru. From Chandapura circle, the Attibele clinic is 8 minutes down the road.",
    },
    {
        Icon: Award,
        title: "Fellowship-Trained Specialist",
        description:
            "Dr. Nitin is a fellowship-trained orthopedic & sports medicine specialist with 10+ years of experience treating joint, spine and sports conditions.",
    },
    {
        Icon: Users,
        title: "Care for the Whole Family",
        description:
            "Grandparents with knee arthritis, parents with back pain, children with playground fractures — one specialist, one nearby hospital, for every generation at home.",
    },
    {
        Icon: Heart,
        title: "Conservative-First Philosophy",
        description:
            "Non-surgical options are exhausted first — physiotherapy, medication, guided injections — before surgery is ever recommended. Honest, evidence-based care.",
    },
    {
        Icon: Stethoscope,
        title: "Same-Day Appointments + 24/7 Emergency",
        description:
            "Walk-in slots most days, with 24/7 emergency support through the hospital for fractures and accident injuries — no waiting weeks to be seen.",
    },
    {
        Icon: Hospital,
        title: "Everything Under One Roof",
        description:
            "Consultation, X-ray, plaster room, operating theatre and follow-up all inside Raghava Multispeciality Hospital — one trip instead of three.",
    },
];

export default function OrthopedicDoctorChandapuraPage() {
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
                                    8 Minutes from Chandapura Circle
                                </span>

                                <h1 className="text-[2.5rem] sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-gray-900 leading-[1.05] tracking-tight mb-4 break-words">
                                    <span className="block">Orthopedic Doctor for</span>
                                    <span className="block bg-gradient-to-r from-blue-700 via-blue-600 to-indigo-600 bg-clip-text text-transparent pb-1">
                                        Chandapura &amp; Anekal
                                    </span>
                                </h1>

                                <p className="text-lg sm:text-xl md:text-2xl text-blue-800 font-semibold mb-4">
                                    Dr. Nitin N Sunku — at Raghava Multispeciality Hospital, Attibele
                                </p>
                                <p className="text-base sm:text-lg text-gray-600 mb-6 max-w-xl leading-relaxed">
                                    Fellowship-trained orthopedic &amp; sports medicine specialist, minutes from Chandapura, Anekal, Jigani and Hennagara. Knee and joint pain, fractures, children&apos;s injuries — treated close to home, not 30 km away in the city.
                                </p>

                                <div className="flex flex-wrap gap-2 mb-7">
                                    <span className="inline-flex items-center gap-1.5 bg-white/90 backdrop-blur border border-gray-200 rounded-full px-3 py-1.5 text-xs sm:text-sm font-medium text-gray-800 shadow-sm">
                                        <CheckCircle className="w-3.5 h-3.5 text-emerald-600" />
                                        Fellowship-Trained
                                    </span>
                                    <span className="inline-flex items-center gap-1.5 bg-white/90 backdrop-blur border border-gray-200 rounded-full px-3 py-1.5 text-xs sm:text-sm font-medium text-gray-800 shadow-sm">
                                        <CheckCircle className="w-3.5 h-3.5 text-emerald-600" />
                                        Same-Day Appointments
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
                                        metadata={{ cta_type: "form_scroll", condition: "chandapura-local" }}
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
                            <HeroImage alt="Dr. Nitin N Sunku — Orthopedic Doctor for Chandapura & Anekal" />
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
                                Orthopedic Care for{" "}
                                <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                                    the Whole Family
                                </span>
                            </h2>
                            <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
                                From a grandmother&apos;s knees to a schoolboy&apos;s wrist — treated minutes from home.
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
                                — Serving the Chandapura–Anekal Belt —
                            </span>
                            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-3 break-words">
                                Reach Us in Under{" "}
                                <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                                    15 Minutes
                                </span>
                            </h2>
                            <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
                                One of Bengaluru&apos;s fastest-growing corridors deserves specialist care of its own.
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
                                The Chandapura–Anekal Road corridor has grown from a junction town into one of South Bengaluru&apos;s busiest residential belts — but specialist healthcare hasn&apos;t kept pace, and most families still assume good orthopedic care means a trip past Silk Board. It doesn&apos;t. Raghava Multispeciality Hospital in Attibele is 8 minutes from Chandapura circle and 10 from Anekal town, with a fellowship-trained orthopedic specialist, in-house X-ray, and a 24/7 emergency department for fractures and accident injuries.
                            </p>
                        </div>
                    </FadeIn>
                </div>
            </section>

            {/* ============= ANEKAL SECTION (unique content) ============= */}
            <section className="py-14 md:py-20 bg-gradient-to-br from-blue-700 via-blue-800 to-indigo-800 text-white relative overflow-hidden">
                <div aria-hidden className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(circle at 2px 2px, white 1px, transparent 0)", backgroundSize: "32px 32px" }}></div>
                <div className="container mx-auto px-4 max-w-6xl relative z-10">
                    <FadeIn>
                        <div className="grid lg:grid-cols-5 gap-10 items-center">
                            <div className="lg:col-span-3">
                                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-5 leading-tight">
                                    Orthopedic Care for Anekal Residents
                                </h2>
                                <p className="text-base md:text-lg text-blue-100 leading-relaxed mb-5">
                                    From Anekal town, the clinic is a straight 10-minute drive up the Attibele road — closer than Jigani, and far closer than any city hospital. Anekal families most often come in for elderly knee and hip arthritis, children&apos;s fractures after school and playground falls, and two-wheeler injuries from the Anekal–Attibele and Hosur Road stretches. All of it is handled at one hospital, with X-ray and plaster on site and surgery available when genuinely needed.
                                </p>
                                <div className="inline-flex items-center gap-2 bg-white/15 backdrop-blur border border-white/20 rounded-full px-5 py-2.5 text-sm font-semibold">
                                    <MapPin className="w-4 h-4" />
                                    Anekal → Attibele: ~5 km, one straight road
                                </div>
                            </div>

                            <div className="lg:col-span-2">
                                <div className="bg-white/10 backdrop-blur border border-white/20 rounded-3xl p-7 md:p-8 text-center">
                                    <Hospital className="w-12 h-12 mx-auto mb-4 text-blue-200" />
                                    <p className="text-2xl md:text-3xl font-bold leading-tight mb-2">One Hospital, All Ages</p>
                                    <p className="text-base text-blue-100 leading-relaxed">Elderly arthritis · Kids&apos; fractures · Working-age injuries</p>
                                    <div className="mt-6 pt-6 border-t border-white/20 grid grid-cols-3 gap-3 text-center">
                                        <div>
                                            <p className="text-2xl font-bold">10 min</p>
                                            <p className="text-[11px] text-blue-200 uppercase tracking-wider mt-1">From Anekal</p>
                                        </div>
                                        <div>
                                            <p className="text-2xl font-bold">24/7</p>
                                            <p className="text-[11px] text-blue-200 uppercase tracking-wider mt-1">Emergency</p>
                                        </div>
                                        <div>
                                            <p className="text-2xl font-bold">In-House</p>
                                            <p className="text-[11px] text-blue-200 uppercase tracking-wider mt-1">X-Ray</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
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
                                The Corridor&apos;s Own{" "}
                                <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                                    Orthopedic Specialist
                                </span>
                            </h2>
                            <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
                                Six reasons families across Chandapura, Anekal and Jigani make us their first call.
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
                                <BookingForm source="ads-chandapura" />
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
                                — How to Reach the Clinic —
                            </span>
                            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-3 break-words">
                                One Straight Road from{" "}
                                <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                                    Chandapura &amp; Anekal
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
                                            From Chandapura circle
                                        </p>
                                        <p className="text-sm text-gray-700 leading-relaxed">
                                            Head south on Hosur Road (NH 44) toward Attibele for about 4 km, then turn onto Sarjapura–Attibele Road. The hospital is on your right, opposite Canara Bank (formerly Syndicate Bank) — roughly 8 minutes door to door.
                                        </p>
                                    </div>
                                    <div>
                                        <p className="flex items-center gap-2 text-xs font-bold text-blue-700 uppercase tracking-wide mb-2">
                                            <Navigation className="w-4 h-4" />
                                            From Anekal town
                                        </p>
                                        <p className="text-sm text-gray-700 leading-relaxed">
                                            Take the Anekal–Attibele road north for about 5 km into Attibele town and continue onto Sarjapura–Attibele Road — roughly 10 minutes, one straight route, with on-site parking when you arrive.
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

            <LandingFaq
                pageName="Orthopedic Doctor in Chandapura & Anekal"
                pagePath="/orthopedic-doctor-chandapura"
                subheading="Practical answers for patients from Chandapura, Anekal, Jigani and nearby areas."
                items={[
                    {
                        q: "How far is the clinic from Chandapura?",
                        a: "About 4 km — an 8-minute drive south on Hosur Road from Chandapura circle to Raghava Multispeciality Hospital on Sarjapura–Attibele Road, opposite Canara Bank. On-site parking is available.",
                    },
                    {
                        q: "Is there a good orthopedic doctor near Anekal?",
                        a: "Yes — the Attibele clinic is about 5 km (10 minutes) from Anekal town via the Anekal–Attibele road. Dr. Nitin is a fellowship-trained orthopedic and sports medicine specialist, and the hospital has in-house X-ray, a plaster room and an operating theatre.",
                    },
                    {
                        q: "Can my elderly parents be treated for knee pain without surgery?",
                        a: "In most cases, yes. Knee arthritis is first managed with physiotherapy, weight and activity guidance, medication, and — where indicated — guided injections such as hyaluronic acid or GFC. Joint replacement is discussed only when conservative care no longer controls pain, and the reasoning is explained honestly.",
                    },
                    {
                        q: "Do you treat children's fractures?",
                        a: "Yes. Pediatric orthopedic care is available at the Attibele clinic, from playground wrist fractures to sports injuries in school-age children. X-ray and casting happen in the same visit, and the hospital casualty accepts injured children 24/7.",
                    },
                    {
                        q: "What are the consultation timings and cost?",
                        a: "OPD runs Monday to Saturday, 10:00 AM – 6:00 PM, with same-day slots available most days. A consultation typically costs ₹500–₹1,000 including clinical examination and a written treatment plan. Call +91-9980031006 or WhatsApp to confirm a slot.",
                    },
                    {
                        q: "What if there's an accident or fracture at night?",
                        a: "The hospital runs a 24/7 emergency department for fractures and accident injuries — nights, Sundays and holidays included. For serious injuries, come straight to casualty; routine reviews can then be scheduled during OPD hours.",
                    },
                ]}
            />

            <FinalCtaStrip
                clinic={CLINIC}
                title="Specialist Care, Minutes from Home."
                subtitle="Chandapura · Anekal · Jigani — book at Attibele today."
            />

            <MobileStickyCTA clinic={CLINIC} />
            <LandingFooter clinic={CLINIC} />
        </main>
    );
}
