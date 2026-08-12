import { Metadata } from "next";
import Link from "next/link";
import {
    Phone,
    Award,
    CheckCircle,
    Stethoscope,
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
    Snowflake,
    Moon,
    Syringe,
    Droplet,
    Scan,
    Lock,
    RotateCcw,
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
    title: { absolute: "Frozen Shoulder Treatment in Bangalore | Dr. Nitin N Sunku" },
    description:
        "Frozen shoulder (adhesive capsulitis) treated by stage, not by guesswork — with the diabetes link taken seriously. Attibele & HSR Layout, Bengaluru.",
    alternates: { canonical: `${siteOrigin}/frozen-shoulder-treatment-bangalore` },
    keywords: [
        "frozen shoulder treatment Bangalore",
        "frozen shoulder specialist Bangalore",
        "adhesive capsulitis doctor Bangalore",
        "shoulder stiffness treatment Bangalore",
        "frozen shoulder exercises",
        "frozen shoulder recovery time",
        "frozen shoulder and diabetes",
        "shoulder injection Bangalore",
        "frozen shoulder doctor Attibele",
        "frozen shoulder doctor HSR Layout",
        "cannot lift arm shoulder stiffness doctor",
    ],
    openGraph: {
        title: "Frozen Shoulder Treatment in Bangalore — Dr. Nitin N Sunku",
        description:
            "Adhesive capsulitis diagnosed clinically, treated by stage, and screened for diabetes — because that is what changes the outcome. Attibele & HSR Layout.",
        url: `${siteOrigin}/frozen-shoulder-treatment-bangalore`,
        type: "website",
    },
    robots: { index: true, follow: true },
};

const CLINIC = PRIMARY_CLINIC;
const PHONE = CLINIC.phone;
const PHONE_DIGITS = CLINIC.phoneDigits;
const WHATSAPP_MESSAGE =
    "Hi Dr. Nitin, my shoulder has become stiff and painful and I would like to book an appointment.";

const conditions = [
    { title: "Classic Adhesive Capsulitis (Frozen Shoulder)", Icon: Snowflake },
    { title: "Diabetic Frozen Shoulder", Icon: Droplet },
    { title: "Post-Injury or Post-Surgery Shoulder Stiffness", Icon: Lock },
    { title: "Rotator Cuff Tear Presenting as Stiffness", Icon: Activity },
    { title: "Calcific Tendinitis of the Shoulder", Icon: Crosshair },
    { title: "Shoulder Osteoarthritis", Icon: Hospital },
    { title: "Neck (Cervical Spine) Pain Mimicking Shoulder Pain", Icon: Stethoscope },
    { title: "Shoulder Impingement & Subacromial Bursitis", Icon: ShieldCheck },
];

const stages = [
    {
        stage: "Stage 1 — Freezing (the painful stage)",
        feel:
            "Pain leads and stiffness follows. A deep ache in the shoulder and outer upper arm, sharp catches on sudden movement, and pain that is present even at rest. Night pain is usually the worst part. Range is quietly reducing, but it is the pain you notice.",
        duration: "Commonly about 6 weeks to 9 months",
        helps:
            "Control the pain properly: regular simple analgesia taken to a schedule rather than only when desperate, sleep positioning, activity modification, and gentle movement kept within the pain-free range. This is the stage where an intra-articular corticosteroid injection has its best evidence — ideally image-guided into the joint. Keep the shoulder moving little and often.",
        avoid:
            "Aggressive end-range stretching, forceful “break the adhesions” physiotherapy, and manipulation. Pushing hard into pain now tends to increase pain and irritability and can drag the whole episode out. A sling worn all day is also unhelpful.",
    },
    {
        stage: "Stage 2 — Frozen (the stiff stage)",
        feel:
            "Pain settles noticeably, and stiffness takes over. You cannot reach behind your back, fasten a bra strap or a saree, get to a back pocket, or rotate the hand outwards to take a plate. External rotation is the most restricted movement, and the shoulder feels blocked rather than weak.",
        duration: "Commonly about 4 to 12 months",
        helps:
            "This is where stretching finally earns its keep. A daily, progressive capsular stretching programme worked at end range and held for time, in all directions but especially external rotation, combined with rotator cuff and scapular strengthening. Discomfort during the stretch that settles within a few minutes is acceptable and expected here. Hydrodilatation is considered when a genuine programme has plateaued.",
        avoid:
            "Abandoning the programme because it is uncomfortable, and long spells of complete rest. Under-loading in this stage is what leaves people with permanent restriction. Also avoid switching therapist or treatment every three weeks — progress here is measured monthly, not daily.",
    },
    {
        stage: "Stage 3 — Thawing (the recovering stage)",
        feel:
            "Range returns gradually, often so slowly that you only notice it looking back a month. Pain is minimal except at the very end of movement. Strength and endurance are usually still poor, because the arm has been half-used for the better part of a year.",
        duration: "Commonly about 6 months to 2 years from the first symptom in total",
        helps:
            "Continued end-range stretching to recover the last of the rotation, plus real strengthening at last — rotator cuff, scapular control and progressive loading to rebuild what was lost. Overhead work, gym lifting and sport are reintroduced in graded steps rather than all at once.",
        avoid:
            "Stopping the moment daily tasks are comfortable. That is the single commonest reason people are left permanently short of the last 20 to 30 degrees of external rotation, which they then only notice years later reaching into the back seat of a car.",
    },
];

