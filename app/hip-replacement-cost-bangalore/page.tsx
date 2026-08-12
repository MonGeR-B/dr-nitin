import { Metadata } from "next";
import Link from "next/link";
import {
    Phone,
    CheckCircle,
    XCircle,
    Star,
    MessageCircle,
    ChevronRight,
    IndianRupee,
    FileText,
    Hospital,
    ShieldCheck,
    Activity,
    Heart,
    HeartPulse,
    Users,
    Wallet,
    BadgeCheck,
    Stethoscope,
    Bone,
    Bed,
    Timer,
    Dumbbell,
    Scan,
    Repeat,
    RefreshCw,
    AlertTriangle,
    Award,
    Crosshair,
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
    title: { absolute: "Hip Replacement Cost in Bangalore 2026 | Dr. Nitin N Sunku" },
    description:
        "Hip replacement cost in Bangalore 2026: honest ranges by implant and bearing type, what actually moves the number, insurance reality — and a written, itemised estimate.",
    alternates: { canonical: `${siteOrigin}/hip-replacement-cost-bangalore` },
    keywords: [
        "hip replacement cost in Bangalore",
        "total hip replacement cost",
        "hip replacement surgery price Bangalore",
        "cost of hip replacement in India",
        "bilateral hip replacement cost",
        "hip resurfacing cost Bangalore",
        "uncemented hip replacement cost India",
        "ceramic hip replacement cost Bangalore",
        "hip replacement insurance cashless Bangalore",
        "hip replacement surgeon Attibele",
        "AVN hip surgery cost Bangalore",
    ],
    openGraph: {
        title: "Hip Replacement Cost in Bangalore (2026) — An Honest Price Guide",
        description:
            "Indicative 2026 ranges for cemented, uncemented, hybrid, ceramic and bilateral hip replacement — plus what a quoted number usually leaves out. Dr. Nitin N Sunku, Attibele & HSR Layout.",
        url: `${siteOrigin}/hip-replacement-cost-bangalore`,
        type: "website",
    },
    robots: { index: true, follow: true },
};

// Surgical consultations and hip replacement are done at the Attibele hospital.
const CLINIC = ATTIBELE_CLINIC;
const PHONE = CLINIC.phone;
const PHONE_DIGITS = CLINIC.phoneDigits;
const WHATSAPP_MESSAGE =
    "Hi Dr. Nitin, I would like a written cost estimate / consultation for hip replacement.";

const conditions = [
    { title: "Hip Osteoarthritis", Icon: Activity },
    { title: "Avascular Necrosis (AVN) of the Femoral Head", Icon: Bone },
    { title: "Post-Traumatic Hip Arthritis", Icon: Hospital },
    { title: "Rheumatoid & Inflammatory Arthritis of the Hip", Icon: Heart },
    { title: "Hip Fracture in Older Adults", Icon: AlertTriangle },
    { title: "Failed Previous Hip Surgery (Revision)", Icon: Repeat },
    { title: "Hip Dysplasia in Adults", Icon: Users },
    { title: "Ankylosing Spondylitis Hip Involvement", Icon: Stethoscope },
];

// Indicative 2026 Bengaluru ranges, compiled from published hospital, aggregator
// and insurer cost guides. Presented only as planning ranges — never as a quote.
// Every figure below carries a TODO-VERIFY-PRICING marker for pre-deploy checking.
const costTable = [
    {
        type: "Uncemented (press-fit) total hip replacement",
        suits:
            "Most adults with good bone stock, broadly under about 70 — the implant surfaces are textured so bone grows onto them",
        /* TODO-VERIFY-PRICING: indicative Bengaluru range for an uncemented primary total hip replacement, per hip — sourced from market research 2026-08-12, confirm with hospital before deploy */
        range: "₹2.8 – ₹4.5 lakh per hip",
    },
    {
        type: "Cemented total hip replacement",
        suits:
            "Older patients, osteoporotic or soft bone, and many hip-fracture cases — bone cement fixes the implant immediately",
        /* TODO-VERIFY-PRICING: indicative Bengaluru range for a cemented primary total hip replacement, per hip — sourced from market research 2026-08-12, confirm with hospital before deploy */
        range: "₹2.2 – ₹3.5 lakh per hip",
    },
    {
        type: "Hybrid total hip replacement",
        suits:
            "Mixed bone quality — typically a cemented stem in the thigh bone with an uncemented socket in the pelvis",
        /* TODO-VERIFY-PRICING: indicative Bengaluru range for a hybrid primary total hip replacement, per hip — sourced from market research 2026-08-12, confirm with hospital before deploy */
        range: "₹2.5 – ₹4 lakh per hip",
    },
    {
        type: "Ceramic-on-ceramic or other premium bearing",
        suits:
            "Younger, more active patients where wear of the bearing surface over three or four decades is the main concern",
        /* TODO-VERIFY-PRICING: indicative Bengaluru range for ceramic-on-ceramic / premium bearing total hip replacement, per hip — sourced from market research 2026-08-12, confirm with hospital before deploy */
        range: "₹4 – ₹6.5 lakh per hip",
    },
    {
        type: "Hip resurfacing",
        suits:
            "A narrow group: younger, active patients with good bone and a large femoral head that is still structurally intact. Not suitable for most women, for osteoporotic bone, or for a collapsed AVN head",
        /* TODO-VERIFY-PRICING: indicative Bengaluru range for hip resurfacing, per hip — sourced from market research 2026-08-12, confirm with hospital before deploy */
        range: "₹3 – ₹5 lakh per hip",
    },
    {
        type: "Bilateral (both hips in one admission)",
        suits:
            "Both hips severely affected and the patient is medically fit for a longer anaesthetic — one admission and one rehabilitation cycle instead of two",
        /* TODO-VERIFY-PRICING: indicative Bengaluru range for bilateral (both hips, single admission) total hip replacement, total — sourced from market research 2026-08-12, confirm with hospital before deploy */
        range: "₹5 – ₹9 lakh total",
    },
];

