import { Metadata } from "next";
import {
    Phone,
    MapPin,
    Award,
    Heart,
    CheckCircle,
    Stethoscope,
    Users,
    Activity,
    ShieldCheck,
    Hospital,
    Laptop,
    Star,
    MessageCircle,
    Calendar,
    ChevronRight,
    Car,
    Briefcase,
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
    title: { absolute: "Orthopedic Doctor near Electronic City, Bengaluru | Dr. Nitin Sunku" },
    description:
        "Orthopedic & sports medicine specialist 20 min from Electronic City Phase 1. Knee, back, shoulder & sports injury care — skip the city traffic. Book today.",
    alternates: { canonical: `${siteOrigin}/orthopedic-doctor-electronic-city` },
    keywords: [
        "orthopedic doctor Electronic City",
        "best orthopedic doctor Electronic City",
        "orthopedic doctor near Electronic City Phase 1",
        "orthopedic doctor Electronic City Phase 2",
        "knee pain doctor Electronic City",
        "back pain doctor Electronic City",
        "sports injury doctor Electronic City",
        "orthopedic doctor Hebbagodi",
        "orthopedic doctor Bommasandra",
        "orthopedic doctor Neo Town",
        "ortho doctor near me Electronic City",
    ],
    openGraph: {
        title: "Orthopedic Doctor near Electronic City — Dr. Nitin N Sunku",
        description:
            "Fellowship-trained orthopedic specialist, 20 minutes from Electronic City via the elevated expressway. Knee, back, shoulder and sports injury care without the city commute.",
        url: `${siteOrigin}/orthopedic-doctor-electronic-city`,
        type: "website",
    },
    robots: { index: true, follow: true },
};

// Electronic City patients are served from the Attibele clinic — all CTAs route there.
const CLINIC = ATTIBELE_CLINIC;
const PHONE = CLINIC.phone;
const PHONE_DIGITS = CLINIC.phoneDigits;
const WHATSAPP_MESSAGE =
    "Hi Dr. Nitin, I'm from the Electronic City area and would like to book an appointment.";

const conditions = [
    { title: "Neck & Back Pain (Desk Strain)", Icon: Laptop },
    { title: "Knee Pain & Early Arthritis", Icon: Activity },
    { title: "Sports & Gym Injuries", Icon: Heart },
    { title: "ACL / Meniscus Tears", Icon: ShieldCheck },
    { title: "Shoulder Pain & Rotator Cuff", Icon: Users },
    { title: "Fractures & Trauma", Icon: Award },
    { title: "Regenerative Injections (PRP/GFC)", Icon: Stethoscope },
    { title: "Joint Replacement", Icon: Hospital },
];

const areasServed = [
    { name: "Electronic City Phase 1", distance: "10–12 km", note: "~20 min via expressway" },
    { name: "Electronic City Phase 2", distance: "9–11 km", note: "~18 min drive" },
    { name: "Neo Town", distance: "9 km", note: "~16 min drive" },
    { name: "Hebbagodi", distance: "7 km", note: "~14 min drive" },
    { name: "Bommasandra", distance: "6 km", note: "~12 min drive" },
    { name: "Chandapura", distance: "4 km", note: "~8 min drive" },
    { name: "Jigani", distance: "8 km", note: "~15 min drive" },
    { name: "Attibele", distance: "0 km", note: "Clinic location" },
];

const sellingPoints = [
    {
        Icon: Car,
        title: "Against the Traffic, Not Into It",
        description:
            "From Electronic City the clinic is a ~20-minute drive south via Hosur Road — the opposite direction from the city's rush-hour crawl toward Koramangala or Bannerghatta Road hospitals.",
    },
    {
        Icon: Award,
        title: "Fellowship-Trained Specialist",
        description:
            "Dr. Nitin is a fellowship-trained orthopedic & sports medicine specialist with 10+ years of experience treating joint, spine and sports conditions.",
    },
    {
        Icon: Laptop,
        title: "IT-Corridor Problems, Understood",
        description:
            "Long desk hours, daily two-wheeler commutes and weekend sports produce a very specific mix of neck, back and knee complaints — a large share of the practice comes from exactly this corridor.",
    },
    {
        Icon: Users,
        title: "Official Bengaluru FC Team Doctor",
        description:
            "The same sports-medicine expertise trusted by professional footballers, applied to your badminton shoulder, gym injury or marathon knee.",
    },
    {
        Icon: Briefcase,
        title: "Insurance & Pre-Authorisation Help",
        description:
            "Health insurance is accepted for procedures, and the hospital team assists with cashless pre-authorisation paperwork — useful for corporate policies common in Electronic City.",
    },
    {
        Icon: Heart,
        title: "Conservative-First Philosophy",
        description:
            "Non-surgical options — physiotherapy, medication, guided injections — are exhausted before surgery is ever recommended. Honest, evidence-based care.",
    },
];

