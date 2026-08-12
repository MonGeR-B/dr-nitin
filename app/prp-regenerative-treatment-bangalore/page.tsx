import { Metadata } from "next";
import Link from "next/link";
import {
    Phone,
    Award,
    CheckCircle,
    Activity,
    ShieldCheck,
    Hospital,
    Star,
    MessageCircle,
    Calendar,
    ChevronRight,
    Crosshair,
    Dumbbell,
    AlertTriangle,
    Timer,
    Syringe,
    Droplets,
    Microscope,
    Scan,
    Bone,
    PersonStanding,
    Target,
    Footprints,
    Wallet,
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
    title: { absolute: "PRP & Regenerative Treatment in Bangalore | Dr. Nitin N Sunku" },
    description:
        "PRP, GFC and other regenerative injections for knee, shoulder, hip, elbow and tendon pain — with an honest account of what the evidence shows. Attibele & HSR Layout, Bengaluru.",
    alternates: { canonical: `${siteOrigin}/prp-regenerative-treatment-bangalore` },
    keywords: [
        "PRP injection cost Bangalore",
        "PRP treatment for knee Bangalore",
        "regenerative orthopedics Bangalore",
        "GFC injection Bangalore",
        "PRP injection for shoulder Bangalore",
        "PRP for tennis elbow Bangalore",
        "stem cell treatment for knee pain Bangalore",
        "platelet rich plasma doctor Bangalore",
        "growth factor concentrate injection Bengaluru",
        "PRP doctor Attibele",
        "PRP injection HSR Layout",
    ],
    openGraph: {
        title: "PRP & Regenerative Treatment in Bangalore — Dr. Nitin N Sunku",
        description:
            "Platelet-rich plasma, GFC, viscosupplementation and BMAC compared honestly — for knee, shoulder, hip, elbow and tendon problems. Attibele & HSR Layout.",
        url: `${siteOrigin}/prp-regenerative-treatment-bangalore`,
        type: "website",
    },
    robots: { index: true, follow: true },
};

const CLINIC = PRIMARY_CLINIC;
const PHONE = CLINIC.phone;
const PHONE_DIGITS = CLINIC.phoneDigits;
const WHATSAPP_MESSAGE =
    "Hi Dr. Nitin, I would like to know whether PRP or a regenerative injection is suitable for my joint pain.";

const conditions = [
    { title: "Knee Osteoarthritis (Early to Moderate)", Icon: Bone },
    { title: "Tennis Elbow & Golfer’s Elbow", Icon: Dumbbell },
    { title: "Rotator Cuff & Shoulder Tendinopathy", Icon: Activity },
    { title: "Plantar Fasciitis & Achilles Tendinopathy", Icon: Footprints },
    { title: "Hip Osteoarthritis & Gluteal Tendinopathy", Icon: PersonStanding },
    { title: "Patellar Tendinopathy (Jumper’s Knee)", Icon: Target },
    { title: "Early Cartilage & Meniscal Degeneration", Icon: Scan },
    { title: "Sports Soft-Tissue Injuries", Icon: ShieldCheck },
];

const modalities = [
    {
        name: "PRP (Platelet-Rich Plasma)",
        what:
            "Your own blood, drawn on the day and spun in a centrifuge so the platelets are concentrated. Platelets carry the growth factors involved in normal tissue repair, and the concentrate is injected into the joint or around the tendon.",
        suited:
            "Early to moderate knee osteoarthritis; chronic tendinopathy at the elbow, patellar tendon, gluteal tendons and plantar fascia; some partial rotator cuff problems.",
        course:
            "Commonly one to three injections, two to four weeks apart, with a proper reassessment at around three months rather than after each shot.",
        limit:
            "Preparation varies enormously between clinics, so published trial results are not directly comparable to whatever your local lab produces. Benefit in bone-on-bone arthritis is small at best.",
    },
    {
        name: "GFC (Growth Factor Concentrate)",
        what:
            "A refinement of PRP. The platelets are deliberately activated and the released growth factors are separated out, giving a largely cell-free preparation with a more standardised growth-factor dose and fewer red and white cells.",
        suited:
            "Broadly the same indications as PRP — early to moderate osteoarthritis and chronic tendinopathy — and often preferred where a more reproducible preparation is wanted.",
        course:
            "Usually one to two injections per joint, spaced a few weeks apart, again reviewed at about three months.",
        limit:
            "Newer than PRP with a smaller published evidence base, and it costs more per session. It has not been shown to be clearly superior to a well-prepared PRP in head-to-head terms.",
    },
    {
        name: "Hyaluronic Acid (Viscosupplementation)",
        what:
            "A gel-like lubricant chemically similar to the joint’s own synovial fluid. It improves lubrication and shock absorption inside the joint. It is a symptom-modifying injection, not a regenerative one.",
        suited:
            "Mild to moderate knee osteoarthritis, particularly where stiffness, friction and grinding dominate rather than swelling; sometimes used at the hip and shoulder.",
        course:
            "Either a single higher-molecular-weight injection or a course of three weekly injections, repeatable roughly every six to twelve months if it helped.",
        limit:
            "The effect is temporary and symptomatic — it does not slow the arthritis. International guidelines remain divided on how much it adds, and it works less well in advanced disease.",
    },
    {
        name: "BMAC / Bone-Marrow Concentrate",
        what:
            "Bone marrow aspirated from the pelvis, then concentrated to yield a mix of marrow cells, platelets and growth factors. This is what most clinics are actually referring to when they advertise “stem cell therapy” for joints.",
        suited:
            "Carefully selected patients with moderate arthritis or a focal cartilage lesion, usually after simpler measures and simpler injections have already been tried.",
        course:
            "Normally a single procedure, done as a day-care procedure with the harvest and the injection at the same sitting.",
        limit:
            "The most invasive and most expensive option here, with the smallest evidence base of the group. It does not rebuild a worn-out joint, whatever the marketing suggests.",
    },
    {
        name: "Corticosteroid",
        what:
            "A potent anti-inflammatory drug injected into the joint, bursa or tendon sheath. It suppresses inflammation quickly. It is not regenerative and makes no attempt to be — it is included here because it is the option everything else gets compared against.",
        suited:
            "Short-term control of an acutely inflamed, very painful joint or bursa — typically to settle a flare enough that rehabilitation can actually begin.",
        course:
            "A single injection, repeated only sparingly and with spacing — generally not more than about three a year in one joint.",
        limit:
            "Relief usually lasts weeks to a few months. Repeated doses can be harmful to cartilage and can weaken tendon, and it is never injected into the body of a load-bearing tendon such as the Achilles.",
    },
];

