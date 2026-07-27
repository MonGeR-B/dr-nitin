import { Metadata } from "next";
import {
    Phone,
    MapPin,
    Clock,
    Activity,
    Bone,
    Zap,
    ShieldCheck,
    Brain,
    Syringe,
    Award,
    Heart,
    Users,
    Stethoscope,
    CheckCircle,
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
        absolute: "Orthopaedic Clinic Near Me in Bengaluru | Dr. Nitin N Sunku",
    },
    description:
        "Looking for an orthopaedic clinic near you? Dr. Nitin N Sunku runs orthopedic clinics in Attibele and HSR Layout, Bengaluru — expert care for bone, joint, knee, shoulder & sports injuries. Same-day appointments. Call or book online.",
    alternates: {
        canonical: `${siteOrigin}/orthopaedic-clinic-near-me`,
    },
    keywords: [
        "orthopaedic clinic near me",
        "orthopaedic clinic",
        "ortho clinic near me",
        "orthopedic clinic near by me",
        "orthopedic near me clinic",
        "near me orthopedic clinic",
        "nearest orthopedic clinic",
        "orthopedic clinic in HSR",
        "near by orthopedic clinic",
        "Dr. Nitin N Sunku",
    ],
    openGraph: {
        title: "Orthopaedic Clinic Near Me — Dr. Nitin N Sunku, Bengaluru",
        description:
            "Two orthopedic clinics in Bengaluru — Attibele & HSR Layout. Expert bone, joint & sports care with same-day appointments.",
        url: `${siteOrigin}/orthopaedic-clinic-near-me`,
        type: "website",
    },
    // Ads-only landing page: kept out of the organic index. Near-me ranking is
    // driven by Google Business Profile, not this page's copy.
    robots: { index: false, follow: true },
};

const CLINIC = PRIMARY_CLINIC;
const PRIMARY_PHONE = CLINIC.phone;
const PRIMARY_PHONE_DIGITS = CLINIC.phoneDigits;
const WHATSAPP_MESSAGE =
    "Hi Dr. Nitin, I would like to book an appointment at your orthopaedic clinic.";

const services = [
    {
        title: "Arthroscopy",
        description: "Keyhole surgery for knee, shoulder & other joints.",
        Icon: Activity,
        bg: "bg-blue-50",
        color: "text-blue-700",
    },
    {
        title: "Joint Replacement",
        description: "Knee, hip & shoulder replacement for better mobility.",
        Icon: Bone,
        bg: "bg-orange-50",
        color: "text-orange-700",
    },
    {
        title: "Sports Injury",
        description: "ACL, ligament & cartilage care for active people.",
        Icon: Zap,
        bg: "bg-emerald-50",
        color: "text-emerald-700",
    },
    {
        title: "Fracture & Trauma",
        description: "Prompt care for fractures and injuries.",
        Icon: ShieldCheck,
        bg: "bg-red-50",
        color: "text-red-700",
    },
    {
        title: "Back & Neck Pain",
        description: "Diagnosis & treatment for spine-related pain.",
        Icon: Brain,
        bg: "bg-purple-50",
        color: "text-purple-700",
    },
    {
        title: "Arthritis & PRP",
        description: "Non-surgical relief with injections & regenerative care.",
        Icon: Syringe,
        bg: "bg-teal-50",
        color: "text-teal-700",
    },
];

const whyChoose = [
    {
        icon: MapPin,
        title: "Two Clinics Close to You",
        description:
            "Orthopedic clinics in Attibele and HSR Layout — easy to reach from across south and southeast Bengaluru.",
    },
    {
        icon: Clock,
        title: "Same-Day Appointments",
        description:
            "Same-day and next-day slots are usually available on consulting days — call or WhatsApp ahead.",
    },
    {
        icon: Award,
        title: "Experienced Specialist",
        description:
            "10+ years, fellowship-trained, and official team doctor for Bengaluru FC.",
    },
    {
        icon: Stethoscope,
        title: "Conservative-First Care",
        description:
            "Non-surgical options are explored before surgery is ever recommended.",
    },
    {
        icon: Heart,
        title: "Patient-Centered",
        description:
            "Clear explanations, honest advice, and a plan you actually understand.",
    },
    {
        icon: Users,
        title: "5000+ Happy Patients",
        description:
            "A 4.9-rated, trusted orthopedic practice across Bengaluru.",
    },
];

