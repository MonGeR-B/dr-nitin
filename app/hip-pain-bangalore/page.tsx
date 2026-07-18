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
    PersonStanding,
    AlertTriangle,
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
    title: { absolute: "Hip Pain Specialist in Bangalore | Dr. Nitin N Sunku" },
    description:
        "Hip arthritis, AVN, groin pain & elderly hip fractures — honest diagnosis and treatment in Bangalore, from physiotherapy to hip replacement. Book today.",
    alternates: { canonical: `${siteOrigin}/hip-pain-bangalore` },
    keywords: [
        "hip pain specialist Bangalore",
        "hip pain doctor Bangalore",
        "hip replacement surgeon Bangalore",
        "AVN hip treatment Bangalore",
        "avascular necrosis specialist Bangalore",
        "hip arthritis treatment Bangalore",
        "groin pain hip doctor Bangalore",
        "hip pain when standing from chair",
        "elderly hip fracture treatment Bangalore",
        "hip pain doctor HSR Layout",
    ],
    openGraph: {
        title: "Hip Pain Specialist in Bangalore — Dr. Nitin N Sunku",
        description:
            "Hip arthritis, AVN in young adults, groin pain and elderly hip fractures — honest diagnosis, conservative-first care, and hip replacement when genuinely needed.",
        url: `${siteOrigin}/hip-pain-bangalore`,
        type: "website",
    },
    robots: { index: true, follow: true },
};

const CLINIC = PRIMARY_CLINIC;
const PHONE = CLINIC.phone;
const PHONE_DIGITS = CLINIC.phoneDigits;
const WHATSAPP_MESSAGE =
    "Hi Dr. Nitin, I have hip pain and would like to book an appointment.";

const conditions = [
    { title: "Hip Arthritis (Osteoarthritis)", Icon: Activity },
    { title: "AVN / Avascular Necrosis", Icon: AlertTriangle },
    { title: "Groin & Front-of-Hip Pain", Icon: PersonStanding },
    { title: "Elderly Hip Fractures & Falls", Icon: Hospital },
    { title: "Trochanteric Bursitis (Outer Hip)", Icon: ShieldCheck },
    { title: "Stiffness & Reduced Movement", Icon: Users },
    { title: "Hip Pain Referred from the Spine", Icon: Stethoscope },
    { title: "Post-Replacement Follow-Up", Icon: Heart },
];

const avnPoints = [
    "Deep groin pain in a 25–50 year old, often worse with walking or crossing legs",
    "Risk factors include long-term steroid use and regular heavy alcohol intake — but many cases have neither",
    "X-rays can look normal early; MRI picks it up when it's still treatable conservatively",
    "Caught early, joint-preserving treatment can delay or avoid hip replacement",
];

const sellingPoints = [
    {
        Icon: Stethoscope,
        title: "Hip or Spine? Diagnosed Correctly",
        description:
            "A large share of 'hip pain' actually comes from the lower back, and vice versa. The examination distinguishes true hip-joint pain (usually felt in the groin) from referred pain — before anything is treated.",
    },
    {
        Icon: Award,
        title: "Fellowship-Trained Specialist",
        description:
            "Dr. Nitin is a fellowship-trained orthopedic & sports medicine specialist with 10+ years of experience treating hip, joint and sports conditions.",
    },
    {
        Icon: AlertTriangle,
        title: "AVN Caught Early, Not Late",
        description:
            "Avascular necrosis is the hip condition young adults miss — dismissed as a muscle pull until the femoral head collapses. Suspicious groin pain in a young patient gets taken seriously here.",
    },
    {
        Icon: Heart,
        title: "Conservative-First Philosophy",
        description:
            "Physiotherapy, activity modification, weight guidance and medication come first. Hip replacement is discussed when the joint is genuinely beyond preservation — and explained honestly when it is.",
    },
    {
        Icon: Hospital,
        title: "Fracture-to-Rehab Under One Roof",
        description:
            "For elderly hip fractures, Raghava Multispeciality Hospital provides X-ray, surgical fixation or replacement, and post-op care in one place — with a 24/7 emergency department.",
    },
    {
        Icon: Users,
        title: "Two Bengaluru Locations",
        description:
            "Consult at Raghava Multispeciality Hospital, Attibele, or Health Nest Hospital, HSR Layout — whichever is the easier drive for you.",
    },
];

