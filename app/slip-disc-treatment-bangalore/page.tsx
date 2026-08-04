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
    AlertTriangle,
    Zap,
    Laptop,
    Monitor,
    Syringe,
    Dumbbell,
    ClipboardList,
    Scissors,
    Clock,
} from "lucide-react";

import { BookingForm } from "@/components/forms/booking-form";
import { HideNavigation } from "@/components/ui/hide-navigation";
import { LandingPageTracker } from "@/components/analytics/landing-page-tracker";
import { TrackedButton } from "@/components/analytics/tracked-button";
import { TrackedCall } from "@/components/analytics/tracked-call";
import { TrackedWhatsApp } from "@/components/analytics/tracked-whatsapp";
import { FadeIn } from "@/components/animations/fade-in";
import { siteOrigin } from "@/lib/site-url";
import { CLINICS, PRIMARY_CLINIC, HSR_CLINIC } from "@/lib/practice";
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
    title: { absolute: "Slip Disc Treatment in Bangalore | Dr. Nitin Sunku" },
    description:
        "Slipped disc and lumbar disc herniation care in Bangalore. Most discs settle without surgery — get an honest plan, not a rushed one. Attibele & HSR Layout.",
    alternates: { canonical: `${siteOrigin}/slip-disc-treatment-bangalore` },
    keywords: [
        "slip disc treatment Bangalore",
        "slipped disc doctor Bangalore",
        "disc herniation treatment Bangalore",
        "lumbar disc herniation surgery Bangalore",
        "L4-L5 disc bulge treatment",
        "sciatica from slipped disc",
        "endoscopic spine surgery Bangalore",
        "microdiscectomy Bangalore",
        "spine specialist Attibele",
        "spine specialist HSR Layout",
        "disc bulge treatment without surgery",
        "slip disc doctor near Electronic City",
    ],
    openGraph: {
        title: "Slip Disc Treatment in Bangalore — Dr. Nitin N Sunku",
        description:
            "Slipped disc, lumbar disc herniation and sciatica assessed properly — conservative care first, surgery only for the minority who genuinely need it. Attibele & HSR Layout.",
        url: `${siteOrigin}/slip-disc-treatment-bangalore`,
        type: "website",
    },
    robots: { index: true, follow: true },
};

const CLINIC = PRIMARY_CLINIC;
const PHONE = CLINIC.phone;
const PHONE_DIGITS = CLINIC.phoneDigits;
const WHATSAPP_MESSAGE =
    "Hi Dr. Nitin, I have a slipped disc / back and leg pain and would like to book an appointment.";

const conditions = [
    { title: "L4-L5 & L5-S1 Disc Herniation", Icon: Activity },
    { title: "Sciatica From a Slipped Disc", Icon: Zap },
    { title: "Disc Bulge & Annular Tear", Icon: ShieldCheck },
    { title: "Disc Extrusion & Sequestration", Icon: AlertTriangle },
    { title: "Nerve Root Compression", Icon: Users },
    { title: "Recurrent Disc Herniation", Icon: Heart },
    { title: "Lumbar Canal Stenosis", Icon: Hospital },
    { title: "Pain Persisting After Disc Surgery", Icon: Stethoscope },
];

const discStages = [
    {
        stage: "Bulge",
        title: "Disc Bulge",
        plain:
            "The disc's tough outer ring spreads out broadly beyond its normal edge, like a tyre sagging under load. Nothing has torn through.",
        meaning:
            "Extremely common, often age-related, and frequently found on scans of people with no back pain at all. On its own, a bulge is usually not the reason you hurt.",
    },
    {
        stage: "Protrusion",
        title: "Disc Protrusion",
        plain:
            "The soft inner material pushes against a weakened part of the outer ring and makes a focal lump, but the outer fibres still contain it.",
        meaning:
            "Can irritate a nerve root if it sits in the wrong spot. Usually responds well to time, load management and structured rehabilitation.",
    },
    {
        stage: "Extrusion",
        title: "Disc Extrusion",
        plain:
            "Inner disc material breaks through the outer ring but stays connected to the parent disc — the classic picture behind severe, one-sided leg pain.",
        meaning:
            "Sounds alarming on a report, yet extrusions often shrink on their own over weeks to months as the body reabsorbs the fragment.",
    },
    {
        stage: "Sequestration",
        title: "Sequestrated Fragment",
        plain:
            "A piece of disc material separates completely and sits free in the spinal canal, away from the disc it came from.",
        meaning:
            "Counter-intuitively, free fragments have the highest tendency to be reabsorbed. Decisions are driven by your nerve function, not the word on the report.",
    },
];

const emergencySigns = [
    "Numbness in the saddle area — inner thighs, groin, buttocks or genital region",
    "New difficulty starting or controlling urination, or loss of bowel control",
    "Weakness in both legs, or weakness that is clearly getting worse day by day",
    "A foot that has started dragging or slapping the floor when you walk",
    "Severe leg pain immediately after major trauma such as a road accident or fall from height",
];

const notEmergency = [
    "Back and leg pain that is severe but stable, with normal bladder and bowel control",
    "Pain that eases when you lie down or change position",
    "Tingling in one leg that comes and goes with certain movements",
    "An MRI report full of words like bulge, desiccation and spondylosis, with mild symptoms",
];

