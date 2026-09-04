# August 2026 Page Plan — drnitinsunkuortho.com

_Researched 2026-08-12. Method: live-site crawl of every landing page + full blog index (87 slugs in `lib/data.ts`, 96 cards rendered), SERP sampling across 30+ commercial queries in the Attibele / Electronic City / HSR catchment, and page-inventory teardowns of Vijaya Ortho, City Ortho, and two solo-surgeon sites currently outranking you._

---

## The uncomfortable part, first

**Your last three batches shipped fine and are live. The problem is that new pages have almost no crawl path into them.**

All six pages from the July/August batches are live, indexed, and correctly configured — verified individually. But:

- The header nav (Home / About / Services / Treatments / Patient Stories / Gallery / Team / Blog / Contact) and the footer contain **zero links** to any of the 15 root-level landing pages.
- `/knee-pain-bangalore` does not link to `/knee-replacement-cost-bangalore`. `/back-pain-bangalore` links to no sibling landing page at all.
- Only `/foot-ankle-pain-bangalore`, `/slip-disc-treatment-bangalore` and `/arthritis-treatment-bangalore` cross-link properly. `/foot-ankle-pain-bangalore` is the best-wired page on the site — use it as the template.

Adding four more money pages to a site where money pages are reachable only via the sitemap is pouring water into a leaky bucket. **Fix the nav before the fourth new page ships, not after.**

And the July 4 item is now 5.5 weeks old and still untouched: **GBP verification, review drip, and directory citations.** For "orthopedic doctor Attibele"-class queries the map pack sits above every organic result you will ever earn. This has been deprioritised in every session since July 4. Say out loud whether it is happening this month or is formally dead, because the page plan below assumes it is *not* happening and is sized accordingly.

---

## Ship this month — 4 money pages

Ranked by (probability of ranking × commercial value), not by volume.

### 1. `/prp-regenerative-treatment-bangalore` — regenerative hub
**Confidence: [Likely] highest-probability win on the list.**

Your own blog post `/blog/prp-gfc-injection-cost-eligibility-bangalore` **already ranks page 1** for "PRP injection cost bangalore" — alongside two other solo-surgeon sites (orthodoctorbangalore.com, sbjortho.com) and no chain lock. Google already trusts this domain on the topic; you are converting an earned ranking into a converting page, which is materially easier than earning a new one.

It also closes the site's **largest orphan**: 13 regenerative/injection blog posts (PRP, GFC, BMAC, HA, ultrasound-guided, tendinopathy, shoulder injections, hip regenerative) currently funnel into four `/treatments/*` pages that are **all knee-scoped**. Shoulder, hip and tendon regenerative content has nowhere to go.

- Target: prp injection cost bangalore, prp treatment for knee bangalore, regenerative orthopedics bangalore, gfc injection bangalore, stem cell knee treatment bangalore
- Structure as a **parent hub** that links down to the four existing `/treatments/*` pages — do not duplicate their knee copy, or you cannibalise them
- Cash-pay, no insurance friction, high margin, repeat-visit modality
- Must include: PRP vs GFC vs BMAC vs HA comparison table, per-joint applicability (knee / shoulder / hip / tendon), eligibility criteria, honest "who this does not work for", price bands, session count

### 2. `/hip-replacement-cost-bangalore`
**Confidence: [Certain] on the gap, [Likely] on winnability.**

Nine cost-related blog posts on the site; exactly **one** cost money page. Three of those posts are hip (`hip-replacement-surgery-cost-india`, `hip-fracture-surgery-cost-india`, `total-hip-replacement-recovery-time-india`) plus `/services/hip-replacement` and `/hip-pain-bangalore` — all the supporting content exists, none of it converts.

A solo surgeon already ranks page 1 for this query in this city (doctorabhinandanpunit.com), which is the winnability proof. `/knee-replacement-cost-bangalore` is a working template — this is close to a clone with new numbers.

- Target: hip replacement cost in bangalore, total hip replacement cost, hip replacement surgery price bangalore
- Needs real cost bands from the hospital (implant type × room category), same structure as the knee page
- Cost queries are the highest-conversion query class in Indian private healthcare

### 3. `/knee-arthroscopy-bangalore`
**Confidence: [Certain] on the SERP composition.**