export default function OrthopedicDoctorElectronicCityPage() {
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
                                    20 Minutes from Electronic City Phase 1
                                </span>

                                <h1 className="text-[2.5rem] sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-gray-900 leading-[1.05] tracking-tight mb-4 break-words">
                                    <span className="block">Orthopedic Doctor near</span>
                                    <span className="block bg-gradient-to-r from-blue-700 via-blue-600 to-indigo-600 bg-clip-text text-transparent pb-1">
                                        Electronic City
                                    </span>
                                </h1>

                                <p className="text-lg sm:text-xl md:text-2xl text-blue-800 font-semibold mb-4">
                                    Dr. Nitin N Sunku — at Raghava Multispeciality Hospital, Attibele
                                </p>
                                <p className="text-base sm:text-lg text-gray-600 mb-6 max-w-xl leading-relaxed">
                                    Fellowship-trained orthopedic &amp; sports medicine specialist, a straight 20-minute drive down Hosur Road from Phase 1 and Phase 2. Desk-strain back pain, gym and badminton injuries, knee pain — treated properly, without fighting city traffic to get there.
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
                                        metadata={{ cta_type: "form_scroll", condition: "electronic-city-local" }}
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
                            <HeroImage alt="Dr. Nitin N Sunku — Orthopedic Doctor near Electronic City, Bengaluru" />
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
                                Orthopedic Care for the{" "}
                                <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                                    IT Corridor
                                </span>
                            </h2>
                            <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
                                From ten-hour desk days to weekend football — the injuries Electronic City actually gets.
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

            {/* ============= COMMUTE / AREAS SERVED (unique content) ============= */}
            <section className="bg-gradient-to-br from-gray-50 via-blue-50/40 to-white py-14 md:py-20 overflow-hidden">
                <div className="container mx-auto px-4 max-w-7xl">
                    <FadeIn>
                        <div className="text-center mb-12">
                            <span className="inline-block text-xs font-bold text-blue-700 uppercase tracking-widest mb-3">
                                — From Your Doorstep —
                            </span>
                            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-3 break-words">
                                A Short Drive{" "}
                                <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                                    Down Hosur Road
                                </span>
                            </h2>
                            <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
                                South on NH 44, past Chandapura, into Attibele — with parking waiting at the other end.
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
                                From Electronic City, getting to a good orthopedic specialist usually means driving <em>into</em> Bengaluru — 45–90 minutes to Koramangala or Bannerghatta Road, depending on traffic. The Attibele clinic flips that: a ~20-minute run south on Hosur Road (NH 44), against the peak-hour flow, with on-site parking when you arrive. Consultation, X-ray and follow-up are handled in one visit at Raghava Multispeciality Hospital, and most patients are back home or at their desk within a couple of hours.
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
                                Specialist Care,{" "}
                                <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                                    Without the Commute
                                </span>
                            </h2>
                            <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
                                Six reasons Electronic City professionals and families choose the Attibele clinic.
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

            {/* ============= DESK-STRAIN SECTION (unique content) ============= */}
            <section className="py-14 md:py-20 bg-gradient-to-br from-blue-700 via-blue-800 to-indigo-800 text-white relative overflow-hidden">
                <div aria-hidden className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(circle at 2px 2px, white 1px, transparent 0)", backgroundSize: "32px 32px" }}></div>
                <div className="container mx-auto px-4 max-w-6xl relative z-10">
                    <FadeIn>
                        <div className="grid lg:grid-cols-5 gap-10 items-center">
                            <div className="lg:col-span-3">
                                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-5 leading-tight">
                                    Ten Hours at a Desk. Two Hours on a Bike. Sunday Football.
                                </h2>
                                <p className="text-base md:text-lg text-blue-100 leading-relaxed mb-5">
                                    That weekly routine is why Electronic City generates so much back, neck and knee trouble — long static sitting stiffens the spine, the commute loads it further, and a sudden weekend sprint asks muscles and ligaments to do what they haven&apos;t trained for. Most of it responds well to early, conservative treatment: posture and movement correction, targeted physiotherapy, and — where genuinely indicated — precise, ultrasound-guided injections. Surgery is the last resort, not the first suggestion.
                                </p>
                                <div className="inline-flex items-center gap-2 bg-white/15 backdrop-blur border border-white/20 rounded-full px-5 py-2.5 text-sm font-semibold">
                                    <Laptop className="w-4 h-4" />
                                    Desk strain · commute load · weekend-warrior injuries
                                </div>
                            </div>

                            <div className="lg:col-span-2">
                                <div className="bg-white/10 backdrop-blur border border-white/20 rounded-3xl p-7 md:p-8 text-center">
                                    <Stethoscope className="w-12 h-12 mx-auto mb-4 text-blue-200" />
                                    <p className="text-2xl md:text-3xl font-bold leading-tight mb-2">Treat It Early</p>
                                    <p className="text-base text-blue-100 leading-relaxed">Most desk-strain and sports problems never need surgery when addressed in time.</p>
                                    <div className="mt-6 pt-6 border-t border-white/20 grid grid-cols-3 gap-3 text-center">
                                        <div>
                                            <p className="text-2xl font-bold">1st</p>
                                            <p className="text-[11px] text-blue-200 uppercase tracking-wider mt-1">Physio & Rehab</p>
                                        </div>
                                        <div>
                                            <p className="text-2xl font-bold">2nd</p>
                                            <p className="text-[11px] text-blue-200 uppercase tracking-wider mt-1">Guided Injections</p>
                                        </div>
                                        <div>
                                            <p className="text-2xl font-bold">Last</p>
                                            <p className="text-[11px] text-blue-200 uppercase tracking-wider mt-1">Surgery</p>
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
                                    Book Your Appointment
                                </h2>
                                <p className="text-base md:text-lg text-blue-100 max-w-md mx-auto">
                                    The team will call you back within hours to confirm your slot — WhatsApp works too.
                                </p>
                            </div>
                        </FadeIn>

                        <FadeIn delay={0.1}>
                            <div className="bg-white rounded-3xl shadow-2xl p-6 md:p-10 border border-white/50">
                                <BookingForm source="ads-electronic-city" />
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

            {/* Both clinics — Electronic City sits between Attibele and HSR Layout,
                so patients can pick whichever suits their commute. */}
            <LocationsWithMaps
                clinics={CLINICS}
                primaryId={CLINIC.id}
                heading="Two Clinics — Pick the Easier Drive"
                subheading="Attibele (20 min south via Hosur Road) is primary; HSR Layout works if you're headed toward the city."
            />

            <LandingFaq
                pageName="Orthopedic Doctor near Electronic City, Bengaluru"
                pagePath="/orthopedic-doctor-electronic-city"
                subheading="Practical answers for patients coming from Electronic City Phase 1, Phase 2 and nearby areas."
                items={[
                    {
                        q: "How far is the clinic from Electronic City Phase 1?",
                        a: "About 10–12 km — a ~20-minute drive south on Hosur Road (NH 44) past Chandapura junction into Attibele. The hospital is on Sarjapura–Attibele Road, opposite Canara Bank, with on-site parking. You're driving against the city-bound traffic, so timings are predictable.",
                    },
                    {
                        q: "Why travel to Attibele instead of a big city hospital?",
                        a: "For most orthopedic problems you don't need a corporate hospital — you need an experienced specialist, imaging, and honest advice. The Attibele clinic offers a fellowship-trained specialist, in-house X-ray, and procedure facilities at multispeciality-hospital pricing, 20 minutes away instead of an hour-plus into the city.",
                    },
                    {
                        q: "Can I get an appointment on a Saturday?",
                        a: "Yes — the OPD runs Monday to Saturday, 10:00 AM – 6:00 PM, and Saturdays are popular with working professionals from Electronic City. Same-day slots are available most days; booking by phone or WhatsApp shortens the wait.",
                    },
                    {
                        q: "Do you treat desk-related back and neck pain?",
                        a: "Yes — it's one of the most common complaints from the IT corridor. Treatment starts conservatively: assessment, posture and workstation advice, targeted physiotherapy, and medication where needed. Injections or surgery are considered only for specific indications like persistent nerve compression.",
                    },
                    {
                        q: "Is corporate health insurance accepted?",
                        a: "Health insurance is accepted for procedures, and the hospital team assists with pre-authorisation paperwork. Bring your policy or TPA details, and call ahead to confirm coverage specifics for your insurer.",
                    },
                    {
                        q: "I work in Electronic City but live near HSR Layout — which clinic should I choose?",
                        a: "Whichever drive is easier. Dr. Nitin also consults at Health Nest Hospital in HSR Layout Sector 2. Many patients book Attibele for weekday visits near work and HSR for weekend follow-ups — the medical record continuity stays with the same doctor.",
                    },
                ]}
            />

            <FinalCtaStrip
                clinic={CLINIC}
                title="Don't Let Pain Wait for a Free Weekend."
                subtitle="20 minutes from Electronic City — book your slot today."
            />

            <MobileStickyCTA clinic={CLINIC} />
            <LandingFooter clinic={CLINIC} />
        </main>
    );
}