const treatmentLadder = [
    {
        step: "1",
        title: "Confirm It Is Actually a Frozen Shoulder",
        description:
            "Stiffness is not one diagnosis. A frozen shoulder is identified clinically by loss of passive external rotation — when someone else moves your relaxed arm and it still will not turn out. A cuff tear, calcific tendinitis, shoulder arthritis and referred neck pain all present as a painful, stiff shoulder and need entirely different plans.",
    },
    {
        step: "2",
        title: "Treat the Stage You Are Actually In",
        description:
            "In the painful freezing stage the priority is pain control, sleep and gentle movement, with an early intra-articular steroid injection where it is justified. In the stiff frozen stage the priority is a demanding, progressive end-range stretching programme. Applying the wrong one at the wrong time is why so many shoulders stall.",
    },
    {
        step: "3",
        title: "Escalate Only for a Programme That Has Failed",
        description:
            "Hydrodilatation, manipulation under anaesthesia and arthroscopic capsular release are for the minority who have genuinely completed a proper programme and remain stiff and limited. They are procedures with real risks — particularly manipulation in a diabetic, osteopenic shoulder — not shortcuts for month three.",
    },
];

const sellingPoints = [
    {
        Icon: Crosshair,
        title: "Diagnosis by Examination, Not by Scan",
        description:
            "The finding that makes the diagnosis is loss of passive external rotation, and it takes two minutes to test. Most people arrive having been sent for an MRI that was never going to answer the question.",
    },
    {
        Icon: Droplet,
        title: "The Diabetes Link Taken Seriously",
        description:
            "Frozen shoulder is far commoner, more severe and slower to resolve in people with diabetes. If you have not been tested, a blood sugar and HbA1c is part of the assessment — for some patients the shoulder is how the diabetes is found.",
    },
    {
        Icon: Award,
        title: "Orthopedic, Arthroscopy & Sports Medicine",
        description:
            "Dr. Nitin N Sunku is a fellowship-trained orthopedic and sports medicine surgeon with a background in arthroscopic surgery, and is team doctor for Bengaluru FC. Shoulder problems are assessed within that scope.",
    },
    {
        Icon: Dumbbell,
        title: "A Written, Stage-Matched Programme",
        description:
            "You leave with a plan on paper — which movements, how many, how often, how hard to push in your current stage, and what should be measurably better by when. Not a photocopied exercise sheet.",
    },
    {
        Icon: Timer,
        title: "Honest About the Timeline",
        description:
            "A frozen shoulder is a slow condition. You will be given the realistic range up front, including the possibility of some residual stiffness, rather than being promised a fix in six weeks.",
    },
    {
        Icon: Hospital,
        title: "Two Bengaluru Locations",
        description:
            "Consult at Raghava Multispeciality Hospital, Attibele, or Health Nest Hospital, HSR Layout Sector 2 — whichever is the easier drive for you.",
    },
];

