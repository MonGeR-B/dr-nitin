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
    Crosshair,
    Snowflake,
    Dumbbell,
    Moon,
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
    title: { absolute: "Shoulder Pain Specialist in Bangalore | Dr. Nitin N Sunku" },
    description:
        "Frozen shoulder, rotator cuff tears, sports injuries — precise diagnosis & ultrasound-guided treatment in Bangalore. Attibele & HSR Layout clinics. Book today.",
    alternates: { canonical: `${siteOrigin}/shoulder-pain-bangalore` },
    keywords: [
        "shoulder pain specialist Bangalore",
        "shoulder pain doctor Bangalore",
        "frozen shoulder treatment Bangalore",
        "rotator cuff specialist Bangalore",
        "shoulder pain treatment without surgery",
        "shoulder injection Bangalore",
        "shoulder dislocation doctor Bangalore",
        "shoulder arthroscopy Bangalore",
        "night shoulder pain doctor",
        "shoulder pain doctor HSR Layout",
        "shoulder specialist Attibele",
    ],
    openGraph: {
        title: "Shoulder Pain Specialist in Bangalore — Dr. Nitin N Sunku",
        description:
            "Frozen shoulder, rotator cuff tears and sports injuries treated with precise diagnosis and ultrasound-guided, conservative-first care. Attibele & HSR Layout.",
        url: `${siteOrigin}/shoulder-pain-bangalore`,
        type: "website",
    },
    robots: { index: true, follow: true },
};

const CLINIC = PRIMARY_CLINIC;
const PHONE = CLINIC.phone;
const PHONE_DIGITS = CLINIC.phoneDigits;
const WHATSAPP_MESSAGE =
    "Hi Dr. Nitin, I have shoulder pain and would like to book an appointment.";

const conditions = [
    { title: "Frozen Shoulder (Adhesive Capsulitis)", Icon: Snowflake },
    { title: "Rotator Cuff Tears & Tendinitis", Icon: ShieldCheck },
    { title: "Shoulder Impingement", Icon: Activity },
    { title: "Dislocation & Instability", Icon: Users },
    { title: "Sports & Gym Overuse Injuries", Icon: Dumbbell },
    { title: "Shoulder Arthritis", Icon: Hospital },
    { title: "Night Pain & Stiffness", Icon: Moon },
    { title: "Post-Injury Weakness", Icon: Heart },
];

const treatmentLadder = [
    {
        step: "1",
        title: "Accurate Diagnosis First",
        description:
            "Frozen shoulder, a cuff tear and impingement can feel identical to the patient but need completely different treatment. Clinical examination plus imaging pins down which one you actually have — before anything is injected or operated on.",
    },
    {
        step: "2",
        title: "Conservative Care & Guided Injections",
        description:
            "Most shoulders improve with structured physiotherapy, activity modification and medication. When an injection is indicated, it's placed under ultrasound guidance — into the exact structure that's inflamed, not blindly into the general area.",
    },
    {
        step: "3",
        title: "Arthroscopy Only When Genuinely Needed",
        description:
            "Full-thickness cuff tears, recurrent dislocations and cases that fail conservative care may need keyhole (arthroscopic) surgery — explained honestly, with recovery timelines upfront.",
    },
];

const sellingPoints = [
    {
        Icon: Crosshair,
        title: "Ultrasound-Guided Precision",
        description:
            "Shoulder injections placed under live ultrasound guidance reach the exact target — subacromial space, biceps tendon sheath or joint — which matters enormously for results.",
    },
    {
        Icon: Award,
        title: "Fellowship-Trained Specialist",
        description:
            "Dr. Nitin is a fellowship-trained orthopedic & sports medicine specialist with 10+ years of experience treating shoulder, joint and sports conditions.",
    },
    {
        Icon: Users,
        title: "Official Bengaluru FC Team Doctor",
        description:
            "Professional footballers' shoulders and yours get the same standard of care — from a badminton smash injury to a gym bench-press strain.",
    },
    {
        Icon: Heart,
        title: "Conservative-First Philosophy",
        description:
            "Physiotherapy, activity modification and targeted injections are exhausted before surgery is discussed. Most shoulder problems never need an operation.",
    },
    {
        Icon: Stethoscope,
        title: "Frozen Shoulder, Managed Properly",
        description:
            "Frozen shoulder has distinct phases, and treatment that ignores them fails. Stage-appropriate care — from hydrodilatation-style injections to graded mobilisation — shortens a condition that otherwise drags on for months.",
    },
    {
        Icon: Hospital,
        title: "Two Bengaluru Locations",
        description:
            "Consult at Raghava Multispeciality Hospital, Attibele, or Health Nest Hospital, HSR Layout — whichever is the easier drive for you.",
    },
];