const treatmentLadder = [
    {
        step: "1",
        title: "Establish the Diagnosis First",
        description:
            "An injection is only as good as the diagnosis behind it. Knee pain from early arthritis, a degenerate meniscus, a patellar tendinopathy and referred hip pain all feel similar to the patient and need entirely different plans. Examination comes first, with imaging where it will genuinely change the decision.",
    },
    {
        step: "2",
        title: "Load Management and Strengthening",
        description:
            "Weight, activity modification and a structured strengthening programme are the foundation, and they are started before any injection is booked. Injections work considerably better in a joint that is being loaded sensibly and in a limb whose muscles are being trained — and some patients improve enough that no injection is needed.",
    },
    {
        step: "3",
        title: "A Targeted Injection, Where It Is Justified",
        description:
            "If a regenerative injection is appropriate, the modality is chosen for your specific problem, placed under ultrasound guidance where accuracy matters, and followed by a defined rehabilitation plan and a review date. If it is not appropriate, you are told that plainly rather than sold a course.",
    },
];

const sellingPoints = [
    {
        Icon: Crosshair,
        title: "Diagnosis Before Injection",
        description:
            "Regenerative injections are a treatment, not a screening test. You are examined properly and told what is actually wrong before anything is offered — including, quite often, that an injection is not the right answer for your joint.",
    },
    {
        Icon: Award,
        title: "Orthopedic, Arthroscopy & Sports Medicine",
        description:
            "Dr. Nitin N Sunku is a fellowship-trained orthopedic and sports medicine surgeon with a background in arthroscopic surgery, and team doctor for Bengaluru FC. Injections are judged against the surgical alternatives by someone who performs both.",
    },
    {
        Icon: Microscope,
        title: "Preparation and Protocol Matter",
        description:
            "PRP is not one product. Platelet dose, white-cell content, spin protocol and volume all differ between preparations, and those differences are a large part of why results differ. What is being used and why is explained to you.",
    },
    {
        Icon: Scan,
        title: "Ultrasound-Guided Where It Counts",
        description:
            "Blind injections around the shoulder, hip and small tendons miss the intended target more often than most patients realise. Where accuracy changes the outcome, the injection is placed under direct ultrasound vision.",
    },
    {
        Icon: Dumbbell,
        title: "Rehabilitation Built Into the Plan",
        description:
            "An injection buys a window in which the joint or tendon tolerates loading better. That window is wasted without a programme. You leave with a written, staged plan and a date to be reviewed.",
    },
    {
        Icon: Hospital,
        title: "Two Bengaluru Locations",
        description:
            "Consult at Raghava Multispeciality Hospital, Attibele, or Health Nest Hospital, HSR Layout Sector 2 — whichever is the easier drive for you.",
    },
];

const costDrivers = [
    "How many sessions your problem actually needs — a single tendon injection and a three-session knee course are very different propositions.",
    "Whether one joint or several are being treated in the same sitting.",
    "Which preparation is used — PRP, GFC and BMAC differ substantially in consumable cost, with BMAC the most expensive by a clear margin.",
    "Whether ultrasound guidance is required, which adds to the procedure cost but materially improves accuracy at the shoulder, hip and small tendons.",
    "Whether it can be done in the clinic’s procedure room or needs a day-care admission, as bone-marrow harvest does.",
];