const costDrivers = [
    {
        Icon: BadgeCheck,
        title: "Implant & Bearing Surface",
        description:
            /* TODO-VERIFY-PRICING: indicative share of the total attributable to the hip implant itself — sourced from market research 2026-08-12, confirm with hospital before deploy */
            "Usually the single largest line item — commonly ₹80,000 to ₹3 lakh of the total on its own. Fixation (cemented, uncemented, hybrid) and bearing surface (metal or ceramic head on cross-linked polyethylene, or ceramic-on-ceramic) are chosen for your age, bone quality and activity level, not for the invoice.",
    },
    {
        Icon: Bed,
        title: "Room Category",
        description:
            "A shared ward, a twin-sharing room, a single room and a suite are billed at very different daily tariffs — and in most hospitals the room category also scales nursing, consultant visit and sometimes procedure charges. Over a five- or six-day admission this moves the total more than most people expect.",
    },
    {
        Icon: Timer,
        title: "Length of Stay",
        description:
            "Packages cover a fixed number of days. Most uncomplicated hip replacements are discharged within about three to five days, but a slower recovery, a wound that needs watching or a medical issue adds days — and those days are billed outside the package unless the estimate says otherwise.",
    },
    {
        Icon: Dumbbell,
        title: "Physiotherapy",
        description:
            /* TODO-VERIFY-PRICING: indicative post-discharge physiotherapy and rehabilitation cost for hip replacement — sourced from market research 2026-08-12, confirm with hospital before deploy */
            "In-hospital physiotherapy is normally included; the weeks of rehabilitation after discharge usually are not. Budget roughly ₹15,000 to ₹50,000 depending on how many supervised sessions you need and whether they are done at the hospital or at home.",
    },
    {
        Icon: Scan,
        title: "Pre-Operative Investigations",
        description:
            /* TODO-VERIFY-PRICING: indicative pre-operative investigation and fitness workup cost for hip replacement — sourced from market research 2026-08-12, confirm with hospital before deploy */
            "X-rays with templating, blood work, ECG, echocardiogram where indicated, and anaesthetic review. Commonly ₹10,000 to ₹30,000, and frequently quoted separately from the surgical package because they are done before admission.",
    },
    {
        Icon: HeartPulse,
        title: "Comorbidity Management",
        description:
            "Diabetes, hypertension, heart or kidney disease, or long-term steroid use mean more pre-operative work, tighter monitoring, sometimes a cardiology or physician co-consultation and occasionally a night in a high-dependency bed. Honest estimates account for this at the start rather than adding it to the final bill.",
    },
    {
        Icon: RefreshCw,
        title: "Revision vs Primary",
        description:
            /* TODO-VERIFY-PRICING: indicative Bengaluru range for revision hip replacement — sourced from market research 2026-08-12, confirm with hospital before deploy */
            "Redoing a previous hip replacement is a different operation: longer theatre time, bone graft, and specialised revision implants. Commonly ₹4.5 to ₹9 lakh or more per hip. This is the main reason an implant that fails early is the most expensive outcome of all.",
    },
];

const treatmentLadder = [
    {
        step: "1",
        title: "Confirm the Hip Is Actually the Problem",
        description:
            "Groin pain that worsens on standing from a chair, stiffness putting on socks and a limp point to the hip. But back and spine problems refer pain to the buttock and thigh convincingly, and a normal-looking X-ray with severe pain deserves an MRI to look for early AVN. Cost planning starts only once the diagnosis is settled.",
    },
    {
        step: "2",
        title: "Exhaust What Does Not Need an Operation",
        description:
            "Weight and activity modification, a structured strengthening programme, a walking stick used correctly on the opposite side, and medical management of inflammatory disease. This will not regrow cartilage, but in early and moderate disease it can postpone surgery by years — and the cheapest hip replacement is the one you do not need yet.",
    },
    {
        step: "3",
        title: "A Written, Itemised Estimate Before Anything Is Booked",
        description:
            "When replacement is genuinely the right call, you receive a written estimate specific to your implant, your room category and your health profile — with the pre-operative tests, the package days, the physiotherapy and the excess-day rate all set out in line items. No date is fixed until you have that on paper.",
    },
];

const sellingPoints = [
    {
        Icon: FileText,
        title: "Written, Itemised Estimates",
        description:
            "Not a range on a lead-generation website and not a number over the phone. A line-item estimate for your implant, your room and your admission — given after assessment, before any booking.",
    },
    {
        Icon: Crosshair,
        title: "Surgery Only When It Is Justified",
        description:
            "A hip is replaced for pain and loss of function that has stopped responding to everything else — not for an X-ray appearance. If your hip is not there yet, you will be told so plainly, and you will be given a plan for the interim.",
    },
    {
        Icon: Award,
        title: "Fellowship-Trained Orthopedic Surgeon",
        description:
            "Dr. Nitin N Sunku is a fellowship-trained orthopedic and sports medicine surgeon with a background in arthroscopic surgery, and is team doctor for Bengaluru FC.",
    },
    {
        Icon: Wallet,
        title: "Insurance Paperwork Support",
        description:
            "The hospital insurance desk helps assemble the pre-authorisation file — clinical notes, imaging, the itemised estimate and the implant details — which is what most cashless approvals actually turn on.",
    },
    {
        Icon: ShieldCheck,
        title: "Implant Chosen for the Patient",
        description:
            "Cemented, uncemented or hybrid; polyethylene or ceramic bearing. The reasoning behind the recommendation is explained to you, along with what the cheaper and dearer options would and would not change.",
    },
    {
        Icon: Hospital,
        title: "Attibele Hospital, HSR Layout Consults",
        description:
            "Hip replacement surgery is performed at Raghava Multispeciality Hospital, Attibele. Initial consultations are also available at Health Nest Hospital, HSR Layout Sector 2.",
    },
];

const usuallyIncluded = [
    "Surgeon and anaesthetist fees",
    "Operation theatre and consumables",
    "The hip implant itself, as specified",
    "The stated number of hospital days in the stated room category",
    "Routine medication and in-hospital physiotherapy during admission",
];

const usuallyExtra = [
    "Pre-operative investigations and cardiac or physician clearance",
    "Any extra day beyond the package, billed at the daily rate",
    "Physiotherapy after discharge, and a walker or raised toilet seat",
    "Upgrading the implant or the room after the estimate was issued",
    "Management of a complication, and blood products if required",
];

