import { Metadata } from "next";
import Link from "next/link";
import {
    Phone,
    Award,
    Heart,
    CheckCircle,
    Users,
    Activity,
    ShieldCheck,
    Hospital,
    Baby,
    Star,
    MessageCircle,
    Calendar,
    ChevronRight,
    AlertTriangle,
    Footprints,
    Bone,
    Smile,
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
import { LandingArticle } from "@/components/landing/landing-article";

export const metadata: Metadata = {
    // `absolute` opts out of the root layout's "%s | Dr. Nitin N Sunku"
    // template — without it the live <title> renders the brand twice.
    title: { absolute: "Pediatric Orthopedic Doctor in Bangalore | Dr. Nitin N Sunku" },
    description:
        "Children's fractures, growth-plate injuries, gait & alignment concerns — child-friendly orthopedic care in Bangalore with 24/7 casualty at Attibele. Book today.",
    alternates: { canonical: `${siteOrigin}/pediatric-orthopedic-bangalore` },
    keywords: [
        "pediatric orthopedic doctor Bangalore",
        "child fracture doctor Bangalore",
        "children's orthopedic specialist Bangalore",
        "growth plate injury treatment",
        "child bow legs doctor Bangalore",
        "knock knees child treatment",
        "limping child doctor Bangalore",
        "kids sports injury doctor Bangalore",
        "child fracture treatment Attibele",
        "pediatric orthopedic near Electronic City",
    ],
    openGraph: {
        title: "Pediatric Orthopedic Care in Bangalore — Dr. Nitin N Sunku",
        description:
            "Children's fractures, growth-plate injuries, and gait or alignment worries — handled with child-appropriate care, honest reassurance, and 24/7 casualty at Attibele.",
        url: `${siteOrigin}/pediatric-orthopedic-bangalore`,
        type: "website",
    },
    robots: { index: true, follow: true },
};

// Pediatric care is delivered at the Attibele hospital — all CTAs route there.
const CLINIC = ATTIBELE_CLINIC;
const PHONE = CLINIC.phone;
const PHONE_DIGITS = CLINIC.phoneDigits;
const WHATSAPP_MESSAGE =
    "Hi Dr. Nitin, I'd like to book an appointment for my child.";

const conditions = [
    { title: "Fractures & Playground Falls", Icon: Bone },
    { title: "Growth-Plate Injuries", Icon: Activity },
    { title: "School Sports Injuries", Icon: Heart },
    { title: "Bow Legs & Knock Knees", Icon: Footprints },
    { title: "Flat Feet Concerns", Icon: ShieldCheck },
    { title: "The Limping Child", Icon: Users },
    { title: "In-Toeing / Out-Toeing Gait", Icon: Smile },
    { title: "Adolescent Knee & Heel Pain", Icon: Baby },
];

const kidsDifferent = [
    {
        step: "1",
        title: "Growth Plates Change Everything",
        description:
            "Children's bones have growth plates — soft zones near the joints where growth happens. An injury that would be a simple sprain in an adult can involve a growth plate in a child, and missing it can affect how the limb grows. That's why children's injuries deserve an examiner who looks for what adult X-rays don't show.",
    },
    {
        step: "2",
        title: "Kids Heal Faster — and Remodel",
        description:
            "Children's fractures heal quicker than adults', and young bone can remodel — straightening out moderate angulation as it grows. This means many children's fractures need only a well-fitted cast for a few weeks, and surgery is far rarer than parents fear.",
    },
    {
        step: "3",
        title: "Much of What Worries Parents Is Normal",
        description:
            "Bow legs in toddlers, knock knees between roughly 3 and 7, flexible flat feet, mild in-toeing — most of these are normal stages of growth that resolve on their own. The consultation's job is to separate the normal variants (reassurance, review) from the few that genuinely need treatment.",
    },
];

const redFlags = [
    "A limp that lasts more than a few days, or a child refusing to bear weight",
    "Limp or joint pain along with fever — needs same-day assessment",
    "Pain that wakes the child at night repeatedly",
    "A deformity or asymmetry that is worsening rather than improving with age",
    "Swelling, redness or warmth over a bone or joint",
];

const sellingPoints = [
    {
        Icon: Baby,
        title: "Child-Appropriate, Parent-Inclusive",
        description:
            "Children aren't small adults — casting choices, X-ray decisions and follow-up schedules are all different. Parents stay in the room and in the loop at every step.",
    },
    {
        Icon: Award,
        title: "Fellowship-Trained Specialist",
        description:
            "Dr. Nitin is a fellowship-trained orthopedic & sports medicine specialist with 10+ years of experience — treating children's fractures and sports injuries alongside the region's school-age athletes.",
    },
    {
        Icon: Hospital,
        title: "24/7 Casualty for Kids' Injuries",
        description:
            "Playground falls don't check the clock. Raghava Multispeciality Hospital's casualty accepts injured children round the clock, with X-ray and plaster room in the same building.",
    },
    {
        Icon: Heart,
        title: "Honest Reassurance, Not Over-Treatment",
        description:
            "Many childhood 'deformities' are normal growth stages. If your child needs only monitoring and reassurance, that's exactly what you'll be told — not braces, insoles or procedures they don't need.",
    },
    {
        Icon: ShieldCheck,
        title: "Careful With X-Rays",
        description:
            "Imaging in children is used judiciously — ordered when it changes management, with proper technique, not as a reflex for every bump and worry.",
    },
    {
        Icon: Users,
        title: "Convenient for South Bengaluru Families",
        description:
            "Minutes from Attibele, Anekal, Chandapura, Sarjapura and Electronic City — specialist care for your child without a trip into the city.",
    },
];

export default function PediatricOrthopedicBangalorePage() {
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
                                    <Baby className="w-3.5 h-3.5" />
                                    Growing Bones Need Different Care
                                </span>

                                <h1 className="text-[2.5rem] sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-gray-900 leading-[1.05] tracking-tight mb-4 break-words">
                                    <span className="block">Pediatric Orthopedic</span>
                                    <span className="block bg-gradient-to-r from-blue-700 via-blue-600 to-indigo-600 bg-clip-text text-transparent pb-1">
                                        Care in Bangalore
                                    </span>
                                </h1>

                                <p className="text-lg sm:text-xl md:text-2xl text-blue-800 font-semibold mb-4">
                                    Dr. Nitin N Sunku — at Raghava Multispeciality Hospital, Attibele
                                </p>
                                <p className="text-base sm:text-lg text-gray-600 mb-6 max-w-xl leading-relaxed">
                                    A wrist fracture from the school playground. A limp that won&apos;t settle. Legs that look bowed. Children&apos;s bones injure, heal and grow differently from adults&apos; — and most parental worries turn out to need reassurance, not surgery. Get an honest answer either way.
                                </p>

                                <div className="flex flex-wrap gap-2 mb-7">
                                    <span className="inline-flex items-center gap-1.5 bg-white/90 backdrop-blur border border-gray-200 rounded-full px-3 py-1.5 text-xs sm:text-sm font-medium text-gray-800 shadow-sm">
                                        <CheckCircle className="w-3.5 h-3.5 text-emerald-600" />
                                        24/7 Casualty for Injuries
                                    </span>
                                    <span className="inline-flex items-center gap-1.5 bg-white/90 backdrop-blur border border-gray-200 rounded-full px-3 py-1.5 text-xs sm:text-sm font-medium text-gray-800 shadow-sm">
                                        <CheckCircle className="w-3.5 h-3.5 text-emerald-600" />
                                        Same-Visit X-Ray &amp; Cast
                                    </span>
                                    <span className="inline-flex items-center gap-1.5 bg-white/90 backdrop-blur border border-gray-200 rounded-full px-3 py-1.5 text-xs sm:text-sm font-medium text-gray-800 shadow-sm">
                                        <Star className="w-3.5 h-3.5 text-yellow-500 fill-yellow-500" />
                                        Reassurance Over Over-Treatment
                                    </span>
                                </div>

                                <div className="flex flex-col sm:flex-row gap-3 mb-6">
                                    <TrackedButton
                                        buttonName="Book Appointment - Hero"
                                        buttonLocation="Hero"
                                        href="#booking-form"
                                        className="group inline-flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold px-6 py-4 rounded-xl shadow-lg shadow-blue-500/30 hover:shadow-xl hover:shadow-blue-500/40 transition-all transform hover:-translate-y-0.5"
                                        metadata={{ cta_type: "form_scroll", condition: "pediatric-ortho" }}
                                    >
                                        <Calendar className="w-5 h-5" />
                                        Book for Your Child
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
                            <HeroImage alt="Dr. Nitin N Sunku — Pediatric Orthopedic Care in Bangalore" />
                        </FadeIn>
                    </div>
                </div>
            </section>

            <StatsStrip
                stats={[
                    { value: "24/7", label: "Casualty for Kids" },
                    { value: "Same Visit", label: "X-Ray & Cast" },
                    { value: "Rarely", label: "Surgery Needed" },
                    { value: "4.9★", label: "Patient Rating" },
                ]}
            />

            {/* ============= CONDITIONS ============= */}
            <section id="services" className="bg-gradient-to-b from-blue-50/60 to-white py-14 md:py-20 overflow-hidden">
                <div className="container mx-auto px-4 max-w-7xl">
                    <FadeIn>
                        <div className="text-center mb-12">
                            <span className="inline-block text-xs font-bold text-blue-700 uppercase tracking-widest mb-3">
                                — What We See Children For —
                            </span>
                            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-3 break-words">
                                From Playground Falls to{" "}
                                <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                                    Growing Pains
                                </span>
                            </h2>
                            <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
                                Injuries, alignment worries and the questions every parent googles at midnight.
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

            {/* ============= KIDS ARE DIFFERENT (unique content) ============= */}
            <section className="bg-white py-14 md:py-20 overflow-hidden">
                <div className="container mx-auto px-4 max-w-7xl">
                    <FadeIn>
                        <div className="text-center mb-12">
                            <span className="inline-block text-xs font-bold text-blue-700 uppercase tracking-widest mb-3">
                                — Why Children Need Different Care —
                            </span>
                            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-3 break-words">
                                Children Aren&apos;t{" "}
                                <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                                    Small Adults
                                </span>
                            </h2>
                            <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
                                Three things about growing bones that change how injuries are treated.
                            </p>
                        </div>
                    </FadeIn>

                    <div className="grid md:grid-cols-3 gap-4 md:gap-6 max-w-5xl mx-auto">
                        {kidsDifferent.map(({ step, title, description }, idx) => (
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

            {/* ============= RED FLAGS (unique content) ============= */}
            <section className="py-14 md:py-20 bg-gradient-to-br from-blue-700 via-blue-800 to-indigo-800 text-white relative overflow-hidden">
                <div aria-hidden className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(circle at 2px 2px, white 1px, transparent 0)", backgroundSize: "32px 32px" }}></div>
                <div className="container mx-auto px-4 max-w-6xl relative z-10">
                    <FadeIn>
                        <div className="grid lg:grid-cols-5 gap-10 items-center">
                            <div className="lg:col-span-3">
                                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-5 leading-tight">
                                    When a Child&apos;s Limp or Pain Shouldn&apos;t Wait
                                </h2>
                                <p className="text-base md:text-lg text-blue-100 leading-relaxed mb-5">
                                    Most childhood aches are harmless and pass in days. A few patterns deserve prompt assessment rather than watchful waiting:
                                </p>
                                <div className="space-y-2.5">
                                    {redFlags.map((flag) => (
                                        <p key={flag} className="flex gap-2.5 text-sm md:text-base text-blue-100 leading-relaxed">
                                            <AlertTriangle className="w-4 h-4 text-orange-300 flex-shrink-0 mt-1" />
                                            {flag}
                                        </p>
                                    ))}
                                </div>
                            </div>

                            <div className="lg:col-span-2">
                                <div className="bg-white/10 backdrop-blur border border-white/20 rounded-3xl p-7 md:p-8 text-center">
                                    <Baby className="w-12 h-12 mx-auto mb-4 text-blue-200" />
                                    <p className="text-2xl md:text-3xl font-bold leading-tight mb-2">Trust Your Instinct</p>
                                    <p className="text-base text-blue-100 leading-relaxed">If something feels off with your child&apos;s walk or limb, an examination settles it — usually with reassurance.</p>
                                    <div className="mt-6 pt-6 border-t border-white/20 grid grid-cols-3 gap-3 text-center">
                                        <div>
                                            <p className="text-xl font-bold">Examine</p>
                                            <p className="text-[11px] text-blue-200 uppercase tracking-wider mt-1">Properly</p>
                                        </div>
                                        <div>
                                            <p className="text-xl font-bold">Explain</p>
                                            <p className="text-[11px] text-blue-200 uppercase tracking-wider mt-1">Honestly</p>
                                        </div>
                                        <div>
                                            <p className="text-xl font-bold">Reassure</p>
                                            <p className="text-[11px] text-blue-200 uppercase tracking-wider mt-1">Or Treat</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
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
                                — Why Parents Choose Dr. Nitin —
                            </span>
                            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-3 break-words">
                                Care Your Child Won&apos;t{" "}
                                <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                                    Be Afraid Of
                                </span>
                            </h2>
                            <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
                                Six reasons families across South Bengaluru bring their children here.
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

                    <FadeIn delay={0.2}>
                        <div className="max-w-4xl mx-auto mt-10 bg-white rounded-2xl p-6 md:p-8 border border-blue-100 shadow-sm">
                            <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                                For an injured child right now, see the{" "}
                                <Link href="/fracture-treatment-attibele" className="text-blue-700 font-semibold hover:text-blue-900 underline underline-offset-2">
                                    fracture &amp; accident care page
                                </Link>{" "}
                                — the hospital casualty accepts children 24/7 with X-ray and plaster in the same building.
                            </p>
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
                                    Injuries: Walk In 24/7 — Everything Else, Book Below
                                </span>
                                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold mb-3 leading-tight break-words">
                                    Book an Appointment for Your Child
                                </h2>
                                <p className="text-base md:text-lg text-blue-100 max-w-md mx-auto">
                                    Gait checks, alignment worries, fracture reviews and sports injuries — the team will call back within hours.
                                </p>
                            </div>
                        </FadeIn>

                        <FadeIn delay={0.1}>
                            <div className="bg-white rounded-3xl shadow-2xl p-6 md:p-10 border border-white/50">
                                <BookingForm source="ads-pediatric-ortho" />
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
                subheading="Children's fracture care, casting and 24/7 casualty are at Raghava Multispeciality Hospital, Attibele."
            />

            <LandingArticle slug="pediatric-orthopedic-bangalore" />

            <LandingFaq
                pageName="Pediatric Orthopedic Care in Bangalore"
                pagePath="/pediatric-orthopedic-bangalore"
                subheading="Straight answers to the questions parents ask most, from Dr. Nitin N Sunku."
                items={[
                    {
                        q: "My child fell and the wrist is swollen — does it need an X-ray?",
                        a: "If there's significant swelling, the child avoids using the hand, or there's tenderness over the bone, yes — children's wrist fractures (often subtle 'buckle' fractures) are easy to miss without one. X-ray is available in-house at the Attibele hospital, and casualty accepts children 24/7. Imaging in children is done judiciously, when it changes management.",
                    },
                    {
                        q: "Do children's fractures need surgery?",
                        a: "Rarely. Children's bones heal fast and can remodel — straighten themselves as they grow — so most fractures need only a well-fitted cast for a few weeks. Surgery is reserved for specific patterns: significantly displaced fractures, certain growth-plate injuries, and fractures involving a joint. You'll be shown the X-ray and told exactly why, either way.",
                    },
                    {
                        q: "What is a growth-plate injury and why does it matter?",
                        a: "Growth plates are the soft zones near the ends of children's bones where growth happens — and they're weaker than the surrounding bone, so they're a common failure point in falls. Most growth-plate injuries heal well with proper treatment, but some need closer follow-up to make sure growth continues normally, which is why they shouldn't be dismissed as 'just a sprain'.",
                    },
                    {
                        q: "My toddler's legs look bowed — is something wrong?",
                        a: "Usually not. Bow legs are a normal stage up to around age 2, often followed by knock knees between roughly 3 and 7, before legs straighten to adult alignment. The variants that need attention are ones that are one-sided, worsening with age, painful, or severe — an examination distinguishes normal growth from the exceptions, and most families leave with reassurance.",
                    },
                    {
                        q: "Does my child with flat feet need special shoes or insoles?",
                        a: "Most children's flat feet are flexible, painless and normal — an arch often appears when they stand on tiptoe, and no treatment or costly insoles are needed. Assessment is warranted when flat feet are stiff, painful, or one-sided. Honest answer first; products only if genuinely indicated.",
                    },
                    {
                        q: "When should a limping child be seen urgently?",
                        a: "Same-day if the limp comes with fever, the child refuses to bear weight, or there's swelling or warmth over a joint — these need prompt evaluation to rule out infection. A painless limp that persists beyond a few days also deserves an examination. Call +91-9980031006; the Attibele casualty is open 24/7.",
                    },
                ]}
            />

            <FinalCtaStrip
                clinic={CLINIC}
                title="Worried About Your Child's Bones?"
                subtitle="Most worries end in reassurance — get an honest answer today."
            />

            <MobileStickyCTA clinic={CLINIC} />
            <LandingFooter clinic={CLINIC} />
        </main>
    );
}
