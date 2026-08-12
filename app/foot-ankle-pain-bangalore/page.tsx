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
    Dumbbell,
    Footprints,
    AlertTriangle,
    Repeat,
    Timer,
    Baby,
    Scan,
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

export const metadata: Metadata = {
    // `absolute` opts out of the root layout's "%s | Dr. Nitin N Sunku"
    // template — without it the live <title> renders the brand twice.
    title: { absolute: "Foot & Ankle Pain Doctor in Bangalore | Dr. Nitin N Sunku" },
    description:
        "Heel pain, plantar fasciitis, ankle sprains and Achilles pain — diagnosed properly and treated conservatively first. Attibele & HSR Layout, Bengaluru.",
    alternates: { canonical: `${siteOrigin}/foot-ankle-pain-bangalore` },
    keywords: [
        "foot and ankle specialist Bangalore",
        "ankle pain doctor Bangalore",
        "heel pain treatment Bangalore",
        "plantar fasciitis treatment Bangalore",
        "Achilles tendon pain doctor Bangalore",
        "ankle sprain treatment Bangalore",
        "ankle ligament injury specialist",
        "flat foot treatment Bangalore",
        "foot doctor Attibele",
        "foot and ankle doctor HSR Layout",
        "morning heel pain doctor Bangalore",
    ],
    openGraph: {
        title: "Foot, Heel & Ankle Pain Doctor in Bangalore — Dr. Nitin N Sunku",
        description:
            "Plantar fasciitis, Achilles tendinopathy, ankle sprains and chronic ankle instability assessed and treated conservatively first. Attibele & HSR Layout.",
        url: `${siteOrigin}/foot-ankle-pain-bangalore`,
        type: "website",
    },
    robots: { index: true, follow: true },
};

const CLINIC = PRIMARY_CLINIC;
const PHONE = CLINIC.phone;
const PHONE_DIGITS = CLINIC.phoneDigits;
const WHATSAPP_MESSAGE =
    "Hi Dr. Nitin, I have foot / heel / ankle pain and would like to book an appointment.";

const conditions = [
    { title: "Plantar Fasciitis & Morning Heel Pain", Icon: Footprints },
    { title: "Achilles Tendon Pain & Tendinopathy", Icon: Activity },
    { title: "Ankle Sprains & Ligament Injuries", Icon: ShieldCheck },
    { title: "Ankle That Keeps Giving Way", Icon: Repeat },
    { title: "Metatarsal & Foot Stress Fractures", Icon: Hospital },
    { title: "Flat Feet & Arch Pain", Icon: Users },
    { title: "Big-Toe Joint Pain & Bunion Pain", Icon: Stethoscope },
    { title: "Heel Pain in Children & Teenagers", Icon: Baby },
];

const triage = [
    {
        symptom: "Sharp heel pain with the first few steps in the morning, easing after you walk about",
        cause: "Plantar fasciitis \u2014 by far the most common cause of under-heel pain in adults",
    },
    {
        symptom: "Pain, thickening or stiffness behind the heel, or a few centimetres above it",
        cause: "Achilles tendinopathy, or insertional Achilles tendinopathy where the tendon meets the heel bone",
    },
    {
        symptom: "The ankle rolls or gives way repeatedly, especially on uneven ground",
        cause: "Chronic ankle instability \u2014 usually after a sprain that was rested but never properly rehabilitated",
    },
    {
        symptom: "Pain and swelling over the outer ankle after a twist",
        cause: "Lateral ligament sprain, graded by how far the ligament has been stretched or torn",
    },
    {
        symptom: "Pinpoint tenderness on the top of the foot in a runner or a new gym-goer",
        cause: "Metatarsal stress fracture, or a stress reaction that has not yet cracked",
    },
    {
        symptom: "Burning, tingling, or a \u201cpebble in the shoe\u201d feeling between the toes",
        cause: "Morton\u2019s neuroma \u2014 an irritated nerve between the metatarsal heads",
    },
    {
        symptom: "Pain and stiffness in the big-toe joint, worse when pushing off",
        cause: "Hallux rigidus (big-toe arthritis). A hot, red, acutely swollen big toe raises gout as a differential",
    },
    {
        symptom: "Heel pain in an active 9\u201314 year old, worse after sport",
        cause: "Sever\u2019s disease \u2014 irritation of the growth plate at the back of the heel, which settles with load management",
    },
];

