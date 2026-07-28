import { Metadata } from "next";
import {
    Phone,
    MapPin,
    Clock,
    Award,
    Heart,
    CheckCircle,
    ShieldCheck,
    Stethoscope,
    Activity,
    Bone,
    Zap,
    UserCheck,
    Brain,
    Syringe,
    Sparkles,
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
            "Orthopaedic Clinic Near Me in Bangalore | Dr. Nitin N Sunku",
    },
    description:
        "Looking for an orthopaedic clinic near me? Dr. Nitin N Sunku runs orthopedic clinics in Attibele and HSR Layout, Bengaluru — expert care for bone, joint, knee, sports & spine problems. Same-day appointments.",
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
        "orthopedic clinic Bangalore",
        "Dr. Nitin N Sunku",
    ],
    openGraph: {
        title:
            "Orthopaedic Clinic Near Me — Dr. Nitin N Sunku, Bengaluru",
        description:
            "Two orthopedic clinics in Attibele & HSR Layout. Expert care for bone, joint, knee, sports & spine problems — same-day appointments.",
        url: `${siteOrigin}/orthopaedic-clinic-near-me`,
        type: "website",
    },
    robots: { index: false, follow: true }, // ads-only landing page: kept out of organic index; 'follow' preserves link equity.
};

const CLINIC = PRIMARY_CLINIC;
const PRIMARY_PHONE = CLINIC.phone;
const PRIMARY_PHONE_DIGITS = CLINIC.phoneDigits;
const WHATSAPP_MESSAGE =
    "Hi Dr. Nitin, I would like to book an appointment at your orthopaedic clinic.";

const services = [
    {
        title: "Knee & Joint Pain",
        description: "Arthritis, ligament and cartilage problems, joint replacement.",
        Icon: Bone,
        color: "from-orange-500 to-orange-600",
        bg: "bg-orange-50",
    },
    {
        title: "Sports Injuries",
        description: "ACL, meniscus, shoulder and ankle injuries — sports medicine.",
        Icon: Sparkles,
        color: "from-emerald-500 to-emerald-600",
        bg: "bg-emerald-50",
    },
    {
        title: "Arthroscopy",
        description: "Minimally invasive keyhole surgery for joints.",
        Icon: Activity,
        color: "from-blue-500 to-blue-600",
        bg: "bg-blue-50",
    },
    {
        title: "Fracture & Trauma",
        description: "Advanced care for fractures and accident injuries.",
        Icon: ShieldCheck,
        color: "from-red-500 to-red-600",
        bg: "bg-red-50",
    },
    {
        title: "Spine & Back Pain",
        description: "Diagnosis and treatment for neck, back and spine conditions.",
        Icon: Brain,
        color: "from-purple-500 to-purple-600",
        bg: "bg-purple-50",
    },
    {
        title: "Regenerative Care",
        description: "PRP and advanced injections to heal naturally.",
        Icon: Syringe,
        color: "from-teal-500 to-teal-600",
        bg: "bg-teal-50",
    },
    {
        title: "Rehabilitation",
        description: "Personalised physiotherapy and recovery planning.",
        Icon: Heart,
        color: "from-pink-500 to-pink-600",
        bg: "bg-pink-50",
    },
];