export default function OrthopaedicClinicNearMePage() {
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
                                    Two Clinics · Attibele &amp; HSR Layout
                                </span>

                                <h1 className="text-[2.5rem] sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-gray-900 leading-[1.05] tracking-tight mb-4 break-words">
                                    <span className="block">Orthopaedic Clinic</span>
                                    <span className="block bg-gradient-to-r from-blue-700 via-blue-600 to-indigo-600 bg-clip-text text-transparent pb-1">
                                        Near You in Bengaluru
                                    </span>
                                </h1>

                                <p className="text-lg sm:text-xl md:text-2xl text-blue-800 font-semibold mb-4">
                                    Dr. Nitin N Sunku — Orthopedic &amp; Sports Medicine Specialist
                                </p>
                                <p className="text-base sm:text-lg text-gray-600 mb-6 max-w-xl leading-relaxed">
                                    Searching for an orthopaedic clinic near me? Dr. Nitin N Sunku consults at two convenient orthopedic clinics in Bengaluru — Attibele and HSR Layout — for bone, joint, knee, shoulder and sports injury care. Whether you need the nearest orthopedic clinic in the southeast belt or an orthopedic clinic in HSR, expert, conservative-first treatment is close by.
                                </p>

                                <div className="flex flex-wrap gap-2 mb-7">
                                    <span className="inline-flex items-center gap-1.5 bg-white/90 backdrop-blur border border-gray-200 rounded-full px-3 py-1.5 text-xs sm:text-sm font-medium text-gray-800 shadow-sm">
                                        <CheckCircle className="w-3.5 h-3.5 text-emerald-600" />
                                        Same-Day Slots
                                    </span>
                                    <span className="inline-flex items-center gap-1.5 bg-white/90 backdrop-blur border border-gray-200 rounded-full px-3 py-1.5 text-xs sm:text-sm font-medium text-gray-800 shadow-sm">
                                        <Award className="w-3.5 h-3.5 text-blue-600" />
                                        10+ Years
                                    </span>
                                    <span className="inline-flex items-center gap-1.5 bg-white/90 backdrop-blur border border-gray-200 rounded-full px-3 py-1.5 text-xs sm:text-sm font-medium text-gray-800 shadow-sm">
                                        <Star className="w-3.5 h-3.5 text-yellow-500 fill-yellow-500" />
                                        4.9 Rated
                                    </span>
                                </div>

                                <div className="flex flex-col sm:flex-row gap-3 mb-6">
                                    <TrackedButton
                                        buttonName="Book Appointment - Hero"
                                        buttonLocation="Hero"
                                        href="#booking-form"
                                        className="group inline-flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold px-6 py-4 rounded-xl shadow-lg shadow-blue-500/30 hover:shadow-xl hover:shadow-blue-500/40 transition-all transform hover:-translate-y-0.5"
                                        metadata={{ cta_type: "form_scroll", condition: "orthopaedic-clinic" }}
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
                            <HeroImage alt="Dr. Nitin N Sunku — Orthopaedic Clinic in Attibele & HSR Layout, Bengaluru" />
                        </FadeIn>
                    </div>
                </div>
            </section>

            <StatsStrip />

            {/* ============= SERVICES ============= */}
            <section id="services" className="bg-gradient-to-b from-blue-50/60 to-white py-14 md:py-20 overflow-hidden">
                <div className="container mx-auto px-4 max-w-7xl">
                    <FadeIn>
                        <div className="text-center mb-12">
                            <span className="inline-block text-xs font-bold text-blue-700 uppercase tracking-widest mb-3">
                                — What We Treat —
                            </span>
                            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-3 break-words">
                                A Full Orthopedic Clinic{" "}
                                <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                                    Under One Roof
                                </span>
                            </h2>
                            <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
                                From everyday aches to complex surgery — comprehensive orthopedic care at both clinics.
                            </p>
                        </div>
                    </FadeIn>

                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 md:gap-5 max-w-5xl mx-auto">
                        {services.map(({ title, description, Icon, bg, color }, idx) => (
                            <FadeIn key={title} delay={idx * 0.05}>
                                <div className="group bg-white rounded-2xl p-4 md:p-6 border border-gray-100 shadow-sm hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 h-full">
                                    <div className={`w-12 h-12 md:w-14 md:h-14 mx-auto mb-3 rounded-2xl ${bg} flex items-center justify-center group-hover:scale-110 transition-transform`}>
                                        <Icon className={`w-6 h-6 md:w-7 md:h-7 ${color}`} strokeWidth={2.2} />
                                    </div>
                                    <h3 className="font-bold text-gray-900 text-sm md:text-base mb-1.5 text-center leading-tight">
                                        {title}
                                    </h3>
                                    <p className="text-[11px] md:text-xs text-gray-600 text-center leading-relaxed">
                                        {description}
                                    </p>
                                </div>
                            </FadeIn>
                        ))}
                    </div>
                </div>
            </section>

            {/* ============= WHY CHOOSE ============= */}
            <section id="about" className="bg-gradient-to-br from-gray-50 via-blue-50/40 to-white py-14 md:py-20 overflow-hidden">
                <div className="container mx-auto px-4 max-w-7xl">
                    <FadeIn>
                        <div className="text-center mb-12">
                            <span className="inline-block text-xs font-bold text-blue-700 uppercase tracking-widest mb-3">
                                — Why Patients Choose Us —
                            </span>
                            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-3 break-words">
                                An Orthopedic Clinic That{" "}
                                <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                                    Actually Listens
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
                                    Book at the Clinic Near You
                                </h2>
                                <p className="text-base md:text-lg text-blue-100 max-w-md mx-auto">
                                    Fill the form — our team will call you back within hours to confirm your slot at Attibele or HSR Layout.
                                </p>
                            </div>
                        </FadeIn>

                        <FadeIn delay={0.1}>
                            <div className="bg-white rounded-3xl shadow-2xl p-6 md:p-10 border border-white/50">
                                <BookingForm source="ads-orthopaedic-clinic" />
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
                heading="Find Your Nearest Clinic"
                subheading="Two orthopedic clinics in Bengaluru — Attibele and HSR Layout. Pick whichever is closer to you."
            />

            <LandingFaq
                pageName="Orthopaedic Clinic Near Me in Bengaluru"
                pagePath="/orthopaedic-clinic-near-me"
                subheading="Practical answers about visiting Dr. Nitin's orthopedic clinics."
                items={[
                    {
                        q: "Where is the nearest orthopaedic clinic to me?",
                        a: "Dr. Nitin consults at two clinics in Bengaluru: Raghava Multispeciality Hospital, Attibele (convenient for Attibele, Anekal, Bommasandra, Chandapura, Hosur Road and Electronic City) and Health Nest Hospital, HSR Layout (convenient for HSR Layout, Koramangala, BTM Layout, Bellandur and Sarjapur Road). Pick whichever is closer and call to confirm timings.",
                    },
                    {
                        q: "Do I need an appointment, or can I walk in?",
                        a: "Both work. Same-day and next-day appointments are usually available on consulting days, and walk-ins are seen based on the day's schedule. Calling or using the booking form first means less waiting.",
                    },
                    {
                        q: "What conditions does the orthopedic clinic treat?",
                        a: "Knee, shoulder, hip and ankle pain, sports injuries, ACL and meniscus tears, arthritis, fractures, back and neck pain, and regenerative treatments such as PRP. Surgical cases like arthroscopy and joint replacement are evaluated at the clinic and scheduled at the partner hospital.",
                    },
                    {
                        q: "What are the clinic timings?",
                        a: "The Attibele clinic runs Mon–Sat, 10:00 AM – 6:00 PM, and the HSR Layout clinic Mon–Sat, 10:00 AM – 8:00 PM. Timings can vary on consulting days, so it's best to confirm by phone or WhatsApp before visiting.",
                    },
                    {
                        q: "How much does a consultation cost?",
                        a: "A consultation is typically ₹500–₹1,000 and includes a clinical examination and a written treatment plan. Imaging is advised only when it will genuinely change the treatment decision.",
                    },
                    {
                        q: "Do the clinics accept health insurance?",
                        a: "Yes — insurance is accepted and the team assists with pre-authorisation for procedures such as arthroscopy and joint replacement. Outpatient consultations are usually paid out of pocket unless your policy covers OPD.",
                    },
                ]}
            />

            <FinalCtaStrip
                clinic={CLINIC}
                title="An Orthopedic Clinic Close to Home."
                subtitle="Book at Attibele or HSR Layout today."
            />

            <MobileStickyCTA clinic={CLINIC} />
            <LandingFooter clinic={CLINIC} />
        </main>
    );
}
