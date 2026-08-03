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
    Laptop,
    AlertTriangle,
    Zap,
    Monitor,
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
    title: { absolute: "Neck Pain Specialist in Bangalore | Dr. Nitin N Sunku" },
    description:
        "Neck pain, cervical spondylosis, tech neck & radiating arm pain — conservative-first treatment in Bangalore. Attibele & HSR Layout clinics. Book today.",
    alternates: { canonical: `${siteOrigin}/neck-pain-bangalore` },
    keywords: [
        "neck pain specialist Bangalore",
        "neck pain doctor Bangalore",
        "cervical spondylosis treatment Bangalore",
        "tech neck treatment Bangalore",
        "neck pain radiating to arm doctor",
        "cervical disc problem specialist Bangalore",
        "stiff neck treatment Bangalore",
        "neck pain doctor HSR Layout",
        "neck pain treatment without surgery",
        "neck and shoulder pain doctor Bangalore",
    ],
    openGraph: {
        title: "Neck Pain Specialist in Bangalore — Dr. Nitin N Sunku",
        description:
            "Cervical spondylosis, tech neck and radiating arm pain treated conservative-first — physiotherapy, posture correction and precise interventions. Attibele & HSR Layout.",
        url: `${siteOrigin}/neck-pain-bangalore`,
        type: "website",
    },
    robots: { index: true, follow: true },
};

const CLINIC = PRIMARY_CLINIC;
const PHONE = CLINIC.phone;
const PHONE_DIGITS = CLINIC.phoneDigits;
const WHATSAPP_MESSAGE =
    "Hi Dr. Nitin, I have neck pain and would like to book an appointment.";

const conditions = [
    { title: "Cervical Spondylosis", Icon: Activity },
    { title: "Tech Neck / Posture Strain", Icon: Laptop },
    { title: "Pain Radiating to the Arm", Icon: Zap },
    { title: "Cervical Disc Problems", Icon: ShieldCheck },
    { title: "Stiff Neck & Muscle Spasm", Icon: Users },
    { title: "Neck-Related Headaches", Icon: Stethoscope },
    { title: "Whiplash & Minor Injuries", Icon: Heart },
    { title: "Neck + Shoulder Pain Combos", Icon: Hospital },
];

const redFlags = [
    "Pain, numbness or tingling radiating down the arm into the hand",
    "Weakness in the arm or grip — dropping objects, difficulty with buttons",
    "Neck pain after a fall, road accident or significant injury",
    "Unsteadiness while walking, or changes in bladder/bowel control",
    "Fever or unexplained weight loss along with neck pain",
];

const selfHelp = [
    "Raise your screen to eye level — a laptop on a stand with an external keyboard beats craning down",
    "Take a 1–2 minute movement break every 30–40 minutes of desk work",
    "Sleep with one supportive pillow that keeps the neck level — not two stacked ones",
    "Gentle range-of-motion exercises usually help more than complete rest",
];

const sellingPoints = [
    {
        Icon: Monitor,
        title: "Desk-Age Neck Problems, Understood",
        description:
            "Hours of screens and commuting have made cervical strain a working-age epidemic. Treatment addresses the cause — posture, workstation, movement habits — not just the symptom.",
    },
    {
        Icon: Award,
        title: "Fellowship-Trained Specialist",
        description:
            "Dr. Nitin is a fellowship-trained orthopedic & sports medicine specialist with 10+ years of experience treating neck, spine and joint conditions.",
    },
    {
        Icon: Heart,
        title: "Conservative-First Philosophy",
        description:
            "The overwhelming majority of neck pain settles without surgery. Physiotherapy, posture correction, medication and time are the first line — always.",
    },
    {
        Icon: ShieldCheck,
        title: "Serious Causes Ruled Out Properly",
        description:
            "Radiating arm pain, weakness or numbness needs a careful neurological examination, not a WhatsApp guess. Red flags are checked systematically before any treatment plan.",
    },
    {
        Icon: Stethoscope,
        title: "Honest About Imaging",
        description:
            "Not every neck needs an MRI — age-related changes show up on most scans after 40 and often mean little. Imaging is ordered when the examination says it will change the treatment.",
    },
    {
        Icon: Hospital,
        title: "Two Bengaluru Locations",
        description:
            "Consult at Raghava Multispeciality Hospital, Attibele, or Health Nest Hospital, HSR Layout — whichever is the easier drive for you.",
    },
];