Page 1 for "knee arthroscopy surgeon bangalore" is **100% solo-surgeon sites** — orthocarebangalore.com, drpradyumna.com, drchiragthonse.com, drsrinivasjv.com, dryogeshk.com, sportsorthopedics.in. Zero hospital chains. Zero Practo/Lybrate/HexaHealth. That is the rarest thing in this vertical and it will not stay open forever.

You have the surgical credential, the Bengaluru FC association, a blog post (`what-is-knee-arthroscopy-and-when-is-it-needed`), plus `/services/meniscal-care` and `/services/acl-care`.

- Target: knee arthroscopy bangalore, arthroscopic knee surgery bangalore, keyhole knee surgery, arthroscopy cost bangalore (fold cost in — the standalone cost query is aggregator-locked, not worth its own page)
- **Cannibalisation watch:** this sits between `/services/meniscal-care` and `/services/acl-care`. Frame it as the *procedure* page (what happens, day-of, recovery timeline, cost) and let the service pages stay *condition*-framed. Link all three ways.

### 4. `/frozen-shoulder-treatment-bangalore`
**Confidence: [Certain] on the SERP, [Likely] on volume.**

Page 1 has **no Apollo, no Manipal, no Practo** — it is drpradyumna.com, drabhikollursclinic.com, orthobangalore.com, kneeandshoulder.net. Solo surgeons own it outright.

Shoulder is your third-largest blog cluster (12 posts) funnelling into one generic `/shoulder-pain-bangalore`. Frozen shoulder specifically has very high Indian volume (strong diabetic comorbidity) and one supporting post already written.

- Target: frozen shoulder treatment bangalore, frozen shoulder specialist, adhesive capsulitis doctor bangalore
- Angle competitors miss: the **diabetes link** — screen-and-treat framing, hydrodilatation / manipulation-under-anaesthesia decision points, realistic 12–18 month natural history
- Keep `/shoulder-pain-bangalore` as the broad parent and link down

---

## Ship this month — 6 knowledge pages

Each one is chosen to feed a money page above, not to chase volume in isolation.

| # | Post | Feeds | Why |
|---|---|---|---|
| 1 | **Steroid injection vs PRP: what each does, side effects, which joint** | PRP hub | Total void. PRP/GFC/HA/BMAC are all covered; the injection patients are most *anxious* about isn't. Highest-intent supporting piece for page #1. |
| 2 | **How long does a knee or hip replacement actually last?** | hip + knee cost pages | You cover implant *types* (`titanium-vs-johnson-vs-ceramic`, `types-of-total-knee-replacement`) but never the question patients actually ask. Direct cost-objection handler. |
| 3 | **Do I really need a knee arthroscopy? MRI findings vs symptoms** | arthroscopy page | Trust-first framing (you already have `asymptomatic-meniscus-tear` — extend it). Also absorbs "X-ray vs MRI" demand, another total void. |
| 4 | **Frozen shoulder and diabetes: why it happens and what changes about treatment** | frozen shoulder page | Zero coverage of diabetes × joints anywhere on the site, despite huge Indian relevance. This is the differentiator on that SERP. |
| 5 | **How cashless pre-authorisation actually works for orthopedic surgery** | `/insurance-cashless-orthopedic-treatment` | That money page is live with **no supporting content at all** — mirror image of the orphan problem. **Process only. Do NOT name insurers/TPAs/ESI/Ayushman until the hospital supplies the empanelment list** (standing rule from July). |
| 6 | **Vitamin D and calcium deficiency in Indian adults: the bone-health basics** | arthritis, fracture, hip pages | Biggest total void on the blog and one of the highest-volume health queries in India. Pure top-of-funnel / AI-answer bait. Alternate if you'd rather stay commercial: **"cervical spondylosis vs ordinary neck pain"** — patients search the term by name and find nothing on your site. |

---

## Fix alongside (small, cheap, blocking)