const whyChoose = [
    {
        title: "Expertise You Can Trust",
        description: "Fellowship-trained orthopedic specialist with 10+ years of experience.",
        Icon: ShieldCheck,
    },
    {
        title: "Conservative-First Care",
        description: "We exhaust non-surgical options before ever recommending surgery.",
        Icon: Stethoscope,
    },
    {
        title: "Advanced Technology",
        description: "Modern diagnostics and minimally invasive techniques.",
        Icon: Zap,
    },
    {
        title: "Two Clinics Near You",
        description: "Attibele and HSR Layout — easy access across South Bengaluru.",
        Icon: MapPin,
    },
    {
        title: "Same-Day Appointments",
        description: "Same-day and next-day slots usually available on consulting days.",
        Icon: Clock,
    },
    {
        title: "Trusted by Patients",
        description: "Rated 4.9★ by hundreds of happy patients.",
        Icon: UserCheck,
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
                                        Near You
                                    </span>
                                </h1>

                                <p className="text-lg sm:text-xl md:text-2xl text-blue-800 font-semibold mb-4">
                                    Dr. Nitin N Sunku — Orthopedic &amp; Sports Medicine Specialist
                                </p>
                                <p className="text-base sm:text-lg text-gray-600 mb-6 max-w-xl leading-relaxed">
                                    Searching for an orthopaedic clinic near me? Dr. Nitin N Sunku runs two well-equipped orthopedic clinics in Bengaluru — in Attibele and in HSR Layout — for expert care of bone, joint, knee, sports and spine problems. Fellowship-trained, conservative-first, with same-day appointments and easy access from across South Bengaluru.
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
                                A Full-Service{" "}
                                <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                                    Orthopedic Clinic
                                </span>
                            </h2>
                            <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
                                Everything for bones, joints and muscles — under one roof, at both clinics.
                            </p>
                        </div>
                    </FadeIn>

                    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-7 gap-3 md:gap-5">
                        {services.map(({ title, description, Icon, color, bg }, idx) => (
                            <FadeIn key={title} delay={idx * 0.05}>
                                <div className="group relative bg-white rounded-2xl p-4 md:p-6 border border-gray-100 shadow-sm hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 h-full overflow-hidden">
                                    <div aria-hidden className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${color} opacity-0 group-hover:opacity-100 transition-opacity`}></div>
                                    <div className={`w-12 h-12 md:w-14 md:h-14 mx-auto mb-3 rounded-2xl ${bg} flex items-center justify-center group-hover:scale-110 transition-transform`}>
                                        <Icon className={`w-6 h-6 md:w-7 md:h-7 bg-gradient-to-br ${color} bg-clip-text`} style={{ color: "currentColor" }} strokeWidth={2.2} />
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
            <section id="about" className="bg-white py-14 md:py-20 overflow-hidden">
                <div className="container mx-auto px-4 max-w-7xl">
                    <FadeIn>
                        <div className="text-center mb-12">
                            <span className="inline-block text-xs font-bold text-blue-700 uppercase tracking-widest mb-3">
                                — Why Choose Our Clinic —
                            </span>
                            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-3 break-words">
                                Your Health.{" "}
                                <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                                    Our Priority.
                                </span>
                            </h2>
                            <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
                                Six reasons patients across South Bengaluru choose Dr. Nitin&apos;s orthopedic clinics.
                            </p>
                        </div>
                    </FadeIn>

                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-5">
                        {whyChoose.map(({ title, description, Icon }, idx) => (
                            <FadeIn key={title} delay={idx * 0.06}>
                                <div className="group bg-white rounded-2xl p-4 sm:p-5 md:p-6 border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 h-full">
                                    <div className="flex items-start gap-3">
                                        <div className="w-10 h-10 sm:w-11 sm:h-11 md:w-12 md:h-12 rounded-2xl bg-gradient-to-br from-blue-100 to-blue-200 flex items-center justify-center flex-shrink-0 group-hover:from-blue-600 group-hover:to-blue-800 transition-colors">
                                            <Icon className="w-5 h-5 md:w-6 md:h-6 text-blue-700 group-hover:text-white transition-colors" />
                                        </div>
                                        <div className="min-w-0 flex-1">
                                            <h3 className="font-bold text-gray-900 text-sm sm:text-base mb-1 leading-tight">
                                                {title}
                                            </h3>
                                            <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                                                {description}
                                            </p>
                                        </div>
                                    </div>
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
                                    Book at the Clinic Nearest You
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
                heading="Find Your Nearest Orthopedic Clinic"
                subheading="Two clinics — Attibele and HSR Layout — serving patients across South and South-East Bengaluru."
            />

            <LandingFaq
                pageName="Orthopaedic Clinic Near Me in Bangalore"
                pagePath="/orthopaedic-clinic-near-me"
                subheading="Practical answers about visiting Dr. Nitin's orthopedic clinics."
                items={[
                    {
                        q: "Where is the nearest orthopaedic clinic?",
                        a: "Dr. Nitin N Sunku consults at two orthopedic clinics in Bengaluru: Raghava Multispeciality Hospital, Attibele (Sarjapura–Attibele Road) and Health Nest Hospital, HSR Layout (Sector 2, 24th Main Road). Between them they are convenient for Attibele, Anekal, Bommasandra, Chandapura, Electronic City, Hosur Road, HSR Layout, Koramangala, BTM Layout, Bellandur and Sarjapur Road.",
                    },
                    {
                        q: "Is there an orthopedic clinic in HSR Layout?",
                        a: "Yes. Dr. Nitin's HSR Layout orthopaedic clinic is at Health Nest Hospital, 1162, 24th Main Road, Garden Layout, Sector 2, HSR Layout, Bengaluru 560102. Call +91-9449031003 or use the booking form on this page to arrange a visit.",
                    },
                    {
                        q: "What can I get treated at the clinic?",
                        a: "Knee, shoulder, hip and ankle pain, sports injuries, ACL and meniscus tears, arthritis, fractures, back and neck pain, and regenerative treatments such as PRP. Surgical cases (arthroscopy, joint replacement) are assessed at the clinic and scheduled at the partner hospital.",
                    },
                    {
                        q: "Do I need an appointment, or can I walk in?",
                        a: "Both work, but booking ahead is faster. Same-day and next-day slots are usually available on consulting days. Call or WhatsApp to confirm timings, or submit the booking form and the team will call you back within hours.",
                    },
                    {
                        q: "How much does a consultation cost?",
                        a: "A consultation typically costs ₹500–₹1,000 and includes a clinical examination and a written treatment plan. Imaging is advised only when it will genuinely change the treatment decision.",
                    },
                    {
                        q: "Do the clinics accept health insurance?",
                        a: "Yes — insurance is accepted and the team assists with cashless pre-authorisation paperwork for procedures such as arthroscopy and joint replacement. Outpatient consultations are typically paid out of pocket unless your policy covers OPD.",
                    },
                ]}
            />

            <FinalCtaStrip
                clinic={CLINIC}
                title="Expert Orthopedic Care, Close to Home."
                subtitle="Book at the clinic nearest you today."
            />

            <MobileStickyCTA clinic={CLINIC} />
            <LandingFooter clinic={CLINIC} />
        </main>
    );
}