export default function NeckPainBangalorePage() {
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
                                    Conservative-First Neck Care
                                </span>

                                <h1 className="text-[2.5rem] sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-gray-900 leading-[1.05] tracking-tight mb-4 break-words">
                                    <span className="block">Neck Pain Specialist</span>
                                    <span className="block bg-gradient-to-r from-blue-700 via-blue-600 to-indigo-600 bg-clip-text text-transparent pb-1">
                                        in Bangalore
                                    </span>
                                </h1>

                                <p className="text-lg sm:text-xl md:text-2xl text-blue-800 font-semibold mb-4">
                                    Dr. Nitin N Sunku — Orthopedic &amp; Sports Medicine Specialist
                                </p>
                                <p className="text-base sm:text-lg text-gray-600 mb-6 max-w-xl leading-relaxed">
                                    Stiff neck after long screen days? Pain creeping into your shoulder blade or down your arm? Most neck pain is treatable without surgery — when the actual cause is identified and the desk habits driving it are fixed alongside.
                                </p>

                                <div className="flex flex-wrap gap-2 mb-7">
                                    <span className="inline-flex items-center gap-1.5 bg-white/90 backdrop-blur border border-gray-200 rounded-full px-3 py-1.5 text-xs sm:text-sm font-medium text-gray-800 shadow-sm">
                                        <CheckCircle className="w-3.5 h-3.5 text-emerald-600" />
                                        Fellowship-Trained
                                    </span>
                                    <span className="inline-flex items-center gap-1.5 bg-white/90 backdrop-blur border border-gray-200 rounded-full px-3 py-1.5 text-xs sm:text-sm font-medium text-gray-800 shadow-sm">
                                        <CheckCircle className="w-3.5 h-3.5 text-emerald-600" />
                                        No Unnecessary MRIs
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
                                        metadata={{ cta_type: "form_scroll", condition: "neck-pain" }}
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
                            <HeroImage alt="Dr. Nitin N Sunku — Neck Pain Specialist in Bangalore" />
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
                                — Neck Problems We Treat —
                            </span>
                            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-3 break-words">
                                From Tech Neck to{" "}
                                <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                                    Cervical Spondylosis
                                </span>
                            </h2>
                            <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
                                Whether it started at a desk, on a commute, or with age — it&apos;s treatable.
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

            {/* ============= RED FLAGS vs SELF-HELP (unique content) ============= */}
            <section className="bg-white py-14 md:py-20 overflow-hidden">
                <div className="container mx-auto px-4 max-w-5xl">
                    <FadeIn>
                        <div className="text-center mb-12">
                            <span className="inline-block text-xs font-bold text-blue-700 uppercase tracking-widest mb-3">
                                — When to Worry, What to Try —
                            </span>
                            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-3 break-words">
                                Most Neck Pain Is Benign.{" "}
                                <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                                    Some Isn&apos;t.
                                </span>
                            </h2>
                            <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
                                Know the difference between a strain you can manage and a sign you should be examined.
                            </p>
                        </div>
                    </FadeIn>

                    <div className="grid md:grid-cols-2 gap-5">
                        <FadeIn>
                            <div className="bg-red-50/70 rounded-2xl border border-red-100 p-6 md:p-7 h-full">
                                <h3 className="flex items-center gap-2 font-bold text-red-800 text-lg mb-4">
                                    <AlertTriangle className="w-5 h-5" />
                                    See a Specialist Promptly If You Have
                                </h3>
                                <ul className="space-y-3">
                                    {redFlags.map((item) => (
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
                                <h3 className="flex items-center gap-2 font-bold text-emerald-800 text-lg mb-4">
                                    <CheckCircle className="w-5 h-5" />
                                    For Simple Desk-Strain, Start Here
                                </h3>
                                <ul className="space-y-3">
                                    {selfHelp.map((item) => (
                                        <li key={item} className="flex gap-2.5 text-sm md:text-base text-gray-700 leading-relaxed">
                                            <CheckCircle className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-1" />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </FadeIn>
                    </div>

                    <FadeIn delay={0.2}>
                        <div className="mt-6 bg-gradient-to-br from-blue-50 via-white to-indigo-50 rounded-2xl p-6 md:p-7 border border-blue-100 shadow-sm">
                            <p className="text-sm md:text-base text-gray-700 leading-relaxed">
                                Neck and back trouble often travel together — see also the{" "}
                                <Link href="/back-pain-bangalore" className="text-blue-700 font-semibold hover:text-blue-900 underline underline-offset-2">
                                    back pain page
                                </Link>
                                , read{" "}
                                <Link href="/blog/how-posture-affects-spine-and-joint-health" className="text-blue-700 font-semibold hover:text-blue-900 underline underline-offset-2">
                                    how posture affects your spine
                                </Link>
                                , or explore the{" "}
                                <Link href="/services/spine-care" className="text-blue-700 font-semibold hover:text-blue-900 underline underline-offset-2">
                                    spine care service
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
                                Treat the Cause,{" "}
                                <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                                    Not Just the Crick
                                </span>
                            </h2>
                            <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
                                Six reasons desk workers and families across Bengaluru trust this practice with their necks.
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
                                    Book Your Neck Assessment
                                </h2>
                                <p className="text-base md:text-lg text-blue-100 max-w-md mx-auto">
                                    The team will call you back within hours to confirm your slot at Attibele or HSR Layout.
                                </p>
                            </div>
                        </FadeIn>

                        <FadeIn delay={0.1}>
                            <div className="bg-white rounded-3xl shadow-2xl p-6 md:p-10 border border-white/50">
                                <BookingForm source="ads-neck-pain" />
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
                subheading="Neck assessment and treatment at whichever clinic suits your commute."
            />

            <LandingArticle slug="neck-pain-bangalore" />

            <LandingFaq
                pageName="Neck Pain Specialist in Bangalore"
                pagePath="/neck-pain-bangalore"
                aboutCondition="Neck pain"
                subheading="Straight answers about neck pain diagnosis and treatment with Dr. Nitin N Sunku."
                items={[
                    {
                        q: "When should I see a doctor for neck pain?",
                        a: "See a specialist promptly if pain radiates down your arm, you notice numbness, tingling or weakness in the hand, the pain follows an accident or fall, or it persists beyond 2–3 weeks despite basic care. Occasional stiffness after a long desk day can usually be managed with posture correction and movement first.",
                    },
                    {
                        q: "Is my neck pain from cervical spondylosis?",
                        a: "Possibly — spondylosis (age-related wear of the cervical spine) is very common after 40, but it's also visible on scans of many people with no pain at all. Whether your symptoms actually come from spondylosis, muscle strain or a disc problem is a clinical question, answered by examination rather than by the scan report alone.",
                    },
                    {
                        q: "Can neck pain be cured without surgery?",
                        a: "The overwhelming majority of neck pain — including most cervical spondylosis and many disc problems — settles with conservative care: physiotherapy, posture and workstation correction, medication and time. Surgery is considered only for persistent nerve compression with weakness, or instability, which are the minority of cases.",
                    },
                    {
                        q: "Do I need an MRI for my neck pain?",
                        a: "Usually not at the first visit. MRI is indicated when there are nerve symptoms (radiating pain, numbness, weakness), red flags, or failure to improve with proper conservative care. Ordering an MRI for every stiff neck mostly finds age-related changes that don't change the treatment.",
                    },
                    {
                        q: "What does a consultation cost, and what happens in it?",
                        a: "Typically ₹500–₹1,000. You get a focused history, a physical and neurological examination, an honest explanation of what's driving the pain, and a written plan — exercises, posture changes, medication if needed, and clear criteria for when imaging or further treatment would be warranted.",
                    },
                    {
                        q: "Where can I consult Dr. Nitin for neck pain?",
                        a: "At Raghava Multispeciality Hospital, Attibele (Mon–Sat, 10 AM–6 PM) or Health Nest Hospital, HSR Layout Sector 2 (Mon–Sat, 10 AM–8 PM). Call +91-9980031006 or book via WhatsApp or the form on this page.",
                    },
                ]}
            />

            <FinalCtaStrip
                clinic={CLINIC}
                title="Don't Let Your Desk Win."
                subtitle="Get your neck properly assessed — book today."
            />

            <MobileStickyCTA clinic={CLINIC} />
            <LandingFooter clinic={CLINIC} />
        </main>
    );
}