1. **Nav + footer crawl paths.** Add a "Conditions We Treat" nav dropdown and a "Locations" footer column covering all 15 root landing pages. Highest-ROI change in this entire document.
2. **Cross-link the two worst-wired pages.** `/knee-pain-bangalore` → `/knee-replacement-cost-bangalore`, `/arthritis-treatment-bangalore`, new arthroscopy page. `/back-pain-bangalore` → `/slip-disc-treatment-bangalore`, `/neck-pain-bangalore`.
3. **H1 whitespace bug** on `/knee-replacement-cost-bangalore` — `app/knee-replacement-cost-bangalore/page.tsx` line 190–193, two `<span className="block">` elements concatenate to `Knee ReplacementCost in Bangalore` in extracted text. One-character fix.
4. **Duplicate blog slug** — `advantages-and-disadvantages-of-robotic-knee-replacement` appears twice in `lib/data.ts`. Confirmed by grep. Delete one.
5. **Near-duplicate pairs to merge + 301** (cannibalising each other): `endoscopic-spine-surgery-in-india` / `endoscopic-spine-surgery-india`; `rotator-cuff-surgery-cost-in-india` / `rotator-cuff-surgery-cost-india`; `stress-fracture-treatment-india` / `stress-fracture-treatment-symptoms-causes-recovery`; `common-causes-of-meniscus-tears-in-active-adults` / `common-causes-of-meniscus-tears-and-acl-injuries`.
6. **[Guessing] Verify the sitemap in GSC.** `https://www.drnitinsunkuortho.com/sitemap.xml` returned unparseable binary to every fetch attempt from three different clients, and `/sitemap-0.xml` 404s. This is *probably* just a compression-encoding artifact of the fetching tools and fine for Googlebot — but given the pages are also unlinked from nav, sitemap discovery is currently the *only* crawl path, so a 30-second check in Search Console ("Sitemaps → status") is worth doing before anything else. If GSC says "Couldn't fetch", it's a real bug and everything above is moot until it's fixed.

---

## Backlog — next month, not this one

In priority order, all validated but deliberately cut to keep August shippable:

1. `/rotator-cuff-tear-treatment-bangalore` — 5 of 10 page-1 results are solo surgeons; two dedicated blog posts already exist
2. `/partial-knee-replacement-bangalore` — 6 of 9 page-1 results are solo surgeons; natural sibling to the knee cost page
3. `/spine-surgery-cost-bangalore` — SERP is 100% medical-tourism aggregators, **zero surgeons and zero hospital chains**; geo-localise the existing `/blog/spine-surgery-cost-in-india`
4. `/avn-hip-treatment-bangalore` — high surgical value, four solo surgeons already outranking Manipal
5. `/elbow-wrist-hand-pain-bangalore` — currently **404**; four orphaned posts (`elbow-pain-treatment`, `wrist-fracture-surgery-recovery-in-india`, tendonitis, tendinopathy) funnel nowhere. Tennis elbow + carpal tunnel fit the IT/desk-worker audience you already target. This is the only real page gap vs. Vijaya Ortho.
6. `/second-opinion-knee-replacement-bangalore` — nobody owns the query. Karnataka literally launched a state toll-free second-opinion helpline for knee/hip replacement, which is a documented public trust deficit you can position against. Low volume, high conversion, near-zero build cost.
7. `/orthopedic-doctor-bommasandra` — **at most one more geo page, and this is the one.** SERP is 100% aggregator with zero clinic sites, and Bommasandra is the industrial belt that feeds your fracture/trauma page. See the disagreement below.

---

## What NOT to build — and one active disagreement

**I disagree with expanding the geo footprint further, with exactly one exception.**

Research surfaced four uncontested geo targets (Bommasandra, Jigani, Anekal-standalone, Sarjapur Road) because City Ortho Clinic ranks on eight thin geo doorway pages. **The risk in copying them:** you already have five geo pages. Going to nine puts you squarely in doorway-page territory, which post-helpful-content Google demotes — and unlike City Ortho you have real content quality to lose. Their pages rank because nobody competes, not because the pattern is good.

**What I'd do instead:** ship Bommasandra only, because it's the industrial belt that actually feeds the Attibele hospital's trauma volume and you can write genuinely distinct content for it (factory injury, shift-worker OPD timing, ESI). Leave Jigani and Bannerghatta alone. Keep Anekal in-page on `/orthopedic-doctor-chandapura` as decided in July. Skip Sarjapur Road — Manipal has a physical campus there and Vijaya Ortho is literally on Attibele–Sarjapur Road.