export default function ShoulderPainBangalorePage() {
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
                                    Precise, Ultrasound-Guided Shoulder Care
                                </span>

                                <h1 className="text-[2.5rem] sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-gray-900 leading-[1.05] tracking-tight mb-4 break-words">
                                    <span className="block">Shoulder Pain Specialist{" "}</span>
                                    <span className="block bg-gradient-to-r from-blue-700 via-blue-600 to-indigo-600 bg-clip-text text-transparent pb-1">
                                        in Bangalore
                                    </span>
                                </h1>

                                <p className="text-lg sm:text-xl md:text-2xl text-blue-800 font-semibold mb-4">
                                    Dr. Nitin N Sunku — Orthopedic &amp; Sports Medicine Specialist
                                </p>
                                <p className="text-base sm:text-lg text-gray-600 mb-6 max-w-xl leading-relaxed">
                                    Can&apos;t sleep on that side? Can&apos;t reach behind your back? Frozen shoulder, rotator cuff tears and sports injuries need an exact diagnosis — because each one is treated differently. Get the right answer first, then the right treatment.
                                </p>

                                <div className="flex flex-wrap gap-2 mb-7">
                                    <span className="inline-flex items-center gap-1.5 bg-white/90 backdrop-blur border border-gray-200 rounded-full px-3 py-1.5 text-xs sm:text-sm font-medium text-gray-800 shadow-sm">
                                        <CheckCircle className="w-3.5 h-3.5 text-emerald-600" />
                                        Fellowship-Trained
                                    </span>
                                    <span className="inline-flex items-center gap-1.5 bg-white/90 backdrop-blur border border-gray-200 rounded-full px-3 py-1.5 text-xs sm:text-sm font-medium text-gray-800 shadow-sm">
                                        <CheckCircle className="w-3.5 h-3.5 text-emerald-600" />
                                        Surgery Only If Needed
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
                                        metadata={{ cta_type: "form_scroll", condition: "shoulder-pain" }}
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
                            <HeroImage alt="Dr. Nitin N Sunku — Shoulder Pain Specialist in Bangalore" />
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
                                — Shoulder Problems We Treat —
                            </span>
                            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-3 break-words">
                                Every Kind of{" "}
                                <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                                    Shoulder Pain
                                </span>
                            </h2>
                            <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
                                From a shoulder that won&apos;t lift to one that won&apos;t stay in place.
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

            {/* ============= TREATMENT LADDER (unique content) ============= */}
            <section className="bg-white py-14 md:py-20 overflow-hidden">
                <div className="container mx-auto px-4 max-w-7xl">
                    <FadeIn>
                        <div className="text-center mb-12">
                            <span className="inline-block text-xs font-bold text-blue-700 uppercase tracking-widest mb-3">
                                — How Treatment Works —
                            </span>
                            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-3 break-words">
                                Diagnosis Before{" "}
                                <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                                    Treatment
                                </span>
                            </h2>
                            <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
                                The reason so many shoulders &ldquo;don&apos;t get better&rdquo; is that the wrong condition was treated.
                            </p>
                        </div>
                    </FadeIn>

                    <div className="grid md:grid-cols-3 gap-4 md:gap-6 max-w-5xl mx-auto">
                        {treatmentLadder.map(({ step, title, description }, idx) => (
                            <FadeIn key={step} delay={idx * 0.08}>
                                <div className="relative bg-white rounded-2xl p-6 md:p-7 border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 h-full">
                                    <span className="absolute -top-4 left-6 w-9 h-9 rounded-full bg-gradient-to-br from-blue-600 to-indigo-600 text-white font-bold flex items-center justify-center shadow-md">
                                        {step}
                                    </span>
                                    <h3 className="font-bold text-gray-900 text-base md:text-lg mt-3 mb-2 leading-tight">{title}</h3>
                                    <p className="text-sm text-gray-600 leading-relaxed">{description}</p>
                                </div>
                            </FadeIn>
                        ))}
                    </div>

                    <FadeIn delay={0.2}>
                        <div className="max-w-4xl mx-auto mt-10 bg-gradient-to-br from-blue-50 via-white to-indigo-50 rounded-2xl p-6 md:p-8 border border-blue-100 shadow-sm">
                            <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                                Want to read more first? See how{" "}
                                <Link href="/blog/shoulder-pain-injections-precision-care" className="text-blue-700 font-semibold hover:text-blue-900 underline underline-offset-2">
                                    precision shoulder injections
                                </Link>{" "}
                                work, what to do about a{" "}
                                <Link href="/blog/rotator-cuff-injury-heres-how-to-treat-shoulder-pain-effectively" className="text-blue-700 font-semibold hover:text-blue-900 underline underline-offset-2">
                                    rotator cuff injury
                                </Link>
                                , or explore the full{" "}
                                <Link href="/services/shoulder-care" className="text-blue-700 font-semibold hover:text-blue-900 underline underline-offset-2">
                                    shoulder care service
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
                                Shoulder Expertise That{" "}
                                <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                                    Athletes Trust
                                </span>
                            </h2>
                            <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
                                Six reasons patients across Bengaluru choose this practice for shoulder pain.
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

            {/* ============= NIGHT PAIN SECTION (unique content) ============= */}
            <section className="py-14 md:py-20 bg-gradient-to-br from-blue-700 via-blue-800 to-indigo-800 text-white relative overflow-hidden">
                <div aria-hidden className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(circle at 2px 2px, white 1px, transparent 0)", backgroundSize: "32px 32px" }}></div>
                <div className="container mx-auto px-4 max-w-6xl relative z-10">
                    <FadeIn>
                        <div className="grid lg:grid-cols-5 gap-10 items-center">
                            <div className="lg:col-span-3">
                                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-5 leading-tight">
                                    Shoulder Pain That Wakes You at Night?
                                </h2>
                                <p className="text-base md:text-lg text-blue-100 leading-relaxed mb-5">
                                    Night pain is the classic signature of rotator cuff problems and frozen shoulder — and it&apos;s usually the point where patients stop hoping it will settle on its own. It&apos;s also a useful clinical clue. Waiting months with a &ldquo;let&apos;s see&rdquo; approach lets a treatable tendinitis stiffen into a frozen shoulder, and lets a small cuff tear grow. If your shoulder has been waking you for more than a couple of weeks, that&apos;s the right time to have it examined — not after another three months of bad sleep.
                                </p>
                                <div className="inline-flex items-center gap-2 bg-white/15 backdrop-blur border border-white/20 rounded-full px-5 py-2.5 text-sm font-semibold">
                                    <Moon className="w-4 h-4" />
                                    Night pain + stiffness = time to get examined
                                </div>
                            </div>

                            <div className="lg:col-span-2">
                                <div className="bg-white/10 backdrop-blur border border-white/20 rounded-3xl p-7 md:p-8 text-center">
                                    <Crosshair className="w-12 h-12 mx-auto mb-4 text-blue-200" />
                                    <p className="text-2xl md:text-3xl font-bold leading-tight mb-2">Guided, Not Guessed</p>
                                    <p className="text-base text-blue-100 leading-relaxed">Injections placed under live ultrasound reach the exact inflamed structure.</p>
                                    <div className="mt-6 pt-6 border-t border-white/20 grid grid-cols-3 gap-3 text-center">
                                        <div>
                                            <p className="text-2xl font-bold">Exam</p>
                                            <p className="text-[11px] text-blue-200 uppercase tracking-wider mt-1">First</p>
                                        </div>
                                        <div>
                                            <p className="text-2xl font-bold">Image</p>
                                            <p className="text-[11px] text-blue-200 uppercase tracking-wider mt-1">Confirm</p>
                                        </div>
                                        <div>
                                            <p className="text-2xl font-bold">Treat</p>
                                            <p className="text-[11px] text-blue-200 uppercase tracking-wider mt-1">Precisely</p>
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
                                    Get Your Shoulder Properly Diagnosed
                                </h2>
                                <p className="text-base md:text-lg text-blue-100 max-w-md mx-auto">
                                    The team will call you back within hours to confirm your slot at Attibele or HSR Layout.
                                </p>
                            </div>
                        </FadeIn>

                        <FadeIn delay={0.1}>
                            <div className="bg-white rounded-3xl shadow-2xl p-6 md:p-10 border border-white/50">
                                <BookingForm source="ads-shoulder-pain" />
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
                subheading="Shoulder assessment, guided injections and arthroscopic surgery — at whichever clinic suits you."
            />

            <LandingArticle slug="shoulder-pain-bangalore" />

            <LandingFaq
                pageName="Shoulder Pain Specialist in Bangalore"
                pagePath="/shoulder-pain-bangalore"
                aboutCondition="Shoulder pain"
                subheading="Straight answers about shoulder pain diagnosis and treatment with Dr. Nitin N Sunku."
                items={[
                    {
                        q: "How do I know if my shoulder pain is frozen shoulder or a rotator cuff problem?",
                        a: "You usually can't tell from symptoms alone — both cause pain and night discomfort. The key difference is stiffness: frozen shoulder restricts movement in all directions even when someone else moves your arm, while cuff problems mainly hurt with specific movements. A clinical examination distinguishes them, sometimes with imaging to confirm — and the treatments are completely different.",
                    },
                    {
                        q: "Can shoulder pain be treated without surgery?",
                        a: "Most of the time, yes. The majority of shoulder problems — impingement, tendinitis, early frozen shoulder, partial cuff tears — respond to structured physiotherapy, activity modification and, where indicated, ultrasound-guided injections. Surgery is reserved for full-thickness tears, recurrent dislocations and cases that genuinely fail conservative care.",
                    },
                    {
                        q: "What is an ultrasound-guided shoulder injection and why does it matter?",
                        a: "The injection is placed while watching the needle live on an ultrasound screen, so the medication reaches the exact inflamed structure — the subacromial space, biceps tendon sheath or joint. Blind injections miss their target in a significant share of cases, which is a common reason 'the injection didn't work'.",
                    },
                    {
                        q: "How long does frozen shoulder take to recover?",
                        a: "Untreated, frozen shoulder can grind on for 12–24 months through its freezing, frozen and thawing phases. Stage-appropriate treatment — injections in the painful phase, progressive mobilisation in the stiff phase — can meaningfully shorten that course. The earlier it's diagnosed, the better.",
                    },
                    {
                        q: "How much does a shoulder consultation cost?",
                        a: "Typically ₹500–₹1,000, including clinical examination and a written treatment plan. Health insurance is accepted for procedures such as arthroscopy, with pre-authorisation support from the hospital team.",
                    },
                    {
                        q: "Where can I consult Dr. Nitin for shoulder pain?",
                        a: "At Raghava Multispeciality Hospital, Attibele (Mon–Sat, 10 AM–6 PM) or Health Nest Hospital, HSR Layout Sector 2 (Mon–Sat, 10 AM–8 PM). Call +91-9980031006 or book via WhatsApp or the form on this page.",
                    },
                ]}
            />

            <FinalCtaStrip
                clinic={CLINIC}
                title="Stop Sleeping on One Side."
                subtitle="Get your shoulder properly diagnosed — book today."
            />

            <MobileStickyCTA clinic={CLINIC} />
            <LandingFooter clinic={CLINIC} currentPath="/shoulder-pain-bangalore" />
        </main>
    );
}