const treatmentLadder = [
    {
        step: "Step 1",
        Icon: Dumbbell,
        title: "Load Management + Structured Physiotherapy",
        does:
            "Settles the acute irritation, restores movement, and rebuilds the trunk and hip strength that keeps the disc from being repeatedly overloaded. This is where the majority of slipped discs actually get better.",
        doesNot:
            "It does not push a disc back in — no exercise, traction or manipulation can do that. What it changes is how much load the injured segment takes and how the nerve tolerates it.",
    },
    {
        step: "Step 2",
        Icon: ClipboardList,
        title: "Medication for the Painful Window",
        does:
            "Short courses of anti-inflammatories, nerve-pain medication or a brief muscle relaxant can bring pain down enough for you to move, sleep and do rehabilitation properly.",
        doesNot:
            "Medication does not heal the disc and is not a long-term plan. It buys you a workable window; the rehabilitation is what uses it.",
    },
    {
        step: "Step 3",
        Icon: Syringe,
        title: "Image-Guided Epidural or Nerve Root Block",
        does:
            "Places anti-inflammatory medication precisely around the irritated nerve root under image guidance. For stubborn radiating leg pain it can break the pain cycle and let rehabilitation continue.",
        doesNot:
            "An injection does not remove the disc fragment and its effect is not guaranteed or permanent. It is a targeted step between physiotherapy and surgery, not a replacement for either.",
    },
    {
        step: "Step 4",
        Icon: Scissors,
        title: "Microdiscectomy or Endoscopic Discectomy",
        does:
            "Removes the fragment pressing on the nerve through a small incision. It is generally most reliable for leg pain caused by clear nerve compression, and is considered when red flags are present or when good conservative care has genuinely plateaued.",
        doesNot:
            "Disc surgery is not a treatment for general low back ache, it does not stop the spine from ageing, and it does not remove the need for rehabilitation afterwards. Recurrence remains possible.",
    },
];

const recoveryStages = [
    {
        window: "First 1–2 weeks",
        detail:
            "Usually the most painful phase. The aim is to stay gently mobile, sleep, and avoid both bed rest and heroic activity. Many people are still off heavy work in this window.",
    },
    {
        window: "2–6 weeks",
        detail:
            "Leg pain commonly starts to retreat back up towards the buttock and back — a good sign. Rehabilitation moves from pain relief into graded loading. Desk work is often manageable with breaks.",
    },
    {
        window: "6–12 weeks",
        detail:
            "For a large share of people this is when things become genuinely liveable. If pain and weakness are unchanged at this point despite proper rehabilitation, that is the honest trigger to reassess.",
    },
    {
        window: "3–12 months",
        detail:
            "Extruded fragments frequently shrink over this period. Residual tingling can linger after the pain has gone. Strength work continues, because deconditioning is the main reason people relapse.",
    },
];

const deskChanges = [
    "Set the chair so hips sit slightly above the knees, with the low back supported — an upright pelvis loads the disc far less than a slumped one",
    "Stand or walk for two minutes every 30–40 minutes; the total sitting time matters more than the perfect chair",
    "Raise the monitor to eye level and keep the keyboard close, so you are not leaning forward from the waist all day",
    "Do not carry a laptop bag on one shoulder through a long Electronic City commute — use both straps or a trolley",
    "Take phone calls standing and walking; it is the cheapest change with the best adherence",
    "Restart core and hip strengthening once acute pain settles, rather than waiting until you feel completely normal",
];

const mimics = [
    {
        title: "Sacroiliac Joint Pain",
        tell:
            "Pain focused over one dimple at the base of the spine, worse getting out of a car or turning in bed, rarely travelling below the knee. Common after pregnancy and in younger adults.",
    },
    {
        title: "Piriformis & Deep Gluteal Pain",
        tell:
            "Buttock pain that is worse sitting on a hard surface or driving, with tenderness deep in the buttock, and no matching weakness or reflex change on examination.",
    },
    {
        title: "Hip Joint Pathology",
        tell:
            "Groin pain and stiffness rather than back pain, trouble putting on socks or getting into a low car, and pain reproduced by rotating the hip — not by bending the spine.",
    },
    {
        title: "Lumbar Canal Stenosis",
        tell:
            "More typical after 55. Both legs feel heavy or crampy after walking a certain distance, and relief comes from sitting or leaning forward on a trolley. This is a different problem from a single herniated disc.",
    },
];

const sellingPoints = [
    {
        Icon: ShieldCheck,
        title: "Conservative Care First, Genuinely",
        description:
            "The large majority of slipped discs settle without an operation. The consultation starts from that position and only moves up the ladder when your symptoms and examination say it is warranted.",
    },
    {
        Icon: Award,
        title: "Fellowship-Trained Orthopedic Specialist",
        description:
            "Dr. Nitin is a fellowship-trained orthopedic and sports medicine specialist with 10+ years of experience treating spine, joint and musculoskeletal conditions.",
    },
    {
        Icon: Stethoscope,
        title: "Examination Before Imaging",
        description:
            "A neurological examination — power, reflexes, sensation, straight leg raise — tells us which nerve root is involved. The MRI is then used to confirm a question, not to generate one.",
    },
    {
        Icon: Heart,
        title: "Honest MRI Interpretation",
        description:
            "Disc bulges and degenerative changes appear on scans of large numbers of people with no pain whatsoever. Your report is read alongside your symptoms, not treated as a verdict on its own.",
    },
    {
        Icon: Zap,
        title: "Clear on Who Actually Needs Surgery",
        description:
            "Conservative-first is not anti-surgery. Progressive weakness, cauda equina signs, or a properly executed plan that has plateaued get a straight recommendation without delay.",
    },
    {
        Icon: Hospital,
        title: "Two Bengaluru Locations",
        description:
            "Consult at Raghava Multispeciality Hospital, Attibele, or Health Nest Hospital, HSR Layout — whichever is the easier drive from home or office.",
    },
];

