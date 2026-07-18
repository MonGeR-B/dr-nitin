import { FadeIn } from "@/components/animations/fade-in";
import { landingArticles } from "@/lib/landing-articles";

/**
 * Long-form educational section for the ads/local landing pages.
 *
 * Why this exists:
 * - The landing pages were rich in design chrome but light on unique, crawlable
 *   prose. For YMYL (medical) queries, genuine topical depth and E-E-A-T signal
 *   help rankings — but ONLY when the content is unique per page. Bulk-expanding
 *   shared sections across the 12 pages would create near-duplicate content,
 *   which is worse than thin content.
 * - So each page renders ONE distinct educational block, keyed by slug, placed
 *   below the booking form so the conversion path stays clean.
 *
 * Content lives in lib/landing-articles.ts (one payload per page slug).
 */
export function LandingArticle({ slug }: { slug: string }) {
    const content = landingArticles[slug];
    if (!content) return null;

    return (
        <section className="bg-gradient-to-br from-gray-50 via-blue-50/30 to-white py-14 md:py-20 overflow-hidden">
            <div className="container mx-auto px-4 max-w-3xl">
                <FadeIn>
                    <div className="mb-8">
                        <span className="inline-block text-xs font-bold text-blue-700 uppercase tracking-widest mb-3">
                            {content.eyebrow}
                        </span>
                        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-900 leading-tight break-words">
                            {content.heading}
                        </h2>
                    </div>
                </FadeIn>
                <FadeIn delay={0.1}>
                    <div className="space-y-4 text-base md:text-lg text-gray-700 leading-relaxed">
                        {content.blocks.map((block, i) => {
                            if ("h" in block) {
                                return (
                                    <h3
                                        key={i}
                                        className="text-lg md:text-xl font-bold text-gray-900 pt-4"
                                    >
                                        {block.h}
                                    </h3>
                                );
                            }
                            if ("list" in block) {
                                return (
                                    <ul key={i} className="space-y-2.5 pl-1">
                                        {block.list.map((item) => (
                                            <li key={item} className="flex gap-3">
                                                <span
                                                    aria-hidden
                                                    className="mt-2.5 w-1.5 h-1.5 rounded-full bg-blue-500 flex-shrink-0"
                                                />
                                                <span>{item}</span>
                                            </li>
                                        ))}
                                    </ul>
                                );
                            }
                            return <p key={i}>{block.p}</p>;
                        })}
                    </div>
                </FadeIn>
            </div>
        </section>
    );
}