const treatmentLadder = [
    {
        step: "1",
        title: "Name the Problem First",
        description:
            "Heel pain is not one diagnosis. Plantar fasciitis, insertional Achilles tendinopathy, a heel stress fracture and a nerve entrapment all hurt in roughly the same region \u2014 and each needs a different plan. A structured examination, with imaging only where it changes the decision, sorts this out.",
    },
    {
        step: "2",
        title: "Load, Footwear & Rehab",
        description:
            "Most foot and ankle problems settle with a proper loading programme \u2014 calf and plantar fascia stretching, graded strengthening, balance and proprioception work, sensible footwear, and a temporary reduction in whatever provoked it.",
    },
    {
        step: "3",
        title: "Injections or Surgery Only If Justified",
        description:
            "Where a guided injection is genuinely indicated, it is placed precisely rather than blindly. Surgery \u2014 ligament reconstruction, ankle arthroscopy or Achilles repair \u2014 is reserved for the minority of cases where structure, not just symptoms, is the problem.",
    },
];

const sellingPoints = [
    {
        Icon: Crosshair,
        title: "The Right Diagnosis, Not a Label",
        description:
            "\u201cHeel spur\u201d and \u201cjust a sprain\u201d are the two most over-used labels in foot care. A careful history and examination usually reveal which tissue is actually at fault \u2014 and that is what decides treatment.",
    },
    {
        Icon: Award,
        title: "Orthopedic, Arthroscopy & Sports Medicine",
        description:
            "Dr. Nitin N Sunku is a fellowship-trained orthopedic and sports medicine surgeon with a background in arthroscopic surgery. Foot and ankle problems are managed within that scope, and referred on where a case genuinely needs a different subspecialty.",
    },
    {
        Icon: Dumbbell,
        title: "Rehab That Is Actually Prescribed",
        description:
            "Most ankles keep failing because nobody ever gave the patient a programme. You leave with a written, staged plan \u2014 what to do, how many, how often, and what should be getting easier by when.",
    },
    {
        Icon: Heart,
        title: "Conservative-First Philosophy",
        description:
            "Load management, footwear, stretching and structured strengthening are exhausted before anything invasive is discussed. Most heel and ankle pain never needs an operation.",
    },
    {
        Icon: Timer,
        title: "Honest Timelines",
        description:
            "Plantar fasciitis and tendinopathy are slow conditions. You are given the realistic range up front rather than promised a quick fix \u2014 because knowing the timeline is what keeps people on the programme.",
    },
    {
        Icon: Hospital,
        title: "Two Bengaluru Locations",
        description:
            "Consult at Raghava Multispeciality Hospital, Attibele, or Health Nest Hospital, HSR Layout Sector 2 \u2014 whichever is the easier drive for you.",
    },
];