**Hard nos:**
- **Robotic knee replacement** — page 1 is Apollo/Manipal/Fortis/Sakra. This is a hospital-capex query, not a surgeon query. Skip unless the hospital verifiably has the platform.
- **"Best orthopedic surgeon bangalore"** — chains and listicles only. Unwinnable, and the intent converts poorly anyway.
- **Standalone arthroscopy-cost and shoulder-surgery-cost pages** — aggregator walls (Credihealth/Practo/HexaHealth/Pristyn/Medfin). Put those numbers *inside* the procedure pages instead.
- **Osteoporosis and gout money pages** — rheumatology/endocrinology territory, low surgical intent. Cover them as *blog* posts only if at all.
- **A standalone plantar fasciitis page** — `/foot-ankle-pain-bangalore` already leads with plantar fasciitis. Building a separate page cannibalises a page you shipped eight days ago.
- **A standalone meniscus tear page — for now.** The SERP is genuinely soft (6 of 7 results are solo surgeons), but you have 11 meniscus blog posts *and* `/services/meniscal-care`. Decide first whether you're upgrading the service page or building new and 301'ing — don't create a third competing URL.

---

## Ship order and instrumentation

`/prp-regenerative-treatment-bangalore` → nav/footer fix → `/hip-replacement-cost-bangalore` → `/knee-arthroscopy-bangalore` → `/frozen-shoulder-treatment-bangalore`, with the six knowledge posts interleaved two at a time. Steady publishing beats a bulk drop.

Per-page checklist (unchanged from July): absolute title (avoid the template bug), `LandingFaq` + FAQPage/MedicalWebPage/BreadcrumbList schema, entry in `app/sitemap.ts` with bumped `SITE_CONTENT_UPDATED`, `blogSeoOverrides` + `CURATED_LINKS` + `TOPIC_LINKS` entries for posts, a unique `source=` on every form, `npx tsc --noEmit` before push, GSC re-index request on deploy. Decode HTML entities in `title`/`excerpt`/`category` — they render literally.

Do **not** request indexing for the five noindex ads pages (`/sports-orthopedic-doctor-hsr-layout`, `/total-knee-replacement-surgery`, `/orthopaedic-clinic-near-me`, `/bone-doctor-near-me`).

Expected timing: regenerative and arthroscopy pages should show impressions in 2–4 weeks (soft SERPs); the hip cost page will take 8–12 weeks against aggregators.

---

## Evidence — SERP composition for the four recommended pages

| Query | Page-1 makeup | Solo-surgeon sites ranking? | Difficulty |
|---|---|---|---|
| prp injection cost bangalore | starhealth, hexahealth, practo, **orthodoctorbangalore.com**, alleviatepainclinic, **your own blog post**, avekshahospital, **sbjortho.com** | Yes ×3 + you | LOW |
| hip replacement cost in bangalore | bajajfinservhealth, hexahealth ×3, lybrate, pristyncare, practo, **doctorabhinandanpunit.com**, hindujasindhihospital | Yes ×1 | MEDIUM |
| knee arthroscopy surgeon bangalore | orthocarebangalore, drpradyumna, drchiragthonse, drsrinivasjv, dryogeshk, sportsorthopedics.in | **Yes — 100% of page 1** | LOW |
| frozen shoulder treatment bangalore | drpradyumna, drabhikollursclinic, orthobangalore ×2, trustwellhospitals, bsiphysiotherapy, kneeandshoulder.net | Yes — dominant, no chains at all | LOW |

**Competitor note:** the real threat in your corridor is not Vijaya Ortho (13 condition pages, no cost/geo/procedure depth — a strict subset of what you already have) or City Ortho. It is **doctorabhinandanpunit.com**, a solo surgeon running a `{procedure} × {micro-locality}` template — including `/orthopedic-doctor-electronic-city/` and `/best-knee-replacement-surgeon-doctors-in-electronic-city-bangalore/`, directly against your Electronic City page. `thebonedoc.co.in` runs the same play. That template — procedure crossed with locality, not locality alone — is what actually works in this market, and it is the argument for procedure pages (#3 above) over more geo pages.
