import { Metadata } from "next";
import {
    Phone,
    Bone,
    Activity,
    ShieldCheck,
    Stethoscope,
    Award,
    Users,
    MapPin,
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
        absolute: "Bone Doctor Near Me in Bengaluru | Dr. Nitin N Sunku",
    },
    description:
        "Looking for a bone doctor near you? Dr. Nitin N Sunku is a trusted bone specialist & orthopedic doctor in Bengaluru with clinics in Attibele and HSR Layout. Expert care for bone, joint, knee, shoulder & fracture problems. Same-day appointments.",
    alternates: {
        canonical: `${siteOrigin}/bone-doctor-near-me`,
    },
    keywords: [
        "bone doctor near me",
        "bone doctor HSR",
        "best bone doctor near me",
        "nearest bone doctor",
        "bone specialist near me",
        "nearby bone specialist",
        "bone specialist Bangalore",
        "bone specialists near me",
        "Dr. Nitin N Sunku",
    ],
    openGraph: {
        title: "Bone Doctor Near Me — Dr. Nitin N Sunku, Bengaluru",
        description:
            "Trusted bone specialist & orthopedic doctor in Bengaluru. Clinics in Attibele & HSR Layout. Expert bone, joint & fracture care with same-day appointments.",
        url: `${siteOrigin}/bone-doctor-near-me`,
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
    "Hi Dr. Nitin, I would like to book an appointment with the bone doctor.";

const conditions = [
    "Bone & joint pain",
    "Fractures & trauma",
    "Knee, hip & shoulder pain",
    "Arthritis & joint stiffness",
    "Sports & ligament injuries",
    "Back & neck pain",
    "Osteoporosis & bone health",
    "Post-injury rehabilitation",
];

const whyChoose = [
    {
        icon: Award,
        title: "Experienced Bone Specialist",
        description:
            "10+ years, fellowship-trained, and official team doctor for Bengaluru FC — a bone doctor you can trust.",
    },
    {
        icon: Stethoscope,
        title: "Conservative-First Approach",
        description:
            "Non-surgical treatment is always explored first. Surgery is recommended only when it's clearly the right choice.",
    },
    {
        icon: Activity,
        title: "Advanced Diagnosis & Surgery",
        description:
            "Accurate diagnosis and, when needed, minimally invasive arthroscopic and joint-replacement surgery.",
    },
    {
        icon: MapPin,
        title: "Two Locations Near You",
        description:
            "Bone specialist clinics in Attibele and HSR Layout — easy to reach from across south Bengaluru.",
    },
    {
        icon: ShieldCheck,
        title: "Insurance & Cashless Support",
        description:
            "Help with pre-authorisation paperwork so eligible patients can use cashless insurance for procedures.",
    },
    {
        icon: Users,
        title: "5000+ Happy Patients",
        description:
            "A 4.9-rated, patient-first bone and joint practice across Bengaluru.",
    },
];

export default function BoneDoctorNearMePage() {
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
                                    Same-Day Appointments Available
                                </span>

                                <h1 className="text-[2.5rem] sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-gray-900 leading-[1.05] tracking-tight mb-4 break-words">
                                    <span className="block">Bone Doctor</span>
                                    <span className="block bg-gradient-to-r from-blue-700 via-blue-600 to-indigo-600 bg-clip-text text-transparent pb-1">
                                        Near You in Bengaluru
                                    </span>
                                </h1>

                                <p className="text-lg sm:text-xl md:text-2xl text-blue-800 font-semibold mb-4">
                                    Dr. Nitin N Sunku — Bone Specialist &amp; Orthopedic Doctor
                                </p>
                                <p className="text-base sm:text-lg text-gray-600 mb-6 max-w-xl leading-relaxed">
                                    Searching for a bone doctor near me or the best bone specialist in Bangalore? Dr. Nitin N Sunku is a trusted bone doctor and orthopedic specialist with clinics in Attibele and HSR Layout — treating bone and joint pain, fractures, arthritis, knee and shoulder problems, and sports injuries with a conservative-first, evidence-based approach.
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
                                        metadata={{ cta_type: "form_scroll", condition: "bone-doctor" }}
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
                            <HeroImage alt="Dr. Nitin N Sunku — Bone Doctor & Bone Specialist in Attibele & HSR Layout, Bengaluru" />
                        </FadeIn>
                    </div>
                </div>
            </section>

            <StatsStrip />

            {/* ============= WHAT IS A BONE DOCTOR (unique content) ============= */}
            <section id="about" className="bg-white py-14 md:py-20 overflow-hidden">
                <div className="container mx-auto px-4 max-w-3xl">
                    <FadeIn>
                        <div className="mb-8">
                            <span className="inline-flex items-center gap-2 text-xs font-bold text-blue-700 uppercase tracking-widest mb-3">
                                <Bone className="w-4 h-4" />
                                Bone Doctor = Orthopedic Specialist
                            </span>
                            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-900 leading-tight break-words">
                                What does a bone doctor actually treat?
                            </h2>
                        </div>
                    </FadeIn>
                    <FadeIn delay={0.1}>
                        <div className="space-y-4 text-base md:text-lg text-gray-700 leading-relaxed">
                            <p>
                                &ldquo;Bone doctor&rdquo; and &ldquo;bone specialist&rdquo; are the everyday names for an orthopedic doctor — a specialist in the bones, joints, ligaments, tendons and muscles that let you move. So if you have been searching for a bone specialist near me or the nearest bone doctor, an orthopedic specialist like Dr. Nitin is exactly who you are looking for.
                            </p>
                            <p>
                                A good bone doctor handles far more than fractures: knee, shoulder, hip and ankle pain, arthritis and joint stiffness, sports and ligament injuries, back and neck pain, osteoporosis and bone-health concerns, and rehabilitation after an injury or surgery. The best bone doctors also know when <em>not</em> to operate — starting with an honest diagnosis and non-surgical care wherever it will work.
                            </p>
                            <p>
                                Dr. Nitin N Sunku is a fellowship-trained orthopedic and sports medicine specialist, a contributor to Springer&apos;s <em>Atlas of Arthroscopy</em>, and the official team doctor for Bengaluru FC — bringing that same standard of care to patients at both the Attibele and HSR Layout clinics.
                            </p>
                        </div>
                    </FadeIn>
                </div>
            </section>

            {/* ============= CONDITIONS ============= */}
            <section id="services" className="bg-gradient-to-b from-blue-50/60 to-white py-14 md:py-20 overflow-hidden">
                <div className="container mx-auto px-4 max-w-7xl">
                    <FadeIn>
                        <div className="text-center mb-12">
                            <span className="inline-block text-xs font-bold text-blue-700 uppercase tracking-widest mb-3">
                                — What We Treat —
                            </span>
                            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-3 break-words">
                                Complete Bone &amp; Joint Care
                            </h2>
                            <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
                                From everyday aches to complex surgery — expert care from a trusted bone specialist.
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

            {/* ============= WHY CHOOSE ============= */}
            <section className="bg-gradient-to-br from-gray-50 via-blue-50/40 to-white py-14 md:py-20 overflow-hidden">
                <div className="container mx-auto px-4 max-w-7xl">
                    <FadeIn>
                        <div className="text-center mb-12">
                            <span className="inline-block text-xs font-bold text-blue-700 uppercase tracking-widest mb-3">
                                — Why Choose Dr. Nitin —
                            </span>
                            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-3 break-words">
                                A Bone Doctor Who{" "}
                                <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                                    Puts You First
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
                                    Book the Bone Doctor Near You
                                </h2>
                                <p className="text-base md:text-lg text-blue-100 max-w-md mx-auto">
                                    Fill the form — our team will call you back within hours to confirm your slot at Attibele or HSR Layout.
                                </p>
                            </div>
                        </FadeIn>

                        <FadeIn delay={0.1}>
                            <div className="bg-white rounded-3xl shadow-2xl p-6 md:p-10 border border-white/50">
                                <BookingForm source="ads-bone-doctor" />
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
                heading="Find the Bone Doctor Nearest You"
                subheading="Two clinics in Bengaluru — Attibele and HSR Layout. Pick whichever is closer to you."
            />

            <LandingFaq
                pageName="Bone Doctor Near Me in Bengaluru"
                pagePath="/bone-doctor-near-me"
                subheading="Straight answers about seeing a bone specialist near you."
                items={[
                    {
                        q: "Is a bone doctor the same as an orthopedic doctor?",
                        a: "Yes. 'Bone doctor' and 'bone specialist' are the everyday names for an orthopedic doctor — a specialist in bones, joints, ligaments and muscles. Dr. Nitin N Sunku is a fellowship-trained orthopedic and sports medicine specialist, so whether you want a bone specialist in Bangalore or a bone doctor near you, you are in the right place.",
                    },
                    {
                        q: "How do I find the best bone doctor near me?",
                        a: "Look for a fellowship-trained orthopedic specialist with focused experience in your specific problem, an honest conservative-first approach, and a clinic close enough for easy follow-up. Dr. Nitin consults in Attibele and HSR Layout — call +91-9980031006 or use the booking form on this page to arrange a visit.",
                    },
                    {
                        q: "Where is the nearest bone specialist clinic?",
                        a: "Dr. Nitin consults at Raghava Multispeciality Hospital, Attibele (convenient for Attibele, Anekal, Bommasandra, Chandapura, Hosur Road and Electronic City) and Health Nest Hospital, HSR Layout (convenient for HSR Layout, Koramangala, BTM Layout, Bellandur and Sarjapur Road). Pick whichever is closer to you.",
                    },
                    {
                        q: "What problems does a bone doctor treat?",
                        a: "Bone and joint pain, fractures and trauma, arthritis, knee, shoulder, hip and ankle problems, sports and ligament injuries, back and neck pain, osteoporosis, and rehabilitation after injury or surgery. Both non-surgical and surgical treatments are available.",
                    },
                    {
                        q: "Do I always need surgery to see a bone specialist?",
                        a: "No — most bone and joint problems are managed without surgery. The practice follows a conservative-first philosophy: physiotherapy, medication, lifestyle changes and targeted injections are used first, and surgery is recommended only when the evidence clearly supports it.",
                    },
                    {
                        q: "Can I get a same-day appointment with the bone doctor?",
                        a: "Usually, yes. Same-day and next-day slots are generally available on consulting days. Call or WhatsApp ahead to confirm, or submit the booking form and the team will call back within hours.",
                    },
                ]}
            />

            <FinalCtaStrip
                clinic={CLINIC}
                title="A Trusted Bone Doctor, Close to You."
                subtitle="Book at Attibele or HSR Layout today."
            />

            <MobileStickyCTA clinic={CLINIC} />
            <LandingFooter clinic={CLINIC} />
        </main>
    );
}