export default function HipPainBangalorePage() {
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
                                    From Groin Pain to Hip Replacement
                                </span>

                                <h1 className="text-[2.5rem] sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-gray-900 leading-[1.05] tracking-tight mb-4 break-words">
                                    <span className="block">Hip Pain Specialist</span>
                                    <span className="block bg-gradient-to-r from-blue-700 via-blue-600 to-indigo-600 bg-clip-text text-transparent pb-1">
                                        in Bangalore
                                    </span>
                                </h1>

                                <p className="text-lg sm:text-xl md:text-2xl text-blue-800 font-semibold mb-4">
                                    Dr. Nitin N Sunku — Orthopedic &amp; Sports Medicine Specialist
                                </p>
                                <p className="text-base sm:text-lg text-gray-600 mb-6 max-w-xl leading-relaxed">
                                    Pain when standing up from a chair? A deep ache in the groin? Hip problems are frequently misread — blamed on the back, dismissed as a strain, or noticed only when arthritis is advanced. An accurate diagnosis early keeps more of your options open.
                                </p>

                                <div className="flex flex-wrap gap-2 mb-7">
                                    <span className="inline-flex items-center gap-1.5 bg-white/90 backdrop-blur border border-gray-200 rounded-full px-3 py-1.5 text-xs sm:text-sm font-medium text-gray-800 shadow-sm">
                                        <CheckCircle className="w-3.5 h-3.5 text-emerald-600" />
                                        Fellowship-Trained
                                    </span>
                                    <span className="inline-flex items-center gap-1.5 bg-white/90 backdrop-blur border border-gray-200 rounded-full px-3 py-1.5 text-xs sm:text-sm font-medium text-gray-800 shadow-sm">
                                        <CheckCircle className="w-3.5 h-3.5 text-emerald-600" />
                                        Replacement Only If Needed
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
                                        metadata={{ cta_type: "form_scroll", condition: "hip-pain" }}
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
                            <HeroImage alt="Dr. Nitin N Sunku — Hip Pain Specialist in Bangalore" />
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
                                — Hip Problems We Treat —
                            </span>
                            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-3 break-words">
                                Every Age,{" "}
                                <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                                    Every Hip Problem
                                </span>
                            </h2>
                            <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
                                From a young adult&apos;s AVN to a grandparent&apos;s fracture — diagnosed and treated properly.
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

            {/* ============= AVN SECTION (unique content) ============= */}
            <section className="py-14 md:py-20 bg-gradient-to-br from-blue-700 via-blue-800 to-indigo-800 text-white relative overflow-hidden">
                <div aria-hidden className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(circle at 2px 2px, white 1px, transparent 0)", backgroundSize: "32px 32px" }}></div>
                <div className="container mx-auto px-4 max-w-6xl relative z-10">
                    <FadeIn>
                        <div className="grid lg:grid-cols-5 gap-10 items-center">
                            <div className="lg:col-span-3">
                                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-5 leading-tight">
                                    Under 50 with Groin Pain? Rule Out AVN.
                                </h2>
                                <p className="text-base md:text-lg text-blue-100 leading-relaxed mb-5">
                                    Avascular necrosis (AVN) — loss of blood supply to the femoral head — is the hip condition that gets missed in young adults. It masquerades as a groin strain for months while the bone quietly weakens, and by the time an X-ray shows it clearly, joint-preserving options have narrowed. Caught early on MRI, it can often be managed to delay or avoid replacement entirely. If deep groin pain has persisted more than a few weeks, get it examined.
                                </p>
                                <div className="space-y-2.5">
                                    {avnPoints.map((point) => (
                                        <p key={point} className="flex gap-2.5 text-sm md:text-base text-blue-100 leading-relaxed">
                                            <CheckCircle className="w-4 h-4 text-blue-200 flex-shrink-0 mt-1" />
                                            {point}
                                        </p>
                                    ))}
                                </div>
                            </div>

                            <div className="lg:col-span-2">
                                <div className="bg-white/10 backdrop-blur border border-white/20 rounded-3xl p-7 md:p-8 text-center">
                                    <AlertTriangle className="w-12 h-12 mx-auto mb-4 text-blue-200" />
                                    <p className="text-2xl md:text-3xl font-bold leading-tight mb-2">Early Beats Late</p>
                                    <p className="text-base text-blue-100 leading-relaxed">In AVN, the stage at diagnosis largely decides the treatment options.</p>
                                    <div className="mt-6 pt-6 border-t border-white/20 grid grid-cols-3 gap-3 text-center">
                                        <div>
                                            <p className="text-xl font-bold">Early</p>
                                            <p className="text-[11px] text-blue-200 uppercase tracking-wider mt-1">Preserve</p>
                                        </div>
                                        <div>
                                            <p className="text-xl font-bold">Mid</p>
                                            <p className="text-[11px] text-blue-200 uppercase tracking-wider mt-1">Delay</p>
                                        </div>
                                        <div>
                                            <p className="text-xl font-bold">Late</p>
                                            <p className="text-[11px] text-blue-200 uppercase tracking-wider mt-1">Replace</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
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
                                Honest Answers About{" "}
                                <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                                    Your Hip
                                </span>
                            </h2>
                            <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto">
                                Six reasons patients across Bengaluru trust this practice with their hips.
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
                        <div className="max-w-4xl mx-auto mt-10 bg-gradient-to-br from-blue-50 via-white to-indigo-50 rounded-2xl p-6 md:p-8 border border-blue-100 shadow-sm">
                            <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                                Reading up first? See{" "}
                                <Link href="/blog/why-do-i-feel-pain-in-my-hip-when-standing-from-a-chair" className="text-blue-700 font-semibold hover:text-blue-900 underline underline-offset-2">
                                    why your hip hurts when standing from a chair
                                </Link>
                                ,{" "}
                                <Link href="/blog/natural-alternatives-to-hip-replacement" className="text-blue-700 font-semibold hover:text-blue-900 underline underline-offset-2">
                                    alternatives to hip replacement
                                </Link>
                                , or the full{" "}
                                <Link href="/services/hip-replacement" className="text-blue-700 font-semibold hover:text-blue-900 underline underline-offset-2">
                                    hip replacement service
                                </Link>
                                .
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
                                    Same-Day Appointments
                                </span>
                                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold mb-3 leading-tight break-words">
                                    Book Your Hip Assessment
                                </h2>
                                <p className="text-base md:text-lg text-blue-100 max-w-md mx-auto">
                                    The team will call you back within hours to confirm your slot at Attibele or HSR Layout.
                                </p>
                            </div>
                        </FadeIn>

                        <FadeIn delay={0.1}>
                            <div className="bg-white rounded-3xl shadow-2xl p-6 md:p-10 border border-white/50">
                                <BookingForm source="ads-hip-pain" />
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
                subheading="Hip assessment, joint-preserving treatment and replacement surgery — at whichever clinic suits you."
            />

            <LandingArticle slug="hip-pain-bangalore" />

            <LandingFaq
                pageName="Hip Pain Specialist in Bangalore"
                pagePath="/hip-pain-bangalore"
                aboutCondition="Hip pain"
                subheading="Straight answers about hip pain diagnosis and treatment with Dr. Nitin N Sunku."
                items={[
                    {
                        q: "How do I know if my pain is from the hip joint or the back?",
                        a: "True hip-joint pain is usually felt in the groin or the front of the thigh, and worsens with weight-bearing, stairs or rotating the leg. Pain over the buttock radiating down the leg more often comes from the lower back. The two are distinguished by clinical examination — treating the wrong one is a common reason 'hip pain' doesn't improve.",
                    },
                    {
                        q: "What is AVN of the hip and who gets it?",
                        a: "Avascular necrosis is the loss of blood supply to the ball of the hip joint, causing the bone to weaken and eventually collapse. It typically affects adults between 25 and 50. Long-term steroid use and heavy alcohol intake are known risk factors, but many cases occur without either. Early diagnosis on MRI matters enormously — early-stage AVN has joint-preserving options that late-stage AVN does not.",
                    },
                    {
                        q: "Can hip arthritis be managed without a replacement?",
                        a: "Often, yes — especially in early and moderate stages. Physiotherapy to strengthen the muscles around the hip, weight and activity guidance, and medication control symptoms for many patients for years. Replacement is discussed when pain and stiffness limit daily life despite proper conservative care, and the reasoning is explained honestly.",
                    },
                    {
                        q: "My elderly parent fell and can't put weight on their leg. What should we do?",
                        a: "Treat it as a suspected hip fracture: don't force them to walk, keep them comfortable, and bring them to hospital promptly — the casualty at Raghava Multispeciality Hospital, Attibele accepts injuries 24/7. Hip fractures in the elderly generally do best with early surgical treatment and early mobilisation.",
                    },
                    {
                        q: "How much does a hip consultation cost?",
                        a: "Typically ₹500–₹1,000, including clinical examination and a written treatment plan. Health insurance is accepted for procedures including hip replacement, with pre-authorisation support from the hospital team.",
                    },
                    {
                        q: "Where can I consult Dr. Nitin for hip pain?",
                        a: "At Raghava Multispeciality Hospital, Attibele (Mon–Sat, 10 AM–6 PM) or Health Nest Hospital, HSR Layout Sector 2 (Mon–Sat, 10 AM–8 PM). Call +91-9980031006 or book via WhatsApp or the form on this page.",
                    },
                ]}
            />

            <FinalCtaStrip
                clinic={CLINIC}
                title="Groin Pain Isn't Always a Strain."
                subtitle="Get your hip properly assessed — book today."
            />

            <MobileStickyCTA clinic={CLINIC} />
            <LandingFooter clinic={CLINIC} />
        </main>
    );
}
