/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'ik.imagekit.io',
            },
            {
                protocol: 'https',
                hostname: 'images.unsplash.com',
            },
        ],
        // Allow locally-stored SVG headers used by the treatment cluster
        // blog posts. Sandboxed CSP keeps this safe.
        dangerouslyAllowSVG: true,
        contentDispositionType: 'attachment',
        contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    },
    async redirects() {
        return [
            // Old single-clinic ad landing page → the Attibele landing page.
            // Previously this pointed at /orthopedic-doctor-in-hsr-layout, which
            // sent Attibele-intent signals (ads, backlinks, indexed entries) to
            // the wrong locality page. /orthopedic-doctor-attibele now exists
            // and is the correct 301 target.
            {
                source: '/orthopedic-attibele',
                destination: '/orthopedic-doctor-attibele',
                permanent: true,
            },
            // Legacy WordPress-era URL still indexed in Google (confirmed via
            // SERP) that currently 404s and leaks link equity. Next.js matches
            // with or without trailing slash. Add more entries here as the GSC
            // "Not found (404)" report surfaces additional legacy paths.
            {
                source: '/why-are-sports-injuries-so-common',
                destination: '/blog/why-are-sports-injuries-so-common-and-how-do-we-treat-them',
                permanent: true,
            },
        ];
    },
};

export default nextConfig;