export default function FootAnklePainBangalorePage() {
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
                                    Heel, Foot &amp; Ankle Care — Conservative First
                                </span>

                                <h1 className="text-[2.5rem] sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-gray-900 leading-[1.05] tracking-tight mb-4 break-words">
                                    <span className="block">Foot, Heel &amp; Ankle Pain{" "}</span>
                                    <span className="block bg-gradient-to-r from-blue-700 via-blue-600 to-indigo-600 bg-clip-text text-transparent pb-1">
                                        Doctor in Bangalore
                                    </span>
                                </h1>

                                <p className="text-lg sm:text-xl md:text-2xl text-blue-800 font-semibold mb-4">
                                    Dr. Nitin N Sunku — Orthopedic &amp; Sports Medicine Specialist
                                </p>
                                <p className="text-base sm:text-lg text-gray-600 mb-6 max-w-xl leading-relaxed">
                                    That stabbing heel pain with your first steps out of bed. The ankle that has rolled three times since the original sprain. The Achilles that aches every morning. These are different problems with different fixes — and almost all of them are treated without surgery once they are correctly identified.
                                </p>

                                <div className="flex flex-wrap gap-2 mb-7">
                                    <span className="inline-flex items-center gap-1.5 bg-white/90 backdrop-blur border border-gray-200 rounded-full px-3 py-1.5 text-xs sm:text-sm font-medium text-gray-800 shadow-sm">
                                        <CheckCircle className="w-3.5 h-3.5 text-emerald-600" />
                                        Plantar Fasciitis &amp; Heel Pain
                                    </span>
                                    <span className="inline-flex items-center gap-1.5 bg-white/90 backdrop-blur border border-gray-200 rounded-full px-3 py-1.5 text-xs sm:text-sm font-medium text-gray-800 shadow-sm">
                                        <CheckCircle className="w-3.5 h-3.5 text-emerald-600" />
                                        Surgery Only If Needed
                                    </span>
                                    <span className="inline-flex items-center gap-1.5 bg-white/90 backdrop-blur border border-gray-200 rounded-full px-3 py-1.5 text-xs sm:text-sm font-medium text-gray-800 shadow-sm">
                                        <Star className="w-3.5 h-3.5 text-yellow-500 fill-yellow-500" />
                                        Attibele &amp; HSR Layout
                                    </span>
                                </div>

                                <div className="flex flex-col sm:flex-row gap-3 mb-6">
                                    <TrackedButton
                                        buttonName="Book Appointment - Hero"
                                        buttonLocation="Hero"
                                        href="#booking-form"
                                        className="group inline-flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold px-6 py-4 rounded-xl shadow-lg shadow-blue-500/30 hover:shadow-xl hover:shadow-blue-500/40 transition-all transform hover:-translate-y-0.5"
                                        metadata={{ cta_type: "form_scroll", condition: "foot-ankle-pain" }}
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
                            <HeroImage alt="Dr. Nitin N Sunku — Foot, Heel and Ankle Pain Doctor in Bangalore" />
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
                                — Foot &amp; Ankle Problems We Treat —
                            </span>
                            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-3 break-words">
                                From the Heel to the{" "}
                                <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                                    Toes
                                </span>
                            </h2>
                            <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
                                Your feet take your entire body weight thousands of times a day. Small problems there do not stay small.
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

            {/* ============= SYMPTOM TRIAGE TABLE (unique content) ============= */}
            <section className="bg-white py-14 md:py-20 overflow-hidden">
                <div className="container mx-auto px-4 max-w-5xl">
                    <FadeIn>
                        <div className="text-center mb-10 md:mb-12">
                            <span className="inline-block text-xs font-bold text-blue-700 uppercase tracking-widest mb-3">
                                — Work Out What You Have —
                            </span>
                            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-3 break-words">
                                What Your Symptom Usually{" "}
                                <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                                    Points To
                                </span>
                            </h2>
                            <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
                                Where the pain is, and when it is worst, narrows the diagnosis more than any scan does. This is a guide, not a substitute for examination.
                            </p>
                        </div>
                    </FadeIn>

                    <FadeIn delay={0.1}>
                        <div className="overflow-x-auto rounded-2xl border border-gray-200 shadow-sm">
                            <table className="w-full text-left border-collapse">
                                <thead>
                                    <tr className="bg-blue-50">
                                        <th className="px-4 py-3 md:px-6 md:py-4 text-xs md:text-sm font-bold text-blue-900 uppercase tracking-wide w-1/2">
                                            What you feel
                                        </th>
                                        <th className="px-4 py-3 md:px-6 md:py-4 text-xs md:text-sm font-bold text-blue-900 uppercase tracking-wide w-1/2">
                                            What it commonly points to
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {triage.map(({ symptom, cause }, idx) => (
                                        <tr
                                            key={symptom}
                                            className={idx % 2 === 1 ? "bg-gray-50/70" : "bg-white"}
                                        >
                                            <td className="px-4 py-3 md:px-6 md:py-4 text-sm md:text-base font-semibold text-gray-900 align-top border-t border-gray-100">
                                                {symptom}
                                            </td>
                                            <td className="px-4 py-3 md:px-6 md:py-4 text-sm md:text-base text-gray-600 align-top border-t border-gray-100 leading-relaxed">
                                                {cause}
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </FadeIn>

                    <FadeIn delay={0.2}>
                        <div className="max-w-4xl mx-auto mt-10 bg-gradient-to-br from-blue-50 via-white to-indigo-50 rounded-2xl p-6 md:p-8 border border-blue-100 shadow-sm">
                            <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                                Want to read further first? There are detailed guides on{" "}
                                <Link href="/blog/ankle-sprain-treatment" className="text-blue-700 font-semibold hover:text-blue-900 underline underline-offset-2">
                                    how an ankle sprain should actually be treated
                                </Link>
                                , the{" "}
                                <Link href="/blog/phases-of-achilles-tendinopathy" className="text-blue-700 font-semibold hover:text-blue-900 underline underline-offset-2">
                                    phases of Achilles tendinopathy
                                </Link>{" "}
                                and what each stage needs, and{" "}
                                <Link href="/blog/stress-fracture-treatment-symptoms-causes-recovery" className="text-blue-700 font-semibold hover:text-blue-900 underline underline-offset-2">
                                    recognising a stress fracture in the foot or shin
                                </Link>
                                . Runners with pain along the inner shin rather than the foot should read about{" "}
                                <Link href="/blog/why-do-i-get-shin-splints-after-running" className="text-blue-700 font-semibold hover:text-blue-900 underline underline-offset-2">
                                    shin splints after running
                                </Link>
                                .
                            </p>
                        </div>
                    </FadeIn>
                </div>
            </section>

            {/* ============= TREATMENT LADDER ============= */}
            <section className="bg-gradient-to-b from-white to-blue-50/60 py-14 md:py-20 overflow-hidden">
                <div className="container mx-auto px-4 max-w-7xl">
                    <FadeIn>
                        <div className="text-center mb-12">
                            <span className="inline-block text-xs font-bold text-blue-700 uppercase tracking-widest mb-3">
                                — How Treatment Works —
                            </span>
                            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-3 break-words">
                                Diagnosis, Then{" "}
                                <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                                    Load
                                </span>
                                , Then Everything Else
                            </h2>
                            <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
                                Feet respond to loading programmes far more reliably than to rest alone.
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
                                Feet Get Treated{" "}
                                <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                                    Properly Here
                                </span>
                            </h2>
                            <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
                                Six reasons patients across Bengaluru bring their heel and ankle problems to this practice.
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

            {/* ============= UNDER-TREATED ANKLE SPRAINS (unique content) ============= */}
            <section className="py-14 md:py-20 bg-gradient-to-br from-blue-700 via-blue-800 to-indigo-800 text-white relative overflow-hidden">
                <div aria-hidden className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(circle at 2px 2px, white 1px, transparent 0)", backgroundSize: "32px 32px" }}></div>
                <div className="container mx-auto px-4 max-w-6xl relative z-10">
                    <FadeIn>
                        <div className="grid lg:grid-cols-5 gap-10 items-center">
                            <div className="lg:col-span-3">
                                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-5 leading-tight">
                                    Why So Many Ankle Sprains Never Really Heal
                                </h2>
                                <p className="text-base md:text-lg text-blue-100 leading-relaxed mb-4">
                                    The standard story goes like this. You roll your ankle playing cricket or stepping off a kerb. It swells, it hurts, you rest it for a week or two, maybe you get an X-ray that shows no fracture, and the pain settles. Everyone treats that as the end of the matter.
                                </p>
                                <p className="text-base md:text-lg text-blue-100 leading-relaxed mb-4">
                                    It is not. Pain going away is not the same as the ankle recovering. A sprain damages the lateral ligaments and, just as importantly, the position sense in the joint — the reflex that tells your peroneal muscles to fire before your ankle rolls over. That reflex does not come back on its own. Unless you deliberately retrain balance and strengthen the peroneal muscles on the outside of the ankle, you go back to sport with a joint that is quietly slower to protect itself.
                                </p>
                                <p className="text-base md:text-lg text-blue-100 leading-relaxed mb-5">
                                    That is why the second sprain arrives, then the third, on ground that never used to bother you. Repeated sprains stretch the ligaments further and can damage the cartilage surface inside the joint — which is a far harder problem to fix than the original sprain ever was. Rehabilitating an ankle sprain properly is dull, takes about six weeks of consistent work, and is the single most under-done thing in foot and ankle care in India.
                                </p>
                                <div className="inline-flex items-center gap-2 bg-white/15 backdrop-blur border border-white/20 rounded-full px-5 py-2.5 text-sm font-semibold">
                                    <Repeat className="w-4 h-4" />
                                    Rolled it more than once? That is a rehab problem, not bad luck.
                                </div>
                            </div>

                            <div className="lg:col-span-2">
                                <div className="bg-white/10 backdrop-blur border border-white/20 rounded-3xl p-7 md:p-8 text-center">
                                    <ShieldCheck className="w-12 h-12 mx-auto mb-4 text-blue-200" />
                                    <p className="text-2xl md:text-3xl font-bold leading-tight mb-2">Rehab, Not Just Rest</p>
                                    <p className="text-base text-blue-100 leading-relaxed">
                                        Strength, balance and proprioception — the three things a rested ankle never gets back by itself.
                                    </p>
                                    <div className="mt-6 pt-6 border-t border-white/20 grid grid-cols-3 gap-3 text-center">
                                        <div>
                                            <p className="text-2xl font-bold">Calm</p>
                                            <p className="text-[11px] text-blue-200 uppercase tracking-wider mt-1">Swelling</p>
                                        </div>
                                        <div>
                                            <p className="text-2xl font-bold">Load</p>
                                            <p className="text-[11px] text-blue-200 uppercase tracking-wider mt-1">Progressively</p>
                                        </div>
                                        <div>
                                            <p className="text-2xl font-bold">Balance</p>
                                            <p className="text-[11px] text-blue-200 uppercase tracking-wider mt-1">Retrain</p>
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
                                    Get Your Heel or Ankle Properly Assessed
                                </h2>
                                <p className="text-base md:text-lg text-blue-100 max-w-md mx-auto">
                                    The team will call you back within hours to confirm your slot at Attibele or HSR Layout.
                                </p>
                            </div>
                        </FadeIn>

                        <FadeIn delay={0.1}>
                            <div className="bg-white rounded-3xl shadow-2xl p-6 md:p-10 border border-white/50">
                                <BookingForm source="foot-ankle-pain-bangalore" />
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
                subheading="Heel and ankle assessment, rehabilitation planning and, where needed, surgical care — at whichever clinic suits you."
            />

            {/* ============= LONG-FORM EDUCATIONAL SECTION (unique to this page) ============= */}
            <section className="bg-gradient-to-br from-gray-50 via-blue-50/30 to-white py-14 md:py-20 overflow-hidden">
                <div className="container mx-auto px-4 max-w-3xl">
                    <FadeIn>
                        <div className="mb-8">
                            <span className="inline-block text-xs font-bold text-blue-700 uppercase tracking-widest mb-3">
                                — Heel, Foot &amp; Ankle Pain Explained —
                            </span>
                            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-900 leading-tight break-words">
                                Plantar Fasciitis, Achilles Pain and Ankle Injuries: What Actually Works
                            </h2>
                        </div>
                    </FadeIn>

                    <FadeIn delay={0.1}>
                        <div className="space-y-4 text-base md:text-lg text-gray-700 leading-relaxed">
                            <h3 className="text-lg md:text-xl font-bold text-gray-900 pt-2 flex items-center gap-2">
                                <Footprints className="w-5 h-5 text-blue-600 flex-shrink-0" />
                                Why the first steps in the morning hurt most
                            </h3>
                            <p>
                                If your heel pain is at its sharpest for the first ten or twenty steps after you get out of bed, and then eases as you move around, that pattern is almost diagnostic of plantar fasciitis. The plantar fascia is a thick band of tissue running from the heel bone to the base of the toes, holding up the arch. Overnight, the foot rests in a pointed position and the fascia shortens and settles. Your first step stretches it abruptly, which is what produces that stabbing pain under the heel.
                            </p>
                            <p>
                                It is an overload problem, not an infection or an inflammation you can simply switch off with tablets. The usual triggers are a sudden increase in walking or running, long hours standing on hard floors, weight gain, very flat or very unsupportive footwear, and — very commonly in our patients — tight calf muscles. The heel spur that shows up on the X-ray is usually a bystander, not the cause. Plenty of people with heel spurs have no pain at all, and plenty of people with severe plantar fasciitis have no spur.
                            </p>

                            <h3 className="text-lg md:text-xl font-bold text-gray-900 pt-4">
                                What genuinely helps plantar fasciitis
                            </h3>
                            <p>
                                The measures with the most consistent support are unglamorous and they all take weeks, not days:
                            </p>
                            <ul className="space-y-2.5 pl-1">
                                {[
                                    "Calf stretching and a specific plantar fascia stretch, done daily — usually the single highest-yield thing you can do.",
                                    "Load management: temporarily reducing the walking, running or standing volume that provoked it, rather than stopping activity altogether.",
                                    "Footwear with a supportive heel and some cushioning, plus a heel cup or an off-the-shelf arch support. Avoid walking barefoot on hard floors while it is settling.",
                                    "Progressive calf and foot strengthening once the acute pain is under control, so the tissue tolerates load again.",
                                    "A night splint, for people whose pain is dominated by that first-step-in-the-morning symptom.",
                                ].map((item) => (
                                    <li key={item} className="flex gap-3">
                                        <span aria-hidden className="mt-2.5 w-1.5 h-1.5 rounded-full bg-blue-500 flex-shrink-0" />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                            <p>
                                The evidence is weaker, or simply thin, for several popular options — custom-made orthotics over well-chosen off-the-shelf ones, most passive machine-based physiotherapy, and long courses of anti-inflammatory tablets. None of these are wrong, but they should not replace the loading programme, and they are not worth large sums of money as a first move.
                            </p>
                            <p>
                                A corticosteroid injection is considered only when pain is severe, has not responded to a genuine trial of the above, and is stopping you functioning. It tends to give useful short-term relief rather than a lasting fix, and it carries a small risk of fat-pad thinning or fascia rupture, which is why it is not offered casually or repeatedly. When it is used, placing it under{" "}
                                <Link href="/treatments/ultrasound-guided-orthopedic-injections" className="text-blue-700 font-semibold hover:text-blue-900 underline underline-offset-2">
                                    ultrasound guidance
                                </Link>{" "}
                                means the medication reaches the intended target rather than the surrounding fat pad.
                            </p>
                            <p>
                                The honest natural history matters here, because most people are never told it: plantar fasciitis typically takes somewhere between six and twelve months to fully settle, even when it is managed well. The good news is that the large majority do settle without any procedure at all. Knowing that timeline up front is what stops people abandoning a programme at week four and starting again from scratch with something new.
                            </p>

                            <h3 className="text-lg md:text-xl font-bold text-gray-900 pt-4">
                                Achilles tendinopathy: load the tendon, do not inject steroid into it
                            </h3>
                            <p>
                                Pain and thickening in the Achilles tendon — either in the mid-portion a few centimetres above the heel, or right where it inserts into the heel bone — is a degenerative overload problem rather than simple inflammation. That distinction changes the treatment completely. Rest alone tends to make the tendon weaker and the problem recurs the moment you return to activity.
                            </p>
                            <p>
                                First-line treatment is a structured eccentric or heavy slow resistance loading programme: controlled calf raises with a slow lowering phase, progressed over weeks. It is deliberately uncomfortable within limits, and it works because tendon adapts to load. Insertional Achilles problems need the programme modified — deep dorsiflexion tends to compress the tendon against the heel bone and flare it up. The{" "}
                                <Link href="/blog/phases-of-achilles-tendinopathy" className="text-blue-700 font-semibold hover:text-blue-900 underline underline-offset-2">
                                    phases of Achilles tendinopathy
                                </Link>{" "}
                                guide explains what is happening at each stage, and there is a broader overview of{" "}
                                <Link href="/blog/tendinopathy-treatment-non-surgical-care" className="text-blue-700 font-semibold hover:text-blue-900 underline underline-offset-2">
                                    non-surgical tendinopathy care
                                </Link>{" "}
                                if you want the principles.
                            </p>
                            <p>
                                Corticosteroid is not injected into the Achilles tendon itself. Steroid weakens tendon tissue, and the Achilles carries several times your body weight with every push-off — the consequence of a rupture is far worse than the pain being treated. Anyone offering you a quick steroid injection into an Achilles should be questioned about that.
                            </p>

                            <h3 className="text-lg md:text-xl font-bold text-gray-900 pt-4 flex items-center gap-2">
                                <Scan className="w-5 h-5 text-blue-600 flex-shrink-0" />
                                When a scan is actually needed
                            </h3>
                            <p>
                                Most acutely injured ankles do not need an X-ray. There is a well-established clinical rule used worldwide, and in plain language it comes down to this: an X-ray is warranted after a twisted ankle if you cannot take four steps on it, or if there is bone tenderness right on the tip or back edge of either ankle bone, or over specific spots in the midfoot. If none of those apply, a fracture is unlikely and an X-ray usually adds nothing.
                            </p>
                            <p>
                                Beyond that first decision, each scan answers a different question. X-ray shows bone — fractures, alignment, arthritis in the ankle or big-toe joint. Ultrasound is good for tendons and the plantar fascia, is quick, and lets the structure be examined while you move. MRI is reserved for the things the other two miss: cartilage damage inside the joint, ligament tears that are not settling, and early{" "}
                                <Link href="/blog/stress-fracture-treatment-symptoms-causes-recovery" className="text-blue-700 font-semibold hover:text-blue-900 underline underline-offset-2">
                                    stress fractures
                                </Link>
                                , which are frequently invisible on an X-ray for the first two or three weeks. If a clear fracture is confirmed, it is managed as a{" "}
                                <Link href="/fracture-treatment-attibele" className="text-blue-700 font-semibold hover:text-blue-900 underline underline-offset-2">
                                    fracture, with proper follow-up
                                </Link>
                                , rather than as a sprain.
                            </p>

                            <h3 className="text-lg md:text-xl font-bold text-gray-900 pt-4">
                                When surgery is genuinely on the table
                            </h3>
                            <p>
                                Surgery for the foot and ankle is the exception, and it is offered for structural problems rather than for pain on its own. The situations where it becomes a real conversation are: lateral ligament reconstruction for an ankle that keeps giving way despite a properly completed rehabilitation programme; ankle arthroscopy for bony or soft-tissue impingement, loose fragments, or an osteochondral lesion of the talus where the cartilage surface itself is damaged; and repair of a ruptured Achilles tendon, where surgical and non-surgical treatment are both legitimate and the choice depends on the individual, the timing and the sport they need to return to.
                            </p>
                            <p>
                                Athletes and active adults are worked up the same way as anyone else, with the return-to-sport plan built in from the start rather than added at the end — the same approach used across{" "}
                                <Link href="/sports-injury-doctor-bangalore" className="text-blue-700 font-semibold hover:text-blue-900 underline underline-offset-2">
                                    sports injury care
                                </Link>
                                . Where the underlying problem is joint wear rather than injury — a stiff, aching big-toe joint or a worn ankle after old trauma — the plan follows the same conservative-first logic used in{" "}
                                <Link href="/arthritis-treatment-bangalore" className="text-blue-700 font-semibold hover:text-blue-900 underline underline-offset-2">
                                    arthritis treatment
                                </Link>
                                .
                            </p>

                            <h3 className="text-lg md:text-xl font-bold text-gray-900 pt-4">
                                Flat feet, arch pain and footwear
                            </h3>
                            <p>
                                Flat feet are common and, on their own, are not a disease. A flexible flat foot that is painless needs no treatment at all, however dramatic it looks. Treatment becomes relevant when the flat foot is painful, when it is getting progressively flatter in adulthood, or when it is driving problems further up the chain — arch and inner-ankle pain, or shin pain in runners. In those cases arch support, calf stretching and posterior tibial tendon strengthening are the starting point, and a rigid or rapidly progressing flat foot deserves proper assessment rather than a shoe insert bought online.
                            </p>

                            <div className="mt-8 rounded-2xl border-2 border-amber-300 bg-amber-50 p-6 md:p-7">
                                <div className="flex items-start gap-3">
                                    <AlertTriangle className="w-6 h-6 text-amber-600 flex-shrink-0 mt-0.5" />
                                    <div>
                                        <h3 className="font-bold text-amber-900 text-base md:text-lg mb-2">
                                            If you have diabetes, treat foot problems as urgent
                                        </h3>
                                        <p className="text-sm md:text-base text-amber-900/90 leading-relaxed">
                                            Numbness or reduced sensation in the feet plus any wound, ulcer, blister, crack, colour change or unexplained swelling needs to be seen by a doctor promptly — not self-treated, and not left to see if it improves. Reduced sensation means an injury can progress a long way before it hurts, and infection can spread quickly. Do not use over-the-counter corn or callus removers, and do not wait for pain as your signal. Please see a doctor the same week, or immediately if there is redness, discharge, fever or a foul smell.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </FadeIn>
                </div>
            </section>

            <LandingFaq
                pageName="Foot, Heel & Ankle Pain Doctor in Bangalore"
                pagePath="/foot-ankle-pain-bangalore"
                aboutCondition="Foot and ankle pain"
                subheading="Straight answers about heel pain, plantar fasciitis, ankle sprains and Achilles problems."
                items={[
                    {
                        q: "Why does my heel hurt most with the first steps in the morning?",
                        a: "That pattern is the classic signature of plantar fasciitis. Overnight the foot rests pointed and the plantar fascia — the thick band supporting your arch — shortens and settles. Your first steps stretch it abruptly, producing a stabbing pain under the heel that eases after ten to twenty steps and often returns after sitting for a while. Tight calves, a recent increase in walking or standing, and unsupportive footwear are the usual contributors. A heel spur on X-ray is generally an incidental finding, not the cause.",
                    },
                    {
                        q: "How long does a sprained ankle take to heal?",
                        a: "Most mild ankle sprains feel much better within two to four weeks, but the ankle is not fully recovered at that point. A moderate sprain commonly takes six to twelve weeks to regain full strength and balance, and severe ligament injuries take longer. Pain settling is not the same as healing — the ligaments and the joint's position sense need a structured rehabilitation programme, otherwise the ankle stays vulnerable and tends to roll again.",
                    },
                    {
                        q: "Do I need an X-ray or MRI for foot or ankle pain?",
                        a: "Often neither. After a twisted ankle, an X-ray is warranted mainly if you cannot take four steps on it, or if there is bone tenderness right on the ankle bones or specific midfoot points — otherwise a fracture is unlikely. Beyond that, X-ray shows bone, ultrasound is well suited to tendons and the plantar fascia, and MRI is reserved for suspected cartilage damage, persistent ligament injury or an early stress fracture that an X-ray can miss for the first two to three weeks.",
                    },
                    {
                        q: "What is the fastest way to relieve plantar fasciitis?",
                        a: "There is no genuine overnight fix, but the fastest reliable route is daily calf and plantar fascia stretching, temporarily reducing the walking or standing load that provoked it, wearing supportive footwear with a heel cup instead of going barefoot on hard floors, and adding progressive calf and foot strengthening as pain settles. A night splint helps people whose main symptom is first-step morning pain. Expect meaningful improvement over weeks and full settling over six to twelve months in most cases.",
                    },
                    {
                        q: "Why does my ankle keep giving way after an old sprain?",
                        a: "Repeated giving way usually means chronic ankle instability from a sprain that was rested but never rehabilitated. The original injury damages both the lateral ligaments and the joint's position sense, and that protective reflex does not return on its own. Without deliberate balance retraining and peroneal muscle strengthening, the ankle keeps rolling. Most cases improve with a proper rehabilitation programme; ligament reconstruction is considered only when instability persists despite completing one.",
                    },
                    {
                        q: "Is a steroid injection safe for heel or Achilles pain?",
                        a: "It depends entirely on the location. For stubborn plantar fasciitis, a corticosteroid injection may be considered after conservative treatment has genuinely been tried — it typically gives short-term relief and carries a small risk of heel fat-pad thinning or fascia rupture, so it is not repeated casually. Steroid is not injected into the Achilles tendon itself, because it weakens tendon tissue and the Achilles carries several times body weight with every step.",
                    },
                    {
                        q: "Do flat feet need treatment?",
                        a: "Not if they are painless. A flexible, pain-free flat foot is a normal variation and needs no treatment however flat it looks. Treatment is considered when the flat foot is painful, when an adult's arch is progressively collapsing, or when it is contributing to arch pain, inner-ankle pain or shin pain in runners. In those cases arch support, calf stretching and posterior tibial tendon strengthening come first, and a rigid or worsening flat foot should be properly assessed.",
                    },
                    {
                        q: "When should heel or ankle pain be seen urgently?",
                        a: "See a doctor promptly if you cannot bear weight after an injury, if the ankle or foot is visibly deformed, if there is a sudden painful snap in the back of the calf or ankle with difficulty pushing off, if there is fever, spreading redness or a wound, or if you have diabetes or numb feet and develop any ulcer, blister or unexplained swelling. Pain that is present at rest and at night, or that is progressively worsening over weeks, also warrants assessment rather than waiting.",
                    },
                    {
                        q: "What does a foot and ankle consultation cost in Bangalore?",
                        a: "Consultation fees at both clinics are modest and are confirmed when you book — please call for the current figure. Investigation and treatment costs vary widely depending on what is actually needed, from nothing beyond a rehabilitation plan, through an X-ray or ultrasound, to an MRI or a surgical procedure. Any estimate given before a diagnosis is guesswork, so costs are discussed openly after the assessment and before anything is booked.",
                    },
                    {
                        q: "Where can I see a foot and ankle doctor in Bangalore?",
                        a: "Dr. Nitin N Sunku consults at Raghava Multispeciality Hospital, Attibele (Mon–Sat, 10 AM–6 PM) and at Health Nest Hospital, HSR Layout Sector 2 (Mon–Sat, 10 AM–8 PM). Attibele is convenient for Anekal, Bommasandra, Chandapura, Hosur Road and Electronic City; HSR Layout serves Koramangala, BTM Layout, Bellandur and Sarjapur Road. Call +91-9980031006 or book via WhatsApp or the form on this page.",
                    },
                ]}
            />

            <FinalCtaStrip
                clinic={CLINIC}
                title="Stop Dreading Your First Steps."
                subtitle="Get your heel, foot or ankle properly assessed — book today."
            />

            <MobileStickyCTA clinic={CLINIC} />
            <LandingFooter clinic={CLINIC} currentPath="/foot-ankle-pain-bangalore" />
        </main>
    );
}