export default function HipReplacementCostBangalorePage() {
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
                                    <IndianRupee className="w-3.5 h-3.5" />
                                    Written, Itemised Estimates — Before You Book
                                </span>

                                <h1 className="text-[2.5rem] sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-gray-900 leading-[1.05] tracking-tight mb-4 break-words">
                                    <span className="block">Hip Replacement Cost{" "}</span>
                                    <span className="block bg-gradient-to-r from-blue-700 via-blue-600 to-indigo-600 bg-clip-text text-transparent pb-1">
                                        in Bangalore
                                    </span>
                                </h1>

                                <p className="text-lg sm:text-xl md:text-2xl text-blue-800 font-semibold mb-4">
                                    Dr. Nitin N Sunku — Orthopedic &amp; Joint Replacement Surgeon
                                </p>
                                <p className="text-base sm:text-lg text-gray-600 mb-6 max-w-xl leading-relaxed">
                                    Search this and you get a dozen sites quoting a dozen different numbers, none of which apply to you. Most people having a single primary total hip replacement in Bengaluru land somewhere between{" "}
                                    {/* TODO-VERIFY-PRICING: headline typical range for a single primary total hip replacement in Bengaluru — sourced from market research 2026-08-12, confirm with hospital before deploy */}
                                    <strong>₹2.8 and ₹4.5 lakh per hip</strong> — but the honest answer is that the implant, the room category and your own health decide it. Dr. Nitin gives every surgical patient a <strong>written, itemised estimate</strong> after assessment, before any date is fixed.
                                </p>

                                <div className="flex flex-wrap gap-2 mb-7">
                                    <span className="inline-flex items-center gap-1.5 bg-white/90 backdrop-blur border border-gray-200 rounded-full px-3 py-1.5 text-xs sm:text-sm font-medium text-gray-800 shadow-sm">
                                        <CheckCircle className="w-3.5 h-3.5 text-emerald-600" />
                                        Line-Item Written Estimate
                                    </span>
                                    <span className="inline-flex items-center gap-1.5 bg-white/90 backdrop-blur border border-gray-200 rounded-full px-3 py-1.5 text-xs sm:text-sm font-medium text-gray-800 shadow-sm">
                                        <CheckCircle className="w-3.5 h-3.5 text-emerald-600" />
                                        Insurance &amp; Pre-Auth Help
                                    </span>
                                    <span className="inline-flex items-center gap-1.5 bg-white/90 backdrop-blur border border-gray-200 rounded-full px-3 py-1.5 text-xs sm:text-sm font-medium text-gray-800 shadow-sm">
                                        <Star className="w-3.5 h-3.5 text-yellow-500 fill-yellow-500" />
                                        Attibele &amp; HSR Layout
                                    </span>
                                </div>

                                <div className="flex flex-col sm:flex-row gap-3 mb-6">
                                    <TrackedButton
                                        buttonName="Get Estimate - Hero"
                                        buttonLocation="Hero"
                                        href="#booking-form"
                                        className="group inline-flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold px-6 py-4 rounded-xl shadow-lg shadow-blue-500/30 hover:shadow-xl hover:shadow-blue-500/40 transition-all transform hover:-translate-y-0.5"
                                        metadata={{ cta_type: "form_scroll", condition: "hip-replacement-cost" }}
                                    >
                                        <FileText className="w-5 h-5" />
                                        Get a Written Estimate
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
                            <HeroImage alt="Dr. Nitin N Sunku — Hip Replacement Surgeon, Bangalore" />
                        </FadeIn>
                    </div>
                </div>
            </section>

            <StatsStrip
                stats={[
                    { value: "Written", label: "Itemised Estimates" },
                    { value: "Cashless", label: "Pre-Auth Support" },
                    { value: "2 Clinics", label: "Attibele & HSR Layout" },
                    { value: "Same Day", label: "Appointments" },
                ]}
            />

            {/* ============= CONDITIONS ============= */}
            <section id="services" className="bg-gradient-to-b from-blue-50/60 to-white py-14 md:py-20 overflow-hidden">
                <div className="container mx-auto px-4 max-w-7xl">
                    <FadeIn>
                        <div className="text-center mb-12">
                            <span className="inline-block text-xs font-bold text-blue-700 uppercase tracking-widest mb-3">
                                — Why Hips Get Replaced —
                            </span>
                            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-3 break-words">
                                The Conditions Behind a{" "}
                                <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                                    Hip Replacement
                                </span>
                            </h2>
                            <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
                                The diagnosis changes the operation, the implant and therefore the cost. A 42-year-old with avascular necrosis and a 78-year-old with a fractured hip need very different plans.
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

            {/* ============= COST TABLE BY IMPLANT & BEARING (unique content) ============= */}
            <section className="bg-white py-14 md:py-20 overflow-hidden">
                <div className="container mx-auto px-4 max-w-5xl">
                    <FadeIn>
                        <div className="text-center mb-10 md:mb-12">
                            <span className="inline-block text-xs font-bold text-blue-700 uppercase tracking-widest mb-3">
                                — Indicative 2026 Ranges —
                            </span>
                            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-3 break-words">
                                What a Hip Replacement{" "}
                                <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                                    Actually Costs
                                </span>
                            </h2>
                            <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
                                These are planning ranges for Bengaluru, not quotes. What you pay depends on the implant chosen for your bone, the room you take and how your health workup goes.
                            </p>
                        </div>
                    </FadeIn>

                    <FadeIn delay={0.1}>
                        <div className="overflow-x-auto rounded-2xl border border-gray-200 shadow-sm">
                            <table className="w-full text-left border-collapse">
                                <thead>
                                    <tr className="bg-blue-50">
                                        <th className="px-4 py-3 md:px-6 md:py-4 text-xs md:text-sm font-bold text-blue-900 uppercase tracking-wide w-1/4">
                                            What it is
                                        </th>
                                        <th className="px-4 py-3 md:px-6 md:py-4 text-xs md:text-sm font-bold text-blue-900 uppercase tracking-wide w-1/2">
                                            Who it usually suits
                                        </th>
                                        <th className="px-4 py-3 md:px-6 md:py-4 text-xs md:text-sm font-bold text-blue-900 uppercase tracking-wide w-1/4">
                                            Indicative range
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {costTable.map(({ type, suits, range }, idx) => (
                                        <tr
                                            key={type}
                                            className={idx % 2 === 1 ? "bg-gray-50/70" : "bg-white"}
                                        >
                                            <td className="px-4 py-3 md:px-6 md:py-4 text-sm md:text-base font-semibold text-gray-900 align-top border-t border-gray-100">
                                                {type}
                                            </td>
                                            <td className="px-4 py-3 md:px-6 md:py-4 text-sm md:text-base text-gray-600 align-top border-t border-gray-100 leading-relaxed">
                                                {suits}
                                            </td>
                                            <td className="px-4 py-3 md:px-6 md:py-4 text-sm md:text-base font-bold text-blue-700 align-top border-t border-gray-100 whitespace-nowrap">
                                                {range}
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </FadeIn>

                    <FadeIn delay={0.15}>
                        <p className="text-center text-xs md:text-sm text-gray-500 max-w-3xl mx-auto mt-6">
                            All figures are indicative ranges compiled for general planning in 2026 and will differ between hospitals and over time. They are not a quotation. A written, itemised estimate for your specific implant, room category and health profile is given after assessment — and the cheapest quote is rarely the meaningful comparison, because two quotes are only comparable when they cover the same line items.
                        </p>
                    </FadeIn>

                    <FadeIn delay={0.2}>
                        <div className="max-w-4xl mx-auto mt-10 bg-gradient-to-br from-blue-50 via-white to-indigo-50 rounded-2xl p-6 md:p-8 border border-blue-100 shadow-sm">
                            <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                                Want to read further before booking anything? There is a detailed national-level guide to{" "}
                                <Link href="/blog/hip-replacement-surgery-cost-india" className="text-blue-700 font-semibold hover:text-blue-900 underline underline-offset-2">
                                    hip replacement surgery cost in India
                                </Link>
                                , a comparison of{" "}
                                <Link href="/blog/hip-resurfacing-vs-total-hip-replacement" className="text-blue-700 font-semibold hover:text-blue-900 underline underline-offset-2">
                                    hip resurfacing versus total hip replacement
                                </Link>{" "}
                                for the small group who are genuine candidates, and a separate write-up on{" "}
                                <Link href="/blog/hip-fracture-surgery-cost-india" className="text-blue-700 font-semibold hover:text-blue-900 underline underline-offset-2">
                                    hip fracture surgery cost
                                </Link>{" "}
                                — which is an emergency, priced and planned quite differently from an elective replacement. If you are comparing across joints, the{" "}
                                <Link href="/knee-replacement-cost-bangalore" className="text-blue-700 font-semibold hover:text-blue-900 underline underline-offset-2">
                                    knee replacement cost page
                                </Link>{" "}
                                follows the same structure.
                            </p>
                        </div>
                    </FadeIn>
                </div>
            </section>

            {/* ============= WHAT MOVES THE NUMBER (unique content) ============= */}
            <section className="bg-gradient-to-b from-white to-blue-50/60 py-14 md:py-20 overflow-hidden">
                <div className="container mx-auto px-4 max-w-7xl">
                    <FadeIn>
                        <div className="text-center mb-12">
                            <span className="inline-block text-xs font-bold text-blue-700 uppercase tracking-widest mb-3">
                                — Why Two Quotes Differ —
                            </span>
                            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-3 break-words">
                                What Actually Moves{" "}
                                <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                                    the Number
                                </span>
                            </h2>
                            <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
                                Seven variables explain almost the entire spread between the lowest and the highest hip replacement quote you will be shown in this city.
                            </p>
                        </div>
                    </FadeIn>

                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:gap-5">
                        {costDrivers.map(({ Icon, title, description }, idx) => (
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

            {/* ============= TREATMENT LADDER ============= */}
            <section className="bg-white py-14 md:py-20 overflow-hidden">
                <div className="container mx-auto px-4 max-w-7xl">
                    <FadeIn>
                        <div className="text-center mb-12">
                            <span className="inline-block text-xs font-bold text-blue-700 uppercase tracking-widest mb-3">
                                — How This Practice Works —
                            </span>
                            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-3 break-words">
                                Diagnosis, Then{" "}
                                <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                                    Everything Short of Surgery
                                </span>
                                , Then the Estimate
                            </h2>
                            <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
                                A price conversation that starts before the diagnosis is settled is a sales conversation.
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
                                A Number You Can{" "}
                                <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                                    Actually Plan Around
                                </span>
                            </h2>
                            <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
                                Six things that matter more than a headline price on a comparison website.
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

            {/* ============= WHAT THE QUOTED NUMBER LEAVES OUT (unique content) ============= */}
            <section className="py-14 md:py-20 bg-gradient-to-br from-blue-700 via-blue-800 to-indigo-800 text-white relative overflow-hidden">
                <div aria-hidden className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(circle at 2px 2px, white 1px, transparent 0)", backgroundSize: "32px 32px" }}></div>
                <div className="container mx-auto px-4 max-w-6xl relative z-10">
                    <FadeIn>
                        <div className="max-w-3xl mb-10">
                            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-5 leading-tight">
                                What the Quoted Number Usually Leaves Out
                            </h2>
                            <p className="text-base md:text-lg text-blue-100 leading-relaxed mb-4">
                                When two hospitals quote you very different figures for &ldquo;a hip replacement&rdquo;, the operation is rarely the thing that differs. What differs is the scope of the quote. One number may be a surgical package for a shared room with a mid-range implant and four covered days. Another may be an all-in figure including investigations, a single room, a premium ceramic bearing and six days. Neither is dishonest. They are simply not the same product, and comparing them as if they were is how people get surprised at discharge.
                            </p>
                            <p className="text-base md:text-lg text-blue-100 leading-relaxed">
                                {/* TODO-VERIFY-PRICING: indicative share of the total attributable to the implant, used to make the point that the implant is only part of the total — sourced from market research 2026-08-12, confirm with hospital before deploy */}
                                It also helps to know that the implant, which everyone fixates on, is commonly only ₹80,000 to ₹3 lakh of a total that runs to several lakh. The rest is theatre time, the surgical and anaesthetic team, the ward, the nursing, the medication, the imaging and the rehabilitation. That is why an unusually low headline price is almost always a narrow package rather than a genuinely cheaper operation — and why the question that protects you is not &ldquo;what is your price&rdquo; but &ldquo;what is in it, and what happens if I stay longer&rdquo;.
                            </p>
                        </div>
                    </FadeIn>

                    <div className="grid md:grid-cols-2 gap-5 mb-8">
                        <FadeIn>
                            <div className="bg-white/10 backdrop-blur border border-white/20 rounded-2xl p-6 md:p-7 h-full">
                                <h3 className="flex items-center gap-2 font-bold text-white text-lg mb-4">
                                    <CheckCircle className="w-5 h-5 text-emerald-300" />
                                    Usually inside a package rate
                                </h3>
                                <ul className="space-y-3">
                                    {usuallyIncluded.map((item) => (
                                        <li key={item} className="flex gap-2.5 text-sm md:text-base text-blue-50 leading-relaxed">
                                            <CheckCircle className="w-4 h-4 text-emerald-300 flex-shrink-0 mt-1" />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </FadeIn>
                        <FadeIn delay={0.1}>
                            <div className="bg-white/10 backdrop-blur border border-white/20 rounded-2xl p-6 md:p-7 h-full">
                                <h3 className="flex items-center gap-2 font-bold text-white text-lg mb-4">
                                    <XCircle className="w-5 h-5 text-orange-300" />
                                    Usually outside it
                                </h3>
                                <ul className="space-y-3">
                                    {usuallyExtra.map((item) => (
                                        <li key={item} className="flex gap-2.5 text-sm md:text-base text-blue-50 leading-relaxed">
                                            <XCircle className="w-4 h-4 text-orange-300 flex-shrink-0 mt-1" />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </FadeIn>
                    </div>

                    <FadeIn delay={0.2}>
                        <div className="grid lg:grid-cols-5 gap-8 items-center">
                            <div className="lg:col-span-3">
                                <p className="text-base md:text-lg text-blue-100 leading-relaxed mb-5">
                                    Ask for the estimate in writing, itemised, with the implant named and the excess-day rate stated. Any hospital that intends to treat you fairly will give you that without hesitation. If you are planning to use insurance, the same document is the backbone of the pre-authorisation file — there is a plain-English walkthrough of{" "}
                                    <Link href="/blog/how-cashless-preauthorisation-works-orthopedic-surgery" className="text-white font-semibold underline underline-offset-2 hover:text-blue-200">
                                        how cashless pre-authorisation actually works
                                    </Link>{" "}
                                    and a practice page on{" "}
                                    <Link href="/insurance-cashless-orthopedic-treatment" className="text-white font-semibold underline underline-offset-2 hover:text-blue-200">
                                        insurance and cashless orthopedic treatment
                                    </Link>
                                    .
                                </p>
                                <div className="inline-flex items-center gap-2 bg-white/15 backdrop-blur border border-white/20 rounded-full px-5 py-2.5 text-sm font-semibold">
                                    <Wallet className="w-4 h-4" />
                                    Bring your policy and TPA details to the consultation
                                </div>
                            </div>

                            <div className="lg:col-span-2">
                                <div className="bg-white/10 backdrop-blur border border-white/20 rounded-3xl p-7 md:p-8 text-center">
                                    <ShieldCheck className="w-12 h-12 mx-auto mb-4 text-blue-200" />
                                    <p className="text-2xl md:text-3xl font-bold leading-tight mb-2">Three Questions</p>
                                    <p className="text-base text-blue-100 leading-relaxed">
                                        Ask them of every quote you receive, including this practice&apos;s.
                                    </p>
                                    <div className="mt-6 pt-6 border-t border-white/20 grid grid-cols-3 gap-3 text-center">
                                        <div>
                                            <p className="text-xl font-bold">What</p>
                                            <p className="text-[11px] text-blue-200 uppercase tracking-wider mt-1">Implant</p>
                                        </div>
                                        <div>
                                            <p className="text-xl font-bold">How Many</p>
                                            <p className="text-[11px] text-blue-200 uppercase tracking-wider mt-1">Days</p>
                                        </div>
                                        <div>
                                            <p className="text-xl font-bold">Then What</p>
                                            <p className="text-[11px] text-blue-200 uppercase tracking-wider mt-1">Per Extra Day</p>
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
                                    No-Obligation Assessment
                                </span>
                                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold mb-3 leading-tight break-words">
                                    Get Your Written, Itemised Estimate
                                </h2>
                                <p className="text-base md:text-lg text-blue-100 max-w-md mx-auto">
                                    Consultation → X-ray and, where needed, MRI → an honest view on whether you need surgery yet → a line-item estimate for your implant and room.
                                </p>
                            </div>
                        </FadeIn>

                        <FadeIn delay={0.1}>
                            <div className="bg-white rounded-3xl shadow-2xl p-6 md:p-10 border border-white/50">
                                <BookingForm source="hip-replacement-cost-bangalore" />
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
                subheading="Hip replacement surgery and surgical consultations are done at Raghava Multispeciality Hospital, Attibele; initial consultations are also available at HSR Layout Sector 2."
            />

            {/* ============= LONG-FORM EDUCATIONAL SECTION (unique to this page) ============= */}
            <section className="bg-gradient-to-br from-gray-50 via-blue-50/30 to-white py-14 md:py-20 overflow-hidden">
                <div className="container mx-auto px-4 max-w-3xl">
                    <FadeIn>
                        <div className="mb-8">
                            <span className="inline-block text-xs font-bold text-blue-700 uppercase tracking-widest mb-3">
                                — Hip Replacement, Explained Properly —
                            </span>
                            <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-900 leading-tight break-words">
                                When It Is Worth It, What You Are Paying For, and What to Expect Afterwards
                            </h2>
                        </div>
                    </FadeIn>

                    <FadeIn delay={0.1}>
                        <div className="space-y-4 text-base md:text-lg text-gray-700 leading-relaxed">
                            <h3 className="text-lg md:text-xl font-bold text-gray-900 pt-2 flex items-center gap-2">
                                <Bone className="w-5 h-5 text-blue-600 flex-shrink-0" />
                                When a hip replacement is actually indicated — and when it is too early
                            </h3>
                            <p>
                                A hip is replaced for a combination of two things: pain that is no longer controlled by reasonable non-surgical measures, and loss of function that has started to shape your day. The practical markers are familiar to anyone who has them. Groin pain when you stand up from a chair or get out of a car. Pain that wakes you at night or that is there before you have done anything. A limp you no longer notice but your family does. Not being able to reach your own foot to put on a sock or cut a toenail. Walking distance shrinking month by month. The X-ray matters, but it is the second thing looked at, not the first — plenty of people have unpleasant-looking X-rays and manage well, and a smaller number have relatively modest changes with disabling symptoms.
                            </p>
                            <p>
                                It is too early when the pain is intermittent, when it responds to activity modification and a decent strengthening programme, when medication is only occasionally needed, and when you are still doing what you want to do. In that situation the honest advice is to wait, because a hip replacement does not become a worse operation for having been delayed a couple of years, and every year you postpone is a year you are not spending on the far side of an implant&apos;s lifespan. Start with a proper assessment of{" "}
                                <Link href="/hip-pain-bangalore" className="text-blue-700 font-semibold hover:text-blue-900 underline underline-offset-2">
                                    hip pain
                                </Link>{" "}
                                rather than with a surgical quote, understand where you sit within{" "}
                                <Link href="/arthritis-treatment-bangalore" className="text-blue-700 font-semibold hover:text-blue-900 underline underline-offset-2">
                                    arthritis treatment
                                </Link>{" "}
                                generally, and be realistic about the{" "}
                                <Link href="/blog/natural-alternatives-to-hip-replacement" className="text-blue-700 font-semibold hover:text-blue-900 underline underline-offset-2">
                                    non-surgical alternatives to hip replacement
                                </Link>{" "}
                                — they can genuinely buy time in early disease, and they cannot rebuild a joint that has already lost its cartilage.
                            </p>

                            <h3 className="text-lg md:text-xl font-bold text-gray-900 pt-4">
                                Cemented, uncemented or hybrid — what the choice really means
                            </h3>
                            <p>
                                Every hip replacement has two halves: a socket component fixed into the pelvis and a stem with a ball fixed into the top of the thigh bone. Each half has to be held in place, and there are only two ways to do it. Bone cement, which is an acrylic grout that sets in minutes and locks the implant immediately. Or a press-fit, uncemented design with a textured or coated surface that the patient&apos;s own bone grows into over the following weeks.
                            </p>
                            <p>
                                Uncemented fixation is the usual choice in younger patients and anyone with good, dense bone, because bone ingrowth gives a durable biological bond and makes any future revision easier. Cemented fixation is preferred where bone is soft or osteoporotic, in many older patients, and in most hip fracture cases — the fixation is instant and does not depend on bone that may not be capable of growing onto an implant. A hybrid uses cement on one side and press-fit on the other, most often a cemented stem with an uncemented socket, and it is a perfectly rational middle position rather than a compromise. Cemented implants are generally somewhat cheaper, but nobody should choose fixation on price: an uncemented stem in osteoporotic bone risks a fracture during insertion, and a cemented stem in a 45-year-old makes revision harder decades later. Get the reasoning explained, and if it is not explained, ask.
                            </p>

                            <h3 className="text-lg md:text-xl font-bold text-gray-900 pt-4">
                                Bearing surfaces: where a lot of the money goes
                            </h3>
                            <p>
                                The bearing is the ball-and-socket interface that actually moves, and it is what wears out. The workhorse combination worldwide is a metal or ceramic head articulating on highly cross-linked polyethylene, and it has an excellent long-term record. Ceramic-on-ceramic produces very low wear rates and appeals for younger, more active patients, at a meaningfully higher price, with a small risk of squeaking and a very small risk of ceramic fracture. Metal-on-metal large-head bearings are essentially historic for total hip replacement because of metal wear debris and adverse local tissue reactions. Dual-mobility bearings, which add a second articulation to reduce dislocation risk, are used selectively in patients at high risk of dislocation.
                            </p>
                            <p>
                                The honest framing is this: for a 72-year-old with osteoarthritis, a cross-linked polyethylene bearing will almost certainly outlast them, and the premium bearing buys nothing they will ever use. For a 44-year-old with{" "}
                                <Link href="/services/hip-replacement" className="text-blue-700 font-semibold hover:text-blue-900 underline underline-offset-2">
                                    a hip that needs replacing now
                                </Link>
                                , wear over a projected forty years is a real consideration and the premium may be justified. It is an age-and-activity decision, and it should be argued through with you rather than presented as an upgrade tier.
                            </p>

                            <h3 className="text-lg md:text-xl font-bold text-gray-900 pt-4">
                                Anterior versus posterior approach — a neutral summary
                            </h3>
                            <p>
                                The approach describes how the surgeon reaches the joint. The posterior approach comes in from behind the hip and is the most widely used approach in the world; it gives excellent exposure, is versatile for complex anatomy and revisions, and has a historically slightly higher dislocation rate, which modern soft-tissue repair techniques and careful component positioning have substantially reduced. The direct anterior approach comes in from the front through an interval between muscles rather than splitting them; several studies show slightly less early pain and a faster first two to six weeks, with a somewhat higher rate of wound problems in heavier patients, some risk of numbness over the outer thigh from a small sensory nerve, and a learning curve during which complication rates are higher.
                            </p>
                            <p>
                                By one year, good-quality studies find little difference in function or satisfaction between the two. The evidence does not support telling patients that one approach is simply better. What consistently does matter is component positioning, leg-length restoration and the surgeon&apos;s familiarity with the approach they use — a surgeon operating through the approach they know well produces better results than the same surgeon adopting a fashionable one. If you want the detail, there is a full discussion of the{" "}
                                <Link href="/blog/anterior-approach-hip-replacement-in-india" className="text-blue-700 font-semibold hover:text-blue-900 underline underline-offset-2">
                                    anterior approach to hip replacement in India
                                </Link>
                                . Be sceptical of any marketing that sells an approach as a product.
                            </p>

                            <h3 className="text-lg md:text-xl font-bold text-gray-900 pt-4 flex items-center gap-2">
                                <Timer className="w-5 h-5 text-blue-600 flex-shrink-0" />
                                A realistic recovery timeline, week by week
                            </h3>
                            <ul className="space-y-2.5 pl-1">
                                {[
                                    "Day 0 to day 1: you stand and take a few steps with a walker, usually on the day of surgery or the morning after. Pain is managed with a multimodal regimen, and a blood-clot prevention plan starts.",
                                    "Day 2 to discharge (commonly day 3 to 5): walking further each day with a walker, stairs practice, and teaching on hip precautions, sleeping position and how to use a raised toilet seat.",
                                    "Week 1 to 2: at home, walking short distances several times a day. Wound review and, where used, suture or staple removal around day 10 to 14.",
                                    "Week 3 to 6: progressing from walker to stick. Most people stop needing regular painkillers in this window and can manage stairs, bathing and dressing with much less help.",
                                    "Week 6 to 12: stick discarded for most patients. Driving typically resumes somewhere between four and eight weeks once you can perform an emergency stop without hesitation and are off strong analgesia. Desk work often around four to six weeks; physically demanding work considerably later.",
                                    "Month 3 to 6: near-normal walking, swimming and cycling encouraged. Strength and endurance still improving.",
                                    "Month 6 to 12: the last of the improvement. Many people say the hip stops feeling like a replaced hip somewhere in this period.",
                                ].map((item) => (
                                    <li key={item} className="flex gap-3">
                                        <span aria-hidden className="mt-2.5 w-1.5 h-1.5 rounded-full bg-blue-500 flex-shrink-0" />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                            <p>
                                Those are typical figures, not promises — age, the state of the muscles beforehand, other medical conditions and how consistently you do your exercises all shift them. Detailed timelines are set out in the guide to{" "}
                                <Link href="/blog/total-hip-replacement-recovery-time-india" className="text-blue-700 font-semibold hover:text-blue-900 underline underline-offset-2">
                                    total hip replacement recovery time in India
                                </Link>
                                , and the exercise programme itself is described in the{" "}
                                <Link href="/blog/hip-replacement-physiotherapy-exercises-india" className="text-blue-700 font-semibold hover:text-blue-900 underline underline-offset-2">
                                    hip replacement physiotherapy exercises
                                </Link>{" "}
                                guide. Physiotherapy is not an optional extra you can economise on; it is the part of the treatment you personally have to deliver.
                            </p>

                            <h3 className="text-lg md:text-xl font-bold text-gray-900 pt-4">
                                How long does a hip implant last?
                            </h3>
                            <p>
                                Registry data from large national joint registries is the best guide available, and it is genuinely encouraging: for modern implants, on the order of nine in ten are still in place at fifteen years, and a substantial majority at twenty to twenty-five years. Longevity is influenced by age at surgery, weight, activity level, bearing choice, bone quality and — importantly — how accurately the components were positioned. A younger, heavier, more active patient wears a bearing faster than an older, lighter, less active one, which is precisely why the bearing conversation matters more at 45 than at 75. There is a fuller discussion of the registry evidence in the article on{" "}
                                <Link href="/blog/how-long-does-a-knee-or-hip-replacement-last" className="text-blue-700 font-semibold hover:text-blue-900 underline underline-offset-2">
                                    how long a knee or hip replacement lasts
                                </Link>
                                . The practical implication for cost is straightforward: an implant that fails at eight years instead of twenty-two costs you a revision operation that is more expensive, more difficult and less predictable than the original. Saving money by choosing an inappropriate implant or an inexperienced pair of hands is a false economy of the most expensive kind.
                            </p>

                            <h3 className="text-lg md:text-xl font-bold text-gray-900 pt-4 flex items-center gap-2">
                                <Scan className="w-5 h-5 text-blue-600 flex-shrink-0" />
                                Why AVN patients need a different conversation
                            </h3>
                            <p>
                                Avascular necrosis of the femoral head — where the blood supply to the ball of the hip is interrupted and the bone dies and eventually collapses — is a different clinical problem from ordinary wear-and-tear osteoarthritis, and in India it accounts for a large share of hip replacements. The people who get it are typically in their thirties, forties and fifties. The common associations are long courses of corticosteroids, heavy alcohol use, sickle cell disease, previous hip trauma, and a group in whom no cause is ever identified. It frequently affects both hips, sometimes at different stages.
                            </p>
                            <p>
                                Three things follow from this. First, early AVN can be invisible on X-ray, so persistent groin pain in a younger adult with a normal X-ray — particularly with any of those risk factors — warrants an MRI rather than reassurance. Second, before the head collapses there are joint-preserving options worth discussing, and after it collapses there are not; the timing of diagnosis genuinely changes what is possible. Third, when replacement is needed at 40, the implant has to be planned around a life expectancy that may exceed the implant&apos;s, which pushes the conversation towards uncemented fixation and a hard-wearing bearing, and towards an explicit acknowledgement that a revision at some point in the future is likely rather than unthinkable. That is a different discussion from the one you have with a 75-year-old, and it should not be compressed into a five-minute quote.
                            </p>
                            <p>
                                Where the hip problem started with trauma rather than disease — an old acetabular or femoral neck injury, or a fracture that did not unite well — the assessment overlaps with{" "}
                                <Link href="/fracture-treatment-attibele" className="text-blue-700 font-semibold hover:text-blue-900 underline underline-offset-2">
                                    fracture care
                                </Link>
                                , and previous metalwork in the bone can add both operative time and cost.
                            </p>

                            <h3 className="text-lg md:text-xl font-bold text-gray-900 pt-4">
                                What insurance typically does and does not cover
                            </h3>
                            <p>
                                Hip replacement for advanced arthritis or AVN is a medically indicated planned procedure, and most comprehensive Indian health policies cover it. That said, planned joint replacement is one of the areas where policy fine print bites hardest, and it is worth checking four things before you fix a date. The joint replacement waiting period, which is commonly two to four years from the start of the policy and applies to pre-existing disease. Room rent limits, because in many policies a room category above your entitled limit triggers proportionate deduction across the whole bill, not just the room. Implant and consumable sub-limits, which are the usual reason a premium bearing ends up partly self-funded. And network status — whether your chosen hospital is empanelled with your insurer or TPA for cashless treatment, or whether you will be paying and claiming reimbursement.
                            </p>
                            <p>
                                What is usually not covered: the pre-admission consultation itself in many policies, any part of the bill above a sub-limit, non-medical consumables of the kind listed in the standard exclusions, and outpatient physiotherapy after discharge unless your policy has a specific rehabilitation benefit. Pre- and post-hospitalisation expenses are often covered for a defined window, so keep every prescription and receipt. The practical route is to bring your policy document and TPA card to the consultation so the estimate can be built with your actual entitlements in view — the page on{" "}
                                <Link href="/insurance-cashless-orthopedic-treatment" className="text-blue-700 font-semibold hover:text-blue-900 underline underline-offset-2">
                                    insurance and cashless orthopedic treatment
                                </Link>{" "}
                                explains the process, and no claim is ever guaranteed by a hospital, only by your insurer.
                            </p>

                            <div className="mt-8 rounded-2xl border-2 border-amber-300 bg-amber-50 p-6 md:p-7">
                                <div className="flex items-start gap-3">
                                    <AlertTriangle className="w-6 h-6 text-amber-600 flex-shrink-0 mt-0.5" />
                                    <div>
                                        <h3 className="font-bold text-amber-900 text-base md:text-lg mb-2">
                                            Hip symptoms that should not wait for a cost comparison
                                        </h3>
                                        <p className="text-sm md:text-base text-amber-900/90 leading-relaxed">
                                            Go to a hospital immediately if you cannot bear weight after a fall, if the leg looks shortened or turned outwards, or if there is sudden severe hip or groin pain with deformity — a hip fracture in an older adult is a surgical emergency where delay worsens the outcome. Seek same-day assessment for a hot, swollen, exquisitely painful hip with fever or rigors, which can indicate joint infection, and for any of these after a previous hip replacement: sudden inability to move the leg, a hip that has visibly changed length or rotation, or a wound that is red, discharging or reopening. Severe night pain that is progressive, unexplained weight loss, or a history of cancer also warrant prompt assessment rather than watchful waiting.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </FadeIn>
                </div>
            </section>

            <LandingFaq
                pageName="Hip Replacement Cost in Bangalore"
                pagePath="/hip-replacement-cost-bangalore"
                aboutCondition="Hip osteoarthritis"
                subheading="Straight answers on hip replacement pricing, implants, insurance and recovery from Dr. Nitin N Sunku."
                items={[
                    {
                        q: "How much does a hip replacement cost in Bangalore?",
                        a:
                            /* TODO-VERIFY-PRICING: headline FAQ answer figures for primary, premium-bearing and bilateral hip replacement in Bengaluru — sourced from market research 2026-08-12, confirm with hospital before deploy */
                            "For a single primary total hip replacement in Bengaluru, indicative 2026 ranges are roughly ₹2.2–₹3.5 lakh for a cemented implant, ₹2.8–₹4.5 lakh for an uncemented one, and ₹4–₹6.5 lakh where a ceramic-on-ceramic or other premium bearing is used. Bilateral hip replacement in a single admission runs roughly ₹5–₹9 lakh in total. These are planning ranges compiled from published cost guides, not quotations — your actual figure depends on the implant, the room category and your health workup, and is given to you in writing after assessment.",
                    },
                    {
                        q: "Why do hip replacement quotes vary so much?",
                        a: "Because the quotes are not describing the same thing. One may be a surgical package for a shared room, a mid-range implant and four covered days; another may include pre-operative investigations, a single room, a premium bearing and six days. The implant alone can differ several-fold in price. Room category scales nursing and consultant charges in most hospitals, comorbidities add monitoring, and post-discharge physiotherapy is usually quoted separately. Ask every hospital for a written, itemised estimate naming the implant, the covered days and the rate per extra day — then the comparison becomes meaningful.",
                    },
                    {
                        q: "Is hip replacement covered by insurance?",
                        a: "Usually yes, since it is a medically indicated planned surgery for advanced arthritis, AVN or fracture. Check four things before fixing a date: the joint replacement waiting period, commonly two to four years from policy start; room rent limits, because exceeding your entitled category can trigger proportionate deduction across the whole bill; implant and consumable sub-limits, the usual reason a premium bearing is partly self-funded; and whether the hospital is in your insurer or TPA cashless network. Outpatient physiotherapy after discharge is often not covered. Bring your policy and TPA card to the consultation.",
                    },
                    {
                        q: "Cemented or uncemented hip replacement — which is cheaper, and which is better?",
                        a: "Cemented implants are generally somewhat cheaper, but the choice should not be made on price. Cement fixes the implant immediately and suits soft or osteoporotic bone, most older patients and many hip fracture cases. Uncemented press-fit implants rely on your own bone growing into a textured surface, which suits younger patients with good bone stock and makes future revision easier. A hybrid combines both. Putting an uncemented stem into weak bone risks a fracture during insertion; cementing a 45-year-old complicates revision decades later. Ask your surgeon to explain the reasoning for your bone.",
                    },
                    {
                        q: "How long does a hip replacement last?",
                        a: "National joint registry data for modern implants shows roughly nine in ten still in place at fifteen years, and a substantial majority at twenty to twenty-five years. Longevity depends on your age at surgery, weight, activity level, bone quality, the bearing surface chosen and how accurately the components were positioned. Younger and more active patients wear a bearing faster, which is why the implant conversation matters more at 45 than at 75. The practical point for cost: a revision done too soon is far more expensive and less predictable than the original operation.",
                    },
                    {
                        q: "How long is the recovery after a hip replacement?",
                        a: "Most patients stand and take a few steps within a day of surgery and go home in about three to five days. Expect a walker for roughly two to three weeks, then a stick for another three to six. Driving typically resumes between four and eight weeks, once you can perform an emergency stop and are off strong painkillers. Desk work often around four to six weeks; physical work considerably later. Walking is near normal by three months, and improvement continues quietly up to about a year. Consistent physiotherapy is the biggest variable you control.",
                    },
                    {
                        q: "Is bilateral hip replacement done in one sitting?",
                        a: "It can be, and for the right patient it has real advantages: one anaesthetic, one admission and one rehabilitation cycle rather than two, and a lower total cost than two separate surgeries. It is not right for everyone. A single-sitting bilateral procedure means a longer anaesthetic, more blood loss and a more demanding early recovery, so it is offered to patients who are medically fit, reasonably young and have both hips genuinely affected. Where fitness is borderline, the two hips are staged some weeks or months apart instead. That assessment is made before any recommendation.",
                    },
                    {
                        q: "Am I too young for a hip replacement?",
                        a: "Age alone rarely decides it. Many patients in their thirties and forties need a hip replacement, most commonly for avascular necrosis of the femoral head, hip dysplasia, inflammatory arthritis or an old injury. What changes with youth is the planning: a longer expected lifespan than the implant means fixation and bearing surface are chosen for durability and for ease of future revision, and you should be told honestly that a revision at some point is likely rather than unthinkable. Before that, joint-preserving options are exhausted, which is why early diagnosis in AVN matters so much.",
                    },
                    {
                        q: "What is the cheapest safe option for a hip replacement?",
                        a:
                            /* TODO-VERIFY-PRICING: indicative range quoted as the lower-cost defensible option (cemented THR, shared room) — sourced from market research 2026-08-12, confirm with hospital before deploy */
                            "For most older patients, a well-performed cemented total hip replacement with a cross-linked polyethylene bearing in a shared room — indicatively around ₹2.2–₹3.5 lakh — is both the least expensive and entirely appropriate; a premium bearing would buy them nothing they will use. Genuine savings come from choosing a shared room, avoiding an implant upgrade you do not need, and keeping the stay short by doing your physiotherapy. What is not a saving: an unusually low headline price that turns out to be a narrow package, or an implant chosen for its invoice rather than your bone.",
                    },
                    {
                        q: "Where can I get a written hip replacement estimate in Bangalore?",
                        a: "Dr. Nitin N Sunku performs hip replacement surgery at Raghava Multispeciality Hospital, Attibele — 39, Sarjapura–Attibele Rd, opposite Canara Bank, Attibele 562107 — open Mon–Sat, 10 AM to 6 PM, and convenient for Anekal, Bommasandra, Chandapura, Hosur Road, Electronic City and Jigani. Initial consultations are also available at Health Nest Hospital, HSR Layout Sector 2, Mon–Sat, 10 AM to 8 PM, serving Koramangala, BTM Layout, Bellandur and Sarjapur Road. Call +91-9980031006, message on WhatsApp, or use the form on this page to arrange an assessment and a written, itemised estimate.",
                    },
                ]}
            />

            <FinalCtaStrip
                clinic={CLINIC}
                title="Get the Real Number, in Writing."
                subtitle="Honest assessment first — an itemised estimate before anything is booked."
            />

            <MobileStickyCTA clinic={CLINIC} />
            <LandingFooter clinic={CLINIC} currentPath="/hip-replacement-cost-bangalore" />
        </main>
    );
}
