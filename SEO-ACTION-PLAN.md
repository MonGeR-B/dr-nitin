# SEO & Organic Lead Generation — Audit Findings and Action Plan

_Audited: July 4, 2026. Scope: full codebase + live site (www.drnitinsunkuortho.com) + SERP checks._

## Verdict up front

The technical foundation of this site is stronger than 90% of doctor websites — schema graph, canonicals, content clusters, and conversion tracking are all in place. The site is not being held back by on-page basics. It is being held back by (a) a handful of live bugs that were quietly damaging SERP presentation and crawl signals — now fixed in code, and (b) off-site local SEO (Google Business Profile, reviews, citations), which no amount of code can substitute for. For "orthopedic doctor Attibele"-type queries, the map pack gets the clicks; the website's job is to convert and to support the profile. Split your effort accordingly.

## Fixed in this pass (deploy to take effect)

**1. Duplicated brand in live title tags (confirmed live bug).** Pages like `/orthopedic-doctor-attibele` were rendering `Orthopedic Doctor in Attibele, Bengaluru | Dr. Nitin Sunku | Dr. Nitin N Sunku` — the root layout's title template re-appended the brand to titles that already contained it. This looks broken in search results and wastes title characters. All five landing pages, the homepage, and the thank-you page now use `absolute` titles.

**2. Homepage title had no location keyword.** The most authoritative page on the site did not contain "Bangalore", "Attibele", or "HSR Layout" in its title. It is now `Orthopedic Doctor in Bangalore — Attibele & HSR Layout | Dr. Nitin N Sunku`, with a matching meta description. This is the single highest-leverage one-line change for the primary money queries.

**3. Wrong 301 redirect sending Attibele equity to the HSR page.** `/orthopedic-attibele` (the old ad URL) redirected to `/orthopedic-doctor-in-hsr-layout`. Any Attibele-intent backlinks and indexed entries were transferring signals to the wrong locality page. Now points to `/orthopedic-doctor-attibele`.

**4. Legacy WordPress URL 404ing while still indexed.** Google still lists `drnitinsunkuortho.com/why-are-sports-injuries-so-common/`, which returned a 404. Added a 301 to the live blog post. **Action for you:** open Search Console → Indexing → Pages → "Not found (404)" and send me the list; each legacy URL there deserves a redirect entry in `next.config.mjs`.

**5. Zero structured data on the five highest-intent pages.** The landing pages (`knee-pain-bangalore`, `back-pain-bangalore`, `sports-injury-doctor-bangalore`, `orthopedic-doctor-attibele`, `orthopedic-doctor-in-hsr-layout`) emitted no JSON-LD at all — no FAQPage, no breadcrumbs, no link to the Physician entity. Each now has a visible FAQ section (6 locally-flavored, medically conservative Q&As — cost, timings, areas served, surgery-vs-conservative) plus a `MedicalWebPage + BreadcrumbList + FAQPage` schema graph referencing the site-wide `#physician` node. This adds crawlable text depth to pages that were mostly design chrome, and targets People-Also-Ask / AI-answer surfaces.

**6. Sitemap `lastModified` was `new Date()` on every URL.** Every deploy claimed the entire site had just changed; Google learns to ignore lastmod signals from sites that do this. Static routes now use a stable date constant, blog routes use their actual publish dates. Bump `SITE_CONTENT_UPDATED` in `app/sitemap.ts` when you genuinely revise site-wide content.

## What actually moves rankings next — in priority order

**P0 — Google Business Profile (off-site, biggest lever, not code).** For "orthopedic doctor Attibele/near me" queries the local 3-pack sits above every organic result. Verify a GBP for *Dr. Nitin N Sunku — Orthopedic Doctor* at Raghava Multispeciality Hospital, Attibele (a practitioner listing, distinct from the hospital's own listing), categorized "Orthopedic surgeon", with the website field pointing to `/orthopedic-doctor-attibele` (not the homepage — track it with UTM). Same for HSR/Health Nest. Then reviews: a steady drip of 2–4 Google reviews per week (WhatsApp a review link after successful consultations) beats 50 reviews in one month. Competitor check: Dr. Prashanth B (Vijaya Ortho) currently owns the Attibele SERP largely on directory + GBP strength, not site quality.

**P1 — Directory consistency (citations).** Practo, Lybrate, Credihealth, HexaHealth, JustDial dominate page one for local ortho queries. Claim/complete profiles on each with the *exact same* name, address, phone as the website, linking back to the site. These are both citations (local ranking signal) and lead channels in their own right.

**P2 — One more catchment landing page: Electronic City.** The Attibele page already sells "20 minutes from Electronic City". Electronic City has far more search volume than Attibele and no dominant local ortho result. Build `/orthopedic-doctor-electronic-city` following the Attibele page pattern — but with genuinely distinct content (commute from Phase 1/2, corporate/IT-worker framing, insurance/desk-injury angle) so it's a real page, not a doorway. I can generate this on request.

**P3 — Blog internal linking to money pages.** 40+ blog posts exist. Each post should link contextually to the relevant treatment page AND the relevant landing page (e.g., every knee post → `/knee-pain-bangalore`). Check `lib/internal-links.ts` coverage; posts are currently the site's biggest under-used asset for funneling authority to conversion pages.

**P4 — Search Console hygiene (15 minutes, do this week).** (a) Export the 404 report → send for redirect mapping. (b) Confirm the `www` property is the one verified and that non-www redirects to www at the host level (Netlify domain settings) — the SERP shows some non-www legacy URLs. (c) Request re-indexing of the homepage and five landing pages after this deploy so the fixed titles/schema get picked up quickly.

**P5 — YouTube leverage.** The testimonial videos and the channel are an underused ranking asset. Add each video's landing-page URL in its YouTube description, and title videos with local keywords ("Knee replacement recovery — patient story, Attibele Bangalore").

## What I deliberately did not do

No `aggregateRating`/review schema on the site: self-serving review markup on your own pages is ignored by Google since 2019 and risks a manual action if the counts can't be substantiated. Reviews belong on the GBP. No hreflang: single-language, single-country site — `lang="en-IN"` already set, hreflang would add nothing. No changes to the "Best Orthopedic Doctor" hero claim, but be aware superlative medical advertising claims can attract NMC advertising-guideline scrutiny; "Trusted" is safer than "Best".

## Measuring it

Track in GSC over the next 6–8 weeks: impressions/position for "orthopedic doctor attibele", "knee pain specialist bangalore", "orthopedic doctor hsr layout"; FAQ rich-result impressions (Search Appearance → FAQ); and form/WhatsApp/call conversions per landing page in GA4 (already instrumented via `LandingPageTracker`).