export default function FrozenShoulderTreatmentBangalorePage() {
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
                                    Adhesive Capsulitis — Treated by Stage
                                </span>

                                <h1 className="text-[2.5rem] sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-gray-900 leading-[1.05] tracking-tight mb-4 break-words">
                                    <span className="block">Frozen Shoulder Treatment </span>
                                    <span className="block bg-gradient-to-r from-blue-700 via-blue-600 to-indigo-600 bg-clip-text text-transparent pb-1">
                                        in Bangalore
                                    </span>
                                </h1>

                                <p className="text-lg sm:text-xl md:text-2xl text-blue-800 font-semibold mb-4">
                                    Dr. Nitin N Sunku — Orthopedic &amp; Sports Medicine Specialist
                                </p>
                                <p className="text-base sm:text-lg text-gray-600 mb-6 max-w-xl leading-relaxed">
                                    You cannot reach your back pocket, you cannot fasten anything behind you, and you have not slept properly on that side for weeks. A frozen shoulder passes through three distinct stages — and the treatment that helps in one stage is the treatment that makes it worse in another. Getting the stage right matters more than any scan.
                                </p>

                                <div className="flex flex-wrap gap-2 mb-7">
                                    <span className="inline-flex items-center gap-1.5 bg-white/90 backdrop-blur border border-gray-200 rounded-full px-3 py-1.5 text-xs sm:text-sm font-medium text-gray-800 shadow-sm">
                                        <CheckCircle className="w-3.5 h-3.5 text-emerald-600" />
                                        Diagnosed by Examination
                                    </span>
                                    <span className="inline-flex items-center gap-1.5 bg-white/90 backdrop-blur border border-gray-200 rounded-full px-3 py-1.5 text-xs sm:text-sm font-medium text-gray-800 shadow-sm">
                                        <CheckCircle className="w-3.5 h-3.5 text-emerald-600" />
                                        Diabetes Link Screened
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
                                        metadata={{ cta_type: "form_scroll", condition: "frozen-shoulder" }}
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
                            <HeroImage alt="Dr. Nitin N Sunku — Frozen Shoulder Treatment in Bangalore" />
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
                                — What We Treat &amp; What We Rule Out —
                            </span>
                            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-3 break-words">
                                A Stiff Shoulder Is Not{" "}
                                <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                                    One Diagnosis
                                </span>
                            </h2>
                            <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
                                Several very different problems all arrive at the clinic described as &ldquo;frozen shoulder&rdquo;. The first job is to work out which one you actually have.
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

            {/* ============= THREE-STAGE TABLE (unique content) ============= */}
            <section className="bg-white py-14 md:py-20 overflow-hidden">
                <div className="container mx-auto px-4 max-w-6xl">
                    <FadeIn>
                        <div className="text-center mb-10 md:mb-12">
                            <span className="inline-block text-xs font-bold text-blue-700 uppercase tracking-widest mb-3">
                                — The Three Stages —
                            </span>
                            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-3 break-words">
                                Freezing, Frozen,{" "}
                                <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                                    Thawing
                                </span>
                            </h2>
                            <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto">
                                This is the single most useful thing to understand about a frozen shoulder. The correct treatment is completely different in each stage: hard stretching in the freezing stage tends to make things worse, while in the frozen stage it is exactly what the shoulder needs.
                            </p>
                        </div>
                    </FadeIn>

                    <FadeIn delay={0.1}>
                        <div className="overflow-x-auto rounded-2xl border border-gray-200 shadow-sm">
                            <table className="w-full min-w-[900px] text-left border-collapse">
                                <thead>
                                    <tr className="bg-blue-50">
                                        <th className="px-4 py-3 md:px-5 md:py-4 text-xs md:text-sm font-bold text-blue-900 uppercase tracking-wide w-1/5">
                                            Stage
                                        </th>
                                        <th className="px-4 py-3 md:px-5 md:py-4 text-xs md:text-sm font-bold text-blue-900 uppercase tracking-wide w-1/4">
                                            What it feels like
                                        </th>
                                        <th className="px-4 py-3 md:px-5 md:py-4 text-xs md:text-sm font-bold text-blue-900 uppercase tracking-wide w-1/6">
                                            Roughly how long
                                        </th>
                                        <th className="px-4 py-3 md:px-5 md:py-4 text-xs md:text-sm font-bold text-blue-900 uppercase tracking-wide w-1/4">
                                            What actually helps in this stage
                                        </th>
                                        <th className="px-4 py-3 md:px-5 md:py-4 text-xs md:text-sm font-bold text-blue-900 uppercase tracking-wide w-1/4">
                                            What to avoid in this stage
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {stages.map(({ stage, feel, duration, helps, avoid }, idx) => (
                                        <tr
                                            key={stage}
                                            className={idx % 2 === 1 ? "bg-gray-50/70" : "bg-white"}
                                        >
                                            <td className="px-4 py-3 md:px-5 md:py-4 text-sm md:text-base font-bold text-blue-900 align-top border-t border-gray-100 leading-snug">
                                                {stage}
                                            </td>
                                            <td className="px-4 py-3 md:px-5 md:py-4 text-sm md:text-base text-gray-700 align-top border-t border-gray-100 leading-relaxed">
                                                {feel}
                                            </td>
                                            <td className="px-4 py-3 md:px-5 md:py-4 text-sm md:text-base font-semibold text-gray-900 align-top border-t border-gray-100 leading-relaxed">
                                                {duration}
                                            </td>
                                            <td className="px-4 py-3 md:px-5 md:py-4 text-sm md:text-base text-gray-600 align-top border-t border-gray-100 leading-relaxed">
                                                {helps}
                                            </td>
                                            <td className="px-4 py-3 md:px-5 md:py-4 text-sm md:text-base text-gray-600 align-top border-t border-gray-100 leading-relaxed">
                                                {avoid}
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
                                The stages overlap and the boundaries are blurred, so the plan is set from how your shoulder behaves today rather than from a date on a calendar. If you want to read further before your appointment, there is a detailed guide to{" "}
                                <Link href="/blog/frozen-shoulder-treatment-without-surgery-india" className="text-blue-700 font-semibold hover:text-blue-900 underline underline-offset-2">
                                    treating a frozen shoulder without surgery
                                </Link>
                                , a separate piece on{" "}
                                <Link href="/blog/frozen-shoulder-and-diabetes" className="text-blue-700 font-semibold hover:text-blue-900 underline underline-offset-2">
                                    why frozen shoulder and diabetes travel together
                                </Link>
                                , and an explanation of how{" "}
                                <Link href="/blog/shoulder-pain-injections-precision-care" className="text-blue-700 font-semibold hover:text-blue-900 underline underline-offset-2">
                                    shoulder injections are targeted precisely
                                </Link>{" "}
                                rather than placed by feel.
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
                                Right Diagnosis, Right{" "}
                                <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                                    Stage
                                </span>
                                , Then Escalate
                            </h2>
                            <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
                                The great majority of frozen shoulders are managed without an operation. The ones that need more get it, but only after a real programme has been given a real chance.
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
                                A Stiff Shoulder Needs{" "}
                                <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                                    a Plan, Not a Label
                                </span>
                            </h2>
                            <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
                                Six reasons patients across Bengaluru bring a frozen shoulder to this practice.
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

            {/* ============= DIABETES DEEP-DIVE (unique content) ============= */}
            <section className="py-14 md:py-20 bg-gradient-to-br from-blue-700 via-blue-800 to-indigo-800 text-white relative overflow-hidden">
                <div aria-hidden className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(circle at 2px 2px, white 1px, transparent 0)", backgroundSize: "32px 32px" }}></div>
                <div className="container mx-auto px-4 max-w-6xl relative z-10">
                    <FadeIn>
                        <div className="grid lg:grid-cols-5 gap-10 items-center">
                            <div className="lg:col-span-3">
                                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-5 leading-tight">
                                    If You Have Diabetes, This Is a Different Conversation
                                </h2>
                                <p className="text-base md:text-lg text-blue-100 leading-relaxed mb-4">
                                    Frozen shoulder is not evenly distributed across the population. It is several times more common in people with diabetes than in people without — published series put it somewhere around one in ten to one in five people with diabetes, against roughly one in fifty in the general population. Both type 1 and type 2 are affected, and the longer someone has had diabetes, the higher the risk.
                                </p>
                                <p className="text-base md:text-lg text-blue-100 leading-relaxed mb-4">
                                    It also behaves differently. A diabetic frozen shoulder tends to be more severe, to lose more range, to be more resistant to treatment, and to last considerably longer. It is far more likely to affect both shoulders — sometimes together, more often one after the other — and it is more likely to recur. None of that means treatment fails; it means the timeline you are given must be honest from day one, and the programme has to be sustained for longer than most people expect.
                                </p>
                                <p className="text-base md:text-lg text-blue-100 leading-relaxed mb-4">
                                    The practical point that gets missed: for some patients, the shoulder is how the diabetes is found. Anyone who turns up with a frozen shoulder and no known diabetes should have a fasting blood sugar and an HbA1c checked. It is a cheap test, it is normal in most people, and in the ones where it is not, finding it changes far more than the shoulder. If you already have diabetes, glycaemic control is part of the shoulder treatment — poorly controlled sugars are associated with stiffer, slower-recovering shoulders, and a steroid injection will temporarily push your readings up, which needs planning for rather than avoiding.
                                </p>
                                <p className="text-base md:text-lg text-blue-100 leading-relaxed mb-5">
                                    Thyroid disease, particularly hypothyroidism, carries a similar though weaker association, and a thyroid function test is reasonable in someone with an unexplained frozen shoulder — especially if there are other suggestive symptoms.
                                </p>
                                <div className="inline-flex items-center gap-2 bg-white/15 backdrop-blur border border-white/20 rounded-full px-5 py-2.5 text-sm font-semibold">
                                    <AlertTriangle className="w-4 h-4" />
                                    No known diabetes? Ask for a blood sugar and HbA1c.
                                </div>
                            </div>

                            <div className="lg:col-span-2">
                                <div className="bg-white/10 backdrop-blur border border-white/20 rounded-3xl p-7 md:p-8 text-center">
                                    <Droplet className="w-12 h-12 mx-auto mb-4 text-blue-200" />
                                    <p className="text-2xl md:text-3xl font-bold leading-tight mb-2">Sugar and Shoulder</p>
                                    <p className="text-base text-blue-100 leading-relaxed">
                                        The association is strong enough that a stiff shoulder should always prompt the question — not the other way round.
                                    </p>
                                    <div className="mt-6 pt-6 border-t border-white/20 grid grid-cols-3 gap-3 text-center">
                                        <div>
                                            <p className="text-2xl font-bold">Both</p>
                                            <p className="text-[11px] text-blue-200 uppercase tracking-wider mt-1">Shoulders</p>
                                        </div>
                                        <div>
                                            <p className="text-2xl font-bold">Longer</p>
                                            <p className="text-[11px] text-blue-200 uppercase tracking-wider mt-1">Recovery</p>
                                        </div>
                                        <div>
                                            <p className="text-2xl font-bold">HbA1c</p>
                                            <p className="text-[11px] text-blue-200 uppercase tracking-wider mt-1">Worth Checking</p>
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
                                    Find Out Which Stage You Are In
                                </h2>
                                <p className="text-base md:text-lg text-blue-100 max-w-md mx-auto">
                                    The team will call you back within hours to confirm your slot at Attibele or HSR Layout.
                                </p>
                            </div>
                        </FadeIn>

                        <FadeIn delay={0.1}>
                            <div className="bg-white rounded-3xl shadow-2xl p-6 md:p-10 border border-white/50">
                                <BookingForm source="frozen-shoulder-treatment-bangalore" />
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
                subheading="Shoulder examination, stage assessment, guided injections where indicated and surgical care where it is genuinely needed — at whichever clinic suits you."
            />

            {/* ============= LONG-FORM EDUCATIONAL SECTION (unique to this page) ============= */}
            <section className="bg-gradient-to-br from-gray-50 via-blue-50/30 to-white py-14 md:py-20 overflow-hidden">
                <div className="container mx-auto px-4 max-w-3xl">
                    <FadeIn>
                        <div className="mb-8">
                            <span className="inline-block text-xs font-bold text-blue-700 uppercase tracking-widest mb-3">
                                — Frozen Shoulder Explained —
                            </span>
                            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-900 leading-tight break-words">
                                Adhesive Capsulitis: What Is Actually Happening, and What Actually Helps
                            </h2>
                        </div>
                    </FadeIn>

                    <FadeIn delay={0.1}>
                        <div className="space-y-4 text-base md:text-lg text-gray-700 leading-relaxed">
                            <h3 className="text-lg md:text-xl font-bold text-gray-900 pt-2 flex items-center gap-2">
                                <Snowflake className="w-5 h-5 text-blue-600 flex-shrink-0" />
                                What is actually happening inside the joint
                            </h3>
                            <p>
                                The ball-and-socket of the shoulder sits inside a soft-tissue sleeve called the glenohumeral capsule. In a healthy shoulder that sleeve is loose and generous — it has to be, because no other joint in the body moves through as much range. In a frozen shoulder the capsule becomes inflamed and then progressively thickened, fibrotic and contracted. The joint volume falls, sometimes to a fraction of normal. The changes are concentrated in the front and top of the capsule: the rotator interval, the region between the subscapularis and supraspinatus tendons, and the coracohumeral ligament, which thickens and shortens like a tight strap across the front of the joint.
                            </p>
                            <p>
                                That anatomy explains the symptoms exactly. A contracted coracohumeral ligament physically blocks the arm from rotating outwards, which is why external rotation is lost first and recovered last. The word &ldquo;adhesions&rdquo; is misleading — nothing needs to be torn apart, and no amount of forceful pulling in the early inflammatory phase will lengthen inflamed, contracted tissue. What is required is time under a controlled stretch, applied when the tissue is ready for it. This page deals only with adhesive capsulitis; the broader assessment of{" "}
                                <Link href="/shoulder-pain-bangalore" className="text-blue-700 font-semibold hover:text-blue-900 underline underline-offset-2">
                                    shoulder pain in general
                                </Link>{" "}
                                and the full range of{" "}
                                <Link href="/services/shoulder-care" className="text-blue-700 font-semibold hover:text-blue-900 underline underline-offset-2">
                                    shoulder care offered at this practice
                                </Link>{" "}
                                are covered separately.
                            </p>
                            <p>
                                Frozen shoulder is described as primary when it appears out of nowhere, and secondary when it follows something — a fall, a fracture, rotator cuff surgery, breast or cardiac surgery, or a long period in a sling. It is commonest between the ages of 40 and 60, somewhat more frequent in women, and strongly associated with diabetes and thyroid disease. In a shoulder that stiffened up after an injury or an operation, both the capsule and disuse are contributing, and the plan has to address both.
                            </p>

                            <h3 className="text-lg md:text-xl font-bold text-gray-900 pt-4 flex items-center gap-2">
                                <Scan className="w-5 h-5 text-blue-600 flex-shrink-0" />
                                How it is diagnosed — and why an MRI usually is not needed
                            </h3>
                            <p>
                                Frozen shoulder is a clinical diagnosis, and the finding that makes it is loss of <strong>passive</strong> external rotation. That distinction is the whole thing. If you lie your arm by your side with the elbow bent and someone else — not you — turns your forearm outwards while your muscles stay relaxed, a normal shoulder rotates out freely. A frozen shoulder does not. It stops early, with a hard, blocked end-feel, and it stops in exactly the same place whether you move it yourself or someone moves it for you.
                            </p>
                            <p>
                                Compare that with a rotator cuff problem. A painful or torn cuff limits <em>active</em> movement — you struggle to lift the arm yourself, because the muscle that lifts it is damaged or hurts. But when someone else lifts and rotates the relaxed arm for you, the range is largely preserved. Active loss with preserved passive range points to the cuff; equal loss of both, especially of external rotation, points to the capsule. That two-minute examination separates the two conditions more reliably than most scans, and it is why a{" "}
                                <Link href="/blog/rotator-cuff-injury-heres-how-to-treat-shoulder-pain-effectively" className="text-blue-700 font-semibold hover:text-blue-900 underline underline-offset-2">
                                    rotator cuff injury
                                </Link>{" "}
                                and a frozen shoulder should not be confused as often as they are.
                            </p>
                            <p>
                                An MRI is not required to diagnose a frozen shoulder, and ordering one reflexively delays treatment and adds cost. An MRI in a genuine frozen shoulder frequently reports incidental findings — mild cuff tendinopathy, a small bursal collection, degenerative changes — which are present in plenty of pain-free shoulders of the same age and which risk sending everyone down the wrong path. A plain X-ray is more useful in the first instance, not to confirm the frozen shoulder, but to exclude the things that mimic it: glenohumeral arthritis, calcific tendinitis, an old unreduced dislocation, and rarely a bone lesion. Imaging is added when the picture does not fit, when there is a history of significant trauma, when weakness rather than stiffness dominates, or when the shoulder is failing to behave as a frozen shoulder should. Pain that radiates below the elbow, or is accompanied by pins and needles or hand weakness, is more likely to be coming from the{" "}
                                <Link href="/neck-pain-bangalore" className="text-blue-700 font-semibold hover:text-blue-900 underline underline-offset-2">
                                    cervical spine
                                </Link>{" "}
                                than from the shoulder — a common trap in Bengaluru&rsquo;s desk-bound workforce, where{" "}
                                <Link href="/blog/desk-job-back-and-neck-pain-bangalore-it-professionals" className="text-blue-700 font-semibold hover:text-blue-900 underline underline-offset-2">
                                    neck and upper back pain from long screen hours
                                </Link>{" "}
                                is extremely common. A shoulder that is stiff, grinding and worsening over years, particularly after 60, may be{" "}
                                <Link href="/arthritis-treatment-bangalore" className="text-blue-700 font-semibold hover:text-blue-900 underline underline-offset-2">
                                    arthritis rather than capsulitis
                                </Link>
                                , and the X-ray settles that question in minutes.
                            </p>

                            <h3 className="text-lg md:text-xl font-bold text-gray-900 pt-4 flex items-center gap-2">
                                <Timer className="w-5 h-5 text-blue-600 flex-shrink-0" />
                                The honest natural history
                            </h3>
                            <p>
                                Frozen shoulder is often described as self-limiting, and that description is doing a lot of quiet work. It is true that the great majority of shoulders improve substantially without any operation. It is also true that this commonly takes between one and three years from the first symptom, that the middle of that course is genuinely difficult, and that a meaningful minority of people are left with some permanent restriction — most often the last stretch of external rotation, sometimes enough to notice when reaching behind, throwing, or fastening clothing.
                            </p>
                            <p>
                                Anyone telling you that a frozen shoulder always resolves completely in a few months is not describing the condition accurately. The reason to be honest about this is not pessimism. It is that people who are told the truth stay on their programme, and people who were promised six weeks give up at week seven, try four different treatments in a year, and end up stiffer than those who did the boring thing consistently. Good treatment does not abolish the timeline, but it substantially reduces the pain along the way and improves the range you finish with.
                            </p>

                            <h3 className="text-lg md:text-xl font-bold text-gray-900 pt-4 flex items-center gap-2">
                                <Syringe className="w-5 h-5 text-blue-600 flex-shrink-0" />
                                Injections: what has evidence and what does not
                            </h3>
                            <p>
                                The best-supported injection in frozen shoulder is a corticosteroid placed into the glenohumeral joint, and its value is greatest early — in the freezing and early frozen stages, when pain and inflammation dominate. In that window it produces meaningful pain relief and improvement in range over the following weeks, and it does something practically important: it makes the stretching programme tolerable, which is often the difference between a programme that is actually done and one that is abandoned. It is not a cure, the effect can fade over a few months, and injections are not repeated indefinitely.
                            </p>
                            <p>
                                Where the injection goes matters a great deal. A subacromial injection treats the bursa, not the capsule, and in a true frozen shoulder it is largely the wrong compartment. Blind injections into a contracted, low-volume joint miss more often than most people assume, which is why{" "}
                                <Link href="/treatments/ultrasound-guided-orthopedic-injections" className="text-blue-700 font-semibold hover:text-blue-900 underline underline-offset-2">
                                    ultrasound-guided injection
                                </Link>{" "}
                                is preferred: the needle is watched into the joint and the medication is seen to go where it is intended. If you have diabetes, expect your blood sugars to rise for a few days afterwards — this is manageable and predictable, and it is a reason to monitor more closely for a week, not a reason to refuse the injection.
                            </p>
                            <p>
                                Hydrodilatation, also called capsular distension, is the next step for a shoulder where stiffness is the dominant problem and stretching has stalled. A larger volume of fluid — usually saline with local anaesthetic and steroid — is injected into the joint under imaging to stretch and, in some cases, split the contracted capsule from the inside. It is done as an outpatient procedure, and its value comes almost entirely from the physiotherapy that follows it in the days when the shoulder is temporarily more mobile. Booked without a rehabilitation plan attached, it is a wasted opportunity.
                            </p>
                            <p>
                                On regenerative options: honesty is more useful than enthusiasm here.{" "}
                                <Link href="/prp-regenerative-treatment-bangalore" className="text-blue-700 font-semibold hover:text-blue-900 underline underline-offset-2">
                                    PRP and other regenerative injections
                                </Link>{" "}
                                have a reasonable evidence base in some tendon problems, but the evidence in frozen shoulder specifically is limited and inconsistent, and it does not currently displace corticosteroid as the first-choice injection in the early painful stage. If someone offers you PRP as the standard treatment for a frozen shoulder, ask what evidence they are relying on. The trade-offs between the two are set out in more detail in this comparison of a{" "}
                                <Link href="/blog/steroid-injection-vs-prp-for-joint-pain" className="text-blue-700 font-semibold hover:text-blue-900 underline underline-offset-2">
                                    steroid injection versus PRP for joint pain
                                </Link>
                                .
                            </p>

                            <h3 className="text-lg md:text-xl font-bold text-gray-900 pt-4 flex items-center gap-2">
                                <Moon className="w-5 h-5 text-blue-600 flex-shrink-0" />
                                Night pain, and how to actually sleep
                            </h3>
                            <p>
                                Night pain is what brings most people to the clinic. It is not incidental — sleep deprivation lowers pain tolerance, which makes the shoulder feel worse, which further wrecks sleep. Breaking that loop is a legitimate treatment goal, not a comfort measure. What helps in practice: taking simple analgesia on a schedule in the evening rather than waiting until you are already awake at 2 am; sleeping on the unaffected side with a pillow hugged in front to support the painful arm so it is not left hanging across the body; if you must lie on your back, propping the affected elbow on a pillow so the arm sits slightly forward of the body rather than dropping backwards, which stretches the front of the capsule all night; and a semi-reclined position for a few weeks if lying flat is intolerable.
                            </p>
                            <p>
                                Medication is discussed individually and adjusted for kidney function, stomach history, blood pressure and diabetes — anti-inflammatories are not appropriate for everyone. Where night pain is severe and unrelenting despite these measures, that is one of the clearer indications to bring an intra-articular steroid injection forward rather than persisting for months.
                            </p>

                            <h3 className="text-lg md:text-xl font-bold text-gray-900 pt-4 flex items-center gap-2">
                                <RotateCcw className="w-5 h-5 text-blue-600 flex-shrink-0" />
                                Exercise principles — and why they must match the stage
                            </h3>
                            <p>
                                The following are the building blocks of almost every frozen shoulder programme. They are principles, not a prescription: the volume, the intensity and how far into discomfort you work depend entirely on which stage you are in, and that should be decided after an examination rather than from a video.
                            </p>
                            <ul className="space-y-2.5 pl-1">
                                {[
                                    "Pendulum swings: lean forward, let the arm hang free and relaxed, and let small circles and swings happen from body movement rather than from shoulder muscles. Gentle, useful even in the painful freezing stage.",
                                    "Passive external rotation at a doorframe: stand with the elbow tucked at your side and bent to ninety degrees, hand against the doorframe, and rotate your body away. This targets the tissue that is actually contracted, and it is the most important single stretch in the frozen stage.",
                                    "Wall walks: face or side-on to a wall, walk the fingers up gradually, hold at the point of stretch, and lower under control. A simple way to measure progress week to week — mark the height.",
                                    "Towel stretch behind the back: hold a towel with the good hand over the shoulder and the stiff hand behind the waist, and use the good arm to draw the stiff arm gently up the back. This restores internal rotation, the movement needed for dressing and reaching a back pocket.",
                                    "Rotator cuff and scapular strengthening with a light band, added once pain allows, so that the range you regain is range you can actually use.",
                                ].map((item) => (
                                    <li key={item} className="flex gap-3">
                                        <span aria-hidden className="mt-2.5 w-1.5 h-1.5 rounded-full bg-blue-500 flex-shrink-0" />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                            <p>
                                The general rule on how hard to push: in the freezing stage, stay within a range that does not leave the shoulder more painful afterwards. In the frozen stage, work at the end of range, hold the stretch for time rather than bouncing, and accept discomfort during the stretch provided it settles within a few minutes. Pain that persists for hours afterwards, or that is worse the next morning, means you overdid it — the answer is to reduce the intensity, not to stop the programme. Little and often beats one heroic session a day.
                            </p>

                            <h3 className="text-lg md:text-xl font-bold text-gray-900 pt-4 flex items-center gap-2">
                                <Lock className="w-5 h-5 text-blue-600 flex-shrink-0" />
                                Where manipulation and arthroscopic release sit
                            </h3>
                            <p>
                                A small minority of frozen shoulders remain severely restricted and disabling after a properly delivered programme has been given a genuine trial — usually meaning several months of consistent stage-appropriate work, with pain adequately controlled and, where indicated, an injection already used. For those shoulders, two options exist.
                            </p>
                            <p>
                                Manipulation under anaesthesia involves stretching the contracted capsule until it gives way, with the patient asleep and the muscles fully relaxed. It is quick and it can work well, but it is a controlled tear of tissue and it carries real risks: humeral fracture, dislocation, cuff or labral injury, and nerve stretch injury. That risk is not evenly spread. In a person with long-standing diabetes, and in anyone with osteopenic bone — most relevantly postmenopausal women and those on long-term steroids — the fracture risk is higher, and this is a specific reason to prefer a controlled surgical release over forceful manipulation in those patients rather than treating manipulation as the automatic first escalation.
                            </p>
                            <p>
                                Arthroscopic capsular release is keyhole surgery in which the thickened capsule and the coracohumeral ligament are divided precisely under direct vision, releasing exactly what needs releasing without applying force to the bone. It gives more predictable and more controlled results in stiff, diabetic and post-surgical shoulders, and the range gained in theatre is only kept if physiotherapy starts immediately afterwards and is maintained for weeks. The general principles of{" "}
                                <Link href="/blog/shoulder-arthroscopy-surgery-india" className="text-blue-700 font-semibold hover:text-blue-900 underline underline-offset-2">
                                    shoulder arthroscopy
                                </Link>{" "}
                                are explained separately, as are the very different problems of a shoulder that feels{" "}
                                <Link href="/blog/why-does-my-shoulder-feel-unstable-after-a-sports-injury" className="text-blue-700 font-semibold hover:text-blue-900 underline underline-offset-2">
                                    loose and unstable after a sports injury
                                </Link>{" "}
                                rather than stiff. Where a procedure is recommended, the costs and the{" "}
                                <Link href="/insurance-cashless-orthopedic-treatment" className="text-blue-700 font-semibold hover:text-blue-900 underline underline-offset-2">
                                    insurance and cashless process
                                </Link>{" "}
                                are explained in writing before anything is booked.
                            </p>

                            <div className="mt-8 rounded-2xl border-2 border-amber-300 bg-amber-50 p-6 md:p-7">
                                <div className="flex items-start gap-3">
                                    <AlertTriangle className="w-6 h-6 text-amber-600 flex-shrink-0 mt-0.5" />
                                    <div>
                                        <h3 className="font-bold text-amber-900 text-base md:text-lg mb-2">
                                            When a stiff shoulder is not a frozen shoulder
                                        </h3>
                                        <p className="text-sm md:text-base text-amber-900/90 leading-relaxed">
                                            Please seek assessment promptly rather than assuming it is adhesive capsulitis if: the shoulder became stiff immediately after a significant fall or a dislocation; you cannot lift the arm at all after an injury, which may be a large cuff tear or a fracture; there is fever, redness, heat or a rapidly swelling, exquisitely painful shoulder, which needs same-day assessment for infection; the pain travels below the elbow with numbness, pins and needles or hand weakness; there is unexplained weight loss, night sweats, a history of cancer, or pain that is constant and progressive regardless of position; or you have diabetes and the shoulder is deteriorating quickly. Chest, jaw or left-arm pain with breathlessness or sweating is a medical emergency and needs immediate care, not an orthopedic appointment.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </FadeIn>
                </div>
            </section>

            <LandingFaq
                pageName="Frozen Shoulder Treatment in Bangalore"
                pagePath="/frozen-shoulder-treatment-bangalore"
                aboutCondition="Frozen shoulder (adhesive capsulitis)"
                subheading="Straight answers about adhesive capsulitis, recovery time, stretching, injections and the diabetes connection."
                items={[
                    {
                        q: "How long does a frozen shoulder last?",
                        a: "Honestly, longer than most people are told. A frozen shoulder typically runs one to three years from the first symptom, through a painful freezing stage of roughly six weeks to nine months, a stiff frozen stage of about four to twelve months, and a slow thawing stage. Most people recover most of their movement, but a meaningful minority are left with some permanent restriction, usually the last part of external rotation. Diabetic frozen shoulders tend to last longer still. Good treatment reduces the pain and improves the range you finish with, but it does not abolish the timeline.",
                    },
                    {
                        q: "What is the fastest way to fix a frozen shoulder?",
                        a: "There is no quick fix, and treatments sold as one usually are not. The fastest realistic route is to identify your stage correctly, control pain properly, consider an image-guided steroid injection into the joint early while pain dominates, and then do a daily end-range stretching programme consistently once you reach the stiff stage. Consistency over months beats intensity for a fortnight. Where a genuine programme has stalled, hydrodilatation, manipulation under anaesthesia or arthroscopic capsular release can shorten the course, but these are for the minority who have already put the work in.",
                    },
                    {
                        q: "Why is frozen shoulder worse in people with diabetes?",
                        a: "Frozen shoulder is several times more common in people with diabetes, affecting roughly one in ten to one in five of them against about one in fifty in the general population. Persistently high blood sugar is thought to drive glycation of collagen, making the joint capsule stiffer and more fibrotic. Diabetic frozen shoulders tend to be more severe, more resistant to treatment, longer lasting, more likely to involve both shoulders and more likely to recur. Blood sugar control is therefore part of the shoulder treatment, and anyone with a frozen shoulder and no known diabetes should have a blood sugar and HbA1c checked.",
                    },
                    {
                        q: "Do I need an MRI for a frozen shoulder?",
                        a: "Usually not. Frozen shoulder is a clinical diagnosis, made by finding loss of passive external rotation on examination, and an MRI rarely changes that. Worse, MRI often shows incidental findings that are present in plenty of pain-free shoulders and can send treatment down the wrong path. A plain X-ray is more useful first, not to confirm the frozen shoulder but to exclude arthritis, calcific tendinitis or an old dislocation. An MRI becomes appropriate when the picture does not fit, after significant trauma, when weakness rather than stiffness dominates, or when the shoulder is not behaving as expected.",
                    },
                    {
                        q: "Should I push through the pain when stretching a frozen shoulder?",
                        a: "It depends entirely on your stage, which is why this question causes so much harm. In the early freezing stage, when pain dominates and the capsule is inflamed, forcing into pain typically increases irritability and can prolong the whole episode, so you stay within a range that does not leave the shoulder worse afterwards. In the stiff frozen stage, working at the end of range is exactly what is needed, and discomfort during the stretch that settles within a few minutes is acceptable. Pain lasting hours, or worse the next morning, means you have overdone it: reduce intensity rather than stopping.",
                    },
                    {
                        q: "Does a steroid injection help a frozen shoulder?",
                        a: "Yes, and it has the strongest evidence of any injection for this condition, particularly in the freezing and early frozen stages when pain is the dominant problem. A corticosteroid placed into the glenohumeral joint, ideally under ultrasound guidance so it reaches the right compartment, reduces pain and improves range over the following weeks, and it makes the stretching programme tolerable. It is not a cure, the benefit can fade over months, and it is not repeated indefinitely. If you have diabetes, expect blood sugars to rise for a few days afterwards, which is manageable with closer monitoring.",
                    },
                    {
                        q: "Do I need surgery for a frozen shoulder?",
                        a: "Most people do not. The great majority improve with stage-appropriate treatment, injection where indicated and a sustained stretching and strengthening programme. Surgery is considered for the minority who remain severely restricted and disabled after several months of a properly delivered programme. The options are manipulation under anaesthesia, which stretches the capsule until it gives way, and arthroscopic capsular release, which divides the thickened capsule precisely under vision. Release is often preferred in diabetic or osteopenic shoulders because forceful manipulation carries a real fracture risk in those patients. Either way, immediate physiotherapy afterwards decides the result.",
                    },
                    {
                        q: "Can a frozen shoulder come back or affect the other shoulder?",
                        a: "Recurrence in the same shoulder after full recovery is uncommon, but involvement of the opposite shoulder is not — it happens in a substantial minority, usually within a few years, and far more often in people with diabetes. Sometimes both shoulders are affected at once, which is difficult and again points strongly towards checking for diabetes or thyroid disease. If the second shoulder starts to ache and lose external rotation, come in early: the freezing stage is when pain control and an injection make the biggest difference, and knowing what to expect makes the second episode far more manageable.",
                    },
                    {
                        q: "Why is frozen shoulder pain worst at night, and what helps me sleep?",
                        a: "At night there is no distraction, the inflamed capsule is compressed or stretched by lying positions, and inflammatory pain naturally peaks in the early hours. Sleep loss then lowers pain tolerance, so the shoulder feels worse the next day. What helps in practice: taking simple analgesia on a schedule in the evening rather than waiting until you wake in pain, sleeping on the unaffected side with a pillow hugged in front to support the painful arm, propping the elbow forward on a pillow if you sleep on your back, and sleeping semi-reclined for a few weeks if lying flat is intolerable.",
                    },
                    {
                        q: "Where can I see a frozen shoulder specialist in Bangalore?",
                        a: "Dr. Nitin N Sunku consults at Raghava Multispeciality Hospital, Attibele (Mon–Sat, 10 AM–6 PM) and at Health Nest Hospital, HSR Layout Sector 2 (Mon–Sat, 10 AM–8 PM). Attibele is convenient for Anekal, Bommasandra, Chandapura, Hosur Road, Electronic City and Jigani; HSR Layout serves Koramangala, BTM Layout, Bellandur and Sarjapur Road. The consultation includes a proper examination for passive external rotation loss, staging, a written programme, and blood sugar screening where relevant. Call +91-9980031006 or book via WhatsApp or the form on this page.",
                    },
                ]}
            />

            <FinalCtaStrip
                clinic={CLINIC}
                title="Stop Guessing Which Stage You Are In."
                subtitle="Get your shoulder examined properly and leave with a plan that fits it — book today."
            />

            <MobileStickyCTA clinic={CLINIC} />
            <LandingFooter clinic={CLINIC} currentPath="/frozen-shoulder-treatment-bangalore" />
        </main>
    );
}