export default function PrpRegenerativeTreatmentBangalorePage() {
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
                                    <Syringe className="w-3.5 h-3.5" />
                                    Regenerative Orthopedics — Knee, Shoulder, Hip &amp; Tendon
                                </span>

                                <h1 className="text-[2.5rem] sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-gray-900 leading-[1.05] tracking-tight mb-4 break-words">
                                    <span className="block">PRP &amp; Regenerative Treatment{" "}</span>
                                    <span className="block bg-gradient-to-r from-blue-700 via-blue-600 to-indigo-600 bg-clip-text text-transparent pb-1">
                                        in Bangalore
                                    </span>
                                </h1>

                                <p className="text-lg sm:text-xl md:text-2xl text-blue-800 font-semibold mb-4">
                                    Dr. Nitin N Sunku — Orthopedic &amp; Sports Medicine Specialist
                                </p>
                                <p className="text-base sm:text-lg text-gray-600 mb-6 max-w-xl leading-relaxed">
                                    Platelet-rich plasma, GFC, viscosupplementation and bone-marrow concentrate — for knees, shoulders, hips, elbows and stubborn tendons. Used where the evidence supports them, explained honestly where it does not, and never sold as a substitute for a proper diagnosis.
                                </p>

                                <div className="flex flex-wrap gap-2 mb-7">
                                    <span className="inline-flex items-center gap-1.5 bg-white/90 backdrop-blur border border-gray-200 rounded-full px-3 py-1.5 text-xs sm:text-sm font-medium text-gray-800 shadow-sm">
                                        <CheckCircle className="w-3.5 h-3.5 text-emerald-600" />
                                        PRP, GFC &amp; Guided Injections
                                    </span>
                                    <span className="inline-flex items-center gap-1.5 bg-white/90 backdrop-blur border border-gray-200 rounded-full px-3 py-1.5 text-xs sm:text-sm font-medium text-gray-800 shadow-sm">
                                        <CheckCircle className="w-3.5 h-3.5 text-emerald-600" />
                                        Told If It Will Not Help
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
                                        metadata={{ cta_type: "form_scroll", condition: "prp-regenerative-treatment" }}
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
                            <HeroImage alt="Dr. Nitin N Sunku — PRP and Regenerative Orthopedic Treatment in Bangalore" />
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
                                — Where Regenerative Injections Are Used —
                            </span>
                            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-3 break-words">
                                Not Just Knees —{" "}
                                <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                                    Every Joint and Tendon
                                </span>
                            </h2>
                            <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
                                The evidence is not identical across these conditions, and it is stronger for some than others. Each is discussed on its own merits.
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

            {/* ============= MODALITY COMPARISON TABLE (unique content) ============= */}
            <section className="bg-white py-14 md:py-20 overflow-hidden">
                <div className="container mx-auto px-4 max-w-6xl">
                    <FadeIn>
                        <div className="text-center mb-10 md:mb-12">
                            <span className="inline-block text-xs font-bold text-blue-700 uppercase tracking-widest mb-3">
                                — Compare the Options —
                            </span>
                            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-3 break-words">
                                PRP, GFC, Hyaluronic Acid, BMAC and{" "}
                                <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                                    Steroid
                                </span>
                            </h2>
                            <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto">
                                Five injections, five different jobs. The honest limitation column is the one worth reading first — every one of these has a real ceiling, and knowing it before you start is what keeps expectations sensible.
                            </p>
                        </div>
                    </FadeIn>

                    <FadeIn delay={0.1}>
                        <div className="overflow-x-auto rounded-2xl border border-gray-200 shadow-sm">
                            <table className="w-full min-w-[860px] text-left border-collapse">
                                <thead>
                                    <tr className="bg-blue-50">
                                        <th className="px-4 py-3 md:px-5 md:py-4 text-xs md:text-sm font-bold text-blue-900 uppercase tracking-wide w-[16%]">
                                            Injection
                                        </th>
                                        <th className="px-4 py-3 md:px-5 md:py-4 text-xs md:text-sm font-bold text-blue-900 uppercase tracking-wide w-[26%]">
                                            What it is
                                        </th>
                                        <th className="px-4 py-3 md:px-5 md:py-4 text-xs md:text-sm font-bold text-blue-900 uppercase tracking-wide w-[20%]">
                                            Best suited to
                                        </th>
                                        <th className="px-4 py-3 md:px-5 md:py-4 text-xs md:text-sm font-bold text-blue-900 uppercase tracking-wide w-[18%]">
                                            Typical course
                                        </th>
                                        <th className="px-4 py-3 md:px-5 md:py-4 text-xs md:text-sm font-bold text-blue-900 uppercase tracking-wide w-[20%]">
                                            Honest limitation
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {modalities.map(({ name, what, suited, course, limit }, idx) => (
                                        <tr
                                            key={name}
                                            className={idx % 2 === 1 ? "bg-gray-50/70" : "bg-white"}
                                        >
                                            <td className="px-4 py-3 md:px-5 md:py-4 text-sm md:text-base font-semibold text-gray-900 align-top border-t border-gray-100">
                                                {name}
                                            </td>
                                            <td className="px-4 py-3 md:px-5 md:py-4 text-sm text-gray-600 align-top border-t border-gray-100 leading-relaxed">
                                                {what}
                                            </td>
                                            <td className="px-4 py-3 md:px-5 md:py-4 text-sm text-gray-600 align-top border-t border-gray-100 leading-relaxed">
                                                {suited}
                                            </td>
                                            <td className="px-4 py-3 md:px-5 md:py-4 text-sm text-gray-600 align-top border-t border-gray-100 leading-relaxed">
                                                {course}
                                            </td>
                                            <td className="px-4 py-3 md:px-5 md:py-4 text-sm text-gray-600 align-top border-t border-gray-100 leading-relaxed">
                                                {limit}
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
                                If your problem is specifically the knee, there are dedicated pages that go far deeper than this one:{" "}
                                <Link href="/treatments/gfc-treatment-knee-pain" className="text-blue-700 font-semibold hover:text-blue-900 underline underline-offset-2">
                                    GFC treatment for knee pain
                                </Link>
                                ,{" "}
                                <Link href="/treatments/hyaluronic-acid-injection-treatment" className="text-blue-700 font-semibold hover:text-blue-900 underline underline-offset-2">
                                    hyaluronic acid injections
                                </Link>
                                , and the wider view of{" "}
                                <Link href="/treatments/non-surgical-knee-pain-treatment" className="text-blue-700 font-semibold hover:text-blue-900 underline underline-offset-2">
                                    non-surgical knee pain treatment
                                </Link>
                                . For a direct comparison of the two most commonly offered options, read{" "}
                                <Link href="/blog/prp-vs-gfc-for-knee-pain" className="text-blue-700 font-semibold hover:text-blue-900 underline underline-offset-2">
                                    PRP versus GFC for knee pain
                                </Link>
                                , and for the argument most patients are really asking about,{" "}
                                <Link href="/blog/steroid-injection-vs-prp-for-joint-pain" className="text-blue-700 font-semibold hover:text-blue-900 underline underline-offset-2">
                                    steroid injection versus PRP
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
                                — How This Is Approached —
                            </span>
                            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-3 break-words">
                                Diagnosis, Then{" "}
                                <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                                    Load
                                </span>
                                , Then the Injection
                            </h2>
                            <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
                                An injection is a step in a plan, not the plan itself. Given on its own, it usually disappoints.
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
                                Regenerative Care Without the{" "}
                                <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                                    Overselling
                                </span>
                            </h2>
                            <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
                                Six reasons patients across Bengaluru come here for a second opinion on injections they have already been offered elsewhere.
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

            {/* ============= HONEST EXPECTATIONS (unique content) ============= */}
            <section className="py-14 md:py-20 bg-gradient-to-br from-blue-700 via-blue-800 to-indigo-800 text-white relative overflow-hidden">
                <div aria-hidden className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(circle at 2px 2px, white 1px, transparent 0)", backgroundSize: "32px 32px" }}></div>
                <div className="container mx-auto px-4 max-w-6xl relative z-10">
                    <FadeIn>
                        <div className="grid lg:grid-cols-5 gap-10 items-center">
                            <div className="lg:col-span-3">
                                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-5 leading-tight">
                                    What Regenerative Injections Can and Cannot Do
                                </h2>
                                <p className="text-base md:text-lg text-blue-100 leading-relaxed mb-4">
                                    Start with the part most clinics leave out. Regenerative injections are not a cure for advanced arthritis. If the X-ray shows bone touching bone, the cartilage that would have responded is largely gone, and no injection of blood products, growth factors or marrow concentrate is going to bring it back. Offering a three-session PRP course to a knee in that state is, at best, an expensive delay.
                                </p>
                                <p className="text-base md:text-lg text-blue-100 leading-relaxed mb-4">
                                    Where the evidence is genuinely more encouraging is early and moderate osteoarthritis, and chronic tendinopathy that has failed a proper loading programme. Even there, the honest summary is that PRP tends to outperform placebo and hyaluronic acid on pain and function in several good-quality trials, that the effect is measured in months rather than permanently, and that a meaningful minority of patients get little or nothing. Any clinic quoting you a single success percentage is quoting a number the literature does not actually support.
                                </p>
                                <p className="text-base md:text-lg text-blue-100 leading-relaxed mb-4">
                                    The other reason results vary so much is preparation. PRP is not a standardised drug. The platelet concentration, the white-cell content, the spin protocol, the volume injected and whether the platelets are activated all differ between systems — and two clinics using the word &ldquo;PRP&rdquo; may be injecting products that differ several-fold in potency. This is the single biggest reason published trial results and local experience diverge, and it is a fair question to ask before you consent.
                                </p>
                                <p className="text-base md:text-lg text-blue-100 leading-relaxed mb-5">
                                    Finally, the plainest test of whether you are being told the truth: anyone promising that an injection will regrow your cartilage is overselling. There is no injection available today, anywhere, that reliably regenerates lost articular cartilage in an arthritic human joint. What these treatments can realistically offer is reduced pain, better function and a slower, more comfortable road — which is worth having, and worth being accurate about.
                                </p>
                                <div className="inline-flex items-center gap-2 bg-white/15 backdrop-blur border border-white/20 rounded-full px-5 py-2.5 text-sm font-semibold">
                                    <Timer className="w-4 h-4" />
                                    Realistic goal: months of better function, not a new joint.
                                </div>
                            </div>

                            <div className="lg:col-span-2">
                                <div className="bg-white/10 backdrop-blur border border-white/20 rounded-3xl p-7 md:p-8 text-center">
                                    <ShieldCheck className="w-12 h-12 mx-auto mb-4 text-blue-200" />
                                    <p className="text-2xl md:text-3xl font-bold leading-tight mb-2">Stronger Early Than Late</p>
                                    <p className="text-base text-blue-100 leading-relaxed">
                                        The earlier the arthritis, the better the odds. That is the one pattern the evidence agrees on across almost every study.
                                    </p>
                                    <div className="mt-6 pt-6 border-t border-white/20 grid grid-cols-3 gap-3 text-center">
                                        <div>
                                            <p className="text-2xl font-bold">Early</p>
                                            <p className="text-[11px] text-blue-200 uppercase tracking-wider mt-1">Best Response</p>
                                        </div>
                                        <div>
                                            <p className="text-2xl font-bold">Mid</p>
                                            <p className="text-[11px] text-blue-200 uppercase tracking-wider mt-1">Worth Trying</p>
                                        </div>
                                        <div>
                                            <p className="text-2xl font-bold">Late</p>
                                            <p className="text-[11px] text-blue-200 uppercase tracking-wider mt-1">Look Elsewhere</p>
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
                                    Find Out Whether You Are Actually a Candidate
                                </h2>
                                <p className="text-base md:text-lg text-blue-100 max-w-md mx-auto">
                                    The team will call you back within hours to confirm your slot at Attibele or HSR Layout.
                                </p>
                            </div>
                        </FadeIn>

                        <FadeIn delay={0.1}>
                            <div className="bg-white rounded-3xl shadow-2xl p-6 md:p-10 border border-white/50">
                                <BookingForm source="prp-regenerative-treatment-bangalore" />
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
                subheading="Assessment, ultrasound-guided injections and rehabilitation planning — at whichever clinic suits you."
            />

            {/* ============= LONG-FORM EDUCATIONAL SECTION (unique to this page) ============= */}
            <section className="bg-gradient-to-br from-gray-50 via-blue-50/30 to-white py-14 md:py-20 overflow-hidden">
                <div className="container mx-auto px-4 max-w-3xl">
                    <FadeIn>
                        <div className="mb-8">
                            <span className="inline-block text-xs font-bold text-blue-700 uppercase tracking-widest mb-3">
                                — Regenerative Orthopedics Explained —
                            </span>
                            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-900 leading-tight break-words">
                                PRP and Regenerative Injections: What They Are, What They Do, and Who They Suit
                            </h2>
                        </div>
                    </FadeIn>

                    <FadeIn delay={0.1}>
                        <div className="space-y-4 text-base md:text-lg text-gray-700 leading-relaxed">
                            <h3 className="text-lg md:text-xl font-bold text-gray-900 pt-2 flex items-center gap-2">
                                <Droplets className="w-5 h-5 text-blue-600 flex-shrink-0" />
                                What PRP actually is, and how it is prepared
                            </h3>
                            <p>
                                Platelet-rich plasma is made from your own blood. On the day of the procedure, a quantity of whole blood is drawn from a vein in your arm, exactly as it would be for a blood test — usually somewhere between 15 and 60 ml depending on how much concentrate is needed. That blood goes into a centrifuge, which spins it fast enough to separate it by density into three layers: red cells at the bottom, a thin buffy coat containing platelets and white cells in the middle, and plasma on top. The platelet-rich fraction is drawn off, sometimes spun a second time to concentrate it further, and injected into the target joint or around the target tendon.
                            </p>
                            <p>
                                The rationale is straightforward. Platelets are the body&apos;s first responders to tissue injury, and they carry granules packed with growth factors — PDGF, TGF-beta, VEGF, IGF and others — that signal cells to migrate, multiply and lay down new matrix. Concentrating those platelets and delivering them directly into a degenerate joint or a failing tendon is an attempt to restart a repair response that has stalled. Because the material comes from you, there is no risk of transfusion reaction or transmitted infection from a donor, which is one of the genuine attractions of the technique.
                            </p>

                            <h3 className="text-lg md:text-xl font-bold text-gray-900 pt-4 flex items-center gap-2">
                                <Microscope className="w-5 h-5 text-blue-600 flex-shrink-0" />
                                Why the preparation protocol matters more than the label
                            </h3>
                            <p>
                                This is the part that is almost never explained, and it is the reason two patients can have &ldquo;the same&rdquo; treatment with entirely different results. PRP is not a drug with a fixed formulation. The final product depends on how much blood was drawn, the centrifuge speed and duration, whether one spin or two were used, the final volume injected, and critically whether white cells were included or excluded. Leucocyte-poor preparations are generally preferred inside an arthritic joint, because white cells contribute inflammatory mediators that can aggravate the synovium; leucocyte-rich preparations have been argued for in some tendon applications. Platelet concentration itself varies several-fold between commercial kits and between hand-spun protocols.
                            </p>
                            <p>
                                The practical consequence is that when a study reports a benefit, that finding applies to the specific preparation that study used. It does not automatically transfer to the syringe you are being offered. It is entirely reasonable to ask what system is being used, whether it is leucocyte-poor or leucocyte-rich, and what volume will be injected. A clinic that cannot answer those questions is not necessarily doing anything wrong, but it is not in a position to tell you what to expect either. This is also the honest reason why{" "}
                                <Link href="/treatments/gfc-treatment-knee-pain" className="text-blue-700 font-semibold hover:text-blue-900 underline underline-offset-2">
                                    GFC
                                </Link>{" "}
                                exists at all: by activating the platelets and separating the released growth factors, it produces a more consistent preparation from one patient to the next, which is a real advantage even if the clinical superiority is not yet proven.
                            </p>

                            <h3 className="text-lg md:text-xl font-bold text-gray-900 pt-4">
                                What the evidence genuinely shows, joint by joint
                            </h3>
                            <p>
                                <strong>Knee osteoarthritis.</strong> This is where the largest body of evidence sits. Multiple randomised trials and meta-analyses show PRP improving pain and function compared with saline and, in many comparisons, compared with hyaluronic acid, with benefits typically sustained for six to twelve months. The effect is consistently larger in mild to moderate radiographic arthritis than in severe. Some high-quality trials have been negative, so the picture is not unanimous. If the knee is your problem, the fuller discussion lives on the{" "}
                                <Link href="/treatments/non-surgical-knee-pain-treatment" className="text-blue-700 font-semibold hover:text-blue-900 underline underline-offset-2">
                                    non-surgical knee pain
                                </Link>{" "}
                                and{" "}
                                <Link href="/knee-pain-bangalore" className="text-blue-700 font-semibold hover:text-blue-900 underline underline-offset-2">
                                    knee pain
                                </Link>{" "}
                                pages.
                            </p>
                            <p>
                                <strong>Tennis and golfer&apos;s elbow.</strong> Chronic lateral and medial epicondylar tendinopathy is one of the better indications. Trials comparing PRP with corticosteroid consistently show steroid winning in the first six weeks and losing by six to twelve months, which fits what is understood about steroid weakening tendon over time. PRP is a reasonable option here after a genuine trial of eccentric loading has failed — the principles of which are set out in the guide to{" "}
                                <Link href="/blog/tendinopathy-treatment-non-surgical-care" className="text-blue-700 font-semibold hover:text-blue-900 underline underline-offset-2">
                                    non-surgical tendinopathy care
                                </Link>
                                .
                            </p>
                            <p>
                                <strong>Shoulder.</strong> Rotator cuff tendinopathy and partial-thickness tears show modest, mixed results. PRP does not repair a full-thickness rotator cuff tear and should not be offered as an alternative to surgery when a repairable tear is the problem. Accuracy of placement matters more at the shoulder than almost anywhere else, which is covered in{" "}
                                <Link href="/blog/shoulder-pain-injections-precision-care" className="text-blue-700 font-semibold hover:text-blue-900 underline underline-offset-2">
                                    precision injection care for shoulder pain
                                </Link>
                                , alongside the broader{" "}
                                <Link href="/shoulder-pain-bangalore" className="text-blue-700 font-semibold hover:text-blue-900 underline underline-offset-2">
                                    shoulder pain
                                </Link>{" "}
                                assessment pathway.
                            </p>
                            <p>
                                <strong>Hip.</strong> The evidence for intra-articular PRP in hip osteoarthritis is thinner than for the knee and the results are more equivocal. Gluteal tendinopathy — the very common cause of pain on the outer hip that is often mislabelled &ldquo;trochanteric bursitis&rdquo; — responds better, and there is decent trial evidence favouring PRP over steroid at twelve months. The wider workup is on the{" "}
                                <Link href="/hip-pain-bangalore" className="text-blue-700 font-semibold hover:text-blue-900 underline underline-offset-2">
                                    hip pain
                                </Link>{" "}
                                page.
                            </p>
                            <p>
                                <strong>Foot and ankle.</strong> Plantar fasciitis and Achilles tendinopathy are both treated with PRP in practice. The evidence for plantar fasciitis is reasonable and favours PRP over steroid in the medium term; for mid-portion Achilles tendinopathy the trials are genuinely mixed, and a properly executed heavy slow resistance programme remains the treatment with the best track record. That distinction is worth reading in full on the{" "}
                                <Link href="/foot-ankle-pain-bangalore" className="text-blue-700 font-semibold hover:text-blue-900 underline underline-offset-2">
                                    foot and ankle pain
                                </Link>{" "}
                                page.
                            </p>
                            <p>
                                <strong>Bone-marrow concentrate.</strong> BMAC, routinely marketed as stem cell therapy, sits at the frontier rather than in the mainstream. Early results in selected patients are encouraging, the procedure is more invasive, the cost is substantially higher, and the trial evidence is not yet at the level that would justify recommending it ahead of simpler options. There is a fuller, plainer discussion in{" "}
                                <Link href="/blog/bmac-stem-cell-therapy-for-knee-pain" className="text-blue-700 font-semibold hover:text-blue-900 underline underline-offset-2">
                                    BMAC and stem cell therapy for knee pain
                                </Link>
                                .
                            </p>

                            <h3 className="text-lg md:text-xl font-bold text-gray-900 pt-4 flex items-center gap-2">
                                <Scan className="w-5 h-5 text-blue-600 flex-shrink-0" />
                                Why ultrasound guidance changes the accuracy
                            </h3>
                            <p>
                                An injection that misses its target cannot work, however good the preparation. Studies of blind, landmark-guided injections have repeatedly found accuracy rates that surprise people: reliable for a large, easily palpated knee, considerably less so for the shoulder, hip, small tendons and bursae. Ultrasound puts the needle tip on the screen in real time, confirms the target, avoids the vessels and nerves nearby, and shows the injectate spreading where it was intended. For a hip joint or a gluteal tendon it is not a refinement, it is a requirement. The technique and its indications are set out on the{" "}
                                <Link href="/treatments/ultrasound-guided-orthopedic-injections" className="text-blue-700 font-semibold hover:text-blue-900 underline underline-offset-2">
                                    ultrasound-guided orthopedic injections
                                </Link>{" "}
                                page.
                            </p>

                            <h3 className="text-lg md:text-xl font-bold text-gray-900 pt-4">
                                Who is a poor candidate
                            </h3>
                            <p>
                                Being told you are not suitable is a useful outcome of the consultation, not a failure of it. Regenerative injections are generally unsuitable or need careful reconsideration in the following situations:
                            </p>
                            <ul className="space-y-2.5 pl-1">
                                {[
                                    "Advanced, bone-on-bone arthritis where the joint space has largely disappeared — the biology being targeted is no longer there, and the discussion should be about joint preservation surgery or replacement instead.",
                                    "Any active infection, whether in the joint itself or a skin infection over the injection site, and any current systemic illness with fever.",
                                    "Poorly controlled diabetes, where healing is impaired and infection risk is higher — sugars should be brought under control first rather than the injection simply being refused.",
                                    "Blood disorders affecting platelet number or function, significant anaemia, and active malignancy — all of which need specialist input before anything is considered.",
                                    "Patients on anticoagulants, and those taking regular anti-inflammatory tablets, which are usually stopped for a period around the injection because they blunt the very response being provoked. Recent corticosteroid injection into the same site is also a reason to wait.",
                                    "Anyone whose expectation is that the injection will replace weight management, activity modification and strengthening rather than support them.",
                                ].map((item) => (
                                    <li key={item} className="flex gap-3">
                                        <span aria-hidden className="mt-2.5 w-1.5 h-1.5 rounded-full bg-blue-500 flex-shrink-0" />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>

                            <h3 className="text-lg md:text-xl font-bold text-gray-900 pt-4">
                                What a session actually involves
                            </h3>
                            <p>
                                Most people are more anxious about the procedure than it warrants. You attend for a normal outpatient appointment, well hydrated and having eaten. Blood is drawn from your arm and processed in the clinic while you wait — usually fifteen to thirty minutes in the centrifuge. The skin over the target is cleaned thoroughly and local anaesthetic is used. The injection itself, whether into a knee, a shoulder or around a tendon, takes a minute or two. Ultrasound is used where the target requires it. You rest briefly afterwards, and you go home the same morning. The whole visit typically runs to about an hour.
                            </p>
                            <p>
                                A bone-marrow harvest for BMAC is a different proposition: it is done as a day-care procedure with the marrow taken from the pelvis under anaesthesia, and the concentrate injected in the same sitting. That is planned in advance rather than done at a routine consultation.
                            </p>

                            <h3 className="text-lg md:text-xl font-bold text-gray-900 pt-4">
                                Aftercare, and the flare that is normal in the first 48 hours
                            </h3>
                            <p>
                                Expect the treated joint or tendon to be more sore, not less, for the first day or two. This post-injection flare is the expected consequence of deliberately provoking an inflammatory repair response, and it catches out patients who were not warned. Ice and paracetamol are used for it; anti-inflammatory tablets are avoided for roughly one to two weeks afterwards, because suppressing the inflammatory cascade is precisely the opposite of what the treatment is trying to achieve.
                            </p>
                            <p>
                                Relative rest for 48 hours, then a gradual return to normal walking and daily activity. Impact sport, heavy lifting and long runs are held back for around two to six weeks depending on the site. Rehabilitation is restarted deliberately, because the injection creates a window in which the tissue tolerates loading better, and that window is what actually produces the improvement. Meaningful benefit usually appears somewhere between three and six weeks and continues to build to around three months, which is when the treatment should be judged — not at two weeks, when many patients wrongly conclude it has failed. There is a week-by-week account in the guide to{" "}
                                <Link href="/blog/after-regenerative-injection-recovery-timeline" className="text-blue-700 font-semibold hover:text-blue-900 underline underline-offset-2">
                                    recovery after a regenerative injection
                                </Link>
                                .
                            </p>

                            <h3 className="text-lg md:text-xl font-bold text-gray-900 pt-4">
                                Alongside load management and strengthening, not instead of it
                            </h3>
                            <p>
                                No injection changes the mechanics of the limb it is put into. A quadriceps that has wasted stays wasted; a knee carrying excess body weight through a worn compartment still carries it; a tendon that failed because training volume doubled in a month will fail again if the volume doubles again. The injection reduces pain and, at best, nudges the tissue towards repair — the strength, the load management and the weight are what determine whether that gain holds. Patients who treat the injection as the whole treatment are the ones who come back at nine months no better than before. Where the underlying process is arthritis, the same conservative-first framework applies as on the{" "}
                                <Link href="/arthritis-treatment-bangalore" className="text-blue-700 font-semibold hover:text-blue-900 underline underline-offset-2">
                                    arthritis treatment
                                </Link>{" "}
                                page.
                            </p>

                            <h3 className="text-lg md:text-xl font-bold text-gray-900 pt-4 flex items-center gap-2">
                                <Wallet className="w-5 h-5 text-blue-600 flex-shrink-0" />
                                What drives the cost
                            </h3>
                            <p>
                                No figure is quoted on this page, because a number given before an examination is guesswork and tends to be wrong in both directions. What can be set out honestly is what the price actually depends on:
                            </p>
                            <div className="rounded-2xl border border-blue-100 bg-white p-6 md:p-7 shadow-sm">
                                <ul className="space-y-2.5 pl-1">
                                    {costDrivers.map((item) => (
                                        <li key={item} className="flex gap-3 text-sm md:text-base text-gray-700">
                                            <span aria-hidden className="mt-2.5 w-1.5 h-1.5 rounded-full bg-blue-500 flex-shrink-0" />
                                            <span>{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <p>
                                Exact pricing is confirmed after assessment, once it is clear what you need and how many sessions are realistic, and it is given to you before anything is booked. For indicative ranges and the eligibility criteria in plain terms, there is a dedicated write-up on{" "}
                                <Link href="/blog/prp-gfc-injection-cost-eligibility-bangalore" className="text-blue-700 font-semibold hover:text-blue-900 underline underline-offset-2">
                                    PRP and GFC injection cost and eligibility in Bangalore
                                </Link>
                                . One thing to plan for: regenerative injections are usually{" "}
                                <strong>not covered by health insurance in India</strong>{" "}
                                and are treated as a self-pay procedure, because most insurers still classify them as investigational for orthopedic use. That is different from surgery, where cover is common — the{" "}
                                <Link href="/insurance-cashless-orthopedic-treatment" className="text-blue-700 font-semibold hover:text-blue-900 underline underline-offset-2">
                                    insurance and cashless treatment
                                </Link>{" "}
                                page explains how that side works. Always confirm with your own insurer rather than assuming either way.
                            </p>

                            <div className="mt-8 rounded-2xl border-2 border-amber-300 bg-amber-50 p-6 md:p-7">
                                <div className="flex items-start gap-3">
                                    <AlertTriangle className="w-6 h-6 text-amber-600 flex-shrink-0 mt-0.5" />
                                    <div>
                                        <h3 className="font-bold text-amber-900 text-base md:text-lg mb-2">
                                            After any joint injection, these need urgent review
                                        </h3>
                                        <p className="text-sm md:text-base text-amber-900/90 leading-relaxed">
                                            A sore joint for 24 to 48 hours is expected. What is not expected is pain that keeps escalating after the third day, a joint that becomes hot, tensely swollen and too painful to move, fever or chills, or spreading redness and discharge at the injection site. Joint infection after an injection is rare but serious, and it is treated as an emergency — please call the clinic or attend a hospital the same day rather than waiting to see if it settles. Separately, if joint pain is accompanied by unexplained weight loss, night pain that wakes you every night, or a history of cancer, that needs assessment before any injection is considered at all.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </FadeIn>
                </div>
            </section>

            <LandingFaq
                pageName="PRP & Regenerative Treatment in Bangalore"
                pagePath="/prp-regenerative-treatment-bangalore"
                aboutCondition="PRP and regenerative orthopedic treatment"
                subheading="Straight answers about PRP, GFC, BMAC and injection therapy for joint and tendon pain."
                items={[
                    {
                        q: "Does PRP actually work for knee arthritis?",
                        a: "For mild to moderate knee osteoarthritis, yes — with qualifications. Several randomised trials and meta-analyses show PRP improving pain and function compared with saline and, in many comparisons, compared with hyaluronic acid, with benefit typically lasting six to twelve months. Some good-quality trials have been negative, so it is not universal. The effect is consistently stronger in early and moderate arthritis than in advanced disease, and a meaningful minority of patients get little benefit. It is best understood as a treatment that improves symptoms and function for a period, not one that reverses the arthritis.",
                    },
                    {
                        q: "PRP vs GFC — which one is better?",
                        a: "Neither has been proven superior in head-to-head terms. PRP is your concentrated platelets, complete with the cells; GFC activates those platelets and separates out the growth factors, giving a largely cell-free preparation with a more standardised dose. GFC’s advantage is consistency — less variation from patient to patient and batch to batch — and it often needs fewer sessions. PRP has the far larger published evidence base and generally costs less per session. The sensible choice depends on the joint, your history and budget, and is made at the consultation rather than in advance.",
                    },
                    {
                        q: "How many PRP sessions will I need?",
                        a: "For knee osteoarthritis, most protocols use one to three injections spaced two to four weeks apart, and the response is judged at about three months rather than after each individual shot. For tendon problems such as tennis elbow or plantar fasciitis, one or two injections are usual. GFC often needs fewer sessions than PRP. If there has been no worthwhile change three months after a properly placed course, repeating it further is not advisable — the honest step at that point is to reconsider the diagnosis and the alternatives rather than sell more injections.",
                    },
                    {
                        q: "Is PRP painful, and what happens during the session?",
                        a: "Most patients find it comparable to a routine blood test plus a joint injection. Blood is drawn from your arm, spun in a centrifuge in the clinic for fifteen to thirty minutes, and the concentrate is injected after the skin is cleaned and local anaesthetic is given. The injection itself takes a minute or two, and ultrasound guidance is used where accuracy matters. The whole visit takes about an hour and you go home the same day. Expect the treated area to be more sore than usual for the first 24 to 48 hours — that flare is normal and expected.",
                    },
                    {
                        q: "Can PRP regrow cartilage?",
                        a: "No. There is no injection available today — PRP, GFC, BMAC or anything marketed as stem cell therapy — that reliably regrows lost articular cartilage in an arthritic human joint. Anyone promising cartilage regrowth is overselling, and that claim is a reasonable reason to seek another opinion. What these treatments can realistically do is reduce pain, improve function and calm the inflammatory environment inside the joint for a period of months. That is genuinely worth having in the right patient, but it is a different thing from rebuilding the joint surface.",
                    },
                    {
                        q: "Is PRP covered by insurance in India?",
                        a: "Usually not. Most Indian health insurers still classify PRP, GFC and similar regenerative injections as investigational for orthopedic use, so they are ordinarily treated as a self-pay, out-of-pocket procedure and are rarely reimbursed. This differs from planned orthopedic surgery, which comprehensive policies commonly cover. Policies do vary and cover does change over time, so it is worth checking your specific policy wording or calling your insurer directly rather than assuming either way. The cost and what drives it are discussed openly before anything is booked.",
                    },
                    {
                        q: "Who should not have PRP?",
                        a: "PRP is not advised where there is active infection in or near the joint, a systemic illness with fever, poorly controlled diabetes, significant anaemia, a platelet or bleeding disorder, or active cancer. It is also the wrong treatment for advanced bone-on-bone arthritis, where the tissue it targets is largely gone. Patients on anticoagulants need individual assessment, regular anti-inflammatory tablets are usually paused around the procedure, and a recent steroid injection into the same site means waiting. Being told you are unsuitable is a legitimate and useful result of the consultation.",
                    },
                    {
                        q: "How soon will I feel a difference after PRP?",
                        a: "Not immediately, and this is where most disappointment comes from. The first 24 to 48 hours are usually more sore, not less, because the treatment deliberately provokes a repair response. Genuine improvement typically begins somewhere between three and six weeks, builds over the following weeks, and is best assessed at around three months. Judging the result at two weeks is too early. If nothing has changed by three months after a correctly placed injection and a completed rehabilitation programme, the diagnosis and the plan should both be revisited.",
                    },
                    {
                        q: "Should I have a steroid injection or PRP?",
                        a: "It depends on what you need and when. Corticosteroid works faster and is the better option for settling an acutely inflamed, very painful joint or bursa quickly so rehabilitation can start. Its relief typically fades within weeks to a few months, and repeated doses can harm cartilage and weaken tendon. PRP takes longer to work but tends to overtake steroid at six to twelve months, particularly in chronic tendinopathy such as tennis elbow. For a sudden flare, steroid often makes more sense; for a long-standing problem you want to improve rather than mute, PRP usually does.",
                    },
                    {
                        q: "Where can I get PRP treatment in Bangalore?",
                        a: "Dr. Nitin N Sunku consults at Raghava Multispeciality Hospital, Attibele (Mon–Sat, 10 AM–6 PM) and at Health Nest Hospital, HSR Layout Sector 2 (Mon–Sat, 10 AM–8 PM). Attibele is convenient for Anekal, Bommasandra, Chandapura, Hosur Road, Electronic City and Jigani; HSR Layout serves Koramangala, BTM Layout, Bellandur and Sarjapur Road. PRP and GFC are done as outpatient procedures at the clinic; bone-marrow concentrate is planned as a day-care procedure. Call +91-9980031006 or book via WhatsApp or the form on this page.",
                    },
                ]}
            />

            <FinalCtaStrip
                clinic={CLINIC}
                title="Find Out If It Will Actually Help You."
                subtitle="Get an honest assessment of whether a regenerative injection is right for your joint — book today."
            />

            <MobileStickyCTA clinic={CLINIC} />
            <LandingFooter clinic={CLINIC} currentPath="/prp-regenerative-treatment-bangalore" />
        </main>
    );
}