export default function SlipDiscTreatmentBangalorePage() {
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
                                    Most Slipped Discs Never Need Surgery
                                </span>

                                <h1 className="text-[2.5rem] sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-gray-900 leading-[1.05] tracking-tight mb-4 break-words">
                                    <span className="block">Slip Disc Treatment</span>
                                    <span className="block bg-gradient-to-r from-blue-700 via-blue-600 to-indigo-600 bg-clip-text text-transparent pb-1">
                                        in Bangalore
                                    </span>
                                </h1>

                                <p className="text-lg sm:text-xl md:text-2xl text-blue-800 font-semibold mb-4">
                                    Dr. Nitin N Sunku — Orthopedic &amp; Sports Medicine Specialist
                                </p>
                                <p className="text-base sm:text-lg text-gray-600 mb-6 max-w-xl leading-relaxed">
                                    Around nine out of ten lumbar disc herniations settle without an operation. The real job of a spine consultation is working out whether you are in that group — and finding the small minority who genuinely need something more. That answer comes from examining you, not from reading your MRI report aloud.
                                </p>

                                <div className="flex flex-wrap gap-2 mb-7">
                                    <span className="inline-flex items-center gap-1.5 bg-white/90 backdrop-blur border border-gray-200 rounded-full px-3 py-1.5 text-xs sm:text-sm font-medium text-gray-800 shadow-sm">
                                        <CheckCircle className="w-3.5 h-3.5 text-emerald-600" />
                                        Conservative-First
                                    </span>
                                    <span className="inline-flex items-center gap-1.5 bg-white/90 backdrop-blur border border-gray-200 rounded-full px-3 py-1.5 text-xs sm:text-sm font-medium text-gray-800 shadow-sm">
                                        <CheckCircle className="w-3.5 h-3.5 text-emerald-600" />
                                        MRI Read With Your Symptoms
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
                                        metadata={{ cta_type: "form_scroll", condition: "slip-disc" }}
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
                            <HeroImage alt="Dr. Nitin N Sunku — Slip Disc and Lumbar Disc Herniation Treatment in Bangalore" />
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
                                — Disc Problems We Treat —
                            </span>
                            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-3 break-words">
                                From a Mild Bulge to a{" "}
                                <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                                    Trapped Nerve
                                </span>
                            </h2>
                            <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
                                &ldquo;Slip disc&rdquo; is one label covering several very different situations. The treatment depends entirely on which one you actually have.
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

            {/* ============= WHAT A SLIPPED DISC ACTUALLY IS ============= */}
            <section className="bg-white py-14 md:py-20 overflow-hidden">
                <div className="container mx-auto px-4 max-w-6xl">
                    <FadeIn>
                        <div className="text-center mb-10">
                            <span className="inline-block text-xs font-bold text-blue-700 uppercase tracking-widest mb-3">
                                — Plain-Language Anatomy —
                            </span>
                            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-3 break-words">
                                Nothing Actually{" "}
                                <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                                    Slips
                                </span>
                            </h2>
                            <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
                                Each disc is a cushion between two vertebrae: a tough fibrous ring on the outside and a soft gel-like centre. A &ldquo;slipped disc&rdquo; means part of that centre has pushed into or through the ring — the disc has not slid out of place, and it cannot be pushed back in by any exercise, massage or machine. Radiologists grade it in four steps, and knowing which one your report describes changes how worried you need to be.
                            </p>
                        </div>
                    </FadeIn>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
                        {discStages.map(({ stage, title, plain, meaning }, idx) => (
                            <FadeIn key={stage} delay={idx * 0.07}>
                                <div className="relative bg-gradient-to-br from-blue-50 via-white to-indigo-50 rounded-2xl p-5 md:p-6 border border-blue-100 shadow-sm h-full">
                                    <span className="inline-block text-[10px] font-bold text-blue-700 uppercase tracking-widest mb-2">
                                        Stage {idx + 1}
                                    </span>
                                    <h3 className="font-bold text-gray-900 text-base md:text-lg mb-2 leading-tight">{title}</h3>
                                    <p className="text-sm text-gray-700 leading-relaxed mb-3">{plain}</p>
                                    <p className="text-sm text-gray-600 leading-relaxed border-t border-blue-100 pt-3">
                                        <span className="font-semibold text-blue-800">What it usually means: </span>
                                        {meaning}
                                    </p>
                                </div>
                            </FadeIn>
                        ))}
                    </div>

                    <FadeIn delay={0.2}>
                        <div className="max-w-4xl mx-auto mt-10 bg-gray-50 rounded-2xl p-6 md:p-8 border border-gray-100">
                            <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                                Roughly nine in ten lumbar disc herniations improve without surgery over weeks to months, and the fragment itself often shrinks in that time. If your pain has spread beyond the low back, the{" "}
                                <Link href="/blog/sciatica-treatment-without-surgery-india" className="text-blue-700 font-semibold hover:text-blue-900 underline underline-offset-2">
                                    guide to treating sciatica without surgery
                                </Link>{" "}
                                covers what that recovery actually looks like week by week. For broader spine complaints that are not disc-related, start with the{" "}
                                <Link href="/back-pain-bangalore" className="text-blue-700 font-semibold hover:text-blue-900 underline underline-offset-2">
                                    back pain specialist page
                                </Link>
                                .
                            </p>
                        </div>
                    </FadeIn>
                </div>
            </section>

            {/* ============= RED FLAGS ============= */}
            <section className="bg-gradient-to-b from-white to-red-50/40 py-14 md:py-20 overflow-hidden">
                <div className="container mx-auto px-4 max-w-5xl">
                    <FadeIn>
                        <div className="text-center mb-10">
                            <span className="inline-block text-xs font-bold text-red-700 uppercase tracking-widest mb-3">
                                — Know the Difference —
                            </span>
                            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-3 break-words">
                                Rare, But You Must Know It
                            </h2>
                            <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
                                A very small number of disc herniations compress the bundle of nerves at the base of the spinal cord — cauda equina syndrome. It is uncommon, but it is time-critical, so it is listed here as information rather than as a reason to book an appointment. If any of the signs on the left apply to you, do not wait for a clinic slot.
                            </p>
                        </div>
                    </FadeIn>

                    <div className="grid md:grid-cols-2 gap-5">
                        <FadeIn>
                            <div className="bg-red-50/80 rounded-2xl border-2 border-red-200 p-6 md:p-7 h-full">
                                <h3 className="flex items-center gap-2 font-bold text-red-800 text-lg mb-2">
                                    <AlertTriangle className="w-5 h-5" />
                                    Go to a Hospital Emergency Department Now
                                </h3>
                                <p className="text-sm text-red-900/80 mb-4 leading-relaxed">
                                    Do not message, do not book — go. These signs need assessment within hours, not days.
                                </p>
                                <ul className="space-y-3">
                                    {emergencySigns.map((item) => (
                                        <li key={item} className="flex gap-2.5 text-sm md:text-base text-gray-700 leading-relaxed">
                                            <AlertTriangle className="w-4 h-4 text-red-500 flex-shrink-0 mt-1" />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </FadeIn>
                        <FadeIn delay={0.1}>
                            <div className="bg-emerald-50/70 rounded-2xl border border-emerald-100 p-6 md:p-7 h-full">
                                <h3 className="flex items-center gap-2 font-bold text-emerald-800 text-lg mb-2">
                                    <CheckCircle className="w-5 h-5" />
                                    Not an Emergency — Book a Proper Assessment
                                </h3>
                                <p className="text-sm text-emerald-900/80 mb-4 leading-relaxed">
                                    Distressing, often severe, but safe to manage through a planned consultation.
                                </p>
                                <ul className="space-y-3">
                                    {notEmergency.map((item) => (
                                        <li key={item} className="flex gap-2.5 text-sm md:text-base text-gray-700 leading-relaxed">
                                            <CheckCircle className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-1" />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </FadeIn>
                    </div>
                </div>
            </section>

            {/* ============= DIAGNOSIS / MRI HONESTY ============= */}
            <section className="py-14 md:py-20 bg-gradient-to-br from-blue-700 via-blue-800 to-indigo-800 text-white relative overflow-hidden">
                <div aria-hidden className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(circle at 2px 2px, white 1px, transparent 0)", backgroundSize: "32px 32px" }}></div>
                <div className="container mx-auto px-4 max-w-6xl relative z-10">
                    <FadeIn>
                        <div className="grid lg:grid-cols-5 gap-10 items-center">
                            <div className="lg:col-span-3">
                                <span className="inline-block text-xs font-bold text-blue-200 uppercase tracking-widest mb-3">
                                    — How the Diagnosis Is Made —
                                </span>
                                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-5 leading-tight">
                                    Your MRI Is Evidence, Not a Verdict
                                </h2>
                                <p className="text-base md:text-lg text-blue-100 leading-relaxed mb-4">
                                    The examination comes first. Where the pain travels, which movements provoke it, what your reflexes, power and sensation show, and how your leg responds to a straight leg raise — together these usually identify the nerve root involved before any scan is ordered. The MRI is then used to confirm or refute a specific question.
                                </p>
                                <p className="text-base md:text-lg text-blue-100 leading-relaxed mb-4">
                                    This matters because disc bulges, dark discs and degenerative changes turn up routinely on the scans of people who have never had back pain in their lives, and the proportion rises steadily with age. A report describing a bulge at L4-L5 does not, by itself, prove that L4-L5 is why you hurt. If the level on the film does not match the level suggested by your examination, treating the film is how patients end up with an operation that changes nothing.
                                </p>
                                <p className="text-base md:text-lg text-blue-100 leading-relaxed">
                                    So an MRI is advised when it will change what we do — persistent radiating pain, neurological deficit, red flags, or a decision about injection or surgery. It is not ordered simply to put a name on ordinary back ache.
                                </p>
                            </div>

                            <div className="lg:col-span-2">
                                <div className="bg-white/10 backdrop-blur border border-white/20 rounded-3xl p-7 md:p-8 text-center">
                                    <Stethoscope className="w-12 h-12 mx-auto mb-4 text-blue-200" />
                                    <p className="text-2xl md:text-3xl font-bold leading-tight mb-2">Examine, Then Image</p>
                                    <p className="text-base text-blue-100 leading-relaxed">
                                        Scans are matched to symptoms — never the other way round.
                                    </p>
                                    <div className="mt-6 pt-6 border-t border-white/20 grid grid-cols-3 gap-3 text-center">
                                        <div>
                                            <p className="text-xl font-bold">History</p>
                                            <p className="text-[11px] text-blue-200 uppercase tracking-wider mt-1">Listen</p>
                                        </div>
                                        <div>
                                            <p className="text-xl font-bold">Exam</p>
                                            <p className="text-[11px] text-blue-200 uppercase tracking-wider mt-1">Localise</p>
                                        </div>
                                        <div>
                                            <p className="text-xl font-bold">MRI</p>
                                            <p className="text-[11px] text-blue-200 uppercase tracking-wider mt-1">Confirm</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </FadeIn>
                </div>
            </section>

            {/* ============= TREATMENT LADDER ============= */}
            <section className="bg-white py-14 md:py-20 overflow-hidden">
                <div className="container mx-auto px-4 max-w-5xl">
                    <FadeIn>
                        <div className="text-center mb-12">
                            <span className="inline-block text-xs font-bold text-blue-700 uppercase tracking-widest mb-3">
                                — The Treatment Ladder —
                            </span>
                            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-3 break-words">
                                What Each Step Fixes —{" "}
                                <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                                    and What It Doesn&apos;t
                                </span>
                            </h2>
                            <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
                                You climb this ladder one rung at a time, and only when the rung below has been given a fair trial.
                            </p>
                        </div>
                    </FadeIn>

                    <div className="space-y-4">
                        {treatmentLadder.map(({ step, Icon, title, does, doesNot }, idx) => {
                            const isFinal = idx === treatmentLadder.length - 1;
                            return (
                                <FadeIn key={step} delay={idx * 0.06}>
                                    <div className={`relative bg-white rounded-2xl shadow-md border-l-8 ${isFinal ? "border-orange-500" : "border-blue-600"} p-6 md:p-8`}>
                                        <div className="flex flex-col sm:flex-row sm:items-start gap-5">
                                            <div className={`flex-shrink-0 w-16 h-16 rounded-xl flex items-center justify-center ${isFinal ? "bg-orange-100" : "bg-blue-100"}`}>
                                                <Icon className={`w-8 h-8 ${isFinal ? "text-orange-600" : "text-blue-700"}`} />
                                            </div>
                                            <div className="flex-1">
                                                <p className={`text-sm font-bold uppercase tracking-wider mb-1 ${isFinal ? "text-orange-600" : "text-blue-700"}`}>
                                                    {step}
                                                </p>
                                                <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3">{title}</h3>
                                                <p className="text-gray-700 leading-relaxed mb-3">
                                                    <span className="font-semibold text-emerald-700">What it does: </span>
                                                    {does}
                                                </p>
                                                <p className="text-gray-600 leading-relaxed text-sm md:text-base">
                                                    <span className="font-semibold text-gray-900">What it does not do: </span>
                                                    {doesNot}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </FadeIn>
                            );
                        })}
                    </div>

                    <FadeIn delay={0.2}>
                        <div className="mt-8 bg-gradient-to-br from-blue-50 via-white to-indigo-50 rounded-2xl p-6 md:p-8 border border-blue-100 shadow-sm">
                            <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                                If surgery does come into the conversation, it should be a conversation and not an announcement. Read what a{" "}
                                <Link href="/blog/lumbar-disc-herniation-surgery-india" className="text-blue-700 font-semibold hover:text-blue-900 underline underline-offset-2">
                                    lumbar disc herniation operation actually involves
                                </Link>{" "}
                                and how{" "}
                                <Link href="/blog/endoscopic-spine-surgery-india" className="text-blue-700 font-semibold hover:text-blue-900 underline underline-offset-2">
                                    endoscopic spine surgery
                                </Link>{" "}
                                differs from an open procedure before you decide anything. The full{" "}
                                <Link href="/services/spine-care" className="text-blue-700 font-semibold hover:text-blue-900 underline underline-offset-2">
                                    spine care service
                                </Link>{" "}
                                page covers the rest of what the practice handles.
                            </p>
                        </div>
                    </FadeIn>
                </div>
            </section>

            {/* ============= RECOVERY TIMELINES ============= */}
            <section className="bg-gradient-to-b from-blue-50/60 to-white py-14 md:py-20 overflow-hidden">
                <div className="container mx-auto px-4 max-w-6xl">
                    <FadeIn>
                        <div className="text-center mb-10">
                            <span className="inline-block text-xs font-bold text-blue-700 uppercase tracking-widest mb-3">
                                — Realistic Timelines —
                            </span>
                            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-3 break-words">
                                Ranges, Not{" "}
                                <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                                    Promises
                                </span>
                            </h2>
                            <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
                                Disc recovery is not linear and it is not identical between two people with the same MRI. These are typical windows, offered so you can tell whether you are drifting or progressing — not as a guarantee of when you will be pain-free.
                            </p>
                        </div>
                    </FadeIn>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
                        {recoveryStages.map(({ window, detail }, idx) => (
                            <FadeIn key={window} delay={idx * 0.07}>
                                <div className="bg-white rounded-2xl p-5 md:p-6 border border-gray-100 shadow-sm h-full">
                                    <div className="w-10 h-10 rounded-xl bg-blue-100 flex items-center justify-center mb-3">
                                        <Clock className="w-5 h-5 text-blue-700" />
                                    </div>
                                    <p className="font-bold text-blue-800 text-base mb-2">{window}</p>
                                    <p className="text-sm text-gray-600 leading-relaxed">{detail}</p>
                                </div>
                            </FadeIn>
                        ))}
                    </div>
                </div>
            </section>

            {/* ============= DESK WORKERS ============= */}
            <section className="bg-white py-14 md:py-20 overflow-hidden">
                <div className="container mx-auto px-4 max-w-6xl">
                    <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
                        <FadeIn direction="right">
                            <div>
                                <span className="inline-block text-xs font-bold text-blue-700 uppercase tracking-widest mb-3">
                                    — Electronic City, HSR &amp; Sarjapur Road —
                                </span>
                                <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-900 mb-4 leading-tight break-words">
                                    Ten Hours Sitting, Then a Commute
                                </h2>
                                <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-4">
                                    A large share of the disc problems seen at these clinics belong to software and IT staff along the Electronic City, HSR Layout and Sarjapur Road corridor. There is a mechanical reason for that. Sitting, and particularly slumped sitting, raises the pressure inside a lumbar disc well above what it sees when you stand — and a long commute simply extends the same posture with vibration added on top.
                                </p>
                                <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-4">
                                    Add several hours of screen time in the evening, minimal strength work, and a weekend that tries to compensate with one heavy gym session, and you have the profile that turns up in clinic on a Monday unable to straighten up. None of this is about willpower; it is about accumulated load on one segment of the spine.
                                </p>
                                <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                                    Fixing it is usually undramatic. It is worth understanding{" "}
                                    <Link href="/blog/how-posture-affects-spine-and-joint-health" className="text-blue-700 font-semibold hover:text-blue-900 underline underline-offset-2">
                                        how posture affects spine and joint health
                                    </Link>{" "}
                                    before spending money on gadgets. If your symptoms sit higher up, the{" "}
                                    <Link href="/neck-pain-bangalore" className="text-blue-700 font-semibold hover:text-blue-900 underline underline-offset-2">
                                        neck pain page
                                    </Link>{" "}
                                    covers the cervical version of the same story, and there is a dedicated page for{" "}
                                    <Link href="/orthopedic-doctor-electronic-city" className="text-blue-700 font-semibold hover:text-blue-900 underline underline-offset-2">
                                        orthopedic consultations near Electronic City
                                    </Link>
                                    .
                                </p>
                            </div>
                        </FadeIn>

                        <FadeIn direction="left" delay={0.1}>
                            <div className="bg-gradient-to-br from-blue-50 via-white to-indigo-50 rounded-3xl p-6 md:p-8 border border-blue-100 shadow-sm">
                                <h3 className="flex items-center gap-2 font-bold text-blue-900 text-lg mb-5">
                                    <Laptop className="w-5 h-5 text-blue-700" />
                                    Desk Changes That Actually Help
                                </h3>
                                <ul className="space-y-3.5">
                                    {deskChanges.map((item) => (
                                        <li key={item} className="flex gap-3 text-sm md:text-base text-gray-700 leading-relaxed">
                                            <Monitor className="w-4 h-4 text-blue-600 flex-shrink-0 mt-1" />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                                <p className="text-xs text-gray-500 mt-5 pt-4 border-t border-blue-100 leading-relaxed">
                                    General guidance only. If you already have leg weakness or numbness, get examined before starting any exercise programme.
                                </p>
                            </div>
                        </FadeIn>
                    </div>
                </div>
            </section>

            {/* ============= WHEN IT IS SOMETHING ELSE ============= */}
            <section className="bg-gradient-to-br from-gray-50 via-blue-50/40 to-white py-14 md:py-20 overflow-hidden">
                <div className="container mx-auto px-4 max-w-6xl">
                    <FadeIn>
                        <div className="text-center mb-10">
                            <span className="inline-block text-xs font-bold text-blue-700 uppercase tracking-widest mb-3">
                                — The Misdiagnosis Trap —
                            </span>
                            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-3 break-words">
                                When a &ldquo;Slip Disc&rdquo; Is{" "}
                                <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                                    Not a Disc at All
                                </span>
                            </h2>
                            <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
                                Back pain with leg pain gets labelled &ldquo;slip disc&rdquo; almost reflexively — and because most adult MRIs show some disc change, the label sticks. These four conditions are regularly mistaken for a herniated disc, and each needs completely different treatment.
                            </p>
                        </div>
                    </FadeIn>

                    <div className="grid sm:grid-cols-2 gap-4 md:gap-5">
                        {mimics.map(({ title, tell }, idx) => (
                            <FadeIn key={title} delay={idx * 0.07}>
                                <div className="bg-white rounded-2xl p-5 md:p-6 border border-gray-100 shadow-sm h-full">
                                    <h3 className="font-bold text-gray-900 text-base md:text-lg mb-2 leading-tight">{title}</h3>
                                    <p className="text-sm md:text-base text-gray-600 leading-relaxed">{tell}</p>
                                </div>
                            </FadeIn>
                        ))}
                    </div>

                    <FadeIn delay={0.2}>
                        <p className="text-sm md:text-base text-gray-600 leading-relaxed max-w-3xl mx-auto text-center mt-8">
                            This is the single strongest argument for an unhurried physical examination. A disc operation performed for pain that was never coming from the disc cannot succeed, however well it is done.
                        </p>
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
                                A Spine Opinion You Can{" "}
                                <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                                    Sanity-Check
                                </span>
                            </h2>
                            <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
                                Six reasons patients across Bengaluru bring their disc problems — and their second opinions — here.
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
                                    <h3 className="font-bold text-gray-900 text-base md:text-lg mb-2 leading-tight">{title}</h3>
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
                                    Bring Your MRI. Get a Straight Answer.
                                </h2>
                                <p className="text-base md:text-lg text-blue-100 max-w-md mx-auto">
                                    The team will call you back within hours to confirm your slot at Attibele or HSR Layout.
                                </p>
                            </div>
                        </FadeIn>

                        <FadeIn delay={0.1}>
                            <div className="bg-white rounded-3xl shadow-2xl p-6 md:p-10 border border-white/50">
                                <BookingForm source="slip-disc-treatment-bangalore" />
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
                subheading="Disc assessment, image-guided injections and spine surgery opinions — at whichever clinic suits your commute."
            />

            {/* ============= LONG-FORM EDUCATIONAL SECTION ============= */}
            <section className="bg-gradient-to-br from-gray-50 via-blue-50/30 to-white py-14 md:py-20 overflow-hidden">
                <div className="container mx-auto px-4 max-w-3xl">
                    <FadeIn>
                        <div className="mb-8">
                            <span className="inline-block text-xs font-bold text-blue-700 uppercase tracking-widest mb-3">
                                — A Longer Read —
                            </span>
                            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-900 leading-tight break-words">
                                What Actually Happens When You Come In With a Slipped Disc
                            </h2>
                        </div>
                    </FadeIn>

                    <FadeIn delay={0.1}>
                        <div className="space-y-4 text-base md:text-lg text-gray-700 leading-relaxed">
                            <p>
                                Most people arrive with two things: a printout of an MRI report and a sentence someone has already said to them, usually along the lines of &ldquo;you will need surgery&rdquo;. The first ten minutes of the consultation are spent on neither. They are spent on where exactly the pain goes, what makes it worse, whether it has changed over the past fortnight, and what you are no longer able to do because of it.
                            </p>

                            <h3 className="text-lg md:text-xl font-bold text-gray-900 pt-4">The examination is the part that decides things</h3>
                            <p>
                                A herniated disc irritates a specific nerve root, and each root has a signature. An L5 root problem tends to weaken the muscles that lift the big toe and foot; an S1 problem tends to weaken push-off and dull the ankle reflex; and the numb patches sit in predictable places. Checking power, reflexes, sensation and straight leg raise takes a few minutes and tells us whether the story is coming from a nerve root at all — and if so, which one.
                            </p>
                            <p>
                                Only then does your scan get useful. If the examination points to S1 and the MRI shows a fragment sitting on the S1 root at L5-S1, the picture is coherent and the plan is straightforward. If the examination is normal and the report simply lists degenerative change at three levels, the honest conclusion is that we have not yet found your pain generator, and looking harder at the film will not find it either.
                            </p>

                            <h3 className="text-lg md:text-xl font-bold text-gray-900 pt-4">What you leave with</h3>
                            <ul className="space-y-2.5 pl-1">
                                <li className="flex gap-3">
                                    <span aria-hidden className="mt-2.5 w-1.5 h-1.5 rounded-full bg-blue-500 flex-shrink-0" />
                                    <span>A plain explanation of what your disc is doing and, just as importantly, what it is not doing</span>
                                </li>
                                <li className="flex gap-3">
                                    <span aria-hidden className="mt-2.5 w-1.5 h-1.5 rounded-full bg-blue-500 flex-shrink-0" />
                                    <span>A written plan with a defined review point, so you know what &ldquo;not improving&rdquo; would look like</span>
                                </li>
                                <li className="flex gap-3">
                                    <span aria-hidden className="mt-2.5 w-1.5 h-1.5 rounded-full bg-blue-500 flex-shrink-0" />
                                    <span>Specific rehabilitation direction rather than a generic sheet of exercises</span>
                                </li>
                                <li className="flex gap-3">
                                    <span aria-hidden className="mt-2.5 w-1.5 h-1.5 rounded-full bg-blue-500 flex-shrink-0" />
                                    <span>The red-flag list in writing, so you know exactly when to stop waiting and go to a hospital</span>
                                </li>
                            </ul>

                            <h3 className="text-lg md:text-xl font-bold text-gray-900 pt-4">Second opinions are welcome, including on operations</h3>
                            <p>
                                If you have already been advised to have disc surgery, bring the films and the advice with you. Sometimes the recommendation is entirely reasonable and gets confirmed; sometimes there is room to complete a proper conservative trial first. Either way you should be able to say, in your own words, why the operation is being proposed and what it is expected to change. If you cannot, the consent was not really informed.
                            </p>

                            <h3 className="text-lg md:text-xl font-bold text-gray-900 pt-4">A word on cost</h3>
                            <p>
                                A consultation is modest and predictable — typically in the region of ₹500 to ₹1,000, including examination and a written plan. Spine surgery is not something worth quoting on a web page: the figure swings widely with the procedure performed, the implants or consumables used, the room category, the length of stay and the terms of your policy. Any number given before a diagnosis is guesswork. What you can do in advance is check your coverage — the{" "}
                                <Link href="/insurance-cashless-orthopedic-treatment" className="text-blue-700 font-semibold hover:text-blue-900 underline underline-offset-2">
                                    cashless and insurance guide
                                </Link>{" "}
                                explains how pre-authorisation usually works, and the hospital team will give you a written estimate once a specific procedure is actually on the table.
                            </p>

                            <h3 className="text-lg md:text-xl font-bold text-gray-900 pt-4">Where to come</h3>
                            <p>
                                Consultations run at {CLINIC.name}, {CLINIC.shortLocality} — the easier option from Electronic City, Bommasandra, Chandapura, Anekal and Hosur Road — and at {HSR_CLINIC.name}, {HSR_CLINIC.shortLocality}, which suits Koramangala, BTM Layout, Bellandur and Sarjapur Road. Bring any previous MRI or X-ray films, the reports, and a list of the medication you have already tried, including how long you took it for.
                            </p>
                        </div>
                    </FadeIn>
                </div>
            </section>

            <LandingFaq
                pageName="Slip Disc Treatment in Bangalore"
                pagePath="/slip-disc-treatment-bangalore"
                aboutCondition="Lumbar disc herniation"
                subheading="Straight answers about slipped discs, sciatica and disc surgery from Dr. Nitin N Sunku."
                items={[
                    {
                        q: "Can a slipped disc heal without surgery?",
                        a: "Yes — around nine out of ten lumbar disc herniations improve without an operation. Over weeks to months the body reabsorbs much of the displaced disc material and the irritated nerve settles, particularly when load is managed and structured physiotherapy is done properly. Surgery is reserved for red flags such as progressive weakness or cauda equina signs, and for the minority whose symptoms plateau despite a genuine conservative trial.",
                    },
                    {
                        q: "How long does a slipped disc take to get better?",
                        a: "Most people notice meaningful improvement between six and twelve weeks, with the first one to two weeks usually being the worst. Leg pain typically retreats upward towards the buttock before it disappears, and residual tingling can outlast the pain by several months. These are ranges, not promises — recovery is not linear and two people with identical MRIs can follow very different curves.",
                    },
                    {
                        q: "What does an L4-L5 disc bulge mean on my MRI?",
                        a: "It means the disc between the fourth and fifth lumbar vertebrae extends slightly beyond its normal boundary — which is one of the most common findings in adult spine imaging, including in people who have never had back pain. A bulge is not the same as a herniation and is not automatically the cause of your symptoms. It only becomes clinically meaningful when your examination points to the same nerve root the scan implicates.",
                    },
                    {
                        q: "Do I need an MRI for a slipped disc?",
                        a: "Not always, and rarely on day one. An MRI is indicated when there is persistent radiating leg pain, a neurological deficit such as weakness or numbness, red-flag symptoms, or when a decision about an injection or surgery has to be made. Scanning every episode of back pain mostly uncovers age-related changes that do not alter the treatment and can make patients more anxious, not less.",
                    },
                    {
                        q: "When is a slipped disc an emergency?",
                        a: "Go to a hospital emergency department immediately if you develop numbness around the saddle area (inner thighs, groin or genital region), new difficulty passing or controlling urine, loss of bowel control, or weakness in both legs that is worsening. These can indicate cauda equina syndrome, which is rare but time-critical. Severe pain alone, with normal bladder and bowel function, is not an emergency.",
                    },
                    {
                        q: "What is the difference between microdiscectomy and endoscopic discectomy?",
                        a: "Both remove the fragment of disc pressing on a nerve; they differ in the access used. A microdiscectomy is done through a small incision using an operating microscope, while an endoscopic discectomy uses an even smaller portal and a camera. Endoscopic techniques generally involve less tissue disruption, but suitability depends on the size, position and type of the herniation — not every disc is a candidate, and the right choice is made case by case.",
                    },
                    {
                        q: "Will an epidural injection cure my slipped disc?",
                        a: "No — an image-guided epidural or nerve root block does not remove the disc fragment or repair the disc. What it can do is place anti-inflammatory medication precisely around the irritated nerve root, reducing pain enough for rehabilitation to continue. Relief varies between patients and is not permanent by design; it is a targeted step between physiotherapy and surgery rather than a cure.",
                    },
                    {
                        q: "Why does my back pain go down my leg?",
                        a: "Because a disc fragment or narrowed space is irritating a nerve root as it leaves the spine, and that nerve supplies sensation and power to part of the leg — so the brain interprets the signal as coming from the leg itself. This is what sciatica means. However, buttock and leg pain can also come from the sacroiliac joint, deep gluteal muscles, the hip joint or spinal stenosis, which is why a physical examination matters before assuming it is a disc.",
                    },
                    {
                        q: "How much does slip disc treatment cost in Bangalore?",
                        a: "A consultation with Dr. Nitin N Sunku is typically in the region of ₹500 to ₹1,000, including examination and a written treatment plan. Surgical costs vary too widely to quote meaningfully in advance — they depend on the procedure, implants or consumables, room category, length of stay and your insurance terms. A written estimate is provided by the hospital team once a specific procedure has actually been recommended.",
                    },
                    {
                        q: "Where can I see a slipped disc specialist in Bangalore?",
                        a: "Dr. Nitin N Sunku consults at Raghava Multispeciality Hospital, Attibele (Mon–Sat, 10 AM–6 PM), which is convenient for Electronic City, Bommasandra, Chandapura, Anekal and Hosur Road, and at Health Nest Hospital, HSR Layout Sector 2 (Mon–Sat, 10 AM–8 PM) for Koramangala, BTM Layout, Bellandur and Sarjapur Road. Call +91-9980031006 or book through WhatsApp or the form on this page.",
                    },
                ]}
            />

            <FinalCtaStrip
                clinic={CLINIC}
                title="Most Discs Get Better. Find Out If Yours Will."
                subtitle="Bring your MRI — get an honest assessment, not a sales pitch."
            />

            <MobileStickyCTA clinic={CLINIC} />
            <LandingFooter clinic={CLINIC} />
        </main>
    );
}
