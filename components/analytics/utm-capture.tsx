"use client";

import { useEffect } from "react";
import { captureUTMParameters } from "@/lib/analytics";

/**
 * Site-wide first-touch attribution capture.
 *
 * Mounted once in the root layout so EVERY entry point captures acquisition
 * context — not just the landing pages that happen to render
 * `<LandingPageTracker />`. Without this, a visitor who arrives on a blog post
 * from a Google Ad and converts on /book-appointment stored nothing, and the
 * lead's only "source" was the hard-coded string on whichever form they used.
 *
 * `captureUTMParameters` is first-touch guarded and idempotent, so mounting it
 * here alongside LandingPageTracker is safe — the landing page's own call
 * simply reads back what was already stored.
 */
export function UtmCapture() {
    useEffect(() => {
        captureUTMParameters();
    }, []);

    return null;
}
